# Pear Tree Dental Website

Pear Tree Dental's website, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15**: App Router, Server Components, and hybrid rendering
- **TypeScript**: Type safety and improved developer experience
- **Tailwind CSS**: Utility-first styling for responsive design
- **Contentful CMS**: Structured content management
- **Advanced Cohort Engine**: Sophisticated personalization system
- **Index Gate**: Controls indexability based on service priority, suburb allowlist, content length, and local proof
- **Programmatic URL Structure**: `/blog/{service}/{suburb}` for canonical, indexable pages
- **Near-me Helper Pages**: `/near-me/{service}` as noindex entry points with human-only redirects
- **Focused Sitemap**: Only includes high-quality, indexable pages with a configurable cap
- **Optimized Build**: Only prebuilds priority service × allowed suburb combinations for faster builds

## Cohort Engine

The website includes a sophisticated cohort engine for personalization based on:

- Geo-location and travel time estimation
- Device type (mobile, tablet, desktop)
- Time of day and office hours
- User status (new, returning, frequent)
- User intent signals

See the [Cohort Engine Documentation](./COHORT-ENGINE.md) for details on this feature.

## Index Gate and SEO

The website implements a hybrid approach for dental service pages with an index gate to control which service/suburb combinations are indexable by search engines.

### Indexability Rules

A page is considered indexable if:

1. Service is in `INDEX_PRIORITY_SERVICES` allowlist
2. Suburb is in `INDEX_ALLOWLIST_SUBURBS` allowlist
3. Page has enough content (≥ `INDEX_MIN_WORDS`, default 350)
4. (Optional) Page has local proof if `INDEX_REQUIRE_LOCAL_PROOF=true`

### Configuration

All indexing configuration is handled through environment variables in `.env.local`. See `.env.example` for reference.

```bash
# Index Gate
INDEX_PRIORITY_SERVICES=orthodontics-clearcorrect,cosmetic-teeth-whitening-enlighten,orthodontics-invisalign
INDEX_ALLOWLIST_SUBURBS=nottingham,west-bridgford,burton-joyce,gedling,arnold,ruddington
INDEX_MIN_WORDS=350
INDEX_REQUIRE_LOCAL_PROOF=false

# Sitemap
SITEMAP_MAX_URLS=2000
```

## Project Structure

- `src/app`: Next.js App Router pages
- `src/components`: React components
  - `src/components/cohort`: Cohort engine UI components
  - `src/components/ui`: Base UI components
  - `src/components/seo`: SEO-related components
- `src/lib`: Utility functions and business logic
  - `src/lib/cohort-engine`: Cohort engine core logic
- `public`: Static assets

## Setup and Development

### Prerequisites

- Node.js (v18+)
- Bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev
```

### Building

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## QA Checklist

1. Set env lists to include `orthodontics-clearcorrect` & `burton-joyce`.
   Verify `/blog/orthodontics-clearcorrect/burton-joyce` → `robots: index`.
2. Remove `burton-joyce` from allowlist; restart dev.
   Same URL should now be `noindex` (check HTML `<meta name="robots">` or response headers).
3. Visit `/sitemap-blog.xml` — ensure only allowed combos appear.
4. Hit `/near-me/orthodontics-clearcorrect` (human UA) → 302 to canonical URL.
5. Same near-me with Googlebot UA → no redirect; confirm near-me is noindex.
6. Build: `GENERATION_MODE=priority` confirms a small set of params prebuilt (log count).

## Deployment

The site is deployed on Netlify with the following configuration:

```toml
[build]
  command = "bun run build"
  functions = ".netlify/functions"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  external_node_modules = ["sharp"]
```
