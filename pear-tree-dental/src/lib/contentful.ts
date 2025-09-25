// src/lib/contentful.ts
import { createClient, ContentfulClientApi, EntryCollection, Entry } from "contentful";
import pLimit from "p-limit";

/** ───────────────────────────────────────────────────────────────────────────
 *  Flags: flip these via env to keep builds green
 *  FAST_BUILD=true      → skip pre-render data fetching (return empty results)
 *  USE_MOCK_DATA=true   → short-circuit all Contentful calls (empty/stub)
 *  CONTENTFUL_USE_PREVIEW=true → use preview host/token if provided
 *  ───────────────────────────────────────────────────────────────────────── */
export const flags = {
  FAST_BUILD: process.env.FAST_BUILD === "true",
  USE_MOCK: process.env.USE_MOCK_DATA === "true",
  USE_PREVIEW:
    process.env.CONTENTFUL_USE_PREVIEW === "true" ||
    process.env.NEXT_PUBLIC_CONTENTFUL_USE_PREVIEW === "true",
};

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

// Prefer explicit PREVIEW token; allow ACCESS_TOKEN alias for preview
const previewToken =
  process.env.CONTENTFUL_PREVIEW_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;
const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

const accessToken = flags.USE_PREVIEW ? previewToken : deliveryToken;
const host = flags.USE_PREVIEW ? "preview.contentful.com" : "cdn.contentful.com";

// ── Build a client only when we actually intend to call Contentful ──────────
let client: ContentfulClientApi | null = null;

if (flags.USE_MOCK || flags.FAST_BUILD) {
  // No client in mock/fast mode (all calls return empty results)
  client = null;
} else {
  // In normal mode, enforce config early
  if (!space) throw new Error("CONTENTFUL_SPACE_ID is not set");
  if (!accessToken) {
    throw new Error(
      `Missing Contentful token: set ${
        flags.USE_PREVIEW
          ? "CONTENTFUL_PREVIEW_TOKEN (or CONTENTFUL_ACCESS_TOKEN)"
          : "CONTENTFUL_DELIVERY_TOKEN"
      }`
    );
  }

  client = createClient({
    space,
    environment,
    accessToken,
    host, // preview uses preview.contentful.com
    retryOnError: true,
  });
}

// Concurrency limiter
const limiter = pLimit(Number(process.env.CONTENTFUL_CONCURRENCY ?? 3));

// Internal wrapper: respects flags and fails soft
const run = <T>(ctx: string, call: () => Promise<T>) =>
  limiter(async () => {
    // Short-circuit in mock/fast modes
    if (flags.USE_MOCK || flags.FAST_BUILD) {
      // Return a safe empty-shape result
      // @ts-expect-error – callers often expect shape { items: [] } or null
      return ({ items: [] } as T);
    }
    try {
      return await call();
    } catch (_err) {
      // Never crash the build due to Contentful; return safe fallback
      // eslint-disable-next-line no-console
      console.warn(`[contentful:${ctx}] suppressed error`);
      // @ts-expect-error fallback shape
      return ({ items: [] } as T);
    }
  });

// Public helpers (kept compatible with your codebase)
export const cfEntries = <T>(q: any, ctx = "entries") =>
  run<EntryCollection<T>>(ctx, () => client!.getEntries<T>(q));

export const cfEntry = <T>(id: string, ctx = `entry:${id}`) =>
  run<T | null>(ctx, async () => {
    if (!client) return null as any;
    try {
      return await client.getEntry<T>(id);
    } catch {
      return null as any;
    }
  });

// ────────────────────────────────────────────────────────────────────────────
// Utilities (unchanged)
// ────────────────────────────────────────────────────────────────────────────
export function fillTemplate(tpl: string, params: Record<string, string | number>) {
  if (!tpl) return tpl;
  return tpl.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_, k) => String(params?.[k] ?? ""));
}

type RichNode =
  | { nodeType?: string; value?: string; content?: RichNode[] }
  | null
  | undefined;

export function extractTextFromRichText(doc: RichNode): string {
  let out = "";
  const walk = (n: RichNode) => {
    if (!n) return;
    if (typeof (n as any).value === "string") out += (n as any).value;
    if (Array.isArray((n as any).content)) (n as any).content.forEach(walk);
  };
  walk(doc);
  return out.trim();
}

export function replacePlaceholdersInRichText(doc: any, params: Record<string, string | number>) {
  const rep = (s: string) => fillTemplate(s, params);
  const walk = (n: any): any => {
    if (!n) return n;
    const node = Array.isArray(n) ? { content: n } : n;
    if (node.value && typeof node.value === "string") node.value = rep(node.value);
    if (Array.isArray(node.content)) node.content = node.content.map(walk);
    return n;
  };
  return (globalThis as any).structuredClone
    ? structuredClone(doc)
    : JSON.parse(JSON.stringify(doc));
}

export function getAssetUrl(asset: any): string | null {
  const url = asset?.fields?.file?.url || asset?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `https:${url}`;
}

export async function contentfulHealthCheck(): Promise<boolean> {
  if (flags.USE_MOCK || flags.FAST_BUILD) return true;
  try {
    await cfEntries({ limit: 1, select: "sys.id" }, "health");
    return true;
  } catch {
    return false;
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Domain helpers (kept; now plus a normalized fetchContentfulPosts)
// ────────────────────────────────────────────────────────────────────────────

/** Legacy: raw items (kept for compatibility) */
export async function fetchBlogPosts(opts?: number | { limit?: number }) {
  const limit = typeof opts === "number" ? opts : opts?.limit ?? 1000;
  const typeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || "blogPost";
  const res: any = await cfEntries(
    {
      content_type: typeId,
      limit,
      order: ["-fields.date", "-sys.updatedAt"],
      select:
        "fields.slug,fields.title,fields.excerpt,fields.date,fields.heroImage,sys.updatedAt",
    },
    "fetchBlogPosts"
  );
  return res?.items ?? [];
}

/** NEW: normalized posts for your static-first/dynamic blog hub */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  updatedAt?: string;
};

export async function fetchContentfulPosts(
  opts: { limit?: number; locale?: string } = {}
): Promise<BlogPost[]> {
  const limit = Math.max(1, Math.min(opts.limit ?? 12, 100));
  const typeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || "blogPost";

  // Ask only for fields we need to keep payloads lean
  const res = await cfEntries<any>(
    {
      content_type: typeId,
      limit,
      order: ["-fields.date", "-sys.updatedAt"],
      select:
        "fields.slug,fields.title,fields.excerpt,fields.date,fields.heroImage,sys.updatedAt",
      locale: opts.locale, // optional; default locale if omitted
    },
    "fetchContentfulPosts"
  );

  const items: Entry<any>[] = res?.items ?? [];

  const mapImage = (entry: any): string | undefined => {
    // heroImage can be an Asset or an array (depending on model)
    const asset = Array.isArray(entry?.fields?.heroImage)
      ? entry.fields.heroImage[0]
      : entry?.fields?.heroImage;
    const url = getAssetUrl(asset);
    return url || undefined;
  };

  const normalize = (e: Entry<any>): BlogPost | null => {
    const slug = e?.fields?.slug;
    const title = e?.fields?.title;
    if (!slug || !title) return null;

    return {
      slug,
      title,
      excerpt: e?.fields?.excerpt || "",
      image: mapImage(e),
      date: e?.fields?.date ?? undefined,
      updatedAt: (e as any)?.sys?.updatedAt ?? undefined,
    };
  };

  return items.map(normalize).filter(Boolean) as BlogPost[];
}

export async function fetchServiceBySlug(slug: string) {
  const typeId =
    process.env.SERVICE_TYPE_ID || process.env.CONTENTFUL_SERVICE_TYPE_ID || "service";
  const res: any = await cfEntries(
    { content_type: typeId, "fields.slug": slug, limit: 1 },
    `fetchServiceBySlug:${slug}`
  );
  return res?.items?.[0] ?? null;
}

export async function fetchLocationBySlug(slug: string) {
  const typeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || "location";
  const res: any = await cfEntries(
    { content_type: typeId, "fields.slug": slug, limit: 1 },
    `fetchLocationBySlug:${slug}`
  );
  return res?.items?.[0] ?? null;
}

export async function fetchAllServices(select?: string) {
  const typeId =
    process.env.SERVICE_TYPE_ID || process.env.CONTENTFUL_SERVICE_TYPE_ID || "service";
  const res: any = await cfEntries(
    { content_type: typeId, select: select || "fields.slug,fields.name", limit: 1000 },
    "fetchAllServices"
  );
  return res?.items ?? [];
}

export async function fetchAllLocations(select?: string) {
  const typeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || "location";
  const res: any = await cfEntries(
    {
      content_type: typeId,
      select: select || "fields.slug,fields.suburb,fields.city",
      limit: 1000,
    },
    "fetchAllLocations"
  );
  return res?.items ?? [];
}

export async function fetchPriorityServices() {
  const prim = await cfEntries<any>(
    {
      content_type:
        process.env.SERVICE_TYPE_ID || process.env.CONTENTFUL_SERVICE_TYPE_ID || "service",
      "fields.priority": true,
      limit: 100,
    },
    "fetchPriorityServices"
  );
  return (prim?.items?.length ? prim.items : await fetchAllServices()) || [];
}

export async function fetchPriorityLocations() {
  const prim = await cfEntries<any>(
    {
      content_type: process.env.CONTENTFUL_LOCATION_TYPE_ID || "location",
      "fields.priority": true,
      limit: 100,
    },
    "fetchPriorityLocations"
  );
  return (prim?.items?.length ? prim.items : await fetchAllLocations()) || [];
}

export async function fetchBlogTemplate(slug?: string) {
  const typeId = process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID || "blogTemplate";
  const query: any = { content_type: typeId, limit: 1 };
  if (slug) query["fields.slug"] = slug;
  const res: any = await cfEntries(query, `fetchBlogTemplate:${slug || "first"}`);
  return res?.items?.[0] ?? null;
}

// Legacy aliases (unchanged API)
export async function getEntries<T = any>(query: any, ctx = "getEntries") {
  return cfEntries<T>(query, ctx);
}
export async function getEntry<T = any>(id: string, ctx = `getEntry:${id}`) {
  return cfEntry<T>(id, ctx);
}
export function getEntryField<T = any>(entry: any, field: string): T | null {
  return entry?.fields?.[field] ?? null;
}
export async function fetchBlogPostBySlug(slug: string) {
  const typeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || "blogPost";
  const res: any = await cfEntries(
    { content_type: typeId, "fields.slug": slug, limit: 1 },
    `fetchBlogPostBySlug:${slug}`
  );
  return res?.items?.[0] ?? null;
}