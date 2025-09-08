import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/dentalhub/',
        '/member2/',
        '/test-*',
        '/*?*', // Disallow URLs with query parameters
      ],
    },
    sitemap: 'https://peartree.dental/sitemap.xml',
  };
}
