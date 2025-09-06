import { createClient } from 'contentful';
import type { Document, Block, Inline } from '@contentful/rich-text-types';
import type { Entry, EntryCollection, Asset } from 'contentful';
import type {
  IBlogTemplateFields,
  IServiceDataFields,
  ILocationDataFields,
  ITestimonialFields,
  IBlogPostFields,
  IComponentAuthorFields,
  IComponentSeoFields,
  IFAQFields,
  ICTAFields,
  ILandingPageFields
} from '@/types/contentful';
import {
  SERVICE_TYPE,
  LOCATION_TYPE,
  BLOG_TEMPLATE_TYPE,
  BLOG_POST_TYPE,
  TESTIMONIAL_TYPE,
  COMPONENT_AUTHOR_TYPE,
  COMPONENT_SEO_TYPE,
  FAQ_TYPE,
  CTA_TYPE,
  LANDING_PAGE_TYPE,
  DEFAULT_LIMIT
} from './contentTypes';

// Environment variables for Contentful
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
const ENV = process.env.CONTENTFUL_ENVIRONMENT || 'master';
const USE_PREVIEW = (process.env.CONTENTFUL_USE_PREVIEW || 'false').toLowerCase() === 'true';
const TOKEN = USE_PREVIEW
  ? process.env.CONTENTFUL_PREVIEW_TOKEN || ''
  : (process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN || '');

// Check if we have required Contentful config
const hasContentful = !!(SPACE_ID && TOKEN);

if (!hasContentful && process.env.NODE_ENV !== 'production') {
  console.warn('⚠️ Contentful configuration missing. Some features will be unavailable.');
}

// Create Contentful client
export const contentfulClient = hasContentful
  ? createClient({
      space: SPACE_ID,
      accessToken: TOKEN,
      environment: ENV,
      host: USE_PREVIEW ? 'preview.contentful.com' : undefined,
    })
  : null;

// Contentful Health Check
export async function contentfulHealthCheck(): Promise<boolean> {
  if (!contentfulClient) return false;

  try {
    const response = await contentfulClient.getEntries({
      content_type: SERVICE_TYPE,
      limit: 1,
    });
    return !!response.items.length;
  } catch (error) {
    console.error('Contentful health check failed:', error);
    return false;
  }
}

// Fetch all services
export async function fetchAllServices(): Promise<Entry<IServiceDataFields>[]> {
  if (!contentfulClient) return [];

  try {
    const response = await contentfulClient.getEntries<IServiceDataFields>({
      content_type: SERVICE_TYPE,
      limit: DEFAULT_LIMIT,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Fetch priority services
export async function fetchPriorityServices(): Promise<Entry<IServiceDataFields>[]> {
  if (!contentfulClient) return [];

  try {
    // In the existing model, we don't have a priority field
    // So we'll just fetch a few services for now
    const response = await contentfulClient.getEntries<IServiceDataFields>({
      content_type: SERVICE_TYPE,
      limit: 5,
      order: 'sys.createdAt',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching priority services:', error);
    return [];
  }
}

// Fetch service by slug
export async function fetchServiceBySlug(slug: string): Promise<Entry<IServiceDataFields> | null> {
  if (!contentfulClient) return null;

  try {
    const response = await contentfulClient.getEntries<IServiceDataFields>({
      content_type: SERVICE_TYPE,
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching service by slug "${slug}":`, error);
    return null;
  }
}

// Fetch all locations
export async function fetchAllLocations(): Promise<Entry<ILocationDataFields>[]> {
  if (!contentfulClient) return [];

  try {
    const response = await contentfulClient.getEntries<ILocationDataFields>({
      content_type: LOCATION_TYPE,
      limit: DEFAULT_LIMIT,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
}

// Fetch priority locations
export async function fetchPriorityLocations(): Promise<Entry<ILocationDataFields>[]> {
  if (!contentfulClient) return [];

  try {
    // In the existing model, we don't have a tier field
    // So we'll just fetch a few locations for now
    const response = await contentfulClient.getEntries<ILocationDataFields>({
      content_type: LOCATION_TYPE,
      limit: 5,
      order: 'sys.createdAt',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching priority locations:', error);
    return [];
  }
}

// Fetch location by slug
export async function fetchLocationBySlug(
  slug: string,
  include = 1
): Promise<Entry<ILocationDataFields> | null> {
  if (!contentfulClient) return null;

  try {
    const response = await contentfulClient.getEntries<ILocationDataFields>({
      content_type: LOCATION_TYPE,
      'fields.slug': slug,
      limit: 1,
      include: include,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching location by slug "${slug}":`, error);
    return null;
  }
}

// Fetch blog template
export async function fetchBlogTemplate(): Promise<Entry<IBlogTemplateFields> | null> {
  if (!contentfulClient) return null;

  try {
    const response = await contentfulClient.getEntries<IBlogTemplateFields>({
      content_type: BLOG_TEMPLATE_TYPE,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog template:', error);
    return null;
  }
}

// Fetch blog posts
export async function fetchBlogPosts(limit = 10): Promise<Entry<IBlogPostFields>[]> {
  if (!contentfulClient) return [];

  try {
    const response = await contentfulClient.getEntries<IBlogPostFields>({
      content_type: BLOG_POST_TYPE,
      order: '-fields.publishedDate',
      limit: limit,
      include: 2, // Include references like author
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<Entry<IBlogPostFields> | null> {
  if (!contentfulClient) return null;

  try {
    const response = await contentfulClient.getEntries<IBlogPostFields>({
      content_type: BLOG_POST_TYPE,
      'fields.slug': slug,
      limit: 1,
      include: 2, // Include linked entries like author and SEO
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post by slug "${slug}":`, error);
    return null;
  }
}

// Fetch landing page
export async function fetchLandingPage(slug = 'home'): Promise<Entry<ILandingPageFields> | null> {
  if (!contentfulClient) return null;

  try {
    const response = await contentfulClient.getEntries<ILandingPageFields>({
      content_type: LANDING_PAGE_TYPE,
      'fields.slug': slug,
      limit: 1,
      include: 2, // Include linked entries
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching landing page "${slug}":`, error);
    return null;
  }
}

// Utility: Fill template with service and location data
export function fillTemplate(
  template: string,
  service: Entry<IServiceDataFields>,
  location: Entry<ILocationDataFields>
): string {
  return template
    .replace(/\{\{service\}\}/g, service.fields.serviceName)
    .replace(/\{\{suburb\}\}/g, location.fields.suburb)
    .replace(/\{\{city\}\}/g, location.fields.city);
}

// Utility: Extract plain text from rich text document
export function extractTextFromRichText(doc: Document): string {
  if (!doc || !doc.content || !Array.isArray(doc.content)) {
    return '';
  }

  let result = '';

  const extractFromNode = (node: Block | Inline): void => {
    if (node.nodeType === 'text') {
      result += node.value;
    } else if (node.nodeType === 'hyperlink') {
      if (node.content) {
        node.content.forEach(extractFromNode);
      }
    } else if (node.content) {
      node.content.forEach(extractFromNode);
    }
  };

  doc.content.forEach(extractFromNode);
  return result;
}

// Utility: Replace placeholders in rich text document
export function replacePlaceholdersInRichText(
  doc: Document,
  replacements: Record<string, string | number>
): Document {
  if (!doc || !doc.content) {
    return doc;
  }

  const cloneDoc = JSON.parse(JSON.stringify(doc)) as Document;

  const replaceInNode = (node: Block | Inline): void => {
    if (node.nodeType === 'text' && typeof node.value === 'string') {
      let newValue = node.value;

      for (const [key, value] of Object.entries(replacements)) {
        // Support both {{key}} and {key} format
        newValue = newValue
          .replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), String(value))
          .replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
      }

      node.value = newValue;
    }

    if (node.content) {
      node.content.forEach(replaceInNode);
    }
  };

  cloneDoc.content.forEach(replaceInNode);
  return cloneDoc;
}

// Check and get asset URL helper
export function getAssetUrl(asset: Asset | undefined | null): string {
  if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
    return '';
  }

  const url = asset.fields.file.url;
  // Ensure HTTPS for all assets
  return url.startsWith('//') ? `https:${url}` : url;
}
