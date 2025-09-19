// src/lib/adMode.ts

/**
 * Utility to detect if the current page is being viewed in ad mode
 * Ad mode pages get special treatment:
 * - No indexing (noindex)
 * - Simplified UI (no header/footer navigation)
 * - More focused on conversion
 */
export function isAdMode(searchParams: URLSearchParams | null): boolean {
  if (!searchParams) return false
  return searchParams.get('ad') === '1'
}

/**
 * Helper to extract search params from URL in both client and server components
 */
export function getSearchParams(): URLSearchParams | null {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search)
}
