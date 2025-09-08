#!/usr/bin/env node

/**
 * Sitemap Generator CLI Tool for Pear Tree Dental
 *
 * This script generates sitemaps for the blog pages based on indexability rules.
 * It can be run from the command line or as part of a build process.
 *
 * Usage:
 *   node scripts/generate-sitemap.js [options]
 *
 * Options:
 *   --output <path>       Output file path (default: public/sitemap-blog.xml)
 *   --base-url <url>      Base URL for sitemap entries (default: https://peartree.dental)
 *   --max <number>        Maximum number of URLs to include (default: 2000)
 *   --content-only        Only include pages with enough content
 *   --priority-only       Only include priority services
 *   --allowlist-only      Only include allowlisted suburbs
 *   --require-local-proof Require local proof for indexability
 *   --verbose             Show verbose output
 *   --help                Show this help message
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config();

// Default options
const options = {
  output: 'public/sitemap-blog.xml',
  baseUrl: 'https://peartree.dental',
  max: process.env.SITEMAP_MAX_URLS || 2000,
  contentOnly: true,
  priorityOnly: true,
  allowlistOnly: true,
  requireLocalProof: process.env.INDEX_REQUIRE_LOCAL_PROOF === 'true',
  verbose: false,
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--output' && i + 1 < args.length) {
      options.output = args[++i];
    } else if (arg === '--base-url' && i + 1 < args.length) {
      options.baseUrl = args[++i];
    } else if (arg === '--max' && i + 1 < args.length) {
      options.max = parseInt(args[++i], 10);
    } else if (arg === '--content-only') {
      options.contentOnly = true;
    } else if (arg === '--no-content-only') {
      options.contentOnly = false;
    } else if (arg === '--priority-only') {
      options.priorityOnly = true;
    } else if (arg === '--no-priority-only') {
      options.priorityOnly = false;
    } else if (arg === '--allowlist-only') {
      options.allowlistOnly = true;
    } else if (arg === '--no-allowlist-only') {
      options.allowlistOnly = false;
    } else if (arg === '--require-local-proof') {
      options.requireLocalProof = true;
    } else if (arg === '--no-require-local-proof') {
      options.requireLocalProof = false;
    } else if (arg === '--verbose') {
      options.verbose = true;
    } else if (arg === '--help') {
      showHelp();
      process.exit(0);
    }
  }
}

// Show help message
function showHelp() {
  console.log(`
Sitemap Generator CLI Tool for Pear Tree Dental

Usage:
  node scripts/generate-sitemap.js [options]

Options:
  --output <path>       Output file path (default: public/sitemap-blog.xml)
  --base-url <url>      Base URL for sitemap entries (default: https://peartree.dental)
  --max <number>        Maximum number of URLs to include (default: 2000)
  --content-only        Only include pages with enough content
  --no-content-only     Include pages regardless of content length
  --priority-only       Only include priority services
  --no-priority-only    Include all services
  --allowlist-only      Only include allowlisted suburbs
  --no-allowlist-only   Include all suburbs
  --require-local-proof Require local proof for indexability
  --no-require-local-proof Don't require local proof
  --verbose             Show verbose output
  --help                Show this help message
  `);
}

// Log message if verbose mode is enabled
function verboseLog(message) {
  if (options.verbose) {
    console.log(message);
  }
}

// Get priority services from environment
function getPriorityServices() {
  const envList = process.env.INDEX_PRIORITY_SERVICES;
  if (!envList) return [];

  return envList.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
}

// Get allowlist suburbs from environment
function getAllowlistSuburbs() {
  const envList = process.env.INDEX_ALLOWLIST_SUBURBS;
  if (!envList) return [];

  return envList.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
}

// Get minimum word count from environment
function getMinWords() {
  return parseInt(process.env.INDEX_MIN_WORDS || '350', 10);
}

// XML escape a string
function xmlEscape(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;');
}

// Check if a page is indexable based on the rules
function isIndexable(service, location, hasEnoughContent, hasLocalProof) {
  const priorityServices = getPriorityServices();
  const allowlistSuburbs = getAllowlistSuburbs();

  // Check if service is in priority list
  if (options.priorityOnly && !priorityServices.includes(service.toLowerCase())) {
    return false;
  }

  // Check if suburb is in allowlist
  if (options.allowlistOnly && !allowlistSuburbs.includes(location.toLowerCase())) {
    return false;
  }

  // Check if page has enough content
  if (options.contentOnly && !hasEnoughContent) {
    return false;
  }

  // Check if page has local proof
  if (options.requireLocalProof && !hasLocalProof) {
    return false;
  }

  return true;
}

// Generate sitemap XML
function generateSitemap(services, locations) {
  const priorityServices = getPriorityServices();
  const allowlistSuburbs = getAllowlistSuburbs();

  verboseLog(`Found ${services.length} services and ${locations.length} locations`);
  verboseLog(`Priority services: ${priorityServices.join(', ')}`);
  verboseLog(`Allowlist suburbs: ${allowlistSuburbs.join(', ')}`);

  // Generate URLs
  const urls = [];
  let indexableCount = 0;
  let nonIndexableCount = 0;

  for (const service of services) {
    for (const location of locations) {
      // In a real implementation, we would check content length and local proof
      // For this tool, we'll simulate these checks
      const hasEnoughContent = Math.random() > 0.2; // 80% chance of having enough content
      const hasLocalProof = Math.random() > 0.5; // 50% chance of having local proof

      const indexable = isIndexable(service, location, hasEnoughContent, hasLocalProof);

      if (indexable) {
        indexableCount++;
        urls.push({
          loc: `${options.baseUrl}/blog/${service}/${location}`,
          lastmod: new Date().toISOString().split('T')[0],
        });

        if (urls.length >= options.max) {
          verboseLog(`Reached maximum URLs limit (${options.max})`);
          break;
        }
      } else {
        nonIndexableCount++;
      }
    }

    if (urls.length >= options.max) {
      break;
    }
  }

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${xmlEscape(url.loc)}</loc>\n`;
    if (url.lastmod) {
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  return {
    xml,
    stats: {
      total: indexableCount + nonIndexableCount,
      indexable: indexableCount,
      nonIndexable: nonIndexableCount,
    },
  };
}

// Main function
async function main() {
  parseArgs();

  console.log('Generating sitemap...');
  verboseLog(`Options: ${JSON.stringify(options, null, 2)}`);

  // In a real implementation, we would fetch data from Contentful
  // For this tool, we'll use dummy data
  const services = options.priorityOnly
    ? getPriorityServices()
    : [
        'orthodontics-clearcorrect',
        'cosmetic-teeth-whitening-enlighten',
        'orthodontics-invisalign',
        'general-dentistry',
        'dental-implants',
        'cosmetic-dentistry',
      ];

  const locations = options.allowlistOnly
    ? getAllowlistSuburbs()
    : [
        'nottingham',
        'west-bridgford',
        'burton-joyce',
        'gedling',
        'arnold',
        'ruddington',
        'beeston',
        'carlton',
        'mapperley',
      ];

  // Generate sitemap
  const { xml, stats } = generateSitemap(services, locations);

  // Ensure output directory exists
  const outputDir = path.dirname(options.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write sitemap to file
  fs.writeFileSync(options.output, xml);

  console.log(`Sitemap generated at ${options.output}`);
  console.log(`Total pages: ${stats.total}`);
  console.log(`Indexable pages: ${stats.indexable}`);
  console.log(`Non-indexable pages: ${stats.nonIndexable}`);

  // If the output path is under public/, ensure the directory exists
  if (options.output.startsWith('public/')) {
    const publicPath = options.output.replace(/^public\//, '');
    console.log(`Sitemap will be available at: ${options.baseUrl}/${publicPath}`);
  }
}

// Run the main function
main().catch(error => {
  console.error('Error generating sitemap:', error);
  process.exit(1);
});
