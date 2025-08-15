import React from "react";
import {
  Award,
  Briefcase,
  Building,
  CheckCircle,
  CircuitBoard,
  Heart,
  Home,
  MapPin,
  Navigation,
  Phone,
  Star,
  Target,
  TrendingUp,
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
    "Multi-Generational Rehabilitation in Mapperley - Comprehensive Family Restoration | Pear Tree Dental",
  description:
    "Multi-generational rehabilitation for affluent Mapperley families. Comprehensive oral rehabilitation, coordinated family treatments, and complete dental restoration just down the road.",
  keywords: [
    "multi-generational rehabilitation Mapperley",
    "family rehabilitation Mapperley",
    "comprehensive rehabilitation Mapperley NG5",
    "full mouth rehabilitation Mapperley families",
    "coordinated rehabilitation Sherwood",
    "complete oral rehabilitation Mapperley",
    "family dental restoration Mapperley",
  ],
  openGraph: {
    title:
      "Multi-Generational Rehabilitation in Mapperley - Comprehensive Family Restoration | Pear Tree Dental",
    description:
      "Multi-generational rehabilitation for affluent Mapperley families. Comprehensive restoration and coordinated care just down the road.",
    url: "https://peartree.dental/mapperley/multi-generational-rehabilitation",
  },
  alternates: {
    canonical:
      "https://peartree.dental/mapperley/multi-generational-rehabilitation",
  },
};

export default function MapperleyMultiGenerationalRehabilitationPage() {
  const mapperleyRehabFAQs = [
    {
      question:
        "How convenient is multi-generational rehabilitation from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in coordinated family rehabilitation, providing comprehensive oral restoration with multi-generational planning and investment-level results.",
    },
    {
      question: "What does multi-generational rehabilitation include?",
      answer:
        "Comprehensive oral rehabilitation coordinated across multiple family members, including full mouth restoration, implant planning, aesthetic enhancement, functional optimization, and long-term health planning for all generations.",
    },
    {
      question: "Can you coordinate rehabilitation for an entire family?",
      answer:
        "Absolutely! We excel at family rehabilitation coordination, planning comprehensive treatments for grandparents, parents, and adult children simultaneously, managing complex scheduling, and ensuring optimal outcomes for all.",
    },
    {
      question: "What makes this special for affluent Mapperley families?",
      answer:
        "We combine comprehensive treatment planning, premium materials, advanced technology, family coordination, and convenient location. Our investment-level approach ensures exceptional, life-changing results for the entire family.",
    },
    {
      question: "How long does multi-generational rehabilitation take?",
      answer:
        "Typically 12-24 months for complete family rehabilitation, with phased treatments coordinated to minimize disruption while maximizing outcomes. We plan around family schedules and significant events.",
    },
  ];

  const rehabilitationTypes = [
    {
      rehabilitationType: "Complete Family Rehabilitation",
      description: "Comprehensive oral rehabilitation for entire family units",
      treatments: [
        "Full mouth restoration",
        "Implant coordination",
        "Aesthetic enhancement",
        "Function optimization",
      ],
      timeline: "18-24 months",
      investment: "From £45,000",
      icon: Building,
      highlight: "Most Comprehensive",
    },
    {
      rehabilitationType: "Three-Generation Coordination",
      description:
        "Synchronized care across grandparents, parents, and adult children",
      treatments: [
        "Age-appropriate solutions",
        "Family planning",
        "Coordinated scheduling",
        "Comprehensive care",
      ],
      timeline: "12-18 months",
      investment: "From £35,000",
      icon: Users,
      highlight: "Family Focused",
    },
    {
      rehabilitationType: "Professional Parent Rehabilitation",
      description:
        "Executive-level comprehensive restoration for working parents",
      treatments: [
        "Full mouth rehabilitation",
        "Executive scheduling",
        "Premium materials",
        "Aesthetic excellence",
      ],
      timeline: "12-15 months",
      investment: "From £25,000",
      icon: Briefcase,
      highlight: "Professional Choice",
    },
    {
      rehabilitationType: "Senior Comprehensive Care",
      description: "Complete oral rehabilitation for mature family members",
      treatments: [
        "Health-focused restoration",
        "Comfort priority",
        "Function optimization",
        "Quality of life",
      ],
      timeline: "6-12 months",
      investment: "From £18,000",
      icon: Heart,
      highlight: "Health Priority",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Complete Oral Transformation",
      description:
        "Comprehensive rehabilitation addressing all oral health concerns",
      value: "Life-changing results",
      icon: CircuitBoard,
    },
    {
      benefit: "Multi-Generational Coordination",
      description:
        "Synchronized treatment planning across all family generations",
      value: "Optimal family outcomes",
      icon: Users,
    },
    {
      benefit: "Investment-Level Excellence",
      description:
        "Premium materials and techniques for lasting, superior results",
      value: "Exceptional quality",
      icon: Award,
    },
    {
      benefit: "Comprehensive Health Focus",
      description:
        "Holistic approach addressing function, aesthetics, and long-term health",
      value: "Total wellness",
      icon: Heart,
    },
  ];

  const rehabilitationComponents = [
    {
      component: "Full Mouth Reconstruction",
      description: "Complete restoration of all teeth, bite, and oral function",
      benefits: [
        "Optimal function",
        "Perfect aesthetics",
        "Long-term health",
        "Quality of life",
      ],
      generationalFocus: "All ages with comprehensive needs",
    },
    {
      component: "Comprehensive Implant Planning",
      description: "Strategic implant placement for optimal long-term outcomes",
      benefits: [
        "Permanent solutions",
        "Bone preservation",
        "Aesthetic excellence",
        "Functional optimization",
      ],
      generationalFocus: "Adults with tooth loss across generations",
    },
    {
      component: "Advanced Periodontal Therapy",
      description: "Complete gum health restoration and maintenance",
      benefits: [
        "Disease elimination",
        "Tissue regeneration",
        "Aesthetic improvement",
        "Health foundation",
      ],
      generationalFocus: "All generations requiring gum health restoration",
    },
    {
      component: "Comprehensive Orthodontic Integration",
      description: "Tooth movement integrated with rehabilitation planning",
      benefits: [
        "Optimal positioning",
        "Enhanced aesthetics",
        "Function improvement",
        "Long-term stability",
      ],
      generationalFocus: "Family members requiring tooth movement",
    },
    {
      component: "Advanced Aesthetic Integration",
      description: "Complete smile design coordinated across family members",
      benefits: [
        "Harmonious aesthetics",
        "Natural beauty",
        "Confidence building",
        "Family coordination",
      ],
      generationalFocus: "All family members seeking aesthetic enhancement",
    },
    {
      component: "Long-Term Maintenance Planning",
      description: "Comprehensive care protocols for lasting results",
      benefits: [
        "Preventive focus",
        "Early intervention",
        "Cost effectiveness",
        "Sustained health",
      ],
      generationalFocus: "All family members for ongoing care",
    },
  ];

  const generationalNeeds = [
    {
      generation: "Young Adults (25-35)",
      rehabilitationFocus: "Foundation building and prevention",
      commonNeeds: [
        "Wisdom tooth management",
        "Preventive restoration",
        "Aesthetic enhancement",
        "Function optimization",
      ],
      treatmentApproach: [
        "Conservative rehabilitation",
        "Aesthetic focus",
        "Long-term planning",
        "Career consideration",
      ],
      outcomes: "Strong foundation for lifelong oral health",
      icon: TrendingUp,
    },
    {
      generation: "Professional Parents (35-55)",
      rehabilitationFocus: "Comprehensive restoration and maintenance",
      commonNeeds: [
        "Failed restoration replacement",
        "Comprehensive rehabilitation",
        "Aesthetic improvement",
        "Time-efficient treatment",
      ],
      treatmentApproach: [
        "Executive scheduling",
        "Premium materials",
        "Comprehensive planning",
        "Family coordination",
      ],
      outcomes: "Optimal function, health, and professional appearance",
      icon: Briefcase,
    },
    {
      generation: "Pre-Retirement (55-65)",
      rehabilitationFocus: "Health optimization and quality of life",
      commonNeeds: [
        "Comprehensive restoration",
        "Health improvement",
        "Function optimization",
        "Aesthetic enhancement",
      ],
      treatmentApproach: [
        "Health-focused treatment",
        "Quality of life priority",
        "Comprehensive planning",
        "Investment approach",
      ],
      outcomes: "Enhanced health and quality of life for retirement",
      icon: Target,
    },
    {
      generation: "Seniors (65+)",
      rehabilitationFocus: "Comfort, function, and quality of life",
      commonNeeds: [
        "Complete rehabilitation",
        "Comfort optimization",
        "Function restoration",
        "Health improvement",
      ],
      treatmentApproach: [
        "Comfort priority",
        "Health focus",
        "Function optimization",
        "Quality of life enhancement",
      ],
      outcomes: "Improved eating, speaking, and life enjoyment",
      icon: Heart,
    },
  ];

  const treatmentTimeline = [
    {
      phase: "Comprehensive Family Assessment",
      description:
        "Detailed evaluation and rehabilitation planning for entire family",
      duration: "4-6 weeks",
      activities: [
        "Individual comprehensive exams",
        "Digital planning",
        "Health assessment",
        "Family coordination planning",
      ],
    },
    {
      phase: "Foundation & Preparation",
      description: "Health optimization and treatment preparation",
      duration: "8-12 weeks",
      activities: [
        "Periodontal therapy",
        "Health optimization",
        "Orthodontic planning",
        "Surgical preparation",
      ],
    },
    {
      phase: "Active Rehabilitation",
      description: "Coordinated comprehensive treatment implementation",
      duration: "12-18 months",
      activities: [
        "Implant placement",
        "Restorative treatment",
        "Aesthetic enhancement",
        "Function optimization",
      ],
    },
    {
      phase: "Completion & Maintenance",
      description: "Treatment completion and long-term care planning",
      duration: "Ongoing",
      activities: [
        "Final adjustments",
        "Aesthetic perfection",
        "Maintenance protocols",
        "Long-term planning",
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
            name: "Pear Tree Dental - Multi-Generational Rehabilitation in Mapperley",
            image:
              "https://peartree.dental/images/multi-generational-rehabilitation-mapperley.jpg",
            url: "https://peartree.dental/mapperley/multi-generational-rehabilitation",
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
            medicalSpecialty:
              "Comprehensive Oral Rehabilitation - Multi-Generational Care",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£18000-£45000",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-indigo-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Multi-Generational Rehabilitation in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Comprehensive Family Restoration Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Complete family oral
                rehabilitation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🏗️ Complete oral rehabilitation for entire Mapperley families!
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
                Multi-Generational Rehabilitation Excellence for Mapperley
                Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families understand that comprehensive oral
                rehabilitation is the ultimate investment in health, function,
                and quality of life. Our coordinated approach delivers
                exceptional outcomes across generations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-indigo-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-indigo-100 text-indigo-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-indigo-50 rounded-lg p-8">
              <Building className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Complete Family Oral Rehabilitation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families value comprehensive,
                coordinated care. Our multi-generational approach ensures
                optimal outcomes for every family member while maximizing
                efficiency and convenience.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    Complete restoration
                  </div>
                  <p className="text-gray-600">
                    Comprehensive oral rehabilitation
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    Family coordination
                  </div>
                  <p className="text-gray-600">Multi-generational planning</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehabilitation Types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Rehabilitation Solutions for Every Mapperley
                Family
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our multi-generational rehabilitation programs are tailored to
                address the unique needs of each family member while ensuring
                coordinated care and optimal outcomes for all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(rehabilitationTypes || []).map((rehabilitation, index) => {
                const IconComponent = rehabilitation.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-indigo-400 relative"
                  >
                    {rehabilitation.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-indigo-600 text-white">
                          {rehabilitation.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {rehabilitation.rehabilitationType}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {rehabilitation.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {rehabilitation.investment}
                        </p>
                        <Badge variant="outline" className="mb-4">
                          {rehabilitation.timeline}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {(rehabilitation.treatments || []).map(
                          (treatment, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {treatment}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Generational Needs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Rehabilitation for Every Mapperley Family
                Generation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each generation has unique rehabilitation needs and priorities.
                Our comprehensive approach addresses these differences while
                ensuring coordinated family care and optimal outcomes.
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
                        <IconComponent className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.generation}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.rehabilitationFocus}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-indigo-600 text-sm mb-1">
                            Common Needs:
                          </h4>
                          <ul className="space-y-1">
                            {(group.commonNeeds || []).map((need, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-center gap-1"
                              >
                                <CheckCircle className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                                {need}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-indigo-600 text-sm mb-1">
                            Treatment Approach:
                          </h4>
                          <ul className="space-y-1">
                            {(group.treatmentApproach || []).map(
                              (approach, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <Star className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                                  {approach}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-3">
                          <p className="text-sm text-indigo-700 font-medium">
                            {group.outcomes}
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

      {/* Rehabilitation Components */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Rehabilitation Components for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our multi-generational rehabilitation integrates all aspects of
                oral health care to deliver complete, long-lasting solutions for
                every family member's unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(rehabilitationComponents || []).map((component, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-full">
                        <CircuitBoard className="w-6 h-6 text-indigo-600" />
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
                              <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-3">
                          <p className="text-sm text-indigo-700 font-medium">
                            {component.generationalFocus}
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

      {/* Treatment Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Multi-Generational Rehabilitation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures coordinated family
                rehabilitation with optimal timing, comprehensive care, and
                exceptional outcomes for all family members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(treatmentTimeline || []).map((phase, index) => (
                <Card
                  key={phase.phase}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                          <CheckCircle className="w-3 h-3 text-indigo-500 flex-shrink-0" />
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
                What Mapperley Families Say About Our Multi-Generational
                Rehabilitation
              </h2>
            </div>

            <TestimonialBanner
              text="Our three-generation family needed comprehensive rehabilitation and being just down the road from Mapperley made coordination incredible. My elderly parents had complete mouth rehabilitation, my husband and I had full restorations, and our adult children had preventive rehabilitation. The coordination was flawless - they managed complex scheduling across six people over 18 months. The results are life-changing. Everyone's health, function, and confidence have dramatically improved. It's the best investment our family has ever made!"
              author="The Thompson Family from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  Three generations
                </div>
                <p className="text-gray-600">
                  Coordinated family rehabilitation
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  Life-changing
                </div>
                <p className="text-gray-600">Enhanced health and function</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  Investment level
                </div>
                <p className="text-gray-600">Premium comprehensive care</p>
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
              Exceptional Rehabilitation Results from Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the life-changing rehabilitation transformations achieved by
              affluent Mapperley families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/multi-gen-rehabilitation-before-case-1.webp"
              afterImage="/images/multi-gen-rehabilitation-after-case-1.webp"
              beforeAlt="Before multi-generational rehabilitation - various dental problems affecting function"
              afterAlt="After multi-generational rehabilitation - complete oral health restoration"
              title="Complete Family Rehabilitation"
              description="Three-generation Mapperley family with comprehensive oral rehabilitation"
              treatmentType="Multi-Generational Rehabilitation Program"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Rehabilitation Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about
                multi-generational rehabilitation
              </p>
            </div>

            <FAQSection faqs={mapperleyRehabFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Comprehensive Rehabilitation Just Down the Road from Mapperley
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
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <Building className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h4 className="font-bold text-indigo-700 mb-2">
                      Rehabilitation Excellence
                    </h4>
                    <p className="text-gray-600">
                      Multi-generational comprehensive care
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Family's Oral Health with Comprehensive
              Rehabilitation from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Invest in your family's long-term health, function, and quality of
              life with comprehensive multi-generational rehabilitation. Book
              your family consultation from Mapperley today.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Rehabilitation Specialists
              </p>
              <p className="text-sm opacity-90">
                Complete restoration • Multi-generational coordination •
                Investment-level care • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Complete oral rehabilitation</span>
              <span>✓ Multi-generational coordination</span>
              <span>✓ Investment-level quality</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
