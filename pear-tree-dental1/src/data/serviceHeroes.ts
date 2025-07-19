export interface ServiceHeroConfig {
  heroImage?: string;
  heroVideo?: string; // New: Video file path
  heroVideoType?: "mp4" | "webm"; // New: Video format
  heroImageAlt: string;
  badgeText: string;
  badgeIcon?: string;
  title: string;
  subtitle?: string;
  description: string;
  keyBenefits?: Array<{
    text: string;
    icon?: string;
  }>;
  primaryCTA?: {
    text: string;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    icon?: string;
  };
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
}

export const serviceHeroes: Record<string, ServiceHeroConfig> = {
  // MAIN SERVICE CATEGORIES
  "/services/cosmetic": {
    heroVideo: "/videos/heroes/cosmetic-dentistry-hero.mp4",
    heroVideoType: "mp4",
    heroImage: "/images/dental-practice-hero-burton-joyce.webp", // Poster frame while video loads
    heroImageAlt: "Professional cosmetic dentistry treatment showing beautiful smile transformation",
    badgeText: "Cosmetic Dentistry",
    badgeIcon: "Sparkles",
    title: "Transform Your",
    subtitle: "Smile Today",
    description: "Discover the confidence that comes with a perfect smile. Our expert cosmetic treatments use the latest techniques to give you the smile you've always dreamed of.",
    keyBenefits: [
      { text: "Immediate results", icon: "Zap" },
      { text: "Natural-looking", icon: "Star" },
      { text: "Long-lasting", icon: "Shield" },
      { text: "Boost confidence", icon: "Heart" }
    ],
    primaryCTA: {
      text: "Book Smile Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "View Before & After",
      href: "/before-after",
      icon: "ArrowRight"
    },
    gradientFrom: "soft-pink/10",
    gradientTo: "soft-lavender/10",
    textColor: "pear-primary"
  },

  "/services/general": {
    heroImage: "/images/heroes/general-dentistry-hero.webp",
    heroImageAlt: "Professional dental checkup with friendly dentist and patient",
    badgeText: "General Dentistry",
    badgeIcon: "Stethoscope",
    title: "Complete Oral",
    subtitle: "Healthcare",
    description: "Comprehensive dental care for the whole family. From routine checkups to advanced treatments, we keep your smile healthy and beautiful.",
    keyBenefits: [
      { text: "Family-friendly", icon: "Heart" },
      { text: "Preventive care", icon: "Shield" },
      { text: "Modern techniques", icon: "Star" },
      { text: "Gentle approach", icon: "Smile" }
    ],
    primaryCTA: {
      text: "Book Checkup",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Our Services",
      href: "/services/general",
      icon: "ArrowRight"
    }
  },

  "/services/restorative": {
    heroImage: "/images/heroes/restorative-dentistry-hero.webp",
    heroImageAlt: "Dental restoration procedure showing crown and filling treatments",
    badgeText: "Restorative Dentistry",
    badgeIcon: "Wrench",
    title: "Restore Your",
    subtitle: "Natural Smile",
    description: "Advanced restorative treatments to repair, replace, and strengthen your teeth. Get back to eating, speaking, and smiling with confidence.",
    keyBenefits: [
      { text: "Durable solutions", icon: "Shield" },
      { text: "Natural function", icon: "Tooth" },
      { text: "Long-lasting", icon: "Clock" },
      { text: "Pain relief", icon: "Heart" }
    ],
    primaryCTA: {
      text: "Book Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Treatment Options",
      href: "/services/restorative",
      icon: "ArrowRight"
    }
  },

  "/services/implants": {
    heroVideo: "/videos/heroes/implant-hero-video.mp4",
    heroVideoType: "mp4",
    heroImage: "/images/dental-practice-hero-burton-joyce.webp", // Poster frame while video loads
    heroImageAlt: "Dental implant procedure showing before and after results",
    badgeText: "Dental Implants",
    badgeIcon: "Circle",
    title: "Replace Missing",
    subtitle: "Teeth Permanently",
    description: "The gold standard for tooth replacement. Our dental implants look, feel, and function just like natural teeth, lasting a lifetime with proper care.",
    keyBenefits: [
      { text: "Permanent solution", icon: "Shield" },
      { text: "Natural feel", icon: "Star" },
      { text: "Preserve jawbone", icon: "Circle" },
      { text: "98% success rate", icon: "Heart" }
    ],
    primaryCTA: {
      text: "Book Implant Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Implant Types",
      href: "/services/implants",
      icon: "ArrowRight"
    }
  },

  "/services/orthodontics": {
    heroImage: "/images/heroes/orthodontics-hero.webp",
    heroImageAlt: "Clear aligner orthodontic treatment showing straightened teeth",
    badgeText: "Orthodontics",
    badgeIcon: "Smile",
    title: "Straighten Your",
    subtitle: "Smile Discreetly",
    description: "Modern orthodontic solutions including Invisalign and ClearCorrect. Achieve perfectly straight teeth without traditional metal braces.",
    keyBenefits: [
      { text: "Nearly invisible", icon: "Star" },
      { text: "Removable", icon: "ArrowRight" },
      { text: "Comfortable", icon: "Heart" },
      { text: "Faster results", icon: "Zap" }
    ],
    primaryCTA: {
      text: "Book Orthodontic Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Clear Aligners",
      href: "/services/orthodontics",
      icon: "ArrowRight"
    }
  },

  "/services/hygiene": {
    heroImage: "/images/heroes/hygiene-therapy-hero.webp",
    heroImageAlt: "Professional dental hygiene therapy session with hygienist",
    badgeText: "Hygiene Therapy",
    badgeIcon: "Sparkles",
    title: "Professional",
    subtitle: "Dental Cleaning",
    description: "Expert hygiene therapy to keep your teeth and gums healthy. Professional cleaning, stain removal, and preventive care for optimal oral health.",
    keyBenefits: [
      { text: "Prevent disease", icon: "Shield" },
      { text: "Remove stains", icon: "Sparkles" },
      { text: "Fresh breath", icon: "Heart" },
      { text: "Healthy gums", icon: "Smile" }
    ],
    primaryCTA: {
      text: "Book Hygiene Appointment",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Hygiene Services",
      href: "/services/hygiene",
      icon: "ArrowRight"
    }
  },

  "/services/emergency": {
    heroImage: "/images/heroes/emergency-dental-hero.webp",
    heroImageAlt: "Emergency dental care setup for urgent dental treatments",
    badgeText: "Emergency Dentistry",
    badgeIcon: "Zap",
    title: "Urgent Dental",
    subtitle: "Care Available",
    description: "Same-day emergency dental care when you need it most. From severe toothache to dental trauma, we're here to provide immediate relief.",
    keyBenefits: [
      { text: "Same-day care", icon: "Zap" },
      { text: "Pain relief", icon: "Heart" },
      { text: "Expert treatment", icon: "Star" },
      { text: "Available weekends", icon: "Clock" }
    ],
    primaryCTA: {
      text: "Call Emergency Line",
      href: "tel:+441159312821"
    },
    secondaryCTA: {
      text: "Emergency Info",
      href: "/services/emergency",
      icon: "ArrowRight"
    },
    gradientFrom: "red-50",
    gradientTo: "orange-50",
    textColor: "red-600"
  },

  // SPECIFIC TREATMENTS
  "/services/cosmetic/teeth-whitening": {
    heroImage: "/images/heroes/cosmetic/teeth-whitening-hero.webp",
    heroImageAlt: "Professional teeth whitening treatment showing dramatic results",
    badgeText: "Teeth Whitening",
    badgeIcon: "Sparkles",
    title: "Whiter Teeth",
    subtitle: "In Just 1 Hour",
    description: "Professional teeth whitening that's up to 8 shades whiter in a single visit. Safe, effective, and long-lasting results.",
    keyBenefits: [
      { text: "Up to 8 shades whiter", icon: "Star" },
      { text: "1-hour treatment", icon: "Clock" },
      { text: "Long-lasting", icon: "Shield" },
      { text: "Safe & effective", icon: "Heart" }
    ]
  },

  "/services/cosmetic/veneers": {
    heroImage: "/images/heroes/cosmetic/dental-veneers-hero.webp",
    heroImageAlt: "Dental veneers showing perfect smile transformation",
    badgeText: "Dental Veneers",
    badgeIcon: "Star",
    title: "Perfect Smile",
    subtitle: "With Veneers",
    description: "Transform your smile with ultra-thin porcelain veneers. Correct gaps, chips, discoloration, and achieve the perfect smile.",
    keyBenefits: [
      { text: "Instant transformation", icon: "Zap" },
      { text: "Natural appearance", icon: "Star" },
      { text: "Durable material", icon: "Shield" },
      { text: "Stain resistant", icon: "Sparkles" }
    ]
  },

  "/services/cosmetic/edge-bonding": {
    heroImage: "/images/heroes/cosmetic/composite-bonding-hero.webp",
    heroImageAlt: "Composite bonding procedure showing immediate smile improvement",
    badgeText: "Composite Bonding",
    badgeIcon: "Heart",
    title: "Quick Smile",
    subtitle: "Improvements",
    description: "Affordable and immediate solution for chipped, gapped, or discolored teeth. Same-day treatment with natural-looking results.",
    keyBenefits: [
      { text: "Same-day results", icon: "Zap" },
      { text: "Affordable option", icon: "Heart" },
      { text: "Natural look", icon: "Star" },
      { text: "Minimally invasive", icon: "Shield" }
    ]
  },

  "/services/complete-smile-makeover": {
    heroVideo: "/videos/heroes/smile-makeover-hero.mp4",
    heroVideoType: "mp4",
    heroImage: "/images/heroes/cosmetic/smile-makeover-hero.webp", // Fallback poster image
    heroImageAlt: "Complete smile makeover showing dramatic before and after transformation",
    badgeText: "Complete Smile Makeover",
    badgeIcon: "Sparkles",
    title: "Total Smile",
    subtitle: "Transformation",
    description: "Comprehensive smile makeover combining multiple treatments for the ultimate smile transformation. Achieve your dream smile with our expert team.",
    keyBenefits: [
      { text: "Dramatic results", icon: "Star" },
      { text: "Personalized plan", icon: "Heart" },
      { text: "Expert team", icon: "Shield" },
      { text: "Life-changing", icon: "Sparkles" }
    ]
  },

  "/services/cosmetic/wedding-day-smile": {
    heroImage: "/images/heroes/cosmetic/wedding-smile-hero.jpg",
    heroImageAlt: "Perfect wedding day smile showing radiant bride with beautiful teeth",
    badgeText: "Wedding Day Smile",
    badgeIcon: "Heart",
    title: "Perfect Smile",
    subtitle: "For Your Big Day",
    description: "Ensure your smile is picture-perfect for your wedding day. From whitening to complete makeovers, we'll create your dream smile in time for your special moment.",
    keyBenefits: [
      { text: "Timeline-based planning", icon: "Calendar" },
      { text: "Express treatments", icon: "Zap" },
      { text: "Wedding-ready results", icon: "Star" },
      { text: "Picture-perfect smile", icon: "Camera" }
    ],
    primaryCTA: {
      text: "Book Wedding Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "View Wedding Packages",
      href: "/services/cosmetic/wedding-day-smile#packages",
      icon: "ArrowRight"
    },
    gradientFrom: "rose-50",
    gradientTo: "pink-50",
    textColor: "rose-600"
  },

  "/wedding-day-smile": {
    heroImage: "/images/heroes/cosmetic/wedding-smile-hero.jpg",
    heroImageAlt: "Perfect wedding day smile showing radiant bride with beautiful teeth",
    badgeText: "Wedding Day Smile",
    badgeIcon: "Heart",
    title: "Perfect Smile",
    subtitle: "For Your Big Day",
    description: "Ensure your smile is picture-perfect for your wedding day. From whitening to complete makeovers, we'll create your dream smile in time for your special moment.",
    keyBenefits: [
      { text: "Timeline-based planning", icon: "Calendar" },
      { text: "Express treatments", icon: "Zap" },
      { text: "Wedding-ready results", icon: "Star" },
      { text: "Picture-perfect smile", icon: "Camera" }
    ],
    primaryCTA: {
      text: "Book Wedding Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "View Wedding Packages",
      href: "/services/cosmetic/wedding-day-smile#packages",
      icon: "ArrowRight"
    },
    gradientFrom: "rose-50",
    gradientTo: "pink-50",
    textColor: "rose-600"
  }

  // Additional specific treatments can be added here as needed
};

// Helper function to get hero config with fallback
export function getServiceHeroConfig(route: string): ServiceHeroConfig {
  return serviceHeroes[route] || {
    heroImage: "/images/dental-practice-hero-burton-joyce.webp",
    heroImageAlt: "Pear Tree Dental Centre - Professional dental care in Burton Joyce",
    badgeText: "Dental Services",
    badgeIcon: "Circle",
    title: "Professional",
    subtitle: "Dental Care",
    description: "Expert dental treatments in a modern, comfortable environment. Your oral health and beautiful smile are our priority.",
    keyBenefits: [
      { text: "Expert care", icon: "Star" },
      { text: "Modern facility", icon: "Shield" },
      { text: "Gentle approach", icon: "Heart" },
      { text: "Proven results", icon: "Sparkles" }
    ],
    primaryCTA: {
      text: "Book Consultation",
      href: "/book-appointment"
    },
    secondaryCTA: {
      text: "Our Services",
      href: "/services",
      icon: "ArrowRight"
    }
  };
}
