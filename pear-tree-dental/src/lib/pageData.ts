import path from 'node:path';
import fs from 'node:fs/promises';
import { getFromPriceDisplayText, getPracticeInfo } from './siteData';
import { fetchServiceLocationFromContentful } from './contentful-adapter';

const USE_CONTENTFUL = process.env.USE_CONTENTFUL !== 'false';

async function readJsonFallback(serviceSlug: string, locationSlug: string) {
  const filePath = path.join(process.cwd(), 'public', 'fallback', 'service-location', `${serviceSlug}--${locationSlug}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

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
      // ignore
    }
  }

  const fallbackData = await readJsonFallback(serviceSlug, locationSlug);
  if (fallbackData) return enrich(fallbackData);

  return enrich(null);
}
