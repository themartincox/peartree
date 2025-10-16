#!/usr/bin/env node
// ESM script: Generate sitemap with FS + Contentful dynamic URLs + surgical excludes

import 'dotenv/config';
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ---------- Resolve paths first ----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// Load .env.local explicitly (dotenv doesn't auto-load it in plain Node)
import { config as loadEnv } from "dotenv";
loadEnv({ path: path.join(projectRoot, ".env.local"), override: true });

// ---------- Paths & env ----------
const appDir = path.join(projectRoot, "src", "app");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const ignoreFilePath = path.join(projectRoot, ".sitemapignore");

const baseUrl = (process.env.SITE_URL || "https://peartree.dental").replace(/\/+$/, "");
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CDA_TOKEN = process.env.CONTENTFUL_CDA_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN;
const GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

const argv = new Map(process.argv.slice(2).flatMap((a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [[m[1], m[2] ?? true]] : [];
}));
const VERBOSE = argv.has("verbose") || argv.has("v");
const DRY_RUN = argv.has("dry-run");

// ---------- Config ----------
const ROUTE_CONFIGS = [
  { pattern: "/", priority: 1.0, changefreq: "weekly" },
  { pattern: "/services", priority: 0.9, changefreq: "weekly" },
  { pattern: "/book", priority: 0.9, changefreq: "weekly" },
  { pattern: "/contact", priority: 0.8, changefreq: "monthly" },
  { pattern: "/new-patients", priority: 0.8, changefreq: "monthly" },
  { pattern: "/pricing", priority: 0.8, changefreq: "weekly" },
  { pattern: "/membership", priority: 0.8, changefreq: "monthly" },
  { pattern: "/services/*", priority: 0.8, changefreq: "monthly" },
  // keep your location/service priorities:
  { pattern: "/arnold/*", priority: 0.9, changefreq: "weekly" },
  { pattern: "/mapperley/*", priority: 0.9, changefreq: "weekly" },
  { pattern: "/gedling/*", priority: 0.9, changefreq: "weekly" },
  { pattern: "/arnold", priority: 0.6, changefreq: "monthly" },
  { pattern: "/mapperley", priority: 0.6, changefreq: "monthly" },
  { pattern: "/gedling", priority: 0.6, changefreq: "monthly" },
  { pattern: "/about/*", priority: 0.7, changefreq: "monthly" },
  { pattern: "/testimonials", priority: 0.7, changefreq: "monthly" },
  { pattern: "/smile-gallery", priority: 0.6, changefreq: "monthly" },
  { pattern: "/complaints", priority: 0.5, changefreq: "yearly" },
  { pattern: "/success", priority: 0.3, changefreq: "yearly" },
  { pattern: "/offline", priority: 0.1, changefreq: "yearly" },
];

const DEFAULT_CONFIG = { priority: 0.5, changefreq: "monthly" };

// Optional inline excludes (exact or wildcards). You can also use .sitemapignore and CLI flags.
const EXCLUDE = [
  // "/admin/*",
  // "/secret",
];

// ---------- Helpers ----------
function log(...args) { if (VERBOSE || DRY_RUN) console.log(...args); }

function patternToRegex(pattern) {
  // simple glob → regex: ** = any nested, * = single segment
  let p = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  p = p.replace(/\*\*/g, "§§DOUBLESTAR§§");
  p = p.replace(/\*/g, "[^/]*");
  p = p.replace(/§§DOUBLESTAR§§/g, ".*");
  return new RegExp(`^${p}$`);
}

function matchesAny(urlPath, patterns) {
  for (const p of patterns) {
    const rx = patternToRegex(p);
    if (rx.test(urlPath)) return true;
  }
  return false;
}

function getRouteConfig(route) {
  const exact = ROUTE_CONFIGS.find((c) => c.pattern === route);
  if (exact) return exact;
  const wildcard = ROUTE_CONFIGS.find((c) => c.pattern.includes("*") && patternToRegex(c.pattern).test(route));
  return wildcard || DEFAULT_CONFIG;
}

function isoDateOnly(d) {
  return new Date(d).toISOString().split("T")[0];
}

async function getFileLastMod(filePath) {
  try {
    const s = await fs.stat(filePath);
    return isoDateOnly(s.mtime);
  } catch {
    return isoDateOnly(Date.now());
  }
}

function sanitizeSegment(segment) {
  if (!segment) return "";
  if (segment.startsWith("@")) return "";                    // parallel routes
  if (segment.startsWith("(") && segment.endsWith(")")) return ""; // route groups
  if (segment.includes("[") || segment.includes("]")) return null;  // dynamic → skip (FS)
  return segment.replace(/%5B|%5D/g, "");
}

async function collectFileSystemRoutes(dir) {
  const results = [];
  async function walk(currentDir, parts = []) {
    let entries;
    try { entries = await fs.readdir(currentDir, { withFileTypes: true }); }
    catch (e) { if (e?.code === "ENOENT") return; throw e; }

    for (const entry of entries) {
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
      const entryPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath, [...parts, entry.name]);
        continue;
      }
      if (!entry.isFile() || !/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) continue;

      let hasDynamic = false;
      const sanitized = [];
      for (const p of parts) {
        const s = sanitizeSegment(p);
        if (s === null) { hasDynamic = true; break; }
        if (s) sanitized.push(s);
      }
      if (hasDynamic) continue;
      const route = sanitized.length ? `/${sanitized.join("/")}` : "/";
      results.push({ route, filePath: entryPath });
    }
  }
  await walk(dir);
  // Deduplicate by route (prefer latest file found)
  const map = new Map();
  for (const r of results) map.set(r.route, r.filePath);
  return [...map.entries()].map(([route, filePath]) => ({ route, filePath })).sort((a,b)=>a.route.localeCompare(b.route));
}

// ---------- Fallback content from repo (no CMS) ----------
async function collectBlogFromFS() {
  const blogDir = path.join(projectRoot, "content", "blog");
  let entries = [];
  try {
    const files = await fs.readdir(blogDir);
    for (const f of files) {
      if (!/\.(md|mdx)$/i.test(f)) continue;
      const slug = f.replace(/\.(md|mdx)$/i, "");
      if (slug && slug !== "template") {
        const p = path.join(blogDir, f);
        const lastmod = await getFileLastMod(p);
        entries.push({ route: `/patient-education/${slug}`, lastmod, source: "fs" });
      }
    }
  } catch {}
  return entries;
}

async function parseServiceFallbacks() {
  const sfPath = path.join(projectRoot, "src", "lib", "service-fallbacks.ts");
  let src = "";
  try { src = await fs.readFile(sfPath, "utf-8"); } catch { return { categories: [], treatments: [] }; }
  const categories = new Set();
  const catRegex = /registerCategoryFallback\(\[(.*?)\]/g;
  let m;
  while ((m = catRegex.exec(src))) {
    const list = m[1].split(",").map((s)=>s.replace(/[\s'"`]/g,"").trim()).filter(Boolean);
    for (const s of list) categories.add(s);
  }
  const treatments = [];
  const treatRegex = /registerTreatmentFallback\(\s*\[(.*?)\]\s*,\s*['"]([a-z0-9-/.]+)['"]/g;
  let t;
  while ((t = treatRegex.exec(src))) {
    const cats = t[1].split(",").map((s)=>s.replace(/[\s'"`]/g,"").trim()).filter(Boolean);
    const treatment = t[2];
    treatments.push({ cats, treatment });
  }
  return { categories: Array.from(categories), treatments };
}

async function collectLegacyServiceRoutes() {
  const out = [];
  const { categories, treatments } = await parseServiceFallbacks();
  const today = isoDateOnly(Date.now());
  for (const c of categories) {
    out.push({ route: `/services/${c}`, lastmod: today, source: "fs" });
  }
  for (const { cats, treatment } of treatments) {
    for (const c of cats) {
      out.push({ route: `/services/${c}/${treatment}`, lastmod: today, source: "fs" });
    }
  }
  return out;
}

async function collectLocationSlugs() {
  const entries = await fs.readdir(appDir, { withFileTypes: true }).catch(() => []);
  const ignore = new Set(["api","services","services-location","blog","patient-education","about","contact","book","membership","pricing","privacy","terms","testimonials","reviews","thank-you","success","offline","cohort-demo"]);
  const slugs = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    if (ignore.has(name) || name.startsWith(".")) continue;
    const hasPage = await fs.stat(path.join(appDir, name, "page.tsx")).then(()=>true).catch(()=>false);
    if (hasPage) slugs.push(name);
  }
  return slugs;
}

async function collectServiceLocationCombos() {
  const out = [];
  const { categories } = await parseServiceFallbacks();
  const locs = await collectLocationSlugs();
  const cats = categories.slice(0, 6);
  const suburbs = locs.slice(0, 12);
  const today = isoDateOnly(Date.now());
  for (const c of cats) {
    for (const s of suburbs) {
      out.push({ route: `/services-location/${c}/${s}`, lastmod: today, source: "fs" });
    }
  }
  return out;
}

// ---------- Contentful ----------
async function cfFetch(query, variables = {}) {
  if (!SPACE_ID || !CDA_TOKEN) return { data: null, errors: [{ message: "Missing Contentful env vars" }] };
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CDA_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Contentful GraphQL ${res.status} ${res.statusText}`);
  return res.json();
}

// Paginated fetcher
async function cfPaged(query, rootKey, pageSize = 100) {
  let items = [];
  let skip = 0;
  for (;;) {
    const { data, errors } = await cfFetch(query, { limit: pageSize, skip });
    if (errors) throw new Error(errors.map(e => e.message).join("; "));
    const page = data?.[rootKey]?.items ?? [];
    items = items.concat(page);
    const total = data?.[rootKey]?.total ?? page.length;
    skip += page.length;
    if (skip >= total || page.length === 0) break;
  }
  return items;
}

// Blog: PageBlogPost
const BLOG_QUERY = `
query BlogIndex($limit: Int!, $skip: Int!) {
  pageBlogPostCollection(limit: $limit, skip: $skip, where: { slug_exists: true }, order: publishedDate_DESC) {
    total
    items {
      slug
      isHidden
      sys { updatedAt }
    }
  }
}`;

// Services (single type with type=category/treatment)
const SERVICE_QUERY = `
query ServiceIndex($limit: Int!, $skip: Int!) {
  serviceCollection(limit: $limit, skip: $skip, where: { slug_exists: true }, order: sys_firstPublishedAt_ASC) {
    total
    items {
      slug
      type
      isHidden
      parent { slug }
      sys { updatedAt }
    }
  }
}`;

async function getBlogUrls() {
  const items = await cfPaged(BLOG_QUERY, "pageBlogPostCollection");
  return items
    .filter(x => x?.slug && !x?.isHidden)
    .map(x => ({
      route: `/blog/${x.slug}`,
      lastmod: isoDateOnly(x.sys?.updatedAt || Date.now()),
      source: "cms",
    }));
}

async function getServiceUrls() {
  const items = await cfPaged(SERVICE_QUERY, "serviceCollection");
  const cats = items.filter(x => x?.type === "category" && !x?.isHidden && x?.slug);
  const catSlugs = new Set(cats.map(c => c.slug));

  const urls = [];

  // category URLs
  for (const c of cats) {
    urls.push({
      route: `/services/${c.slug}`,
      lastmod: isoDateOnly(c.sys?.updatedAt || Date.now()),
      source: "cms",
    });
  }

  // treatment URLs
  const treatments = items.filter(x => x?.type === "treatment" && !x?.isHidden && x?.slug && x?.parent?.slug);
  for (const t of treatments) {
    const cat = t.parent.slug;
    // Only create if parent category exists or is known
    if (catSlugs.has(cat) || cat) {
      urls.push({
        route: `/services/${cat}/${t.slug}`,
        lastmod: isoDateOnly(t.sys?.updatedAt || Date.now()),
        source: "cms",
      });
    }
  }
  return urls;
}

// ---------- Exclusion handling ----------
async function loadIgnoreFile() {
  try {
    const txt = await fs.readFile(ignoreFilePath, "utf-8");
    return txt
      .split("\n")
      .map(l => l.trim())
      .filter(l => l && !l.startsWith("#"));
  } catch {
    return [];
  }
}

function collectCliExcludes() {
  // allow multiple --exclude flags
  const patterns = [];
  for (const [k, v] of argv) {
    if (k === "exclude") {
      if (v === true) continue;
      patterns.push(v);
    }
  }
  return patterns;
}

// ---------- XML ----------
function buildXml(urls) {
  const entries = urls.map(u => {
    const changefreq = u.changefreq;
    const priority = u.priority.toFixed(1);
    return [
      "  <url>",
      `    <loc>${u.loc}</loc>`,
      `    <lastmod>${u.lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>"
    ].join("\n");
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
         `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
         `${entries}\n</urlset>\n`;
}

async function writeIfChanged(filePath, content) {
  try {
    const existing = await fs.readFile(filePath, "utf-8");
    if (existing.trim() === content.trim()) return false;
  } catch {}
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf-8");
  return true;
}

// ---------- Main ----------
async function main() {
  console.log("🗺️  Generating sitemap…");
  console.log(`🌐 Base URL: ${baseUrl}`);

  // 1) Collect FS routes
  const fsRoutes = await collectFileSystemRoutes(appDir);
  log(`FS routes: ${fsRoutes.length}`);

  // 2) Collect CMS routes (optional if env provided)
  let cmsRoutes = [];
  if (SPACE_ID && CDA_TOKEN) {
    try {
      const [blog, services] = await Promise.all([
        getBlogUrls(),
        getServiceUrls(),
      ]);
      cmsRoutes = blog.concat(services);
      log(`CMS routes: ${cmsRoutes.length} (${blog.length} blog, ${services.length} services)`);
    } catch (e) {
      console.warn("⚠️  Contentful fetch failed:", e.message);
    }
  } else {
    console.warn("⚠️  Skipping CMS routes (missing Contentful env vars).");
  }

  // 2b) Repo fallback routes (blogs + legacy services + service-location combos)
  const [blogFs, legacyServices, serviceLocs] = await Promise.all([
    collectBlogFromFS(),
    collectLegacyServiceRoutes(),
    collectServiceLocationCombos(),
  ]);

  // Normalize into a single set
  const allRoutes = new Map();

  // FS → route + lastmod from file
  for (const { route, filePath } of fsRoutes) {
    const lastmod = await getFileLastMod(filePath);
    const cfg = getRouteConfig(route);
    allRoutes.set(route, { route, lastmod, ...cfg });
  }

  // CMS → route + lastmod from CMS, config from patterns
  for (const { route, lastmod } of cmsRoutes) {
    const cfg = getRouteConfig(route);
    const existing = allRoutes.get(route);
    // Prefer most recent lastmod
    const lm = existing ? (existing.lastmod > lastmod ? existing.lastmod : lastmod) : lastmod;
    allRoutes.set(route, { route, lastmod: lm, ...cfg });
  }

  // FS fallbacks → add if not already present
  for (const list of [blogFs, legacyServices, serviceLocs]) {
    for (const { route, lastmod } of list) {
      const cfg = getRouteConfig(route);
      const existing = allRoutes.get(route);
      const lm = existing ? (existing.lastmod > lastmod ? existing.lastmod : lastmod) : lastmod;
      allRoutes.set(route, { route, lastmod: lm, ...cfg });
    }
  }

  // 3) Exclusions
  const excludePatterns = [
    ...EXCLUDE,
    ...await loadIgnoreFile(),
    ...collectCliExcludes(),
  ];

  const beforeCount = allRoutes.size;
  for (const r of Array.from(allRoutes.keys())) {
    if (matchesAny(r, excludePatterns)) {
      allRoutes.delete(r);
      log("Excluded:", r);
    }
  }
  const afterCount = allRoutes.size;
  console.log(`🔍 Routes kept: ${afterCount} (excluded ${beforeCount - afterCount})`);

  // 4) Build URLs + sort
  const urls = Array.from(allRoutes.values()).map(({ route, lastmod, changefreq, priority }) => ({
    loc: `${baseUrl}${route === "/" ? "" : route}`,
    lastmod,
    changefreq,
    priority,
  }));

  urls.sort((a, b) => (b.priority - a.priority) || a.loc.localeCompare(b.loc));

  // 5) XML
  const xml = buildXml(urls);

  if (DRY_RUN) {
    console.log("— dry run —");
    console.log(xml);
    return;
  }

  const updated = await writeIfChanged(sitemapPath, xml);
  if (updated) {
    console.log(`✅ Wrote ${sitemapPath} with ${urls.length} URLs`);
  } else {
    console.log("ℹ️  Sitemap unchanged.");
  }
}

main().catch((e) => {
  console.error("❌ Failed:", e);
  process.exit(1);
});
