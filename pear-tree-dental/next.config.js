/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Essential image configuration for Netlify / Next
  images: {
    formats: ["image/avif", "image/webp"], // allow AVIF/WebP
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ext.same-assets.com" },
      { protocol: "https", hostname: "ugc.same-assets.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "azdentist.com" },
      { protocol: "https", hostname: "thumbs.dreamstime.com" },
    ],
    // NOTE: no global "qualities" option—use the <Image quality={...} /> prop
  },

  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  transpilePackages: ["framer-motion"],
  serverExternalPackages: ["sharp", "contentful"],

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        net: false,
        tls: false,
        path: false,
      };
    }
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.join(process.cwd(), "src"),
    };
    return config;
  },

  experimental: {
    // Remove deprecated flags; keep the useful ones
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
    serverActions: { bodySizeLimit: "5mb" },
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/about", destination: "/about/practice", permanent: true },
      { source: "/blog", destination: "/patient-education", permanent: true },
      { source: "/blog/:slug", destination: "/patient-education/:slug", permanent: true },
    ];
  },
};

if (process.env.ANALYZE === "true") {
  try {
    const withAnalyzer = require("@next/bundle-analyzer")({ enabled: true });
    module.exports = withAnalyzer(nextConfig);
  } catch (err) {
    console.warn("[next.config] @next/bundle-analyzer not installed; skipping analyzer.");
    module.exports = nextConfig;
  }
} else {
  module.exports = nextConfig;
}