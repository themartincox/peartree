// src/lib/cohort-engine/adMode.ts

/**
 * Detect if the current page is being accessed in "ad mode"
 * (i.e., from a PPC campaign or other advertising source)
 */
export function isAdMode(searchParams: URLSearchParams | null): boolean {
  if (!searchParams) return false;

  // Check for common ad parameters
  if (searchParams.has('utm_source')) return true;
  if (searchParams.has('gclid')) return true; // Google Ads click ID
  if (searchParams.has('fbclid')) return true; // Facebook click ID
  if (searchParams.has('msclkid')) return true; // Microsoft click ID

  // Check for custom ad parameter
  if (searchParams.has('ad') && searchParams.get('ad') === 'true') return true;

  // Check for specific campaign parameter
  const campaign = searchParams.get('utm_campaign');
  if (campaign && campaign.toLowerCase().includes('ppc')) return true;

  return false;
}
