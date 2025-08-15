import React from "react";
import {
  Award,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Teeth Whitening Nottingham - Professional Whitening | Pear Tree Dental",
  description:
    "Professional teeth whitening in Nottingham. Enlighten and Boutique whitening systems. Safe, effective treatment from £295. Book your consultation today.",
  keywords: [
    "teeth whitening Nottingham",
    "professional teeth whitening Nottingham",
    "dental whitening Nottingham",
    "Enlighten whitening Nottingham",
    "Boutique whitening Nottingham",
    "laser teeth whitening Nottingham",
    "cosmetic dentist Nottingham",
  ],
  openGraph: {
    title:
      "Teeth Whitening Nottingham - Professional Whitening | Pear Tree Dental",
    description:
      "Transform your smile with professional teeth whitening in Nottingham. Enlighten and Boutique systems available. Safe, effective, lasting results.",
    url: "https://peartree.dental/nottingham-teeth-whitening",
  },
  alternates: {
    canonical: "https://peartree.dental/nottingham-teeth-whitening",
  },
};

export default function NottinghamTeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://peartree.dental/nottingham-teeth-whitening",
            name: "Pear Tree Dental - Teeth Whitening Nottingham",
            image:
              "https://peartree.dental/images/teeth-whitening-nottingham.jpg",
            description:
              "Professional teeth whitening treatment in Nottingham. Enlighten and Boutique whitening systems for safe, effective results.",
            url: "https://peartree.dental/nottingham-teeth-whitening",
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
              name: "Teeth Whitening Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Enlighten Teeth Whitening",
                    description:
                      "Premium teeth whitening system guaranteed to whiten to shade B1",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Boutique Teeth Whitening",
                    description:
                      "Professional whitening system with excellent results",
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
              <Sparkles className="h-16 w-16 text-dental-green" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Teeth Whitening in{" "}
              <span className="text-dental-green">Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-dental-navy leading-relaxed">
              Transform your smile with safe, effective teeth whitening.
              <br className="hidden sm:block" />
              Enlighten & Boutique systems available - guaranteed results from
              £295.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green text-dental-navy font-semibold px-8 py-4"
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
                <Link href="/services/cosmetic/teeth-whitening">
                  View Whitening Options
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Guaranteed Results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Safe & Professional</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Fast Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Systems Available */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Professional Whitening Systems Available in Nottingham
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We offer the latest professional whitening systems with proven
              track records for safe, effective results.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Enlighten Whitening */}
              <Card className="p-8 border-2 border-dental-green hover:border-dental-green transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dental-green to-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-dental-green">
                    Enlighten Evolution 3
                  </CardTitle>
                  <p className="text-gray-600">
                    The only whitening system guaranteed to whiten to shade B1
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>
                        Guaranteed to reach shade B1 (the whitest natural tooth
                        shade)
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Minimal sensitivity - comfortable treatment</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Long-lasting results with proper maintenance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Combination of home and in-practice treatment</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-dental-green rounded-lg">
                    <p className="text-2xl font-bold text-dental-green">
                      From £495
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete treatment including trays
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Boutique Whitening */}
              <Card className="p-8 border-2 border-dental-green hover:border-dental-green transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dental-green to-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-dental-green">
                    Boutique Whitening
                  </CardTitle>
                  <p className="text-gray-600">
                    Professional whitening with excellent results
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Professional strength whitening gel</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Custom-made whitening trays for perfect fit</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>Excellent value for professional results</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-dental-green mt-0.5 flex-shrink-0" />
                      <span>
                        Home whitening system with professional support
                      </span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-dental-green rounded-lg">
                    <p className="text-2xl font-bold text-dental-green">
                      From £295
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete treatment including trays
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Whitening */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Pear Tree Dental for Teeth Whitening in Nottingham?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Certified Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our dentists are certified in professional whitening systems
                    with years of experience
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Safe Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Professional-grade materials and techniques ensure safe,
                    comfortable treatment
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Personalised Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tailored treatment plans based on your individual needs and
                    desired results
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    See noticeable improvement in just days with our
                    professional whitening systems
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Convenient Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Easily accessible from Nottingham city centre - just 15
                    minutes by car
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Flexible Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Evening and weekend appointments available to fit your busy
                    schedule
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Your Teeth Whitening Journey
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive assessment of your teeth and gums. We'll
                    discuss your goals, explain the available options, and
                    recommend the best whitening system for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Preparation</h3>
                  <p className="text-gray-600">
                    We'll take impressions to create your custom whitening trays
                    and ensure your teeth are clean and healthy before starting
                    treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Whitening Treatment
                  </h3>
                  <p className="text-gray-600">
                    Begin your whitening treatment with custom trays and
                    professional-grade gel. Some systems include an in-practice
                    activation session.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Follow-up & Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Regular check-ins to monitor progress and provide guidance
                    on maintaining your beautiful white smile long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for a Brighter, Whiter Smile?
            </h2>
            <p className="text-xl mb-8">
              Book your teeth whitening consultation today and discover how
              professional whitening can transform your confidence.
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
                <Link href="/contact">Book Online Consultation</Link>
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>
                <MapPin className="h-4 w-4 inline mr-1" />
                22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE
              </p>
              <p className="mt-2">
                Just 15 minutes from Nottingham city centre
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
