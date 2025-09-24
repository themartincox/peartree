// Force dynamic generation to avoid prerendering at build time
export const dynamic = "force-dynamic";

import type { MetadataRoute } from 'next';
import {
  fetchBlogPosts,
  fetchPriorityLocations,
  fetchAllLocations,
  contentfulHealthCheck,
} from '@/lib/contentful'
import { fetchCategorySlugs, fetchTreatmentSlugs } from '@/lib/services'

// Helper function to safely convert dates to ISO string
const toISO = (input?: string | number | Date) => {
  if (!input) return new Date().toISOString();
  const d = new Date(input);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
};

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
      url: 'https://peartree.dental/patient-education',
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
    const mode = process.env.GENERATION_MODE || 'priority';

    const [blogPosts, categories, treatments] = await Promise.all([
      fetchBlogPosts(100),
      fetchCategorySlugs(),
      fetchTreatmentSlugs(),
    ]);

    const blogUrls = blogPosts.map(post => ({
      url: `https://peartree.dental/patient-education/${post.fields.slug}`,
      lastModified: toISO(post.sys?.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const categoryUrls = categories.map(category => ({
      url: `https://peartree.dental/services/${category.slug}`,
      lastModified: toISO(category.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    const treatmentUrls = treatments
      .filter(treatment => treatment.parentSlug)
      .map(treatment => ({
        url: `https://peartree.dental/services/${treatment.parentSlug}/${treatment.slug}`,
        lastModified: toISO(treatment.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    let serviceSubset = categories;
    let locationSubset = [] as Awaited<ReturnType<typeof fetchAllLocations>>;

    if (mode === 'priority') {
      locationSubset = await fetchPriorityLocations();
      if (!locationSubset.length) {
        locationSubset = await fetchAllLocations();
      }
      serviceSubset = categories.slice(0, Math.min(6, categories.length));
    } else if (mode === 'full') {
      locationSubset = await fetchAllLocations();
      serviceSubset = categories;
    } else {
      const allLocations = await fetchAllLocations();
      const majorLocations = allLocations.filter(loc => loc.fields.tier === 'major');
      locationSubset = majorLocations.length ? majorLocations : allLocations.slice(0, 20);
      serviceSubset = categories.slice(0, Math.min(10, categories.length));
    }

    const selectedLocations = locationSubset.slice(0, mode === 'full' ? 50 : locationSubset.length);

    const serviceLocationUrls: MetadataRoute.Sitemap = [];
    const blogServiceSuburbUrls: MetadataRoute.Sitemap = [];

    for (const service of serviceSubset) {
      for (const location of selectedLocations) {
        const serviceSlug = service.slug;
        const locationSlug = location.fields.slug;

        serviceLocationUrls.push({
          url: `https://peartree.dental/services-location/${serviceSlug}/${locationSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });

        blogServiceSuburbUrls.push({
          url: `https://peartree.dental/blog/${serviceSlug}/${locationSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });
      }
    }

    return [
      ...baseUrls,
      ...categoryUrls,
      ...treatmentUrls,
      ...serviceLocationUrls,
      ...blogServiceSuburbUrls,
      ...blogUrls,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return baseUrls;
  }
}
