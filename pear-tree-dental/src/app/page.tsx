import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { getVariant, getVariantMetadata } from "@/lib/ab-testing";
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";
import ServerSideABWrapper from "@/components/ServerSideABWrapper";

// Dynamically loaded components (below-the-fold)
const ServicesOverview = dynamic(() => import("@/components/ServicesOverview"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />,
});

const TreatmentJourney = dynamic(() => import("@/components/TreatmentJourney"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-50" />,
});

const MembershipHighlight = dynamic(() => import("@/components/MembershipHighlight"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />,
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />,
});

const VoiceSearchOptimization = dynamic(() => import("@/components/VoiceSearchOptimization"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-50 rounded-lg mx-4" />,
});

// Metadata for SEO and Open Graph
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);

  return {
    metadataBase: new URL("https://peartree.dental"),
    title: variantMetadata.title,
    description: variantMetadata.description,
    other: {
      'x-ab-variant': variant,
    },
  };
}

// Home page content with A/B testing wrapper
export default async function HomePage() {
  const variant = await getVariant();

  return (
    <ServerSideABWrapper variant={variant}>
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
