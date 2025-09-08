#!/usr/bin/env node

/**
 * Enhanced Sitemap Generator for Pear Tree Dental
 *
 * This script creates a comprehensive sitemap.xml file in the public directory
 * It handles error gracefully and includes all major routes
 */

const fs = require('fs');
const path = require('path');

console.log('Generating sitemap...');

// Current date formatted for sitemap
const today = new Date().toISOString().split('T')[0];

// Basic static routes with proper prioritization
const routes = [
  // Core pages
  {
    url: 'https://peartree.dental',
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: 'https://peartree.dental/services',
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://peartree.dental/locations',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://peartree.dental/book',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://peartree.dental/contact',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://peartree.dental/about/practice',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/about/team',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/pricing',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://peartree.dental/membership',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://peartree.dental/blog',
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: 'https://peartree.dental/emergency',
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.9,
  },

  // Service pages
  {
    url: 'https://peartree.dental/services/general-dentistry',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/services/cosmetic-dentistry',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/services/orthodontics',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/services/dental-implants',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/services/emergency-dentist',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8,
  },

  // Location pages
  {
    url: 'https://peartree.dental/locations/nottingham',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/locations/west-bridgford',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/locations/burton-joyce',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/locations/gedling',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://peartree.dental/locations/arnold',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  },

  // Blog pages
  {
    url: 'https://peartree.dental/blog/dental-health-tips',
    lastmod: today,
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://peartree.dental/blog/teeth-whitening-guide',
    lastmod: today,
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://peartree.dental/blog/dental-implants-explained',
    lastmod: today,
    changefreq: 'yearly',
    priority: 0.6,
  },

  // Service + Location combinations
  {
    url: 'https://peartree.dental/blog/dental-implants/nottingham',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    url: 'https://peartree.dental/blog/dental-implants/west-bridgford',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    url: 'https://peartree.dental/blog/orthodontics-invisalign/nottingham',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    url: 'https://peartree.dental/blog/emergency-dentist/nottingham',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.6,
  }
];

// XML escape function for safety
function escapeXml(string) {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

try {
  // Generate sitemap XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const route of routes) {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(route.url)}</loc>\n`;
    if (route.lastmod) {
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    }
    if (route.changefreq) {
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    }
    if (route.priority) {
      xml += `    <priority>${route.priority}</priority>\n`;
    }
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write files
  // Main sitemap
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);

  // Create a copy as sitemap-blog.xml for compatibility
  const blogSitemapPath = path.join(publicDir, 'sitemap-blog.xml');
  fs.writeFileSync(blogSitemapPath, xml);

  console.log(`Sitemap generated successfully with ${routes.length} URLs`);
  console.log(`Main sitemap: ${sitemapPath}`);
  console.log(`Blog sitemap: ${blogSitemapPath}`);

  // Create a sitemap index file
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://peartree.dental/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://peartree.dental/sitemap-blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  // Write the sitemap index
  const sitemapIndexPath = path.join(publicDir, 'sitemap-index.xml');
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  console.log(`Sitemap index: ${sitemapIndexPath}`);

  // Create a robots.txt file if it doesn't exist
  const robotsPath = path.join(publicDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /book/confirm/
Disallow: /book/payment/
Disallow: /membership/signup/
Disallow: /membership/payment/
Disallow: /near-me/

Sitemap: https://peartree.dental/sitemap-index.xml
Sitemap: https://peartree.dental/sitemap.xml
Sitemap: https://peartree.dental/sitemap-blog.xml
`;
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log(`Created robots.txt: ${robotsPath}`);
  }

} catch (error) {
  console.error('Error generating sitemap:', error);

  // Attempt to create a minimal sitemap as fallback
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const minimalSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://peartree.dental</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, minimalSitemap);
    console.log('Created minimal fallback sitemap');
  } catch (fallbackError) {
    console.error('Failed to create fallback sitemap:', fallbackError);
  }
}
