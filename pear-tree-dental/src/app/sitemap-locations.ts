import type { MetadataRoute } from 'next'
import { fetchAllLocations, getEntryField } from '@/lib/contentful'

export default async function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Fetch all locations
  const locations = await fetchAllLocations()

  // Main locations page
  const staticRoutes = [
    {
      url: 'https://peartree.dental/locations',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://peartree.dental/find-a-dentist',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Individual location pages
  const locationRoutes = locations.map(location => {
    const slug = getEntryField<string>(location, 'slug') || ''
    const city = getEntryField<string>(location, 'city') || ''

    return {
      url: `https://peartree.dental/locations/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  // Locations with special features
  const specialLocationRoutes = locations
    .filter(location => getEntryField<string>(location, 'city') === 'Nottingham')
    .map(location => {
      const slug = getEntryField<string>(location, 'slug') || ''

      return {
        url: `https://peartree.dental/locations/${slug}/team`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })

  // Combine all routes
  return [
    ...staticRoutes,
    ...locationRoutes,
    ...specialLocationRoutes,
  ]
}
