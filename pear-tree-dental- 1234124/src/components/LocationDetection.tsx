"use client";

import { useState, useEffect } from 'react';
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
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    detectUserLocation();
  }, []);

  const detectUserLocation = async () => {
    setIsDetecting(true);

    try {
      // Try geolocation first
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            await reverseGeocode(latitude, longitude);
          },
          () => {
            // Fallback to IP-based detection
            detectByIP();
          },
          { timeout: 5000 }
        );
      } else {
        // Fallback to IP-based detection
        detectByIP();
      }
    } catch (error) {
      console.log('Location detection failed:', error);
      setIsDetecting(false);
    }
  };

  const reverseGeocode = async (lat: number, lon: number) => {
    try {
      // Mock reverse geocoding - in production you'd use a real service
      // For demo purposes, we'll use location boundaries
      const location = getLocationFromCoordinates(lat, lon);
      if (location) {
        setUserLocation(location);
        setIsVisible(true);
      }
      setIsDetecting(false);
    } catch (error) {
      console.log('Reverse geocoding failed:', error);
      detectByIP();
    }
  };

  const detectByIP = async () => {
    try {
      // Mock IP-based detection - in production use a service like ipapi.co
      // For demo, we'll randomly assign one of our areas
      const areas = Object.keys(LOCATION_DATA);
      const randomArea = areas[Math.floor(Math.random() * areas.length)];
      setUserLocation(LOCATION_DATA[randomArea]);
      setIsVisible(true);
      setIsDetecting(false);
    } catch (error) {
      console.log('IP detection failed:', error);
      setIsDetecting(false);
    }
  };

  const getLocationFromCoordinates = (lat: number, lon: number): LocationData | null => {
    // Mock coordinate-based detection - in production you'd have proper boundaries
    // Burton Joyce coordinates: approximately 52.9847, -1.0147

    // Simple distance-based detection for demo
    const burtonJoyceDistance = Math.sqrt(Math.pow(lat - 52.9847, 2) + Math.pow(lon - (-1.0147), 2));

    if (burtonJoyceDistance < 0.05) { // Very close - likely NG14
      return LOCATION_DATA['NG14'];
    } else if (burtonJoyceDistance < 0.1) { // Close - could be various areas
      return LOCATION_DATA['arnold']; // Default to Arnold for demo
    }

    return null;
  };

  const handleManualLocation = (locationKey: string) => {
    setUserLocation(LOCATION_DATA[locationKey]);
    setIsVisible(true);
  };

  if (isDetecting) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-80 shadow-lg border border-dental-green/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-dental-green"></div>
              <div>
                <p className="font-semibold text-dental-navy">Detecting your location...</p>
                <p className="text-sm text-gray-600">Finding the best route to our practice</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isVisible || !userLocation) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-80 shadow-lg border border-dental-green/20">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-dental-navy">Show local information?</p>
                <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Tell us your area for personalized directions and offers
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(LOCATION_DATA).slice(0, 6).map(([key, data]) => (
                  <Button
                    key={key}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleManualLocation(key)}
                  >
                    {data.area}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-96 shadow-xl border border-dental-green/20 bg-white">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-dental-green" />
                <span className="font-semibold text-dental-navy">
                  Hi, {userLocation.area} resident!
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Car className="w-4 h-4 text-dental-green" />
                <span className="text-gray-700">
                  <strong>{userLocation.travelTime}</strong> journey {userLocation.route}
                </span>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-dental-green" />
                <span className="text-gray-700">Easy access with free parking</span>
              </div>

              {userLocation.specialOffer && (
                <div className="bg-pear-gold/10 rounded-lg p-3 border border-pear-gold/20">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pear-gold" />
                    <span className="text-sm font-medium text-pear-gold">
                      Special Offer
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    {userLocation.specialOffer}
                  </p>
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-dental-green hover:bg-dental-green/90 text-white">
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </Button>
              {userLocation.pageUrl && (
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={userLocation.pageUrl}>
                    <Navigation className="w-4 h-4 mr-1" />
                    Local Info
                  </Link>
                </Button>
              )}
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-dental-green text-xs"
              >
                <Link href="/membership">
                  <UserPlus className="w-3 h-3 mr-1" />
                  Register as {userLocation.area} patient
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
