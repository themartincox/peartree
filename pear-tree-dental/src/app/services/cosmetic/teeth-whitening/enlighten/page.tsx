import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Users,
  ChevronLeft,
  Target,
  Heart
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Enlighten Whitening - Premium Teeth Whitening | Pear Tree Dental",
  description: "Enlighten whitening in Burton Joyce - the gold standard teeth whitening system. Guaranteed B1 shade results. £650. Book your consultation today.",
  keywords: [
    "Enlighten whitening Burton Joyce",
    "premium teeth whitening Nottingham",
    "guaranteed whitening results",
    "B1 shade whitening",
    "professional whitening system",
    "advanced teeth whitening"
  ],
  openGraph: {
    title: "Enlighten Whitening - Premium Results Guaranteed | Pear Tree Dental",
    description: "Experience the gold standard in teeth whitening with Enlighten. Guaranteed B1 shade results in Burton Joyce.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/teeth-whitening/enlighten"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/teeth-whitening/enlighten"
  }
};

export default function EnlightenWhiteningPage() {
  const enlightenFAQs = [
    {
      question: "What makes Enlighten whitening different?",
      answer: "Enlighten is the only whitening system that guarantees a B1 shade result - the whitest natural tooth shade. It combines home and in-practice treatment for superior results with minimal sensitivity."
    },
    {
      question: "How long does Enlighten whitening take?",
      answer: "The complete Enlighten treatment takes 2 weeks of home whitening followed by a single 1-hour appointment at our practice for the final result."
    },
    {
      question: "Is the B1 shade guarantee really guaranteed?",
      answer: "Yes, Enlighten is the only whitening system that can guarantee a B1 shade result when the treatment protocol is followed correctly. If you don't achieve B1, we'll work with you until you do."
    },
    {
      question: "Will I experience sensitivity with Enlighten?",
      answer: "Enlighten is specifically designed to minimize sensitivity. The gradual home treatment followed by the professional boost significantly reduces discomfort compared to other systems."
    },
    {
      question: "How long do Enlighten results last?",
      answer: "With proper maintenance, Enlighten results can last 3+ years. We provide guidance on maintaining your new smile and offer top-up treatments when needed."
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Guaranteed B1 Shade",
      description: "The only system that guarantees the whitest natural tooth shade possible",
      highlight: true
    },
    {
      icon: Award,
      title: "Gold Standard System",
      description: "Recognized worldwide as the most effective whitening treatment available"
    },
    {
      icon: Shield,
      title: "Minimal Sensitivity",
      description: "Advanced formula designed to minimize discomfort during and after treatment"
    },
    {
      icon: Clock,
      title: "Proven Protocol",
      description: "2 weeks home treatment + 1 practice visit for optimal results"
    },
    {
      icon: Star,
      title: "Long-lasting Results",
      description: "Results can last 3+ years with proper maintenance and care"
    },
    {
      icon: Heart,
      title: "Confidence Boost",
      description: "Achieve the brightest smile possible and feel confident in any situation"
    }
  ];

  const process = [
    {
      phase: "Initial Consultation",
      duration: "30 minutes",
      description: "Comprehensive assessment to ensure you're suitable for Enlighten treatment",
      details: [
        "Oral health examination",
        "Shade assessment and photography",
        "Treatment planning discussion",
        "Custom tray impressions"
      ]
    },
    {
      phase: "Home Whitening Phase",
      duration: "14 nights",
      description: "Gentle overnight whitening with custom-fitted trays",
      details: [
        "Custom whitening trays provided",
        "Professional-grade whitening gel",
        "Overnight wear for 14 consecutive nights",
        "Progress monitoring and support"
      ]
    },
    {
      phase: "Power Whitening Visit",
      duration: "1 hour",
      description: "Final in-practice treatment to achieve guaranteed B1 shade",
      details: [
        "Professional power whitening session",
        "Achievement of guaranteed B1 shade",
        "Final photography and results review",
        "Maintenance guidance provided"
      ]
    }
  ];

  const benefits = [
    "Guaranteed B1 shade - the whitest natural tooth shade",
    "Minimal to no sensitivity during treatment",
    "Long-lasting results (3+ years with maintenance)",
    "Combines home convenience with professional results",
    "Clinically proven and dentist-supervised",
    "Comprehensive aftercare and maintenance plan"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-yellow-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Enlighten Teeth Whitening"
        description="Premium Enlighten teeth whitening system with guaranteed B1 shade results. The gold standard in professional teeth whitening."
        price="£650"
        category="Premium Cosmetic Dentistry"
        duration="2 weeks home treatment + 1 hour practice visit"
        preparation="Dental examination, custom tray fitting, oral health assessment"
        recovery="No downtime, minimal sensitivity"
        benefits={([
          "Guaranteed B1 shade result",
          "Minimal sensitivity formula",
          "Long-lasting results (3+ years)",
          "Gold standard whitening system",
          "Professional supervision throughout"
        ]}
        risks={([
          "Minimal temporary sensitivity",
          "Not suitable for pregnant/nursing women",
          "Results depend on following protocol",
          "May not work on artificial teeth"
        ]}
        rating={4.9}
        reviewCount={180}
        url="https://peartree.dental/services/cosmetic/teeth-whitening/enlighten"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Enlighten Teeth Whitening"
        faqs={enlightenFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/cosmetic" className="hover:text-pear-primary">Cosmetic</Link>
            <span>/</span>
            <Link href="/services/cosmetic/teeth-whitening" className="hover:text-pear-primary">Teeth Whitening</Link>
            <span>/</span>
            <span className="text-orange-600 font-medium">Enlighten</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/cosmetic/teeth-whitening" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Teeth Whitening
              </Link>

              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Award className="w-4 h-4 mr-2" />
                Premium Whitening System
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Enlighten
                <span className="text-orange-600 block">Whitening</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                The gold standard in teeth whitening. Enlighten is the only system that
                guarantees a B1 shade result - the whitest natural tooth shade possible.
              </p>

              {/* Key Features */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Enlighten?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Guaranteed B1 shade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Minimal sensitivity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">3+ year results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Professional supervised</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-orange-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-orange-600">{getTreatmentPrice("Enlighten Whitening")}</div>
                  <div className="text-sm text-gray-600">Complete treatment</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">
                    Book Enlighten Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-orange-100 to-red-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-500 text-white">Enlighten Guarantee</Badge>
                    <div className="flex space-x-1">
                      {([...Array(5)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">B1 Shade Guaranteed</h3>
                  <p className="text-gray-600">
                    The only whitening system in the world that can guarantee
                    the whitest natural tooth shade - B1.
                  </p>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-sm text-gray-600">Success Rate to B1 Shade</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Enlighten Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Enlighten is recognized as the world's most effective
              teeth whitening system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(features || []).map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`text-center hover:shadow-lg transition-shadow ${
                    feature.highlight ? 'border-2 border-orange-500 bg-orange-50' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      feature.highlight ? 'bg-orange-500' : 'bg-orange-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${feature.highlight ? 'text-white' : 'text-orange-600'}`} />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Enlighten Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 3-phase protocol ensures you achieve the guaranteed B1 shade
              with maximum comfort and convenience.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {(process || []).map((phase, index) => (
              <Card key={phase.phase} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <Badge variant="outline" className="border-orange-500 text-orange-600">
                          {phase.duration}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-pear-primary mb-2">{phase.phase}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(phase.details || []).map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                The Enlighten Guarantee
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're so confident in Enlighten's results that we guarantee you'll achieve
                a B1 shade - or we'll keep working with you until you do.
              </p>

              <div className="space-y-4">
                {(benefits || []).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <h3 className="font-semibold text-pear-primary">100% Satisfaction Guarantee</h3>
                </div>
                <p className="text-sm text-gray-600">
                  If you don't achieve the B1 shade following our protocol, we'll continue
                  treatment at no additional cost until you do.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Gold Standard</h3>
                    <p className="text-white/90">
                      Enlighten is the only whitening system that guarantees
                      a B1 shade result every time.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold">B1</div>
                      <div className="text-sm text-white/80">Guaranteed Shade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">3+</div>
                      <div className="text-sm text-white/80">Years Results</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready for Guaranteed Results?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience the only whitening system that guarantees a B1 shade.
                Book your Enlighten consultation today and discover the difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                  Book Enlighten Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Compare Whitening Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                Investment: {getTreatmentPrice("Enlighten Whitening")} • B1 Shade Guaranteed • 3+ Year Results
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
