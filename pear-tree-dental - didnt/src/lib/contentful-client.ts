// IMPORTANT: This file is only imported in Server Components.
// We use dynamic import() to avoid Edge Runtime issues
import type { Document } from '@contentful/rich-text-types';
import type {
  ServiceEntry,
  LocationEntry,
  BlogTemplateEntry,
  BlogPostEntry
} from '@/types/contentful';

// Function to create Contentful client
export async function getContentfulClient() {
  // Only import contentful in a server context
  if (typeof window !== 'undefined') {
    console.error('Contentful client should only be used in server components');
    return null;
  }

  try {
    // Dynamically import contentful only when needed
    const contentful = await import('contentful');

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

    // Use createClient from the dynamically imported module
    return contentful.createClient({
      space,
      accessToken,
      environment,
      host,
    });
  } catch (error) {
    console.error('Error creating Contentful client:', error);
    // Return a mock client for fallback
    return getMockContentfulClient();
  }
}

// Mock client for fallback and development
function getMockContentfulClient() {
  return {
    getEntries: async (query: any) => {
      console.log('Using mock Contentful client with query:', query);

      // Mock data based on query content type
      if (query.content_type === process.env.CONTENTFUL_SERVICE_TYPE_ID || query.content_type === 'serviceData') {
        return mockServiceEntries(query);
      } else if (query.content_type === process.env.CONTENTFUL_LOCATION_TYPE_ID || query.content_type === 'locationData') {
        return mockLocationEntries(query);
      } else if (query.content_type === process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID || query.content_type === 'blogTemplate') {
        return mockBlogTemplateEntries();
      } else if (query.content_type === process.env.CONTENTFUL_BLOG_POST_TYPE_ID || query.content_type === 'blogPost') {
        return mockBlogPostEntries(query);
      }

      // Default response for unknown content types
      console.warn(`Unknown content type requested: ${query.content_type}`);
      return { items: [], total: 0 };
    }
  };
}

// Mock service entries
function mockServiceEntries(query: any) {
  const allServices = [
    {
      sys: { id: 'service-1', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'dental-implants',
        serviceName: 'Dental Implants',
        description: 'Replace missing teeth with dental implants for a natural-looking, permanent solution.',
        priority: true
      }
    },
    {
      sys: { id: 'service-2', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'teeth-whitening',
        serviceName: 'Teeth Whitening',
        description: 'Professional teeth whitening for a brighter, more confident smile.',
        priority: false
      }
    },
    {
      sys: { id: 'service-3', contentType: { sys: { id: 'serviceData' } } },
      fields: {
        slug: 'emergency-dentist',
        serviceName: 'Emergency Dentist',
        description: 'Urgent dental care when you need it most. Same-day appointments available.',
        priority: true
      }
    }
  ];

  // Filter by slug if specified
  if (query['fields.slug']) {
    const filtered = allServices.filter(service =>
      service.fields.slug === query['fields.slug']
    );
    return { items: filtered, total: filtered.length };
  }

  // Filter by priority if specified
  if (query['fields.priority'] === true) {
    const filtered = allServices.filter(service => service.fields.priority === true);
    return { items: filtered, total: filtered.length };
  }

  return { items: allServices, total: allServices.length };
}

// Mock location entries
function mockLocationEntries(query: any) {
  const allLocations = [
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
  ];

  // Filter by slug if specified
  if (query['fields.slug']) {
    const filtered = allLocations.filter(location =>
      location.fields.slug === query['fields.slug']
    );
    return { items: filtered, total: filtered.length };
  }

  return { items: allLocations, total: allLocations.length };
}

// Mock blog template entries
function mockBlogTemplateEntries() {
  const templates = [
    {
      sys: { id: 'template-1', contentType: { sys: { id: 'blogTemplate' } } },
      fields: {
        title: 'Service Location Template',
        seoTitleTemplate: '{{service}} in {{suburb}} | Expert Dental Care in {{city}}',
        seoDescriptionTemplate: 'Professional {{service}} services in {{suburb}}, {{city}}. Book your appointment today with our experienced dentists.',
        h1Template: '{{service}} in {{suburb}}, {{city}}',
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
    }
  ];

  return { items: templates, total: templates.length };
}

// Mock blog post entries
function mockBlogPostEntries(query: any) {
  const allPosts = [
    {
      sys: { id: 'blog-1', contentType: { sys: { id: 'blogPost' } } },
      fields: {
        slug: 'dental-health-tips',
        title: 'Dental Health Tips',
        publishDate: '2025-01-15T00:00:00Z',
        excerpt: 'Simple tips to maintain your dental health and keep your smile bright.',
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
                  value: 'This is the content of the blog post about dental health tips.',
                  marks: [],
                  data: {}
                }
              ]
            }
          ]
        }
      }
    },
    {
      sys: { id: 'blog-2', contentType: { sys: { id: 'blogPost' } } },
      fields: {
        slug: 'teeth-whitening-guide',
        title: 'Teeth Whitening Guide',
        publishDate: '2025-02-10T00:00:00Z',
        excerpt: 'Everything you need to know about professional teeth whitening treatments.',
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
                  value: 'This is the content of the blog post about teeth whitening guide.',
                  marks: [],
                  data: {}
                }
              ]
            }
          ]
        }
      }
    }
  ];

  // Filter by slug if specified
  if (query['fields.slug']) {
    const filtered = allPosts.filter(post =>
      post.fields.slug === query['fields.slug']
    );
    return { items: filtered, total: filtered.length };
  }

  return { items: allPosts, total: allPosts.length };
}

// Fetch service by slug
export async function fetchServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  try {
    const client = await getContentfulClient();
    if (!client) return null;

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      'fields.slug': slug,
      limit: 1,
    }).catch(error => {
      console.error(`Error fetching service: ${error.message}`);
      return { items: [] };
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
    const client = await getContentfulClient();
    if (!client) return null;

    const locationTypeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'locationData';

    const response = await client.getEntries({
      content_type: locationTypeId,
      'fields.slug': slug,
      limit: 1,
    }).catch(error => {
      console.error(`Error fetching location: ${error.message}`);
      return { items: [] };
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
    const client = await getContentfulClient();
    if (!client) return [];

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      limit: 100,
    }).catch(error => {
      console.error(`Error fetching all services: ${error.message}`);
      return { items: [] };
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
    const client = await getContentfulClient();
    if (!client) return [];

    const locationTypeId = process.env.CONTENTFUL_LOCATION_TYPE_ID || 'locationData';

    const response = await client.getEntries({
      content_type: locationTypeId,
      limit: 100,
    }).catch(error => {
      console.error(`Error fetching all locations: ${error.message}`);
      return { items: [] };
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
    const client = await getContentfulClient();
    if (!client) return null;

    const blogTemplateTypeId = process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID || 'blogTemplate';

    // First try to fetch with the configured content type
    let response = await client.getEntries({
      content_type: blogTemplateTypeId,
      limit: 1,
    }).catch(error => {
      console.warn(`Error fetching blog template with type '${blogTemplateTypeId}': ${error.message}`);
      return { items: [] };
    });

    // If no results, try with a fallback type
    if (response.items.length === 0 && blogTemplateTypeId !== 'blogTemplate') {
      console.warn(`No blog templates found with type '${blogTemplateTypeId}', trying fallback 'blogTemplate'`);
      response = await client.getEntries({
        content_type: 'blogTemplate',
        limit: 1,
      }).catch(() => ({ items: [] }));
    }

    if (response.items.length === 0) {
      console.warn('Blog template not found, using mock data');
      return mockBlogTemplateEntries().items[0] as BlogTemplateEntry;
    }

    return response.items[0] as BlogTemplateEntry;
  } catch (error) {
    console.error('Error fetching blog template:', error);
    return mockBlogTemplateEntries().items[0] as BlogTemplateEntry;
  }
}

// Fetch blog posts
export async function fetchBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    const client = await getContentfulClient();
    if (!client) return [];

    const blogPostTypeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || 'blogPost';

    // First try to fetch with the configured content type
    let response = await client.getEntries({
      content_type: blogPostTypeId,
      order: '-fields.publishDate',
      limit: 100,
    }).catch(error => {
      console.warn(`Error fetching blog posts with type '${blogPostTypeId}': ${error.message}`);
      return { items: [] };
    });

    // If no results and we used a custom type, try with the fallback
    if (response.items.length === 0 && blogPostTypeId !== 'blogPost') {
      console.warn(`No blog posts found with type '${blogPostTypeId}', trying fallback 'blogPost'`);
      response = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishDate',
        limit: 100,
      }).catch(() => ({ items: [] }));
    }

    // If still no results, return mock data
    if (response.items.length === 0) {
      console.warn('No blog posts found, using mock data');
      return mockBlogPostEntries({}).items as BlogPostEntry[];
    }

    return response.items as BlogPostEntry[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return mock data as fallback
    return mockBlogPostEntries({}).items as BlogPostEntry[];
  }
}

// Fetch a blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostEntry | null> {
  try {
    const client = await getContentfulClient();
    if (!client) return null;

    const blogPostTypeId = process.env.CONTENTFUL_BLOG_POST_TYPE_ID || 'blogPost';

    // First try with configured content type
    let response = await client.getEntries({
      content_type: blogPostTypeId,
      'fields.slug': slug,
      limit: 1,
    }).catch(error => {
      console.warn(`Error fetching blog post with type '${blogPostTypeId}': ${error.message}`);
      return { items: [] };
    });

    // If no results and we used a custom type, try with the fallback
    if (response.items.length === 0 && blogPostTypeId !== 'blogPost') {
      console.warn(`No blog post found with type '${blogPostTypeId}', trying fallback 'blogPost'`);
      response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      }).catch(() => ({ items: [] }));
    }

    // If still no results, check mock data
    if (response.items.length === 0) {
      console.warn(`Blog post with slug '${slug}' not found, checking mock data`);
      const mockPost = mockBlogPostEntries({ 'fields.slug': slug }).items[0];
      return mockPost as BlogPostEntry || null;
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
    const client = await getContentfulClient();
    if (!client) return [];

    const serviceTypeId = process.env.CONTENTFUL_SERVICE_TYPE_ID || 'serviceData';

    const response = await client.getEntries({
      content_type: serviceTypeId,
      'fields.priority': true,
      limit: 100,
    }).catch(error => {
      console.error(`Error fetching priority services: ${error.message}`);
      return { items: [] };
    });

    // If no priority services, return some from the mock data
    if (response.items.length === 0) {
      console.warn('No priority services found, using mock data');
      return mockServiceEntries({ 'fields.priority': true }).items as ServiceEntry[];
    }

    return response.items as ServiceEntry[];
  } catch (error) {
    console.error('Error fetching priority services:', error);
    return [];
  }
}

// Contentful health check
export async function contentfulHealthCheck(): Promise<boolean> {
  try {
    const client = await getContentfulClient();
    if (!client) return false;

    // Just fetch a single entry to verify connection works
    const response = await client.getEntries({
      limit: 1,
    }).catch(error => {
      console.error(`Contentful health check error: ${error.message}`);
      return { total: 0 };
    });

    return response.total > 0;
  } catch (error) {
    console.error('Contentful health check failed:', error);
    return false;
  }
}
