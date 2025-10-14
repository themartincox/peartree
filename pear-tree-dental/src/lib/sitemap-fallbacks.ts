import path from 'node:path'
import { promises as fs } from 'node:fs'
import { fallbackCategories, fallbackFeaturedTreatments, getRegisteredCategoryFallbackSlugs, getRegisteredTreatmentFallbackPairs } from '@/lib/service-fallbacks'

export type SimpleSitemapUrl = { url: string; lastModified?: string | Date; changeFrequency?: 'weekly'|'monthly'|'yearly'; priority?: number }

// Collect static App Router routes (page.tsx) that are not dynamic ([...]) or special groups (() or @)
export async function collectAppStaticRoutes(appDir = path.join(process.cwd(), 'src', 'app')): Promise<SimpleSitemapUrl[]> {
  const results: string[] = []

  async function walk(cur: string, parts: string[]) {
    let entries: fs.Dirent[] = []
    try {
      entries = await fs.readdir(cur, { withFileTypes: true })
    } catch {
      return
    }

    // Filter for page file in this directory
    const page = entries.find((e) => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name))
    if (page) {
      const hasDynamic = parts.some((p) => p.includes('[') || p.includes(']') || p.startsWith('(') || p.startsWith('@'))
      if (!hasDynamic) {
        const segs = parts.filter((p) => p && !p.startsWith('(') && !p.startsWith('@'))
        const route = '/' + segs.join('/')
        results.push(route === '//' ? '/' : route)
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const name = entry.name
      if (name.startsWith('.')) continue
      // Skip build/system dirs
      if (['api','_next'].includes(name)) continue

      await walk(path.join(cur, name), [...parts, name])
    }
  }

  await walk(appDir, [])

  // Deduplicate and prune obviously non-canonical paths if needed
  const dedup = Array.from(new Set(results))
  // Optional: filter out noisy internal pages if any
  const filtered = dedup
    .filter((r) => !r.startsWith('/blog/notinuse'))

  const now = new Date()
  return filtered.map<SimpleSitemapUrl>((r) => ({ url: `https://peartree.dental${r}`, lastModified: now, changeFrequency: 'monthly', priority: r === '/' ? 1 : r.split('/').length <= 2 ? 0.8 : 0.5 }))
}

// Build service fallback routes from in-repo fallbacks
export function collectFallbackServiceRoutes(): SimpleSitemapUrl[] {
  const urls: SimpleSitemapUrl[] = []
  const base = 'https://peartree.dental'
  const now = new Date()

  // categories
  for (const c of fallbackCategories) {
    if (!c?.slug) continue
    urls.push({ url: `${base}/services/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  }

  // treatments (featured)
  for (const [cat, treatments] of fallbackFeaturedTreatments.entries()) {
    for (const t of treatments) {
      const parent = t.parent?.slug || cat
      if (!parent || !t.slug) continue
      urls.push({ url: `${base}/services/${parent}/${t.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })
    }
  }

  // Explicitly include key nested veneer variants as separate pages
  const veneerParent = 'cosmetic-dentistry'
  const veneerChildren = ['porcelain', 'composite', 'ultra-thin']
  for (const child of veneerChildren) {
    urls.push({ url: `${base}/services/${veneerParent}/veneers/${child}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })
  }

  // Deduplicate
  const seen = new Set<string>()
  const out: SimpleSitemapUrl[] = []
  for (const u of urls) {
    if (seen.has(u.url)) continue
    seen.add(u.url)
    out.push(u)
  }
  return out
}

// Include every registered fallback mapping from service-fallbacks registry
export function collectAllRegisteredFallbackRoutes(): SimpleSitemapUrl[] {
  const base = 'https://peartree.dental'
  const now = new Date()
  const urls: SimpleSitemapUrl[] = []

  try {
    const cats = getRegisteredCategoryFallbackSlugs()
    for (const c of cats) {
      urls.push({ url: `${base}/services/${c}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
    }

    const pairs = getRegisteredTreatmentFallbackPairs()
    for (const p of pairs) {
      if (!p.treatment) continue
      urls.push({ url: `${base}/services/${p.category}/${p.treatment}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })
    }
  } catch {
    // best effort only
  }

  // Deduplicate
  const seen = new Set<string>()
  const out: SimpleSitemapUrl[] = []
  for (const u of urls) {
    if (seen.has(u.url)) continue
    seen.add(u.url)
    out.push(u)
  }
  return out
}
