// src/lib/geo.ts
import { LocationEntry } from '@/types/contentful';
import { fetchAllLocations, getEntryField } from '@/lib/contentful';
import { getCachedGeoData } from './cache';

// Interface for geo data
export interface GeoData {
  city?: string;
  postcode?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

// Calculate the distance between two coordinates using the Haversine formula
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}

// Normalize city name for better matching
function normalizeCity(city: string): string {
  return city.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Find the nearest location based on geo data
export async function findNearestLocation(
  geoData: GeoData,
  preferredLocations: string[] = []
): Promise<LocationEntry | null> {
  try {
    // Fetch all locations
    const locations = await fetchAllLocations();

    if (!locations || locations.length === 0) {
      console.error('No locations available');
      return null;
    }

    // If we have preferred locations, try to match against those first
    if (preferredLocations.length > 0) {
      for (const loc of locations) {
        const slug = getEntryField<string>(loc, 'slug') || '';
        if (preferredLocations.includes(slug.toLowerCase())) {
          return loc;
        }
      }
    }

    // If no location found in preferredLocations, proceed with geo matching

    // If we have a city name, try to match directly by city/suburb
    if (geoData.city) {
      const normalizedCity = normalizeCity(geoData.city);

      // First pass: exact match
      for (const loc of locations) {
        const suburb = getEntryField<string>(loc, 'suburb') || '';
        const locCity = getEntryField<string>(loc, 'city') || '';

        if (
          normalizeCity(suburb) === normalizedCity ||
          normalizeCity(locCity) === normalizedCity
        ) {
          return loc;
        }
      }

      // Second pass: partial match
      for (const loc of locations) {
        const suburb = getEntryField<string>(loc, 'suburb') || '';
        const locCity = getEntryField<string>(loc, 'city') || '';

        if (
          normalizeCity(suburb).includes(normalizedCity) ||
          normalizedCity.includes(normalizeCity(suburb)) ||
          normalizeCity(locCity).includes(normalizedCity) ||
          normalizedCity.includes(normalizeCity(locCity))
        ) {
          return loc;
        }
      }
    }

    // If we have coordinates, use distance-based matching
    if (geoData.latitude && geoData.longitude) {
      let nearestLocation: LocationEntry | null = null;
      let shortestDistance = Number.MAX_SAFE_INTEGER;

      for (const loc of locations) {
        const lat = getEntryField<number>(loc, 'latitude');
        const lng = getEntryField<number>(loc, 'longitude');

        if (lat && lng) {
          const distance = calculateDistance(
            geoData.latitude,
            geoData.longitude,
            lat,
            lng
          );

          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestLocation = loc;
          }
        }
      }

      if (nearestLocation) {
        return nearestLocation;
      }
    }

    // If all else fails, return the first location as a fallback
    return locations[0];
  } catch (error) {
    console.error('Error finding nearest location:', error);
    return null;
  }
}

// Function to lookup geo information from IP address (without caching)
async function fetchGeoFromIp(ip: string): Promise<GeoData> {
  try {
    // In a real implementation, this would call a geo-IP service
    // For demo purposes, we'll simulate a response

    // Check if this looks like a local/private IP
    if (ip === '127.0.0.1' || ip.startsWith('10.') || ip.startsWith('192.168.')) {
      // Return Nottingham as a default for local development
      return {
        city: 'Nottingham',
        postcode: 'NG1',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 52.9548,
        longitude: -1.1581
      };
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    // Simple demo logic - would be replaced with actual API call
    const lastOctet = parseInt(ip.split('.').pop() || '0');

    // Different locations based on IP's last octet
    if (lastOctet % 5 === 0) {
      return {
        city: 'Nottingham',
        postcode: 'NG1',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 52.9548,
        longitude: -1.1581
      };
    } else if (lastOctet % 5 === 1) {
      return {
        city: 'West Bridgford',
        postcode: 'NG2',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 52.9334,
        longitude: -1.1260
      };
    } else if (lastOctet % 5 === 2) {
      return {
        city: 'Burton Joyce',
        postcode: 'NG14',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 52.9819,
        longitude: -1.0254
      };
    } else if (lastOctet % 5 === 3) {
      return {
        city: 'Gedling',
        postcode: 'NG4',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 52.9734,
        longitude: -1.0712
      };
    } else {
      return {
        city: 'Arnold',
        postcode: 'NG5',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        latitude: 53.0059,
        longitude: -1.1080
      };
    }
  } catch (error) {
    console.error('Error in geo-IP lookup:', error);
    return {};
  }
}

// Export the cached version of the function
export async function lookupGeoFromIp(ip: string): Promise<GeoData> {
  return getCachedGeoData(ip, fetchGeoFromIp);
}
