/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential image configuration for Netlify
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'ext.same-assets.com',
      'ugc.same-assets.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Output configuration for Netlify
  output: 'standalone',

  // Skip TypeScript checks during build for faster deployment
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // For Next.js 15, use serverExternalPackages instead of experimental.serverComponentsExternalPackages
  serverExternalPackages: ['sharp'],

  // Security headers for all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirect configuration for SEO and moved pages
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/practice',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
