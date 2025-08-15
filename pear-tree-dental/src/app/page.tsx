import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

 // Critical above-the-fold components - loaded immediately
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";

 Import our beautiful welcoming loaders
import {
  DentalTeamLoader,
  DiverseSmilesLoader,
  FamilyCareLoader,
  GentleCareLoader,
  HappyPatientLoader,
} from "@/components/WelcomingLoader";

 Below-the-fold components - loaded dynamically for better performance with welcoming loaders
const ServicesOverview = dynamic(
  () => import("@/components/ServicesOverview"),
  {
    loading: () => (
      <DentalTeamLoader message="Loading our amazing services..." />
    ),
  },
);

const TreatmentJourney = dynamic(
  () => import("@/components/TreatmentJourney"),
  {
    loading: () => (
      <HappyPatientLoader
        height="h-screen"
        message="Mapping your treatment journey..."
      />
    ),
  },
);

const MembershipHighlight = dynamic(
  () => import("@/components/MembershipHighlight"),
  {
    loading: () => (
      <FamilyCareLoader message="Preparing membership benefits..." />
    ),
  },
);

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <DiverseSmilesLoader message="Loading helpful answers..." />,
});

const VoiceSearchOptimization = dynamic(
  () => import("@/components/VoiceSearchOptimization"),
  {
    loading: () => (
      <GentleCareLoader height="h-64" message="Optimizing your experience..." />
    ),
  },
);

import ServerSideABWrapper from "@/components/ServerSideABWrapper";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { getVariant, getVariantMetadata } from "@/lib/ab-testing";

 Generate metadata based on A/B test variant
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);

  return {
    title: variantMetadata.title,
    description: variantMetadata.description,
     Include variant info for debugging (invisible in production)
    other: {
      "x-ab-variant": variant,
    },
  };
}

export default async function HomePage(): Promise<React.JSX.Element> {
   Get variant server-side for SSR
  const variant = await getVariant();

   Homepage FAQs - consolidated from general practice questions
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
        "Call us immediately at 0115 931 2935 for dental emergencies. We reserve same-day appointments for urgent problems including severe pain, swelling, trauma, or knocked-out teeth. Our emergency line provides immediate guidance and we'll get you seen as quickly as possible.",
    },
    {
      question: "Where is your dental practice located?",
      answer:
        "We're located at 22 Nottingham Road, Burton Joyce, Nottingham NG14 5AE. We're easy to find on the main A612 road with free parking available directly outside the practice.",
    },
    {
      question: "What's included in a routine dental examination?",
      answer:
        "A comprehensive examination includes checking your teeth and gums, digital X-rays when needed, oral cancer screening, bite assessment, and a thorough cleaning. We also provide personalized oral health advice and discuss any treatment recommendations.",
    },
    {
      question: "How can I contact the practice?",
      answer:
        "You can call us at 0115 931 2935, email hello@peartree.dental, or visit us at 22 Nottingham Road, Burton Joyce, Nottingham NG14 5AE. We also offer online booking for your convenience.",
    },
  ];

  return (
    <ServerSideABWrapper variant={variant}>
      {/* FAQ Schema for Homepage */}
      <ServiceFAQSchema
        serviceName="Pear Tree Dental Practice"
        faqs={homepageFAQs}
        pageUrl="/"
      />

      <Hero />
      <PracticeShowcase />
      <ServicesOverview />
      <TreatmentJourney />
      <MembershipHighlight />
      <VoiceSearchOptimization />
      <FAQSection />
    </ServerSideABWrapper>
  );
}
