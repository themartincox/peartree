import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Critical above-the-fold components - loaded immediately
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";

// Below-the-fold components - loaded dynamically for better performance
const ServicesOverview = dynamic(() => import("@/components/ServicesOverview"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />
});

const TreatmentJourney = dynamic(() => import("@/components/TreatmentJourney"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-50" />
});

const MembershipHighlight = dynamic(() => import("@/components/MembershipHighlight"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-lg mx-4" />
});

const VoiceSearchOptimization = dynamic(() => import("@/components/VoiceSearchOptimization"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-50 rounded-lg mx-4" />
});
import ServerSideABWrapper from "@/components/ServerSideABWrapper";
import { getVariant, getVariantMetadata } from "@/lib/ab-testing";

// Generate metadata based on A/B test variant
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);

  return {
    title: variantMetadata.title,
    description: variantMetadata.description,
    // Include variant info for debugging (invisible in production)
    other: {
      'x-ab-variant': variant,
    },
  };
import { getVariant, getVariantMetadata } from "@/lib/ab-testing";

// Generate metadata based on A/B test variant
export async function generateMetadata(): Promise<Metadata> {
  const variant = await getVariant();
  const variantMetadata = getVariantMetadata(variant);

  return {
    title: variantMetadata.title,
    description: variantMetadata.description,
    // Include variant info for debugging (invisible in production)
    other: {
      'x-ab-variant': variant,
    },
  };
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

export default async function HomePage() {
  // Get variant server-side for SSR
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
