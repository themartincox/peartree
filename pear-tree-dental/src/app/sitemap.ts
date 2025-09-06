import type { MetadataRoute } from 'next';
import {
  fetchAllServices,
  fetchAllLocations,
  fetchBlogPosts,
  fetchPriorityServices,
  fetchPriorityLocations,
  contentfulHealthCheck
} from '@/lib/contentful';

// Optimized sitemap generation
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URLs that are always included
  const baseUrls = [
    {
      url: 'https://peartree.dental',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://peartree.dental/about/practice',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://peartree.dental/about/team',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://peartree.dental/services',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://peartree.dental/membership',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://peartree.dental/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://peartree.dental/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ];

  // Check if Contentful is healthy before fetching
  const isContentfulHealthy = await contentfulHealthCheck();
  if (!isContentfulHealthy) {
    console.warn('Contentful health check failed, returning base sitemap only');
    return baseUrls;
  }

  try {
    // Fetch content based on GENERATION_MODE
    const mode = process.env.GENERATION_MODE || 'priority';

    // Regular blog posts (always include these)
    const blogPosts = await fetchBlogPosts(100);
    const blogUrls = blogPosts.map(post => ({
      url: `https://peartree.dental/blog/${post.fields.slug}`,
      lastModified: new Date(post.sys.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // Dynamic generation based on mode
    const serviceLocationUrls: MetadataRoute.Sitemap = [];

    if (mode === 'priority') {
      // Only include priority services and locations
      const [services, locations] = await Promise.all([
        fetchPriorityServices(),
        fetchPriorityLocations()
      ]);

      for (const service of services) {
        serviceLocationUrls.push({
          url: `https://peartree.dental/services/${service.fields.slug}`,
          lastModified: new Date(service.sys.updatedAt),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        });

        for (const location of locations) {
          serviceLocationUrls.push({
            url: `https://peartree.dental/blog/${service.fields.slug}/${location.fields.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          });
        }
      }
    } else if (mode === 'full') {
      // Include all services and locations (potentially a lot of URLs)
      const [services, locations] = await Promise.all([
        fetchAllServices(),
        fetchAllLocations()
      ]);

      for (const service of services) {
        serviceLocationUrls.push({
          url: `https://peartree.dental/services/${service.fields.slug}`,
          lastModified: new Date(service.sys.updatedAt),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        });

        // Limit the combinations to avoid excessive URLs
        const topLocations = locations.slice(0, 50); // Limit to top 50 locations
        for (const location of topLocations) {
          serviceLocationUrls.push({
            url: `https://peartree.dental/blog/${service.fields.slug}/${location.fields.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          });
        }
      }
    } else {
      // 'staged' mode or any other - use a balanced approach
      const [services, locations] = await Promise.all([
        fetchAllServices(),
        fetchAllLocations()
      ]);

      // Filter priority services, or use top 10
      const priorityServices = services
        .filter(s => s.fields.priority)
        .length ? services.filter(s => s.fields.priority) : services.slice(0, 10);

      // Filter major locations, or use top 20
      const majorLocations = locations
        .filter(l => l.fields.tier === 'major')
        .length ? locations.filter(l => l.fields.tier === 'major') : locations.slice(0, 20);

      for (const service of priorityServices) {
        serviceLocationUrls.push({
          url: `https://peartree.dental/services/${service.fields.slug}`,
          lastModified: new Date(service.sys.updatedAt),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        });

        for (const location of majorLocations) {
          serviceLocationUrls.push({
            url: `https://peartree.dental/blog/${service.fields.slug}/${location.fields.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          });
        }
      }
    }

    // Combine all URLs
    return [...baseUrls, ...blogUrls, ...serviceLocationUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return baseUrls;
  }
}
