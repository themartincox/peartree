import React from "react";
import {
  Award,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Eye,
  Heart,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
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
    "Porcelain Veneers in Arnold - Premium Smile Makeover | Pear Tree Dental",
  description:
    "Premium porcelain veneers for Arnold residents. Ultra-thin veneers and smile transformations just 15 minutes away. Expert cosmetic dentistry with 10-year guarantees.",
  keywords: [
    "porcelain veneers Arnold",
    "dental veneers Arnold",
    "smile makeover Arnold",
    "cosmetic dentist Arnold NG5",
    "ultra-thin veneers Arnold",
    "composite veneers Arnold",
    "smile transformation Arnold",
  ],
  openGraph: {
    title:
      "Porcelain Veneers in Arnold - Premium Smile Makeover | Pear Tree Dental",
    description:
      "Premium porcelain veneers for Arnold residents. Expert cosmetic dentistry just 15 minutes away with 10-year guarantees.",
    url: "https://peartree.dental/arnold/porcelain-veneers",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/porcelain-veneers",
  },
};

export default function ArnoldPorcelainVeneersPage() {
  const arnoldVeneersFAQs = [
    {
      question: "How far is porcelain veneer treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're one of Nottinghamshire's leading cosmetic dental practices with award-winning veneer results and free parking.",
    },
    {
      question: "What types of veneers are available for Arnold patients?",
      answer:
        "We offer premium porcelain veneers, ultra-thin veneers, and composite veneers. Each option is tailored to your needs, budget, and desired outcome with expert cosmetic dentistry.",
    },
    {
      question: "How long do porcelain veneers last for Arnold patients?",
      answer:
        "High-quality porcelain veneers typically last 10-15 years with proper care. We provide comprehensive aftercare and a 10-year guarantee on all premium veneer treatments.",
    },
    {
      question: "Can I see my new smile before veneers are fitted?",
      answer:
        "Absolutely! We use digital smile design technology to show you exactly how your new veneers will look before any treatment begins. You'll see your transformation in advance.",
    },
    {
      question: "What makes your veneer service special for Arnold residents?",
      answer:
        "We combine advanced digital smile design, premium porcelain materials, expert cosmetic dentistry, and convenient Arnold access. Our veneers are indistinguishable from natural teeth.",
    },
  ];

  const veneerTypes = [
    {
      name: "Ultra-Thin Veneers",
      description: "Minimal prep veneers as thin as 0.3mm",
      benefits: [
        "Minimal tooth removal",
        "Reversible option",
        "Quick placement",
      ],
      price: "From £750",
      duration: "2-3 weeks",
      icon: Sparkles,
    },
    {
      name: "Premium Porcelain",
      description: "Traditional porcelain veneers for complete transformation",
      benefits: [
        "Maximum durability",
        "Perfect aesthetics",
        "10-year guarantee",
      ],
      price: "From £950",
      duration: "3-4 weeks",
      icon: Crown,
    },
    {
      name: "Composite Veneers",
      description: "Same-day composite resin veneers",
      benefits: ["Completed in one visit", "More affordable", "Repairable"],
      price: "From £350",
      duration: "Same day",
      icon: Smile,
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
            name: "Pear Tree Dental - Porcelain Veneers in Arnold",
            image:
              "https://peartree.dental/images/porcelain-veneers-arnold.jpg",
            url: "https://peartree.dental/arnold/porcelain-veneers",
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
            medicalSpecialty: "Cosmetic Dentistry - Porcelain Veneers",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£350-£950",
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
              Porcelain Veneers in{" "}
              <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Premium Smile Transformations Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
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
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Veneers Consultation
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
                Why Arnold Professionals Choose Premium Porcelain Veneers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Arnold's discerning professionals understand that a perfect
                smile is an investment in their success. Our award-winning
                cosmetic dentistry practice in Burton Joyce offers premium
                porcelain veneers with digital smile design, just 15 minutes
                from Arnold with convenient free parking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Palette className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Digital Smile Design
                  </h3>
                  <p className="text-gray-600">
                    See your new smile before treatment with advanced 3D preview
                    technology
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-dental-green mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    10-Year Guarantee
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive warranty on all premium porcelain veneer
                    treatments
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Eye className="w-12 h-12 text-soft-pink mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">
                    Natural Results
                  </h3>
                  <p className="text-gray-600">
                    Indistinguishable from natural teeth with expert color
                    matching
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Veneer Options Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Veneer Options for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From minimal-prep ultra-thin veneers to complete smile
                transformations, we offer the perfect veneer solution for every
                Arnold patient's needs and budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {(veneerTypes || []).map((veneer, index) => {
                const IconComponent = veneer.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-gold"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-gold" />
                      </div>
                      <CardTitle className="text-xl text-pear-primary">
                        {veneer.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {veneer.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {(veneer.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {veneer.price}
                        </p>
                        <p className="text-sm text-gray-600">Per veneer</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {veneer.duration}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Perfect for Arnold's Professional Image
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Stain-resistant porcelain
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Natural-looking results</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Boost confidence instantly
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
                What Arnold Patients Say About Their Veneer Results
              </h2>
            </div>

            <TestimonialBanner
              text="I work in sales and my smile is everything. The team at Pear Tree designed the perfect veneers for me - they look completely natural but so much better than my original teeth. The 15-minute drive from Arnold was worth every minute. I've already had three colleagues ask where I got my teeth done!"
              author="Emma P. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  3D Preview
                </div>
                <p className="text-gray-600">See your new smile in advance</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  10 years
                </div>
                <p className="text-gray-600">Comprehensive guarantee</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  2-4 weeks
                </div>
                <p className="text-gray-600">Complete transformation time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Stunning Veneer Transformations from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible smile makeovers achieved with our premium
              porcelain veneers
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/veneers-before-case-1.webp"
              afterImage="/images/veneers-after-case-1.webp"
              beforeAlt="Before porcelain veneers - worn and discoloured teeth"
              afterAlt="After porcelain veneers - perfect natural-looking smile"
              title="Complete Smile Transformation"
              description="8 premium porcelain veneers for perfect symmetry and color"
              treatmentType="Premium Porcelain Veneers"
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
                Porcelain Veneer Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about premium veneer
                treatments
              </p>
            </div>

            <FAQSection faqs={arnoldVeneersFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Premium Veneer Treatment
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
                      Premium Experience
                    </h4>
                    <p className="text-gray-600">
                      Comfortable environment perfect for smile transformations
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
              Transform Your Smile with Premium Veneers from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your veneer consultation from Arnold — digital smile design,
              premium materials, and expert cosmetic dentistry just 15 minutes
              from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free digital smile design worth £250 • 0% interest payment plans
                available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
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
              <span>✓ Digital smile design included</span>
              <span>✓ 10-year guarantee on all veneers</span>
              <span>✓ 0% interest payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
