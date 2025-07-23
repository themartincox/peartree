import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import ServiceHero from "@/components/ServiceHero";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  Award,
  Timer,
  Smile,
  Heart,
  Gauge,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buccal Corridor Correction - Transform Your Smile | Pear Tree Dental",
  description: "Eliminate dark spaces at the corners of your smile with buccal corridor correction in Burton Joyce. Fuller, more youthful smiles. From £2,500. Expert consultation available.",
  keywords: [
    "buccal corridor correction Burton Joyce",
    "smile widening Nottingham",
    "dark spaces smile correction",
    "narrow smile treatment Burton Joyce",
    "orthodontic expansion Nottinghamshire",
    "smile transformation Burton Joyce",
    "cosmetic dentistry Nottingham"
  ],
  openGraph: {
    title: "Buccal Corridor Correction | Pear Tree Dental Burton Joyce",
    description: "Transform your smile by eliminating dark spaces at the corners. Expert buccal corridor correction from £2,500.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/buccal-corridor-correction"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/buccal-corridor-correction"
  }
};

export default function BuccalCorridorCorrectionPage() {
  const buccalCorridorFAQs = [
    {
      question: "How long does buccal corridor correction take?",
      answer: "Treatment duration varies depending on the chosen method. Orthodontic approaches typically take 12-24 months, while cosmetic solutions may be completed in just a few weeks. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Is the treatment painful?",
      answer: "Most patients experience minimal discomfort. Orthodontic movement may cause temporary soreness, while cosmetic procedures are typically performed with local anaesthesia for maximum comfort. We prioritise your comfort throughout treatment."
    },
    {
      question: "Will my insurance cover buccal corridor correction?",
      answer: "Coverage depends on whether treatment is deemed medically necessary or purely cosmetic. We'll help you understand your benefits and explore flexible payment options to make treatment affordable."
    },
    {
      question: "How long do results last?",
      answer: "With proper maintenance and retainer wear, orthodontic results can last a lifetime. Cosmetic restorations typically last 10-20 years with good care. We provide comprehensive aftercare guidance."
    },
    {
      question: "What are the signs I need buccal corridor correction?",
      answer: "Common signs include prominent dark triangular spaces when smiling, a narrow-looking smile compared to your lip line, feeling self-conscious about showing teeth, and photos where your smile appears less vibrant than expected."
    }
  ];

  const treatmentOptions = [
    {
      name: "Orthodontic Expansion",
      description: "Modern clear aligners and traditional braces to gradually widen your upper arch",
      features: ["Clear aligner technology", "Gradual arch widening", "Lasting results", "Improved oral function"],
      duration: "12-24 months",
      suitability: "Natural narrow palates"
    },
    {
      name: "Palatal Expansion",
      description: "Specialized appliances to expand the upper jaw structure for comprehensive development",
      features: ["Jaw structure expansion", "Enhanced breathing", "Comprehensive improvement", "Long-lasting results"],
      duration: "6-18 months",
      suitability: "Significant constriction"
    },
    {
      name: "Cosmetic Dentistry",
      description: "Porcelain veneers and crowns strategically placed for a fuller smile appearance",
      features: ["Immediate results", "Custom porcelain work", "Natural appearance", "Minimal tooth preparation"],
      duration: "2-4 weeks",
      suitability: "Minor corrections"
    },
    {
      name: "Combined Approach",
      description: "Integrated orthodontic and cosmetic treatments for optimal comprehensive results",
      features: ["Best of both worlds", "Customized treatment", "Predictable outcomes", "Expert coordination"],
      duration: "12-30 months",
      suitability: "Complex cases"
    }
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Fuller Smile",
      description: "Achieve a wider, more balanced smile that complements your facial features naturally"
    },
    {
      icon: Heart,
      title: "Boost Confidence",
      description: "Feel more confident in social and professional settings with your enhanced smile"
    },
    {
      icon: Gauge,
      title: "Better Function",
      description: "Improved tongue posture, breathing, and speech clarity with expanded oral space"
    },
    {
      icon: Eye,
      title: "Youthful Appearance",
      description: "Reduce signs of ageing with a fuller smile that lights up your entire face"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Evaluation",
      description: "Digital imaging, bite analysis, and detailed discussion of your smile goals and concerns"
    },
    {
      step: "2",
      title: "Advanced Treatment Planning",
      description: "3D smile design showing your projected results before treatment begins"
    },
    {
      step: "3",
      title: "Personalized Treatment",
      description: "Expert implementation of your customized correction plan with regular monitoring"
    },
    {
      step: "4",
      title: "Maintenance & Aftercare",
      description: "Retainers and ongoing support to ensure your beautiful results last for years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink/10 via-white to-soft-lavender/10">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Buccal Corridor Correction"
        description="Professional buccal corridor correction to eliminate dark spaces at the corners of your smile for a fuller, more youthful appearance"
        price="From £2,500"
        category="Cosmetic & Orthodontic Dentistry"
        duration="3-18 months depending on treatment approach"
        preparation="Comprehensive evaluation, digital imaging, treatment planning"
        recovery="Minimal discomfort, gradual improvement over treatment period"
        benefits={[
          "Fuller, more balanced smile",
          "Increased confidence and self-esteem",
          "Improved oral function and breathing",
          "Youthful appearance restoration",
          "Enhanced photogenic appeal"
        ]}
        risks={[
          "Temporary discomfort during orthodontic movement",
          "Initial adjustment period",
          "Requires consistent retainer wear",
          "Individual results may vary"
        ]}
        rating={4.9}
        reviewCount={156}
        url="https://peartree.dental/services/cosmetic/buccal-corridor-correction"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Buccal Corridor Correction"
        faqs={buccalCorridorFAQs}
      />

      {/* Hero Section */}
      <ServiceHero
        title="Transform Your"
        subtitle="Smile Width"
        description="Eliminate dark spaces at the corners of your smile with expert buccal corridor correction. Our specialized treatments create fuller, more balanced smiles that light up your entire face."
        heroVideo="/videos/heroes/buccal-corridor-hero.mp4"
        heroVideoType="mp4"
        heroImageAlt="Buccal corridor correction treatment demonstration video"
        badgeText="Buccal Corridor Correction"
        badgeIcon="Smile"
        keyBenefits={[
          { text: "Fuller smile", icon: "Smile" },
          { text: "Increased confidence", icon: "Heart" },
          { text: "Better function", icon: "Gauge" },
          { text: "Youthful appearance", icon: "Eye" }
        ]}
        primaryCTA={{
          text: "Book Smile Consultation",
          href: "/book"
        }}
        secondaryCTA={{
          text: "View Treatment Options",
          href: "#treatment-options",
          icon: "ArrowRight"
        }}
        gradientFrom="soft-pink/10"
        gradientTo="soft-lavender/10"
        textColor="pear-primary"
      />

      {/* What Are Buccal Corridors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Understanding Buccal Corridors
              </h2>
              <p className="text-xl text-gray-600">
                The dark spaces that shouldn't define your smile
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-pear-primary mb-3">What Are Buccal Corridors?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Buccal corridors are the dark spaces that appear between your back teeth and the corners of your mouth when you smile. While some space is natural, excessive dark areas can make your smile appear narrow or aged.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pear-primary mb-3">Common Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Naturally narrow upper arch</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Previous tooth extractions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Constricted orthodontic treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Natural facial structure changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Smile className="w-24 h-24 text-soft-pink mx-auto mb-4" />
                    <p className="text-sm text-gray-600 max-w-xs">Before & After comparison showing buccal corridor reduction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section id="treatment-options" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple approaches to achieve your ideal smile width, tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentOptions.map((option) => (
              <Card key={option.name} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-pear-primary mb-2">
                    {option.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-medium text-pear-primary">{option.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Best for:</span>
                        <div className="font-medium text-pear-primary">{option.suitability}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-pear-gold mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Transform Your Smile & Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buccal corridor correction offers both aesthetic and functional improvements for lasting benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-soft-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-soft-pink" />
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
              Your Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance through every step of your smile transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const colorClasses = [
                "bg-gradient-to-br from-pear-primary to-pear-primary/80",
                "bg-gradient-to-br from-pear-gold to-pear-gold/80",
                "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
                "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90"
              ];
              return (
                <Card key={step.step} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 ${colorClasses[index]} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-pear-gold/60" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                The Pear Tree Dental Difference
              </h2>
              <p className="text-xl text-gray-600">
                Specialised expertise in smile transformations with a personal touch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Advanced Digital Planning</h3>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge 3D imaging and smile design software show you exactly how your corrected smile will look before treatment begins.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Expert Team</h3>
                    <p className="text-gray-600 text-sm">
                      Our orthodontists and cosmetic dentists work collaboratively, providing coordinated care under one roof for optimal results.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Comfortable Experience</h3>
                    <p className="text-gray-600 text-sm">
                      Modern, relaxing practice environment with gentle treatment techniques prioritising your comfort throughout the process.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Personalised Plans</h3>
                    <p className="text-gray-600 text-sm">
                      Every smile is unique. We develop customised treatment strategies based on your specific anatomy, lifestyle, and goals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-pinky-fade text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Schedule your comprehensive buccal corridor evaluation and discover how we can create the fuller, more confident smile you deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 font-semibold">
                    Book Smile Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 border-2 border-white">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Comprehensive evaluation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>3D smile preview</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert guidance</span>
                </div>
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
