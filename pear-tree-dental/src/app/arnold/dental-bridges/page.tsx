import React from "react";
import {
  Award,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Heart,
  Layers,
  MapPin,
  Navigation,
  Phone,
  Settings,
  Shield,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Dental Bridges in Arnold - Traditional Tooth Replacement | Pear Tree Dental",
  description:
    "Premium dental bridges for Arnold residents. Traditional tooth replacement solutions with porcelain and zirconia options just 15 minutes away. Restore your smile naturally.",
  keywords: [
    "dental bridges Arnold",
    "tooth bridge Arnold",
    "bridge dentist Arnold NG5",
    "missing tooth replacement Arnold",
    "porcelain bridge Arnold",
    "fixed bridge Arnold",
    "dental restoration Arnold",
  ],
  openGraph: {
    title:
      "Dental Bridges in Arnold - Traditional Tooth Replacement | Pear Tree Dental",
    description:
      "Premium dental bridges for Arnold residents. Traditional tooth replacement with natural-looking results just 15 minutes away.",
    url: "https://peartree.dental/arnold/dental-bridges",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/dental-bridges",
  },
};

export default function ArnoldDentalBridgesPage() {
  const arnoldBridgesFAQs = [
    {
      question: "How far is dental bridge treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're experienced bridge specialists offering traditional and modern bridge solutions with natural-looking results.",
    },
    {
      question:
        "What types of dental bridges are available for Arnold patients?",
      answer:
        "We offer traditional bridges, cantilever bridges, Maryland bridges, and implant-supported bridges. Each option is custom-made with premium materials for durability and aesthetics.",
    },
    {
      question: "How long do dental bridges last?",
      answer:
        "High-quality dental bridges typically last 10-15 years with proper care. Premium porcelain and zirconia bridges can last even longer with excellent oral hygiene.",
    },
    {
      question: "Are dental bridges better than implants for Arnold patients?",
      answer:
        "Bridges are excellent when adjacent teeth also need crowns. They're faster than implants, don't require surgery, and provide immediate results. We'll help you choose the best option.",
    },
    {
      question: "What makes your bridge service special for Arnold residents?",
      answer:
        "We combine traditional craftsmanship with modern materials, expert fitting, natural aesthetics, and convenient Arnold access. Our bridges are indistinguishable from natural teeth.",
    },
  ];

  const bridgeTypes = [
    {
      name: "Traditional Bridge",
      description: "Crown-supported bridge for missing teeth",
      features: [
        "Most common type",
        "Excellent durability",
        "Natural appearance",
        "Immediate results",
      ],
      price: "From £1,200",
      duration: "2-3 weeks",
      icon: Layers,
      suitability: "1-4 missing teeth with healthy adjacent teeth",
    },
    {
      name: "Cantilever Bridge",
      description: "Bridge supported on one side only",
      features: [
        "Preserves one natural tooth",
        "Good for specific cases",
        "Custom designed",
        "Stable support",
      ],
      price: "From £1,000",
      duration: "2-3 weeks",
      icon: Target,
      suitability: "Missing tooth with adjacent tooth on one side",
    },
    {
      name: "Maryland Bridge",
      description: "Bonded bridge with minimal preparation",
      features: [
        "Conservative approach",
        "Minimal tooth reduction",
        "Metal framework",
        "Quick placement",
      ],
      price: "From £800",
      duration: "2 weeks",
      icon: Layers,
      suitability: "Front teeth with healthy adjacent teeth",
    },
    {
      name: "Implant-Supported Bridge",
      description: "Bridge supported by dental implants",
      features: [
        "No natural tooth preparation",
        "Maximum preservation",
        "Ultimate stability",
        "Long-term solution",
      ],
      price: "From £3,500",
      duration: "3-6 months",
      icon: Crown,
      suitability: "Multiple missing teeth, preserve natural teeth",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Immediate Results",
      description: "Complete tooth replacement in just 2-3 weeks",
    },
    {
      icon: Shield,
      title: "No Surgery Required",
      description: "Non-surgical solution for missing teeth",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Decades of successful bridge restorations",
    },
    {
      icon: Heart,
      title: "Natural Function",
      description: "Restore full chewing power and speech clarity",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "Comprehensive examination and treatment planning",
      duration: "1 hour",
    },
    {
      step: "2",
      title: "Tooth Preparation",
      description: "Gentle preparation of supporting teeth",
      duration: "1-2 hours",
    },
    {
      step: "3",
      title: "Impressions & Temporary",
      description: "Precise impressions and temporary bridge fitting",
      duration: "30 minutes",
    },
    {
      step: "4",
      title: "Final Bridge Fitting",
      description: "Placement and adjustment of permanent bridge",
      duration: "1 hour",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Pear Tree Dental - Dental Bridges in Arnold",
            image: "https://peartree.dental/images/dental-bridges-arnold.jpg",
            url: "https://peartree.dental/arnold/dental-bridges",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: {
              "@type": "Place",
              name: "Arnold, NG5",
            },
            medicalSpecialty: "Restorative Dentistry - Dental Bridges",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£800-£3500",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Arnold & NG5
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dental Bridges in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Traditional Tooth Replacement Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — No surgery required
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Layers className="w-5 h-5 mr-2" />
                  Book Free Bridge Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localised Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Arnold Residents Choose Traditional Dental Bridges
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold residents seeking reliable tooth replacement, dental
                bridges offer a proven, non-surgical solution. Our expert bridge
                specialists in Burton Joyce combine traditional craftsmanship
                with modern materials for natural-looking results, just 15
                minutes from Arnold.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {(advantages || []).map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Types Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Bridge Solutions for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From traditional bridges to modern implant-supported options, we
                provide the complete range of bridge solutions for every Arnold
                patient's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(bridgeTypes || []).map((bridge, index) => {
                const IconComponent = bridge.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-primary" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {bridge.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-2">
                        {bridge.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {bridge.suitability}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {bridge.price}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {bridge.duration}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(bridge.features || []).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Expert Bridge Craftsmanship for Arnold Patients
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Premium porcelain materials
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Settings className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Precision laboratory crafted
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Natural color matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Bridge Treatment Journey from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven bridge process ensures perfect fit, natural
                aesthetics, and long-lasting results for every Arnold patient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(process || []).map((step, _index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-primary" />
                      <span className="text-xs text-pear-primary font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Bridge Treatment
              </h2>
            </div>

            <TestimonialBanner
              text="After losing two teeth in an accident, I was worried about implant surgery. The dental bridge option at Pear Tree was perfect - no surgery needed and completed in just three weeks. The 15-minute drive from Arnold was easy, and now I can't tell which teeth are the bridge. They match my natural teeth perfectly and I can eat everything again!"
              author="Carol S. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  2-3 weeks
                </div>
                <p className="text-gray-600">Complete treatment time</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  10-15 years
                </div>
                <p className="text-gray-600">Expected bridge lifespan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  No surgery
                </div>
                <p className="text-gray-600">Non-surgical solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Excellent Bridge Results from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the natural-looking tooth replacement achieved with our expert
              bridge work
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/bridge-before-case-1.webp"
              afterImage="/images/bridge-after-case-1.webp"
              beforeAlt="Before dental bridge - missing front teeth"
              afterAlt="After dental bridge - natural-looking tooth replacement"
              title="Traditional Bridge Restoration"
              description="Three-unit bridge replacing missing front teeth with natural aesthetics"
              treatmentType="Porcelain Bridge"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Dental Bridge Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about dental bridge
                treatments
              </p>
            </div>

            <FAQSection faqs={arnoldBridgesFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Expert Bridge Treatment
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Arnold
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 8 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey time: 15 minutes
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">
                      Expert Craftsmanship
                    </h4>
                    <p className="text-gray-600">
                      Traditional bridge expertise with modern materials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Arnold,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Replace Missing Teeth with Expert Dental Bridges from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your bridge consultation from Arnold — no surgery required,
              immediate results, and natural-looking tooth replacement just 15
              minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free bridge consultation worth £150 • No surgery required • 0%
                interest payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Layers className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ No surgery required</span>
              <span>✓ 2-3 week completion</span>
              <span>✓ 10-15 year durability</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
