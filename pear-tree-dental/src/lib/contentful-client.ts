import { createClient } from 'contentful';
import type { Document } from '@contentful/rich-text-types';
import type {
  ServiceEntry,
  LocationEntry,
  BlogTemplateEntry,
  BlogPostEntry
} from '@/types/contentful';

// Function to create Contentful client
export function getContentfulClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_USE_PREVIEW === 'true'
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
  const host = process.env.CONTENTFUL_USE_PREVIEW === 'true'
    ? 'preview.contentful.com'
    : undefined; // defaults to 'cdn.contentful.com'

  if (!space || !accessToken) {
    console.error('Contentful credentials missing');
    return null;
  }

  return createClient({
    space,
    accessToken,
    environment,
    host,
  });
}

// Fetch service by slug
export async function fetchServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  try {
    const client = getContentfulClient();
    if (!client) return null;

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      console.warn(`Service with slug '${slug}' not found`);
      return null;
    }

    return response.items[0] as ServiceEntry;
  } catch (error) {
    console.error(`Error fetching service by slug '${slug}':`, error);
    return null;
  }
}

// Fetch location by slug
export async function fetchLocationBySlug(slug: string): Promise<LocationEntry | null> {
  try {
    const client = getContentfulClient();
    if (!client) return null;

    const locationTypeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'locationData';

    const response = await client.getEntries({
      content_type: locationTypeId,
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      console.warn(`Location with slug '${slug}' not found`);
      return null;
    }

    return response.items[0] as LocationEntry;
  } catch (error) {
    console.error(`Error fetching location by slug '${slug}':`, error);
    return null;
  }
}

// Fetch all services
export async function fetchAllServices(): Promise<ServiceEntry[]> {
  try {
    const client = getContentfulClient();
    if (!client) return [];

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      limit: 100,
    });

    return response.items as ServiceEntry[];
  } catch (error) {
    console.error('Error fetching all services:', error);
    return [];
  }
}

// Fetch all locations
export async function fetchAllLocations(): Promise<LocationEntry[]> {
  try {
    const client = getContentfulClient();
    if (!client) return [];

    const locationTypeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'locationData';

    const response = await client.getEntries({
      content_type: locationTypeId,
      limit: 100,
    });

    return response.items as LocationEntry[];
  } catch (error) {
    console.error('Error fetching all locations:', error);
    return [];
  }
}

// Fetch blog template
export async function fetchBlogTemplate(): Promise<BlogTemplateEntry | null> {
  try {
    const client = getContentfulClient();
    if (!client) return null;

    const response = await client.getEntries({
      content_type: 'blogTemplate',
      limit: 1,
    });

    if (response.items.length === 0) {
      console.warn('Blog template not found');
      return null;
    }

    return response.items[0] as BlogTemplateEntry;
  } catch (error) {
    console.error('Error fetching blog template:', error);
    return null;
  }
}

// Fetch blog posts
export async function fetchBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    const client = getContentfulClient();
    if (!client) return [];

    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
      limit: 100,
    });

    return response.items as BlogPostEntry[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostEntry | null> {
  try {
    const client = getContentfulClient();
    if (!client) return null;

    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      console.warn(`Blog post with slug '${slug}' not found`);
      return null;
    }

    return response.items[0] as BlogPostEntry;
  } catch (error) {
    console.error(`Error fetching blog post by slug '${slug}':`, error);
    return null;
  }
}

// Fetch priority services
export async function fetchPriorityServices(): Promise<ServiceEntry[]> {
  try {
    const client = getContentfulClient();
    if (!client) return [];

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      'fields.priority': true,
      limit: 100,
    });

    return response.items as ServiceEntry[];
  } catch (error) {
    console.error('Error fetching priority services:', error);
    return [];
  }
}

// Contentful health check
export async function contentfulHealthCheck(): Promise<boolean> {
  try {
    const client = getContentfulClient();
    if (!client) return false;

    // Just fetch a single entry to verify connection works
    const response = await client.getEntries({
      limit: 1,
    });

    return response.total > 0;
  } catch (error) {
    console.error('Contentful health check failed:', error);
    return false;
  }
}
