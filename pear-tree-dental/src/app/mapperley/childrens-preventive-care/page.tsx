import React from "react";
import {
  Apple,
  Baby,
  BookOpen,
  Brain,
  CheckCircle,
  Crown,
  GraduationCap,
  Home,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Star,
  Stethoscope,
  Target,
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
    "Children's Preventive Care in Mapperley - Comprehensive Family Prevention | Pear Tree Dental",
  description:
    "Children's preventive care for affluent Mapperley families. Comprehensive prevention, early intervention, and family education just down the road from Mapperley.",
  keywords: [
    "children's preventive care Mapperley",
    "preventive dentistry Mapperley families",
    "kids prevention Mapperley NG5",
    "family prevention Sherwood",
    "early intervention Mapperley",
    "comprehensive prevention Mapperley",
    "dental education families Mapperley",
  ],
  openGraph: {
    title:
      "Children's Preventive Care in Mapperley - Comprehensive Family Prevention | Pear Tree Dental",
    description:
      "Children's preventive care for affluent Mapperley families. Comprehensive prevention and education just down the road.",
    url: "https://peartree.dental/mapperley/childrens-preventive-care",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/childrens-preventive-care",
  },
};

export default function MapperleyChildrensPreventivePage() {
  const mapperleyPreventiveFAQs = [
    {
      question: "How convenient is children's preventive care from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in comprehensive family prevention, providing early intervention and education that affluent families value for long-term investment in their children's health.",
    },
    {
      question:
        "What makes your preventive approach special for Mapperley families?",
      answer:
        "We combine cutting-edge prevention technology, comprehensive family education, early intervention expertise, and convenient location. Our approach aligns with affluent families' focus on proactive health investment and excellence.",
    },
    {
      question:
        "How early should we start preventive care for our Mapperley children?",
      answer:
        "We recommend starting by age 1 or within 6 months of first tooth emergence. Early prevention establishes lifelong healthy habits and prevents problems before they develop - a smart investment approach.",
    },
    {
      question: "Do you provide preventive education for the whole family?",
      answer:
        "Absolutely! We believe parents are partners in prevention. We provide comprehensive education on nutrition, hygiene, habits, and home care to ensure your family maintains optimal oral health between visits.",
    },
    {
      question: "What preventive services do you offer for Mapperley children?",
      answer:
        "We offer fluoride treatments, fissure sealants, hygiene education, dietary counseling, habit guidance, early orthodontic assessment, and comprehensive monitoring - all designed to prevent problems proactively.",
    },
  ];

  const preventiveServices = [
    {
      service: "Advanced Fluoride Treatments",
      description:
        "Professional fluoride applications to strengthen developing teeth",
      benefits: [
        "Strengthens tooth enamel",
        "Prevents early decay",
        "Reduces sensitivity",
        "Long-lasting protection",
      ],
      ageRange: "All children",
      frequency: "Every 6 months",
      investment: "£35-50",
      icon: Shield,
      highlight: "Foundation Care",
    },
    {
      service: "Fissure Sealants",
      description: "Protective barriers for permanent molars to prevent decay",
      benefits: [
        "Prevents cavity formation",
        "Protects deep grooves",
        "Painless application",
        "Excellent investment",
      ],
      ageRange: "Ages 6-14",
      frequency: "As molars emerge",
      investment: "£45-65 per tooth",
      icon: Crown,
      highlight: "Most Effective",
    },
    {
      service: "Comprehensive Hygiene Education",
      description: "Age-appropriate oral hygiene instruction and motivation",
      benefits: [
        "Proper technique training",
        "Habit establishment",
        "Motivation building",
        "Family involvement",
      ],
      ageRange: "All children",
      frequency: "Every visit",
      investment: "Included in appointment",
      icon: BookOpen,
      highlight: "Life Skills",
    },
    {
      service: "Nutritional Counseling",
      description: "Dietary guidance for optimal oral and overall health",
      benefits: [
        "Healthy eating habits",
        "Reduced decay risk",
        "Growth support",
        "Family education",
      ],
      ageRange: "All children",
      frequency: "As needed",
      investment: "Included in care",
      icon: Apple,
      highlight: "Holistic Approach",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Comprehensive Prevention",
      description:
        "Multi-faceted approach addressing all aspects of children's oral health",
      value: "Long-term health investment",
      icon: Shield,
    },
    {
      benefit: "Family Education Focus",
      description:
        "Extensive education for parents and children on optimal oral health",
      value: "Lifelong healthy habits",
      icon: BookOpen,
    },
    {
      benefit: "Early Intervention",
      description:
        "Identifying and addressing issues before they become major problems",
      value: "Cost-effective prevention",
      icon: Target,
    },
    {
      benefit: "Convenient Excellence",
      description: "Premium preventive care just down the road from Mapperley",
      value: "Maximum convenience",
      icon: Home,
    },
  ];

  const ageBasedPrevention = [
    {
      ageGroup: "Infants & Toddlers (0-3)",
      keyFocus: "Foundation building and habit establishment",
      preventiveActions: [
        "First dental visits",
        "Teething guidance",
        "Bottle/cup transition",
        "Thumb sucking assessment",
      ],
      familyEducation: [
        "Cleaning baby teeth",
        "Fluoride guidance",
        "Nutrition advice",
        "Habit prevention",
      ],
      outcomes: "Healthy start and positive associations",
      icon: Baby,
    },
    {
      ageGroup: "Preschoolers (4-6)",
      keyFocus: "Primary tooth protection and preparation for school",
      preventiveActions: [
        "Regular cleanings",
        "Fluoride treatments",
        "Decay prevention",
        "Habit monitoring",
      ],
      familyEducation: [
        "Proper brushing",
        "Healthy snacking",
        "Dental anxiety prevention",
        "Preparation for procedures",
      ],
      outcomes: "Protected primary teeth until natural loss",
      icon: Apple,
    },
    {
      ageGroup: "School Age (7-12)",
      keyFocus: "Mixed dentition management and permanent tooth protection",
      preventiveActions: [
        "Fissure sealants",
        "Orthodontic monitoring",
        "Permanent tooth guidance",
        "Sports protection",
      ],
      familyEducation: [
        "Independence building",
        "Nutritional choices",
        "Orthodontic preparation",
        "Injury prevention",
      ],
      outcomes: "Healthy permanent teeth and proper development",
      icon: GraduationCap,
    },
    {
      ageGroup: "Teenagers (13-17)",
      keyFocus: "Independence, aesthetics, and lifelong habit establishment",
      preventiveActions: [
        "Wisdom tooth monitoring",
        "Whitening guidance",
        "Orthodontic support",
        "Lifestyle counseling",
      ],
      familyEducation: [
        "Independent care",
        "Lifestyle impact",
        "Aesthetic choices",
        "Long-term planning",
      ],
      outcomes: "Confident, independent oral health management",
      icon: TrendingUp,
    },
  ];

  const preventionTechnologies = [
    {
      technology: "Digital Cavity Detection",
      description: "Advanced technology to identify decay in earliest stages",
      benefits: [
        "Catches problems early",
        "Minimally invasive",
        "Accurate diagnosis",
        "Better outcomes",
      ],
      familyValue: "Peace of mind through early detection",
    },
    {
      technology: "Intraoral Cameras",
      description: "Show children and parents exactly what we see",
      benefits: [
        "Visual education",
        "Better understanding",
        "Motivation building",
        "Documentation",
      ],
      familyValue: "Enhanced education and engagement",
    },
    {
      technology: "Fluoride Varnish",
      description: "Professional-strength fluoride for maximum protection",
      benefits: [
        "Superior protection",
        "Easy application",
        "Excellent tolerance",
        "Proven effectiveness",
      ],
      familyValue: "Premium protection for developing teeth",
    },
    {
      technology: "Airflow Cleaning",
      description: "Gentle, effective cleaning for children of all ages",
      benefits: [
        "Comfortable experience",
        "Thorough cleaning",
        "Stain removal",
        "Motivation building",
      ],
      familyValue: "Gentle yet thorough professional care",
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
            name: "Pear Tree Dental - Children's Preventive Care in Mapperley",
            image:
              "https://peartree.dental/images/childrens-preventive-mapperley.jpg",
            url: "https://peartree.dental/mapperley/childrens-preventive-care",
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
              "Pediatric Preventive Dentistry - Comprehensive Family Prevention",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£35-£65",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Children's Preventive Care in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Comprehensive Family Prevention Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Premium prevention &
                education
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Book Prevention Appointment
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
                🌟 Investing in your children's lifelong oral health from day
                one!
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
                Comprehensive Prevention Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families understand that prevention is the
                smartest investment in their children's health. Our
                comprehensive approach ensures optimal oral health from infancy
                through adolescence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-blue-100 text-blue-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-blue-50 rounded-lg p-8">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Smart Prevention Investment
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Mapperley families appreciate that comprehensive prevention
                today saves significant time, money, and discomfort tomorrow.
                Our approach focuses on education and early intervention.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Prevention focus
                  </div>
                  <p className="text-gray-600">
                    Problems prevented, not treated
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Family education
                  </div>
                  <p className="text-gray-600">Knowledge for lifelong health</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
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
                Comprehensive Preventive Services for Mapperley Children
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our prevention program combines the latest technology with
                proven techniques to ensure your children develop and maintain
                optimal oral health throughout their lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(preventiveServices || []).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-blue-400 relative"
                  >
                    {service.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600 text-white">
                          {service.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {service.service}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-pear-primary mb-1">
                          {service.investment}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {service.ageRange}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {service.frequency}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(service.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
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

      {/* Age-Based Prevention */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Prevention for Mapperley Children
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each stage of childhood requires specific preventive approaches.
                We tailor our care to ensure optimal outcomes at every
                developmental milestone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(ageBasedPrevention || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.ageGroup}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.keyFocus}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-blue-600 text-sm mb-1">
                            Preventive Actions:
                          </h4>
                          <ul className="space-y-1">
                            {(group.preventiveActions || []).map(
                              (action, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                  {action}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-600 text-sm mb-1">
                            Family Education:
                          </h4>
                          <ul className="space-y-1">
                            {(group.familyEducation || []).map(
                              (education, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <BookOpen className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                  {education}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-700 font-medium">
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

      {/* Prevention Technologies */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Advanced Prevention Technology for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We invest in the latest prevention technology to provide
                Mapperley children with the most effective, comfortable, and
                comprehensive preventive care available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(preventionTechnologies || []).map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Stethoscope className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {tech.technology}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {tech.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {(tech.benefits || []).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-700 font-medium">
                            {tech.familyValue}
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

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Mapperley Families Say About Our Preventive Care
              </h2>
            </div>

            <TestimonialBanner
              text="As busy professionals in Mapperley, we appreciate the comprehensive preventive approach at Pear Tree. Being just down the road makes regular appointments so convenient. They've educated our whole family about proper oral health, and our children actually look forward to their visits! The investment in prevention has paid off - no cavities in 3 years for our kids aged 8, 10, and 13. The education and early intervention approach is exactly what we wanted."
              author="Dr. James & Sarah P. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Prevention first
                </div>
                <p className="text-gray-600">Problems prevented, not treated</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Family education
                </div>
                <p className="text-gray-600">Knowledge for lifelong health</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Down the road
                </div>
                <p className="text-gray-600">Ultimate convenience</p>
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
              Prevention Success Stories from Mapperley
            </h2>
            <p className="text-lg text-gray-600">
              See how comprehensive prevention creates healthy, confident smiles
              for Mapperley children
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/children-prevention-before-case-1.webp"
              afterImage="/images/children-prevention-after-case-1.webp"
              beforeAlt="Before preventive care - early dental problems visible"
              afterAlt="After preventive care - healthy developing smile maintained"
              title="Comprehensive Prevention Success"
              description="8-year-old from Mapperley family with 3 years of preventive care"
              treatmentType="Comprehensive Prevention Program"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Mapperley */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Prevention Questions from Mapperley Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about
                comprehensive children's preventive care
              </p>
            </div>

            <FAQSection faqs={mapperleyPreventiveFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Premium Prevention Just Down the Road from Mapperley
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
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">
                      Prevention Excellence
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive family prevention programs
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Invest in Your Children's Lifelong Oral Health from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your children the foundation for lifelong oral health with
              comprehensive preventive care. Book your family prevention
              consultation from Mapperley with expert education and early
              intervention.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Prevention Specialists
              </p>
              <p className="text-sm opacity-90">
                Comprehensive prevention • Family education • Early intervention
                • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Book Prevention Appointment
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
              <span>✓ Comprehensive prevention programs</span>
              <span>✓ Advanced technology</span>
              <span>✓ Family education included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
