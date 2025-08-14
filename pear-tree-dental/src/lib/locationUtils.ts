export interface LocationInfo {
  area: string;
  postcode: string;
  travelTime: string;
  distance: string;
  route: string;
  specialOffer?: string;
  pageUrl?: string;
  features: string[];
}

export const SUPPORTED_LOCATIONS: { [key: string]: LocationInfo } = {
  // Area-based locations
  arnold: {
    area: "Arnold",
    postcode: "NG5",
    travelTime: "15 minutes",
    distance: "7.5 miles",
    route: "via A614 and A612",
    pageUrl: "/arnold",
    features: ["Free parking", "Easy access", "Family appointments"],
  },
  mapperly: {
    area: "Mapperly",
    postcode: "NG3",
    travelTime: "10 minutes",
    distance: "5.8 miles",
    route: "via Woodborough Road and A612",
    pageUrl: "/mapperly",
    features: ["Quick journey", "Flexible hours", "Community focused"],
  },
  "west-bridgford": {
    area: "West Bridgford",
    postcode: "NG2",
    travelTime: "12 minutes",
    distance: "8.2 miles",
    route: "via A52 and A612",
    specialOffer:
      "Receive 10% off treatments with our comprehensive care plans",
    pageUrl: "/west-bridgford",
    features: ["Premium care", "Advanced treatments", "Professional service"],
  },
  colwick: {
    area: "Colwick",
    postcode: "NG4",
    travelTime: "8 minutes",
    distance: "4.5 miles",
    route: "via A6011",
    pageUrl: "/colwick",
    features: ["Quick access", "Family care", "Flexible booking"],
  },
  rivendell: {
    area: "Rivendell",
    postcode: "NG14",
    travelTime: "6 minutes",
    distance: "3.2 miles",
    route: "local estate roads",
    specialOffer:
      "Receive 10% off treatments with our comprehensive care plans",
    pageUrl: "/rivendell",
    features: ["New resident welcome", "Children welcome", "Easy registration"],
  },

  // Postal code areas
  ng4: {
    area: "NG4 Area",
    postcode: "NG4",
    travelTime: "15-20 minutes",
    distance: "6-10 miles",
    route: "via A614 and A612",
    specialOffer:
      "Receive 10% off treatments with our comprehensive care plans",
    pageUrl: "/ng4-dental",
    features: ["Multiple routes", "Avoid city traffic", "NG4 priority booking"],
  },
  ng14: {
    area: "NG14 Area",
    postcode: "NG14",
    travelTime: "5-10 minutes",
    distance: "2-8 miles",
    route: "local roads",
    specialOffer:
      "Receive 10% off treatments with our comprehensive care plans",
    pageUrl: "/ng14-dental",
    features: ["Same postcode area", "Local practice", "New resident benefits"],
  },

  // Extended areas
  gedling: {
    area: "Gedling",
    postcode: "NG4",
    travelTime: "12 minutes",
    distance: "6.5 miles",
    route: "via A612",
    pageUrl: "/ng4-dental",
    features: ["Direct route", "Established patients", "Community care"],
  },
  carlton: {
    area: "Carlton",
    postcode: "NG4",
    travelTime: "18 minutes",
    distance: "9.2 miles",
    route: "via A612",
    pageUrl: "/ng4-dental",
    features: ["Straightforward journey", "Worth the trip", "Quality care"],
  },
  lowdham: {
    area: "Lowdham",
    postcode: "NG14",
    travelTime: "8 minutes",
    distance: "4.8 miles",
    route: "via A612",
    pageUrl: "/ng14-dental",
    features: [
      "Quick local journey",
      "Same postal area",
      "Village convenience",
    ],
  },
  calverton: {
    area: "Calverton",
    postcode: "NG14",
    travelTime: "12 minutes",
    distance: "7.1 miles",
    route: "via B6386 and A612",
    pageUrl: "/ng14-dental",
    features: ["Rural route", "Scenic journey", "Local practice"],
  },
};

export function detectLocationFromString(input: string): LocationInfo | null {
  const normalizedInput = input.toLowerCase().trim();

  // Direct area match
  if (SUPPORTED_LOCATIONS[normalizedInput]) {
    return SUPPORTED_LOCATIONS[normalizedInput];
  }

  // Postcode match
  for (const [key, location] of Object.entries(SUPPORTED_LOCATIONS)) {
    if (normalizedInput.startsWith(location.postcode.toLowerCase())) {
      return location;
    }
  }

  // Partial match
  for (const [key, location] of Object.entries(SUPPORTED_LOCATIONS)) {
    if (
      location.area.toLowerCase().includes(normalizedInput) ||
      normalizedInput.includes(location.area.toLowerCase())
    ) {
      return location;
    }
  }

  return null;
}

export function getLocationFromPostcode(postcode: string): LocationInfo | null {
  const normalizedPostcode = postcode.toUpperCase().replace(/\s/g, "");

  // Extract the area code (e.g., "NG4" from "NG4 1AB")
  const areaCode = normalizedPostcode.match(/^([A-Z]+\d+)/)?.[1];

  if (!areaCode) return null;

  // Find location by postcode area
  for (const location of Object.values(SUPPORTED_LOCATIONS)) {
    if (location.postcode === areaCode) {
      return location;
    }
  }

  return null;
}

export function calculateTravelTime(fromPostcode: string): string {
  const location = getLocationFromPostcode(fromPostcode);
  return location?.travelTime || "Contact for directions";
}

export function getSpecialOfferForArea(area: string): string | null {
  const location = detectLocationFromString(area);
  return location?.specialOffer || null;
}

export function getLocalPageUrl(area: string): string | null {
  const location = detectLocationFromString(area);
  return location?.pageUrl || null;
}

export function isInServiceArea(postcode: string): boolean {
  return getLocationFromPostcode(postcode) !== null;
}

export function getAllServiceAreas(): string[] {
  return Object.values(SUPPORTED_LOCATIONS).map((location) => location.area);
}

export function getLocationFeatures(area: string): string[] {
  const location = detectLocationFromString(area);
  return location?.features || [];
}

// Mock geolocation service - in production use a real service
export async function reverseGeocode(
  lat: number,
  lon: number,
): Promise<LocationInfo | null> {
  // Burton Joyce coordinates: approximately 52.9847, -1.0147
  const burtonJoyceDistance = Math.sqrt(
    (lat - 52.9847) ** 2 + (lon - -1.0147) ** 2,
  );

  // Simple distance-based detection for demo
  if (burtonJoyceDistance < 0.02) {
    return SUPPORTED_LOCATIONS.ng14; // Very close - likely NG14
  } else if (burtonJoyceDistance < 0.05) {
    return SUPPORTED_LOCATIONS.arnold; // Moderate distance
  } else if (burtonJoyceDistance < 0.08) {
    return SUPPORTED_LOCATIONS.mapperly; // Further but still reasonable
  } else if (burtonJoyceDistance < 0.12) {
    return SUPPORTED_LOCATIONS.ng4; // NG4 area
  }

  return null;
}

// IP-based location detection - in production use a real service like ipapi.co
export async function detectLocationByIP(): Promise<LocationInfo | null> {
  try {
    // Mock implementation - in production you'd call a real IP geolocation service
    // For demo purposes, randomly return one of our service areas
    const locations = Object.values(SUPPORTED_LOCATIONS);
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return randomLocation;
  } catch (error) {
    console.error("IP-based location detection failed:", error);
    return null;
  }
}

export interface LocationSuggestion {
  area: string;
  confidence: number;
  reason: string;
}

export function suggestLocations(userInput: string): LocationSuggestion[] {
  const input = userInput.toLowerCase();
  const suggestions: LocationSuggestion[] = [];

  for (const [key, location] of Object.entries(SUPPORTED_LOCATIONS)) {
    let confidence = 0;
    let reason = "";

    // Exact area match
    if (location.area.toLowerCase() === input) {
      confidence = 100;
      reason = "Exact area match";
    }
    // Postcode match
    else if (input.includes(location.postcode.toLowerCase())) {
      confidence = 90;
      reason = "Postcode match";
    }
    // Partial area match
    else if (
      location.area.toLowerCase().includes(input) ||
      input.includes(location.area.toLowerCase())
    ) {
      confidence = 70;
      reason = "Partial area match";
    }
    // Route contains input
    else if (location.route.toLowerCase().includes(input)) {
      confidence = 50;
      reason = "Route proximity";
    }

    if (confidence > 0) {
      suggestions.push({
        area: location.area,
        confidence,
        reason,
      });
    }
  }

  return suggestions.sort((a, b) => b.confidence - a.confidence);
}

// Storage functions for user preferences
export function saveUserLocation(location: LocationInfo): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("userLocation", JSON.stringify(location));
  }
}

export function getUserLocation(): LocationInfo | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("userLocation");
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

export function clearUserLocation(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userLocation");
  }
}
