import type { MetadataRoute } from 'next'
import { fetchAllServices, getEntryField } from '@/lib/contentful'

export default async function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Fetch all services
  const services = await fetchAllServices()

  // Main services page
  const staticRoutes = [
    {
      url: 'https://peartree.dental/services',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]

  // Individual service pages
  const serviceRoutes = services.map(service => {
    const slug = getEntryField<string>(service, 'slug') || ''
    return {
      url: `https://peartree.dental/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  // Service category pages
  const categoryRoutes = [
    {
      url: 'https://peartree.dental/services/categories/cosmetic',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/services/categories/general',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/services/categories/emergency',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/services/categories/orthodontics',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://peartree.dental/services/categories/children',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Combine all routes
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...categoryRoutes,
  ]
}
