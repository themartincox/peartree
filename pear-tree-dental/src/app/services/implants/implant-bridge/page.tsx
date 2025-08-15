import React from "react";
import { ArrowRight, Calendar, Crown } from "lucide-react";
import type { Metadata } from "next";
import ServiceNavigation from "@/components/ServiceNavigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Implant Bridge - Replace Multiple Teeth with Bridge | Pear Tree Dental",
  description:
    "Implant bridge in Burton Joyce. Replace multiple adjacent teeth with implant-supported bridge. From £8,500. Cost-effective solution with strong support.",
  keywords: [
    "implant bridge Burton Joyce",
    "dental bridge on implants",
    "multiple tooth replacement",
    "implant supported bridge",
    "dental implants Nottingham",
  ],
  openGraph: {
    title: "Implant Bridge - Multiple Tooth Replacement | Pear Tree Dental",
    description:
      "Replace multiple teeth with implant-supported bridge in Burton Joyce",
    type: "website",
    url: "https://peartree.dental/services/implants/implant-bridge",
  },
  alternates: {
    canonical: "https://peartree.dental/services/implants/implant-bridge",
  },
};

export default function ImplantBridgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-purple-100 text-purple-800"
            >
              <Crown className="w-4 h-4 mr-2" />
              Implant Bridge
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary mb-6">
              Replace Multiple Teeth
              <span className="text-purple-600 block">with Implant Bridge</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cost-effective solution using 2-4 implants to support multiple
              connected crowns. Strong, stable, and natural-looking replacement
              for adjacent missing teeth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
