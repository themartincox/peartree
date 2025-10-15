// src/lib/contentful.ts
import { createClient, type ContentfulClientApi, type EntryCollection, type Entry } from "contentful";
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
  client = null; // all calls return empty results
} else {
  if (!space || !accessToken) {
    // Fail-soft: do NOT throw at module init (can break route evaluation). Log and operate in mock mode.
    // eslint-disable-next-line no-console
    console.warn(
      `[contentful:init] Missing credentials (space=${String(!!space)} token=${String(!!accessToken)}). Operating in mock mode.`,
    );
    client = null;
  } else {
    client = createClient({
      space,
      environment,
      accessToken,
      host, // preview uses preview.contentful.com
      retryOnError: true,
    });
  }
}

// Concurrency limiter
const limiter = pLimit(Number(process.env.CONTENTFUL_CONCURRENCY ?? 3));

// Internal wrapper: respects flags and fails soft
const run = <T>(ctx: string, call: () => Promise<T>) =>
  limiter(async () => {
    if (flags.USE_MOCK || flags.FAST_BUILD) {
      // safe empty shape
      // @ts-expect-error – callers often expect { items: [] }
      return { items: [] } as T;
    }
    try {
      return await call();
    } catch (err) {
      // Never crash the build due to Contentful; return safe fallback
      // eslint-disable-next-line no-console
      console.warn(`[contentful:${ctx}] suppressed error`, (err as Error)?.message);
      // @ts-expect-error fallback shape
      return { items: [] } as T;
    }
  });

// Public helpers
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
// Utilities
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
// Domain helpers
// ────────────────────────────────────────────────────────────────────────────

/** Legacy: raw items for pages that expect full fields */
export async function fetchBlogPosts(opts?: number | { limit?: number }) {
  const limit = typeof opts === "number" ? opts : opts?.limit ?? 1000;

  // Default to your model id
  const typeId =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";

  // Your pages use "publishedDate"
  const dateField = process.env.CONTENTFUL_BLOG_DATE_FIELD || "publishedDate";

  const baseQuery: any = {
    content_type: typeId,
    limit,
    // IMPORTANT: no "select" here — downstream pages need subtitle, featuredImage, author, etc.
  };

  // Prefer date-based ordering; fall back if empty
  let res: any = await cfEntries(
    { ...baseQuery, order: [`-fields.${dateField}`, "-sys.updatedAt"] },
    "fetchBlogPosts:byDate"
  );
  if (!res?.items?.length) {
    res = await cfEntries(
      { ...baseQuery, order: ["-sys.updatedAt"] },
      "fetchBlogPosts:byUpdatedAt"
    );
  }

  return res?.items ?? [];
}

/** Normalized list for lightweight consumers (optional) */
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
  const typeId =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";
  const dateField = process.env.CONTENTFUL_BLOG_DATE_FIELD || "publishedDate";

  const res = await cfEntries<any>(
    {
      content_type: typeId,
      limit,
      order: [`-fields.${dateField}`, "-sys.updatedAt"],
      // select a lean set but include both possible image fields
      select:
        `fields.slug,fields.title,fields.excerpt,fields.${dateField},fields.date,` +
        `fields.featuredImage,fields.heroImage,sys.updatedAt`,
      locale: opts.locale,
    },
    "fetchContentfulPosts"
  );

  const items: Entry<any>[] = res?.items ?? [];

  const pickImage = (fields: any): any =>
    fields?.featuredImage ?? fields?.heroImage;

  const normalize = (e: Entry<any>): BlogPost | null => {
    const f = (e as any).fields ?? {};
    const slug = f.slug;
    const title = f.title;
    if (!slug || !title) return null;

    const img = pickImage(f);
    const imageUrl = getAssetUrl(Array.isArray(img) ? img[0] : img) || undefined;
    const date: string | undefined = f[dateField] ?? f.date ?? undefined;

    return {
      slug,
      title,
      excerpt: f.excerpt || "",
      image: imageUrl,
      date,
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

// Legacy aliases (compat)
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
  const typeId =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";
  const res: any = await cfEntries(
    { content_type: typeId, "fields.slug": slug, limit: 1 },
    `fetchBlogPostBySlug:${slug}`
  );
  return res?.items?.[0] ?? null;
}
