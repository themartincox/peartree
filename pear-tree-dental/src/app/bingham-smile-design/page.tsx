import React from "react";
import {
  ArrowRight,
  Award,
  Baby,
  Camera,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Eye,
  Heart,
  MapPin,
  Palette,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Smile Design Bingham - Complete Smile Makeovers | Pear Tree Dental",
  description:
    "Comprehensive smile design for Bingham families. Veneers, crowns, whitening, and smile makeovers. Transform your family's smiles with expert cosmetic dentistry.",
  keywords: [
    "smile design Bingham",
    "smile makeover Bingham",
    "family cosmetic dentistry Bingham",
    "veneers Bingham",
    "smile transformation Bingham",
    "complete smile makeover Bingham",
  ],
  openGraph: {
    title: "Family Smile Design in Bingham - Complete Smile Makeovers",
    description:
      "Transform your family's smiles with comprehensive smile design in Bingham. Expert cosmetic dentistry for all ages.",
    url: "https://peartree.dental/bingham-smile-design",
  },
  alternates: {
    canonical: "https://peartree.dental/bingham-smile-design",
  },
};

export default function BinghamSmileDesignPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/bingham-smile-design",
            name: "Smile Design - Bingham",
            description:
              "Comprehensive smile design and makeover treatments for Bingham families using advanced cosmetic dentistry techniques.",
            provider: {
              "@type": "Dentist",
              name: "Pear Tree Dental",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Street",
                addressLocality: "Burton Joyce",
                addressRegion: "Nottinghamshire",
                postalCode: "NG14 5DP",
                addressCountry: "GB",
              },
              telephone: "0115 931 2935",
            },
            areaServed: {
              "@type": "Place",
              name: "Bingham, Nottinghamshire",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-green to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-dental-green" />
              <span className="text-dental-green font-medium">Bingham</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Family Smile Design
              <span className="text-dental-green block">for Bingham</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your family's smiles with comprehensive smile design and
              makeovers. Expert cosmetic dentistry combining veneers, crowns,
              whitening, and alignment for beautiful, confident smiles that last
              a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Design Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/bingham">
                  <MapPin className="h-5 w-5 mr-2" />
                  Bingham Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for Bingham */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="bg-dental-green text-dental-green border-dental-green"
              >
                <Palette className="w-4 h-4 mr-1" />
                Digital Design Preview
              </Badge>
              <Badge
                variant="secondary"
                className="bg-pear-gold text-pear-gold border-pear-gold"
              >
                <Car className="w-4 h-4 mr-1" />8 mins from Bingham
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white text-white border-white"
              >
                <Users className="w-4 h-4 mr-1" />
                Family Makeovers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Smile Design for Bingham Families
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From subtle family enhancements to complete smile
                transformations, our expert team creates beautiful,
                natural-looking results for all ages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green bg-gradient-to-br from-white to-dental-green">
                <CardHeader className="text-center pb-4">
                  <Palette className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">
                    Digital Smile Design
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-dental-green text-dental-green"
                  >
                    See Before You Start
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    From £295
                  </p>
                  <p className="text-gray-600 mb-4">
                    Preview your family's new smiles before treatment begins
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3D digital smile previews</p>
                    <p>• Family treatment planning</p>
                    <p>• Multiple design options</p>
                    <p>• Detailed cost breakdowns</p>
                  </div>
                  <Button className="w-full bg-dental-green hover:bg-dental-green text-white">
                    Book Design Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold bg-gradient-to-br from-white to-pear-gold">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Family Makeover</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-gold text-pear-gold"
                  >
                    Complete Transformation
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">
                    From £3,995
                  </p>
                  <p className="text-gray-600 mb-4">
                    Comprehensive smile transformation packages
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Multiple family members</p>
                    <p>• Coordinated treatment plans</p>
                    <p>• Teeth whitening included</p>
                    <p>• Complete smile redesigns</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy"
                  >
                    Book Family Makeover
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary bg-gradient-to-br from-white to-pear-primary">
                <CardHeader className="text-center pb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Enhancement Package</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-primary text-pear-primary"
                  >
                    Natural Improvements
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">
                    From £1,595
                  </p>
                  <p className="text-gray-600 mb-4">
                    Gentle improvements for natural enhancement
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Composite bonding</p>
                    <p>• Professional whitening</p>
                    <p>• Minor reshaping</p>
                    <p>• Family-friendly approach</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                  >
                    Book Enhancement Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Process */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Family's Smile Design Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive, family-friendly process designed to create
                perfect smiles for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(
                [
                  {
                    step: "1",
                    title: "Family Consultation",
                    description:
                      "Comprehensive assessment of each family member's smile goals",
                    icon: Users,
                    time: "75 minutes",
                  },
                  {
                    step: "2",
                    title: "Digital Design",
                    description:
                      "3D modeling and preview of everyone's new smile options",
                    icon: Camera,
                    time: "60 minutes",
                  },
                  {
                    step: "3",
                    title: "Treatment Planning",
                    description:
                      "Coordinated family treatment plans with flexible scheduling",
                    icon: CheckCircle,
                    time: "45 minutes",
                  },
                  {
                    step: "4",
                    title: "Smile Creation",
                    description:
                      "Precise implementation of each personalized smile design",
                    icon: Crown,
                    time: "2-8 visits",
                  },
                ] || []
              ).map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center border border-dental-green"
                  >
                    <div className="w-12 h-12 bg-dental-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="h-8 w-8 mx-auto text-dental-green mb-4" />
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-dental-green text-dental-green text-xs"
                    >
                      {step.time}
                    </Badge>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Family Smile Design Treatment Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple treatment approaches suitable for all family members,
                tailored to individual needs and budgets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: "Porcelain Veneers",
                    description:
                      "Ultra-thin porcelain shells for dramatic transformation",
                    icon: Crown,
                    features: [
                      "Natural appearance",
                      "Stain resistant",
                      "Long-lasting",
                      "Adult suitability",
                    ],
                    price: "From £795 per tooth",
                    popular: "Premium choice",
                  },
                  {
                    title: "Composite Bonding",
                    description: "Sculpted resin perfect for teens and adults",
                    icon: Palette,
                    features: [
                      "Same-day treatment",
                      "Affordable option",
                      "Reversible",
                      "Teen-friendly",
                    ],
                    price: "From £295 per tooth",
                    popular: "Family favorite",
                  },
                  {
                    title: "Family Whitening",
                    description: "Professional whitening for the whole family",
                    icon: Sparkles,
                    features: [
                      "Safe for teens",
                      "Immediate results",
                      "Take-home options",
                      "Family packages",
                    ],
                    price: "From £295 per person",
                    popular: "Great starting point",
                  },
                  {
                    title: "Children's Bonding",
                    description:
                      "Gentle cosmetic improvements for young smiles",
                    icon: Baby,
                    features: [
                      "Age-appropriate",
                      "Conservative approach",
                      "Build confidence",
                      "Pain-free",
                    ],
                    price: "From £195 per tooth",
                    popular: "Confidence boost",
                  },
                  {
                    title: "Clear Aligners",
                    description: "Invisible teeth straightening for all ages",
                    icon: Eye,
                    features: [
                      "Nearly invisible",
                      "Removable",
                      "Family treatment",
                      "All ages suitable",
                    ],
                    price: "From £1,995",
                    popular: "Family choice",
                  },
                  {
                    title: "Smile Maintenance",
                    description: "Ongoing care to keep family smiles beautiful",
                    icon: Heart,
                    features: [
                      "Regular check-ups",
                      "Touch-up treatments",
                      "Family hygiene",
                      "Preventive care",
                    ],
                    price: "From £45 per visit",
                    popular: "Maintain results",
                  },
                ] || []
              ).map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border border-dental-green hover:border-dental-green transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">
                            {treatment.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs mt-1 bg-dental-green text-dental-green"
                          >
                            {treatment.popular}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600">{treatment.description}</p>
                      <div className="text-sm font-semibold text-pear-gold">
                        {treatment.price}
                      </div>
                      <ul className="space-y-1">
                        {(treatment.features || []).map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-center space-x-2"
                          >
                            <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Family Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Expert Family Smile Design from Bingham
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert cosmetic dentistry without the city center hassle.
                Convenient access and family-focused care for Bingham residents
                of all ages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">
                    Family-Friendly Location
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 8 minutes from Bingham with easy parking and
                  family-friendly facilities.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Direct A52 route</p>
                  <p>• Family parking available</p>
                  <p>• Comfortable waiting areas</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Family Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Experienced cosmetic dentists with expertise in treating all
                  family members, from children to adults.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Pediatric cosmetic experience</p>
                  <p>• Family treatment coordination</p>
                  <p>• Age-appropriate approaches</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">
                    Flexible Family Scheduling
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Family-friendly appointment times including after school,
                  weekends, and coordinated family sessions.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• After school appointments</p>
                  <p>• Family appointment blocks</p>
                  <p>• Flexible treatment scheduling</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Family Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Bingham Family Smile Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from Bingham families who've transformed their
                confidence with smile design
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "The Robinson Family",
                    location: "Bingham",
                    text: "All four of us had smile makeovers! The coordination was fantastic and seeing everyone's smiles transform together was amazing. Couldn't be happier.",
                    rating: 5,
                    treatment: "Complete Family Makeover",
                  },
                  {
                    name: "Jenny & Sophie Mason",
                    location: "Bingham",
                    text: "Mother and daughter bonding treatment was perfect. Sophie's confidence has soared and I love my new smile too. Great family experience.",
                    rating: 5,
                    treatment: "Family Bonding Enhancement",
                  },
                  {
                    name: "The Thompson Family",
                    location: "Bingham",
                    text: "From consultation to final results, the team made every family member feel special. Our family photos look incredible now!",
                    rating: 5,
                    treatment: "Digital Smile Design Family Package",
                  },
                ] || []
              ).map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-dental-green">
                      {([...Array(review.rating)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{review.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-dental-green">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {review.location}
                      </div>
                      <div className="text-sm text-pear-gold font-medium">
                        {review.treatment}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Design Your Family's Perfect Smiles?
            </h2>
            <p className="text-xl mb-8 text-white">
              Join Bingham families who've discovered the confidence that comes
              with beautifully designed smiles. Book your comprehensive family
              smile design consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white text-dental-green font-semibold px-8 py-4"
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
                <Link href="/bingham">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  More Bingham Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
