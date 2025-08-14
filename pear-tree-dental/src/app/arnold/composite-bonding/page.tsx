import React from "react";
import {
  Award,
  Car,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Shield,
  Smile,
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
    "Composite Bonding in Arnold - Affordable Smile Enhancement | Pear Tree Dental",
  description:
    "Composite bonding for Arnold residents. Affordable same-day smile improvements, gap closure, and tooth reshaping just 15 minutes away. Natural-looking results guaranteed.",
  keywords: [
    "composite bonding Arnold",
    "dental bonding Arnold",
    "tooth bonding Arnold NG5",
    "edge bonding Arnold",
    "affordable cosmetic dentistry Arnold",
    "same day smile makeover Arnold",
    "gap closure Arnold",
  ],
  openGraph: {
    title:
      "Composite Bonding in Arnold - Affordable Smile Enhancement | Pear Tree Dental",
    description:
      "Composite bonding for Arnold residents. Affordable same-day smile improvements just 15 minutes away with natural-looking results.",
    url: "https://peartree.dental/arnold/composite-bonding",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/composite-bonding",
  },
};

export default function ArnoldCompositeBondingPage() {
  const arnoldBondingFAQs = [
    {
      question: "How far is composite bonding treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're specialists in aesthetic composite bonding with same-day appointments and natural-looking results.",
    },
    {
      question: "What can composite bonding fix for Arnold patients?",
      answer:
        "Composite bonding can fix chipped teeth, close gaps, reshape teeth, cover stains, and improve tooth length. It's perfect for minor cosmetic improvements without major treatment.",
    },
    {
      question: "How long does composite bonding last?",
      answer:
        "High-quality composite bonding typically lasts 5-8 years with proper care. We use premium materials and provide comprehensive aftercare to maximize longevity.",
    },
    {
      question: "Can composite bonding be done in one visit?",
      answer:
        "Yes! Most composite bonding treatments are completed in a single appointment lasting 1-3 hours depending on the number of teeth being treated.",
    },
    {
      question: "What makes your bonding service special for Arnold residents?",
      answer:
        "We combine artistic skill, premium composite materials, same-day treatment, and natural color matching. Our bonding is indistinguishable from natural teeth.",
    },
  ];

  const bondingTreatments = [
    {
      name: "Gap Closure",
      description: "Close small gaps between teeth",
      duration: "1-2 hours",
      teeth: "2-4 teeth",
      price: "From £150",
      benefits: [
        "Instant results",
        "No drilling required",
        "Reversible treatment",
      ],
      icon: Target,
    },
    {
      name: "Chip Repair",
      description: "Restore chipped or broken teeth",
      duration: "30-60 minutes",
      teeth: "Per tooth",
      price: "From £120",
      benefits: ["Same-day repair", "Natural appearance", "Strengthen tooth"],
      icon: Shield,
    },
    {
      name: "Shape Enhancement",
      description: "Improve tooth shape and length",
      duration: "2-3 hours",
      teeth: "4-6 teeth",
      price: "From £180",
      benefits: [
        "Perfect symmetry",
        "Customized shape",
        "Immediate improvement",
      ],
      icon: Palette,
    },
    {
      name: "Edge Bonding",
      description: "Enhance and lengthen front teeth",
      duration: "1-2 hours",
      teeth: "4-8 teeth",
      price: "From £200",
      benefits: [
        "Youthful appearance",
        "Enhanced smile",
        "Conservative treatment",
      ],
      icon: Smile,
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Same-Day Results",
      description:
        "Complete treatment in one appointment with immediate results",
    },
    {
      icon: Heart,
      title: "Conservative Treatment",
      description:
        "Minimal tooth preparation required, preserving natural tooth structure",
    },
    {
      icon: Sparkles,
      title: "Natural Appearance",
      description: "Perfect color matching and texture for invisible repairs",
    },
    {
      icon: Award,
      title: "Affordable Option",
      description: "Cost-effective way to dramatically improve your smile",
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
            name: "Pear Tree Dental - Composite Bonding in Arnold",
            image:
              "https://peartree.dental/images/composite-bonding-arnold.jpg",
            url: "https://peartree.dental/arnold/composite-bonding",
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
            medicalSpecialty: "Cosmetic Dentistry - Composite Bonding",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£120-£200",
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
              Composite Bonding in{" "}
              <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Affordable Same-Day Smile Enhancement Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Same-day results available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Bonding Consultation
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
                Why Arnold Residents Choose Composite Bonding for Smile
                Enhancement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold residents seeking affordable, immediate smile
                improvements, composite bonding offers the perfect solution. Our
                artistic composite bonding specialists in Burton Joyce provide
                same-day transformations that look completely natural, just 15
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

      {/* Treatment Options Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Composite Bonding Treatments for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From simple chip repairs to comprehensive smile enhancements,
                our composite bonding treatments offer affordable, immediate
                improvements for every Arnold patient's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(bondingTreatments || []).map((treatment, index) => {
                const IconComponent = treatment.icon;
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
                        {treatment.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {treatment.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {treatment.price}
                        </p>
                        <p className="text-sm text-gray-600">
                          {treatment.teeth}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {treatment.duration}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {(treatment.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {benefit}
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
                Perfect for Arnold's Busy Lifestyles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Zap className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Completed in single visit
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">No anesthesia needed</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Instant confidence boost
                  </span>
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
                Your Same-Day Bonding Experience from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our efficient process ensures you leave with perfect results in
                just one appointment, making it ideal for busy Arnold residents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(
                [
                  {
                    step: "1",
                    title: "Color Matching",
                    description:
                      "Perfect shade selection for invisible results",
                    duration: "15 minutes",
                  },
                  {
                    step: "2",
                    title: "Tooth Preparation",
                    description: "Gentle surface preparation (no drilling)",
                    duration: "15 minutes",
                  },
                  {
                    step: "3",
                    title: "Artistic Application",
                    description: "Skillful composite application and shaping",
                    duration: "30-60 minutes",
                  },
                  {
                    step: "4",
                    title: "Final Polish",
                    description: "Professional polishing for natural shine",
                    duration: "15 minutes",
                  },
                ] || []
              ).map((step, _index) => (
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
                What Arnold Patients Say About Their Bonding Results
              </h2>
            </div>

            <TestimonialBanner
              text="I chipped my front tooth playing football and was devastated. The team at Pear Tree fixed it in one appointment - you honestly can't tell which tooth was repaired! The color match is perfect, and it feels completely natural. The 15-minute drive from Arnold was nothing compared to getting my confidence back instantly."
              author="Tom R. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Same day
                </div>
                <p className="text-gray-600">Complete treatment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  5-8 years
                </div>
                <p className="text-gray-600">Expected lifespan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Perfect match
                </div>
                <p className="text-gray-600">Invisible results</p>
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
              Amazing Bonding Transformations from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible improvements achieved with our artistic
              composite bonding
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/bonding-before-case-1.webp"
              afterImage="/images/bonding-after-case-1.webp"
              beforeAlt="Before composite bonding - chipped and gapped front teeth"
              afterAlt="After composite bonding - perfect symmetrical smile"
              title="Composite Bonding Transformation"
              description="Gap closure and chip repair completed in single appointment"
              treatmentType="Composite Bonding"
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
                Composite Bonding Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about composite
                bonding treatments
              </p>
            </div>

            <FAQSection faqs={arnoldBondingFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Same-Day Smile Enhancement
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
                      Same-Day Service
                    </h4>
                    <p className="text-gray-600">
                      Walk in with problems, leave with perfect smile
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
              Transform Your Smile Today with Composite Bonding from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your bonding consultation from Arnold — same-day results,
              natural appearance, and affordable smile enhancement just 15
              minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free consultation worth £75 • Same-day appointments • Payment
                plans available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
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
              <span>✓ Same-day results available</span>
              <span>✓ No anesthesia required</span>
              <span>✓ 5-8 year durability</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
