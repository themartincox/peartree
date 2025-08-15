import React from "react";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ExaminationSection from "@/components/membership/ExaminationSection";
 // Critical components - loaded immediately
import SimplifiedPlanSelector from "@/components/membership/SimplifiedPlanSelector";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MedicalOrganizationSchema from "@/components/seo/MedicalOrganizationSchema";

 // Non-critical components - loaded dynamically with loading states
const BenefitsSection = dynamic(
  () => import("@/components/membership/BenefitsSection"),
  {
    loading: () => (
      <div className="h-48 animate-pulse bg-gray-100 rounded-lg" />
    ),
  },
);

const FaqSection = dynamic(() => import("@/components/membership/FaqSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />,
});

const CtaSection = dynamic(() => import("@/components/membership/CtaSection"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />,
});

export const metadata: Metadata = {
  title: "Simplified Dental Membership Plans | Pear Tree Dental",
  description:
    "Choose from our simplified dental membership plans in Burton Joyce. Essentials £14.50, Premium £24.95, All-in £29.95, Family £49. Simple billing, complete peace of mind.",
  keywords: [
    "simplified dental membership plans",
    "dental plan Burton Joyce",
    "private dental care Nottinghamshire",
    "NHS alternative dental care",
    "affordable dental membership",
    "family dental plans",
    "dental check-ups included",
    "dental hygienist appointments",
    "dental treatment discounts",
  ],
  openGraph: {
    title: "Simplified Dental Membership Plans | Pear Tree Dental",
    description:
      "Choose from our simplified dental membership plans in Burton Joyce. Essentials £14.50, Premium £24.95, All-in £29.95, Family £49.",
    type: "website",
    url: "https://peartree.dental/member2",
  },
};

export default function SimplifiedMembershipPage() {
  const breadcrumbItems = [{ name: "Simplified Membership Plans" }];

  return (
    <div className="min-h-screen bg-white">
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
            <span className="block text-dental-green">Made Easy</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We've simplified our membership plans to make choosing easier. Four
            clear options with everything you need for excellent dental care.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Check className="w-4 h-4 text-dental-green" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Check className="w-4 h-4 text-dental-green" />
              Simple billing
            </span>
            <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Check className="w-4 h-4 text-dental-green" />
              Complete peace of mind
            </span>
          </div>
        </div>
      </section>

      {/* Component Sections */}
      {/* 1. Examination */}
      <ExaminationSection />

      {/* 2. Simplified Plan Selector */}
      <SimplifiedPlanSelector />

      {/* 3. Benefits */}
      <BenefitsSection />

      {/* 4. Exclusions */}
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
                  <span>
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

      {/* 5. FAQ */}
      <FaqSection />
      <CtaSection />
    </div>
  );
}
