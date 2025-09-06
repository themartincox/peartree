// src/components/PersonalizedHeroWrapper.tsx

import { headers } from 'next/headers';
import Hero from './Hero'; // Import the existing Client Component

// Interface defining the data passed from Server to Client
export interface PersonalizationProps {
  city: string;
  timeOfDay: string;
  isOfficeHours: boolean;
  referrerSource: string;
  travelTime: string | null;
}

export default function PersonalizedHeroWrapper() {
  const headersList = headers();

  // Read the injected personalization data from middleware headers
  const city = headersList.get('x-peartree-city') || 'your area';
  const timeOfDay = headersList.get('x-peartree-time-of-day') || 'day';
  const isOfficeHours = headersList.get('x-peartree-office-hours') === 'true';
  const referrerSource = headersList.get('x-peartree-referrer') || 'Direct';
  
  // Ensure travelTime is null if the header is missing or empty (middleware returns empty string on failure)
  const travelTimeHeader = headersList.get('x-peartree-travel-time');
  const travelTime = travelTimeHeader ? travelTimeHeader : null;

  const personalizationData: PersonalizationProps = {
    city,
    timeOfDay,
    isOfficeHours,
    referrerSource,
    travelTime,
  };

  // Pass the data as props to the Client Component Hero
  return <Hero personalization={personalizationData} />;
}