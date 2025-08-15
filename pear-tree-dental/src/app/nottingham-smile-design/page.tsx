import React from "react";
import {
  Award,
  Camera,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  MapPin,
  Palette,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Smile Design Nottingham - Complete Smile Makeover | Pear Tree Dental",
  description:
    "Professional smile design in Nottingham. Complete smile makeovers with veneers, whitening, and cosmetic dentistry. Transform your smile from £2,000.",
  keywords: [
    "smile design Nottingham",
    "smile makeover Nottingham",
    "cosmetic dentistry Nottingham",
    "veneers Nottingham",
    "porcelain veneers Nottingham",
    "complete smile makeover Nottingham",
    "cosmetic dentist Nottingham",
    "digital smile design Nottingham",
  ],
  openGraph: {
    title:
      "Smile Design Nottingham - Complete Smile Makeover | Pear Tree Dental",
    description:
      "Transform your smile with professional smile design in Nottingham. Comprehensive cosmetic dentistry for the perfect smile.",
    url: "https://peartree.dental/nottingham-smile-design",
  },
  alternates: {
    canonical: "https://peartree.dental/nottingham-smile-design",
  },
};

export default function NottinghamSmileDesignPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://peartree.dental/nottingham-smile-design",
            name: "Pear Tree Dental - Smile Design Nottingham",
            image: "https://peartree.dental/images/smile-design-nottingham.jpg",
            description:
              "Professional smile design and makeover services in Nottingham. Complete cosmetic dentistry transformation with veneers, whitening, and more.",
            url: "https://peartree.dental/nottingham-smile-design",
            telephone: "+441159312520",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.9833,
              longitude: -1.0833,
            },
            openingHours: ["Mo-Fr 08:30-17:30", "Sa 08:30-14:00"],
            medicalSpecialty: "Cosmetic Dentistry",
            serviceArea: {
              "@type": "City",
              name: "Nottingham",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Smile Design Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Complete Smile Makeover",
                    description:
                      "Comprehensive cosmetic dentistry transformation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Porcelain Veneers",
                    description: "Custom veneers for perfect smile design",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Digital Smile Design",
                    description:
                      "Advanced digital planning for optimal results",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dental-navy via-dental-navy/95 to-dental-green"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-dental-green" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smile Design in{" "}
              <span className="text-dental-green">Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-dental-navy/80 leading-relaxed">
              Transform your smile with comprehensive cosmetic dentistry.
              <br className="hidden sm:block" />
              Complete smile makeovers tailored to you - from £2,000.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/services/complete-smile-makeover">
                  View Smile Makeover Options
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Palette className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Custom Design</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Camera className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Digital Planning</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Expert Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Comprehensive Smile Design Services in Nottingham
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our complete smile makeover approach combines multiple treatments
              for stunning, natural-looking results.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Porcelain Veneers */}
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Porcelain Veneers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ultra-thin custom veneers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Natural-looking results</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Stain-resistant material</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">10+ year lifespan</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £850 per veneer
                  </div>
                </CardContent>
              </Card>

              {/* Composite Bonding */}
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Composite Bonding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Same-day treatment</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Minimal tooth preparation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Excellent value option</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Repairable if damaged</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £250 per tooth
                  </div>
                </CardContent>
              </Card>

              {/* Teeth Whitening */}
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Professional Whitening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Enlighten & Boutique systems
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Guaranteed results</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Safe & comfortable</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Long-lasting brightness</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £295
                  </div>
                </CardContent>
              </Card>

              {/* Gum Contouring */}
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Gum Contouring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Reshape gum line</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Improve tooth proportions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Minimally invasive</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Enhanced smile aesthetics</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £350
                  </div>
                </CardContent>
              </Card>

              {/* Invisalign */}
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Clear Aligners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Straighten teeth discreetly
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Removable aligners</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Predictable results</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Perfect smile foundation</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £2,500
                  </div>
                </CardContent>
              </Card>

              {/* Complete Makeover */}
              <Card className="p-6 border-2 border-dental-green/40 bg-dental-green/5">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Complete Makeover
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Multiple treatments combined
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Comprehensive transformation
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Digital smile preview</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Life-changing results</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-dental-green font-semibold">
                    From £2,000
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Smile Design Process */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Digital Smile Design Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">1. Digital Imaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High-resolution photos and 3D scans capture every detail of
                    your current smile
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">2. Design Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced software creates your ideal smile design based on
                    your facial features
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">3. Preview & Refine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    See your new smile before treatment begins and make any
                    adjustments
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    4. Precision Treatment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your treatment plan is executed with precision to achieve
                    the planned results
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree Dental */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Pear Tree Dental for Smile Design in Nottingham?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Expert Cosmetic Dentists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Extensive training in advanced cosmetic dentistry techniques
                    and smile design principles
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    State-of-the-art digital imaging and smile design software
                    for precise planning
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Personalised Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every smile design is tailored to your unique facial
                    features and personal preferences
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Quality Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Only the finest dental materials and laboratory partnerships
                    for lasting results
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Comprehensive Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete smile transformations under one roof with
                    coordinated treatment planning
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive aftercare and maintenance to protect your
                    investment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery CTA */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              See Real Smile Transformations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Browse our gallery of before and after smile makeover results to
              see what's possible with professional smile design.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold px-8 py-4"
            >
              <Link href="/smile-gallery">
                <Camera className="h-5 w-5 mr-2" />
                View Smile Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Smile with Professional Design
            </h2>
            <p className="text-xl mb-8">
              Book your smile design consultation today and discover how
              comprehensive cosmetic dentistry can create the smile of your
              dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-dental-green hover:bg-gray-100 font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dental-green px-8 py-4"
              >
                <Link href="/contact">Book Design Consultation</Link>
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>
                <MapPin className="h-4 w-4 inline mr-1" />
                22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE
              </p>
              <p className="mt-2">
                Professional smile design serving Nottingham and surrounding
                areas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
