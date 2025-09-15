/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential image configuration for Netlify
  images: {
    // domains: [
    //   'source.unsplash.com',
    //   'images.unsplash.com',
    //   'ext.same-assets.com',
    //   'ugc.same-assets.com',
    //   'images.ctfassets.net', // Contentful images
    // ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'ugc.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'azdentist.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
    ],
    qualities: [85],
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

  // External packages that need to be transpiled
  transpilePackages: ['framer-motion'],
  serverExternalPackages: ['sharp', 'contentful'],

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        path: false,
      };
    }

    return config;
  },

  // Runtime settings to optimize for Node.js
  experimental: {
    disableOptimizedLoading: true,
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },

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
      {
        source: '/blog',
        destination: '/patient-education',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/patient-education/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
