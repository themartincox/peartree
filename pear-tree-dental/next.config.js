
/** @type {import('next').NextConfig} */
const nextConfig = {
  // FIX: Removed typescript: { ignoreBuildErrors: true }
  // FIX: Removed eslint: { ignoreDuringBuilds: true }

  experimental: {
    typedRoutes: false,
  },

  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Build optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      // Modern browser targeting - reduces polyfills
      config.target = 'web';

      // Aggressive tree shaking optimizations
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        // FIX: Removed sideEffects: false. This is dangerous globally and can strip necessary CSS imports.

        // Remove unused CSS
        splitChunks: {
          ...(config.optimization.splitChunks || {}),
          cacheGroups: {
            ...((config.optimization.splitChunks && config.optimization.splitChunks.cacheGroups) || {}),
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };

      // Module concatenation for scope hoisting
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin(),
      );
    }

    // FIX: Removed the logic that filters out ESLint rules from Webpack.

    return config;
  },

  // Image optimization (No changes needed)
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
    ],
  },

  // Headers and Redirects (No changes needed)
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'Service-Worker-Allowed', value: '/' }
        ]
      },
      {
        source: '/manifest.json',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' }
        ]
      }
    ];
  },

  async redirects() {
    return [
      { source: '/smile-design', destination: '/services/smile-design', permanent: true },
      { source: '/urgent-dental-pain', destination: '/services/emergency/urgent-dental-pain', permanent: true },
      { source: '/wedding-day-smile', destination: '/services/cosmetic/wedding-day-smile', permanent: true },
      { source: '/veneers', destination: '/services/cosmetic/veneers', permanent: true },
      { source: '/services/clearcorrect', destination: '/services/orthodontics/clearcorrect', permanent: true },
      { source: '/services/invisalign', destination: '/services/orthodontics/invisalign', permanent: true },
      { source: '/services/teeth-whitening', destination: '/services/cosmetic/teeth-whitening', permanent: true },
    ]
  },
};

module.exports = nextConfig;
