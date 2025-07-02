import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema, { commonDentalFAQs } from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Smile,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Heart,
  Users,
  Award,
  Layers,
  Waves,
  Zap,
  Crown
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Dentures - Complete & Partial Dentures in Burton Joyce",
  description: "Expert denture services in Burton Joyce. Complete dentures, partial dentures, Valplast, Cobalt Chrome, and Hybrid options. Restore your smile with comfortable, natural-looking dentures.",
  keywords: [
    "dentures Burton Joyce",
    "partial dentures Nottingham",
    "complete dentures Burton Joyce",
    "Valplast dentures",
    "Cobalt Chrome dentures",
    "Hybrid dentures",
    "dental prosthetics Burton Joyce",
    "false teeth Nottinghamshire"
  ],
  openGraph: {
    title: "Dentures - Complete & Partial Denture Solutions | Pear Tree Dental",
    description: "Restore your smile with our comprehensive range of denture options. Expert fitting and premium materials.",
    type: "website",
    url: "https://peartreedental.co.uk/services/restorative/dentures"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/restorative/dentures"
  }
};

export default function DenturesPage() {
  const denturesFAQs = [
    {
      question: "What types of dentures do you offer?",
      answer: "We offer complete dentures, partial dentures, Valplast flexible dentures, Cobalt Chrome precision dentures, and advanced Hybrid dentures. Each type has specific advantages depending on your needs and preferences."
    },
    {
      question: "How long do dentures last?",
      answer: "Denture lifespan varies by type: acrylic dentures (5-7 years), Valplast (5-8 years), Cobalt Chrome (10-15 years), and Hybrid dentures (10-20 years). Proper care and regular check-ups help maximize their lifespan."
    },
    {
      question: "Will my dentures look natural?",
      answer: "Yes! Modern dentures are designed to look very natural. We carefully match tooth color, shape, and size to complement your facial features. Premium options like Hybrid dentures offer the most natural appearance."
    },
    {
      question: "How long does it take to get dentures?",
      answer: "The process typically takes 2-6 weeks depending on the type of denture. Complete dentures may take longer than partials, and premium options like Cobalt Chrome require additional time for precision manufacturing."
    },
    {
      question: "Will I be able to eat normally with dentures?",
      answer: "With proper fitting and an adjustment period, most patients can eat comfortably with dentures. Start with soft foods and gradually progress. Premium dentures often provide better chewing efficiency and stability."
    },
    commonDentalFAQs.membership
  ];

  const dentureTypes = [
    {
      name: "Complete Dentures",
      description: "Full replacement of all teeth in upper or lower jaw for complete restoration",
      price: getTreatmentPrice("Acrylic Complete Dentures"),
      features: ["Replace all teeth", "Custom-fitted", "Natural appearance", "Immediate function"],
      ideal: "When all teeth are missing in one or both jaws",
      link: "/services/restorative/dentures/complete-dentures",
      icon: Smile,
      popular: true
    },
    {
      name: "Partial Dentures",
      description: "Replace multiple missing teeth while preserving your remaining natural teeth",
      price: getTreatmentPrice("Acrylic Partial Dentures"),
      features: ["Preserve natural teeth", "Removable option", "Cost-effective", "Comfortable clasps"],
      ideal: "When some natural teeth remain healthy",
      link: "/services/restorative/dentures/partial-dentures",
      icon: Crown,
      popular: true
    },
    {
      name: "Valplast Dentures",
      description: "Flexible, metal-free partial dentures with invisible clasps for superior comfort",
      price: getTreatmentPrice("Valplast Dentures"),
      features: ["Flexible material", "Invisible clasps", "Metal-free", "Break-resistant"],
      ideal: "For comfort and aesthetic concerns",
      link: "/services/restorative/dentures/valplast-dentures",
      icon: Waves,
      popular: false
    },
    {
      name: "Cobalt Chrome Dentures",
      description: "Precision-cast metal framework dentures for maximum strength and accuracy",
      price: getTreatmentPrice("Cobalt Chrome Dentures"),
      features: ["Metal framework", "Precision fit", "Maximum strength", "Long-lasting"],
      ideal: "For demanding users wanting maximum durability",
      link: "/services/restorative/dentures/cobalt-chrome-dentures",
      icon: Shield,
      popular: false
    },
    {
      name: "Hybrid Dentures",
      description: "Advanced multi-material construction combining the best of all denture technologies",
      price: getTreatmentPrice("Hybrid Dentures"),
      features: ["Multi-material", "Superior performance", "Premium aesthetics", "Advanced technology"],
      ideal: "For patients wanting the ultimate denture solution",
      link: "/services/restorative/dentures/hybrid-dentures",
      icon: Layers,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Restore Your Smile",
      description: "Regain the confidence to smile, laugh, and speak naturally"
    },
    {
      icon: Heart,
      title: "Improve Function",
      description: "Enjoy your favorite foods again with proper chewing ability"
    },
    {
      icon: Users,
      title: "Social Confidence",
      description: "Feel comfortable in social situations without worrying about your teeth"
    },
    {
      icon: Award,
      title: "Facial Support",
      description: "Maintain proper facial structure and prevent the sunken appearance"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive examination and discussion of your denture options"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Custom treatment plan based on your needs, preferences, and budget"
    },
    {
      step: "3",
      title: "Impressions & Fitting",
      description: "Precise impressions and trial fittings to ensure perfect fit"
    },
    {
      step: "4",
      title: "Delivery & Care",
      description: "Final delivery with instructions for care and maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-orange-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Dentures"
        description="Comprehensive denture services including complete dentures, partial dentures, and premium options like Valplast, Cobalt Chrome, and Hybrid dentures"
        price="From £600"
        category="Restorative Dentistry"
        duration="2-6 weeks depending on type"
        preparation="Dental examination, impressions, treatment planning"
        recovery="Adjustment period 2-4 weeks for optimal comfort"
        benefits={[
          "Restore complete oral function",
          "Natural appearance and feel",
          "Improved speech and eating",
          "Enhanced facial support",
          "Boosted confidence and self-esteem"
        ]}
        risks={[
          "Initial adjustment period required",
          "May need periodic adjustments",
          "Possible minor soreness initially",
          "Regular maintenance required"
        ]}
        rating={4.7}
        reviewCount={180}
        url="https://peartreedental.co.uk/services/restorative/dentures"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Dentures"
        faqs={denturesFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/restorative" className="hover:text-pear-primary">Restorative</Link>
            <span>/</span>
            <span className="text-amber-600 font-medium">Dentures</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                <Smile className="w-4 h-4 mr-2" />
                Complete Denture Solutions
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Dentures That
                <span className="text-amber-600 block">Restore Life</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Rediscover the joy of eating, speaking, and smiling with confidence.
                Our comprehensive range of denture solutions restores both function and beauty.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Over 1,000 successful denture fittings</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Our Dentures?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm">Natural appearance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm">Comfortable fit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm">Multiple options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm">Expert fitting</span>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold group">
                  Book Denture Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 h-96">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-pear-primary">Restore Your Quality of Life</h3>
                  <p className="text-gray-600">
                    From basic complete dentures to advanced hybrid solutions,
                    we have the perfect option to restore your smile and confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-amber-600">5 Types</div>
                      <div className="text-gray-600">Denture options</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-amber-600">£600+</div>
                      <div className="text-gray-600">Starting price</div>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
                    Compare Denture Types
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Denture Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Choose Your Ideal Denture Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional to cutting-edge, we offer a complete range of denture options
              to match your needs, lifestyle, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentureTypes.map((denture) => {
              const Icon = denture.icon;
              return (
                <Card
                  key={denture.name}
                  className={`hover:shadow-xl transition-all duration-300 h-full ${
                    denture.popular ? 'border-2 border-amber-500' : ''
                  }`}
                >
                  {denture.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className={denture.popular ? 'pt-12' : 'pt-6'}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-pear-primary">
                          {denture.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-amber-600 border-amber-600 mt-1">
                          {denture.price}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-sm">
                      {denture.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Features:</h4>
                      <div className="space-y-1">
                        {denture.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-amber-600 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <span className="text-xs font-medium text-amber-700">Ideal for: </span>
                      <span className="text-xs text-gray-700">{denture.ideal}</span>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <Link href={denture.link}>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white text-sm">
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Transform Your Life with Dentures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Well-fitted dentures do more than replace missing teeth - they restore
              your ability to live life to the fullest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
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
              Your Denture Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your dentures fit perfectly
              and restore your confidence and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-amber-300" />
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
          <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Start Your Denture Journey Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let missing teeth hold you back. Book a consultation to explore
                your denture options and take the first step towards a restored smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90 font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="text-sm text-white/80">
                From £600 • Expert fitting • Natural appearance • Comfortable function
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
