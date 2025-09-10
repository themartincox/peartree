import type { LucideIcon } from "lucide-react";

export interface LocationPageData {
  slug: string;
  layout: 'default' | 'premium' | 'family';
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description:string;
    theme: 'teal' | 'green' | 'gold';
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
  'west-bridgford': {
    slug: 'west-bridgford',
    layout: 'premium',
    metadata: {
      title: 'Premium Dentist in West Bridgford - Pear Tree Dental | Quality Dental Care',
      description: 'Premium dental care for West Bridgford residents. Pear Tree Dental offers advanced dental treatments, membership plans, and convenient access from West Bridgford.',
      keywords: ['dentist West Bridgford', 'premium dentist West Bridgford', 'cosmetic dentist West Bridgford'],
    },
    hero: {
      badge: 'Premium Care for West Bridgford',
      title: 'Premium Dental Care',
      subtitle: 'for West Bridgford',
      description: 'West Bridgford residents choose Pear Tree Dental for exceptional dental care. Experience advanced treatments, personalized service, and quality care just minutes from home.',
      theme: 'gold',
    },
    access: {
      title: 'Convenient Access from West Bridgford',
      description: 'Premium dental care without the city center hassle. Easy access, dedicated parking, and appointment times that respect your schedule.',
      points: [
        { icon: 'Car', title: 'Easy Journey', value: '12 minutes', description: 'Direct drive from West Bridgford via A52 and A612' },
        { icon: 'MapPin', title: 'Premium Location', value: '8.2 miles', description: 'Direct route through Nottinghamshire countryside' },
        { icon: 'Crown', title: 'Premium Service', value: 'Complimentary', description: 'Dedicated parking & attentive personal service' },
      ],
    },
    services: {
      title: 'Advanced Dental Care for West Bridgford Professionals',
      description: 'State-of-the-art treatments delivered with the attention to detail and service excellence you expect.',
      items: [
        { title: 'Cosmetic Excellence', description: 'Transform your smile with premium aesthetic treatments', icon: 'Sparkles', features: ['Porcelain veneers', 'Professional whitening', 'Smile design'], price: 'From £350', badge: 'Most Popular' },
        { title: 'Dental Implants', description: 'Permanent solutions using the latest implant technology', icon: 'Award', features: ['Single implants', 'All-on-4 treatment', 'Same-day implants'], price: 'From £2,500', badge: 'Advanced Care' },
        { title: 'Professional Dentistry', description: 'Comprehensive care for busy professionals', icon: 'Crown', features: ['Professional health checks', 'Lunch-hour appointments', 'Personalized service'], price: 'From £150', badge: 'Professional Choice' },
      ],
    },
    reviews: {
      title: 'Trusted by West Bridgford Residents',
      description: 'Read what fellow West Bridgford residents say about their premium dental care experience.',
      overallRating: 5.0,
      reviewCount: 60,
      items: [
        { name: 'Dr. Margaret Thompson', location: 'West Bridgford', text: "The level of service and attention to detail is exceptional. As a healthcare professional myself, I appreciate their advanced approach and genuine care.", rating: 5, service: 'Professional Dentistry' },
        { name: 'James Mitchell', location: 'West Bridgford', text: "Outstanding cosmetic work and the convenience from West Bridgford is perfect. The team understands the importance of a professional image.", rating: 5, service: 'Cosmetic Dentistry' },
        { name: 'Sarah Williams', location: 'West Bridgford', text: "Premium dental care with the personal touch. The journey is easy and the results speak for themselves. Highly recommended to my colleagues.", rating: 5, service: 'Dental Implants' },
      ],
    },
    directions: {
      title: 'Direct Route from West Bridgford',
      routeDescription: 'Direct Route (12 minutes)',
      steps: [
        'Exit West Bridgford via A52 (Nottingham Road) eastbound',
        'Continue on A52 for 4 miles toward Bingham',
        'Take A612 exit toward Burton Joyce/Gedling',
        'Follow A612 into Burton Joyce, turn right on Main Street',
      ],
      tip: 'Scenic countryside route with minimal traffic - perfect for a relaxing journey to your appointment.',
    },
    cta: {
      title: 'Experience Quality Dental Care Today',
      description: 'Join West Bridgford residents who choose excellence in dental care. Book your consultation and discover the difference quality makes.',
    },
  }
  // ... Add data for gedling, west-bridgford, etc. following the same structure
};

export const getLocationData = (slug: string): LocationPageData | null => {
  return locationData[slug] || null;
};

export const getAllLocationSlugs = () => {
  return Object.keys(locationData);
};