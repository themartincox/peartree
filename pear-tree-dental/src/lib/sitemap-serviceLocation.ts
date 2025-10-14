import type { Entry } from 'contentful';
import { cfEntries, extractTextFromRichText } from '@/lib/contentful';

type ServiceLocationItem = Entry<any> & {
  fields: {
    slug?: string;
    intro?: any;
    bodyContent?: any;
    noindex?: boolean;
    serviceEntryId?: { fields?: { slug?: string } };
    locationEntryId?: { fields?: { slug?: string } };
  };
};

const ALLOWED_CATEGORIES = new Set([
  'cosmetic-dentistry',
  'general-dentistry',
  'restorative-dentistry',
]);

const MIN_INTRO_WORDS = 50;
const MIN_BODY_WORDS = 300;

function wordCount(s?: string): number {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

export async function fetchIndexableServiceLocationPaths(): Promise<{
  path: string;
  updatedAt?: string;
}[]> {
  const res = await cfEntries<ServiceLocationItem>({
    content_type: 'serviceLocation',
    include: 2,
    limit: 1000,
    // Note: cannot filter rich text length at query time; we gate below
  }, 'sitemap:serviceLocation');

  const items: ServiceLocationItem[] = (res as any)?.items ?? [];
  const out: { path: string; updatedAt?: string }[] = [];

  for (const item of items) {
    const f = item?.fields || {};
    if (f.noindex) continue;

    const cat = f.serviceEntryId?.fields?.slug;
    const loc = f.locationEntryId?.fields?.slug;
    if (!cat || !loc) continue;
    if (!ALLOWED_CATEGORIES.has(cat)) continue;

    const intro = typeof f.intro === 'string' ? f.intro : extractTextFromRichText(f.intro);
    const body = typeof f.bodyContent === 'string' ? f.bodyContent : extractTextFromRichText(f.bodyContent);
    if (wordCount(intro) < MIN_INTRO_WORDS) continue;
    if (wordCount(body) < MIN_BODY_WORDS) continue;

    out.push({ path: `/services-location/${cat}/${loc}`, updatedAt: (item as any)?.sys?.updatedAt });
  }

  return out;
}

