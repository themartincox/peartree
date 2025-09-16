import { createClient } from 'contentful'
import pLimit from 'p-limit'

const usePreview =
  process.env.CONTENTFUL_USE_PREVIEW === 'true' ||
  process.env.NEXT_PUBLIC_CONTENTFUL_USE_PREVIEW === 'true'

const space = process.env.CONTENTFUL_SPACE_ID!
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master'

// Prefer explicit PREVIEW token if you have it, otherwise allow ACCESS_TOKEN alias
const previewToken =
  process.env.CONTENTFUL_PREVIEW_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN
const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN

const accessToken = usePreview ? previewToken : deliveryToken
const host = usePreview ? 'preview.contentful.com' : 'cdn.contentful.com'

if (!space) throw new Error('CONTENTFUL_SPACE_ID is not set')
if (!accessToken) {
  throw new Error(
    `Missing Contentful token: set ${
      usePreview ? 'CONTENTFUL_PREVIEW_TOKEN (or CONTENTFUL_ACCESS_TOKEN)' : 'CONTENTFUL_DELIVERY_TOKEN'
    }`
  )
}

const client = createClient({
  space,
  environment,
  accessToken,
  host,              // 👈 critical: preview uses preview.contentful.com
  retryOnError: true
})

const limit = pLimit(Number(process.env.CONTENTFUL_CONCURRENCY ?? 3))
const cf = <T>(ctx: string, call: () => Promise<T>) => limit(call)

export const cfEntries = <T>(q: any, ctx = 'entries') => cf(ctx, () => client.getEntries<T>(q))
export const cfEntry  = <T>(id: string, ctx = `entry:${id}`) => cf(ctx, () => client.getEntry<T>(id))

// --- BEGIN COMPAT SHIM FOR LEGACY IMPORTS ---
// Assumes you already have working cfEntries / cfEntry helpers defined above.
// If not, uncomment the minimal versions below:

/*
import { createClient } from 'contentful'
import pLimit from 'p-limit'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: (process.env.CONTENTFUL_USE_PREVIEW === 'true'
    ? process.env.CONTENTFUL_ACCESS_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN)!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  retryOnError: true
})
const limit = pLimit(Number(process.env.CONTENTFUL_CONCURRENCY ?? 3))
const cf = <T>(ctx: string, call: () => Promise<T>) => limit(async () => call())
export const cfEntries = <T>(q: any, ctx = 'entries') => cf(ctx, () => client.getEntries<T>(q))
export const cfEntry  = <T>(id: string, ctx = `entry:${id}`) => cf(ctx, () => client.getEntry<T>(id))
*/

// Utility: simple token replacement: "{{key}}"
export function fillTemplate(tpl: string, params: Record<string, string | number>) {
  if (!tpl) return tpl
  return tpl.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_, k) => String(params?.[k] ?? ''))
}

// Utility: plain-text extraction from Contentful Rich Text (very safe)
type RichNode = { nodeType?: string; value?: string; content?: RichNode[] } | null | undefined
export function extractTextFromRichText(doc: RichNode): string {
  let out = ''
  const walk = (n: RichNode) => {
    if (!n) return
    if (typeof n.value === 'string') out += n.value
    if (Array.isArray(n.content)) n.content.forEach(walk)
  }
  walk(doc)
  return out.trim()
}

// Utility: replace placeholders inside Rich Text text nodes
export function replacePlaceholdersInRichText(doc: any, params: Record<string, string | number>) {
  const rep = (s: string) => fillTemplate(s, params)
  const walk = (n: any): any => {
    if (!n) return n
    const node = Array.isArray(n) ? { content: n } : n
    if (node.value && typeof node.value === 'string') node.value = rep(node.value)
    if (Array.isArray(node.content)) node.content = node.content.map(walk)
    return n
  }
  return walk(structuredClone ? structuredClone(doc) : JSON.parse(JSON.stringify(doc)))
}

// Assets: get https URL from Contentful asset
export function getAssetUrl(asset: any): string | null {
  const url = asset?.fields?.file?.url || asset?.url
  if (!url) return null
  return url.startsWith('http') ? url : `https:${url}`
}

// Health check
export async function contentfulHealthCheck(): Promise<boolean> {
  try {
    await cfEntries({ limit: 1, select: 'sys.id' }, 'health')
    return true
  } catch {
    return false
  }
}

// Blog posts (patient education)
export async function fetchBlogPosts(opts?: number | { limit?: number }) {
  const limit = typeof opts === 'number' ? opts : opts?.limit ?? 1000
  const typeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || 'blogPost'
  const res: any = await cfEntries(
    { content_type: typeId, limit, order: '-sys.updatedAt' },
    'fetchBlogPosts'
  )
  return res.items ?? []
}

// Services / Locations
export async function fetchServiceBySlug(slug: string) {
  const typeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'service'
  const res: any = await cfEntries(
    { content_type: typeId, 'fields.slug': slug, limit: 1 },
    `fetchServiceBySlug:${slug}`
  )
  return res.items?.[0] ?? null
}
export async function fetchLocationBySlug(slug: string) {
  const typeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'location'
  const res: any = await cfEntries(
    { content_type: typeId, 'fields.slug': slug, limit: 1 },
    `fetchLocationBySlug:${slug}`
  )
  return res.items?.[0] ?? null
}
export async function fetchAllServices(select?: string) {
  const typeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'service'
  const res: any = await cfEntries(
    { content_type: typeId, select: select || 'fields.slug,fields.name', limit: 1000 },
    'fetchAllServices'
  )
  return res.items ?? []
}
export async function fetchAllLocations(select?: string) {
  const typeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'location'
  const res: any = await cfEntries(
    { content_type: typeId, select: select || 'fields.slug,fields.suburb,fields.city', limit: 1000 },
    'fetchAllLocations'
  )
  return res.items ?? []
}

// Priority lists
export async function fetchPriorityServices() {
  const typeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'service'
  const res: any = await cfEntries(
    { content_type: typeId, 'fields.priority': true, limit: 100 },
    'fetchPriorityServices'
  )
  return (res.items?.length ? res.items : await fetchAllServices()) || []
}
export async function fetchPriorityLocations() {
  const typeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'location'
  const res: any = await cfEntries(
    { content_type: typeId, 'fields.priority': true, limit: 100 },
    'fetchPriorityLocations'
  )
  return (res.items?.length ? res.items : await fetchAllLocations()) || []
}

// Blog template
export async function fetchBlogTemplate(slug?: string) {
  const typeId = process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID || 'blogTemplate'
  const query: any = { content_type: typeId, limit: 1 }
  if (slug) query['fields.slug'] = slug
  const res: any = await cfEntries(query, `fetchBlogTemplate:${slug || 'first'}`)
  return res.items?.[0] ?? null
}

// === Legacy aliases for older imports ===
export async function getEntries<T = any>(query: any, ctx = 'getEntries') {
  return cfEntries<T>(query, ctx)
}
export async function getEntry<T = any>(id: string, ctx = `getEntry:${id}`) {
  return cfEntry<T>(id, ctx)
}
export function getEntryField<T = any>(entry: any, field: string): T | null {
  return entry?.fields?.[field] ?? null
}
export async function fetchBlogPostBySlug(slug: string) {
  const typeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || 'blogPost'
  const res: any = await cfEntries(
    { content_type: typeId, 'fields.slug': slug, limit: 1 },
    `fetchBlogPostBySlug:${slug}`
  )
  return res.items?.[0] ?? null
}
// --- END COMPAT SHIM ---