import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Award,
  Heart,
  Target,
  Zap,
  Eye,
  Smile,
  Crown,
  Calendar,
  TrendingUp,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Invisalign Clear Aligners - Premium Teeth Straightening | Pear Tree Dental",
  description: "Invisalign clear aligners in Burton Joyce. Premium invisible teeth straightening from £2,800. World's most advanced clear aligner system with proven results.",
  keywords: [
    "Invisalign Burton Joyce",
    "Invisalign Nottingham",
    "clear aligners Burton Joyce",
    "invisible braces Nottingham",
    "Invisalign cost Burton Joyce",
    "premium teeth straightening",
    "SmartTrack aligners"
  ],
  openGraph: {
    title: "Invisalign Clear Aligners - Premium Invisible Braces | Pear Tree Dental",
    description: "Premium teeth straightening with Invisalign clear aligners. The world's most advanced system.",
    type: "website",
    url: "https://peartree.dental/services/orthodontics/invisalign"
  },
  alternates: {
    canonical: "https://peartree.dental/services/orthodontics/invisalign"
  }
};

export default function InvisalignPage() {
  const invisalignFAQs = [
    {
      question: "What makes Invisalign different from other clear aligners?",
      answer: "Invisalign uses proprietary SmartTrack material, advanced SmartForce attachments, and precision-cut aligners. It's the most researched clear aligner system with over 14 million patients treated worldwide."
    },
    {
      question: "How much does Invisalign cost?",
      answer: "Invisalign treatment ranges from £2,800 for simple cases to £4,500 for comprehensive cases. The investment reflects the advanced technology, premium materials, and extensive treatment planning included."
    },
    {
      question: "How long does Invisalign treatment take?",
      answer: "Treatment time typically ranges from 6-18 months. Simple cases may be completed in 6-12 months, while complex cases requiring significant tooth movement may take 12-18 months."
    },
    {
      question: "Will Invisalign work for complex orthodontic cases?",
      answer: "Yes, Invisalign can treat complex cases including severe crowding, significant spacing, and bite corrections. Advanced features like SmartForce attachments and precision cuts enable comprehensive treatment."
    },
    {
      question: "How often do I need to change my Invisalign aligners?",
      answer: "Most patients change to a new set of aligners every 1-2 weeks as directed by their treatment plan. The exact timing depends on your individual case and progress."
    }
  ];

  const benefits = [
    {
      icon: Crown,
      title: "Premium Technology",
      description: "World's most advanced clear aligner system with SmartTrack material"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 14 million patients treated with industry-leading success rates"
    },
    {
      icon: Layers,
      title: "SmartForce Attachments",
      description: "Precision attachments for complex tooth movements when needed"
    },
    {
      icon: Sparkles,
      title: "Predictable Outcomes",
      description: "ClinCheck technology shows your final result before you start"
    }
  ];

  const advantages = [
    "World's most researched clear aligner system",
    "SmartTrack material for optimal fit and comfort",
    "SmartForce attachments for complex movements",
    "ClinCheck 3D treatment visualization",
    "Compliance indicators on some aligners",
    "Comprehensive treatment capabilities",
    "Invisalign Teen options available",
    "Global network of trained providers"
  ];

  const features = [
    {
      title: "SmartTrack Material",
      description: "Proprietary thermoplastic material engineered for optimal fit",
      benefit: "Superior comfort and more predictable tooth movement",
      icon: Target
    },
    {
      title: "SmartForce Attachments",
      description: "Tooth-colored attachments for enhanced grip and control",
      benefit: "Enables treatment of complex orthodontic cases",
      icon: Zap
    },
    {
      title: "ClinCheck Software",
      description: "3D treatment planning showing step-by-step progression",
      benefit: "See your final smile before starting treatment",
      icon: Eye
    },
    {
      title: "Precision Cuts",
      description: "Strategically placed cuts for specific tooth movements",
      benefit: "Enhanced control for rotations and extrusions",
      icon: Crown
    }
  ];

  const suitability = [
    {
      condition: "Complex Crowding",
      description: "Severe overlapping requiring extraction or expansion",
      effectiveness: "Excellent",
      icon: Target
    },
    {
      condition: "Bite Corrections",
      description: "Overbite, underbite, crossbite, and open bite issues",
      effectiveness: "Excellent",
      icon: Smile
    },
    {
      condition: "Spacing Issues",
      description: "Large gaps and significant spacing problems",
      effectiveness: "Excellent",
      icon: Sparkles
    },
    {
      condition: "Comprehensive Cases",
      description: "Full mouth rehabilitation and complex movements",
      effectiveness: "Outstanding",
      icon: TrendingUp
    }
  ];

  const process = [
    {
      step: "1",
      title: "Invisalign Consultation",
      description: "Comprehensive assessment and iTero digital scanning",
      duration: "1 hour"
    },
    {
      step: "2",
      title: "ClinCheck Planning",
      description: "3D treatment plan showing your transformation",
      duration: "1-2 weeks"
    },
    {
      step: "3",
      title: "Aligner Manufacturing",
      description: "Custom Invisalign aligners created at Align Technology",
      duration: "2-3 weeks"
    },
    {
      step: "4",
      title: "Treatment Monitoring",
      description: "Regular progress checks with aligner changes",
      duration: "6-18 months"
    }
  ];

  const comparison = [
    {
      feature: "Material Quality",
      invisalign: "SmartTrack (proprietary)",
      clearcorrect: "ClearQuartz",
      braces: "Metal/ceramic"
    },
    {
      feature: "Research & Development",
      invisalign: "20+ years, 14M+ patients",
      clearcorrect: "Good clinical data",
      braces: "Traditional proven method"
    },
    {
      feature: "Complex Cases",
      invisalign: "Excellent capability",
      clearcorrect: "Good for most cases",
      braces: "Excellent capability"
    },
    {
      feature: "Treatment Visualization",
      invisalign: "ClinCheck 3D preview",
      clearcorrect: "3D planning available",
      braces: "Limited preview"
    },
    {
      feature: "Cost",
      invisalign: "£2,800 - £4,500",
      clearcorrect: "£2,400 - £3,800",
      braces: "£2,000 - £3,500"
    }
  ];

  const packages = [
    {
      name: "Invisalign Express",
      price: "£2,800",
      duration: "6-10 months",
      aligners: "Up to 14 aligners",
      ideal: "Minor crowding and spacing",
      features: ["Simple tooth movements", "Limited treatment time", "Cost-effective option"]
    },
    {
      name: "Invisalign Moderate",
      price: "£3,500",
      duration: "8-12 months",
      aligners: "15-25 aligners",
      ideal: "Moderate orthodontic issues",
      features: ["Mid-complexity cases", "SmartForce attachments", "Bite improvements"]
    },
    {
      name: "Invisalign Comprehensive",
      price: "£4,200",
      duration: "12-18 months",
      aligners: "Unlimited aligners",
      ideal: "Complex orthodontic treatment",
      features: ["Complex tooth movements", "Bite corrections", "Precision attachments"]
    },
    {
      name: "Invisalign Teen",
      price: "£3,800",
      duration: "12-18 months",
      aligners: "Unlimited aligners",
      ideal: "Teenagers with mixed dentition",
      features: ["Compliance indicators", "Eruption tabs", "Replacement aligners"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Invisalign Clear Aligners"
        description="Premium clear aligner treatment using Invisalign system with SmartTrack material for invisible teeth straightening"
        price="From £2,800"
        category="Orthodontics & Clear Aligners"
        duration="6-18 months treatment time"
        preparation="iTero digital scanning, ClinCheck planning, custom aligner fabrication"
        recovery="No recovery needed - continue normal activities"
        benefits={[
          "World's most advanced clear aligner system",
          "SmartTrack material for superior comfort",
          "ClinCheck 3D treatment visualization",
          "Proven results in 14+ million patients",
          "Complex case treatment capabilities"
        ]}
        risks={[
          "Higher investment than alternatives",
          "Requires patient compliance (20-22 hours daily)",
          "Temporary speech changes initially",
          "Possible need for attachments"
        ]}
        rating={4.9}
        reviewCount={189}
        url="https://peartree.dental/services/orthodontics/invisalign"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Invisalign Clear Aligners"
        faqs={invisalignFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/orthodontics" className="hover:text-pear-primary">Orthodontics</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Invisalign</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/orthodontics" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Orthodontics
              </Link>

              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Crown className="w-4 h-4 mr-2" />
                Premium Clear Aligners
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Invisalign
                <span className="text-blue-600 block">Clear Aligners</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your smile with the world's most advanced clear aligner system.
                Invisalign delivers predictable results with unmatched comfort and precision.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">14+ million smiles transformed worldwide</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Invisalign?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">SmartTrack material</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">ClinCheck preview</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Complex case capability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Proven worldwide</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-blue-600">£2,800</div>
                  <div className="text-sm text-gray-600">Complete treatment</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
                    Book Invisalign Consultation
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
                    <Badge className="bg-blue-500 text-white">Premium Technology</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">World Leader</h3>
                  <p className="text-gray-600">
                    Invisalign is the world's most advanced clear aligner system,
                    combining cutting-edge technology with decades of research.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">14M+</div>
                      <div className="text-gray-600">Patients treated</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">20+</div>
                      <div className="text-gray-600">Years research</div>
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
              The Invisalign Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invisalign represents the pinnacle of clear aligner technology, offering
              unmatched precision, comfort, and treatment capabilities.
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

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Advanced Invisalign Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proprietary innovations that make Invisalign the most effective
              and comfortable clear aligner system available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(features || []).map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl text-pear-primary">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <span className="text-sm font-medium text-blue-700">Benefit: </span>
                      <span className="text-sm text-gray-700">{feature.benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Invisalign Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple corrections to comprehensive transformations,
              Invisalign offers tailored solutions for every orthodontic need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(packages || []).map((pkg) => (
              <Card key={pkg.name} className="hover:shadow-lg transition-shadow h-full border-2 border-blue-200 hover:border-blue-400">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-primary">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.duration}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {pkg.aligners}
                  </Badge>
                  <p className="text-sm text-gray-600 font-medium">{pkg.ideal}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Invisalign Treatment Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology enables Invisalign to treat even the most
              complex orthodontic cases with predictable, excellent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(suitability || []).map((condition) => {
              const Icon = condition.icon;
              return (
                <Card key={condition.condition} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{condition.condition}</h3>
                    <p className="text-sm text-gray-600 mb-3">{condition.description}</p>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Invisalign Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Invisalign is the preferred choice for patients
              and orthodontists seeking the best clear aligner treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(advantages || []).map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Invisalign vs Other Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare Invisalign with other clear aligners and traditional braces
              to understand why it's the premium choice for orthodontic treatment.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Invisalign</th>
                    <th className="py-4 px-6 text-center">ClearCorrect</th>
                    <th className="py-4 px-6 text-center">Traditional Braces</th>
                  </tr>
                </thead>
                <tbody>
                  {(comparison || []).map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">{item.invisalign}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.clearcorrect}</td>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Invisalign Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive process ensures you receive the most effective
              Invisalign treatment with predictable, outstanding results.
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
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-blue-600 font-medium">{step.duration}</span>
                  </div>
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
                Experience the Invisalign Difference
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join millions of patients worldwide who have transformed their smiles with
                Invisalign. Book your consultation and see your future smile today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Book Invisalign Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Compare Orthodontic Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                From £2,800 • 6-18 months treatment • 14+ million patients treated
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
