import type React from "react";
import type { Metadata } from "next";
import dynamicImport from "next/dynamic";

// Data fetching and types
import { fetchHubData } from "@/lib/services";
import { fallbackCategories } from "@/lib/service-fallbacks";
import { practiceInfo } from "@/data/practiceInfo";

// Critical above-the-fold components
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";
export const revalidate = 300;

// Add ClientGoogleReviews wrapper with 'use client' directive
const ClientGoogleReviews = dynamicImport(() => import('@/components/ClientGoogleReviews'));

// Loaders for dynamic components
import {
  DentalTeamLoader,
  DiverseSmilesLoader,
  FamilyCareLoader,
  GentleCareLoader,
  HappyPatientLoader,
} from "@/components/WelcomingLoader";

// Below-the-fold components - loaded dynamically (server-compatible)
const ServicesOverview = dynamicImport(
  () => import("@/components/ServicesOverview"),
  {
    loading: () => <DentalTeamLoader message="Loading our amazing services..." />,
  },
);

// Client-lazy wrappers for below-the-fold sections
import ClientLazyFAQSection from "@/components/lazy/ClientLazyFAQSection";
import ClientLazyTreatmentJourney from "@/components/lazy/ClientLazyTreatmentJourney";

const MembershipHighlight = dynamicImport(
  () => import("@/components/MembershipHighlight"),
  {
    loading: () => <FamilyCareLoader message="Preparing membership benefits..." />,
  },
);

// FAQSection handled by client-lazy wrapper

const VoiceSearchOptimization = dynamicImport(
  () => import("@/components/VoiceSearchOptimization"),
  {
    loading: () => <GentleCareLoader height="h-64" message="Optimizing your experience..." />,
  },
);

import ClientABWrapper from "@/components/ClientABWrapper";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";

// --- Service Data Mapping ---
// This object provides the decorative data that is not yet in Contentful.
const serviceDecorations: { [key: string]: any } = {
  'general': {
    contentfulSlug: "general-dentistry",
    label: "General Dentistry",
    description: "Keep your family's smiles healthy with regular check-ups, hygiene visits, and everyday dentistry.",
    href: "/services/general",
    icon: "Shield",
    theme: "primary",
    treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
    image: "/images/general-dental-checkup.webp",
  },
  'cosmetic': {
    contentfulSlug: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    description: "Smile makeovers, whitening, and veneers designed to enhance your confidence.",
    href: "/services/cosmetic",
    icon: "Sparkles",
    theme: "cosmetic",
    treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
    image: "/images/cosmetic-dentistry-services.webp",
  },
  'restorative': {
    contentfulSlug: "restorative-dentistry",
    label: "Restorative Dentistry",
    description: "Repair and rebuild teeth with crowns, bridges, dentures, and more.",
    href: "/services/restorative",
    icon: "ShieldCheck",
    theme: "primary",
    treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
    image: "/images/restorative-dental-treatment.webp",
  },
  'implants': {
    contentfulSlug: "dental-implants",
    label: "Dental Implants",
    description: "Long-lasting implant solutions from single teeth to full-arch smile restorations.",
    href: "/services/implants",
    icon: "Zap",
    theme: "cosmetic",
    treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
    image: "/images/dental-implants-procedure.webp",
  },
  'orthodontics': {
    contentfulSlug: "orthodontics",
    label: "Orthodontics",
    description: "Discreet teeth straightening with Invisalign, ClearCorrect, and specialist retainers.",
    href: "/services/orthodontics",
    icon: "Smile",
    theme: "cosmetic",
    treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
    image: "/images/orthodontics-invisalign-treatment.webp",
  },
  'emergency-dentist': {
    contentfulSlug: "emergency-dentistry",
    label: "Emergency Dentist",
    description: "Same-day relief for tooth pain, trauma, and urgent dental problems.",
    href: "/services/emergency",
    icon: "AlertTriangle",
    theme: "destructive",
    treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
    image: "/images/emergency-dental-care.webp",
  },
};

// Static metadata to keep the page cacheable
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dentist in Nottingham | Pear Tree Dental Practice",
    description:
      "Your trusted private dentist in Nottingham for Invisalign, dental implants, and smile makeovers. Book a consultation at our modern Nottingham practice.",
  };
}

export default async function HomePage(): Promise<React.JSX.Element> {

  let categories;
  try {
    const hubData = await fetchHubData();
    categories = hubData.categories;
  } catch (error) {
    console.error(
      "Failed to load homepage service data from Contentful, using static fallback",
      error,
    );
    categories = fallbackCategories;
  }

  if (!categories?.length) {
    categories = fallbackCategories;
  }

  const categoriesBySlug = new Map(categories.map((category) => [category.slug, category]));

  const servicesForOverview = Object.entries(serviceDecorations).map(([slug, decoration]) => {
    const match = categoriesBySlug.get(decoration.contentfulSlug ?? slug) ?? categoriesBySlug.get(slug);

    return {
      id: match?.sys.id ?? slug,
      title: match?.title ?? decoration.label,
      description: match?.excerpt ?? decoration.description,
      href: match ? `/services/${match.slug}` : decoration.href,
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
    <>
      {/* Client AB overlay and classes (cookieless) */}
      <ClientABWrapper />

      {/* Server-side SEO schema must remain outside client boundaries */}
      <ServiceFAQSchema
        serviceName="Pear Tree Dental Practice"
        faqs={homepageFAQs}
        pageUrl="/"
      />

      <ClientGoogleReviews />
      <Hero />
      <PracticeShowcase />
      {/* Pass the dynamic, mapped services to the component */}
      <ServicesOverview services={servicesForOverview} />
      <ClientLazyTreatmentJourney />
      <MembershipHighlight />
      <VoiceSearchOptimization />
      <ClientLazyFAQSection />
    </>
  );
}
