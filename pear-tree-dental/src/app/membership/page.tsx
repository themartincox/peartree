import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import ExaminationSection from "@/components/membership/ExaminationSection";
 // Critical components - loaded immediately
import PlanSelector from "@/components/membership/PlanSelector";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MedicalOrganizationSchema from "@/components/seo/MedicalOrganizationSchema";
 Import welcoming loaders
import {
  DentalTeamLoader,
  DiverseSmilesLoader,
  FamilyCareLoader,
  HappyPatientLoader,
} from "@/components/WelcomingLoader";

 Non-critical components - loaded dynamically with loading states
const PlanComparisonSlider = dynamic(
  () => import("@/components/membership/PlanComparisonSlider"),
  {
    loading: () => (
      <FamilyCareLoader message="Loading membership comparison..." />
    ),
  },
);

const CtaSection = dynamic(() => import("@/components/membership/CtaSection"), {
  loading: () => (
    <DentalTeamLoader height="h-64" message="Preparing your next steps..." />
  ),
});

const FaqSection = dynamic(() => import("@/components/membership/FaqSection"), {
  loading: () => (
    <HappyPatientLoader height="h-48" message="Loading helpful answers..." />
  ),
});

const BenefitsSection = dynamic(
  () => import("@/components/membership/BenefitsSection"),
  {
    loading: () => (
      <DiverseSmilesLoader message="Showcasing amazing benefits..." />
    ),
  },
);

const PlanSavingsChart = dynamic(
  () => import("@/components/membership/PlanSavingsChart"),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-gray-100 rounded-lg" />
    ),
  },
);

export const metadata: Metadata = {
  title: "Dental Membership Plans from £10.95/month | Pear Tree Dental",
  description:
    "Join our affordable dental membership plans in Burton Joyce from £10.95/month. Skip NHS waiting lists, get premium care, save money. Adult, child & family plans available.",
  keywords: [
    "dental membership plans Nottingham",
    "dental plan Burton Joyce",
    "private dental care Nottinghamshire",
    "NHS alternative dental care",
    "affordable dental membership",
    "family dental plans",
    "child dental membership",
    "dental check-ups included",
    "dental hygienist appointments",
    "dental treatment discounts",
  ],
  openGraph: {
    title: "Dental Membership Plans from £10.95/month | Pear Tree Dental",
    description:
      "Join our affordable dental membership plans in Burton Joyce from £10.95/month. Skip NHS waiting lists, get premium care, save money.",
    type: "website",
    url: "https://peartree.dental/membership",
  },
  alternates: {
    canonical: "https://peartree.dental/membership",
  },
};

export default function MembershipPage() {
  const breadcrumbItems = [{ name: "Membership Plans" }];

  return (
    <div className="min-h-screen bg-white">
      {/* Google Reviews Widget - Non-homepage */}
      <GoogleReviewsWidget />

      {/* SEO Schema */}
      <MedicalOrganizationSchema page="membership" />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbSchema items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
            Simple Dental Plans
            <span className="block text-dental-green">For Your Smile</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the right plan and take control of your dental health with
            our transparent, affordable membership options. No hidden fees, just
            care you can trust.
          </p>
        </div>
      </section>

      {/* Component Sections - Reordered as requested */}
      {/* 1. Examination */}
      <ExaminationSection />

      {/* 2. Plan Selector */}
      <PlanSelector />

      {/* 3. Compare */}
      <PlanComparisonSlider />

      {/* 4. Save */}
      <PlanSavingsChart />

      {/* 5. Worldwide (Benefits) */}
      <BenefitsSection />

      {/* 6. Exclusions */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-pear-primary mb-6">
              Important: Pear Tree Dental Care Plan does not cover:
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pear-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Laboratory fees and prescriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pear-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="lg:text-left">
                    Referral to a specialist for any dental procedure or a
                    referral for any specialist test such as an OPG x-ray / CT
                    scan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pear-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Orthodontics, implants</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-gray-600">
                All other routine treatments receive 10% discount with
                membership plans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FaqSection />
      <CtaSection />
    </div>
  );
}
