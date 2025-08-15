import React from "react";
import {
  Activity,
  Baby,
  Car,
  CheckCircle,
  DollarSign,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Navigation,
  Phone,
  Star,
  Stethoscope,
  ThumbsUp,
  Timer,
  TrendingUp,
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
    "Family Preventive Care in Gedling - Long-Term Health Focus for Working Families | Pear Tree Dental",
  description:
    "Family preventive care for Gedling working families. Long-term dental health focus, family health plans, and convenient preventive services. Quick drive from Gedling NG4.",
  keywords: [
    "family preventive care Gedling",
    "preventive dentistry Gedling NG4",
    "family dental health Gedling",
    "long term dental care Gedling",
    "working families preventive dentist Gedling",
    "family health plans Gedling",
    "comprehensive preventive care Gedling",
  ],
  openGraph: {
    title:
      "Family Preventive Care in Gedling - Long-Term Health Focus for Working Families | Pear Tree Dental",
    description:
      "Family preventive care for Gedling working families. Long-term dental health focus with convenient family health plans.",
    url: "https://peartree.dental/gedling/family-preventive-care",
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/family-preventive-care",
  },
};

export default function GedlingFamilyPreventiveCare() {
  const gedlingPreventiveFAQs = [
    {
      question:
        "How does preventive care save money for working families from Gedling?",
      answer:
        "Preventive care is the most cost-effective approach to dental health. Regular check-ups and cleanings prevent expensive problems like root canals, crowns, and extractions. For a typical Gedling family, preventive care costs around £400-600 annually but can prevent thousands in future treatment costs.",
    },
    {
      question: "What's included in your family preventive care plans?",
      answer:
        "Our family plans include regular examinations, professional cleaning, fluoride treatments, dietary advice, and early problem detection. We tailor plans for each family member's age and risk factors, ensuring comprehensive coverage for everyone from toddlers to grandparents.",
    },
    {
      question:
        "How do you make preventive care convenient for busy working families?",
      answer:
        "We offer flexible scheduling including early morning, evening, and weekend appointments. We can coordinate multiple family members' appointments together and provide reminder systems. Being just a quick drive from Gedling makes regular visits manageable even with busy work schedules.",
    },
    {
      question: "When should children start preventive care?",
      answer:
        "Children should start preventive visits by their first birthday or within 6 months of first tooth eruption. Early preventive care establishes good habits, prevents early childhood cavities, and guides proper development. It's the foundation for lifelong dental health.",
    },
    {
      question: "How do you track family dental health over time?",
      answer:
        "We maintain comprehensive family health records tracking each member's progress, risk factors, and treatment history. This allows us to identify patterns, plan treatments efficiently, and provide personalized preventive strategies for optimal long-term family health.",
    },
  ];

  const preventiveServices = [
    {
      service: "Comprehensive Family Examinations",
      description: "Thorough health assessments for all family members",
      frequency: "Every 6 months",
      ageGroup: "All ages",
      benefits: "Early problem detection, health monitoring",
      cost: "From £65 per person",
      icon: Stethoscope,
    },
    {
      service: "Professional Cleaning & Hygiene",
      description: "Remove tartar and plaque buildup, polish teeth",
      frequency: "Every 6 months",
      ageGroup: "All ages",
      benefits: "Prevents gum disease and cavities",
      cost: "From £85 per person",
      icon: Activity,
    },
    {
      service: "Children's Preventive Treatments",
      description: "Sealants, fluoride, and development monitoring",
      frequency: "As needed",
      ageGroup: "Ages 6-16",
      benefits: "90% cavity reduction with sealants",
      cost: "From £35 per treatment",
      icon: Baby,
    },
    {
      service: "Family Health Education",
      description: "Personalized oral hygiene and nutrition guidance",
      frequency: "Ongoing",
      ageGroup: "All family members",
      benefits: "Improved home care, better outcomes",
      cost: "Included in visits",
      icon: GraduationCap,
    },
  ];

  const longTermBenefits = [
    {
      benefit: "Cost Prevention",
      description: "Regular care prevents expensive emergency treatments",
      value: "Saves thousands long-term",
      icon: DollarSign,
    },
    {
      benefit: "Health Monitoring",
      description: "Track family health trends and address issues early",
      value: "Optimal family health",
      icon: TrendingUp,
    },
    {
      benefit: "Convenient Coordination",
      description: "Family appointments scheduled together for efficiency",
      value: "Time-saving convenience",
      icon: Timer,
    },
    {
      benefit: "Lifestyle Integration",
      description: "Dental health becomes natural part of family routine",
      value: "Sustainable health habits",
      icon: HeartHandshake,
    },
  ];

  const ageSpecificPrevention = [
    {
      ageGroup: "Babies & Toddlers (6 months - 3 years)",
      preventiveFocus: "Early development monitoring and habit establishment",
      keyServices: [
        "First dental visit",
        "Fluoride varnish",
        "Feeding guidance",
        "Thumb sucking counseling",
      ],
      healthGoals: "Prevent early childhood cavities, establish good habits",
      parentGuidance:
        "Home care instruction, dietary counseling, development expectations",
      longTermImpact:
        "Foundation for lifelong oral health and positive dental attitudes",
    },
    {
      ageGroup: "Preschool Children (3-6 years)",
      preventiveFocus: "Cavity prevention and oral hygiene skill building",
      keyServices: [
        "Regular cleaning",
        "Fluoride treatments",
        "Sealant preparation",
        "Hygiene education",
      ],
      healthGoals: "Maintain cavity-free teeth, develop brushing skills",
      parentGuidance: "Supervised brushing techniques, nutrition counseling",
      longTermImpact:
        "Establishes routine care and prevents school-age dental problems",
    },
    {
      ageGroup: "School Age (6-12 years)",
      preventiveFocus: "Permanent tooth protection and orthodontic monitoring",
      keyServices: [
        "Dental sealants",
        "Professional cleaning",
        "Orthodontic screening",
        "Sports protection",
      ],
      healthGoals: "Protect new permanent teeth, monitor development",
      parentGuidance:
        "Independence building, diet modification, injury prevention",
      longTermImpact: "Critical protection during high-risk cavity years",
    },
    {
      ageGroup: "Teenagers (13-18 years)",
      preventiveFocus: "Independence building and lifestyle-related prevention",
      keyServices: [
        "Comprehensive care",
        "Wisdom tooth monitoring",
        "Orthodontic maintenance",
        "Lifestyle counseling",
      ],
      healthGoals:
        "Maintain health through hormonal changes and increased independence",
      parentGuidance: "Supporting independence while maintaining supervision",
      longTermImpact: "Transition to adult responsibility for oral health",
    },
    {
      ageGroup: "Working Adults (19-64 years)",
      preventiveFocus: "Disease prevention and systemic health connections",
      keyServices: [
        "Gum disease prevention",
        "Cancer screening",
        "Stress-related monitoring",
        "Restoration maintenance",
      ],
      healthGoals:
        "Maintain teeth for life, prevent systemic health complications",
      parentGuidance:
        "Model good habits for children, family health leadership",
      longTermImpact: "Maintains function and health through productive years",
    },
    {
      ageGroup: "Seniors (65+ years)",
      preventiveFocus: "Maintaining function and managing age-related changes",
      keyServices: [
        "Medication interaction monitoring",
        "Dry mouth management",
        "Restoration maintenance",
        "Mobility accommodations",
      ],
      healthGoals: "Maintain nutrition capacity and quality of life",
      parentGuidance: "Family support for appointments and home care",
      longTermImpact: "Preserves independence and health in later years",
    },
  ];

  const familyHealthStrategies = [
    {
      strategy: "Coordinated Family Care Plans",
      approach:
        "Develop comprehensive health strategies for entire family unit",
      benefit: "Efficient care coordination and better health outcomes",
      implementation:
        "Schedule family members together, track family health trends",
    },
    {
      strategy: "Risk-Based Prevention",
      approach:
        "Tailor preventive care intensity based on individual and family risk factors",
      benefit: "Optimal prevention without over-treatment or under-treatment",
      implementation:
        "Assess genetics, lifestyle, and environmental factors for each family member",
    },
    {
      strategy: "Educational Family Approach",
      approach:
        "Educate entire family about oral health connections to overall wellness",
      benefit: "Improved home care and health decision-making",
      implementation:
        "Family education sessions, age-appropriate health information",
    },
    {
      strategy: "Long-Term Health Investment",
      approach:
        "Focus on prevention as investment in family's future health and finances",
      benefit: "Reduced lifetime dental costs and improved quality of life",
      implementation:
        "Track savings from prevention, demonstrate long-term value",
    },
    {
      strategy: "Lifestyle Integration",
      approach: "Make oral health natural part of family's daily routines",
      benefit: "Sustainable health habits that last a lifetime",
      implementation:
        "Practical home care strategies, family-friendly health practices",
    },
    {
      strategy: "Health Monitoring & Tracking",
      approach:
        "Use technology and records to track family health trends over time",
      benefit: "Early problem identification and treatment optimization",
      implementation:
        "Digital health records, progress tracking, predictive care planning",
    },
  ];

  const preventionROI = [
    {
      preventiveInvestment: "Annual Family Preventive Care",
      cost: "£400-600 per year",
      prevention: "Regular check-ups, cleanings, fluoride, sealants",
      problemsPrevented: "Cavities, gum disease, emergencies",
      costAvoided: "£2,000-5,000 in treatments",
      roi: "300-800% return on investment",
    },
    {
      preventiveInvestment: "Children's Dental Sealants",
      cost: "£35-50 per tooth",
      prevention: "Protective coating on permanent molars",
      problemsPrevented: "90% reduction in back tooth cavities",
      costAvoided: "£150-400 per filling avoided",
      roi: "300-600% return on investment",
    },
    {
      preventiveInvestment: "Early Orthodontic Intervention",
      cost: "£800-1,500",
      prevention: "Guide jaw development and tooth eruption",
      problemsPrevented: "Complex orthodontic problems",
      costAvoided: "£2,000-4,000 in complex treatment",
      roi: "150-300% return on investment",
    },
    {
      preventiveInvestment: "Gum Disease Prevention",
      cost: "£100-200 annually",
      prevention: "Professional cleaning and monitoring",
      problemsPrevented: "Gum disease, tooth loss, systemic complications",
      costAvoided: "£3,000-10,000 in advanced treatment",
      roi: "1,500-5,000% return on investment",
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
            name: "Pear Tree Dental - Family Preventive Care in Gedling",
            image:
              "https://peartree.dental/images/family-preventive-care-gedling.jpg",
            url: "https://peartree.dental/gedling/family-preventive-care",
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
              name: "Gedling, NG4",
            },
            medicalSpecialty: "Preventive Dentistry - Family Health Focus",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£35-£85",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Preventive Care in{" "}
              <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Long-Term Health Focus for Working Families
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Comprehensive family health plans
                from £400 annually
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Book Family Health Plan
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                💚 Long-term family health investment with convenient care for
                Gedling families!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Long-Term Family Health Investment for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families need dental care
                that focuses on long-term health and financial benefits. Our
                preventive approach saves money while ensuring optimal health
                for every family member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(longTermBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-green-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-green-100 text-green-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-green-50 rounded-lg p-8">
              <HeartHandshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Prevention: The Smart Investment for Working Families
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Gedling working families make careful
                decisions about health investments. Preventive care provides the
                highest return on investment while ensuring optimal health for
                every family member.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    300-800% ROI
                  </div>
                  <p className="text-gray-600">
                    Return on prevention investment
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Family coordination
                  </div>
                  <p className="text-gray-600">Efficient scheduling and care</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Quick drive
                  </div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Services */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Preventive Services for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our family preventive care covers all aspects of dental health
                for every family member, from babies to grandparents, with
                convenient scheduling and long-term health focus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(preventiveServices || []).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-green-400"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {service.service}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {service.cost}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {service.frequency}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {service.ageGroup}
                          </span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-green-700 font-medium">
                          {service.benefits}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Prevention */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Specific Preventive Care for Every Gedling Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each life stage has unique preventive needs and opportunities.
                Our age-specific approach ensures optimal prevention strategies
                for every family member.
              </p>
            </div>

            <div className="space-y-8">
              {(ageSpecificPrevention || []).map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2 text-lg">
                          {group.ageGroup}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {group.preventiveFocus}
                        </p>

                        <div className="mb-3">
                          <h4 className="font-semibold text-green-600 text-sm mb-2">
                            Key Services:
                          </h4>
                          <ul className="space-y-1">
                            {(group.keyServices || []).map((service, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 flex items-center gap-2"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-2">
                          Health Goals:
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">
                          {group.healthGoals}
                        </p>

                        <h4 className="font-semibold text-green-600 text-sm mb-2">
                          Parent Guidance:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {group.parentGuidance}
                        </p>
                      </div>

                      <div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">
                            Long-Term Impact:
                          </h4>
                          <p className="text-sm text-green-700">
                            {group.longTermImpact}
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

      {/* Prevention ROI */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Prevention Investment Returns for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the financial benefits of preventive care helps
                working families make informed decisions about their family's
                long-term health investment.
              </p>
            </div>

            <div className="space-y-6">
              {(preventionROI || []).map((investment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-5 gap-4">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-1">
                          {investment.preventiveInvestment}
                        </h3>
                        <p className="text-2xl font-bold text-green-600">
                          {investment.cost}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-1">
                          Prevention:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {investment.prevention}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-1">
                          Problems Prevented:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {investment.problemsPrevented}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-1">
                          Cost Avoided:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {investment.costAvoided}
                        </p>
                      </div>

                      <div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">
                            ROI:
                          </h4>
                          <p className="text-sm text-green-700 font-bold">
                            {investment.roi}
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

      {/* Family Health Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Family Health Strategies for Gedling Working
                Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach to family preventive care ensures
                optimal health outcomes while maximizing convenience and value
                for working families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(familyHealthStrategies || []).map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {strategy.strategy}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">
                              Approach:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.approach}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">
                              Benefit:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.benefit}
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-semibold text-green-700 text-sm mb-1">
                              Implementation:
                            </h4>
                            <p className="text-sm text-green-700">
                              {strategy.implementation}
                            </p>
                          </div>
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

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Gedling Families Say About Our Long-Term Health Focus
              </h2>
            </div>

            <TestimonialBanner
              text="We started bringing our whole family to Pear Tree Dental three years ago when we moved to Gedling. Being just a quick drive away made it easy to keep up with everyone's check-ups. What I love most is how they focus on prevention - they caught early signs of gum disease in my husband and helped our daughter avoid cavities with sealants. Over three years, we've spent about £1,800 on preventive care for our family of four, but we haven't had a single emergency or major treatment needed. Compare that to our previous experience where we were constantly dealing with problems and spending thousands on treatments. The investment in prevention has been incredible for our family's health and our budget!"
              author="Susan and Mark F. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  £1,800 over 3 years
                </div>
                <p className="text-gray-600">
                  Total family preventive investment
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Zero emergencies
                </div>
                <p className="text-gray-600">No unexpected dental problems</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Thousands saved
                </div>
                <p className="text-gray-600">Avoided expensive treatments</p>
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
              Long-Term Family Health Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See how our preventive focus maintains optimal health and prevents
              problems over time
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-preventive-care-before-case-1.webp"
              afterImage="/images/family-preventive-care-after-case-1.webp"
              beforeAlt="Before family preventive care - various dental issues developing across family members"
              afterAlt="After family preventive care - healthy, well-maintained teeth for entire family"
              title="Long-Term Family Health Success"
              description="Gedling working family's health maintained through preventive care"
              treatmentType="Comprehensive Family Preventive Program"
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
                Family Preventive Care Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about long-term
                family health investment
              </p>
            </div>

            <FAQSection faqs={gedlingPreventiveFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Long-Term Family Health Care - Quick Drive from Gedling
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Gedling
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head south on Arnold Lane towards the A612</p>
                    <p>2. Continue on the A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (8 miles)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey: Quick 15-minute drive
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <HeartHandshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-700 mb-2">
                      Family Preventive Care
                    </h4>
                    <p className="text-gray-600">
                      Long-term health investment plans
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Gedling,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Gedling
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Invest in Your Family's Long-Term Health from Gedling Today
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't wait for problems to develop. Start your family's preventive
              health journey with comprehensive care that saves money and
              ensures optimal health for everyone.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Preventive Health Specialists
              </p>
              <p className="text-sm opacity-90">
                Long-term focus • Family coordination • Cost-effective care •
                Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Book Family Health Plan
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Family health plans from £400 annually</span>
              <span>✓ 300-800% return on investment</span>
              <span>✓ Comprehensive age-specific care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
