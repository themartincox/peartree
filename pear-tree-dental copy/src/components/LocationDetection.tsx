"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Phone,
  UserPlus,
  X,
  CheckCircle
} from 'lucide-react';

interface LocationData {
  area: string;
  postcode: string;
  travelTime: string;
  route: string;
  specialOffer?: string;
  pageUrl?: string;
}

const LOCATION_DATA: { [key: string]: LocationData } = {
  'NG4': {
    area: 'NG4 Area',
    postcode: 'NG4',
    travelTime: '15-20 minutes',
    route: 'via A614 and A612',
    specialOffer: 'Receive 10% off treatments with our comprehensive care plans',
    pageUrl: '/ng4-dental'
  },
  'NG14': {
    area: 'NG14 Area',
    postcode: 'NG14',
    travelTime: '5-10 minutes',
    route: 'local roads',
    specialOffer: 'Receive 10% off treatments with our comprehensive care plans',
    pageUrl: '/ng14-dental'
  },
  'arnold': {
    area: 'Arnold',
    postcode: 'NG5',
    travelTime: '15 minutes',
    route: 'via A614 and A612',
    pageUrl: '/arnold'
  },
  'mapperly': {
    area: 'Mapperly',
    postcode: 'NG3',
    travelTime: '10 minutes',
    route: 'via Woodborough Road',
    pageUrl: '/mapperly'
  },
  'west bridgford': {
    area: 'West Bridgford',
    postcode: 'NG2',
    travelTime: '12 minutes',
    route: 'via A52 and A612',
    specialOffer: 'Receive 10% off treatments with our comprehensive care plans',
    pageUrl: '/west-bridgford'
  },
  'colwick': {
    area: 'Colwick',
    postcode: 'NG4',
    travelTime: '8 minutes',
    route: 'via A6011',
    pageUrl: '/colwick'
  },
  'rivendell': {
    area: 'Rivendell',
    postcode: 'NG14',
    travelTime: '6 minutes',
    route: 'local estate roads',
    specialOffer: 'Receive 10% off treatments with our comprehensive care plans',
    pageUrl: '/rivendell'
  }
};

export default function LocationDetection() {

  const [userLocation, setUserLocation] = useState<LocationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Helper to determine location from coordinates
  const getLocationFromCoordinates = useCallback((lat: number, lon: number): LocationData | null => {
    // Burton Joyce coordinates: approximately 52.9847, -1.0147
    const burtonJoyceDistance = Math.sqrt(Math.pow(lat - 52.9847, 2) + Math.pow(lon - (-1.0147), 2));

    // Define service area boundary (roughly 15-20 mile radius)
    if (burtonJoyceDistance < 0.3) { // Within service area
      // User is close enough - they probably know where we are
      if (burtonJoyceDistance < 0.05) {
        return LOCATION_DATA['NG14']; // Very close
      } else if (burtonJoyceDistance < 0.1) {
        return LOCATION_DATA['arnold']; // Moderate distance
      } else {
        return LOCATION_DATA['west bridgford']; // Further but still in service area
      }
    }
    // Outside service area - return null to trigger directions popup
    return null;
  }, []);

  const requestLocation = useCallback(async () => {
    if (isDismissed || isLoading) return;
    setIsLoading(true);
    try {
      // Don't block on Permissions API; not universal.
      navigator.permissions?.query({ name: 'geolocation' as PermissionName }).catch(() => {});

      if (navigator.geolocation) {
        let completed = false;
        const showFallback = () => {
          if (completed || isDismissed) return;
          setUserLocation({
            area: 'Directions',
            postcode: 'Unknown',
            travelTime: '—',
            route: 'via major roads',
            specialOffer: 'We welcome patients from all areas - travel is often worth it for quality care!'
          });
          setIsVisible(true);
          setIsLoading(false);
          completed = true;
        };

        const timeoutId = window.setTimeout(showFallback, 2000);

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const location = getLocationFromCoordinates(latitude, longitude);
            if (!isDismissed) {
              if (location) {
                setUserLocation(location);
              } else {
                setUserLocation({
                  area: 'Outside Service Area',
                  postcode: 'Unknown',
                  travelTime: 'Variable',
                  route: 'via major roads',
                  specialOffer: 'We welcome patients from all areas - travel is often worth it for quality care!'
                });
              }
              setIsVisible(true);
              setIsLoading(false);
              completed = true;
              window.clearTimeout(timeoutId);
            }
          },
          () => {
            // Geolocation denied/failed: show fallback card
            window.clearTimeout(timeoutId);
            if (!completed && !isDismissed) {
              setUserLocation({
                area: 'Directions',
                postcode: 'Unknown',
                travelTime: '—',
                route: 'via major roads',
                specialOffer: 'We welcome patients from all areas - travel is often worth it for quality care!'
              });
              setIsVisible(true);
              setIsLoading(false);
              completed = true;
            }
          },
          {
            timeout: 2000,
            enableHighAccuracy: false,
            maximumAge: 600000
          }
        );
      } else {
        // No geolocation available: show fallback
        if (!isDismissed) {
          setUserLocation({
            area: 'Directions',
            postcode: 'Unknown',
            travelTime: '—',
            route: 'via major roads',
            specialOffer: 'We welcome patients from all areas - travel is often worth it for quality care!'
          });
          setIsVisible(true);
        }
        setIsLoading(false);
      }
    } catch (error) {
      // Unexpected error: still show fallback for better UX
      if (!isDismissed) {
        setUserLocation({
          area: 'Directions',
          postcode: 'Unknown',
          travelTime: '—',
          route: 'via major roads',
          specialOffer: 'We welcome patients from all areas - travel is often worth it for quality care!'
        });
        setIsVisible(true);
      }
      setIsLoading(false);
    }
  }, [getLocationFromCoordinates, isDismissed, isLoading]);

  useEffect(() => {
    // Check if user has dismissed the modal this session
    const dismissed = sessionStorage.getItem('locationModalDismissed') === 'true';
    setIsDismissed(dismissed);
  }, []);


  // Auto-dismiss when user navigates (except for phone calls)
  const handleNavigation = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('locationModalDismissed', 'true');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('locationModalDismissed', 'true');
  };

  if (isDismissed) {
    return null;
  }

  return (
    <>
      {!isVisible && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-dental-navy">
            See how far you are from Nottingham's top-rated Dentist
          </p>
          <Button onClick={requestLocation} disabled={isLoading} aria-busy={isLoading}>
            {isLoading ? 'Finding route…' : 'Find nearest route'}
          </Button>
        </div>
      )}
      {isVisible && userLocation && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className="w-96 shadow-xl border border-dental-green/20 bg-white">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-dental-green" />
                    <span className="font-semibold text-dental-navy">
                      Need directions to our practice?
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleDismiss}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-4 h-4 text-dental-green" />
                    <span className="text-gray-700">
                      <strong>22 Nottingham Road, Burton Joyce, NG14 5AE</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Car className="w-4 h-4 text-dental-green" />
                    <span className="text-gray-700">Easy access with free on-site parking</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="w-4 h-4 text-dental-green" />
                    <span className="text-gray-700">Mon-Thu: 8:45am-5pm | Fri: 8am-3:30pm</span>
                  </div>
                  {userLocation.specialOffer && (
                    <div className="bg-pear-gold/10 rounded-lg p-3 border border-pear-gold/20">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pear-gold" />
                        <span className="text-sm font-medium text-pear-gold">
                          Worth the Journey
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        {userLocation.specialOffer}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1 bg-dental-green hover:bg-dental-green/90 text-white">
                    <a href="tel:01159312935">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1" onClick={handleNavigation}>
                    <a href="https://maps.google.com/maps?q=22+Nottingham+Road,+Burton+Joyce,+Nottingham,+NG14+5AE" target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-1" />
                      Get Directions
                    </a>
                  </Button>
                </div>
                <div className="text-center">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-dental-green text-xs"
                    onClick={handleNavigation}
                  >
                    <Link href="/book">
                      <UserPlus className="w-3 h-3 mr-1" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
