import React from "react";
import {
  Briefcase,
  CheckCircle,
  Crown,
  Eye,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Monitor,
  Navigation,
  Phone,
  Sparkles,
  Star,
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
    "Advanced Family Orthodontics in Mapperley - Premium Aesthetic Solutions | Pear Tree Dental",
  description:
    "Advanced family orthodontics for affluent Mapperley families. Premium aesthetic solutions, invisible orthodontics, and coordinated family treatments just down the road.",
  keywords: [
    "advanced family orthodontics Mapperley",
    "premium orthodontics Mapperley families",
    "invisible orthodontics Mapperley NG5",
    "lingual braces Mapperley",
    "family orthodontic coordination Sherwood",
    "aesthetic orthodontics Mapperley",
    "premium teeth straightening Mapperley",
  ],
  openGraph: {
    title:
      "Advanced Family Orthodontics in Mapperley - Premium Aesthetic Solutions | Pear Tree Dental",
    description:
      "Advanced family orthodontics for affluent Mapperley families. Premium aesthetic solutions and coordination just down the road.",
    url: "https://peartree.dental/mapperley/advanced-family-orthodontics",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/advanced-family-orthodontics",
  },
};

export default function MapperleyAdvancedFamilyOrthodonticsPage() {
  const mapperleyOrthoFAQs = [
    {
      question:
        "How convenient is advanced family orthodontics from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in premium family orthodontics, providing invisible and aesthetic solutions with coordinated care for discerning families who value both results and discretion.",
    },
    {
      question:
        "What makes your orthodontics 'advanced' for Mapperley families?",
      answer:
        "We offer the most sophisticated orthodontic systems available: lingual (behind-teeth) braces, premium Invisalign, aesthetic ceramics, and cutting-edge technology. These solutions are perfect for professionals and image-conscious families.",
    },
    {
      question:
        "Can you coordinate orthodontic treatment for multiple family members?",
      answer:
        "Absolutely! We excel at family orthodontic coordination, planning treatments for parents, teens, and young adults simultaneously, managing schedules efficiently, and ensuring optimal outcomes for all family members.",
    },
    {
      question:
        "How do you ensure treatments remain invisible for professional families?",
      answer:
        "We specialize in invisible orthodontics: lingual braces (completely hidden), premium clear aligners, and ceramic brackets. Perfect for executives, professionals, and image-conscious teens who need discretion.",
    },
    {
      question: "What advanced technology do you use for family orthodontics?",
      answer:
        "We use 3D digital planning, iTero scanning, accelerated orthodontics, AI treatment planning, and premium materials to ensure the most efficient, comfortable, and aesthetically pleasing results.",
    },
  ];

  const orthodonticSolutions = [
    {
      solution: "Lingual Braces (Behind Teeth)",
      description: "Completely invisible orthodontics for ultimate discretion",
      benefits: [
        "100% invisible",
        "Custom-made",
        "Professional discretion",
        "Superior results",
      ],
      suitability: "Executives, professionals, image-conscious adults",
      timeline: "18-30 months",
      investment: "From £6,500",
      icon: Eye,
      highlight: "Most Discreet",
    },
    {
      solution: "Premium Invisalign Diamond Provider",
      description: "Top-tier clear aligner treatment with expert planning",
      benefits: [
        "Nearly invisible",
        "Removable convenience",
        "Advanced planning",
        "Faster results",
      ],
      suitability: "Busy professionals, teens, family coordination",
      timeline: "12-24 months",
      investment: "From £4,200",
      icon: Sparkles,
      highlight: "Most Popular",
    },
    {
      solution: "Aesthetic Ceramic Braces",
      description: "Tooth-colored braces for superior aesthetics",
      benefits: [
        "Virtually invisible",
        "Efficient treatment",
        "Comfortable design",
        "Excellent results",
      ],
      suitability: "Teens preferring fixed options, complex cases",
      timeline: "18-36 months",
      investment: "From £3,800",
      icon: Crown,
      highlight: "Teen Favorite",
    },
    {
      solution: "Accelerated Orthodontics",
      description: "Advanced techniques for faster treatment completion",
      benefits: [
        "50% faster treatment",
        "Comfortable procedures",
        "Professional focus",
        "Premium results",
      ],
      suitability: "Time-conscious professionals, special events",
      timeline: "6-18 months",
      investment: "From £7,500",
      icon: Zap,
      highlight: "Fastest Results",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Complete Invisibility",
      description:
        "Advanced orthodontic solutions that remain completely hidden",
      value: "Professional discretion",
      icon: Eye,
    },
    {
      benefit: "Family Coordination",
      description: "Synchronized treatment planning across all family members",
      value: "Optimal scheduling",
      icon: Users,
    },
    {
      benefit: "Premium Technology",
      description:
        "Latest orthodontic innovations for superior comfort and results",
      value: "Advanced outcomes",
      icon: Monitor,
    },
    {
      benefit: "Aesthetic Excellence",
      description: "Beautiful, natural results that enhance facial harmony",
      value: "Enhanced attractiveness",
      icon: Sparkles,
    },
  ];

  const generationalNeeds = [
    {
      generation: "Young Professionals (25-35)",
      orthodonticConcerns:
        "Career image, professional meetings, dating confidence",
      premiumSolutions: [
        "Lingual braces",
        "Premium Invisalign",
        "Accelerated treatment",
      ],
      familyConsiderations: [
        "Complete invisibility",
        "Professional schedules",
        "Fast results",
        "Dating confidence",
      ],
      outcomes: "Enhanced professional and personal confidence",
      icon: Briefcase,
    },
    {
      generation: "Professional Parents (35-50)",
      orthodonticConcerns:
        "Executive image, family coordination, time constraints",
      premiumSolutions: [
        "Executive Invisalign",
        "Lingual braces",
        "Coordinated family care",
      ],
      familyConsiderations: [
        "Business discretion",
        "Family scheduling",
        "Professional image",
        "Long-term investment",
      ],
      outcomes: "Professional success and family leadership",
      icon: Users,
    },
    {
      generation: "Image-Conscious Teens (13-18)",
      orthodonticConcerns:
        "Social confidence, selfies, dating, school activities",
      premiumSolutions: [
        "Clear aligners",
        "Ceramic braces",
        "Aesthetic options",
      ],
      familyConsiderations: [
        "Social acceptance",
        "School schedules",
        "Parental approval",
        "Activity compatibility",
      ],
      outcomes: "Enhanced teenage confidence and social success",
      icon: GraduationCap,
    },
    {
      generation: "Mature Adults (50+)",
      orthodonticConcerns:
        "Professional image, health benefits, aesthetic improvement",
      premiumSolutions: [
        "Comfortable Invisalign",
        "Health-focused treatment",
        "Gentle approaches",
      ],
      familyConsiderations: [
        "Health benefits",
        "Comfort priority",
        "Professional image",
        "Treatment efficiency",
      ],
      outcomes: "Improved health, function, and confidence",
      icon: Heart,
    },
  ];

  const advancedTechnologies = [
    {
      technology: "3D Digital Treatment Planning",
      description: "Precise digital planning and outcome prediction",
      advantages: [
        "Accurate predictions",
        "Virtual treatment preview",
        "Optimal planning",
        "Family coordination",
      ],
      familyBenefit: "See results before starting treatment",
    },
    {
      technology: "iTero Digital Scanning",
      description: "Comfortable, precise digital impressions",
      advantages: [
        "No messy impressions",
        "Instant results",
        "Superior accuracy",
        "Better patient experience",
      ],
      familyBenefit: "Comfortable experience for all family members",
    },
    {
      technology: "AI Treatment Planning",
      description: "Artificial intelligence optimizes treatment plans",
      advantages: [
        "Optimized movements",
        "Faster treatment",
        "Predictable results",
        "Enhanced outcomes",
      ],
      familyBenefit: "Most efficient treatment possible",
    },
    {
      technology: "Accelerated Orthodontics",
      description: "Advanced techniques to speed treatment safely",
      advantages: [
        "50% faster results",
        "Comfortable procedures",
        "Maintained quality",
        "Professional focus",
      ],
      familyBenefit: "Faster results for busy family schedules",
    },
  ];

  const treatmentProcess = [
    {
      step: "Comprehensive Family Assessment",
      description: "Advanced digital analysis for all family members",
      duration: "90-120 minutes",
      activities: [
        "3D digital scans",
        "AI treatment planning",
        "Family coordination",
        "Investment consultation",
      ],
    },
    {
      step: "Personalized Treatment Design",
      description: "Custom treatment plans for each family member",
      duration: "2-3 weeks",
      activities: [
        "Digital treatment simulation",
        "Appliance customization",
        "Schedule coordination",
        "Outcome preview",
      ],
    },
    {
      step: "Coordinated Treatment Start",
      description: "Synchronized treatment initiation across family",
      duration: "1-2 appointments",
      activities: [
        "Appliance placement",
        "Comfort optimization",
        "Care instruction",
        "Family support",
      ],
    },
    {
      step: "Advanced Monitoring & Refinement",
      description: "High-tech monitoring and continuous optimization",
      duration: "Throughout treatment",
      activities: [
        "Digital progress tracking",
        "AI-assisted adjustments",
        "Family coordination",
        "Outcome optimization",
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
            name: "Pear Tree Dental - Advanced Family Orthodontics in Mapperley",
            image:
              "https://peartree.dental/images/advanced-family-orthodontics-mapperley.jpg",
            url: "https://peartree.dental/mapperley/advanced-family-orthodontics",
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
              "Advanced Orthodontics - Premium Family Solutions",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£3800-£7500",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-teal-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Family Orthodontics in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Premium Invisible Solutions Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Invisible orthodontics for
                professionals
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Book Advanced Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🔬 Advanced invisible orthodontics for discerning Mapperley
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
                Advanced Orthodontic Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families demand the highest level of
                orthodontic care. Our advanced solutions combine cutting-edge
                technology with premium aesthetics for completely invisible,
                efficient treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-teal-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-teal-100 text-teal-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-teal-50 rounded-lg p-8">
              <Monitor className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Premium Invisible Orthodontics
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families value professional
                discretion and aesthetic excellence. Our advanced orthodontic
                solutions remain completely invisible while delivering superior
                results.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    100% invisible
                  </div>
                  <p className="text-gray-600">
                    Lingual braces & premium aligners
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    Family coordination
                  </div>
                  <p className="text-gray-600">
                    Synchronized family treatments
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Orthodontic Solutions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Orthodontic Solutions for Every Mapperley Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our advanced orthodontic arsenal includes the most sophisticated
                systems available, ensuring complete invisibility and
                exceptional results for discerning families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(orthodonticSolutions || []).map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-teal-400 relative"
                  >
                    {solution.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-teal-600 text-white">
                          {solution.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {solution.solution}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {solution.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {solution.investment}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {solution.timeline}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {solution.suitability}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(solution.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
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

      {/* Generational Orthodontic Needs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Advanced Orthodontics for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each generation has unique orthodontic needs and aesthetic
                requirements. Our advanced solutions address these concerns with
                premium, invisible options.
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
                        <IconComponent className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.generation}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.orthodonticConcerns}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-teal-600 text-sm mb-1">
                            Premium Solutions:
                          </h4>
                          <ul className="space-y-1">
                            {(group.premiumSolutions || []).map(
                              (solution, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <CheckCircle className="w-3 h-3 text-teal-500 flex-shrink-0" />
                                  {solution}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-teal-600 text-sm mb-1">
                            Family Considerations:
                          </h4>
                          <ul className="space-y-1">
                            {(group.familyConsiderations || []).map(
                              (consideration, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <Star className="w-3 h-3 text-teal-500 flex-shrink-0" />
                                  {consideration}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="bg-teal-50 rounded-lg p-3">
                          <p className="text-sm text-teal-700 font-medium">
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

      {/* Advanced Technologies */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Cutting-Edge Orthodontic Technology for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We invest in the most advanced orthodontic technologies to
                provide Mapperley families with the most efficient, comfortable,
                and predictable treatments available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(advancedTechnologies || []).map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-full">
                        <Monitor className="w-6 h-6 text-teal-600" />
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
                              <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {advantage}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-teal-50 rounded-lg p-3">
                          <p className="text-sm text-teal-700 font-medium">
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
                Advanced Family Orthodontic Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our sophisticated approach ensures coordinated family
                orthodontic care with cutting-edge technology, premium
                materials, and exceptional aesthetic outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(treatmentProcess || []).map((step, index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                          <CheckCircle className="w-3 h-3 text-teal-500 flex-shrink-0" />
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
                What Mapperley Families Say About Our Advanced Orthodontics
              </h2>
            </div>

            <TestimonialBanner
              text="Our entire family needed orthodontic treatment and being just down the road from Mapperley made coordination so easy. I had lingual braces for complete invisibility at work, my husband chose premium Invisalign, and our teenage twins had ceramic braces. The technology was incredible - we could see our results before starting! No one at work knew I was having treatment, and the results are absolutely perfect. The investment in advanced orthodontics has been life-changing for our confidence."
              author="Charlotte & Family from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  100% invisible
                </div>
                <p className="text-gray-600">
                  Lingual braces & premium aligners
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  Family coordination
                </div>
                <p className="text-gray-600">Synchronized treatments</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  Professional discretion
                </div>
                <p className="text-gray-600">
                  No one knows you're in treatment
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
              Exceptional Orthodontic Results from Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the stunning smile transformations achieved with our advanced
              orthodontic solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/advanced-orthodontics-before-case-1.webp"
              afterImage="/images/advanced-orthodontics-after-case-1.webp"
              beforeAlt="Before advanced orthodontics - misaligned teeth affecting confidence"
              afterAlt="After advanced orthodontics - perfectly straight, beautiful smiles"
              title="Advanced Family Orthodontic Success"
              description="Professional Mapperley family with invisible lingual and clear aligner treatment"
              treatmentType="Advanced Family Orthodontic Program"
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
                Advanced Orthodontic Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about advanced
                orthodontic treatments
              </p>
            </div>

            <FAQSection faqs={mapperleyOrthoFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Advanced Orthodontics Just Down the Road from Mapperley
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
                  <div className="bg-teal-50 rounded-lg p-6">
                    <Eye className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h4 className="font-bold text-teal-700 mb-2">
                      Invisible Orthodontics
                    </h4>
                    <p className="text-gray-600">
                      Advanced invisible treatment solutions
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Achieve Perfect Smiles with Advanced Invisible Orthodontics from
              Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience the most advanced orthodontic solutions available with
              complete invisibility and professional discretion. Book your
              family orthodontic consultation from Mapperley today.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Advanced Orthodontic Specialists
              </p>
              <p className="text-sm opacity-90">
                Invisible solutions • Premium technology • Family coordination •
                Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Book Advanced Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ 100% invisible options</span>
              <span>✓ Premium technology</span>
              <span>✓ Family coordination</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
