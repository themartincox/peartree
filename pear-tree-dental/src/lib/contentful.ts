import type { Document } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';
import type { LocationEntry, ServiceEntry } from '@/types/contentful';

// Import real Contentful client functions
import {
  fetchServiceBySlug as clientFetchServiceBySlug,
  fetchLocationBySlug as clientFetchLocationBySlug,
  fetchBlogTemplate as clientFetchBlogTemplate,
  fetchAllServices as clientFetchAllServices,
  fetchAllLocations as clientFetchAllLocations,
  contentfulHealthCheck as clientContentfulHealthCheck,
  fetchBlogPosts as clientFetchBlogPosts,
  fetchBlogPostBySlug as clientFetchBlogPostBySlug,
  fetchPriorityServices as clientFetchPriorityServices,
} from './contentful-client';

// Helper function to get a field from a Contentful entry
export function getEntryField<T>(entry: any, fieldName: string): T | undefined {
  if (!entry || !entry.fields || !(fieldName in entry.fields)) {
    return undefined;
  }
  return entry.fields[fieldName] as T;
}

// Use the real implementations from contentful-client.ts
export async function fetchServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  console.log(`Fetching service: ${slug}`);
  return clientFetchServiceBySlug(slug);
}

export async function fetchLocationBySlug(slug: string): Promise<LocationEntry | null> {
  console.log(`Fetching location: ${slug}`);
  return clientFetchLocationBySlug(slug);
}

export async function fetchBlogTemplate(): Promise<Entry<any> | null> {
  console.log('Fetching blog template');
  return clientFetchBlogTemplate();
}

export async function fetchAllServices(): Promise<ServiceEntry[]> {
  console.log('Fetching all services');
  return clientFetchAllServices();
}

export async function fetchAllLocations(): Promise<LocationEntry[]> {
  console.log('Fetching all locations');
  return clientFetchAllLocations();
}

export async function contentfulHealthCheck(): Promise<boolean> {
  return clientContentfulHealthCheck();
}

export async function fetchBlogPosts(): Promise<Entry<any>[]> {
  console.log('Fetching all blog posts');
  return clientFetchBlogPosts();
}

export async function fetchBlogPostBySlug(slug: string): Promise<Entry<any> | null> {
  console.log(`Fetching blog post: ${slug}`);
  return clientFetchBlogPostBySlug(slug);
}

export async function fetchPriorityServices(): Promise<ServiceEntry[]> {
  console.log('Fetching priority services');
  return clientFetchPriorityServices();
}

export async function fetchPriorityLocations(): Promise<LocationEntry[]> {
  // For now, just return regular locations
  console.log('Fetching priority locations');
  return fetchAllLocations();
}

export function replacePlaceholdersInRichText(
  document: Document | null | undefined,
  replacements: Record<string, string>
): Document {
  if (!document) {
    return {
      nodeType: 'document',
      data: {},
      content: []
    };
  }

  // Deep clone the document to avoid mutating the original
  const clonedDoc = JSON.parse(JSON.stringify(document));

  // Helper to recursively replace placeholders in nodes
  function processNode(node: any) {
    // Replace text values
    if (node.nodeType === 'text' && node.value) {
      let newValue = node.value;

      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'gi');
        newValue = newValue.replace(regex, value);
      }

      node.value = newValue;
    }

    // Process child content recursively
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(processNode);
    }
  }

  // Start processing from the top level
  if (clonedDoc.content && Array.isArray(clonedDoc.content)) {
    clonedDoc.content.forEach(processNode);
  }

  return clonedDoc;
}

export function getAssetUrl(asset: any): string {
  if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
    return '';
  }

  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
}

export function extractTextFromRichText(document: Document): string {
  let text = '';

  function processNode(node: any) {
    if (node.nodeType === 'text' && node.value) {
      text += node.value + ' ';
    }

    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(processNode);
    }
  }

  if (document?.content && Array.isArray(document.content)) {
    document.content.forEach(processNode);
  }

  return text.trim();
}

// Fill template with service and location data
export function fillTemplate(
  template: string,
  service: ServiceEntry,
  location: LocationEntry
): string {
  const serviceName = service.fields.serviceName || '';
  const suburb = location.fields.suburb || '';
  const city = location.fields.city || '';

  return template
    .replace(/\{\{\s*service\s*\}\}/gi, serviceName)
    .replace(/\{\{\s*suburb\s*\}\}/gi, suburb)
    .replace(/\{\{\s*city\s*\}\}/gi, city);
}
