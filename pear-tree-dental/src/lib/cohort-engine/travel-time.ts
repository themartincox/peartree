// src/lib/travel-time.ts
import { geoCache } from './cache';

interface TravelTimeEstimate {
  time: string;
  distance: string;
  mode: 'driving' | 'transit' | 'walking';
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Practice location coordinates (update with your actual practice location)
const PRACTICE_LOCATIONS = {
  nottingham: { latitude: 52.9548, longitude: -1.1581, name: 'Nottingham' },
  'west-bridgford': { latitude: 52.9334, longitude: -1.1260, name: 'West Bridgford' },
  'burton-joyce': { latitude: 52.9819, longitude: -1.0254, name: 'Burton Joyce' },
};

// Simple distance calculation using Haversine formula
function calculateDistance(start: Coordinates, end: Coordinates): number {
  const R = 6371; // Earth's radius in km
  const dLat = (end.latitude - start.latitude) * Math.PI / 180;
  const dLon = (end.longitude - start.longitude) * Math.PI / 180;
  const lat1 = start.latitude * Math.PI / 180;
  const lat2 = end.latitude * Math.PI / 180;

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Determine appropriate travel mode based on distance
function determineTravelMode(distanceKm: number): 'driving' | 'transit' | 'walking' {
  if (distanceKm <= 2) return 'walking';
  if (distanceKm <= 15) return 'transit';
  return 'driving';
}

// Calculate estimated travel time based on mode and distance
function calculateTravelTime(distanceKm: number, mode: 'driving' | 'transit' | 'walking'): number {
  // Average speeds in km/h
  const speeds = {
    walking: 5,
    transit: 20,
    driving: 40
  };

  // Calculate time in minutes
  return (distanceKm / speeds[mode]) * 60;
}

// Format travel time into a user-friendly string
function formatTravelTime(minutes: number): string {
  if (minutes < 1) return 'less than a minute';
  if (minutes < 60) return `${Math.round(minutes)} minutes`;

  const hours = Math.floor(minutes / 60);
  const remainingMins = Math.round(minutes % 60);

  if (remainingMins === 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
  return `${hours} hour${hours > 1 ? 's' : ''} and ${remainingMins} minute${remainingMins > 1 ? 's' : ''}`;
}

// Format distance into a user-friendly string
function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} meters`;
  return `${km.toFixed(1)} km`;
}

// Calculate travel estimate from user location to nearest practice
export async function estimateTravelTime(
  userLocation: Coordinates,
  practiceId?: keyof typeof PRACTICE_LOCATIONS
): Promise<TravelTimeEstimate | null> {
  try {
    // Try to use cached result first
    const cacheKey = `travel_${userLocation.latitude}_${userLocation.longitude}_${practiceId || 'nearest'}`;
    const cachedResult = geoCache.get(cacheKey);
    if (cachedResult) return cachedResult as TravelTimeEstimate;

    // Determine which practice to calculate for
    let practiceLocation: Coordinates & { name: string };

    if (practiceId && PRACTICE_LOCATIONS[practiceId]) {
      // Use specified practice
      practiceLocation = PRACTICE_LOCATIONS[practiceId];
    } else {
      // Find nearest practice
      let nearestPractice = null;
      let shortestDistance = Infinity;

      for (const [id, location] of Object.entries(PRACTICE_LOCATIONS)) {
        const distance = calculateDistance(userLocation, location);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearestPractice = location;
        }
      }

      if (!nearestPractice) return null;
      practiceLocation = nearestPractice;
    }

    // Calculate distance
    const distanceKm = calculateDistance(userLocation, practiceLocation);

    // Determine travel mode
    const mode = determineTravelMode(distanceKm);

    // Calculate travel time
    const travelTimeMinutes = calculateTravelTime(distanceKm, mode);

    // Format results
    const result: TravelTimeEstimate = {
      time: formatTravelTime(travelTimeMinutes),
      distance: formatDistance(distanceKm),
      mode
    };

    // Cache the result
    geoCache.set(cacheKey, result);

    return result;
  } catch (error) {
    console.error('Error estimating travel time:', error);
    return null;
  }
}

// Integration with Google Maps Distance Matrix API
// This is commented out as it requires API keys - use this in production
/*
export async function getGoogleMapsEstimate(
  origin: Coordinates,
  destination: Coordinates,
  mode: 'driving' | 'transit' | 'walking' = 'driving'
): Promise<TravelTimeEstimate | null> {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) throw new Error('Google Maps API key not configured');

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&mode=${mode}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK' || !data.rows[0]?.elements[0]) {
      throw new Error(`Google Maps API error: ${data.status}`);
    }

    const element = data.rows[0].elements[0];
    if (element.status !== 'OK') {
      throw new Error(`Route calculation error: ${element.status}`);
    }

    return {
      time: element.duration.text,
      distance: element.distance.text,
      mode
    };
  } catch (error) {
    console.error('Google Maps estimation error:', error);
    return null;
  }
}
*/
