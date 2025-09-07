// src/lib/cache.ts
import { GeoData } from './geo';

// Cache configuration
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours in milliseconds
const MAX_CACHE_SIZE = 1000; // Maximum number of entries

// Cache entry type
interface CacheEntry<T> {
  value: T;
  timestamp: number;
}

// In-memory cache implementation
export class MemoryCache<T> {
  private cache: Map<string, CacheEntry<T>>;
  private ttl: number;
  private hits: number = 0;
  private misses: number = 0;

  constructor(ttl = CACHE_TTL) {
    this.cache = new Map();
    this.ttl = ttl;
  }

  // Get an item from cache
  get(key: string): T | null {
    // Clean expired entries occasionally (every 100 gets)
    if (Math.random() < 0.01) {
      this.cleanExpired();
    }

    const entry = this.cache.get(key);

    // Return null if entry doesn't exist or is expired
    if (!entry || Date.now() - entry.timestamp > this.ttl) {
      if (entry) {
        // Remove expired entry
        this.cache.delete(key);
      }
      this.misses++;
      return null;
    }

    this.hits++;
    return entry.value;
  }

  // Set an item in cache
  set(key: string, value: T): void {
    // Ensure cache doesn't grow too large
    if (this.cache.size >= MAX_CACHE_SIZE) {
      this.cleanOldest();
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  // Delete an item from cache
  delete(key: string): void {
    this.cache.delete(key);
  }

  // Clear all items from cache
  clear(): void {
    this.cache.clear();
  }

  // Get cache size
  size(): number {
    return this.cache.size;
  }

  // Get cache hits
  getHits(): number {
    return this.hits;
  }

  // Get cache misses
  getMisses(): number {
    return this.misses;
  }

  // Get hit rate
  getHitRate(): number {
    const total = this.hits + this.misses;
    if (total === 0) return 0;
    return (this.hits / total) * 100;
  }

  // Reset stats
  resetStats(): void {
    this.hits = 0;
    this.misses = 0;
  }

  // Remove expired entries
  cleanExpired(): void {
    const now = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Remove oldest entries if cache is too large
  cleanOldest(): void {
    // Convert to array for sorting
    const entries = Array.from(this.cache.entries());

    // Sort by timestamp (oldest first)
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp);

    // Remove oldest 20% of entries
    const toRemove = Math.ceil(entries.length * 0.2);

    for (let i = 0; i < toRemove; i++) {
      if (entries[i]) {
        this.cache.delete(entries[i][0]);
      }
    }
  }
}

// Create a singleton instance for geo data cache
export const geoCache = new MemoryCache<GeoData>();

// Function to get geo data with caching
export async function getCachedGeoData(
  ip: string,
  fetchFunction: (ip: string) => Promise<GeoData>
): Promise<GeoData> {
  // Try to get from cache first
  const cachedData = geoCache.get(ip);

  if (cachedData) {
    // Log cache hit
    console.log(`[Cache] Hit for IP: ${ip}`);
    return cachedData;
  }

  // If not in cache, fetch the data
  console.log(`[Cache] Miss for IP: ${ip}`);
  const geoData = await fetchFunction(ip);

  // Store in cache
  geoCache.set(ip, geoData);

  return geoData;
}
