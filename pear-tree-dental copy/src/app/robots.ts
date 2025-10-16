import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peartree.dental";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/_next/",
          "/api/",
          "/admin/",
          "/dentalhub/",
          "/member2/",
          "/test-*",
          "/*?*", // Disallow URLs with query parameters
          "*/admin",
          "*/wp-admin",
          "*/wp-login.php",
        ],
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}
