#!/usr/bin/env bash
set -euo pipefail

# 0) Sanity check
test -d src || { echo "Please run from repo root (where src/ exists)"; exit 1; }

# 1) Create dirs
mkdir -p src/lib
mkdir -p public/fallback/service-location

# 1.1 siteData.ts
cat > src/lib/siteData.ts <<'TS'
/**
 * Single source of truth for prices & practice info (from repo data).
 * This module intentionally avoids Contentful; use it everywhere for price/hour display.
 */
import { getTreatmentPrice } from '@/data/pricing';
import * as practiceInfoModule from '@/data/practiceInfo';

type AnyRecord = Record<string, any>;
const practiceInfo: AnyRecord =
  (practiceInfoModule as AnyRecord).default ?? (practiceInfoModule as AnyRecord);

// Map service slugs to the treatment names used in pricing.ts
const SERVICE_NAME_MAP: Record<string, string> = {
  'dental-implants': 'Single Dental Implant',
  'composite-bonding': 'Composite Bonding',
  'teeth-whitening': 'Teeth Whitening',
  'clearcorrect': 'ClearCorrect',
  'dental-crowns': 'Dental Crown',
  'childrens-dentistry': 'Routine Exam',
  'emergency-dentistry': 'Emergency Appointment'
};

export function getFromPriceDisplayText(serviceSlug: string): string | null {
  const treatmentName = SERVICE_NAME_MAP[serviceSlug];
  if (!treatmentName) return null;

  const price: any = getTreatmentPrice(treatmentName);
  if (!price) return null;

  // Support common shapes from pricing.ts
  if (typeof price === 'string') return price;             // e.g. "From £495"
  if (typeof price === 'number') return `From £${price}`;  // numeric fallback
  if ((price as any).fromDisplay) return (price as any).fromDisplay;
  if ((price as any).display) return (price as any).display;
  if ((price as any).from) return `From £${(price as any).from}`;

  return null;
}

export function getPracticeInfo(locationSlug: string): any | null {
  if (!practiceInfo) return null;
  // Expect practiceInfo[locationSlug] structure exported from src/data/practiceInfo.ts
  return (practiceInfo as AnyRecord)[locationSlug] ?? (practiceInfo as AnyRecord).default ?? null;
}
TS

# 1.2 contentful-adapter.ts
cat > src/lib/contentful-adapter.ts <<'TS'
import { getContentfulClient } from './contentful-client';

export interface AdapterOptions {
  timeoutMs?: number;
}

/**
 * Fetch a Service Location page from Contentful.
 * Maps only fields we actually render; pricing/hours come from repo data.
 * Uses a simple timeout to avoid hanging the page.
 */
export async function fetchServiceLocationFromContentful(
  serviceSlug: string,
  locationSlug: string,
  opts: AdapterOptions = {}
): Promise<any | null> {
  const client = getContentfulClient();
  const slug = `${serviceSlug}/${locationSlug}`;
  const contentType =
    process.env.CONTENTFUL_SERVICE_LOCATION_TYPE_ID || 'serviceLocation';

  const timeoutMs = opts.timeoutMs ?? 2000;
  const timeoutPromise = new Promise<null>((resolve) =>
    setTimeout(() => resolve(null), timeoutMs)
  );

  const fetchPromise = (client.getEntries({
    content_type: contentType,
    'fields.slug': slug,
    include: 3
  }) as unknown) as Promise<any>;

  const res: any = await Promise.race([fetchPromise, timeoutPromise]);
  if (!res || !res.items || res.items.length === 0) return null;

  const e = res.items[0]?.fields ?? {};
  return {
    slug: e.slug,
    seoTitle: e.seoTitle,
    seoDescription: e.seoDescription,
    h1: e.h1,
    intro: e.intro,
    bodyContent: e.bodyContent,
    faqs: e.faqs,
    tokens: e.tokens ?? {}
  };
}
TS

# 1.3 pageData.ts
cat > src/lib/pageData.ts <<'TS'
import path from 'path';
import fs from 'fs/promises';
import { getFromPriceDisplayText, getPracticeInfo } from './siteData';
import { fetchServiceLocationFromContentful } from './contentful-adapter';

// Incident toggle: set USE_CONTENTFUL=false to hard-disable Contentful
const USE_CONTENTFUL = process.env.USE_CONTENTFUL !== 'false';

async function readJsonFallback(serviceSlug: string, locationSlug: string) {
  const filePath = path.join(
    process.cwd(),
    'public',
    'fallback',
    'service-location',
    `${serviceSlug}--${locationSlug}.json`
  );
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Returns page data with robust fallbacks:
 * 1) Contentful (2s timeout) → 2) JSON fallback → 3) Static page props
 * Prices and opening hours are always injected from repo data.
 */
export async function getServiceLocationPageData(serviceSlug: string, locationSlug: string) {
  const enrich = (base: any = {}) => ({
    ...base,
    fromPriceDisplayText: getFromPriceDisplayText(serviceSlug),
    practiceInfo: getPracticeInfo(locationSlug)
  });

  if (USE_CONTENTFUL) {
    try {
      const data = await fetchServiceLocationFromContentful(serviceSlug, locationSlug, { timeoutMs: 2000 });
      if (data) return enrich(data);
    } catch {
      // swallow and fall through
    }
  }

  const json = await readJsonFallback(serviceSlug, locationSlug);
  if (json) return enrich(json);

  return enrich(null); // static page can render with injected price/hours
}
TS

# 1.4 sample JSON fallback (layer 2 test)
cat > public/fallback/service-location/dental-implants--nottingham.json <<'JSON'
{
  "slug": "dental-implants/nottingham",
  "seoTitle": "Dental Implants in Nottingham | Pear Tree Dental",
  "seoDescription": "Long-lasting replacements for missing teeth with natural look and feel.",
  "h1": "Dental Implants in Nottingham",
  "intro": "Replace missing teeth with secure, natural-looking implants.",
  "bodyContent": [
    { "type": "list", "items": ["Digital planning", "Trusted components", "Gentle approach"] }
  ],
  "faqs": []
}
JSON

# 2) Stage & commit (only the new files)
git add src/lib/siteData.ts src/lib/pageData.ts src/lib/contentful-adapter.ts public/fallback/service-location/dental-implants--nottingham.json
git commit -m "feat: wire prices/hours + contentful->json->static fallbacks"

echo "✅ Done. Files created and committed."
