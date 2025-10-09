import { getContentfulClient } from './contentful-client';

interface Options {
  timeoutMs?: number;
}

export async function fetchServiceLocationFromContentful(serviceSlug: string, locationSlug: string, opts: Options = {}): Promise<any> {
  const timeoutMs = opts.timeoutMs ?? 2000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const client = getContentfulClient();
    const slug = `${serviceSlug}/${locationSlug}`;
    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_SERVICE_LOCATION_TYPE_ID,
      'fields.slug': slug,
      include: 3,
      signal: (controller as any).signal
    });
    if (response.items && response.items.length > 0) {
      return response.items[0].fields;
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}
