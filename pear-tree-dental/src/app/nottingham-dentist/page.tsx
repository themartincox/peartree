import React from "react";
import {
  Award,
  Building2,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  MapPin,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Best Dentist Nottingham - Pear Tree Dental | Award-Winning Dental Care",
  description:
    "Discover why Pear Tree Dental is rated the best dentist in Nottingham. Modern facilities, expert team, membership plans from £10.95/month. Book your appointment today.",
  keywords: [
    "dentist Nottingham",
    "best dentist Nottingham",
    "dental practice Nottingham",
    "private dentist Nottingham",
    "family dentist Nottingham",
    "cosmetic dentist Nottingham",
    "emergency dentist Nottingham",
    "dental care Nottingham",
    "teeth cleaning Nottingham",
    "dental check up Nottingham",
  ],
  openGraph: {
    title:
      "Best Dentist Nottingham - Pear Tree Dental | Award-Winning Dental Care",
    description:
      "Discover why Pear Tree Dental is rated the best dentist in Nottingham. Modern facilities, expert team, and comprehensive dental care.",
    url: "https://peartree.dental/nottingham-dentist",
  },
  alternates: {
    canonical: "https://peartree.dental/nottingham-dentist",
  },
};

export default function NottinghamDentistPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://peartree.dental/nottingham-dentist",
            name: "Pear Tree Dental - Best Dentist Nottingham",
            image:
              "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            description:
              "Award-winning dental practice serving Nottingham. Comprehensive dental care with modern facilities, expert team, and affordable membership plans.",
            url: "https://peartree.dental/nottingham-dentist",
            telephone: "+441159312935",
            priceRange: "££",
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
            medicalSpecialty: [
              "General Dentistry",
              "Cosmetic Dentistry",
              "Orthodontics",
              "Dental Implants",
              "Emergency Dentistry",
            ],
            serviceArea: {
              "@type": "City",
              name: "Nottingham",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "245",
              bestRating: "5",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dental Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Dental Membership Plans",
                    description:
                      "Affordable membership plans from £10.95/month",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalProcedure",
                    name: "Emergency Dental Care",
                    description: "Same-day emergency appointments available",
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
              <Trophy className="h-16 w-16 text-dental-green" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Dentist in{" "}
              <span className="text-dental-green">Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-dental-navy/80 leading-relaxed">
              Award-winning dental care with modern facilities and expert team.
              <br className="hidden sm:block" />
              Comprehensive treatment from £10.95/month with membership plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Appointment: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </div>

            {/* Key Awards & Recognition */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Star className="h-6 w-6 text-dental-green" />
                <span className="text-2xl font-bold">4.9/5</span>
                <span className="text-sm">Patient Rating</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Award className="h-6 w-6 text-dental-green" />
                <span className="text-2xl font-bold">245+</span>
                <span className="text-sm">5-Star Reviews</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-6 w-6 text-dental-green" />
                <span className="text-2xl font-bold">2,000+</span>
                <span className="text-sm">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Trophy className="h-6 w-6 text-dental-green" />
                <span className="text-2xl font-bold">15+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Pear Tree Dental is Nottingham's Premier Choice
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover what sets us apart from other dental practices in
              Nottingham and why patients consistently choose us for their
              dental care.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    State-of-the-Art Facility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Latest digital dental technology
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Modern, comfortable treatment rooms
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Advanced sterilisation systems
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Relaxing patient environment
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Expert Dental Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Highly qualified dentists</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Ongoing professional development
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gentle, caring approach</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Specialist treatment options
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Affordable Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Plans from just £10.95/month
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No insurance hassles</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Transparent pricing</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Family plans available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Emergency Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Same-day emergency appointments
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        24/7 emergency advice line
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Pain relief treatments</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Worldwide emergency cover</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Convenient Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        15 minutes from Nottingham centre
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Free on-site parking</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Excellent transport links</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Accessible facilities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-dental-green">
                    Comprehensive Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        General & preventive dentistry
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cosmetic treatments</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Orthodontics & Invisalign</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dental implants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Dental Care Under One Roof
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">General Dentistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Check-ups & cleanings</li>
                    <li>• Fillings & restorations</li>
                    <li>• Root canal treatment</li>
                    <li>• Extractions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Cosmetic Dentistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Teeth whitening</li>
                    <li>• Porcelain veneers</li>
                    <li>• Composite bonding</li>
                    <li>• Smile makeovers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Orthodontics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Invisalign clear aligners</li>
                    <li>• ClearCorrect</li>
                    <li>• Adult orthodontics</li>
                    <li>• Teeth straightening</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Dental Implants</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Single tooth implants</li>
                    <li>• Multiple implants</li>
                    <li>• All-on-4 treatment</li>
                    <li>• Implant bridges</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Nottingham Patients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 text-dental-green mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Outstanding dental care! The team at Pear Tree Dental made
                    my treatment comfortable and stress-free. Best dentist I've
                    ever been to in Nottingham."
                  </p>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-gray-500">
                    Nottingham City Centre
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 text-dental-green mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The membership plan is fantastic value! Regular check-ups
                    and cleanings without the worry of unexpected bills. Highly
                    recommend to anyone in Nottingham."
                  </p>
                  <div className="font-semibold">James T.</div>
                  <div className="text-sm text-gray-500">West Bridgford</div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 text-dental-green mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Amazing cosmetic work! My smile makeover exceeded all
                    expectations. The whole family now comes here. Simply the
                    best dental practice in Nottingham."
                  </p>
                  <div className="font-semibold">Emma R.</div>
                  <div className="text-sm text-gray-500">Beeston</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
              >
                <Link href="/testimonials">Read More Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Pear Tree Dental Over Other Nottingham Practices?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-dental-green text-white">
                    <th className="py-4 px-6 text-left">Features</th>
                    <th className="py-4 px-6 text-center font-bold">
                      Pear Tree Dental
                    </th>
                    <th className="py-4 px-6 text-center">Other Practices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">
                      Membership Plans Available
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Limited
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">
                      Same-Day Emergency Appointments
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Variable
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Free Parking</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Rarely
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">
                      Latest Digital Technology
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Mixed
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">
                      Transparent Pricing
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Often Hidden
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">
                      Comfortable Environment
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Standard
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">
                      Family-Friendly Approach
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="w-5 h-5 text-dental-green mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      Variable
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Affordable Membership Plans for Nottingham Residents
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our membership plans make quality dental care accessible and
              affordable for everyone in Nottingham.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-dental-green">
                    Essential Care
                  </CardTitle>
                  <div className="text-3xl font-bold mt-2">£10.95</div>
                  <div className="text-gray-600">/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">1 check-up per year</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">1 hygiene visit per year</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">Worldwide emergency cover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green bg-dental-green/5 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dental-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-dental-green">
                    Complete Care
                  </CardTitle>
                  <div className="text-3xl font-bold mt-2">£19.95</div>
                  <div className="text-gray-600">/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">2 check-ups per year</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">2 hygiene visits per year</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">Worldwide emergency cover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-dental-green hover:border-dental-green/40 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-dental-green">
                    Family Plan
                  </CardTitle>
                  <div className="text-3xl font-bold mt-2">£49.50</div>
                  <div className="text-gray-600">/month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">
                        Covers 2 adults + children
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">Complete care benefits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">
                        Family appointment priority
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold px-8 py-4"
              >
                <Link href="/membership">View All Membership Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Nottingham's Best Dental Care?
            </h2>
            <p className="text-xl mb-8">
              Join over 2,000 satisfied patients who trust Pear Tree Dental for
              their dental health. Book your appointment today and discover the
              difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                <Link href="/contact">Book Online Appointment</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Practice Location
                </h3>
                <p className="text-sm opacity-90">
                  22 Nottingham Road
                  <br />
                  Burton Joyce
                  <br />
                  Nottinghamshire NG14 5AE
                  <br />
                  <br />
                  Just 15 minutes from Nottingham city centre
                  <br />
                  Free parking available
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Opening Hours
                </h3>
                <div className="text-sm opacity-90 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:30am - 5:30pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:30am - 2:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-2 text-xs">
                    Emergency appointments available outside hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
