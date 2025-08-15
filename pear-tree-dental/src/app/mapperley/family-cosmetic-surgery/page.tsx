import React from "react";
import {
  Award,
  CheckCircle,
  Gem,
  Home,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Scissors,
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
    "Family Cosmetic Surgery in Mapperley - Advanced Aesthetic Procedures | Pear Tree Dental",
  description:
    "Family cosmetic surgery for affluent Mapperley families. Advanced aesthetic procedures, gum contouring, facial aesthetics, and premium cosmetic solutions just down the road.",
  keywords: [
    "family cosmetic surgery Mapperley",
    "cosmetic surgery Mapperley families",
    "gum contouring Mapperley NG5",
    "facial aesthetics Mapperley",
    "advanced cosmetic procedures Sherwood",
    "premium cosmetic surgery Mapperley",
    "aesthetic enhancement Mapperley",
  ],
  openGraph: {
    title:
      "Family Cosmetic Surgery in Mapperley - Advanced Aesthetic Procedures | Pear Tree Dental",
    description:
      "Family cosmetic surgery for affluent Mapperley families. Advanced aesthetic procedures and premium solutions just down the road.",
    url: "https://peartree.dental/mapperley/family-cosmetic-surgery",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/family-cosmetic-surgery",
  },
};

export default function MapperleyFamilyCosmeticSurgeryPage() {
  const mapperleyCosmeticSurgeryFAQs = [
    {
      question: "How convenient is family cosmetic surgery from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in advanced cosmetic procedures, providing premium aesthetic enhancements with family coordination and investment-level results.",
    },
    {
      question: "What cosmetic surgery procedures do you offer for families?",
      answer:
        "We offer gum contouring, facial aesthetics, advanced lip enhancement, jawline refinement, smile line adjustment, and comprehensive facial harmony procedures - all coordinated for optimal family aesthetics.",
    },
    {
      question:
        "Can you coordinate cosmetic procedures for multiple family members?",
      answer:
        "Absolutely! We excel at family aesthetic coordination, planning complementary procedures, managing recovery periods, and ensuring harmonious aesthetic outcomes that enhance each family member's natural beauty.",
    },
    {
      question:
        "What makes your cosmetic surgery special for affluent Mapperley families?",
      answer:
        "We combine advanced surgical techniques, premium materials, artistic expertise, family coordination, and convenient location. Our investment-level approach delivers exceptional, natural-looking results.",
    },
    {
      question:
        "How do you ensure natural-looking results for cosmetic surgery?",
      answer:
        "We use advanced planning technology, consider facial harmony, age-appropriate enhancements, conservative approaches, and premium techniques to ensure beautiful, authentic-looking aesthetic improvements.",
    },
  ];

  const cosmeticProcedures = [
    {
      procedure: "Advanced Gum Contouring",
      description: "Precision gum reshaping for perfect smile proportions",
      techniques: [
        "Laser gum contouring",
        "Digital smile design",
        "Aesthetic gum lifting",
        "Crown lengthening",
      ],
      timeline: "1-2 appointments",
      investment: "From £850",
      icon: Scissors,
      highlight: "Most Popular",
    },
    {
      procedure: "Facial Aesthetic Enhancement",
      description: "Comprehensive facial aesthetics and lip enhancement",
      techniques: [
        "Dermal fillers",
        "Lip enhancement",
        "Facial contouring",
        "Anti-aging treatments",
      ],
      timeline: "Same day procedures",
      investment: "From £450",
      icon: Sparkles,
      highlight: "Non-Surgical",
    },
    {
      procedure: "Jawline & Profile Refinement",
      description: "Advanced procedures for facial profile enhancement",
      techniques: [
        "Jaw contouring",
        "Profile optimization",
        "Bite adjustment",
        "Facial balance",
      ],
      timeline: "2-6 months",
      investment: "From £2,200",
      icon: Target,
      highlight: "Advanced",
    },
    {
      procedure: "Comprehensive Smile Surgery",
      description: "Complete surgical smile transformations",
      techniques: [
        "Gum surgery",
        "Bone contouring",
        "Lip repositioning",
        "Facial harmony",
      ],
      timeline: "3-6 months",
      investment: "From £3,500",
      icon: Award,
      highlight: "Complete Solution",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Advanced Surgical Expertise",
      description: "Cutting-edge cosmetic procedures with artistic precision",
      value: "Superior aesthetic outcomes",
      icon: Scissors,
    },
    {
      benefit: "Family Aesthetic Coordination",
      description: "Harmonious enhancement planning across family members",
      value: "Complementary results",
      icon: Users,
    },
    {
      benefit: "Premium Materials & Techniques",
      description: "Investment-level procedures with finest materials",
      value: "Long-lasting excellence",
      icon: Gem,
    },
    {
      benefit: "Natural Enhancement Philosophy",
      description: "Conservative approach for authentic, beautiful results",
      value: "Enhanced natural beauty",
      icon: Palette,
    },
  ];

  const surgicalSpecialties = [
    {
      specialty: "Laser Gum Contouring",
      description: "Precision laser reshaping of gum tissues",
      benefits: [
        "Minimal discomfort",
        "Faster healing",
        "Precise results",
        "No sutures needed",
      ],
      familyValue: "Perfect for creating ideal smile proportions",
    },
    {
      specialty: "Dermal Facial Aesthetics",
      description: "Non-surgical facial enhancement and rejuvenation",
      benefits: [
        "Natural results",
        "No downtime",
        "Immediate improvement",
        "Confidence boosting",
      ],
      familyValue: "Complement dental aesthetics with facial harmony",
    },
    {
      specialty: "Advanced Lip Enhancement",
      description: "Sophisticated lip shaping and volume enhancement",
      benefits: [
        "Natural lip proportions",
        "Subtle enhancement",
        "Professional approach",
        "Beautiful results",
      ],
      familyValue: "Enhance smile aesthetics with perfect lip harmony",
    },
    {
      specialty: "Comprehensive Bite Surgery",
      description: "Advanced procedures for optimal function and aesthetics",
      benefits: [
        "Improved function",
        "Enhanced profile",
        "Better health",
        "Aesthetic improvement",
      ],
      familyValue: "Combine function with beauty for optimal outcomes",
    },
    {
      specialty: "Crown Lengthening Surgery",
      description: "Surgical exposure of tooth structure for aesthetics",
      benefits: [
        "Improved proportions",
        "Better crown fit",
        "Enhanced smile",
        "Functional improvement",
      ],
      familyValue: "Perfect foundation for aesthetic restorations",
    },
    {
      specialty: "Smile Line Adjustment",
      description: "Precision surgery for optimal smile display",
      benefits: [
        "Perfect smile lines",
        "Youthful appearance",
        "Enhanced confidence",
        "Natural results",
      ],
      familyValue: "Create beautiful, age-appropriate smile displays",
    },
  ];

  const familyTimeline = [
    {
      phase: "Comprehensive Aesthetic Assessment",
      description: "Detailed evaluation and surgical planning for family",
      duration: "2-3 consultations",
      activities: [
        "Individual assessments",
        "Digital surgical planning",
        "Family coordination",
        "Investment consultation",
      ],
    },
    {
      phase: "Surgical Preparation",
      description: "Pre-surgical optimization and family coordination",
      duration: "1-2 weeks",
      activities: [
        "Health optimization",
        "Surgical planning",
        "Recovery coordination",
        "Timeline scheduling",
      ],
    },
    {
      phase: "Precision Surgery",
      description: "Advanced cosmetic procedures with expert technique",
      duration: "Procedure dependent",
      activities: [
        "Minimally invasive surgery",
        "Comfort prioritization",
        "Artistic precision",
        "Family coordination",
      ],
    },
    {
      phase: "Aesthetic Recovery & Refinement",
      description: "Optimal healing and aesthetic refinement",
      duration: "2-12 weeks",
      activities: [
        "Recovery monitoring",
        "Healing optimization",
        "Aesthetic assessment",
        "Final refinements",
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
            name: "Pear Tree Dental - Family Cosmetic Surgery in Mapperley",
            image:
              "https://peartree.dental/images/family-cosmetic-surgery-mapperley.jpg",
            url: "https://peartree.dental/mapperley/family-cosmetic-surgery",
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
              "Cosmetic Surgery - Advanced Aesthetic Procedures",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£450-£3500",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-rose-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Cosmetic Surgery in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Advanced Aesthetic Procedures Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Investment-level aesthetic
                surgery
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-rose-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Scissors className="w-5 h-5 mr-2" />
                  Book Surgery Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                💎 Advanced aesthetic procedures for discerning Mapperley
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
                Advanced Cosmetic Surgery Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families seek the highest level of aesthetic
                enhancement. Our advanced cosmetic procedures combine surgical
                expertise with artistic vision for natural, beautiful results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-rose-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-rose-100 text-rose-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-rose-50 rounded-lg p-8">
              <Palette className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Artistic Aesthetic Enhancement
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families value natural beauty
                enhancement and subtle refinement. Our surgical approach
                combines precision technique with artistic vision for
                exceptional results.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    Natural enhancement
                  </div>
                  <p className="text-gray-600">
                    Conservative, beautiful results
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    Family coordination
                  </div>
                  <p className="text-gray-600">Harmonious aesthetic planning</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetic Procedures */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Advanced Cosmetic Procedures for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive range of cosmetic surgery procedures combines
                the latest techniques with artistic expertise to deliver
                natural, beautiful enhancements for discerning families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(cosmeticProcedures || []).map((procedure, index) => {
                const IconComponent = procedure.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-rose-400 relative"
                  >
                    {procedure.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-rose-600 text-white">
                          {procedure.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-rose-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {procedure.procedure}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {procedure.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {procedure.investment}
                        </p>
                        <Badge variant="outline" className="mb-4">
                          {procedure.timeline}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {(procedure.techniques || []).map((technique, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {technique}
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

      {/* Surgical Specialties */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Specialized Cosmetic Surgery Techniques for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our advanced surgical specialties combine precision technique
                with aesthetic artistry to deliver exceptional, natural-looking
                enhancements for discerning families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(surgicalSpecialties || []).map((specialty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Scissors className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {specialty.specialty}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {specialty.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {(specialty.benefits || []).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-rose-50 rounded-lg p-3">
                          <p className="text-sm text-rose-700 font-medium">
                            {specialty.familyValue}
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

      {/* Family Surgery Timeline */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Cosmetic Surgery Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures coordinated family cosmetic
                surgery with optimal timing, minimal disruption, and exceptional
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
                    <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                          <CheckCircle className="w-3 h-3 text-rose-500 flex-shrink-0" />
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
                What Mapperley Families Say About Our Cosmetic Surgery
              </h2>
            </div>

            <TestimonialBanner
              text="Our family wanted subtle aesthetic enhancements and being just down the road from Mapperley made everything so convenient. I had gum contouring and facial aesthetics, my husband had jawline refinement, and our daughter had lip enhancement for her 18th birthday. The results are absolutely beautiful - completely natural but so much more refined. Everyone notices we look fantastic but no one can tell exactly what we've had done. The investment in cosmetic surgery has given us such confidence!"
              author="Sophia & Family from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Natural results
                </div>
                <p className="text-gray-600">
                  Beautiful, authentic enhancements
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Family coordination
                </div>
                <p className="text-gray-600">Harmonious aesthetic planning</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Investment level
                </div>
                <p className="text-gray-600">Premium surgical techniques</p>
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
              Exceptional Cosmetic Surgery Results from Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the beautiful, natural aesthetic enhancements achieved by
              affluent Mapperley families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-cosmetic-surgery-before-case-1.webp"
              afterImage="/images/family-cosmetic-surgery-after-case-1.webp"
              beforeAlt="Before family cosmetic surgery - areas for aesthetic improvement"
              afterAlt="After family cosmetic surgery - natural, beautiful enhancements"
              title="Family Aesthetic Enhancement"
              description="Professional Mapperley family with coordinated cosmetic procedures"
              treatmentType="Family Cosmetic Surgery Program"
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
                Cosmetic Surgery Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about advanced
                cosmetic surgery procedures
              </p>
            </div>

            <FAQSection faqs={mapperleyCosmeticSurgeryFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Advanced Cosmetic Surgery Just Down the Road from Mapperley
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
                  <div className="bg-rose-50 rounded-lg p-6">
                    <Scissors className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                    <h4 className="font-bold text-rose-700 mb-2">
                      Cosmetic Surgery Excellence
                    </h4>
                    <p className="text-gray-600">
                      Advanced aesthetic procedures
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
      <section className="py-20 bg-gradient-to-br from-rose-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Enhance Your Natural Beauty with Advanced Cosmetic Surgery from
              Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience the most sophisticated cosmetic procedures available
              with natural, beautiful results. Book your family aesthetic
              consultation from Mapperley with expert surgical techniques.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Cosmetic Surgery Specialists
              </p>
              <p className="text-sm opacity-90">
                Advanced procedures • Natural results • Family coordination •
                Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-rose-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Scissors className="w-5 h-5 mr-2" />
                  Book Surgery Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Advanced surgical techniques</span>
              <span>✓ Natural, beautiful results</span>
              <span>✓ Family coordination available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
