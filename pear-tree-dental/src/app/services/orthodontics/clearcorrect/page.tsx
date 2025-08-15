import React from "react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  Clock,
  DollarSign,
  Eye,
  Heart,
  Smile,
  Sparkles,
  Star,
  Target,
  TrendingUp, 
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "ClearCorrect Clear Aligners - Affordable Teeth Straightening | Pear Tree Dental",
  description: "ClearCorrect clear aligners in Burton Joyce. Affordable invisible teeth straightening from £2,400. Effective treatment for crowding, gaps, and bite issues.",
  keywords: [
    "ClearCorrect Burton Joyce",
    "clear aligners Nottingham",
    "affordable teeth straightening",
    "invisible braces Burton Joyce",
    "ClearCorrect cost Nottingham",
    "clear aligner treatment",
    "teeth straightening Burton Joyce"
  ],
  openGraph: {
    title: "ClearCorrect Clear Aligners - Affordable Invisible Braces | Pear Tree Dental",
    description: "Affordable teeth straightening with ClearCorrect clear aligners. Effective invisible treatment.",
    type: "website",
    url: "https://peartree.dental/services/orthodontics/clearcorrect"
  },
  alternates: {
    canonical: "https://peartree.dental/services/orthodontics/clearcorrect"
  }
};

export default function ClearCorrectPage() {
  const clearCorrectFAQs = [
    {
      question: "What is ClearCorrect and how does it work?",
      answer: "ClearCorrect is a clear aligner system that uses custom-made, virtually invisible plastic aligners to gradually move your teeth into their desired positions. Each set of aligners is worn for about 2 weeks before progressing to the next set."
    },
    {
      question: "How much does ClearCorrect cost?",
      answer: "ClearCorrect treatment starts from £2,400 for simple cases and ranges up to £3,800 for more complex cases. This is typically 20-30% less expensive than Invisalign while providing similar results."
    },
    {
      question: "How long does ClearCorrect treatment take?",
      answer: "Treatment time varies from 6-18 months depending on the complexity of your case. Simple crowding or spacing issues may be resolved in 6-10 months, while more complex cases may take up to 18 months."
    },
    {
      question: "Is ClearCorrect as effective as Invisalign?",
      answer: "Yes, ClearCorrect is clinically proven to be as effective as Invisalign for most orthodontic cases. It uses advanced ClearQuartz material and precise 3D planning to achieve excellent results."
    },
    {
      question: "Will ClearCorrect aligners be noticeable?",
      answer: "ClearCorrect aligners are virtually invisible. Made from clear, medical-grade plastic, they're 95% undetectable when worn. Most people won't notice you're undergoing orthodontic treatment."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Excellent Value",
      description: "20-30% more affordable than premium alternatives while delivering outstanding results"
    },
    {
      icon: Eye,
      title: "Virtually Invisible",
      description: "Clear, medical-grade plastic that's 95% undetectable when worn"
    },
    {
      icon: Heart,
      title: "Comfortable Fit",
      description: "ClearQuartz material provides comfortable, smooth aligners with precise fit"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "FDA-approved system with millions of successful treatments worldwide"
    }
  ];

  const advantages = [
    "Significantly more affordable than Invisalign",
    "Virtually invisible clear aligners",
    "Removable for eating and cleaning",
    "No food restrictions during treatment",
    "Comfortable ClearQuartz material",
    "Effective for most orthodontic cases",
    "Digital treatment planning included",
    "Regular progress monitoring"
  ];

  const suitability = [
    {
      condition: "Mild to Moderate Crowding",
      description: "Overlapping teeth due to insufficient space",
      effectiveness: "Excellent",
      icon: Target
    },
    {
      condition: "Gaps and Spacing",
      description: "Unwanted spaces between teeth",
      effectiveness: "Excellent",
      icon: Sparkles
    },
    {
      condition: "Mild Bite Issues",
      description: "Minor overbite, underbite, or crossbite",
      effectiveness: "Very Good",
      icon: Smile
    },
    {
      condition: "Relapse Cases",
      description: "Teeth that have moved after previous treatment",
      effectiveness: "Excellent",
      icon: TrendingUp
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Assessment",
      description: "Comprehensive examination and 3D digital scanning",
      duration: "1 hour"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Digital treatment plan showing your new smile preview",
      duration: "1-2 weeks"
    },
    {
      step: "3",
      title: "Aligner Manufacturing",
      description: "Custom ClearCorrect aligners created specifically for you",
      duration: "2-3 weeks"
    },
    {
      step: "4",
      title: "Treatment & Monitoring",
      description: "Progress through aligners with regular check-ups",
      duration: "6-18 months"
    }
  ];

  const comparison = [
    {
      feature: "Cost",
      clearcorrect: "£2,400 - £3,800",
      invisalign: "£2,800 - £4,500",
      braces: "£2,000 - £3,500"
    },
    {
      feature: "Visibility",
      clearcorrect: "95% invisible",
      invisalign: "95% invisible",
      braces: "Highly visible"
    },
    {
      feature: "Comfort",
      clearcorrect: "Smooth plastic",
      invisalign: "Smooth plastic",
      braces: "Metal brackets/wires"
    },
    {
      feature: "Removability",
      clearcorrect: "Fully removable",
      invisalign: "Fully removable",
      braces: "Fixed"
    },
    {
      feature: "Treatment Time",
      clearcorrect: "6-18 months",
      invisalign: "6-18 months",
      braces: "18-36 months"
    }
  ];

  const features = [
    {
      title: "ClearQuartz Material",
      description: "Advanced, durable plastic that maintains clarity throughout treatment",
      benefit: "Superior comfort and aesthetics"
    },
    {
      title: "3D Treatment Planning",
      description: "Precise digital planning shows your treatment progression",
      benefit: "Predictable results and timeline"
    },
    {
      title: "Staged Treatment",
      description: "Gradual tooth movement in carefully planned stages",
      benefit: "Comfortable and effective progression"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and FDA approval",
      benefit: "Safe, reliable treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="ClearCorrect Clear Aligners"
        description="Affordable clear aligner treatment using ClearCorrect system for invisible teeth straightening"
        price="From £2,400"
        category="Orthodontics & Clear Aligners"
        duration="6-18 months treatment time"
        preparation="Digital impressions, 3D planning, custom aligner fabrication"
        recovery="No recovery needed - continue normal activities"
        benefits={[
          "20-30% more affordable than premium alternatives",
          "95% invisible clear aligners",
          "Removable for eating and cleaning",
          "Comfortable ClearQuartz material",
          "Effective for most orthodontic cases"
        ]}
        risks={[
          "Requires patient compliance (20-22 hours daily)",
          "Temporary speech changes initially",
          "Mild discomfort with new aligners",
          "Not suitable for severe orthodontic cases"
        ]}
        rating={4.7}
        reviewCount={156}
        url="https://peartree.dental/services/orthodontics/clearcorrect"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="ClearCorrect Clear Aligners"
        faqs={clearCorrectFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/orthodontics" className="hover:text-pear-primary">Orthodontics</Link>
            <span>/</span>
            <span className="text-indigo-600 font-medium">ClearCorrect</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/orthodontics" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Orthodontics
              </Link>

              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                <Star className="w-4 h-4 mr-2" />
                Affordable Clear Aligners
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                ClearCorrect
                <span className="text-indigo-600 block">Clear Aligners</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Straighten your teeth affordably with ClearCorrect clear aligners. Get the smile
                you've always wanted with virtually invisible, comfortable treatment that fits your budget.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold to-pear-gold border border-pear-gold rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Excellent value - clinically proven results</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose ClearCorrect?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">20-30% more affordable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">95% invisible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">Comfortable fit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">Proven results</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-indigo-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-indigo-600">£2,400</div>
                  <div className="text-sm text-gray-600">Complete treatment</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">
                    Book ClearCorrect Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-indigo-500 text-white">Smart Value</Badge>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-indigo-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Affordable Excellence</h3>
                  <p className="text-gray-600">
                    ClearCorrect provides the same effective clear aligner treatment
                    at a more accessible price point without compromising on quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-indigo-600">20-30%</div>
                      <div className="text-gray-600">More affordable</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-indigo-600">6-18</div>
                      <div className="text-gray-600">Months treatment</div>
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
              The ClearCorrect Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ClearCorrect offers exceptional value by combining advanced clear aligner
              technology with affordable pricing for outstanding treatment results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              ClearCorrect Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features and materials that make ClearCorrect an excellent
              choice for effective, comfortable orthodontic treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(features || []).map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-indigo-700">Benefit: </span>
                    <span className="text-sm text-gray-700">{feature.benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Is ClearCorrect Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ClearCorrect effectively treats a wide range of orthodontic issues,
              making it suitable for most patients seeking straighter teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(suitability || []).map((condition) => {
              const Icon = condition.icon;
              return (
                <Card key={condition.condition} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{condition.condition}</h3>
                    <p className="text-sm text-gray-600 mb-3">{condition.description}</p>
                    <Badge variant="outline" className="text-indigo-600 border-indigo-600">
                      {condition.effectiveness}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              ClearCorrect Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why ClearCorrect is an excellent choice for patients
              seeking affordable, effective clear aligner treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(advantages || []).map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              ClearCorrect vs Other Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare ClearCorrect with Invisalign and traditional braces
              to see why it offers exceptional value for teeth straightening.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">ClearCorrect</th>
                    <th className="py-4 px-6 text-center">Invisalign</th>
                    <th className="py-4 px-6 text-center">Traditional Braces</th>
                  </tr>
                </thead>
                <tbody>
                  {(comparison || []).map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-indigo-600" />
                          <span className="text-indigo-600 font-medium">{item.clearcorrect}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.invisalign}</td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.braces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your ClearCorrect Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you receive effective, comfortable
              ClearCorrect treatment with predictable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs text-indigo-600 font-medium">{step.duration}</span>
                  </div>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-300" />
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
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Start Your Affordable Smile Transformation
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get the straight smile you've always wanted with ClearCorrect. Effective treatment
                at an affordable price - book your consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-semibold">
                  Book ClearCorrect Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                    Compare Orthodontic Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                From £2,400 • 6-18 months treatment • 95% invisible
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
