import React from "react";
import {
  Award,
  Baby,
  BookOpen,
  Car,
  CheckCircle,
  Clock,
  Gift,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Target,
  Users,
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
    "Children's Dentistry in Mapperley - Family Preventive Care | Pear Tree Dental",
  description:
    "Children's dentistry for Mapperley families. Preventive care, early intervention, and gentle treatment for children and teens just 15 minutes away. Family-friendly approach.",
  keywords: [
    "children's dentistry Mapperley",
    "kids dentist Mapperley",
    "family dentist Mapperley NG5",
    "pediatric dentistry Sherwood",
    "children's dental care Mapperley",
    "preventive dentistry families Mapperley",
    "teen dentistry Mapperley",
  ],
  openGraph: {
    title:
      "Children's Dentistry in Mapperley - Family Preventive Care | Pear Tree Dental",
    description:
      "Children's dentistry for Mapperley families. Preventive care and gentle treatment for children and teens just 15 minutes away.",
    url: "https://peartree.dental/mapperley/childrens-dentistry",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/childrens-dentistry",
  },
};

export default function MapperleyChildrensDentistryPage() {
  const mapperleyChildrensFAQs = [
    {
      question: "How far is children's dentistry from Mapperley families?",
      answer:
        "Pear Tree Dental is just 15 minutes from Mapperley via the A6097. We're experienced children's dentists providing gentle, anxiety-free care for kids, teens, and the whole family.",
    },
    {
      question:
        "At what age should I bring my Mapperley child for their first visit?",
      answer:
        "We recommend first visits by age 1 or within 6 months of the first tooth. Early visits help establish good habits and prevent dental anxiety. We make it fun and educational!",
    },
    {
      question: "Do you see the whole family together?",
      answer:
        "Yes! We love seeing families together. Siblings can support each other, and parents can receive care alongside their children. It's convenient and builds family dental habits.",
    },
    {
      question: "How do you help anxious children from Mapperley?",
      answer:
        "We use gentle techniques, explain everything in child-friendly terms, offer rewards, and go at each child's pace. Many anxious children become our most enthusiastic patients!",
    },
    {
      question:
        "What makes your children's service special for Mapperley families?",
      answer:
        "We combine child-friendly expertise, family preventive focus, convenient Mapperley access, and whole-family care. We're passionate about building lifelong healthy smiles.",
    },
  ];

  const ageGroups = [
    {
      ageRange: "Babies & Toddlers (0-3)",
      description: "First teeth, teething care, and establishing routines",
      services: [
        "First dental visits",
        "Teething guidance",
        "Fluoride advice",
        "Nutrition counseling",
      ],
      focus: "Building positive foundations",
      frequency: "Every 6 months",
      icon: Baby,
    },
    {
      ageRange: "Young Children (4-8)",
      description: "Primary teeth care and cavity prevention",
      services: [
        "Gentle cleanings",
        "Fluoride treatments",
        "Fissure sealants",
        "Hygiene education",
      ],
      focus: "Prevention and education",
      frequency: "Every 6 months",
      icon: Smile,
    },
    {
      ageRange: "Older Children (9-12)",
      description: "Mixed dentition and orthodontic assessment",
      services: [
        "Mixed teeth monitoring",
        "Orthodontic evaluation",
        "Sports guards",
        "Advanced hygiene",
      ],
      focus: "Transition period support",
      frequency: "Every 6 months",
      icon: Target,
    },
    {
      ageRange: "Teenagers (13-17)",
      description: "Adult teeth care and aesthetic concerns",
      services: [
        "Wisdom tooth monitoring",
        "Orthodontic treatment",
        "Whitening guidance",
        "Lifestyle advice",
      ],
      focus: "Independence and confidence",
      frequency: "Every 6 months",
      icon: GraduationCap,
    },
  ];

  const familyServices = [
    {
      service: "Family Preventive Care",
      description:
        "Comprehensive checkups and cleanings for all family members",
      benefits: [
        "Early problem detection",
        "Cavity prevention",
        "Gum health maintenance",
        "Oral cancer screening",
      ],
      ageRange: "All ages",
      icon: Shield,
    },
    {
      service: "Children's Orthodontics",
      description: "Early intervention and teen orthodontic treatment",
      benefits: [
        "Early problem correction",
        "Prevent complex issues",
        "Build confidence",
        "Sibling coordination",
      ],
      ageRange: "Ages 7+",
      icon: Sparkles,
    },
    {
      service: "Family Emergency Care",
      description: "Urgent dental care when your family needs it most",
      benefits: [
        "Same-day appointments",
        "Child trauma expertise",
        "Pain relief",
        "Anxiety management",
      ],
      ageRange: "All ages",
      icon: Heart,
    },
    {
      service: "Education & Prevention",
      description: "Teaching families how to maintain excellent oral health",
      benefits: [
        "Proper brushing technique",
        "Healthy diet guidance",
        "Habit modification",
        "Home care plans",
      ],
      ageRange: "All ages",
      icon: BookOpen,
    },
  ];

  const familyBenefits = [
    {
      icon: Users,
      title: "Whole Family Welcome",
      description:
        "From babies to grandparents - everyone receives expert, age-appropriate care",
    },
    {
      icon: Home,
      title: "Family Convenience",
      description:
        "Schedule multiple family members on the same day - perfect for busy Mapperley families",
    },
    {
      icon: Gift,
      title: "Child-Friendly Rewards",
      description:
        "Positive reinforcement and rewards help children love coming to the dentist",
    },
    {
      icon: Award,
      title: "Prevention Focus",
      description:
        "Emphasis on preventing problems rather than just treating them - saving families time and money",
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
            name: "Pear Tree Dental - Children's Dentistry in Mapperley",
            image:
              "https://peartree.dental/images/childrens-dentistry-mapperley.jpg",
            url: "https://peartree.dental/mapperley/childrens-dentistry",
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
              name: "Mapperley, NG5",
            },
            medicalSpecialty: "Pediatric Dentistry - Children's & Family Care",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£45-£200",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-blue-400 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley & NG5 Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Children's Dentistry in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Family Preventive Care Just 15 Minutes Away
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Mapperley — Gentle care for all ages
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Book Family Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🌟 Making dental visits fun for Mapperley children since 1995!
              </p>
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
                Why Mapperley Families Choose Our Children's Dentistry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Mapperley families, establishing healthy dental habits early
                sets children up for lifelong success. Our gentle,
                family-focused approach in Burton Joyce makes dental visits
                enjoyable while providing comprehensive preventive care for
                every family member, just 15 minutes from Mapperley.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Based Care Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Care for Every Mapperley Child
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From first teeth to teenage years, we provide specialized care
                tailored to each developmental stage, helping Mapperley families
                build lifelong healthy habits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(ageGroups || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-blue-400"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {group.ageRange}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {group.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">
                          {group.focus}
                        </Badge>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {group.frequency}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(group.services || []).map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {service}
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
                Building Healthy Smiles for Mapperley Families
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-600">
                    Gentle, anxiety-free approach
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-600">Prevention-focused care</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-600">Whole family welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Family Dental Services for Mapperley
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From preventive care to emergency treatment, we provide
                everything Mapperley families need for optimal oral health at
                every stage of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(familyServices || []).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-pear-primary">
                              {service.service}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {service.ageRange}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            {(service.benefits || []).map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Mapperley Families Say About Our Children's Care
              </h2>
            </div>

            <TestimonialBanner
              text="We've been taking our whole family to Pear Tree for 5 years now. My twins used to be terrified of dentists, but the team made them feel so comfortable. Now they actually look forward to their check-ups! The 15-minute drive from Mapperley is easy, and we can often book all four of us on the same day. They've helped us prevent problems with education and early intervention."
              author="Lisa K. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  25+ years
                </div>
                <p className="text-gray-600">Family dentistry experience</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  All ages
                </div>
                <p className="text-gray-600">From babies to grandparents</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Prevention
                </div>
                <p className="text-gray-600">Focus on healthy habits</p>
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
              Beautiful Smiles from Mapperley Children
            </h2>
            <p className="text-lg text-gray-600">
              See how early intervention and preventive care create healthy,
              confident smiles
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/children-before-case-1.webp"
              afterImage="/images/children-after-case-1.webp"
              beforeAlt="Before children's dental treatment - crowded baby teeth"
              afterAlt="After children's dental treatment - healthy developing smile"
              title="Early Orthodontic Intervention"
              description="10-year-old patient from Mapperley with guided tooth development"
              treatmentType="Children's Preventive Orthodontics"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Mapperley */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Children's Dentistry Questions from Mapperley Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley families about children's dental
                care and family dentistry
              </p>
            </div>

            <FAQSection faqs={mapperleyChildrensFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Family Visits from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Mapperley
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 6 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey time: 15 minutes
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">
                      Family-Friendly
                    </h4>
                    <p className="text-gray-600">
                      Perfect for families with children of all ages
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Mapperley,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Start Your Family's Healthy Smile Journey from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your children the gift of lifelong dental health. Book your
              family appointment from Mapperley — gentle, preventive care that
              makes dental visits enjoyable for everyone.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Dentistry Specialists
              </p>
              <p className="text-sm opacity-90">
                From babies to grandparents • Preventive focus • Gentle,
                anxiety-free care • Family appointments
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Book Family Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Gentle care for all ages</span>
              <span>✓ Prevention-focused approach</span>
              <span>✓ Family appointment scheduling</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
