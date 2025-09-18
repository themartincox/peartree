"use client";

import { useState, useEffect } from 'react';

interface LocationInfo {
  isNottingham: boolean;
  isDetected: boolean;
  area?: string;
  suburb?: string; // Added suburb
  postcode?: string;
}

export const useLocationDetection = (): LocationInfo & { requestLocation: () => void } => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    isNottingham: false,
    isDetected: false
  });

  useEffect(() => {
    // Start detection immediately and silently
    detectUserLocationSilently();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reverseGeocodeCoordinates = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`);
      if (!response.ok) {
        throw new Error(`Nominatim request failed with status: ${response.status}`);
      }
      const data = await response.json();

      const address = data.address;
      const city = address.city || address.town || address.village || address.county;
      const suburb = address.suburb || address.neighbourhood;
      const postcode = address.postcode;

      return {
        city: city || 'Unknown',
        suburb: suburb || city || 'Unknown',
        postcode: postcode || 'Unknown',
      };
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
      return { city: 'Unknown', suburb: 'Unknown', postcode: 'Unknown' };
    }
  };

  const checkIfNottinghamCoordinates = async (lat: number, lon: number): Promise<LocationInfo> => {
    const geoData = await reverseGeocodeCoordinates(lat, lon);

    const isNottingham = geoData.city?.toLowerCase().includes('nottingham') ||
                         geoData.suburb?.toLowerCase().includes('nottingham') ||
                         geoData.postcode?.toLowerCase().startsWith('ng');

    return {
      isNottingham: isNottingham,
      isDetected: true,
      area: isNottingham ? 'Nottingham Area' : geoData.city || 'Outside Nottingham',
      suburb: geoData.suburb,
      postcode: geoData.postcode
    };
  };

  const detectUserLocationSilently = async () => {
    try {
      // Method 1: Check URL parameters for Nottingham-specific pages (instant)
      const currentPath = window.location.pathname;
      const nottinghamPaths = [
        '/nottingham-dentist',
        '/emergency-dentist-nottingham',
        '/nottingham-teeth-whitening',
        '/nottingham-smile-design',
        '/nottingham-teeth-straightening'
      ];

      if (nottinghamPaths.some(path => currentPath.includes(path))) {
        setLocationInfo({
          isNottingham: true,
          isDetected: true,
          area: 'Nottingham',
          postcode: 'NG1-NG17'
        });
        return;
      }

      // Method 2: Silent geolocation detection (no timeout warnings)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const preciseLocation = await checkIfNottinghamCoordinates(latitude, longitude);
            setLocationInfo(preciseLocation);
          },
          () => {
            // GPS failed or denied - try IP detection silently
            detectByIPSilently();
          },
          {
            timeout: 3000, // Shorter timeout for faster fallback
            enableHighAccuracy: false, // Faster, less battery usage
            maximumAge: 300000 // Use cached location for 5 minutes
          }
        );
      } else {
        // No geolocation - try IP detection
        detectByIPSilently();
      }
    } catch (error) {
      // Silent failure - just mark as not Nottingham
      setLocationInfo({
        isNottingham: false,
        isDetected: true
      });
    }
  };

  const detectByIPSilently = async () => {
    try {
      // Silent IP-based detection with short timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout

      const response = await fetch('/api/location-detect', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        // Use data directly from IP geolocation API route
        setLocationInfo({
          isNottingham: data.isLocal,
          isDetected: true,
          area: data.area,
          suburb: data.city, // IP geolocation often provides city as the most granular 'area'
          postcode: data.postcode
        });
      } else {
        // Fallback - assume not Nottingham
        setLocationInfo({
          isNottingham: false,
          isDetected: true
        });
      }
    } catch (error) {
      // Silent failure - just mark as not Nottingham
      setLocationInfo({
        isNottingham: false,
        isDetected: true
      });
    }
  };

  return { ...locationInfo, requestLocation: detectUserLocationSilently };
};