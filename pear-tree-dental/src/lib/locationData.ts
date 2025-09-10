import type { LucideIcon } from "lucide-react";

export interface LocationPageData {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    theme: 'teal' | 'green';
  };
  access: {
    title: string;
    description?: string;
    points: Array<{
      icon: keyof typeof import("lucide-react");
      title: string;
      value: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    description?: string;
    items: Array<{
      title: string;
      description: string;
      icon: keyof typeof import("lucide-react");
      features: string[];
      price?: string;
      badge?: string;
    }>;
  };
  reviews: {
    title: string;
    description?: string;
    overallRating: number;
    reviewCount: number;
    items: Array<{
      name: string;
      location: string;
      text: string;
      rating: number;
      service: string;
    }>;
  };
  directions: {
    title: string;
    routeDescription: string;
    steps: string[];
    tip: string;
  };
  cta: {
    title:string;
    description: string;
  };
}

export const locationData: Record<string, LocationPageData> = {
  arnold: {
    slug: 'arnold',
    layout: 'default',
    metadata: {
      title: 'Dentist in Arnold - Pear Tree Dental | Modern Dental Care Near You',
      description: 'Looking for a dentist near Arnold? Pear Tree Dental in Burton Joyce offers modern dental care, membership plans, and convenient access for Arnold residents.',
      keywords: ['dentist Arnold', 'dentist near Arnold', 'dental practice Arnold', 'emergency dentist Arnold'],
    },
    hero: {
      badge: 'Serving Arnold',
      title: 'Your Local Dentist',
      subtitle: 'Near Arnold',
      description: 'Modern dental care for Arnold residents at Pear Tree Dental in nearby Burton Joyce. Just a 15-minute journey for comprehensive dental services with transparent membership pricing.',
      theme: 'teal',
    },
    access: {
      title: 'Convenient Access from Arnold',
      points: [
        { icon: 'Car', title: 'Easy Journey', value: '15 minutes', description: 'Average drive from Arnold to our Burton Joyce practice' },
        { icon: 'MapPin', title: 'Close Distance', value: '7.5 miles', description: 'Direct route via A614 and A612 from Arnold' },
        { icon: 'ParkingCircle', title: 'Free Parking', value: 'On-site', description: 'Complimentary parking available for all patients' },
      ],
    },
    services: {
      title: 'Comprehensive Dental Care for Arnold Residents',
      items: [
        { title: 'General Dentistry', description: 'Routine check-ups, cleanings, and preventive care', icon: 'CheckCircle', features: ['Regular check-ups', 'Professional cleaning', 'Oral health assessments'] },
        { title: 'Emergency Care', description: 'Same-day appointments for urgent dental needs', icon: 'Shield', features: ['Same-day availability', 'Pain relief', 'Emergency repairs'] },
        { title: 'Cosmetic Dentistry', description: 'Transform your smile with modern cosmetic treatments', icon: 'Heart', features: ['Teeth whitening', 'Veneers', 'Composite bonding'] },
      ],
    },
    reviews: {
      title: 'What Arnold Patients Say',
      overallRating: 5.0,
      reviewCount: 35,
      items: [
        { name: 'Lisa B.', location: 'Arnold', text: "The drive from Arnold is so easy and worth it for the quality of care. The membership plan saves us hundreds compared to our old dentist.", rating: 5, service: 'Family Membership' },
        { name: 'Robert S.', location: 'Arnold', text: "Fantastic emergency care when I had a dental crisis. Seen same day from Arnold - couldn't ask for better service.", rating: 5, service: 'Emergency Care' },
        { name: 'Sarah M.', location: 'Arnold Village', text: "Finally found a dentist that uses modern technology. The team explains everything clearly and the journey from Arnold is straightforward.", rating: 5, service: 'Cosmetic Care' },
      ],
    },
    directions: {
      title: 'Directions from Arnold',
      routeDescription: 'Direct Route (15 minutes)',
      steps: [
        'Head northeast from Arnold towards Gedling via A614',
        'Continue on A612 toward Burton Joyce',
        'Turn right onto Main Street in Burton Joyce',
        'Pear Tree Dental on your left with free parking',
      ],
      tip: 'Direct A612 route from Arnold avoids city center traffic completely!',
    },
    cta: {
      title: 'Ready to Experience Modern Dental Care?',
      description: "Join Arnold residents who've made the switch to convenient, affordable dental care at Pear Tree Dental.",
    },
  },
  bingham: {
    slug: 'bingham',
    metadata: {
      title: 'Family Dentist in Bingham - Pear Tree Dental | Quality Dental Care',
      description: 'Family dental care for Bingham residents. Pear Tree Dental offers comprehensive dental treatments, membership plans, and convenient A52 access from Bingham.',
      keywords: ['dentist Bingham', 'family dentist Bingham', 'children\'s dentist Bingham'],
    },
    hero: {
      badge: 'Family Care for Bingham',
      title: 'Your Family Dentist',
      subtitle: 'in Bingham',
      description: 'Comprehensive family dental care just 8 minutes from Bingham. Modern treatments, gentle care for children, and affordable membership plans that cover the whole family.',
      theme: 'green',
    },
    access: {
      title: 'Convenient Family Dental Care from Bingham',
      description: 'Easy A52 access makes dental care hassle-free for Bingham families. Same-day appointments and flexible scheduling for busy family life.',
      points: [
        { icon: 'Car', title: 'Quick Journey', value: '8 minutes', description: 'Direct drive from Bingham via A52 to Burton Joyce' },
        { icon: 'MapPin', title: 'Family Location', value: '6.5 miles', description: 'Easy route through Nottinghamshire countryside' },
        { icon: 'Users', title: 'Family Service', value: 'All Ages', description: 'From toddlers to grandparents - everyone welcome' },
      ],
    },
    services: {
      title: 'Complete Family Dental Care for Bingham',
      description: 'Comprehensive dental services for every member of your Bingham family, from first teeth to golden years.',
      items: [
        { title: "Children's Dentistry", description: "Gentle, fun dental care to build healthy habits", icon: 'Baby', features: ["First dental visits", "Fissure sealants", "Fluoride treatments"], price: "From £25", badge: "Kids Love Us" },
        { title: "Family Check-ups", description: "Regular preventive care for the whole family", icon: 'Users', features: ["Comprehensive exams", "Professional cleaning", "Oral health advice"], price: "From £95", badge: "Most Popular" },
        { title: "Emergency Care", description: "Same-day treatment for urgent dental problems", icon: 'Shield', features: ["Same-day appointments", "Pain relief", "Emergency repairs"], price: "From £95", badge: "Always Available" },
      ],
    },
    reviews: {
      title: 'Trusted by Bingham Families',
      description: 'Read what Bingham families say about their dental care experience.',
      overallRating: 5.0,
      reviewCount: 85,
      items: [
        { name: 'Sarah & Family', location: 'Bingham', text: "Perfect for our family! The kids actually look forward to their appointments now. The journey from Bingham is so easy and the family plan saves us hundreds.", rating: 5, service: 'Family Membership' },
        { name: 'Mark Thompson', location: 'Bingham', text: "Excellent emergency care when my son fell off his bike. Seen within the hour and fixed up perfectly. Great to have such quality care so close to Bingham.", rating: 5, service: "Children's Emergency Care" },
        { name: 'Emma Wilson', location: 'Bingham', text: "The team makes everyone feel welcome, from our 3-year-old to my elderly mother. Professional service and the A52 route makes it a breeze from Bingham.", rating: 5, service: 'Multi-Generation Care' },
      ],
    },
    directions: {
      title: 'Direct Route from Bingham',
      routeDescription: 'Quick Route (8 minutes)',
      steps: [
        'Exit Bingham via A52 eastbound toward Grantham',
        'Continue on A52 for 4 miles toward Radcliffe-on-Trent',
        'Take A612 exit toward Burton Joyce/Gedling',
        'Turn right on Main Street - Pear Tree Dental on your left',
      ],
      tip: 'Easy dual carriageway journey - perfect for bringing the whole family to appointments.',
    },
    cta: {
      title: "Ready to Care for Your Family's Smiles?",
      description: 'Join Bingham families who trust Pear Tree Dental for comprehensive, gentle dental care. Book your family consultation and discover stress-free dentistry.',
    },
  },
  // ... Add data for gedling, west-bridgford, etc. following the same structure
};

export const getLocationData = (slug: string): LocationPageData | null => {
  return locationData[slug] || null;
};

export const getAllLocationSlugs = () => {
  return Object.keys(locationData);
};