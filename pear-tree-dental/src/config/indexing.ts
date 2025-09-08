// Configuration for the index gate
// These values are used to determine which service/suburb combinations are indexable

// Services that are allowed to be indexed (e.g., high-priority services)
export const INDEX_PRIORITY_SERVICES = [
  'orthodontics-clearcorrect',
  'cosmetic-teeth-whitening-enlighten',
  'orthodontics-invisalign',
  'dental-implants',
  'emergency-dentist',
  'cosmetic-dentistry',
  'general-dentistry',
  'family-dentistry',
  'teeth-whitening',
  'root-canal-treatment',
  'composite-bonding',
  'porcelain-veneers',
  'dental-crowns',
  'complete-smile-makeover',
];

// Suburbs that are allowed to be indexed (e.g., target geographic areas)
export const INDEX_ALLOWLIST_SUBURBS = [
  'nottingham',
  'west-bridgford',
  'burton-joyce',
  'gedling',
  'arnold',
  'ruddington',
  'beeston',
  'carlton',
  'mapperley',
  'lowdham',
  'east-bridgford',
  'bingham',
];

// Minimum word count for a page to be considered indexable
export const INDEX_MIN_WORDS = 350;

// Whether to require local proof for a page to be indexable
export const INDEX_REQUIRE_LOCAL_PROOF = false;

// Maximum number of URLs to include in the sitemap
export const SITEMAP_MAX_URLS = 2000;
