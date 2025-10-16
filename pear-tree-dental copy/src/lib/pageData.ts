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
