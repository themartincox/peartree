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
