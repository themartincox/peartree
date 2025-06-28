// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern JavaScript targeting for performance
  // Note: modularizeImports removed - lucide-react now supports tree-shaking natively

  // Modern browser targeting - excludes legacy polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable SWC minification for better performance
    styledComponents: false,
  },

  // Performance optimizations
  experimental: {
    // Enable optimized CSS loading
    optimizeCss: true,
    // Enable modern JavaScript compilation
    esmExternals: true,
  },

  // Compression and caching
  compress: true,
  poweredByHeader: false,

  // Security headers
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
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Build optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      // Modern browser targeting - reduces polyfills
      config.target = 'web';

      // Optimize for modern ES2020+ browsers
      config.resolve.alias = {
        ...config.resolve.alias,
      };

      // Tree shaking optimizations
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }

    return config;
  },

  // Image optimization
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'], // Modern formats first
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  // Output optimization
  output: 'standalone',
};

module.exports = nextConfig;
