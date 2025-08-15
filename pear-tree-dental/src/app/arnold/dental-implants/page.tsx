import React from "react";
import {
  Award,
  Car,
  CheckCircle,
  Crown,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
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
    "Dental Implants in Arnold - Premium Tooth Replacement | Pear Tree Dental",
  description:
    "Premium dental implants for Arnold residents. Single implants, All-on-4, and full mouth restoration just 15 minutes away. Expert implant specialists with 95% success rate.",
  keywords: [
    "dental implants Arnold",
    "tooth implants Arnold",
    "All-on-4 Arnold",
    "implant dentist Arnold NG5",
    "single tooth implant Arnold",
    "full mouth implants Arnold",
    "tooth replacement Arnold",
  ],
  openGraph: {
    title:
      "Dental Implants in Arnold - Premium Tooth Replacement | Pear Tree Dental",
    description:
      "Premium dental implant solutions for Arnold residents. Expert specialists with advanced technology just 15 minutes away.",
    url: "https://peartree.dental/arnold/dental-implants",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/dental-implants",
  },
};

export default function ArnoldDentalImplantsPage() {
  const arnoldImplantsFAQs = [
    {
      question: "How far is dental implant treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're one of Nottinghamshire's leading implant centres with over 95% success rates and free parking for all patients.",
    },
    {
      question:
        "What dental implant options are available for Arnold patients?",
      answer:
        "We offer single implants, multiple implants, All-on-4 full arch replacement, and full mouth restoration. All treatments use premium Swiss and German implant systems with lifetime guarantees.",
    },
    {
      question: "Can I get same-day dental implants near Arnold?",
      answer:
        "Yes, we offer same-day implant placement with immediate temporary crowns in suitable cases. This means you can leave with teeth the same day as your implant surgery.",
    },
    {
      question: "How long do dental implants last for Arnold patients?",
      answer:
        "With proper care, dental implants can last 20+ years or even a lifetime. We use only premium implant systems and provide comprehensive aftercare to ensure longevity.",
    },
    {
      question:
        "What makes your implant service different for Arnold residents?",
      answer:
        "We combine advanced 3D planning, premium implant systems, experienced specialists, and convenient access from Arnold. Our success rates exceed 95% with comprehensive guarantees.",
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
            name: "Pear Tree Dental - Dental Implants in Arnold",
            image: "https://peartree.dental/images/dental-implants-arnold.jpg",
            url: "https://peartree.dental/arnold/dental-implants",
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
            medicalSpecialty: "Oral Surgery - Dental Implants",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£2500-£25000",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Arnold & NG5
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dental Implants in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Premium Tooth Replacement Just 15 Minutes Away
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
                  className="bg-pear-gold hover:bg-pear-gold text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Implant Consultation
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
                Why Arnold Professionals Choose Premium Dental Implants
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Arnold's discerning professionals demand the highest quality
                tooth replacement solutions. Our premium dental implant centre
                in Burton Joyce offers Swiss and German implant systems with
                over 95% success rates, just 15 minutes from Arnold with
                convenient free parking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Premium Materials
                  </h3>
                  <p className="text-gray-600">
                    Swiss Straumann and German Camlog implants with lifetime
                    guarantees
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-dental-green mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    95% Success Rate
                  </h3>
                  <p className="text-gray-600">
                    Exceptional success rates with experienced implant
                    specialists
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-soft-pink mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Same-Day Options
                  </h3>
                  <p className="text-gray-600">
                    Immediate implants with temporary teeth fitted same day
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
                Comprehensive Dental Implant Solutions for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From single tooth replacement to full mouth restoration, we
                offer the complete range of premium implant solutions for
                Arnold's professionals and families.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Single Implants */}
              <Card className="border-2 border-pear-gold hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-pear-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-pear-primary">
                    Single Tooth Implants
                  </CardTitle>
                  <Badge className="bg-pear-gold text-white">
                    Most Popular
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Replace One Missing Tooth
                      </h4>
                      <p className="text-sm text-gray-600">
                        No damage to adjacent healthy teeth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Premium Swiss Implants</h4>
                      <p className="text-sm text-gray-600">
                        Straumann implants with lifetime guarantee
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Same-Day Options Available
                      </h4>
                      <p className="text-sm text-gray-600">
                        Immediate implant with temporary crown
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-pear-primary">
                      From £2,500
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete treatment including crown
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* All-on-4 */}
              <Card className="border-2 border-dental-green hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-pear-primary">
                    All-on-4 Full Arch
                  </CardTitle>
                  <Badge className="bg-dental-green text-white">
                    Full Mouth Solution
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Replace All Teeth</h4>
                      <p className="text-sm text-gray-600">
                        Full arch of teeth on just 4 implants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Immediate Function</h4>
                      <p className="text-sm text-gray-600">
                        Fixed teeth fitted on surgery day
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Advanced 3D Planning</h4>
                      <p className="text-sm text-gray-600">
                        Computer-guided surgery for precision
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-pear-primary">
                      From £15,000
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete arch replacement per jaw
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Advanced Technology for Arnold Patients
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    3D CT planning for precision
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Premium Swiss implant systems
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Lifetime implant guarantees
                  </span>
                </div>
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
                What Arnold Patients Say About Their Dental Implants
              </h2>
            </div>

            <TestimonialBanner
              text="After losing a tooth in a cycling accident, I was worried about getting dentures at 45. The team at Pear Tree recommended a single implant, and it was the best decision I've made. The 15-minute drive from Arnold was nothing compared to having a tooth that looks and feels completely natural. You honestly can't tell which one is the implant!"
              author="James T. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  95%+
                </div>
                <p className="text-gray-600">Implant success rate</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  20+ years
                </div>
                <p className="text-gray-600">Expected implant lifespan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Same day
                </div>
                <p className="text-gray-600">Immediate implant options</p>
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
              Life-Changing Implant Results from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible transformations achieved with our premium
              implant solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/implant-before-case-1.webp"
              afterImage="/images/implant-after-case-1.webp"
              beforeAlt="Before dental implant - missing front tooth"
              afterAlt="After dental implant - perfect natural-looking replacement"
              title="Single Implant Transformation"
              description="Single front tooth implant completed in 3 months with immediate temporary"
              treatmentType="Premium Swiss Implant"
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
                Dental Implant Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about premium dental
                implants
              </p>
            </div>

            <FAQSection faqs={arnoldImplantsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Premium Implant Treatment
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
                      Premium Patient Experience
                    </h4>
                    <p className="text-gray-600">
                      Free parking, comfortable environment, and refreshments
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
                className="bg-pear-primary hover:bg-pear-primary text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Premium Dental Implants from Arnold - No Compromises
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your implant consultation from Arnold — premium Swiss
              implants, 95% success rates, and lifetime guarantees just 15
              minutes from your doorstep.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free implant consultation worth £200 • 3D CT scan included • 0%
                interest available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
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
              <span>✓ Premium Swiss implant systems</span>
              <span>✓ Same-day implant options</span>
              <span>✓ Lifetime guarantees included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
