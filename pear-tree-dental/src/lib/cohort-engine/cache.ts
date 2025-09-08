// src/lib/cohort-engine/cache.ts
import type { GeoData } from './geo';

// Simple in-memory cache for geo data
const geoCache = new Map<string, { data: GeoData; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

/**
 * Get cached geo data for an IP address, or fetch fresh data if needed
 */
export async function getCachedGeoData(
  ip: string,
  fetchFn: (ip: string) => Promise<GeoData>
): Promise<GeoData> {
  const now = Date.now();
  const cacheKey = `geo:${ip}`;

  // Check cache first
  const cachedItem = geoCache.get(cacheKey);

  if (cachedItem && now - cachedItem.timestamp < CACHE_TTL) {
    return cachedItem.data;
  }

  // Fetch fresh data
  try {
    const data = await fetchFn(ip);

    // Cache the result
    geoCache.set(cacheKey, {
      data,
      timestamp: now
    });

    return data;
  } catch (error) {
    // If we have stale cache data, return it as fallback
    if (cachedItem) {
      return cachedItem.data;
    }

    // Otherwise return empty object
    return {};
  }
}

/**
 * Clear the cache for a specific key or all keys
 */
export function clearCache(key?: string): void {
  if (key) {
    geoCache.delete(key);
  } else {
    geoCache.clear();
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: geoCache.size,
    keys: Array.from(geoCache.keys())
  };
}
