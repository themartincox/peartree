import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Waves,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Heart,
  Smile,
  Award,
  Zap
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Valplast Dentures - Flexible Partial Dentures | Pear Tree Dental",
  description: "Valplast flexible partial dentures in Burton Joyce. Comfortable, natural-looking, metal-free dentures. £1,100 per arch. Book your consultation today.",
  keywords: [
    "Valplast dentures Burton Joyce",
    "flexible partial dentures Nottingham",
    "metal-free dentures",
    "comfortable partial dentures",
    "aesthetic dentures Burton Joyce",
    "flexible denture base",
    "partial denture alternatives"
  ],
  openGraph: {
    title: "Valplast Dentures - Flexible Comfort & Natural Look | Pear Tree Dental",
    description: "Experience the comfort of Valplast flexible partial dentures. Metal-free, natural-looking solution for missing teeth.",
    type: "website",
    url: "https://peartreedental.co.uk/services/restorative/dentures/valplast-dentures"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/restorative/dentures/valplast-dentures"
  }
};

export default function ValplastDenturesPage() {
  const valplastFAQs = [
    {
      question: "What are Valplast dentures and how are they different?",
      answer: "Valplast dentures are made from a flexible, biocompatible nylon material that eliminates the need for metal clasps. They're virtually invisible, extremely comfortable, and adapt naturally to your mouth's movements."
    },
    {
      question: "How long do Valplast dentures last?",
      answer: "With proper care, Valplast dentures typically last 5-8 years. Their flexible material is highly durable and resistant to breakage, often outlasting traditional acrylic dentures."
    },
    {
      question: "Are Valplast dentures comfortable to wear?",
      answer: "Yes! Valplast dentures are renowned for their comfort. The flexible material adapts to your mouth's natural movements, reducing pressure points and eliminating the discomfort often associated with rigid dentures."
    },
    {
      question: "Can people tell I'm wearing Valplast dentures?",
      answer: "Valplast dentures are virtually invisible. The pink material blends naturally with your gums, and there are no visible metal clasps. Most people won't be able to tell you're wearing a partial denture."
    },
    {
      question: "How do I care for my Valplast dentures?",
      answer: "Clean your Valplast dentures daily with a soft brush and special Valplast cleaner. Avoid harsh chemicals, bleach, or abrasive cleaners. Regular professional cleaning helps maintain their appearance and longevity."
    }
  ];

  const benefits = [
    {
      icon: Waves,
      title: "Flexible Comfort",
      description: "Adapts naturally to your mouth's movements for all-day comfort"
    },
    {
      icon: Sparkles,
      title: "Virtually Invisible",
      description: "No metal clasps - blends seamlessly with your natural gums"
    },
    {
      icon: Shield,
      title: "Biocompatible",
      description: "Hypoallergenic material that's gentle on sensitive tissues"
    },
    {
      icon: Heart,
      title: "Natural Function",
      description: "Restores confident eating, speaking, and smiling"
    }
  ];

  const features = [
    "Metal-free construction eliminates allergic reactions",
    "Flexible material won't break if dropped",
    "Virtually invisible clasps blend with gum color",
    "Lightweight and comfortable for all-day wear",
    "Easy to clean and maintain",
    "Excellent aesthetics with natural appearance",
    "Biocompatible and tissue-friendly",
    "Long-lasting durability"
  ];

  const comparisons = [
    {
      feature: "Clasps",
      valplast: "Invisible pink clasps",
      traditional: "Visible metal clasps"
    },
    {
      feature: "Comfort",
      valplast: "Flexible, adapts to mouth",
      traditional: "Rigid, pressure points"
    },
    {
      feature: "Aesthetics",
      valplast: "Virtually invisible",
      traditional: "Metal shows when smiling"
    },
    {
      feature: "Durability",
      valplast: "Won't break if dropped",
      traditional: "Can crack or break"
    },
    {
      feature: "Allergies",
      valplast: "Hypoallergenic material",
      traditional: "Possible metal allergies"
    },
    {
      feature: "Weight",
      valplast: "Lightweight",
      traditional: "Heavier due to metal"
    }
  ];

  const suitableCases = [
    {
      title: "Missing Multiple Teeth",
      description: "Ideal when several teeth are missing but some healthy teeth remain",
      icon: Smile
    },
    {
      title: "Metal Sensitivities",
      description: "Perfect for patients with allergies to metals or sensitive tissues",
      icon: Shield
    },
    {
      title: "Active Lifestyle",
      description: "Great for people who need comfortable, secure partial dentures",
      icon: Zap
    },
    {
      title: "Aesthetic Concerns",
      description: "When appearance is important and metal clasps are undesirable",
      icon: Sparkles
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive examination and treatment planning for your partial denture"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Precise impressions taken for custom-fitting your Valplast denture"
    },
    {
      step: "3",
      title: "Try-in",
      description: "Test fitting to ensure proper fit, comfort, and appearance"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Final fitting and instructions for care and maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 via-white to-rose-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Valplast Flexible Dentures"
        description="Flexible partial dentures made from biocompatible nylon material, offering comfort and aesthetics without metal clasps"
        price="£1,100 per arch"
        category="Restorative Dentistry"
        duration="2-3 appointments over 2-3 weeks"
        preparation="Dental examination, impressions, treatment planning"
        recovery="Immediate wear, adjustment period 1-2 weeks"
        benefits={[
          "Virtually invisible appearance",
          "Metal-free and hypoallergenic",
          "Flexible and comfortable",
          "Durable and break-resistant",
          "Natural gum-colored clasps"
        ]}
        risks={[
          "Adjustment period required",
          "May need periodic relines",
          "Not suitable for all cases",
          "Special cleaning products required"
        ]}
        rating={4.7}
        reviewCount={85}
        url="https://peartreedental.co.uk/services/restorative/dentures/valplast-dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Valplast Flexible Dentures"
        faqs={valplastFAQs}
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
            <span className="text-pink-600 font-medium">Valplast Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/restorative/dentures" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Dentures
              </Link>

              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                <Waves className="w-4 h-4 mr-2" />
                Flexible Partial Dentures
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Valplast
                <span className="text-pink-600 block">Dentures</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the comfort and aesthetics of Valplast flexible partial dentures.
                Metal-free, virtually invisible, and incredibly comfortable for natural confidence.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Trusted by patients worldwide for over 50 years</span>
              </div>

              {/* Key Features */}
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Valplast?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-sm">Virtually invisible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-sm">Metal-free comfort</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-sm">Break-resistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-sm">Biocompatible</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-pink-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-pink-600">{getTreatmentPrice("Valplast Dentures")}</div>
                  <div className="text-sm text-gray-600">Per arch</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold">
                    Book Valplast Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white">
                    Call 0115 931 2525
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-pink-500 text-white">Flexible Technology</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-pink-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Invisible Comfort</h3>
                  <p className="text-gray-600">
                    Valplast dentures blend seamlessly with your natural gums,
                    providing comfort and confidence without visible metal clasps.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-pink-600">Metal-Free</div>
                      <div className="text-gray-600">100% biocompatible</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-pink-600">5-8 years</div>
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
              The Valplast Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the revolutionary benefits of flexible denture technology
              that prioritizes comfort, aesthetics, and natural function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-pink-600" />
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
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Valplast Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative features that make Valplast the preferred
              choice for comfortable, aesthetic partial dentures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
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
              Valplast vs Traditional Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Valplast's innovative flexible technology offers superior
              comfort and aesthetics compared to conventional partial dentures.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Valplast</th>
                    <th className="py-4 px-6 text-center">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pink-600" />
                          <span className="text-pink-600 font-medium">{item.valplast}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Suitable Cases Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Who Benefits from Valplast?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Valplast dentures are ideal for various situations where comfort,
              aesthetics, and biocompatibility are essential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suitableCases.map((case_) => {
              const Icon = case_.icon;
              return (
                <Card key={case_.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{case_.title}</h3>
                    <p className="text-sm text-gray-600">{case_.description}</p>
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
              Your Valplast Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your Valplast dentures
              fit perfectly and provide optimal comfort and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-pink-300" />
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
          <Card className="bg-gradient-to-r from-pink-600 to-rose-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Experience Flexible Comfort
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Discover the difference Valplast flexible dentures can make to your comfort
                and confidence. Book your consultation today for a personalized assessment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 font-semibold">
                  Book Valplast Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  Compare Denture Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Valplast Dentures")} per arch • Metal-free • Virtually invisible
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
