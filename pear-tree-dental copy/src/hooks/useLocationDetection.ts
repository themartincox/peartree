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
    // Start detection immediately and silently
    detectUserLocationSilently();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            // GPS failed - try IP detection silently
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
        const isNottingham = data.city?.toLowerCase().includes('nottingham') ||
                            data.region?.toLowerCase().includes('nottingham') ||
                            data.area?.toLowerCase().includes('nottingham');

        setLocationInfo({
          isNottingham,
          isDetected: true,
          area: isNottingham ? 'Nottingham' : data.city || 'Unknown',
          postcode: data.postcode || 'Unknown'
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
