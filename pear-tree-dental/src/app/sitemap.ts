import type { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peartree.dental'
  const now = new Date()
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // High-value pages
    {
      url: `${baseUrl}/membership`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/practice`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/team`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Service category pages
    {
      url: `${baseUrl}/services/general`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/cosmetic`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/emergency`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/restorative`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/implants`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/orthodontics`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Individual service pages
    {
      url: `${baseUrl}/services/teeth-whitening`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/veneers`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/invisalign`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/clearcorrect`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/emergency-repairs`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Geographic landing pages
    {
      url: `${baseUrl}/burton-joyce`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/colwick`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lowdham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/east-bridgford`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Membership related pages
    {
      url: `${baseUrl}/membership/signup`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/smile-design`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Competitive comparison pages
    {
      url: `${baseUrl}/the-dental-suite-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/the-dental-suite-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/park-dental-care-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/park-dental-care-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sherwood-dental-care-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sherwood-dental-care-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/hilton-dental-clinic-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/hilton-dental-clinic-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/city-dental-nottingham-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/city-dental-nottingham-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/westdale-dental-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/westdale-dental-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/market-street-dental-care-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/market-street-dental-care-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/dental-health-centre-nottingham-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/dental-health-centre-nottingham-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/mapperley-dental-practice-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/mapperley-dental-practice-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/carlton-dental-surgery-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/carlton-dental-surgery-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/arnold-dental-care-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/arnold-dental-care-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/impressions-dental-care-reviews-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/impressions-dental-care-alternative-nottingham`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
