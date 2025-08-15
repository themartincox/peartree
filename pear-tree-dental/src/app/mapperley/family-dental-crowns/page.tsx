import React from "react";
import {
  Award,
  Baby,
  CheckCircle,
  Crown,
  Gem,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Monitor,
  Navigation,
  Phone,
  Star,
  Target,
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
    "Family Dental Crowns in Mapperley - Age-Appropriate Restorations | Pear Tree Dental",
  description:
    "Family dental crowns for affluent Mapperley families. Age-appropriate crown solutions, premium materials, and coordinated family care just down the road from Mapperley.",
  keywords: [
    "family dental crowns Mapperley",
    "dental crowns Mapperley families",
    "premium crowns Mapperley NG5",
    "age-appropriate crowns Sherwood",
    "ceramic crowns Mapperley",
    "family restorations Mapperley",
    "quality dental crowns Mapperley",
  ],
  openGraph: {
    title:
      "Family Dental Crowns in Mapperley - Age-Appropriate Restorations | Pear Tree Dental",
    description:
      "Family dental crowns for affluent Mapperley families. Age-appropriate crown solutions and premium materials just down the road.",
    url: "https://peartree.dental/mapperley/family-dental-crowns",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/family-dental-crowns",
  },
};

export default function MapperleyFamilyDentalCrownsPage() {
  const mapperleyCrownsFAQs = [
    {
      question: "How convenient are family dental crowns from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in family crown treatments, providing age-appropriate solutions with premium materials and coordinated care for all family members.",
    },
    {
      question: "What crown options work best for different family members?",
      answer:
        "We offer ceramic crowns for aesthetic areas, gold crowns for durability, and age-appropriate options. Children might need stainless steel crowns, teens prefer ceramic, adults choose between ceramic and gold, and seniors focus on comfort and function.",
    },
    {
      question:
        "Can you coordinate crown treatments for multiple family members?",
      answer:
        "Absolutely! We excel at family coordination, scheduling multiple crown appointments, managing different treatment timelines, and ensuring everyone's needs are met efficiently and effectively.",
    },
    {
      question:
        "What makes your crown service special for affluent Mapperley families?",
      answer:
        "We combine premium crown materials, same-day CEREC technology, expert craftsmanship, family coordination, and convenient location. Our focus on quality and excellence aligns with Mapperley families' expectations.",
    },
    {
      question: "Do you offer same-day crowns for busy Mapperley families?",
      answer:
        "Yes! Our CEREC same-day crown technology means many crowns can be completed in a single visit, perfect for busy Mapperley families who value efficiency and convenience.",
    },
  ];

  const crownTypes = [
    {
      crownType: "Premium Ceramic Crowns",
      description: "Natural-looking crowns for aesthetic perfection",
      benefits: [
        "Indistinguishable from natural teeth",
        "Stain resistant",
        "Biocompatible",
        "Long-lasting",
      ],
      bestFor: "Front teeth and visible areas",
      durability: "15-20 years",
      price: "From £850",
      icon: Gem,
      highlight: "Most Popular",
    },
    {
      crownType: "Gold Crowns",
      description: "Premium gold restorations for ultimate durability",
      benefits: [
        "Exceptional durability",
        "Kind to opposing teeth",
        "Precise fit",
        "Time-tested",
      ],
      bestFor: "Back teeth requiring strength",
      durability: "20+ years",
      price: "From £950",
      icon: Award,
      highlight: "Most Durable",
    },
    {
      crownType: "CEREC Same-Day Crowns",
      description: "Computer-designed crowns completed in one visit",
      benefits: [
        "Same-day completion",
        "Perfect digital fit",
        "No temporary crown",
        "Convenient",
      ],
      bestFor: "Busy families wanting efficiency",
      durability: "15+ years",
      price: "From £750",
      icon: Zap,
      highlight: "Same Day",
    },
    {
      crownType: "Pediatric Crowns",
      description: "Child-friendly crowns for young patients",
      benefits: [
        "Gentle procedures",
        "Durable materials",
        "Tooth-colored options",
        "Child-appropriate",
      ],
      bestFor: "Children with damaged teeth",
      durability: "Until tooth loss",
      price: "From £280",
      icon: Baby,
      highlight: "Child-Friendly",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Age-Appropriate Solutions",
      description:
        "Crown options tailored to each family member's age and needs",
      value: "Optimal outcomes for all",
      icon: Target,
    },
    {
      benefit: "Premium Materials",
      description: "High-quality ceramics, gold, and advanced materials",
      value: "Long-term investment",
      icon: Gem,
    },
    {
      benefit: "Same-Day Options",
      description: "CEREC technology for efficient treatment",
      value: "Time-saving convenience",
      icon: Zap,
    },
    {
      benefit: "Family Coordination",
      description: "Synchronized treatment planning and scheduling",
      value: "Convenient family care",
      icon: Users,
    },
  ];

  const generationalNeeds = [
    {
      generation: "Children (6-12)",
      commonNeeds: "Badly damaged primary or early permanent teeth",
      crownOptions: [
        "Stainless steel crowns",
        "Tooth-colored pediatric crowns",
        "Space maintainers",
      ],
      considerations: [
        "Gentle procedures",
        "Quick appointments",
        "Future tooth development",
        "Parent comfort",
      ],
      specialFeatures: "Child-friendly environment and techniques",
      icon: Baby,
    },
    {
      generation: "Teenagers (13-17)",
      commonNeeds: "Trauma, large cavities, or failed fillings",
      crownOptions: [
        "Ceramic crowns for aesthetics",
        "Gold for back teeth",
        "Same-day CEREC",
      ],
      considerations: [
        "Aesthetic concerns",
        "School schedules",
        "Sports activities",
        "Social confidence",
      ],
      specialFeatures: "Image-conscious aesthetic solutions",
      icon: GraduationCap,
    },
    {
      generation: "Adults (25-55)",
      commonNeeds: "Failed restorations, root canal treatments, wear",
      crownOptions: [
        "Premium ceramic",
        "Gold crowns",
        "Same-day CEREC",
        "Full mouth rehabilitation",
      ],
      considerations: [
        "Professional appearance",
        "Time constraints",
        "Long-term investment",
        "Family coordination",
      ],
      specialFeatures: "Professional efficiency and excellence",
      icon: Users,
    },
    {
      generation: "Seniors (55+)",
      commonNeeds: "Extensive wear, failing restorations, comfort",
      crownOptions: [
        "Comfortable ceramic",
        "Durable gold",
        "Implant crowns",
        "Full rehabilitation",
      ],
      considerations: [
        "Comfort priority",
        "Eating function",
        "Speech clarity",
        "Health considerations",
      ],
      specialFeatures: "Comfort-focused comprehensive care",
      icon: Heart,
    },
  ];

  const crownTechnologies = [
    {
      technology: "CEREC Same-Day Crowns",
      description:
        "Computer-aided design and manufacturing for precise, immediate results",
      advantages: [
        "Complete in one visit",
        "Perfect digital fit",
        "No impressions needed",
        "Immediate function",
      ],
      familyBenefit: "Perfect for busy Mapperley families",
    },
    {
      technology: "Digital Impressions",
      description:
        "Comfortable, accurate digital scans replace messy impressions",
      advantages: [
        "More comfortable",
        "Highly accurate",
        "Faster process",
        "Better patient experience",
      ],
      familyBenefit: "Especially good for children and anxious patients",
    },
    {
      technology: "3D Smile Design",
      description: "Preview your crown results before treatment begins",
      advantages: [
        "See before treatment",
        "Perfect aesthetic planning",
        "Predictable results",
        "Patient confidence",
      ],
      familyBenefit: "Ensures family satisfaction with aesthetic outcomes",
    },
    {
      technology: "Premium Materials",
      description: "High-grade ceramics and gold for optimal results",
      advantages: [
        "Superior durability",
        "Natural appearance",
        "Biocompatible",
        "Long-lasting",
      ],
      familyBenefit: "Investment-grade quality for discerning families",
    },
  ];

  const treatmentProcess = [
    {
      step: "Family Consultation",
      description:
        "Comprehensive assessment for all family members needing crowns",
      duration: "60-90 minutes",
      activities: [
        "Digital scans",
        "Treatment planning",
        "Material selection",
        "Scheduling coordination",
      ],
    },
    {
      step: "Preparation",
      description: "Gentle tooth preparation with comfort-focused techniques",
      duration: "45-60 minutes per crown",
      activities: [
        "Local anesthesia",
        "Tooth reshaping",
        "Digital impressions",
        "Temporary placement",
      ],
    },
    {
      step: "Fabrication",
      description: "Expert laboratory crafting or same-day CEREC creation",
      duration: "Same day or 1-2 weeks",
      activities: [
        "Precise manufacturing",
        "Color matching",
        "Quality testing",
        "Final adjustments",
      ],
    },
    {
      step: "Placement",
      description: "Careful crown placement and bite adjustment",
      duration: "30-45 minutes",
      activities: [
        "Crown fitting",
        "Bite adjustment",
        "Final polishing",
        "Care instructions",
      ],
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
            name: "Pear Tree Dental - Family Dental Crowns in Mapperley",
            image:
              "https://peartree.dental/images/family-dental-crowns-mapperley.jpg",
            url: "https://peartree.dental/mapperley/family-dental-crowns",
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
            medicalSpecialty: "Restorative Dentistry - Family Dental Crowns",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£280-£950",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-amber-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Dental Crowns in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Age-Appropriate Premium Restorations Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Premium crowns & same-day
                options
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Book Crown Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                👑 Premium crown solutions for every family member!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Crown Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families appreciate quality craftsmanship and
                precision. Our family crown approach ensures each member
                receives the perfect restoration for their age, lifestyle, and
                aesthetic needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-amber-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-amber-100 text-amber-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-amber-50 rounded-lg p-8">
              <Crown className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Premium Family Crown Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families value quality, precision,
                and efficiency. Our crown solutions combine the finest materials
                with expert craftsmanship and family-focused coordination.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    Premium materials
                  </div>
                  <p className="text-gray-600">
                    Ceramic, gold, and advanced options
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    Same-day options
                  </div>
                  <p className="text-gray-600">CEREC technology available</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crown Types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Crown Options for Every Mapperley Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From children's protective crowns to adults' aesthetic
                restorations, we provide the perfect crown solution for each
                family member's unique needs and preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(crownTypes || []).map((crown, index) => {
                const IconComponent = crown.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-amber-400 relative"
                  >
                    {crown.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-amber-600 text-white">
                          {crown.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {crown.crownType}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {crown.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {crown.price}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {crown.bestFor}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {crown.durability}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(crown.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
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
          </div>
        </div>
      </section>

      {/* Generational Crown Needs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Crown Solutions for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each generation has unique crown requirements based on age,
                lifestyle, and dental needs. We customize our approach to ensure
                optimal outcomes for every family member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(generationalNeeds || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.generation}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.commonNeeds}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-amber-600 text-sm mb-1">
                            Crown Options:
                          </h4>
                          <ul className="space-y-1">
                            {(group.crownOptions || []).map((option, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-center gap-1"
                              >
                                <CheckCircle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-600 text-sm mb-1">
                            Considerations:
                          </h4>
                          <ul className="space-y-1">
                            {(group.considerations || []).map(
                              (consideration, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <Star className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                  {consideration}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-sm text-amber-700 font-medium">
                            {group.specialFeatures}
                          </p>
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

      {/* Advanced Technologies */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Advanced Crown Technology for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We invest in cutting-edge technology to provide Mapperley
                families with the most precise, comfortable, and efficient crown
                treatments available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(crownTechnologies || []).map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <Monitor className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {tech.technology}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {tech.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {(tech.advantages || []).map((advantage, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {advantage}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-sm text-amber-700 font-medium">
                            {tech.familyBenefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Crown Treatment Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures optimal coordination when
                treating multiple family members, minimizing appointments while
                maximizing comfort and results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(treatmentProcess || []).map((step, index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.step}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <Badge variant="outline" className="mb-4">
                      {step.duration}
                    </Badge>
                    <div className="space-y-1">
                      {(step.activities || []).map((activity, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-gray-600 flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                What Mapperley Families Say About Our Crown Care
              </h2>
            </div>

            <TestimonialBanner
              text="Our family needed multiple crowns after various dental issues. Being just down the road from Mapperley made coordination so easy. My daughter got a beautiful ceramic crown for her front tooth after an accident, my husband needed gold crowns for his back teeth, and I had same-day CEREC crowns. The quality is exceptional - you can't tell which teeth have crowns! The team coordinated everything perfectly around our busy schedules."
              author="Amanda R. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  Premium quality
                </div>
                <p className="text-gray-600">
                  Ceramic, gold, and advanced materials
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  Same-day options
                </div>
                <p className="text-gray-600">CEREC technology available</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  Family coordination
                </div>
                <p className="text-gray-600">
                  Multiple treatments scheduled efficiently
                </p>
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
              Exceptional Crown Results from Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the beautiful crown transformations achieved by affluent
              Mapperley families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-crowns-before-case-1.webp"
              afterImage="/images/family-crowns-after-case-1.webp"
              beforeAlt="Before family dental crowns - damaged and discolored teeth"
              afterAlt="After family dental crowns - beautiful, natural-looking restorations"
              title="Family Crown Restoration"
              description="Mother and teenage daughter from Mapperley with premium ceramic crowns"
              treatmentType="Family Crown Program"
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
                Family Crown Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about family
                dental crown treatments
              </p>
            </div>

            <FAQSection faqs={mapperleyCrownsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Premium Crown Care Just Down the Road from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Mapperley
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head down the A6097 towards Lowdham</p>
                    <p>2. Continue for just 6 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey: Just down the road!
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <Crown className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h4 className="font-bold text-amber-700 mb-2">
                      Premium Crown Care
                    </h4>
                    <p className="text-gray-600">
                      Age-appropriate family crown solutions
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
                className="bg-pear-primary hover:bg-pear-primary text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Restore Your Family's Smiles with Premium Dental Crowns from
              Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your family the gift of beautiful, functional smiles with
              premium crown solutions. Book your family crown consultation from
              Mapperley with age-appropriate options and expert care.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Crown Specialists
              </p>
              <p className="text-sm opacity-90">
                Premium materials • Same-day options • Age-appropriate solutions
                • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Book Crown Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Premium ceramic & gold options</span>
              <span>✓ Same-day CEREC available</span>
              <span>✓ Family coordination included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
