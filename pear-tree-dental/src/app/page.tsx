import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Critical above-the-fold components - loaded immediately
import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";

// Import our beautiful welcoming loaders
import {
  DentalTeamLoader,
  HappyPatientLoader,
  FamilyCareLoader,
  DiverseSmilesLoader,
  GentleCareLoader
} from "@/components/WelcomingLoader";

// Below-the-fold components - loaded dynamically for better performance with welcoming loaders
const ServicesOverview = dynamic(() => import("@/components/ServicesOverview"), {
  loading: () => <DentalTeamLoader message="Loading our amazing services..." />
});

const TreatmentJourney = dynamic(() => import("@/components/TreatmentJourney"), {
  loading: () => <HappyPatientLoader height="h-screen" message="Mapping your treatment journey..." />
});

const MembershipHighlight = dynamic(() => import("@/components/MembershipHighlight"), {
  loading: () => <FamilyCareLoader message="Preparing membership benefits..." />
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <DiverseSmilesLoader message="Loading helpful answers..." />
});

const VoiceSearchOptimization = dynamic(() => import("@/components/VoiceSearchOptimization"), {
  loading: () => <GentleCareLoader height="h-64" message="Optimizing your experience..." />
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
