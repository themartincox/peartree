import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/static/fonts/',
          '/book/confirm/',
          '/book/payment/',
          '/book/thank-you/',
          '/membership/signup/',
          '/membership/payment/',
          '/near-me/', // Redirect entry points, not for indexing
          '/account/',
          '/auth/',
          '/preview/',
          '/dashboard/',
          '/locations/test/',
          '/services/test/',
          '/blog/draft/',
          '/cohort-debug/', // Debug paths
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
    ],
    sitemap: [
      'https://peartree.dental/sitemap.xml',
      'https://peartree.dental/sitemap-blog.xml',
      'https://peartree.dental/sitemap-services.xml',
      'https://peartree.dental/sitemap-locations.xml',
    ],
    host: 'https://peartree.dental',
  }
}
