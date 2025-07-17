import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import VideoHero from "@/components/VideoHero";
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
  Coffee
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening - Transform Your Smile | Pear Tree Dental",
  description: "Professional teeth whitening in Burton Joyce. Enlighten & Boutique whitening systems available. From £400. Book your consultation today for a brighter smile.",
  keywords: [
    "teeth whitening Burton Joyce",
    "professional teeth whitening Nottingham",
    "Enlighten whitening Burton Joyce",
    "Boutique whitening system",
    "smile whitening Nottinghamshire",
    "teeth bleaching Burton Joyce",
    "professional whitening treatment"
  ],
  openGraph: {
    title: "Professional Teeth Whitening | Pear Tree Dental Burton Joyce",
    description: "Transform your smile with professional teeth whitening. Enlighten & Boutique systems available from £400.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/teeth-whitening"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/teeth-whitening"
  }
};

export default function TeethWhiteningPage() {
  const whiteningFAQs = [
    {
      question: "How much does professional teeth whitening cost?",
      answer: `Our professional whitening treatments start from ${getTreatmentPrice("Teeth Whitening")} for our standard system, with Enlighten whitening at ${getTreatmentPrice("Enlighten Whitening")}. We offer payment plans to help spread the cost.`
    },
    {
      question: "How long does teeth whitening last?",
      answer: "Professional whitening results typically last 1-3 years depending on your lifestyle habits. Enlighten whitening can provide even longer-lasting results with proper maintenance."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, professional teeth whitening is completely safe when performed by qualified dental professionals. We use clinically proven systems and monitor your progress throughout treatment."
    },
    {
      question: "Will teeth whitening work on all stains?",
      answer: "Professional whitening is most effective on yellow and brown stains from coffee, tea, wine, and aging. Some intrinsic stains may require alternative treatments like veneers."
    },
    {
      question: "How many shades whiter will my teeth become?",
      answer: "Most patients achieve 6-8 shades whiter with our standard treatments. Enlighten whitening can achieve even more dramatic results, often up to B1 shade."
    }
  ];

  const whiteningOptions = [
    {
      name: "Boutique Whitening",
      price: getTreatmentPrice("Teeth Whitening"),
      duration: "2-3 weeks",
      shades: "6-8 shades",
      description: "Professional at-home whitening system with custom-fitted trays",
      features: [
        "Custom-made whitening trays",
        "Professional-strength gel",
        "Flexible treatment schedule",
        "Gradual, comfortable whitening",
        "6-8 shades improvement"
      ],
      popular: true,
      link: "/services/cosmetic/teeth-whitening/boutique"
    },
    {
      name: "Enlighten Whitening",
      price: getTreatmentPrice("Enlighten Whitening"),
      duration: "2 weeks + 1 visit",
      shades: "Up to B1 shade",
      description: "The most effective whitening system available with guaranteed results",
      features: [
        "Guaranteed B1 shade result",
        "Combines home and in-practice treatment",
        "Minimal sensitivity",
        "Long-lasting results",
        "Gold standard whitening system"
      ],
      popular: false,
      premium: true,
      link: "/services/cosmetic/teeth-whitening/enlighten"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Boost Confidence",
      description: "A brighter smile enhances your confidence in social and professional situations"
    },
    {
      icon: Users,
      title: "Look Younger",
      description: "Whiter teeth can take years off your appearance and create a more youthful look"
    },
    {
      icon: Shield,
      title: "Safe & Professional",
      description: "Clinical-grade treatments supervised by qualified dental professionals"
    },
    {
      icon: Timer,
      title: "Quick Results",
      description: "See noticeable improvements in just a few days with professional systems"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Assessment of your teeth and discussion of your whitening goals"
    },
    {
      step: "2",
      title: "Impressions",
      description: "Custom trays are made from precise impressions of your teeth"
    },
    {
      step: "3",
      title: "Treatment Start",
      description: "Begin your whitening journey with professional-grade gel and custom trays"
    },
    {
      step: "4",
      title: "Monitor Progress",
      description: "Regular check-ins to ensure optimal results and comfort throughout treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/30">
      <EnhancedServiceSchema
        serviceName="Professional Teeth Whitening"
        description="Professional teeth whitening treatments including Boutique and Enlighten whitening systems for dramatic smile transformation"
        price="From £400"
        category="Cosmetic Dentistry"
        duration="2-3 weeks treatment period"
        preparation="Dental examination, custom tray fitting"
        recovery="No downtime, possible temporary sensitivity"
        benefits={[
          "6-8 shades whiter teeth",
          "Professional supervision",
          "Custom-fitted treatment trays",
          "Long-lasting results",
          "Boost confidence and appearance"
        ]}
        risks={[
          "Temporary tooth sensitivity",
          "Temporary gum irritation",
          "Not effective on all stain types",
          "Results vary by individual"
        ]}
        rating={4.9}
        reviewCount={450}
        url="https://peartree.dental/services/cosmetic/teeth-whitening"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Professional Teeth Whitening"
        faqs={whiteningFAQs}
      />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mobile-first content order: Title → Video → Badge → Text → Benefits → CTAs */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              {/* H1 Title - First on mobile for immediate page identification */}
              <h1 className="heading-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-pear-primary leading-tight">
                Transform Your
                <span className="text-yellow-600 block">Smile Today</span>
              </h1>

              {/* Hero Video - Second on mobile, appears above other content */}
              <div className="relative lg:hidden">
                <VideoHero
                  videoSrc="/videos/heroes/teeth-whitening-hero.mp4"
                  posterImage="/images/teeth-whitening-before.webp"
                  fallbackImage="/images/teeth-whitening-before.webp"
                  altText="Professional teeth whitening transformation"
                />

                {/* Results Summary */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-600 text-lg">Up to 8 Shades</div>
                    <div className="text-gray-600">Whiter in weeks</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-600 text-lg">1-3 Years</div>
                    <div className="text-gray-600">Long-lasting</div>
                  </div>
                </div>
              </div>

              {/* Badge - Third on mobile, provides context */}
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Teeth Whitening
              </Badge>

              {/* Description - Fourth on mobile */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transform your smile with professional teeth whitening treatments. Choose from our
                advanced Boutique or premium Enlighten whitening systems for stunning, long-lasting results.
              </p>

              {/* Social Proof - Fifth on mobile */}
              <div className="inline-flex items-center bg-dental-teal border border-dental-teal rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-white mr-2 fill-current" />
                <span className="text-sm font-semibold text-white">Over 1,000 satisfied patients</span>
              </div>

              {/* Key Benefits - Sixth on mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">6-8 shades whiter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">Professional grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">Custom treatment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">Long-lasting results</span>
                </div>
              </div>

              {/* CTAs - Seventh on mobile */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold group">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual - Desktop only (hidden on mobile since it appears inline above) */}
            <div className="relative order-2 lg:order-2 hidden lg:block">
              <VideoHero
                videoSrc="/videos/heroes/teeth-whitening-hero.mp4"
                posterImage="/images/teeth-whitening-before.webp"
                fallbackImage="/images/teeth-whitening-before.webp"
                altText="Professional teeth whitening transformation"
              />

              {/* Results Summary */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200">
                  <div className="font-semibold text-yellow-600 text-lg">Up to 8 Shades</div>
                  <div className="text-gray-600">Whiter in weeks</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200">
                  <div className="font-semibold text-yellow-600 text-lg">1-3 Years</div>
                  <div className="text-gray-600">Long-lasting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Systems Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Choose Your Whitening System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer two professional whitening systems to suit different needs and budgets,
              both delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whiteningOptions.map((option) => (
              <Card
                key={option.name}
                className={`relative hover:shadow-xl transition-all duration-300 h-full ${
                  option.popular ? 'border-2 border-yellow-500' : option.premium ? 'border-2 border-orange-500' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular Choice
                  </div>
                )}
                {option.premium && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    Premium System
                  </div>
                )}

                <CardHeader className={option.popular || option.premium ? 'pt-12' : 'pt-6'}>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl font-semibold text-pear-primary">
                      {option.name}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-600">{option.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {option.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-pear-primary">{option.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Results</div>
                      <div className="font-semibold text-pear-primary">{option.shades}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link href={option.link}>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                        Learn More About {option.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Professional Whitening?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional whitening delivers superior results compared to over-the-counter products,
              with safety and effectiveness you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              See the Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional whitening delivers dramatic results that over-the-counter products simply cannot match.
            </p>
          </div>

          <div className="max-w-4xl lg:max-w-6xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/teeth-whitening-before.webp"
              afterImage="/images/teeth-whitening-after.webp"
              beforeAlt="Teeth before professional whitening treatment - showing natural discoloration"
              afterAlt="Teeth after professional whitening - dramatically whiter and brighter smile"
              description="Real people, real results, achieved with our professional whitening systems"
              className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Whitening Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process ensures you get the best possible results from your
              professional whitening treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yellow-300" />
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
          <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready for a Brighter Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Book your free consultation today and discover which whitening system is perfect for you.
                Start your journey to a more confident, radiant smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-white/90 font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 font-semibold bg-transparent">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Professional supervision</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Guaranteed results</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ServiceNavigation />
    </div>
  );
}
