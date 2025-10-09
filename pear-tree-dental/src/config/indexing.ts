/**
 * Configuration for the index gate
 * These values are used to determine which service/suburb combinations are indexable
 */

// Services that are allowed to be indexed (e.g., high-priority services)
export const INDEX_PRIORITY_SERVICES = [
  ''dental-implants'-implants',
  'composite-bonding',
  'teeth-whitening',
  'clearcorrect'
];

// Suburbs that are allowed to be indexed (e.g., target geographic areas)
export const INDEX_ALLOWLIST_SUBURBS = [
  'nottingham',
  'mapperley',
  'gedling',
  'arnold',
  'hucknall',
  'west-bridgford',
  'ruddington',
  'beeston',
  'sherwood',
  'carlton',
  'edwalton',
  'gamston',
  'east-bridgford',
  'southwell'
];

// Minimum word count to index a page
export const INDEX_MIN_WORDS = 100;

// Flag: require local proof (testimonials) to index
export const INDEX_REQUIRE_LOCAL_PROOF = false;
