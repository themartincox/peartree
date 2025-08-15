import React from "react";
import {
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Invisalign in Arnold - Clear Aligners Near You | Pear Tree Dental",
  description:
    "Invisalign clear aligners for Arnold residents. Only 15 minutes to Pear Tree Dental in Burton Joyce. Premium invisible braces from £2,800. Free parking available.",
  keywords: [
    "Invisalign Arnold",
    "clear aligners Arnold",
    "invisible braces Arnold",
    "teeth straightening Arnold",
    "orthodontics Arnold NG5",
    "Invisalign near Arnold",
    "dentist Arnold Nottingham",
  ],
  openGraph: {
    title: "Invisalign in Arnold - Clear Aligners Near You | Pear Tree Dental",
    description:
      "Premium Invisalign treatment for Arnold residents. Just 15 minutes away with free parking. Advanced clear aligner technology.",
    url: "https://peartree.dental/arnold/invisalign",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/invisalign",
  },
};

export default function ArnoldInvisalignPage() {
  const arnoldInvisalignFAQs = [
    {
      question: "How far is Pear Tree Dental from Arnold town centre?",
      answer:
        "We're just 15 minutes from Arnold town centre via the A6097. Our practice in Burton Joyce is easily accessible with free parking available for all patients.",
    },
    {
      question: "Is Invisalign available privately for adults in Arnold?",
      answer:
        "Yes, we offer comprehensive Invisalign treatment for adults and teens. Treatment typically ranges from £2,800-£4,500 depending on complexity, with flexible payment plans available.",
    },
    {
      question:
        "Do you offer same-day Invisalign consultations for Arnold patients?",
      answer:
        "Absolutely! We often have same-day consultation availability. During your visit, we'll conduct a thorough assessment and can start your Invisalign journey immediately if suitable.",
    },
    {
      question:
        "Can I get Invisalign if I live in Arnold but work in Nottingham city centre?",
      answer:
        "Perfect! Our location in Burton Joyce is convenient for Arnold residents working in the city. We offer flexible appointment times including early morning and evening slots.",
    },
    {
      question:
        "What makes Pear Tree Dental different for Arnold patients seeking Invisalign?",
      answer:
        "We're Arnold's closest premium Invisalign provider, offering advanced SmartTrack technology, 3D treatment planning, and a personal care approach that busy Arnold professionals appreciate.",
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
            name: "Pear Tree Dental - Invisalign in Arnold",
            image: "https://peartree.dental/images/invisalign-arnold.jpg",
            url: "https://peartree.dental/arnold/invisalign",
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
            medicalSpecialty: "Orthodontics - Invisalign Clear Aligners",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£2800-£4500",
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
              Invisalign in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Premium Clear Aligners Just 15 Minutes Away
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Free parking available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Free Invisalign Consultation
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
                Why Arnold Residents Choose Pear Tree Dental for Invisalign
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Arnold's busy professionals and families trust us for premium
                Invisalign treatment. Located just off the A6097 in Burton
                Joyce, we're perfectly positioned for Arnold residents seeking
                discreet teeth straightening without the hassle of city centre
                appointments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Perfect Location
                  </h3>
                  <p className="text-gray-600">
                    15 minutes from Arnold via A6097, avoiding city traffic
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Free Parking
                  </h3>
                  <p className="text-gray-600">
                    No parking fees or stress - dedicated patient parking
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Flexible Hours
                  </h3>
                  <p className="text-gray-600">
                    Early morning and evening appointments for working
                    professionals
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Invisalign Treatment for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                For patients in Arnold looking to straighten their teeth
                discreetly, Invisalign offers the perfect solution. Our advanced
                clear aligner technology transforms smiles while fitting
                seamlessly into busy Arnold lifestyles.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                  Why Arnold Professionals Choose Invisalign
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Virtually Invisible
                      </h4>
                      <p className="text-gray-600">
                        Perfect for Arnold's business professionals who need to
                        maintain their professional image
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Removable Convenience
                      </h4>
                      <p className="text-gray-600">
                        Remove for important meetings, meals at Arnold's
                        restaurants, or social events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Predictable Results
                      </h4>
                      <p className="text-gray-600">
                        3D treatment planning shows your future smile before
                        treatment begins
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Faster Treatment
                      </h4>
                      <p className="text-gray-600">
                        Most cases complete in 6-18 months with minimal
                        lifestyle disruption
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-pear-gold">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Crown className="w-6 h-6 text-pear-gold" />
                      <h4 className="font-bold text-pear-primary">
                        Premium Technology
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      SmartTrack material and SmartForce attachments for
                      superior tooth movement
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-dental-green">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-dental-green" />
                      <h4 className="font-bold text-pear-primary">
                        Expert Care
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Experienced Invisalign providers with hundreds of
                      successful cases
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-soft-pink">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6 text-soft-pink" />
                      <h4 className="font-bold text-pear-primary">
                        Personal Service
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Dedicated support throughout your Invisalign journey
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Invisalign Experience
              </h2>
            </div>

            <TestimonialBanner
              text="I was nervous about getting braces at 34, but Invisalign was perfect for my lifestyle in Arnold. The team at Pear Tree made the journey so easy - the 15-minute drive was nothing compared to the amazing results I got. My teeth are perfectly straight now and nobody at work ever noticed I was wearing aligners!"
              author="Sarah K. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  15 mins
                </div>
                <p className="text-gray-600">Average travel time from Arnold</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  6-18 months
                </div>
                <p className="text-gray-600">Typical treatment duration</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  99%
                </div>
                <p className="text-gray-600">Patient satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Real Invisalign Results from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the amazing transformations achieved with our premium
              Invisalign treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/invisalign-before-case-1.webp"
              afterImage="/images/invisalign-after-case-1.webp"
              beforeAlt="Before Invisalign treatment - crowded teeth"
              afterAlt="After Invisalign treatment - perfectly straight smile"
              title="Invisalign Transformation"
              description="Complex crowding case completed in 14 months"
              treatmentType="Comprehensive Invisalign"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Invisalign Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about Invisalign
                treatment
              </p>
            </div>

            <FAQSection faqs={arnoldInvisalignFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Journey from Arnold to Pear Tree Dental
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
                  <div className="bg-pear-primary rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">
                      Free Patient Parking
                    </h4>
                    <p className="text-gray-600">
                      Dedicated parking spaces right outside our practice
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
              Start Your Invisalign Journey from Arnold Today
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your Invisalign consultation from Arnold — no waiting list,
              no delays. Just premium clear aligner treatment 15 minutes from
              your doorstep.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free Invisalign consultation worth £150 • 0% interest payment
                plans available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
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
              <span>✓ Same-day appointments available</span>
              <span>✓ Free parking for all patients</span>
              <span>✓ Flexible payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
