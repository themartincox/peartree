// src/lib/cohort-engine/cache.ts
export type GeoCacheRecord = {
  coords?: [number, number];      // [lat, lon]
  travelMinutes?: number;
  lastUpdated: number;            // epoch ms
};

const ONE_DAY = 1000 * 60 * 60 * 24;

export const geoCache = new Map<string, GeoCacheRecord>();

export function getGeoCache(key: string): GeoCacheRecord | undefined {
  const rec = geoCache.get(key);
  if (!rec) return undefined;
  const fresh = Date.now() - rec.lastUpdated < ONE_DAY;
  return fresh ? rec : undefined;
}

export function setGeoCache(
  key: string,
  value: Omit<GeoCacheRecord, "lastUpdated">
): GeoCacheRecord {
  const rec: GeoCacheRecord = { ...value, lastUpdated: Date.now() };
  geoCache.set(key, rec);
  return rec;
}

// Keep getCachedGeoData for backward compatibility
import { GeoData } from './geo';

export async function getCachedGeoData(
  ip: string,
  fetchFn: (ip: string) => Promise<GeoData>
): Promise<GeoData> {
  const now = Date.now();
  const cacheKey = `geo:${ip}`;

  // Check cache first
  const cachedItem = geoCache.get(cacheKey);

  if (cachedItem && now - cachedItem.lastUpdated < ONE_DAY) {
    return cachedItem as unknown as GeoData;
  }

  // Fetch fresh data
  try {
    const data = await fetchFn(ip);

    // Cache the result
    setGeoCache(cacheKey, {
      coords: data.latitude && data.longitude ? [data.latitude, data.longitude] : undefined,
      lastUpdated: now
    });

    return data;
  } catch (error) {
    // If we have stale cache data, return it as fallback
    if (cachedItem) {
      return cachedItem as unknown as GeoData;
    }

    // Otherwise return empty object
    return {};
  }
}

export function clearCache(key?: string): void {
  if (key) {
    geoCache.delete(key);
  } else {
    geoCache.clear();
  }
}

export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: geoCache.size,
    keys: Array.from(geoCache.keys())
  };
}
