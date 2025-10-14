// Force dynamic generation to avoid prerendering at build time
export const dynamic = "force-dynamic";

import type { MetadataRoute } from 'next';
import { fetchBlogPosts, contentfulHealthCheck } from '@/lib/contentful'
import { fetchIndexableServiceLocationPaths } from '@/lib/sitemap-serviceLocation'
import { collectAppStaticRoutes, collectFallbackServiceRoutes } from '@/lib/sitemap-fallbacks'
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

  // Always include filesystem static routes and in-repo fallback service routes
  const fsStatic = await collectAppStaticRoutes().catch(() => []);
  const fallbackServiceRoutes = collectFallbackServiceRoutes();

  // Check if Contentful is healthy before fetching dynamic data
  const isContentfulHealthy = await contentfulHealthCheck();

  try {
    const [blogPosts, categories, treatments, serviceLocationPaths] = isContentfulHealthy
      ? await Promise.all([
          fetchBlogPosts(100),
          fetchCategorySlugs(),
          fetchTreatmentSlugs(),
          fetchIndexableServiceLocationPaths(),
        ])
      : [[], [], [], []] as any;

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

    // Include only content-rich, indexable service-location URLs
    const serviceLocationUrls = serviceLocationPaths.map((p) => ({
      url: `https://peartree.dental${p.path}`,
      lastModified: toISO(p.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // Merge all, then dedupe by URL
    const merged: MetadataRoute.Sitemap = [
      ...baseUrls,
      ...fsStatic,
      ...fallbackServiceRoutes,
      ...categoryUrls,
      ...treatmentUrls,
      ...blogUrls,
      ...serviceLocationUrls,
    ];

    const seen = new Set<string>();
    const deduped = merged.filter((u) => {
      const url = (u as any).url;
      if (!url) return false;
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });

    return deduped;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Fallback to base + filesystem + in-repo service fallbacks
    const nowFallback: MetadataRoute.Sitemap = [
      ...baseUrls,
      ...await collectAppStaticRoutes().catch(() => []),
      ...collectFallbackServiceRoutes(),
    ];
    // Deduplicate
    const seen = new Set<string>();
    return nowFallback.filter((u) => {
      const url = (u as any).url;
      if (!url) return false;
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
  }
}
