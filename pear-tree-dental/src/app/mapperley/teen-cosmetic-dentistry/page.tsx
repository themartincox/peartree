import React from "react";
import {
  Camera,
  CheckCircle,
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
    "Teen Cosmetic Dentistry in Mapperley - Confidence Building Treatments | Pear Tree Dental",
  description:
    "Teen cosmetic dentistry for affluent Mapperley families. Confidence-building treatments, parent-approved cosmetic solutions, and teen-focused care just down the road.",
  keywords: [
    "teen cosmetic dentistry Mapperley",
    "teenage cosmetic dentistry Mapperley",
    "teen teeth whitening Mapperley NG5",
    "teen veneers Mapperley",
    "confidence building dentistry Sherwood",
    "teen smile makeover Mapperley",
    "teenage dental aesthetics Mapperley",
  ],
  openGraph: {
    title:
      "Teen Cosmetic Dentistry in Mapperley - Confidence Building Treatments | Pear Tree Dental",
    description:
      "Teen cosmetic dentistry for affluent Mapperley families. Confidence-building treatments with parental approval just down the road.",
    url: "https://peartree.dental/mapperley/teen-cosmetic-dentistry",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/teen-cosmetic-dentistry",
  },
};

export default function MapperleyTeenCosmeticDentistryPage() {
  const mapperleyTeenCosmeticFAQs = [
    {
      question: "How convenient is teen cosmetic dentistry from Mapperley?",
      answer:
        "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in teen cosmetic treatments, providing confidence-building solutions with parental guidance and age-appropriate approaches.",
    },
    {
      question: "What cosmetic treatments are suitable for teenagers?",
      answer:
        "We offer teen-safe whitening, composite bonding, clear aligners, minor veneers, and smile contouring. All treatments require parental approval and are designed to build confidence while maintaining dental health.",
    },
    {
      question:
        "Do you require parental involvement for teen cosmetic treatments?",
      answer:
        "Absolutely! We believe parents should be involved in all cosmetic decisions. We provide comprehensive consultations with both teen and parent to ensure everyone is comfortable with the treatment plan.",
    },
    {
      question:
        "What makes your teen cosmetic service special for Mapperley families?",
      answer:
        "We combine teen-appropriate treatments, parental guidance, confidence-building focus, convenient location, and understanding of teenage concerns. Our approach builds self-esteem while maintaining oral health.",
    },
    {
      question: "How do you ensure treatments are age-appropriate for teens?",
      answer:
        "We use conservative approaches, prioritize dental health, ensure treatments are reversible when possible, and always consider the teenager's developing dental structure and future needs.",
    },
  ];

  const teenTreatments = [
    {
      treatment: "Teen-Safe Teeth Whitening",
      description: "Gentle whitening specifically formulated for teenage teeth",
      benefits: [
        "Age-appropriate strength",
        "Safe for developing teeth",
        "Immediate confidence boost",
        "Professional supervision",
      ],
      ageRange: "16+ years with parental approval",
      duration: "1-2 weeks",
      price: "From £220",
      icon: Sparkles,
      highlight: "Most Popular",
    },
    {
      treatment: "Composite Bonding",
      description: "Natural-looking repairs for chips, gaps, and imperfections",
      benefits: [
        "Same-day results",
        "Conservative approach",
        "Reversible treatment",
        "Natural appearance",
      ],
      ageRange: "14+ years",
      duration: "1-2 hours",
      price: "From £150 per tooth",
      icon: Smile,
      highlight: "Instant Results",
    },
    {
      treatment: "Teen Clear Aligners",
      description: "Discreet orthodontic treatment for image-conscious teens",
      benefits: [
        "Nearly invisible",
        "Removable for activities",
        "Gradual improvement",
        "Social confidence",
      ],
      ageRange: "13+ years",
      duration: "6-18 months",
      price: "From £2,200",
      icon: TrendingUp,
      highlight: "Discreet Option",
    },
    {
      treatment: "Smile Contouring",
      description: "Gentle reshaping for improved tooth proportions",
      benefits: [
        "Subtle improvements",
        "Pain-free procedure",
        "Immediate results",
        "Enhanced harmony",
      ],
      ageRange: "16+ years",
      duration: "30-60 minutes",
      price: "From £120 per tooth",
      icon: Target,
      highlight: "Conservative",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Confidence Building Focus",
      description:
        "Treatments designed to enhance teenage self-esteem and social confidence",
      value: "Improved teenage wellbeing",
      icon: Heart,
    },
    {
      benefit: "Parental Partnership",
      description:
        "Full parental involvement in treatment planning and decision-making",
      value: "Family peace of mind",
      icon: Users,
    },
    {
      benefit: "Age-Appropriate Care",
      description:
        "Conservative treatments suitable for developing teenage dental structures",
      value: "Safe, responsible treatment",
      icon: Shield,
    },
    {
      benefit: "Convenient Excellence",
      description:
        "Premium teen cosmetic care just down the road from Mapperley",
      value: "Accessible expertise",
      icon: Home,
    },
  ];

  const teenConcerns = [
    {
      concern: "Social Confidence",
      description:
        "Teenagers worry about their appearance and social acceptance",
      cosmeticSolutions: [
        "Teeth whitening for brighter smiles",
        "Bonding for perfect front teeth",
        "Clear aligners for straight teeth",
      ],
      parentalConsiderations: [
        "Age-appropriate treatments",
        "Conservative approaches",
        "Building self-esteem",
      ],
      outcomes: "Enhanced confidence and social comfort",
      icon: Heart,
    },
    {
      concern: "School & Social Life",
      description:
        "Treatments must fit around school, sports, and social activities",
      cosmeticSolutions: [
        "Removable aligners",
        "Quick bonding procedures",
        "Weekend appointments available",
      ],
      parentalConsiderations: [
        "Minimal school disruption",
        "Activity compatibility",
        "Flexible scheduling",
      ],
      outcomes: "Treatment that fits teenage lifestyle",
      icon: GraduationCap,
    },
    {
      concern: "Image Consciousness",
      description: "Teens want improvements without obvious dental work",
      cosmeticSolutions: [
        "Natural-looking results",
        "Subtle improvements",
        "Gradual enhancement",
      ],
      parentalConsiderations: [
        "Conservative treatment",
        "Natural appearance",
        "Age-appropriate results",
      ],
      outcomes: "Beautiful, natural-looking improvements",
      icon: Camera,
    },
    {
      concern: "Future Dental Health",
      description: "Treatments should support long-term oral health goals",
      cosmeticSolutions: [
        "Health-preserving treatments",
        "Reversible options",
        "Foundation for future care",
      ],
      parentalConsiderations: [
        "Long-term dental health",
        "Conservative approaches",
        "Future flexibility",
      ],
      outcomes: "Healthy foundation for adult dental care",
      icon: Shield,
    },
  ];

  const parentalGuidance = [
    {
      guidanceArea: "Treatment Selection",
      parentRole: "Active participation in choosing appropriate treatments",
      teenInvolvement: "Express preferences and concerns openly",
      professionalInput: "Expert guidance on age-appropriate options",
      decisionProcess: "Collaborative family decision-making",
    },
    {
      guidanceArea: "Realistic Expectations",
      parentRole: "Help set appropriate goals and timelines",
      teenInvolvement: "Understand treatment limitations and benefits",
      professionalInput: "Provide honest assessment of achievable results",
      decisionProcess: "Clear communication about expected outcomes",
    },
    {
      guidanceArea: "Financial Investment",
      parentRole: "Make informed decisions about treatment costs",
      teenInvolvement: "Appreciate investment in their confidence",
      professionalInput: "Transparent pricing and payment options",
      decisionProcess: "Family budget planning and investment decisions",
    },
    {
      guidanceArea: "Maintenance Commitment",
      parentRole: "Support ongoing care and oral hygiene",
      teenInvolvement: "Take responsibility for treatment maintenance",
      professionalInput: "Provide care instructions and follow-up",
      decisionProcess: "Establish home care routines and responsibilities",
    },
  ];

  const treatmentApproach = [
    {
      step: "Family Consultation",
      description: "Comprehensive assessment with teen and parent together",
      duration: "60-90 minutes",
      activities: [
        "Teen concerns discussion",
        "Parental input gathering",
        "Treatment option review",
        "Expectation setting",
      ],
    },
    {
      step: "Treatment Planning",
      description: "Collaborative planning with family involvement",
      duration: "Follow-up consultation",
      activities: [
        "Age-appropriate options",
        "Parental approval process",
        "Timeline establishment",
        "Investment planning",
      ],
    },
    {
      step: "Conservative Treatment",
      description: "Gentle, teen-appropriate cosmetic procedures",
      duration: "Varies by treatment",
      activities: [
        "Minimally invasive techniques",
        "Comfort prioritization",
        "Natural-looking results",
        "Progress monitoring",
      ],
    },
    {
      step: "Confidence Building",
      description: "Follow-up care and confidence assessment",
      duration: "Ongoing support",
      activities: [
        "Results evaluation",
        "Confidence building",
        "Maintenance planning",
        "Future care guidance",
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
            name: "Pear Tree Dental - Teen Cosmetic Dentistry in Mapperley",
            image:
              "https://peartree.dental/images/teen-cosmetic-dentistry-mapperley.jpg",
            url: "https://peartree.dental/mapperley/teen-cosmetic-dentistry",
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
              "Teenage Cosmetic Dentistry - Confidence Building Care",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£120-£2200",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pink-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Teen Cosmetic Dentistry in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Confidence-Building Treatments Just Down the Road
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Teen-focused cosmetic care
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-pink-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Book Teen Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                💫 Building teenage confidence with parent-approved treatments!
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
                Teen Cosmetic Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Affluent Mapperley families understand the importance of teenage
                confidence and self-esteem. Our teen cosmetic approach combines
                age-appropriate treatments with parental guidance and
                professional expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-pink-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-pink-100 text-pink-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-pink-50 rounded-lg p-8">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Building Teenage Confidence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that teenage years are crucial for self-esteem
                development. Our cosmetic treatments are designed to build
                confidence while maintaining dental health and involving parents
                in decisions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    Teen-focused
                  </div>
                  <p className="text-gray-600">Age-appropriate treatments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    Parent-approved
                  </div>
                  <p className="text-gray-600">Full family involvement</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    Down the road
                  </div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teen Treatment Options */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Teen-Appropriate Cosmetic Treatments for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our teen cosmetic treatments are carefully selected to be
                age-appropriate, confidence-building, and safe for developing
                teenage dental structures with full parental involvement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(teenTreatments || []).map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pink-400 relative"
                  >
                    {treatment.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-pink-600 text-white">
                          {treatment.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pink-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {treatment.treatment}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {treatment.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {treatment.price}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {treatment.ageRange}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {treatment.duration}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {(treatment.benefits || []).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
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

      {/* Teen Concerns & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Understanding Teenage Cosmetic Concerns in Mapperley
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique concerns teenagers face about their
                appearance. Our approach addresses these concerns with
                appropriate solutions and full parental support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(teenConcerns || []).map((concern, index) => {
                const IconComponent = concern.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-pink-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {concern.concern}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {concern.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-pink-600 text-sm mb-1">
                            Cosmetic Solutions:
                          </h4>
                          <ul className="space-y-1">
                            {(concern.cosmeticSolutions || []).map(
                              (solution, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <CheckCircle className="w-3 h-3 text-pink-500 flex-shrink-0" />
                                  {solution}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-pink-600 text-sm mb-1">
                            Parental Considerations:
                          </h4>
                          <ul className="space-y-1">
                            {(concern.parentalConsiderations || []).map(
                              (consideration, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <Users className="w-3 h-3 text-pink-500 flex-shrink-0" />
                                  {consideration}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="bg-pink-50 rounded-lg p-3">
                          <p className="text-sm text-pink-700 font-medium">
                            {concern.outcomes}
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

      {/* Parental Guidance */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Parental Partnership in Teen Cosmetic Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mapperley parents are actively involved in their teenager's
                cosmetic dental decisions. We provide comprehensive guidance to
                ensure the best outcomes for the whole family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(parentalGuidance || []).map((guidance, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Users className="w-12 h-12 text-pink-600 mx-auto mb-2" />
                      <h3 className="font-bold text-pear-primary">
                        {guidance.guidanceArea}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">
                          Parent Role:
                        </h4>
                        <p className="text-xs text-gray-600">
                          {guidance.parentRole}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">
                          Teen Involvement:
                        </h4>
                        <p className="text-xs text-gray-600">
                          {guidance.teenInvolvement}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">
                          Professional Input:
                        </h4>
                        <p className="text-xs text-gray-600">
                          {guidance.professionalInput}
                        </p>
                      </div>

                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-sm text-pink-700 font-medium">
                          {guidance.decisionProcess}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Our Teen Cosmetic Treatment Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures that teenage cosmetic treatments
                are appropriate, safe, and confidence-building with full family
                involvement and support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(treatmentApproach || []).map((step, index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                          <CheckCircle className="w-3 h-3 text-pink-500 flex-shrink-0" />
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
                What Mapperley Families Say About Our Teen Cosmetic Care
              </h2>
            </div>

            <TestimonialBanner
              text="My 16-year-old daughter was very self-conscious about her stained teeth and a small chip. Being just down the road from Mapperley made appointments so convenient. The team involved me in every decision and explained all the options. Emma had composite bonding for the chip and gentle teeth whitening. The transformation in her confidence is incredible - she's smiling all the time now! The approach was perfect for a teenager, and I felt completely comfortable with every step."
              author="Helen K. & Emma (16) from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  Teen-focused
                </div>
                <p className="text-gray-600">Age-appropriate treatments</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  Parent-approved
                </div>
                <p className="text-gray-600">Full family involvement</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  Confidence boost
                </div>
                <p className="text-gray-600">Enhanced self-esteem</p>
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
              Confidence-Building Results for Mapperley Teens
            </h2>
            <p className="text-lg text-gray-600">
              See the beautiful, age-appropriate cosmetic transformations
              achieved by Mapperley teenagers
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/teen-cosmetic-before-case-1.webp"
              afterImage="/images/teen-cosmetic-after-case-1.webp"
              beforeAlt="Before teen cosmetic dentistry - self-conscious teenage smile"
              afterAlt="After teen cosmetic dentistry - confident, beautiful teenage smile"
              title="Teen Confidence Transformation"
              description="17-year-old from Mapperley with bonding and whitening treatment"
              treatmentType="Teen Cosmetic Program"
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
                Teen Cosmetic Questions from Mapperley Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about teen
                cosmetic dentistry
              </p>
            </div>

            <FAQSection faqs={mapperleyTeenCosmeticFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Teen Cosmetic Excellence Just Down the Road from Mapperley
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
                  <div className="bg-pink-50 rounded-lg p-6">
                    <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <h4 className="font-bold text-pink-700 mb-2">
                      Teen-Focused Care
                    </h4>
                    <p className="text-gray-600">
                      Confidence-building cosmetic treatments
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
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Build Your Teenager's Confidence with Expert Cosmetic Care from
              Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your teenager the gift of confident smiles and enhanced
              self-esteem. Book your teen cosmetic consultation from Mapperley
              with age-appropriate treatments and full parental involvement.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Teen Cosmetic Specialists
              </p>
              <p className="text-sm opacity-90">
                Age-appropriate treatments • Parental partnership • Confidence
                building • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-pink-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Book Teen Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Teen-safe treatments</span>
              <span>✓ Parental approval required</span>
              <span>✓ Confidence-building focus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
