import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Layers,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Award,
  Crown,
  Heart,
  Zap,
  Target
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Hybrid Dentures - Advanced Combination Dentures | Pear Tree Dental",
  description: "Hybrid dentures in Burton Joyce. Advanced combination of materials and techniques for superior comfort, function, and aesthetics. £1,800. Premium denture solution.",
  keywords: [
    "hybrid dentures Burton Joyce",
    "advanced combination dentures Nottingham",
    "premium denture technology",
    "multi-material dentures",
    "superior denture comfort",
    "advanced denture solutions",
    "high-end dentures Burton Joyce"
  ],
  openGraph: {
    title: "Hybrid Dentures - Advanced Denture Technology | Pear Tree Dental",
    description: "Experience the future of dentures with hybrid technology combining the best materials and techniques.",
    type: "website",
    url: "https://peartreedental.co.uk/services/restorative/dentures/hybrid-dentures"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/restorative/dentures/hybrid-dentures"
  }
};

export default function HybridDenturesPage() {
  const hybridFAQs = [
    {
      question: "What are hybrid dentures and how are they different?",
      answer: "Hybrid dentures combine multiple advanced materials and techniques in one appliance. They typically feature a metal framework for strength, flexible clasps for comfort, and premium teeth for aesthetics, offering the best of all denture technologies."
    },
    {
      question: "What advantages do hybrid dentures offer?",
      answer: "Hybrid dentures provide superior strength, comfort, and aesthetics by combining the best features of different denture types. You get the precision of metal, flexibility where needed, and premium aesthetics all in one advanced appliance."
    },
    {
      question: "How long do hybrid dentures last?",
      answer: "Hybrid dentures typically last 10-20 years due to their advanced construction and premium materials. The combination of metal framework and quality components ensures exceptional durability and longevity."
    },
    {
      question: "Are hybrid dentures worth the investment?",
      answer: "For patients seeking the ultimate in denture technology, hybrid dentures offer exceptional value. They provide superior comfort, function, and aesthetics that can significantly improve quality of life and confidence."
    },
    {
      question: "Who is a good candidate for hybrid dentures?",
      answer: "Hybrid dentures are ideal for patients who want the absolute best denture solution available, those with complex dental situations requiring multiple approaches, or patients who have been unsatisfied with conventional dentures."
    }
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Multi-Material Design",
      description: "Combines the best properties of different materials for optimal performance"
    },
    {
      icon: Crown,
      title: "Superior Aesthetics",
      description: "Premium teeth and advanced design techniques for natural appearance"
    },
    {
      icon: Shield,
      title: "Maximum Durability",
      description: "Advanced construction ensures exceptional longevity and reliability"
    },
    {
      icon: Target,
      title: "Optimal Function",
      description: "Engineered for superior retention, stability, and chewing efficiency"
    }
  ];

  const hybridFeatures = [
    {
      component: "Metal Framework",
      benefit: "Provides exceptional strength and precision fit",
      technology: "CAD/CAM designed cobalt-chrome casting"
    },
    {
      component: "Flexible Clasps",
      benefit: "Invisible retention with comfortable grip",
      technology: "Thermoplastic injection molding"
    },
    {
      component: "Premium Teeth",
      benefit: "Natural appearance with superior wear resistance",
      technology: "Multi-layer composite construction"
    },
    {
      component: "Tissue Base",
      benefit: "Optimal comfort and biocompatibility",
      technology: "Advanced acrylic formulations"
    }
  ];

  const advantages = [
    "Combines strength of metal with flexibility where needed",
    "Superior retention and stability",
    "Premium aesthetic appearance",
    "Enhanced comfort and fit",
    "Optimal chewing efficiency",
    "Long-lasting durability (10-20 years)",
    "Customized to individual needs",
    "Advanced manufacturing techniques"
  ];

  const comparison = {
    traditional: {
      name: "Traditional Dentures",
      materials: "Single material (acrylic)",
      strength: "Moderate",
      aesthetics: "Good",
      comfort: "Variable",
      lifespan: "5-7 years",
      customization: "Limited"
    },
    hybrid: {
      name: "Hybrid Dentures",
      materials: "Multiple premium materials",
      strength: "Exceptional",
      aesthetics: "Superior",
      comfort: "Excellent",
      lifespan: "10-20 years",
      customization: "Fully customized"
    }
  };

  const process = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description: "Detailed evaluation to design your custom hybrid solution"
    },
    {
      step: "2",
      title: "Advanced Planning",
      description: "CAD/CAM design combining multiple materials and techniques"
    },
    {
      step: "3",
      title: "Precision Manufacturing",
      description: "Multi-stage construction using advanced laboratory techniques"
    },
    {
      step: "4",
      title: "Expert Delivery",
      description: "Careful fitting and optimization for perfect function"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Hybrid Dentures"
        description="Advanced denture solution combining multiple premium materials and techniques for superior comfort, function, and aesthetics"
        price="£1,800"
        category="Advanced Restorative Dentistry"
        duration="4-5 appointments over 4-6 weeks"
        preparation="Comprehensive assessment, advanced planning, multiple impressions"
        recovery="Immediate wear, optimization period 2-4 weeks"
        benefits={[
          "Superior strength and durability",
          "Exceptional comfort and fit",
          "Premium aesthetic appearance",
          "Advanced multi-material construction",
          "Customized to individual needs"
        ]}
        risks={[
          "Higher investment required",
          "Complex manufacturing process",
          "Requires expert craftsmanship",
          "Longer treatment timeline"
        ]}
        rating={4.9}
        reviewCount={45}
        url="https://peartreedental.co.uk/services/restorative/dentures/hybrid-dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Hybrid Dentures"
        faqs={hybridFAQs}
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
            <span className="text-indigo-600 font-medium">Hybrid Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/restorative/dentures" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dentures
              </Link>

              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                <Layers className="w-4 h-4 mr-2" />
                Advanced Denture Technology
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Hybrid
                <span className="text-indigo-600 block">Dentures</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the pinnacle of denture technology with hybrid construction.
                Combining multiple premium materials and advanced techniques for unmatched performance.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Next-generation denture technology</span>
              </div>

              {/* Key Features */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Hybrid?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">Multi-material design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">Superior performance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">Premium aesthetics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">20-year lifespan</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-indigo-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-indigo-600">{getTreatmentPrice("Hybrid Dentures")}</div>
                  <div className="text-sm text-gray-600">Complete solution</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
                    Book Hybrid Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                    Call 0115 931 2525
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-indigo-600 text-white">Advanced Technology</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-indigo-600 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Ultimate Performance</h3>
                  <p className="text-gray-600">
                    Hybrid dentures represent the future of prosthetic dentistry,
                    combining the best materials and techniques in one advanced solution.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-indigo-600">Multi-Material</div>
                      <div className="text-gray-600">Advanced construction</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-indigo-600">10-20 years</div>
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
              The Hybrid Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in denture technology where multiple advanced
              materials and techniques combine for unmatched performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
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

      {/* Hybrid Components Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Advanced Component System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each hybrid denture combines multiple specialized components,
              each optimized for specific performance characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hybridFeatures.map((feature) => (
              <Card key={feature.component} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-pear-primary mb-3">{feature.component}</h3>
                  <p className="text-gray-600 mb-3">{feature.benefit}</p>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-indigo-700">Technology: </span>
                    <span className="text-sm text-gray-700">{feature.technology}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Hybrid Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive benefits that make hybrid dentures
              the premium choice for discerning patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-indigo-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Hybrid vs Traditional Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how hybrid technology offers significant advantages over
              conventional single-material denture construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="text-center">{comparison.hybrid.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Materials:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.materials}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Strength:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.strength}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Aesthetics:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.aesthetics}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Comfort:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.comfort}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lifespan:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.lifespan}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Customization:</span>
                    <span className="text-indigo-600 font-semibold">{comparison.hybrid.customization}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gray-500 text-white">
                <CardTitle className="text-center">{comparison.traditional.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Materials:</span>
                    <span className="text-gray-600">{comparison.traditional.materials}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Strength:</span>
                    <span className="text-gray-600">{comparison.traditional.strength}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Aesthetics:</span>
                    <span className="text-gray-600">{comparison.traditional.aesthetics}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Comfort:</span>
                    <span className="text-gray-600">{comparison.traditional.comfort}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lifespan:</span>
                    <span className="text-gray-600">{comparison.traditional.lifespan}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Customization:</span>
                    <span className="text-gray-600">{comparison.traditional.customization}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Hybrid Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your hybrid dentures
              are engineered to perfection with optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
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
                Experience the Future of Dentures
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Invest in the ultimate denture technology with hybrid construction.
                Book your consultation today to discover how advanced materials can transform your smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-semibold">
                  Book Hybrid Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  Compare All Denture Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Hybrid Dentures")} • Multi-material construction • 10-20 year lifespan
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
