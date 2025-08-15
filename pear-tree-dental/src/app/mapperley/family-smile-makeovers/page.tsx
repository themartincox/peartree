import React from "react";
import {
  Award,
  Briefcase,
  CheckCircle,
  Gem,
  GraduationCap,
  Home,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Sparkles,
  Star,
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
    "Family Smile Makeovers in Mapperley - Complete Aesthetic Transformations | Pear Tree Dental",
  description:
    "Family smile makeovers for affluent Mapperley families. Complete aesthetic transformations, coordinated family treatments, and investment-level results just down the road.",
  keywords: [
    "family smile makeovers Mapperley",
    "smile makeover Mapperley families",
    "complete smile transformation Mapperley NG5",
    "family aesthetic dentistry Sherwood",
    "coordinated smile makeovers Mapperley",
    "premium smile design Mapperley",
    "investment smile transformation Mapperley",
  ],
  openGraph: {
    title:
      "Family Smile Makeovers in Mapperley - Complete Aesthetic Transformations | Pear Tree Dental",
    description:
      "Family smile makeovers for affluent Mapperley families. Complete transformations and coordinated care just down the road.",
    url: "https://peartree.dental/mapperley/family-smile-makeovers",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/family-smile-makeovers",
  },
};

export default function MapperleyFamilySmileMakeoversPage() {
  const mapperleyMakeoverFAQs = [
    {
      question: "How convenient are family smile makeovers from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in coordinated family smile makeovers, providing complete aesthetic transformations with investment-level results and family-centered planning.",
    },
    {
      question:
        "Can you coordinate smile makeovers for multiple family members?",
      answer:
        "Absolutely! We excel at family smile makeover coordination, planning comprehensive transformations for multiple family members, timing treatments optimally, and ensuring cohesive aesthetic outcomes that complement each family member.",
    },
    {
      question: "What's included in a complete family smile makeover?",
      answer:
        "Comprehensive assessment, digital smile design, combination treatments (veneers, crowns, whitening, orthodontics), family coordination, phased treatment planning, and ongoing aesthetic maintenance for optimal long-term results.",
    },
    {
      question:
        "What makes your smile makeovers special for affluent Mapperley families?",
      answer:
        "We combine cutting-edge technology, premium materials, artistic expertise, family coordination, and convenient location. Our investment-level approach ensures exceptional results that reflect Mapperley families' quality expectations.",
    },
    {
      question:
        "How do you ensure natural-looking results for family makeovers?",
      answer:
        "We use advanced digital smile design, consider facial harmony, age-appropriate aesthetics, family coordination, and natural-looking materials to ensure each family member achieves beautiful, authentic-looking results.",
    },
  ];

  const makeoverTypes = [
    {
      makeoverType: "Complete Family Transformation",
      description: "Comprehensive smile makeovers for entire family units",
      treatments: [
        "Digital smile design",
        "Porcelain veneers",
        "Crown combinations",
        "Whitening coordination",
      ],
      timeline: "6-12 months",
      investment: "From £15,000",
      icon: Users,
      highlight: "Most Comprehensive",
    },
    {
      makeoverType: "Parent Professional Makeover",
      description: "Executive-level transformations for working parents",
      treatments: [
        "Premium veneers",
        "Gum contouring",
        "Professional whitening",
        "Aesthetic crowns",
      ],
      timeline: "3-6 months",
      investment: "From £8,500",
      icon: Briefcase,
      highlight: "Professional Focus",
    },
    {
      makeoverType: "Teen Confidence Makeover",
      description: "Age-appropriate transformations for teenagers",
      treatments: [
        "Orthodontic correction",
        "Composite bonding",
        "Safe whitening",
        "Confidence building",
      ],
      timeline: "12-18 months",
      investment: "From £4,200",
      icon: GraduationCap,
      highlight: "Teen Specialist",
    },
    {
      makeoverType: "Multi-Generational Makeover",
      description: "Coordinated makeovers across three generations",
      treatments: [
        "Age-appropriate solutions",
        "Family coordination",
        "Phased treatments",
        "Comprehensive care",
      ],
      timeline: "12-24 months",
      investment: "From £25,000",
      icon: Award,
      highlight: "Ultimate Investment",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Complete Transformation",
      description:
        "Comprehensive aesthetic makeovers that address all smile concerns",
      value: "Life-changing results",
      icon: Sparkles,
    },
    {
      benefit: "Family Coordination",
      description:
        "Synchronized treatments and aesthetics across family members",
      value: "Harmonious outcomes",
      icon: Users,
    },
    {
      benefit: "Investment-Level Quality",
      description: "Premium materials and techniques for lasting excellence",
      value: "Exceptional durability",
      icon: Gem,
    },
    {
      benefit: "Artistic Excellence",
      description: "Expert aesthetic design and natural-looking results",
      value: "Beautiful authenticity",
      icon: Palette,
    },
  ];

  const makeoverComponents = [
    {
      component: "Digital Smile Design",
      description: "Advanced 3D planning and preview technology",
      benefits: [
        "See results before treatment",
        "Perfect aesthetic planning",
        "Family coordination",
        "Predictable outcomes",
      ],
      investmentLevel: "Foundation technology for all makeovers",
    },
    {
      component: "Premium Porcelain Veneers",
      description: "Ultra-thin, custom-crafted ceramic veneers",
      benefits: [
        "Natural translucency",
        "Stain resistance",
        "Perfect fit",
        "Lifetime aesthetics",
      ],
      investmentLevel: "Premium aesthetic solution",
    },
    {
      component: "Aesthetic Crown Restorations",
      description: "High-end ceramic crowns for damaged teeth",
      benefits: [
        "Complete restoration",
        "Natural appearance",
        "Optimal function",
        "Long-term durability",
      ],
      investmentLevel: "Comprehensive restoration",
    },
    {
      component: "Professional Gum Contouring",
      description: "Precise gum reshaping for perfect smile proportions",
      benefits: [
        "Improved proportions",
        "Enhanced aesthetics",
        "Perfect symmetry",
        "Confident smiling",
      ],
      investmentLevel: "Advanced aesthetic refinement",
    },
    {
      component: "Coordinated Whitening",
      description: "Professional whitening systems tailored to family needs",
      benefits: [
        "Consistent results",
        "Family coordination",
        "Safe application",
        "Long-lasting brightness",
      ],
      investmentLevel: "Essential aesthetic enhancement",
    },
    {
      component: "Orthodontic Integration",
      description: "Clear aligner systems integrated with aesthetic treatments",
      benefits: [
        "Perfect positioning",
        "Aesthetic improvement",
        "Function optimization",
        "Treatment coordination",
      ],
      investmentLevel: "Comprehensive alignment solution",
    },
  ];

  const familyTimeline = [
    {
      phase: "Comprehensive Family Assessment",
      description:
        "Detailed evaluation and digital planning for all family members",
      duration: "2-3 appointments",
      activities: [
        "Individual assessments",
        "Digital smile design",
        "Family coordination planning",
        "Investment consultation",
      ],
    },
    {
      phase: "Treatment Preparation",
      description: "Coordinated preparation phase for optimal results",
      duration: "2-4 weeks",
      activities: [
        "Orthodontic planning",
        "Gum health optimization",
        "Color coordination",
        "Timeline scheduling",
      ],
    },
    {
      phase: "Active Transformation",
      description: "Coordinated treatment implementation across family",
      duration: "3-12 months",
      activities: [
        "Phased treatments",
        "Family coordination",
        "Progress monitoring",
        "Aesthetic refinement",
      ],
    },
    {
      phase: "Final Aesthetic Refinement",
      description: "Perfect finishing and family coordination",
      duration: "2-4 weeks",
      activities: [
        "Final adjustments",
        "Aesthetic perfection",
        "Family photo sessions",
        "Maintenance planning",
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
            name: "Pear Tree Dental - Family Smile Makeovers in Mapperley",
            image:
              "https://peartree.dental/images/family-smile-makeovers-mapperley.jpg",
            url: "https://peartree.dental/mapperley/family-smile-makeovers",
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
            medicalSpecialty: "Cosmetic Dentistry - Family Smile Makeovers",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£4200-£25000",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Smile Makeovers in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Complete Aesthetic Transformations Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Investment-level smile
                transformations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Makeover Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                ✨ Complete aesthetic transformations for discerning Mapperley
                families!
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
                Investment-Level Smile Makeovers for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families understand that a smile makeover is
                a significant investment in confidence, success, and quality of
                life. Our comprehensive approach delivers exceptional,
                life-changing results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-purple-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-purple-100 text-purple-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-purple-50 rounded-lg p-8">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Complete Family Aesthetic Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families seek excellence in every
                aspect of life. Our smile makeovers combine cutting-edge
                technology, artistic expertise, and premium materials for
                investment-level results.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Digital design
                  </div>
                  <p className="text-gray-600">See results before treatment</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Family coordination
                  </div>
                  <p className="text-gray-600">Harmonious family aesthetics</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeover Types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Makeover Solutions for Every Mapperley Family
                Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From individual transformations to complete family makeovers, we
                provide investment-level solutions tailored to each family
                member's needs and aesthetic goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(makeoverTypes || []).map((makeover, index) => {
                const IconComponent = makeover.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-purple-400 relative"
                  >
                    {makeover.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white">
                          {makeover.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {makeover.makeoverType}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {makeover.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {makeover.investment}
                        </p>
                        <Badge variant="outline" className="mb-4">
                          {makeover.timeline}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {(makeover.treatments || []).map((treatment, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {treatment}
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

      {/* Makeover Components */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Makeover Components for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive makeovers combine the finest treatments and
                technologies to deliver exceptional, natural-looking results
                that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(makeoverComponents || []).map((component, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Gem className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {component.component}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {component.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {(component.benefits || []).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-sm text-purple-700 font-medium">
                            {component.investmentLevel}
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

      {/* Family Treatment Timeline */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Smile Makeover Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures coordinated family makeovers
                with optimal timing, minimal disruption, and exceptional
                aesthetic outcomes for all family members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(familyTimeline || []).map((phase, index) => (
                <Card
                  key={phase.phase}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {phase.description}
                    </p>
                    <Badge variant="outline" className="mb-4">
                      {phase.duration}
                    </Badge>
                    <div className="space-y-1">
                      {(phase.activities || []).map((activity, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-gray-600 flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0" />
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Mapperley Families Say About Our Smile Makeovers
              </h2>
            </div>

            <TestimonialBanner
              text="Our family invested in comprehensive smile makeovers and it's been life-changing. Being just down the road from Mapperley made the numerous appointments so convenient. My husband had veneers and gum contouring, I had a complete smile transformation with crowns and whitening, and our teenage daughter had orthodontics and bonding. The coordination was flawless and the results are absolutely stunning. We all feel so much more confident - it's the best investment we've ever made!"
              author="Victoria & Family from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Investment level
                </div>
                <p className="text-gray-600">Exceptional quality and results</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Family coordination
                </div>
                <p className="text-gray-600">Harmonious aesthetic outcomes</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Life-changing
                </div>
                <p className="text-gray-600">Enhanced confidence and success</p>
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
              Exceptional Makeover Results from Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the stunning smile transformations achieved by affluent
              Mapperley families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-makeover-before-case-1.webp"
              afterImage="/images/family-makeover-after-case-1.webp"
              beforeAlt="Before family smile makeover - various dental concerns visible"
              afterAlt="After family smile makeover - stunning, coordinated family smiles"
              title="Complete Family Transformation"
              description="Three-generation Mapperley family with coordinated smile makeovers"
              treatmentType="Family Smile Makeover Program"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Family Makeover Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about
                comprehensive smile makeovers
              </p>
            </div>

            <FAQSection faqs={mapperleyMakeoverFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Investment-Level Makeovers Just Down the Road from Mapperley
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
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-purple-700 mb-2">
                      Smile Makeover Excellence
                    </h4>
                    <p className="text-gray-600">
                      Complete family aesthetic transformations
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Family's Smiles with Investment-Level Makeovers
              from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Invest in your family's confidence and success with comprehensive
              smile makeovers. Book your family transformation consultation from
              Mapperley with complete aesthetic solutions.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Smile Makeover Specialists
              </p>
              <p className="text-sm opacity-90">
                Complete transformations • Family coordination •
                Investment-level quality • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Makeover Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Complete transformations</span>
              <span>✓ Family coordination</span>
              <span>✓ Investment-level results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
