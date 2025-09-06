import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Smile,
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
  Crown,
  Target
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Complete Dentures - Full Upper & Lower Dentures | Pear Tree Dental",
  description: "Complete dentures in Burton Joyce. Full replacement for all upper or lower teeth. £875 per arch. Restore complete oral function with natural-looking full dentures.",
  keywords: [
    "complete dentures Burton Joyce",
    "full dentures Nottingham",
    "upper dentures Burton Joyce",
    "lower dentures Nottinghamshire",
    "full mouth restoration",
    "immediate dentures",
    "conventional dentures Burton Joyce"
  ],
  openGraph: {
    title: "Complete Dentures - Full Tooth Replacement | Pear Tree Dental",
    description: "Restore complete oral function with full upper and lower dentures. Natural appearance and comfortable fit.",
    type: "website",
    url: "https://peartree.dental/services/restorative/dentures/complete-dentures"
  },
  alternates: {
    canonical: "https://peartree.dental/services/restorative/dentures/complete-dentures"
  }
};

export default function CompleteDenturesPage() {
  const completeDenturesFAQs = [
    {
      question: "What are complete dentures and who needs them?",
      answer: "Complete dentures are removable appliances that replace all teeth in either the upper or lower jaw (or both). They're needed when all natural teeth in one or both arches are missing or need to be removed due to decay, gum disease, or trauma."
    },
    {
      question: "How long does it take to get complete dentures?",
      answer: "The complete denture process typically takes 4-6 weeks. This includes multiple appointments for impressions, try-ins, and adjustments to ensure the best possible fit and appearance."
    },
    {
      question: "Will I be able to eat normally with complete dentures?",
      answer: "With practice and proper fitting, you can eat most foods with complete dentures. Start with soft foods and gradually progress to harder items. Cutting food into smaller pieces and chewing on both sides helps maintain stability."
    },
    {
      question: "How long do complete dentures last?",
      answer: "Complete dentures typically last 5-8 years, depending on care and changes in your mouth. Regular check-ups help ensure proper fit, and relines or replacements may be needed as your mouth changes over time."
    },
    {
      question: "Are immediate dentures an option?",
      answer: "Yes, immediate dentures can be placed right after tooth extraction so you're never without teeth. However, conventional dentures fitted after healing provide a better fit. We'll discuss the best option for your situation."
    }
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Complete Restoration",
      description: "Full restoration of oral function and beautiful, natural-looking smile"
    },
    {
      icon: Heart,
      title: "Facial Support",
      description: "Maintain proper facial structure and prevent the sunken appearance"
    },
    {
      icon: Crown,
      title: "Renewed Confidence",
      description: "Feel confident speaking, smiling, and eating in social situations"
    },
    {
      icon: Target,
      title: "Improved Nutrition",
      description: "Better chewing ability helps you enjoy a wider variety of foods"
    }
  ];

  const features = [
    "Custom-fitted for comfort and stability",
    "Natural tooth color and shape matching",
    "Proper bite alignment for function",
    "Facial height restoration",
    "Improved speech clarity",
    "Enhanced chewing efficiency",
    "Boost in self-confidence",
    "Professional craftsmanship"
  ];

  const types = [
    {
      type: "Conventional Complete Dentures",
      description: "Made after healing is complete for the best possible fit",
      timeline: "8-12 weeks after extractions",
      advantages: ["Best fit and comfort", "Optimal stability", "Natural appearance", "Proper function"],
      process: "Extractions → Healing period → Denture fabrication"
    },
    {
      type: "Immediate Complete Dentures",
      description: "Placed immediately after tooth extractions",
      timeline: "Same day as extractions",
      advantages: ["Never without teeth", "Immediate function", "Social confidence", "Tissue protection"],
      process: "Pre-extraction impressions → Extractions → Immediate denture placement"
    }
  ];

  const careInstructions = [
    {
      aspect: "Daily Cleaning",
      instruction: "Clean dentures daily with soft brush and denture cleaner",
      icon: Sparkles
    },
    {
      aspect: "Overnight Storage",
      instruction: "Remove at night and store in water or denture solution",
      icon: Clock
    },
    {
      aspect: "Gum Care",
      instruction: "Gently brush gums, tongue, and palate with soft toothbrush",
      icon: Heart
    },
    {
      aspect: "Regular Check-ups",
      instruction: "Schedule regular dental visits for adjustments and oral health",
      icon: Shield
    }
  ];

  const adjustmentTips = [
    "Start with soft foods and gradually progress to harder items",
    "Cut food into smaller pieces for easier chewing",
    "Chew slowly and use both sides of your mouth",
    "Practice speaking and reading aloud to improve speech",
    "Use denture adhesive if recommended by your dentist",
    "Remove dentures at night to give gums rest",
    "Contact us if you experience persistent sore spots",
    "Attend all follow-up appointments for adjustments"
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive exam and treatment planning for your complete dentures"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Precise impressions and measurements for custom denture fabrication"
    },
    {
      step: "3",
      title: "Try-In",
      description: "Test fitting to ensure proper fit, bite, appearance, and speech"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Final fitting with adjustments and detailed care instructions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Complete Dentures"
        description="Full replacement dentures for upper or lower jaw when all teeth are missing, restoring complete oral function and appearance"
        price="£875 per arch"
        category="Restorative Dentistry"
        duration="4-6 weeks for conventional, immediate placement available"
        preparation="Extractions if needed, impressions, treatment planning"
        recovery="Adjustment period 4-8 weeks for optimal comfort"
        benefits={[
          "Complete oral function restoration",
          "Natural appearance",
          "Improved facial support",
          "Enhanced confidence",
          "Better nutrition and health"
        ]}
        risks={[
          "Initial adjustment period",
          "Possible sore spots initially",
          "May require relines over time",
          "Less retention than natural teeth"
        ]}
        rating={4.6}
        reviewCount={200}
        url="https://peartree.dental/services/restorative/dentures/complete-dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Complete Dentures"
        faqs={completeDenturesFAQs}
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
            <span className="text-blue-600 font-medium">Complete Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/restorative/dentures" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dentures
              </Link>

              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Smile className="w-4 h-4 mr-2" />
                Complete Oral Restoration
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Complete
                <span className="text-blue-600 block">Dentures</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Restore complete oral function and your beautiful smile with full dentures.
                Natural appearance, comfortable fit, and renewed confidence.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Complete smile restoration for over 40 years</span>
              </div>

              {/* Key Features */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Complete Dentures?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Full restoration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Natural appearance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Facial support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Improved function</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-blue-600">{getTreatmentPrice("Complete Acrylic Dentures")}</div>
                  <div className="text-sm text-gray-600">Per arch</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                    Book Complete Denture Consultation
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
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500 text-white">Complete Solution</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Transform Your Life</h3>
                  <p className="text-gray-600">
                    Complete dentures don't just replace teeth - they restore your ability
                    to eat, speak, and smile with complete confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">4-6 weeks</div>
                      <div className="text-gray-600">Treatment time</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">5-8 years</div>
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
              Transform Your Life with Complete Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete dentures restore much more than just your teeth - they
              give you back your confidence, function, and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
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

      {/* Types Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Complete Denture Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose between conventional complete dentures for optimal fit
              or immediate dentures for instant tooth replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {types.map((type) => (
              <Card key={type.type} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{type.type}</CardTitle>
                  <CardDescription className="text-gray-600">{type.description}</CardDescription>
                  <Badge variant="outline" className="text-blue-600 border-blue-600 w-fit">
                    {type.timeline}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-pear-primary mb-2">Advantages:</h4>
                    <div className="space-y-1">
                      {type.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-1">Process:</h4>
                    <p className="text-sm text-gray-700">{type.process}</p>
                  </div>
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
              Complete Denture Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our complete dentures are crafted with attention to detail
              for optimal comfort, function, and natural appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Caring for Your Complete Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper care ensures your dentures last longer and remain
              comfortable while maintaining your oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {careInstructions.map((care) => {
              const Icon = care.icon;
              return (
                <Card key={care.aspect} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{care.aspect}</h3>
                    <p className="text-sm text-gray-600">{care.instruction}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Adjustment Tips */}
          <Card className="bg-white border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center text-pear-primary">Adjustment Tips for New Denture Wearers</CardTitle>
              <CardDescription className="text-center">
                These tips will help you adjust to your new complete dentures more quickly and comfortably.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adjustmentTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Complete Denture Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your complete dentures
              fit perfectly and restore your oral function beautifully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Restore Your Complete Smile
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let missing teeth limit your life. Complete dentures can restore
                your ability to eat, speak, and smile with complete confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Book Complete Denture Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Explore Other Denture Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Complete Acrylic Dentures")} per arch • 4-6 weeks • Natural appearance
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
