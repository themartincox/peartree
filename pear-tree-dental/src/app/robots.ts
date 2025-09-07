import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/book/',
        '/membership/signup/',
      ],
    },
    sitemap: 'https://peartree.dental/sitemap.xml',
    host: 'https://peartree.dental',
  }
}
