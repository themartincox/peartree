import React from "react";
import {
  Award,
  Camera,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Eye,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
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
    "Complete Smile Makeover in Arnold - Full Mouth Transformation | Pear Tree Dental",
  description:
    "Complete smile makeover for Arnold residents. Full mouth transformation with veneers, whitening, and implants. Premium cosmetic dentistry just 15 minutes away.",
  keywords: [
    "smile makeover Arnold",
    "complete smile makeover Arnold",
    "full mouth transformation Arnold",
    "cosmetic dentistry Arnold NG5",
    "smile design Arnold",
    "dental makeover Arnold",
    "smile transformation Arnold",
  ],
  openGraph: {
    title:
      "Complete Smile Makeover in Arnold - Full Mouth Transformation | Pear Tree Dental",
    description:
      "Complete smile makeover for Arnold residents. Full mouth transformation with advanced cosmetic dentistry just 15 minutes away.",
    url: "https://peartree.dental/arnold/complete-smile-makeover",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/complete-smile-makeover",
  },
};

export default function ArnoldCompleteSmileMakeoverPage() {
  const arnoldMakeoverFAQs = [
    {
      question: "How far is complete smile makeover treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're Nottinghamshire's premier smile makeover specialists with advanced digital smile design and comprehensive cosmetic dentistry.",
    },
    {
      question:
        "What's included in a complete smile makeover for Arnold patients?",
      answer:
        "Your makeover may include veneers, crowns, teeth whitening, gum reshaping, orthodontics, and implants. We create a personalized treatment plan to achieve your perfect smile.",
    },
    {
      question: "How long does a complete smile makeover take?",
      answer:
        "Most comprehensive makeovers take 3-6 months depending on complexity. We use digital smile design to show you the final result before we start, ensuring perfect planning.",
    },
    {
      question: "Can I see my new smile before treatment begins?",
      answer:
        "Absolutely! Our digital smile design technology creates a 3D preview of your new smile. You'll see exactly how your transformation will look before any treatment starts.",
    },
    {
      question:
        "What makes your smile makeover service special for Arnold residents?",
      answer:
        "We combine advanced digital smile design, multiple cosmetic specialties, comprehensive planning, and convenient Arnold access. Our makeovers are life-changing transformations.",
    },
  ];

  const makeoverOptions = [
    {
      name: "Essential Makeover",
      description: "Teeth whitening + composite bonding + smile design",
      treatments: [
        "Professional whitening",
        "Composite bonding",
        "Digital smile design",
        "Gum contouring",
      ],
      duration: "4-6 weeks",
      price: "From £1,500",
      ideal: "Minor improvements and color enhancement",
    },
    {
      name: "Premium Makeover",
      description: "Veneers + whitening + orthodontics + gum work",
      treatments: [
        "6-8 porcelain veneers",
        "Invisalign treatment",
        "Professional whitening",
        "Gum reshaping",
      ],
      duration: "3-4 months",
      price: "From £6,500",
      ideal: "Comprehensive smile transformation",
    },
    {
      name: "Ultimate Makeover",
      description: "Full mouth reconstruction with implants and veneers",
      treatments: [
        "Full mouth veneers/crowns",
        "Dental implants",
        "Gum surgery",
        "Complete reconstruction",
      ],
      duration: "4-6 months",
      price: "From £15,000",
      ideal: "Complete oral rehabilitation",
    },
  ];

  const makeoverSteps = [
    {
      step: 1,
      title: "Comprehensive Assessment",
      description: "Detailed examination, digital photography, and 3D scanning",
      duration: "90 minutes",
    },
    {
      step: 2,
      title: "Digital Smile Design",
      description: "Create your perfect smile using advanced 3D technology",
      duration: "2 weeks",
    },
    {
      step: 3,
      title: "Treatment Planning",
      description: "Personalized treatment sequence and timeline planning",
      duration: "1 week",
    },
    {
      step: 4,
      title: "Smile Transformation",
      description: "Execute your makeover plan with precision and care",
      duration: "3-6 months",
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
            name: "Pear Tree Dental - Complete Smile Makeover in Arnold",
            image: "https://peartree.dental/images/smile-makeover-arnold.jpg",
            url: "https://peartree.dental/arnold/complete-smile-makeover",
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
            medicalSpecialty: "Cosmetic Dentistry - Complete Smile Makeover",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£1500-£15000",
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
              Complete Smile Makeover in{" "}
              <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Life-Changing Smile Transformations Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Free parking & premium experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Makeover Consultation
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
                Why Arnold Professionals Choose Complete Smile Makeovers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold's ambitious professionals, a perfect smile isn't just
                about aesthetics—it's about confidence, success, and making the
                right impression. Our comprehensive smile makeovers combine
                multiple cosmetic treatments for life-changing transformations,
                just 15 minutes from Arnold.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Camera className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Digital Smile Design
                  </h3>
                  <p className="text-gray-600">
                    See your complete transformation before any treatment begins
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-dental-green mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Personalized Planning
                  </h3>
                  <p className="text-gray-600">
                    Custom treatment plans designed for your unique goals
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-soft-pink mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Expert Coordination
                  </h3>
                  <p className="text-gray-600">
                    Multiple specialists working together for perfect results
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Makeover Options Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Complete Smile Makeover Packages for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From subtle enhancements to complete transformations, our smile
                makeover packages are designed to meet every Arnold patient's
                needs, goals, and budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {(makeoverOptions || []).map((option, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-gold"
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-pear-primary mb-2">
                      {option.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-4">
                      {option.description}
                    </p>
                    <div className="text-2xl font-bold text-pear-primary mb-1">
                      {option.price}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {option.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {(option.treatments || []).map((treatment, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {treatment}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 font-medium">
                        Ideal for:
                      </p>
                      <p className="text-sm text-gray-600">{option.ideal}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Comprehensive Treatments Available
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 justify-center">
                  <Crown className="w-5 h-5 text-pear-primary" />
                  <span className="text-gray-600">Porcelain Veneers</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Sparkles className="w-5 h-5 text-pear-primary" />
                  <span className="text-gray-600">Teeth Whitening</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Eye className="w-5 h-5 text-pear-primary" />
                  <span className="text-gray-600">Invisalign</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Shield className="w-5 h-5 text-pear-primary" />
                  <span className="text-gray-600">Dental Implants</span>
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
                Your Smile Makeover Journey from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures your complete smile makeover exceeds
                expectations with careful planning, expert execution, and
                stunning results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(makeoverSteps || []).map((step, _index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                What Arnold Patients Say About Their Smile Makeovers
              </h2>
            </div>

            <TestimonialBanner
              text="My complete smile makeover has literally changed my life. As a business owner in Arnold, first impressions matter, and my new smile has given me confidence I never had before. The team showed me exactly what my new smile would look like before we started, and the results exceeded even those expectations. The 15-minute drive from Arnold was nothing compared to the life-changing results."
              author="David L. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  3D Preview
                </div>
                <p className="text-gray-600">See results before treatment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  3-6 months
                </div>
                <p className="text-gray-600">Complete transformation time</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Life-changing
                </div>
                <p className="text-gray-600">Confidence transformation</p>
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
              Life-Changing Smile Makeover Results
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible complete transformations achieved with our
              comprehensive makeover treatments
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/makeover-before-case-1.webp"
              afterImage="/images/makeover-after-case-1.webp"
              beforeAlt="Before complete smile makeover - damaged and discolored teeth"
              afterAlt="After complete smile makeover - perfect natural-looking transformation"
              title="Complete Smile Transformation"
              description="Full mouth makeover with veneers, whitening, and gum reshaping"
              treatmentType="Complete Smile Makeover"
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
                Smile Makeover Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about complete smile
                makeover treatments
              </p>
            </div>

            <FAQSection faqs={arnoldMakeoverFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Your Smile Transformation
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
                      Luxury Experience
                    </h4>
                    <p className="text-gray-600">
                      Premium environment perfect for smile makeover
                      consultations
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
              Transform Your Life with a Complete Smile Makeover from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your smile makeover consultation from Arnold — digital smile
              design, expert planning, and life-changing transformations just 15
              minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free digital smile design worth £500 • Comprehensive
                consultation included • 0% finance available
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
              <span>✓ Free digital smile design</span>
              <span>✓ Comprehensive treatment planning</span>
              <span>✓ 0% interest finance options</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
