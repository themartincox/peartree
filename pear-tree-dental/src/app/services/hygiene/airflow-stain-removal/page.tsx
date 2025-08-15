import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Coffee,
  Heart, 
  Shield,
  Sparkles,
  Star,
  Wind,
  Zap
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Air Flow Stain Removal - Advanced Dental Hygiene | Pear Tree Dental",
  description: "Professional Air Flow stain removal in Burton Joyce. Remove stubborn stains from coffee, tea, wine & smoking. £150. Advanced hygiene treatment for brighter teeth.",
  keywords: [
    "Air Flow stain removal Burton Joyce",
    "professional stain removal Nottingham",
    "dental hygiene treatment",
    "coffee stain removal",
    "smoking stain removal",
    "advanced dental cleaning Burton Joyce",
    "EMS Air Flow system"
  ],
  openGraph: {
    title: "Air Flow Stain Removal - Advanced Hygiene Treatment | Pear Tree Dental",
    description: "Remove stubborn stains with professional Air Flow treatment. Advanced hygiene system for cleaner, brighter teeth.",
    type: "website",
    url: "https://peartree.dental/services/hygiene/airflow-stain-removal"
  },
  alternates: {
    canonical: "https://peartree.dental/services/hygiene/airflow-stain-removal"
  }
};

export default function AirFlowStainRemovalPage() {
  const airFlowFAQs = [
    {
      question: "What is Air Flow stain removal?",
      answer: "Air Flow is an advanced dental hygiene system that uses a controlled stream of air, water, and fine powder to gently remove stains and plaque from teeth. It's more effective than traditional scaling for removing stubborn surface stains."
    },
    {
      question: "How effective is Air Flow for stain removal?",
      answer: "Air Flow is highly effective at removing surface stains from coffee, tea, red wine, and tobacco. It can remove stains that regular brushing and traditional cleaning methods can't tackle, revealing the natural whiteness of your teeth."
    },
    {
      question: "Is Air Flow treatment painful?",
      answer: "Air Flow treatment is generally comfortable and painless. Most patients find it more pleasant than traditional scaling. You may feel a gentle spray sensation, but there's no drilling or scraping involved."
    },
    {
      question: "How long does an Air Flow treatment take?",
      answer: "A typical Air Flow session takes 30-45 minutes depending on the amount of staining. It can be combined with a regular hygienist appointment for comprehensive oral care."
    },
    {
      question: "How often should I have Air Flow treatment?",
      answer: "For most patients, Air Flow treatment every 3-6 months maintains optimal results. Heavy coffee drinkers or smokers may benefit from more frequent treatments. We'll recommend the ideal frequency based on your lifestyle."
    }
  ];

  const benefits = [
    {
      icon: Wind,
      title: "Gentle Yet Effective",
      description: "Removes stubborn stains without harsh scraping or damage to tooth enamel"
    },
    {
      icon: Sparkles,
      title: "Instant Results",
      description: "See immediate improvement in tooth brightness and cleanliness after treatment"
    },
    {
      icon: Shield,
      title: "Safe for Enamel",
      description: "Non-abrasive treatment that preserves your natural tooth structure"
    },
    {
      icon: Clock,
      title: "Quick Treatment",
      description: "Efficient 30-45 minute procedure that fits easily into your schedule"
    }
  ];

  const stainTypes = [
    {
      source: "Coffee & Tea",
      icon: Coffee,
      description: "Daily coffee and tea consumption leaves persistent brown stains",
      effectiveness: "Excellent"
    },
    {
      source: "Red Wine",
      icon: Heart,
      description: "Tannins in red wine create deep, stubborn stains",
      effectiveness: "Excellent"
    },
    {
      source: "Tobacco",
      icon: Zap,
      description: "Smoking and tobacco use causes yellow-brown discoloration",
      effectiveness: "Very Good"
    },
    {
      source: "Food Stains",
      icon: Sparkles,
      description: "Curry, berries, and colored foods can stain teeth over time",
      effectiveness: "Excellent"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "We examine your teeth and assess the type and extent of staining"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Protective measures are taken and the Air Flow device is calibrated"
    },
    {
      step: "3",
      title: "Treatment",
      description: "Gentle air, water, and powder spray removes stains and plaque"
    },
    {
      step: "4",
      title: "Polish & Protect",
      description: "Final polish and fluoride application to protect and strengthen teeth"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Air Flow Stain Removal"
        description="Advanced dental hygiene treatment using EMS Air Flow system to remove stubborn stains from coffee, tea, wine, and tobacco"
        price="£150"
        category="Dental Hygiene"
        duration="30-45 minutes"
        preparation="No special preparation required"
        recovery="No downtime, can eat and drink immediately"
        benefits={[
          "Removes stubborn surface stains",
          "Gentle and comfortable treatment",
          "Immediate visible results",
          "Safe for tooth enamel",
          "More effective than traditional scaling"
        ]}
        risks={[
          "Temporary sensitivity (rare)",
          "Not suitable for deep intrinsic stains",
          "May cause slight gum irritation",
          "Not recommended during pregnancy"
        ]}
        rating={4.8}
        reviewCount={95}
        url="https://peartree.dental/services/hygiene/airflow-stain-removal"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Air Flow Stain Removal"
        faqs={airFlowFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/hygiene" className="hover:text-pear-primary">Hygiene</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Air Flow Stain Removal</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Wind className="w-4 h-4 mr-2" />
                Advanced Hygiene Treatment
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Air Flow
                <span className="text-blue-600 block">Stain Removal</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Remove stubborn stains from coffee, tea, wine, and tobacco with our advanced Air Flow
                system. Gentle, effective, and immediate results for a brighter, cleaner smile.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold to-pear-gold border border-pear-gold rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Trusted by patients for over 10 years</span>
              </div>

              {/* Key Features */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Air Flow?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Removes stubborn stains</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Gentle & comfortable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Instant results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Safe for enamel</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Treatment</div>
                  <div className="text-3xl font-bold text-blue-600">{getTreatmentPrice("Air Flow Stain Removal")}</div>
                  <div className="text-sm text-gray-600">Per session</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
                    Book Air Flow Treatment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500 text-white">EMS Air Flow System</Badge>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Advanced Technology</h3>
                  <p className="text-gray-600">
                    Our state-of-the-art Air Flow system uses controlled air, water, and powder
                    to remove stains that traditional cleaning can't reach.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">30-45 mins</div>
                      <div className="text-gray-600">Treatment time</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">Immediate</div>
                      <div className="text-gray-600">Results visible</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Air Flow Treatment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced stain removal technology available, designed for
              comfort and effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stain Types Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Stains We Can Remove
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Air Flow effectively removes various types of surface stains that regular
              brushing and traditional cleaning can't eliminate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(stainTypes || []).map((stain) => {
              const Icon = stain.icon;
              return (
                <Card key={stain.source} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{stain.source}</h3>
                    <p className="text-sm text-gray-600 mb-3">{stain.description}</p>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {stain.effectiveness}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Air Flow Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process ensures comfortable, effective stain removal
              with immediate visible results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Remove Stubborn Stains Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience the power of Air Flow stain removal. Book your appointment today
                and see the immediate difference advanced hygiene technology can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Book Air Flow Treatment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn About Other Hygiene Services
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Air Flow Stain Removal")} • 30-45 minutes • Immediate results
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
