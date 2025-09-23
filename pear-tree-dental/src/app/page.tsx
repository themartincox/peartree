// app/page.tsx
import type React from "react";
import type { Metadata } from "next";
import dynamicImport from "next/dynamic";
import { headers } from "next/headers"; // 👈 add this

// Data fetching and types
import { fetchAllServices } from "@/lib/contentful-client";
import type { ServiceEntry } from "@/types/contentful";
import { practiceInfo } from "@/data/practiceInfo";

// Critical above-the-fold components
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";

// Add ClientGoogleReviews wrapper with 'use client' directive
const ClientGoogleReviews = dynamicImport(() => import('@/components/ClientGoogleReviews'), { ssr: true });

// Loaders for dynamic components
import {
  DentalTeamLoader,
  DiverseSmilesLoader,
  FamilyCareLoader,
  GentleCareLoader,
  HappyPatientLoader,
} from "@/components/WelcomingLoader";

// Below-the-fold components - loaded dynamically
const ServicesOverview = dynamicImport(() => import("@/components/ServicesOverview"), {
  loading: () => <DentalTeamLoader message="Loading our amazing services..." />,
});

const TreatmentJourney = dynamicImport(() => import("@/components/TreatmentJourney"), {
  loading: () => <HappyPatientLoader height="h-screen" message="Mapping your treatment journey..." />,
});

const MembershipHighlight = dynamicImport(() => import("@/components/MembershipHighlight"), {
  loading: () => <FamilyCareLoader message="Preparing membership benefits..." />,
});

const FAQSection = dynamicImport(() => import("@/components/FAQSection"), {
  loading: () => <DiverseSmilesLoader message="Loading helpful answers..." />,
});

const VoiceSearchOptimization = dynamicImport(() => import("@/components/VoiceSearchOptimization"), {
  loading: () => <GentleCareLoader height="h-64" message="Optimizing your experience..." />,
});

import ServerSideABWrapper from "@/components/ServerSideABWrapper";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { getVariant, getVariantMetadata } from "@/lib/ab-testing";

// --- Service Data Mapping ---
const serviceDecorations: { [key: string]: any } = {
  'general': {
    icon: "Shield",
    theme: "primary",
    treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
    image: "/images/general-dental-checkup.webp",
  },
  'cosmetic': {
    icon: "Sparkles",
    theme: "cosmetic",
    treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
    image: "/images/cosmetic-dentistry-services.webp",
  },
  'restorative': {
    icon: "ShieldCheck",
    theme: "primary",
    treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
    image: "/images/restorative-dental-treatment.webp",
  },
  'implants': {
    icon: "Zap",
    theme: "cosmetic",
    treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
    image: "/images/dental-implants-procedure.webp",
  },
  'orthodontics': {
    icon: "Smile",
    theme: "cosmetic",
    treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
    image: "/images/orthodontics-invisalign-treatment.webp",
  },
  'emergency-dentist': {
    icon: "AlertTriangle",
    theme: "destructive",
    treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
    image: "/images/emergency-dental-care.webp",
  },
};

// --- A/B metadata stays, but we can also read headers in metadata if you want (see below) ---
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);
  return {
    title: variantMetadata.title,
    description: variantMetadata.description,
    other: { "x-ab-variant": variant },
  };
}

export default async function HomePage(): Promise<React.JSX.Element> {
  // 👇 Read cohort headers the middleware forwarded as *request* headers
  const h = headers();
  const geo = h.get("x-peartree-geo") ?? "global";
  const timeOfDay = h.get("x-peartree-time") ?? "day";
  const officeOpen = h.get("x-peartree-office-hours") === "true";
  const device = h.get("x-peartree-device") ?? "desktop";
  const source = h.get("x-peartree-source") ?? "direct";

  const variant = await getVariant();

  // Fetch and map services
  const allServices = await fetchAllServices();
  const mappedServices = allServices.map((service: ServiceEntry) => {
    const decoration = serviceDecorations[service.fields.slug] || {};
    return {
      id: service.sys.id,
      title: service.fields.serviceName,
      description: service.fields.description || "",
      href: `/services/${service.fields.slug}`,
      slug: service.fields.slug,
      icon: decoration.icon || "Shield",
      theme: decoration.theme || "medical",
      treatments: decoration.treatments || [],
      image: decoration.image || "",
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
      <ServiceFAQSchema serviceName="Pear Tree Dental Practice" faqs={homepageFAQs} pageUrl="/" />
      {/* 👇 Pass cohort props into components that should change */}
      <ClientGoogleReviews />
      <Hero
        geo={geo}
        officeOpen={officeOpen}
        device={device}
        timeOfDay={timeOfDay}
        source={source}
        variant={variant}
      />
      <PracticeShowcase geo={geo} />
      <ServicesOverview services={mappedServices} />
      <TreatmentJourney />
      <MembershipHighlight officeOpen={officeOpen} />
      <VoiceSearchOptimization source={source} />
      <FAQSection />
    </ServerSideABWrapper>
  );
}