"use client";

import { useState, useEffect } from 'react';

interface LocationInfo {
  isNottingham: boolean;
  isDetected: boolean;
  area?: string;
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
        postcode: isNottinghamPath ? 'NG1-NG17' : undefined,
      });
    } catch {
      setLocationInfo((prev) => ({ ...prev, isDetected: true }));
    }
  }, []);

  // Heavy detection kept behind explicit request for potential future use
  const detectUserLocationSilently = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const isNottinghamArea = checkIfNottinghamCoordinates(latitude, longitude);
            setLocationInfo({
              isNottingham: isNottinghamArea,
              isDetected: true,
              area: isNottinghamArea ? 'Nottingham Area' : 'Outside Nottingham',
              postcode: isNottinghamArea ? 'NG Area' : 'Other'
            });
          },
          () => {
            // Geolocation denied/failed; do not fallback to network to stay resource-free
            setLocationInfo((prev) => ({ ...prev, isDetected: true }));
          },
          { timeout: 3000, enableHighAccuracy: false, maximumAge: 300000 }
        );
      }
    } catch {
      setLocationInfo((prev) => ({ ...prev, isDetected: true }));
    }
  };

  const checkIfNottinghamCoordinates = (lat: number, lon: number): boolean => {
    // Nottingham city center coordinates: 52.9548, -1.1581
    // Define a radius around Nottingham to include surrounding areas
    const nottinghamLat = 52.9548;
    const nottinghamLon = -1.1581;
    const radius = 0.2; // Approximately 15-20 mile radius

    const distance = Math.sqrt(
      Math.pow(lat - nottinghamLat, 2) + Math.pow(lon - nottinghamLon, 2)
    );

    return distance <= radius;
  };

  // Deprecated IP fallback removed to avoid network use on load
  const detectByIPSilently = async () => {
    setLocationInfo((prev) => ({ ...prev, isDetected: true }));
  };

  const requestLocation = detectUserLocationSilently; // exposed but never auto-triggered

  return { ...locationInfo, requestLocation };
};
