// /lib/contentful.ts
import 'server-only';

import type { BlogTemplate, LocationData, ServiceData } from '@/types/contentful';
import { SERVICE_TYPE, LOCATION_TYPE, TEMPLATE_TYPE } from '@/lib/contentTypes'

/**
 * ENV
 * - CONTENTFUL_SPACE_ID
 * - CONTENTFUL_ENVIRONMENT (default: "master")
 * - CONTENTFUL_DELIVERY_TOKEN
 * - CONTENTFUL_PREVIEW_TOKEN (optional)
 * - CONTENTFUL_USE_PREVIEW ("true" | "false") optional
 * - CONTENTFUL_LOCALE (optional, eg "en-GB")
 */

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';
const DELIVERY_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN!;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;
const USE_PREVIEW = (process.env.CONTENTFUL_USE_PREVIEW || 'false').toLowerCase() === 'true';
const LOCALE = process.env.CONTENTFUL_LOCALE; // e.g., "en-GB"

const HOST = USE_PREVIEW ? 'preview.contentful.com' : 'cdn.contentful.com';
const API_BASE = `https://${HOST}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

// Soft in-memory cache (best-effort only)
const cache = new Map<string, { expiry: number; data: unknown }>();
const TTL_SECONDS = 300;

function setCache<T>(key: string, data: T, ttl = TTL_SECONDS) {
  cache.set(key, { expiry: Date.now() + ttl * 1000, data });
}

function getCache<T>(key: string): T | null {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() > hit.expiry) {
    cache.delete(key);
    return null;
  }
  return hit.data as T;
}

function token() {
  return USE_PREVIEW ? PREVIEW_TOKEN! : DELIVERY_TOKEN!;
}

/** Build a fully qualified URL with query params */
function buildURL(path: string, search: Record<string, any> = {}) {
  const u = new URL(`${API_BASE}${path}`);
  Object.entries(search).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    if (Array.isArray(v)) v.forEach((vv) => u.searchParams.append(k, String(vv)));
    else u.searchParams.set(k, String(v));
  });
  if (LOCALE) u.searchParams.set('locale', LOCALE);
  return u.toString();
}

async function cfFetch<T>(path: string, search: Record<string, any> = {}, revalidateSeconds = 300): Promise<T> {
  const url = buildURL(path, search);

  const cached = getCache<T>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      // Next.js data cache (ISR-like semantics on fetch)
      next: { revalidate: revalidateSeconds },
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Contentful ${res.status} ${res.statusText} :: ${body}`);
    }

    const json = (await res.json()) as T;
    setCache(url, json);
    return json;
  } catch (err) {
    console.error('Contentful fetch error:', err);
    const stale = getCache<T>(url);
    if (stale) {
      console.warn('Returning stale cache due to fetch error');
      return stale;
    }
    throw err;
  }
}

/** Contentful collection shape (minimal) */
type CFItem<T> = { sys: { id: string; createdAt: string; updatedAt: string }; fields: T };
type CFCollection<T> = { items: Array<CFItem<T>>; total: number; limit: number; skip: number; includes?: any };

/** Fetch entries with pagination (handles >1000) */
async function getEntriesAll<T>(
  baseSearch: Record<string, any>
): Promise<Array<CFItem<T>>> {
  const limit = Math.min(1000, Number(baseSearch.limit) || 1000);
  let skip = 0;
  const acc: Array<CFItem<T>> = [];

  // First page
  const first = await cfFetch<CFCollection<T>>('/entries', { ...baseSearch, limit, skip });
  acc.push(...first.items);

  // More pages?
  const total = first.total ?? acc.length;
  skip += first.items.length;

  while (skip < total) {
    const page = await cfFetch<CFCollection<T>>('/entries', { ...baseSearch, limit, skip });
    acc.push(...page.items);
    if (!page.items.length) break;
    skip += page.items.length;
  }
  return acc;
}

/** Map CF items to typed app models (flatten fields + sys) */
function flatten<T extends object>(items: Array<CFItem<T>>): Array<T & { sys: CFItem<T>['sys'] }> {
  return items.map((it) => ({ sys: it.sys, ...(it.fields as T) }));
}

/* ===========================
 * Public fetchers (typed)
 * ===========================
 */

export async function fetchAllServices(): Promise<ServiceData[]> {
  try {
    const items = await getEntriesAll<ServiceData>({
      content_type: SERVICE_TYPE,
      order: '-sys.createdAt',
    });
    return flatten(items);
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
}

export async function fetchAllLocations(): Promise<LocationData[]> {
  try {
    const items = await getEntriesAll<LocationData>({
      content_type: LOCATION_TYPE,
      order: '-fields.population',
    });
    return flatten(items);
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return [];
  }
}

export const fetchServiceBySlug = (slug: string) => fetchEntryBySlug<any>(SERVICE_TYPE, slug);
export const fetchLocationBySlug = (slug: string) => fetchEntryBySlug<any>(LOCATION_TYPE, slug);

/**
 * Priority helpers
 * - NOTE: Supports either tier "major" (recommended) or legacy "A"
 */
export async function fetchPriorityServices(): Promise<ServiceData[]> {
  const all = await fetchAllServices();
  return all
    .filter((s) => !!s.priority || (s.popularity ?? 0) > 50)
    .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
}

export async function fetchPriorityLocations(): Promise<LocationData[]> {
  const all = await fetchAllLocations();
  return all
    .filter((l) => (l as any).tier === 'major' || (l as any).tier === 'A' || (l.population ?? 0) > 20000)
    .sort((a, b) => (b.population ?? 0) - (a.population ?? 0));
}

/** Fetch a single entry by slug (flattened) */
export async function fetchEntryBySlug<T = any>(
  contentType: string,
  slug: string
): Promise<(T & { sys: { id: string; createdAt: string; updatedAt: string } }) | null> {
  try {
    const data = await cfFetch<CFCollection<T>>('/entries', {
      content_type: contentType,
      'fields.slug': slug,
      limit: 1,
    });
    const item = data.items?.[0];
    if (!item) return null;
    return { sys: item.sys, ...(item.fields as T) };
  } catch (error) {
    console.error(`Failed to fetch ${contentType} by slug ${slug}:`, error);
    return null;
  }
}

/** Blog template (slug must be "service-location") */
export async function fetchBlogTemplate(): Promise<BlogTemplate | null> {
  return fetchEntryBySlug<BlogTemplate>(TEMPLATE_TYPE, 'service-location');
}

/** Rich text -> plain text (preserve basic line breaks & lists) */
export function extractTextFromRichText(rich: any): string {
  if (!rich || typeof rich !== 'object') return '';

  try {
    const lines: string[] = [];

    const walk = (node: any) => {
      if (!node) return;
      if (node.nodeType === 'text') {
        if (node.value) lines.push(node.value);
        return;
      }
      const content: any[] = Array.isArray(node.content) ? node.content : [];
      content.forEach(walk);

      // Add breaks for block-level nodes
      if (
        node.nodeType === 'paragraph' ||
        node.nodeType === 'heading-1' ||
        node.nodeType === 'heading-2' ||
        node.nodeType === 'heading-3' ||
        node.nodeType === 'list-item'
      ) {
        lines.push('\n');
      }
    };

    walk(rich);
    return lines
      .join('')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  } catch (error) {
    console.error('Error extracting text from rich text:', error);
    return '';
  }
}

/** Fill {{service}}, {{suburb}}, {{city}} placeholders safely */
export function fillTemplate(
  tpl: string,
  ctx: { service: string; suburb: string; city?: string }
): string {
  if (!tpl || typeof tpl !== 'string') return '';
  const safe = (v: string | undefined, fb: string) => (v && v.trim() ? v : fb);

  return tpl
    .replace(/\{\{\s*service\s*\}\}/gi, safe(ctx.service, 'Dental Care'))
    .replace(/\{\{\s*suburb\s*\}\}/gi, safe(ctx.suburb, 'your area'))
    .replace(/\{\{\s*city\s*\}\}/gi, safe(ctx.city, 'Nottingham'));
}

/** Replace placeholders inside a Contentful rich text document (deep copy + string replace) */
export function replacePlaceholdersInRichText(doc: any, values: {
  service?: string
  suburb?: string
  city?: string
  reviewsCount?: number
  reviewsRating?: number
  membershipUrl?: string
  contactUrl?: string
  bookingUrl?: string
}) {
  if (!doc || typeof doc !== 'object') return doc
  const clone = JSON.parse(JSON.stringify(doc))

  const replacer = (s: string) =>
    s
      .replace(/\{\{\s*service\s*\}\}/gi, values.service?.trim() || 'Dental Care')
      .replace(/\{\{\s*suburb\s*\}\}/gi, values.suburb?.trim() || 'your area')
      .replace(/\{\{\s*city\s*\}\}/gi, values.city?.trim() || 'Nottingham')
      .replace(/\{\{\s*reviewsCount\s*\}\}/gi, values.reviewsCount ? String(values.reviewsCount) : '500+')
      .replace(/\{\{\s*reviewsRating\s*\}\}/gi, values.reviewsRating ? String(values.reviewsRating) : '5')
      .replace(/\{\{\s*membershipUrl\s*\}\}/gi, values.membershipUrl || '/membership')
      .replace(/\{\{\s*contactUrl\s*\}\}/gi, values.contactUrl || '/contact')
      .replace(/\{\{\s*bookingUrl\s*\}\}/gi, values.bookingUrl || '/book')

  const walk = (node: any) => {
    if (!node) return
    if (node.nodeType === 'text' && typeof node.value === 'string') {
      node.value = replacer(node.value)
    }
    const content: any[] = Array.isArray(node.content) ? node.content : []
    content.forEach(walk)
  }

  walk(clone)
  return clone
}

/** Ping the API for sanity */
export async function contentfulHealthCheck(): Promise<boolean> {
  try {
    await cfFetch('/content_types', {}, 60);
    return true;
  } catch (error) {
    console.error('Contentful health check failed:', error);
    return false;
  }
}

/** Utility for other content types (flattened, with pagination) */
export async function fetchMultipleByType<T>(contentType: string, limit = 1000): Promise<(T & { sys: any })[]> {
  try {
    const items = await getEntriesAll<T>({ content_type: contentType, limit });
    return flatten(items);
  } catch (error) {
    console.error(`Failed to fetch ${contentType}:`, error);
    return [];
  }
}
