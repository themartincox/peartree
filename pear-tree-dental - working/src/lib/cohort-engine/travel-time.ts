// src/lib/cohort-engine/travel-time.ts

// Define travel estimate interface
export interface TravelEstimate {
  time: string;
  distance: string;
  mode: 'driving' | 'transit' | 'walking';
}

// Mock coordinates for locations
const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  'burton-joyce': { lat: 52.9819, lng: -1.0254 },
  'nottingham': { lat: 52.9548, lng: -1.1581 },
  'west-bridgford': { lat: 52.9334, lng: -1.1260 },
  'arnold': { lat: 53.0059, lng: -1.1080 },
  'carlton': { lat: 52.9660, lng: -1.0927 },
  'mapperley': { lat: 52.9770, lng: -1.1230 },
};

// Practice location coordinates
const practiceCoordinates = { lat: 52.9819, lng: -1.0254 }; // Burton Joyce location

// Calculate haversine distance between two points
function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Determine the best travel mode based on distance
function determineTravelMode(distanceKm: number): 'driving' | 'transit' | 'walking' {
  if (distanceKm < 2) return 'walking';
  if (distanceKm < 10) return 'transit';
  return 'driving';
}

// Format distance in km or miles
function formatDistance(distanceKm: number): string {
  const miles = distanceKm * 0.621371;

  if (miles < 0.1) {
    return '< 0.1 miles';
  } else if (miles < 1) {
    return `${(miles * 10).toFixed(0) / 10} miles`;
  } else {
    return `${miles.toFixed(1)} miles`;
  }
}

// Format travel time in minutes
function formatTime(distanceKm: number, mode: 'driving' | 'transit' | 'walking'): string {
  // Rough estimation of travel times
  let speedKmH: number;

  switch(mode) {
    case 'walking':
      speedKmH = 5;
      break;
    case 'transit':
      speedKmH = 15;
      break;
    case 'driving':
      speedKmH = 30;
      break;
  }

  const timeHours = distanceKm / speedKmH;
  const timeMinutes = Math.ceil(timeHours * 60);

  if (timeMinutes < 60) {
    return `${timeMinutes} min`;
  } else {
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes % 60;
    return minutes > 0 ? `${hours} hr ${minutes} min` : `${hours} hr`;
  }
}

// Main function to estimate travel time
export async function estimateTravelTime(
  userCoords: { latitude: number; longitude: number },
  locationSlug?: string
): Promise<TravelEstimate | null> {
  try {
    // Destination coordinates - default to practice location
    const destinationCoords = locationSlug && locationCoordinates[locationSlug]
      ? locationCoordinates[locationSlug]
      : practiceCoordinates;

    // Calculate distance
    const distanceKm = haversineDistance(
      userCoords.latitude,
      userCoords.longitude,
      destinationCoords.lat,
      destinationCoords.lng
    );

    // Determine travel mode
    const mode = determineTravelMode(distanceKm);

    // Format distance
    const distance = formatDistance(distanceKm);

    // Format time
    const time = formatTime(distanceKm, mode);

    return { time, distance, mode };
  } catch (error) {
    console.error('Error estimating travel time:', error);
    return null;
  }
}
