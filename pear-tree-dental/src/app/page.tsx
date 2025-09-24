import type React from "react";
import type { Metadata } from "next";
import dynamicImport from "next/dynamic";
import { headers } from "next/headers";
import { headers } from "next/headers";

// Data fetching and types
import { fetchAllServices } from "@/lib/contentful-client";
import type { ServiceEntry } from "@/types/contentful";
import { practiceInfo } from "@/data/practiceInfo";

// Critical above-the-fold components
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";

// Add ClientGoogleReviews wrapper with 'use client' directive
const ClientGoogleReviews = dynamicImport(() => import('@/components/ClientGoogleReviews'), {
  ssr: true
});

// Loaders for dynamic components
import {
  DentalTeamLoader,
  DiverseSmilesLoader,
  FamilyCareLoader,
  GentleCareLoader,
  HappyPatientLoader,
} from "@/components/WelcomingLoader";

// Below-the-fold components - loaded dynamically
const ServicesOverview = dynamicImport(
  () => import("@/components/ServicesOverview"),
  {
    loading: () => <DentalTeamLoader message="Loading our amazing services..." />,
  },
);

const TreatmentJourney = dynamicImport(
  () => import("@/components/TreatmentJourney"),
  {
    loading: () => <HappyPatientLoader height="h-screen" message="Mapping your treatment journey..." />,
  },
);

const MembershipHighlight = dynamicImport(
  () => import("@/components/MembershipHighlight"),
  {
    loading: () => <FamilyCareLoader message="Preparing membership benefits..." />,
  },
);

const FAQSection = dynamicImport(() => import("@/components/FAQSection"), {
  loading: () => <DiverseSmilesLoader message="Loading helpful answers..." />,
});

const VoiceSearchOptimization = dynamicImport(
  () => import("@/components/VoiceSearchOptimization"),
  {
    loading: () => <GentleCareLoader height="h-64" message="Optimizing your experience..." />,
  },
);

import ServerSideABWrapper from "@/components/ServerSideABWrapper";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { getVariant, getVariantMetadata } from "@/lib/ab-testing";

// --- Service Data Mapping ---
// This object provides the decorative data that is not yet in Contentful.
const serviceDecorations: { [key: string]: any } = {
  'general': {
    label: "General Dentistry",
    description: "Keep your family's smiles healthy with regular check-ups, hygiene visits, and everyday dentistry.",
    href: "/services/general",
    icon: "Shield",
    theme: "primary",
    treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
    image: "/images/general-dental-checkup.webp",
  },
  'cosmetic': {
    label: "Cosmetic Dentistry",
    description: "Smile makeovers, whitening, and veneers designed to enhance your confidence.",
    href: "/services/cosmetic",
    icon: "Sparkles",
    theme: "cosmetic",
    treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
    image: "/images/cosmetic-dentistry-services.webp",
  },
  'restorative': {
    label: "Restorative Dentistry",
    description: "Repair and rebuild teeth with crowns, bridges, dentures, and more.",
    href: "/services/restorative",
    icon: "ShieldCheck",
    theme: "primary",
    treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
    image: "/images/restorative-dental-treatment.webp",
  },
  'implants': {
    label: "Dental Implants",
    description: "Long-lasting implant solutions from single teeth to full-arch smile restorations.",
    href: "/services/implants",
    icon: "Zap",
    theme: "cosmetic",
    treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
    image: "/images/dental-implants-procedure.webp",
  },
  'orthodontics': {
    label: "Orthodontics",
    description: "Discreet teeth straightening with Invisalign, ClearCorrect, and specialist retainers.",
    href: "/services/orthodontics",
    icon: "Smile",
    theme: "cosmetic",
    treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
    image: "/images/orthodontics-invisalign-treatment.webp",
  },
  'emergency-dentist': {
    label: "Emergency Dentist",
    description: "Same-day relief for tooth pain, trauma, and urgent dental problems.",
    href: "/services/emergency",
    icon: "AlertTriangle",
    theme: "destructive",
    treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
    image: "/images/emergency-dental-care.webp",
  },
};

// Generate metadata based on A/B test variant
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);

  return {
    title: variantMetadata.title,
    description: variantMetadata.description,
    other: {
      "x-ab-variant": variant,
    },
  };
}

export default async function HomePage(): Promise<React.JSX.Element> {
  const headerStore = headers();
  const visitorCity = headerStore.get("x-peartree-city") ?? "";
  const visitorCountry = headerStore.get("x-peartree-country") ?? "";
  const visitorIsLocal = headerStore.get("x-peartree-local") === "true";
  const showJudgeBanner = visitorCountry === "GB" && !visitorIsLocal && Boolean(visitorCity);

  const variant = await getVariant();

  // Fetch all services from Contentful
  const allServices = await fetchAllServices();

  // Map and enrich the fetched services with decorative data
  const mappedServices = allServices.map((service: ServiceEntry) => {
    const decoration = serviceDecorations[service.fields.slug] || {};
    return {
      id: service.sys.id,
      title: service.fields.serviceName || decoration.label || "",
      description: service.fields.description || decoration.description || '',
      href: decoration.href || `/services/${service.fields.slug}`,
      slug: service.fields.slug,
      // Merge decorative fields from the map
      icon: decoration.icon || "Shield", // Fallback icon
      theme: decoration.theme || "medical",
      treatments: decoration.treatments || [],
      image: decoration.image || '',
    };
  });

  const mappedBySlug = new Map(mappedServices.map((service) => [service.slug, service]));
  const servicesForOverview = Object.entries(serviceDecorations).map(([slug, decoration]) => {
    const mapped = mappedBySlug.get(slug);
    if (mapped) {
      return mapped;
    }

    return {
      id: slug,
      title: decoration.label,
      description: decoration.description,
      href: decoration.href,
      slug,
      icon: decoration.icon,
      theme: decoration.theme,
      treatments: decoration.treatments,
      image: decoration.image,
    };
  });

  const homepageFAQs = [
    {
      question: "How often should I visit the dentist for a check-up?",
      answer:
        "We recommend dental check-ups every 6 months for most patients. This allows us to detect any issues early and maintain optimal oral health. Some patients with specific conditions may need more frequent visits, which we'll discuss during your consultation.",
    },
    {
      question: "Do you accept NHS patients?",
      answer:
        "Yes, we accept NHS patients, though availability may be limited due to high demand. We also offer private treatment options and membership plans that provide more flexibility and shorter waiting times.",
    },
    {
      question: "How do I book an emergency dental appointment?",
      answer:
        `Call us immediately at ${practiceInfo.contact.phone} for dental emergencies. We reserve same-day appointments for urgent problems including severe pain, swelling, trauma, or knocked-out teeth. Our emergency line provides immediate guidance and we'll get you seen as quickly as possible.`,
    },
    {
      question: "Where is your dental practice located?",
      answer:
        `We're located at ${practiceInfo.address.full}. We're easy to find on the main A612 road with free parking available directly outside the practice.`,
    },
    {
      question: "What's included in a routine dental examination?",
      answer:
        "A comprehensive examination includes checking your teeth and gums, digital X-rays when needed, oral cancer screening, bite assessment, and a thorough cleaning. We also provide personalised oral health advice and discuss any treatment recommendations.",
    },
    {
      question: "How can I contact the practice?",
      answer:
        `You can call us at ${practiceInfo.contact.phone}, email ${practiceInfo.contact.email}, or visit us at ${practiceInfo.address.full}. We also offer online booking for your convenience.`,
    },
  ];

  return (
    <ServerSideABWrapper variant={variant}>
      <ServiceFAQSchema
        serviceName="Pear Tree Dental Practice"
        faqs={homepageFAQs}
        pageUrl="/"
      />
      <ClientGoogleReviews />
      <Hero nonLocalBanner={showJudgeBanner ? { city: visitorCity } : null} />
      <PracticeShowcase />
      {/* Pass the dynamic, mapped services to the component */}
      <ServicesOverview services={servicesForOverview} />
      <TreatmentJourney />
      <MembershipHighlight />
      <VoiceSearchOptimization />
      <FAQSection />
    </ServerSideABWrapper>
  );
}
