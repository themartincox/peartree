import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface RouteConfig {
  pattern: string;
  priority: number;
  changefreq: SitemapUrl['changefreq'];
  lastmod?: string;
}

// Configuration for different route types
const ROUTE_CONFIGS: RouteConfig[] = [
  // Homepage
  { pattern: '/', priority: 1.0, changefreq: 'weekly' },

  // Core service pages
  { pattern: '/services', priority: 0.9, changefreq: 'weekly' },
  { pattern: '/book', priority: 0.9, changefreq: 'weekly' },
  { pattern: '/contact', priority: 0.8, changefreq: 'monthly' },
  { pattern: '/new-patients', priority: 0.8, changefreq: 'monthly' },
  { pattern: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { pattern: '/membership', priority: 0.8, changefreq: 'monthly' },

  // Main service categories
  { pattern: '/services/*', priority: 0.8, changefreq: 'monthly' },

  // Arnold Level 1 pages (highest local priority)
  { pattern: '/arnold/invisalign', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/arnold/teeth-whitening', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/arnold/dental-implants', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/arnold/emergency-dentist', priority: 0.95, changefreq: 'weekly' },

  // Arnold Level 2 pages
  { pattern: '/arnold/porcelain-veneers', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/arnold/complete-smile-makeover', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/arnold/dentures', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/arnold/composite-bonding', priority: 0.90, changefreq: 'weekly' },

  // Arnold Level 3 pages
  { pattern: '/arnold/dental-crowns', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/arnold/root-canal-treatment', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/arnold/dental-bridges', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/arnold/orthodontics', priority: 0.85, changefreq: 'weekly' },

  // Mapperley Level 1 pages
  { pattern: '/mapperley/emergency-dentist', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/mapperley/childrens-dentistry', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/mapperley/family-orthodontics', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/mapperley/teeth-whitening', priority: 0.95, changefreq: 'weekly' },

  // Mapperley Level 2 pages
  { pattern: '/mapperley/family-dental-implants', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/mapperley/childrens-preventive-care', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/mapperley/family-dental-crowns', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/mapperley/teen-cosmetic-dentistry', priority: 0.90, changefreq: 'weekly' },

  // Mapperley Level 3 pages
  { pattern: '/mapperley/family-smile-makeovers', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/mapperley/advanced-family-orthodontics', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/mapperley/family-cosmetic-surgery', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/mapperley/multi-generational-rehabilitation', priority: 0.85, changefreq: 'weekly' },

  // Gedling Level 1 pages
  { pattern: '/gedling/emergency-dentist', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/gedling/family-dentistry', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/gedling/affordable-teeth-whitening', priority: 0.95, changefreq: 'weekly' },
  { pattern: '/gedling/nhs-private-dentistry', priority: 0.95, changefreq: 'weekly' },

  // Gedling Level 2 pages
  { pattern: '/gedling/family-orthodontics', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/gedling/dental-crowns', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/gedling/childrens-dentistry', priority: 0.90, changefreq: 'weekly' },
  { pattern: '/gedling/composite-bonding', priority: 0.90, changefreq: 'weekly' },

  // Gedling Level 3 pages
  { pattern: '/gedling/family-dental-implants', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/gedling/complete-smile-makeovers', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/gedling/family-preventive-care', priority: 0.85, changefreq: 'weekly' },
  { pattern: '/gedling/flexible-payment-dentistry', priority: 0.85, changefreq: 'weekly' },

  // Location pages
  { pattern: '/burton-joyce', priority: 0.7, changefreq: 'monthly' },
  { pattern: '/gedling', priority: 0.6, changefreq: 'monthly' },
  { pattern: '/arnold', priority: 0.6, changefreq: 'monthly' },
  { pattern: '/mapperley', priority: 0.6, changefreq: 'monthly' },

  // About and info pages
  { pattern: '/about/*', priority: 0.7, changefreq: 'monthly' },
  { pattern: '/testimonials', priority: 0.7, changefreq: 'monthly' },
  { pattern: '/smile-gallery', priority: 0.6, changefreq: 'monthly' },

  // Lower priority pages
  { pattern: '/complaints', priority: 0.5, changefreq: 'yearly' },
  { pattern: '/success', priority: 0.3, changefreq: 'yearly' },
  { pattern: '/offline', priority: 0.1, changefreq: 'yearly' },
];

/**
 * Scans the app directory to find all routes
 */
export async function scanAppDirectory(appDir: string): Promise<string[]> {
  const routes: string[] = [];

  try {
    // Find all page.tsx files in the app directory
    const pageFiles = await glob('**/page.{tsx,ts,jsx,js}', {
      cwd: appDir,
      ignore: ['**/node_modules/**', '**/.next/**']
    });

    // Convert file paths to routes
    for (const file of pageFiles) {
      const route = file
        .replace(/\/page\.(tsx|ts|jsx|js)$/, '') // Remove page.tsx
        .replace(/^\/?/, '/'); // Ensure starts with /

      // Handle root page
      if (route === '/') {
        routes.push('/');
      } else {
        routes.push(route);
      }
    }

    // Also include blog content from local `content/blog` as /patient-education/:slug
    try {
      const blogDir = path.resolve(appDir, "..", "..", "content", "blog");
      const blogFiles = await fs.promises.readdir(blogDir).catch(() => [] as string[]);
      for (const f of blogFiles) {
        if (!/\.(md|mdx)$/i.test(f)) continue;
        const slug = f.replace(/\.(md|mdx)$/i, "");
        if (slug && slug !== "template") {
          routes.push(`/patient-education/${slug}`);
        }
      }
    } catch {}

    // Include legacy service fallbacks declared in src/lib/service-fallbacks.ts
    try {
      const sfPath = path.resolve(appDir, "..", "lib", "service-fallbacks.ts");
      const src = await fs.promises.readFile(sfPath, "utf-8");

      // category fallbacks: registerCategoryFallback(['cosmetic','cosmetic-dentistry'], ...)
      const catRegex = /registerCategoryFallback\(\[(.*?)\]/g;
      const catSlugs = new Set<string>();
      let m: RegExpExecArray | null;
      while ((m = catRegex.exec(src))) {
        const list = m[1]
          .split(",")
          .map((s) => s.replace(/[\s'"`]/g, "").trim())
          .filter(Boolean);
        for (const s of list) {
          catSlugs.add(s);
          routes.push(`/services/${s}`);
        }
      }

      // treatment fallbacks: registerTreatmentFallback([category...], 'treatment', ...)
      const treatRegex = /registerTreatmentFallback\(\s*\[(.*?)\]\s*,\s*['"]([a-z0-9-/.]+)['"]/g;
      let t: RegExpExecArray | null;
      while ((t = treatRegex.exec(src))) {
        const catList = t[1]
          .split(",")
          .map((s) => s.replace(/[\s'"`]/g, "").trim())
          .filter(Boolean);
        const treatment = t[2];
        for (const c of catList) {
          routes.push(`/services/${c}/${treatment}`);
        }
      }

      // Best-effort service-location combos: combine a subset of categories with likely suburb slugs from src/app/*
      try {
        const appChildren = await fs.promises.readdir(appDir, { withFileTypes: true });
        const coreIgnore = new Set([
          "api","services","services-location","blog","patient-education","about","contact","book","membership","pricing","privacy","terms","testimonials","reviews","thank-you","success","sitemap.xml","robots.ts","sitemap.ts","layout.tsx","page.tsx","not-found.tsx","offline","cohort-demo","components","data","lib","config","types","utils"
        ]);
        const suburbs: string[] = [];
        for (const e of appChildren) {
          if (!e.isDirectory()) continue;
          const name = e.name;
          if (coreIgnore.has(name)) continue;
          // choose only simple slug folders that have a page.tsx
          const pagePath = path.join(appDir, name, "page.tsx");
          const hasPage = await fs.promises.stat(pagePath).then(()=>true).catch(()=>false);
          if (hasPage) suburbs.push(name);
        }
        const cats = Array.from(catSlugs).slice(0, 6);
        const locs = suburbs.slice(0, 12);
        for (const c of cats) {
          for (const s of locs) {
            routes.push(`/services-location/${c}/${s}`);
          }
        }
      } catch {}
    } catch {}

    // Sort and dedupe
    return Array.from(new Set(routes)).sort();
  } catch (error) {
    console.error('Error scanning app directory:', error);
    return [];
  }
}

/**
 * Gets route configuration for a given route
 */
function getRouteConfig(route: string): RouteConfig {
  // Find exact match first
  const exactMatch = ROUTE_CONFIGS.find(config => config.pattern === route);
  if (exactMatch) return exactMatch;

  // Find pattern match
  const patternMatch = ROUTE_CONFIGS.find(config => {
    const pattern = config.pattern.replace('*', '.*');
    const regex = new RegExp(`^${pattern}$`);
    return regex.test(route);
  });

  if (patternMatch) return patternMatch;

  // Default configuration
  return { pattern: route, priority: 0.5, changefreq: 'monthly' };
}

/**
 * Gets the last modified date for a route
 */
async function getLastModDate(route: string, appDir: string): Promise<string> {
  try {
    const filePath = path.join(appDir, route === '/' ? 'page.tsx' : `${route}/page.tsx`);
    const stats = await fs.promises.stat(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    // Default to today if file not found
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Generates sitemap URLs from routes
 */
export async function generateSitemapUrls(routes: string[], appDir: string, baseUrl = 'https://peartree.dental'): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [];

  for (const route of routes) {
    const config = getRouteConfig(route);
    const lastmod = await getLastModDate(route, appDir);

    urls.push({
      url: `${baseUrl}${route}`,
      lastmod,
      changefreq: config.changefreq,
      priority: config.priority
    });
  }

  // Sort by priority (desc) then by URL
  return urls.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return a.url.localeCompare(b.url);
  });
}

/**
 * Generates XML sitemap content
 */
export function generateSitemapXML(urls: SitemapUrl[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urlEntries}\n${urlsetClose}`;
}

/**
 * Reads existing sitemap content
 */
export async function readExistingSitemap(sitemapPath: string): Promise<string | null> {
  try {
    return await fs.promises.readFile(sitemapPath, 'utf-8');
  } catch {
    return null;
  }
}

/**
 * Writes sitemap to file
 */
export async function writeSitemap(sitemapPath: string, content: string): Promise<void> {
  await fs.promises.writeFile(sitemapPath, content, 'utf-8');
}

/**
 * Main function to update sitemap if changes detected
 */
export async function updateSitemapIfChanged(
  appDir: string,
  sitemapPath: string,
  baseUrl = 'https://peartree.dental'
): Promise<{ updated: boolean; message: string; routeCount: number }> {
  try {
    console.log('🔍 Scanning for route changes...');

    // Scan current routes
    const routes = await scanAppDirectory(appDir);
    console.log(`📍 Found ${routes.length} routes`);

    // Generate new sitemap content
    const urls = await generateSitemapUrls(routes, appDir, baseUrl);
    const newSitemapContent = generateSitemapXML(urls);

    // Read existing sitemap
    const existingSitemapContent = await readExistingSitemap(sitemapPath);

    // Compare content (normalize whitespace for comparison)
    const normalizeXML = (xml: string) => xml.replace(/\s+/g, ' ').trim();
    const newNormalized = normalizeXML(newSitemapContent);
    const existingNormalized = existingSitemapContent ? normalizeXML(existingSitemapContent) : '';

    if (newNormalized === existingNormalized) {
      return {
        updated: false,
        message: 'No changes detected in sitemap',
        routeCount: routes.length
      };
    }

    // Write new sitemap
    await writeSitemap(sitemapPath, newSitemapContent);

    return {
      updated: true,
      message: `Sitemap updated with ${urls.length} URLs`,
      routeCount: routes.length
    };

  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    throw error;
  }
}

/**
 * Get sitemap statistics
 */
export async function getSitemapStats(appDir: string): Promise<{
  totalRoutes: number;
  routesByPriority: Record<string, number>;
  routesByLocation: Record<string, number>;
}> {
  const routes = await scanAppDirectory(appDir);

  const routesByPriority: Record<string, number> = {};
  const routesByLocation: Record<string, number> = {};

  for (const route of routes) {
    const config = getRouteConfig(route);
    const priorityKey = config.priority.toFixed(1);
    routesByPriority[priorityKey] = (routesByPriority[priorityKey] || 0) + 1;

    // Determine location
    let location = 'core';
    if (route.startsWith('/arnold/')) location = 'arnold';
    else if (route.startsWith('/mapperley/')) location = 'mapperley';
    else if (route.startsWith('/gedling/')) location = 'gedling';
    else if (route.startsWith('/services/')) location = 'services';

    routesByLocation[location] = (routesByLocation[location] || 0) + 1;
  }

  return {
    totalRoutes: routes.length,
    routesByPriority,
    routesByLocation
  };
}
