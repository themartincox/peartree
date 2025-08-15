import React from "react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  Clock,
  Crown,
  Heart,
  Shield,
  Smile,
  Star,
  Target, 
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Partial Dentures - Replace Missing Teeth | Pear Tree Dental Burton Joyce",
  description: "Partial dentures in Burton Joyce. Replace multiple missing teeth while preserving natural teeth. £600. Comfortable, affordable solution for gaps in your smile.",
  keywords: [
    "partial dentures Burton Joyce",
    "missing teeth replacement Nottingham",
    "removable partial dentures",
    "affordable tooth replacement",
    "denture clasps Burton Joyce",
    "gap filling dentures",
    "natural tooth preservation"
  ],
  openGraph: {
    title: "Partial Dentures - Affordable Missing Teeth Solution | Pear Tree Dental",
    description: "Replace missing teeth while keeping your natural teeth with comfortable partial dentures.",
    type: "website",
    url: "https://peartree.dental/services/restorative/dentures/partial-dentures"
  },
  alternates: {
    canonical: "https://peartree.dental/services/restorative/dentures/partial-dentures"
  }
};

export default function PartialDenturesPage() {
  const partialDenturesFAQs = [
    {
      question: "What are partial dentures and who needs them?",
      answer: "Partial dentures are removable appliances that replace one or more missing teeth while preserving your remaining natural teeth. They're ideal for patients who have lost some teeth but still have healthy teeth remaining."
    },
    {
      question: "How comfortable are partial dentures?",
      answer: "Modern partial dentures are designed for comfort with proper fitting and adjustment. There's typically a brief adjustment period as you get used to wearing them, but most patients find them comfortable for daily wear."
    },
    {
      question: "How long do partial dentures last?",
      answer: "Acrylic partial dentures typically last 5-7 years with proper care. The lifespan depends on changes in your mouth, care routine, and the quality of the denture. Regular check-ups help ensure optimal fit and function."
    },
    {
      question: "Can I eat normally with partial dentures?",
      answer: "Yes, with practice you can eat most foods comfortably. Start with soft foods and gradually introduce harder items. Cutting food into smaller pieces and chewing on both sides helps maintain balance and comfort."
    },
    {
      question: "How do I care for my partial dentures?",
      answer: "Clean your partial dentures daily with a soft brush and denture cleaner. Remove them at night to give your gums rest. Store them in water or denture solution. Regular dental check-ups ensure proper fit and oral health."
    }
  ];

  const benefits = [
    {
      icon: Crown,
      title: "Preserve Natural Teeth",
      description: "Keep your healthy remaining teeth while replacing only what's missing"
    },
    {
      icon: Smile,
      title: "Restore Your Smile",
      description: "Fill gaps in your smile for improved appearance and confidence"
    },
    {
      icon: Target,
      title: "Prevent Shifting",
      description: "Stop remaining teeth from shifting into empty spaces"
    },
    {
      icon: Heart,
      title: "Improve Function",
      description: "Better chewing and speaking ability with replaced teeth"
    }
  ];

  const features = [
    "Removable for easy cleaning",
    "Preserves remaining natural teeth",
    "Cost-effective solution",
    "Quick treatment process",
    "Custom-fitted for comfort",
    "Natural tooth appearance",
    "Prevents bone loss",
    "Improves facial support"
  ];

  const types = [
    {
      type: "Acrylic Partial Dentures",
      description: "Traditional, affordable option with comfortable plastic base",
      pros: ["Most affordable", "Quick to make", "Easy to adjust", "Lightweight"],
      cons: ["Visible metal clasps", "Less precise fit", "May be bulkier"],
      price: getTreatmentPrice("Acrylic Partial Dentures")
    },
    {
      type: "Premium Alternatives",
      description: "Advanced options for enhanced comfort and aesthetics",
      pros: ["Superior fit", "Better aesthetics", "Enhanced durability", "Comfortable wear"],
      cons: ["Higher investment", "Longer fabrication time"],
      note: "See Valplast, Cobalt Chrome, or Hybrid options for premium solutions"
    }
  ];

  const candidateFactors = [
    {
      situation: "Multiple Missing Teeth",
      description: "When several teeth are missing but healthy teeth remain",
      icon: Crown
    },
    {
      situation: "Budget Considerations",
      description: "Cost-effective solution compared to implants or bridges",
      icon: Target
    },
    {
      situation: "Healthy Remaining Teeth",
      description: "When existing teeth are healthy enough to support partial denture",
      icon: Shield
    },
    {
      situation: "Bone Preservation",
      description: "Help maintain jawbone structure and facial support",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Examination of remaining teeth and discussion of partial denture options"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Precise impressions of your teeth for custom denture fabrication"
    },
    {
      step: "3",
      title: "Try-In",
      description: "Test fitting to ensure proper fit, bite, and appearance"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Final fitting with instructions for wearing and care"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Partial Dentures"
        description="Removable partial dentures to replace multiple missing teeth while preserving remaining natural teeth"
        price="£600"
        category="Restorative Dentistry"
        duration="2-3 appointments over 2-3 weeks"
        preparation="Dental examination, impressions, bite registration"
        recovery="Adjustment period 1-2 weeks"
        benefits={[
          "Preserves remaining natural teeth",
          "Restores chewing and speaking function",
          "Prevents teeth shifting",
          "Affordable tooth replacement",
          "Improves facial support"
        ]}
        risks={[
          "Initial adjustment period",
          "May need periodic adjustments",
          "Clasps may be visible",
          "Requires daily cleaning routine"
        ]}
        rating={4.5}
        reviewCount={125}
        url="https://peartree.dental/services/restorative/dentures/partial-dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Partial Dentures"
        faqs={partialDenturesFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/restorative" className="hover:text-pear-primary">Restorative</Link>
            <span>/</span>
            <Link href="/services/restorative/dentures" className="hover:text-pear-primary">Dentures</Link>
            <span>/</span>
            <span className="text-emerald-600 font-medium">Partial Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/restorative/dentures" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dentures
              </Link>

              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                <Crown className="w-4 h-4 mr-2" />
                Preserve Natural Teeth
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Partial
                <span className="text-emerald-600 block">Dentures</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Replace missing teeth while preserving your natural ones. Affordable,
                comfortable partial dentures restore your smile and function.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold to-pear-gold border border-pear-gold rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Most popular denture option for partial tooth loss</span>
              </div>

              {/* Key Features */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Partial Dentures?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">Preserve natural teeth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">Affordable solution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">Quick treatment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">Removable design</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-emerald-600">{getTreatmentPrice("Acrylic Partial Dentures")}</div>
                  <div className="text-sm text-gray-600">Per arch</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold">
                    Book Partial Denture Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-emerald-500 text-white">Preserve & Replace</Badge>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-emerald-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Smart Solution</h3>
                  <p className="text-gray-600">
                    Partial dentures offer the perfect balance of preserving healthy teeth
                    while replacing missing ones at an affordable cost.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-emerald-600">2-3 weeks</div>
                      <div className="text-gray-600">Treatment time</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-emerald-600">5-7 years</div>
                      <div className="text-gray-600">Expected lifespan</div>
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
              Why Choose Partial Dentures?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partial dentures offer an ideal solution when you want to replace
              missing teeth while preserving your healthy natural teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Partial Denture Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from traditional acrylic partial dentures or explore
              our premium alternatives for enhanced comfort and aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(types || []).map((type) => (
              <Card key={type.type} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{type.type}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                  {type.price && (
                    <Badge variant="outline" className="text-emerald-600 border-emerald-600 w-fit">
                      {type.price}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                    <div className="space-y-1">
                      {(type.pros || []).map((pro, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700 mb-2">Considerations:</h4>
                    <div className="space-y-1">
                      {(type.cons || []).map((con, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {type.note && (
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-sm text-emerald-700">{type.note}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Partial Denture Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key features that make partial dentures an excellent
              choice for replacing multiple missing teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(features || []).map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Factors Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Are Partial Dentures Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partial dentures are ideal for various situations involving
              multiple missing teeth and healthy remaining teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(candidateFactors || []).map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.situation} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{factor.situation}</h3>
                    <p className="text-sm text-gray-600">{factor.description}</p>
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
              Your Partial Denture Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our straightforward 4-step process ensures your partial dentures
              fit comfortably and restore your smile beautifully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-emerald-300" />
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
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Restore Your Smile Today
              </h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Don't let missing teeth affect your confidence. Partial dentures offer
                an affordable, effective solution to restore your smile and function.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white font-semibold">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                  Compare Denture Options
                </Button>
              </div>

              <div className="text-sm text-white">
                From {getTreatmentPrice("Acrylic Partial Dentures")} • 2-3 weeks • Preserve natural teeth
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
