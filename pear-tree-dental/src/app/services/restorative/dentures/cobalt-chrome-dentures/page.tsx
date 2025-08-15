import React from "react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  Crown,
  Layers, 
  Shield,
  Sparkles,
  Star,
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
  title: "Cobalt Chrome Dentures - Premium Metal Framework Dentures | Pear Tree Dental",
  description: "Cobalt Chrome dentures in Burton Joyce. Premium metal framework partial dentures for superior strength and precision fit. £1,100. Expert craftsmanship.",
  keywords: [
    "Cobalt Chrome dentures Burton Joyce",
    "metal framework dentures Nottingham",
    "premium partial dentures",
    "precision fit dentures",
    "strong denture base",
    "cobalt chrome framework",
    "durable partial dentures"
  ],
  openGraph: {
    title: "Cobalt Chrome Dentures - Superior Strength & Precision | Pear Tree Dental",
    description: "Experience premium dentures with cobalt chrome framework for unmatched strength and precision fit.",
    type: "website",
    url: "https://peartree.dental/services/restorative/dentures/cobalt-chrome-dentures"
  },
  alternates: {
    canonical: "https://peartree.dental/services/restorative/dentures/cobalt-chrome-dentures"
  }
};

export default function CobaltChromeDenturesPage() {
  const cobaltChromeFAQs = [
    {
      question: "What are Cobalt Chrome dentures and why are they special?",
      answer: "Cobalt Chrome dentures feature a precision-cast metal framework made from biocompatible cobalt-chromium alloy. This provides exceptional strength, perfect fit, and superior retention compared to all-acrylic dentures."
    },
    {
      question: "How long do Cobalt Chrome dentures last?",
      answer: "Cobalt Chrome dentures typically last 10-15 years or more due to the exceptional durability of the metal framework. The cast metal doesn't wear or distort like acrylic, maintaining a precise fit over time."
    },
    {
      question: "Are Cobalt Chrome dentures comfortable?",
      answer: "Yes, they're very comfortable. The precision-cast framework ensures an accurate fit with minimal bulk, while the thin, strong metal allows for better tongue space and more natural speech and eating."
    },
    {
      question: "Will the metal framework be visible?",
      answer: "When properly designed, the metal framework is strategically placed to be minimally visible. In most cases, only a small portion may show, which many patients find acceptable given the superior function and durability."
    },
    {
      question: "Who is a good candidate for Cobalt Chrome dentures?",
      answer: "Cobalt Chrome dentures are ideal for patients who want the strongest, most precise partial denture available, particularly those with an active lifestyle or who require maximum retention and durability."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Superior Strength",
      description: "Unmatched durability with precision-cast metal framework"
    },
    {
      icon: Crown,
      title: "Perfect Precision",
      description: "CAD/CAM technology ensures accurate fit and optimal function"
    },
    {
      icon: Shield,
      title: "Long-lasting",
      description: "Metal framework maintains shape and fit for decades"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Highest standard of denture craftsmanship and materials"
    }
  ];

  const features = [
    "Precision-cast cobalt-chromium metal framework",
    "CAD/CAM technology for perfect fit",
    "Exceptional strength and durability",
    "Minimal tissue coverage for comfort",
    "Superior retention and stability",
    "Biocompatible and safe materials",
    "Thin profile for natural feel",
    "Resistant to wear and distortion"
  ];

  const comparisons = [
    {
      feature: "Framework Material",
      cobaltChrome: "Precision-cast metal",
      acrylic: "Molded plastic resin"
    },
    {
      feature: "Strength",
      cobaltChrome: "Exceptional durability",
      acrylic: "Moderate strength"
    },
    {
      feature: "Precision",
      cobaltChrome: "CAD/CAM accuracy",
      acrylic: "Standard molding"
    },
    {
      feature: "Thickness",
      cobaltChrome: "Ultra-thin framework",
      acrylic: "Thicker for strength"
    },
    {
      feature: "Retention",
      cobaltChrome: "Superior grip",
      acrylic: "Good with proper fit"
    },
    {
      feature: "Longevity",
      cobaltChrome: "10-15+ years",
      acrylic: "5-7 years typically"
    }
  ];

  const manufacturing = [
    {
      stage: "Digital Scanning",
      description: "Precise 3D scanning of your mouth for perfect measurements",
      icon: Sparkles
    },
    {
      stage: "CAD Design",
      description: "Computer-aided design creates the optimal framework shape",
      icon: Layers
    },
    {
      stage: "Precision Casting",
      description: "Metal framework cast to exact specifications",
      icon: Zap
    },
    {
      stage: "Finishing",
      description: "Expert finishing and tooth placement for natural appearance",
      icon: Crown
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive assessment and treatment planning for your specific needs"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Precise impressions and bite registration for framework design"
    },
    {
      step: "3",
      title: "Framework Try-in",
      description: "Metal framework fitting to ensure perfect precision and comfort"
    },
    {
      step: "4",
      title: "Final Delivery",
      description: "Complete denture delivery with adjustments and care instructions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Cobalt Chrome Dentures"
        description="Premium partial dentures with precision-cast cobalt-chromium metal framework for superior strength, fit, and longevity"
        price="£1,100"
        category="Restorative Dentistry"
        duration="3-4 appointments over 3-4 weeks"
        preparation="Dental examination, impressions, bite registration"
        recovery="Immediate wear, adjustment period 1-2 weeks"
        benefits={[
          "Superior strength and durability",
          "Precision-cast metal framework",
          "Exceptional retention and stability",
          "Long-lasting 10-15+ years",
          "Minimal tissue coverage"
        ]}
        risks={[
          "Higher initial cost",
          "Metal may be slightly visible",
          "Requires skilled craftsmanship",
          "Adjustment period needed"
        ]}
        rating={4.8}
        reviewCount={65}
        url="https://peartree.dental/services/restorative/dentures/cobalt-chrome-dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Cobalt Chrome Dentures"
        faqs={cobaltChromeFAQs}
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
            <span className="text-slate-600 font-medium">Cobalt Chrome Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/restorative/dentures" className="inline-flex items-center text-slate-600 hover:text-slate-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dentures
              </Link>

              <Badge variant="secondary" className="bg-slate-100 text-slate-800">
                <Zap className="w-4 h-4 mr-2" />
                Premium Metal Framework
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Cobalt Chrome
                <span className="text-slate-600 block">Dentures</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the pinnacle of denture technology with precision-cast cobalt chrome
                frameworks. Unmatched strength, perfect fit, and exceptional longevity.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold to-pear-gold border border-pear-gold rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Premium denture craftsmanship since 1970s</span>
              </div>

              {/* Key Features */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Cobalt Chrome?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    <span className="text-sm">Superior strength</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    <span className="text-sm">Precision fit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    <span className="text-sm">15+ year lifespan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    <span className="text-sm">CAD/CAM technology</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-slate-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-slate-600">{getTreatmentPrice("Cobalt Chrome Dentures")}</div>
                  <div className="text-sm text-gray-600">Complete denture</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white font-semibold">
                    Book Cobalt Chrome Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-slate-100 to-gray-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-slate-600 text-white">Premium Craftsmanship</Badge>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-slate-600 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Precision Engineering</h3>
                  <p className="text-gray-600">
                    Every Cobalt Chrome denture is precision-cast using advanced CAD/CAM
                    technology for unmatched accuracy and durability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-slate-600">CAD/CAM</div>
                      <div className="text-gray-600">Precision design</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-slate-600">15+ years</div>
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
              The Cobalt Chrome Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in denture technology with precision-engineered
              metal frameworks that set the gold standard for strength and fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Precision Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology and expert craftsmanship combine to create
              the most precise and durable denture frameworks available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(manufacturing || []).map((stage) => {
              const Icon = stage.icon;
              return (
                <Card key={stage.stage} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{stage.stage}</h3>
                    <p className="text-sm text-gray-600">{stage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features that make Cobalt Chrome dentures
              the premium choice for discerning patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(features || []).map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Cobalt Chrome vs Acrylic Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how premium cobalt chrome construction offers superior
              performance compared to traditional acrylic dentures.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-600 to-gray-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Cobalt Chrome</th>
                    <th className="py-4 px-6 text-center">Acrylic</th>
                  </tr>
                </thead>
                <tbody>
                  {(comparisons || []).map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-600 font-medium">{item.cobaltChrome}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.acrylic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Cobalt Chrome Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our meticulous 4-step process ensures your premium dentures
              are crafted to perfection with optimal fit and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
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
          <Card className="bg-gradient-to-r from-slate-600 to-gray-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Invest in Premium Quality
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience the ultimate in denture technology with Cobalt Chrome precision.
                Book your consultation today for a lifetime investment in quality and comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-slate-600 hover:bg-white/90 font-semibold">
                  Book Premium Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-600">
                  Compare Denture Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Cobalt Chrome Dentures")} • Precision-cast framework • 15+ year lifespan
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
