import type { MetadataRoute } from 'next'
import {
  fetchAllServices,
  fetchAllLocations,
  fetchBlogPosts,
  getEntryField
} from '@/lib/contentful'
import { INDEX_PRIORITY_SERVICES, INDEX_ALLOWLIST_SUBURBS } from '@/config/indexing'

export default async function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Main blog index page
  const staticRoutes = [
    {
      url: 'https://peartree.dental/blog',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://peartree.dental/blog/categories/dental-health',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/blog/categories/treatments',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/blog/categories/practice-news',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Fetch blog posts
  const blogPosts = await fetchBlogPosts()

  // Blog post routes
  const blogPostRoutes = blogPosts.map(post => {
    const slug = post.fields.slug

    return {
      url: `https://peartree.dental/blog/${slug}`,
      lastModified: new Date(post.fields.publishDate || currentDate),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }
  })

  // Service-location combination routes
  const [services, locations] = await Promise.all([
    fetchAllServices(),
    fetchAllLocations()
  ])

  // Filter services by priority list
  const priorityServices = services.filter(service => {
    const slug = getEntryField<string>(service, 'slug')
    return slug && INDEX_PRIORITY_SERVICES.includes(slug.toLowerCase())
  })

  // Filter locations by allowlist
  const allowedLocations = locations.filter(location => {
    const slug = getEntryField<string>(location, 'slug')
    return slug && INDEX_ALLOWLIST_SUBURBS.includes(slug.toLowerCase())
  })

  // Generate service-location combinations
  const serviceLocationRoutes: MetadataRoute.Sitemap = []

  for (const service of priorityServices) {
    const serviceSlug = getEntryField<string>(service, 'slug')
    if (!serviceSlug) continue

    for (const location of allowedLocations) {
      const locationSlug = getEntryField<string>(location, 'slug')
      if (!locationSlug) continue

      serviceLocationRoutes.push({
        url: `https://peartree.dental/blog/${serviceSlug}/${locationSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  // Combine all routes
  return [
    ...staticRoutes,
    ...blogPostRoutes,
    ...serviceLocationRoutes,
  ]
}
