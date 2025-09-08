import type { Document } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';
import type { LocationEntry, ServiceEntry } from '@/types/contentful';

// Helper function to get a field from a Contentful entry
export function getEntryField<T>(entry: any, fieldName: string): T | undefined {
  if (!entry || !entry.fields || !(fieldName in entry.fields)) {
    return undefined;
  }
  return entry.fields[fieldName] as T;
}

// Mock fetch functions for Contentful
export async function fetchServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  // In a real implementation, this would fetch from Contentful
  console.log(`Fetching service: ${slug}`);

  // Return a mock service entry for development/testing
  return {
    sys: {
      id: 'mock-service-id',
      contentType: { sys: { id: 'serviceData' } }
    },
    fields: {
      slug: slug,
      serviceName: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
      description: 'This is a mock service description for development purposes.'
    }
  } as ServiceEntry;
}

export async function fetchLocationBySlug(slug: string): Promise<LocationEntry | null> {
  // In a real implementation, this would fetch from Contentful
  console.log(`Fetching location: ${slug}`);

  // Return a mock location entry for development/testing
  return {
    sys: {
      id: 'mock-location-id',
      contentType: { sys: { id: 'locationData' } }
    },
    fields: {
      slug: slug,
      suburb: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
      city: 'Nottingham',
      latitude: 52.9548,
      longitude: -1.1581
    }
  } as LocationEntry;
}

export async function fetchBlogTemplate(): Promise<Entry<any> | null> {
  // In a real implementation, this would fetch from Contentful
  console.log('Fetching blog template');

  // Return a mock blog template for development/testing
  return {
    sys: {
      id: 'mock-template-id',
      contentType: { sys: { id: 'blogTemplate' } }
    },
    fields: {
      seoTitleTemplate: '{{service}} in {{suburb}} | Expert Dental Care in {{city}}',
      seoDescriptionTemplate: 'Professional {{service}} services in {{suburb}}, {{city}}. Book your appointment today with our experienced dentists.',
      bodyContent: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Looking for {{service}} in {{suburb}}? Our team of dental professionals provide high-quality dental care for patients in {{city}} and surrounding areas.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      }
    }
  } as Entry<any>;
}

export async function fetchAllServices(): Promise<ServiceEntry[]> {
  // In a real implementation, this would fetch from Contentful
  console.log('Fetching all services');

  // Return mock services for development/testing
  return [
    {
      sys: { id: 'service-1', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'dental-implants',
        serviceName: 'Dental Implants'
      }
    },
    {
      sys: { id: 'service-2', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'teeth-whitening',
        serviceName: 'Teeth Whitening'
      }
    },
    {
      sys: { id: 'service-3', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'emergency-dentist',
        serviceName: 'Emergency Dentist'
      }
    }
  ] as ServiceEntry[];
}

export async function fetchAllLocations(): Promise<LocationEntry[]> {
  // In a real implementation, this would fetch from Contentful
  console.log('Fetching all locations');

  // Return mock locations for development/testing
  return [
    {
      sys: { id: 'location-1', contentType: { sys: { id: 'locationData' } } },
      fields: {
        slug: 'nottingham',
        suburb: 'Nottingham',
        city: 'Nottingham',
        latitude: 52.9548,
        longitude: -1.1581
      }
    },
    {
      sys: { id: 'location-2', contentType: { sys: { id: 'locationData' } } },
      fields: {
        slug: 'west-bridgford',
        suburb: 'West Bridgford',
        city: 'Nottingham',
        latitude: 52.9334,
        longitude: -1.1260
      }
    },
    {
      sys: { id: 'location-3', contentType: { sys: { id: 'locationData' } } },
      fields: {
        slug: 'burton-joyce',
        suburb: 'Burton Joyce',
        city: 'Nottingham',
        latitude: 52.9819,
        longitude: -1.0254
      }
    }
  ] as LocationEntry[];
}

export async function contentfulHealthCheck(): Promise<boolean> {
  // In a real implementation, this would check the Contentful API
  return true;
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

// Fetch a blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<Entry<any> | null> {
  // In a real implementation, this would fetch from Contentful
  console.log(`Fetching blog post: ${slug}`);

  // Return a mock blog post for development/testing
  return {
    sys: {
      id: `mock-blog-${slug}`,
      contentType: { sys: { id: 'blogPost' } }
    },
    fields: {
      slug: slug,
      title: `Blog Post about ${slug}`,
      publishDate: new Date().toISOString(),
      excerpt: `This is a sample blog post about ${slug}.`,
      content: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: `This is the content of the blog post about ${slug}.`,
                marks: [],
                data: {}
              }
            ]
          }
        ]
      }
    }
  } as Entry<any>;
}

export async function fetchBlogPosts(): Promise<Entry<any>[]> {
  // In a real implementation, this would fetch from Contentful
  console.log('Fetching all blog posts');

  // Return mock blog posts for development/testing
  return [
    {
      sys: { id: 'blog-1', contentType: { sys: { id: 'blogPost' } } },
      fields: {
        slug: 'dental-health-tips',
        title: 'Dental Health Tips',
        publishDate: '2025-01-15T00:00:00Z'
      }
    },
    {
      sys: { id: 'blog-2', contentType: { sys: { id: 'blogPost' } } },
      fields: {
        slug: 'teeth-whitening-guide',
        title: 'Teeth Whitening Guide',
        publishDate: '2025-02-10T00:00:00Z'
      }
    }
  ] as Entry<any>[];
}

// Fetch priority services (subset of services considered higher priority)
export async function fetchPriorityServices(): Promise<ServiceEntry[]> {
  // In a real implementation, this would fetch high-priority services from Contentful
  console.log('Fetching priority services');

  // Return mock priority services
  return [
    {
      sys: { id: 'service-1', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'dental-implants',
        serviceName: 'Dental Implants'
      }
    },
    {
      sys: { id: 'service-3', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'emergency-dentist',
        serviceName: 'Emergency Dentist'
      }
    }
  ] as ServiceEntry[];
}

// Fetch priority locations (subset of locations considered higher priority)
export async function fetchPriorityLocations(): Promise<LocationEntry[]> {
  // In a real implementation, this would fetch high-priority locations from Contentful
  console.log('Fetching priority locations');

  // Return mock priority locations
  return [
    {
      sys: { id: 'location-1', contentType: { sys: { id: 'locationData' } } },
      fields: {
        slug: 'nottingham',
        suburb: 'Nottingham',
        city: 'Nottingham',
        latitude: 52.9548,
        longitude: -1.1581
      }
    },
    {
      sys: { id: 'location-3', contentType: { sys: { id: 'locationData' } } },
      fields: {
        slug: 'burton-joyce',
        suburb: 'Burton Joyce',
        city: 'Nottingham',
        latitude: 52.9819,
        longitude: -1.0254
      }
    }
  ] as LocationEntry[];
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
