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
    // Lightweight, no-permission, no-network path heuristic only
    try {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
      const nottinghamPaths = [
        '/nottingham-dentist',
        '/emergency-dentist-nottingham',
        '/nottingham-teeth-whitening',
        '/nottingham-smile-design',
        '/nottingham-teeth-straightening'
      ];
      const isNottinghamPath = nottinghamPaths.some((p) => currentPath.includes(p));
      setLocationInfo({
        isNottingham: isNottinghamPath,
        isDetected: true,
        area: isNottinghamPath ? 'Nottingham' : undefined,
        suburb: isNottinghamPath ? 'Nottingham' : undefined,
        postcode: isNottinghamPath ? 'NG1-NG17' : undefined,
      });
    } catch {
      setLocationInfo((prev) => ({ ...prev, isDetected: true }));
    }
  }, []);

  // Heavy reverse geocoding kept only for explicit request if ever needed
  const reverseGeocodeCoordinates = async (lat: number, lon: number) => {
    return { city: 'Unknown', suburb: 'Unknown', postcode: 'Unknown' };
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
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const preciseLocation = await checkIfNottinghamCoordinates(latitude, longitude);
            setLocationInfo(preciseLocation);
          },
          () => {
            setLocationInfo((prev) => ({ ...prev, isDetected: true }));
          },
          { timeout: 3000, enableHighAccuracy: false, maximumAge: 300000 }
        );
      }
    } catch {
      setLocationInfo((prev) => ({ ...prev, isDetected: true }));
    }
  };

  const detectByIPSilently = async () => {
    setLocationInfo((prev) => ({ ...prev, isDetected: true }));
  };

  const requestLocation = detectUserLocationSilently; // exposed but never auto-triggered
  return { ...locationInfo, requestLocation };
};
