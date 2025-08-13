import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  CalendarDays,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Award,
  Navigation,
  Baby,
  Users,
  GraduationCap,
  Home,
  Target,
  Gift,
  Activity,
  Utensils,
  Smile2,
  Trophy,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Family Dental Implants in Mapperley - Multi-Generational Tooth Replacement | Pear Tree Dental",
  description: "Family dental implants for affluent Mapperley families. Multi-generational tooth replacement, coordinated family care, and premium implant solutions just down the road.",
  keywords: [
    "family dental implants Mapperley",
    "dental implants Mapperley families",
    "multi-generational implants Mapperley NG5",
    "premium dental implants Sherwood",
    "coordinated implant care Mapperley",
    "family tooth replacement Mapperley",
    "quality dental implants Mapperley"
  ],
  openGraph: {
    title: "Family Dental Implants in Mapperley - Multi-Generational Tooth Replacement | Pear Tree Dental",
    description: "Family dental implants for affluent Mapperley families. Multi-generational tooth replacement and coordinated care just down the road.",
    url: "https://peartree.dental/mapperley/family-dental-implants"
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/family-dental-implants"
  }
};

export default function MapperleyFamilyDentalImplantsPage() {
  const mapperleyImplantsFAQs = [
    {
      question: "How convenient are family dental implants from Mapperley?",
      answer: "Pear Tree Dental is literally just down the road from Mapperley. We're specialists in coordinated family implant care, treating multiple generations with premium implant solutions and family-focused scheduling."
    },
    {
      question: "Can you coordinate implant treatment for multiple family members?",
      answer: "Absolutely! We excel at multi-generational implant planning. From grandparents needing full mouth restoration to parents requiring single implants, we coordinate care, timing, and recovery for optimal family outcomes."
    },
    {
      question: "What makes your implant service special for affluent Mapperley families?",
      answer: "We combine premium implant systems, coordinated family care, convenient location, and comprehensive solutions. Our focus on quality, family coordination, and long-term investment aligns with Mapperley families' expectations."
    },
    {
      question: "Do you offer family payment plans for multiple implant treatments?",
      answer: "Yes! We understand implant treatment represents a significant family investment. We offer flexible payment plans, family coordination discounts, and comprehensive treatment packages for multiple family members."
    },
    {
      question: "How do you coordinate implant care for different family generations?",
      answer: "We plan treatment timing to minimize family disruption, coordinate recovery periods, and ensure each generation receives age-appropriate implant solutions - from young adults to seniors."
    }
  ];

  const familyImplantTypes = [
    {
      implantType: "Single Family Implants",
      description: "Individual tooth replacement for parents and young adults",
      benefits: ["Natural appearance", "Preserve bone health", "Lifetime solution", "No impact on adjacent teeth"],
      bestFor: "Parents (30-50) with individual tooth loss",
      treatment: "3-6 months",
      price: "From £2,400",
      icon: UserCheck,
      highlight: "Most Common"
    },
    {
      implantType: "Multiple Family Implants",
      description: "Several missing teeth replacement for busy professionals",
      benefits: ["Replace multiple teeth", "Efficient treatment", "Coordinated care", "Excellent function"],
      bestFor: "Working parents with multiple tooth loss",
      treatment: "4-8 months",
      price: "From £6,000",
      icon: Users,
      highlight: "Professional Choice"
    },
    {
      implantType: "All-on-4 for Grandparents",
      description: "Full arch replacement with just 4 implants per jaw",
      benefits: ["Immediate function", "Full smile restoration", "Comfortable eating", "Confident speaking"],
      bestFor: "Grandparents (60+) with extensive tooth loss",
      treatment: "3-6 months",
      price: "From £8,500",
      icon: Trophy,
      highlight: "Senior Specialist"
    },
    {
      implantType: "Implant Bridges Family",
      description: "Replace multiple adjacent teeth efficiently",
      benefits: ["Cost-effective solution", "Strong and stable", "Natural appearance", "Easy maintenance"],
      bestFor: "Multi-generational tooth replacement",
      treatment: "4-6 months",
      price: "From £4,800",
      icon: Activity,
      highlight: "Value Option"
    }
  ];

  const familyBenefits = [
    {
      benefit: "Multi-Generational Planning",
      description: "Coordinate implant care across different family generations",
      value: "Optimal family outcomes",
      icon: Users
    },
    {
      benefit: "Premium Quality Systems",
      description: "Nobel Biocare and Straumann implant systems for excellence",
      value: "Lifetime investment",
      icon: Trophy
    },
    {
      benefit: "Family Coordination",
      description: "Synchronized treatment and recovery planning",
      value: "Minimal family disruption",
      icon: CalendarDays
    },
    {
      benefit: "Convenient Location",
      description: "Just down the road from Mapperley for easy access",
      value: "Maximum convenience",
      icon: Home
    }
  ];

  const generationalNeeds = [
    {
      generation: "Young Adults (25-35)",
      commonCauses: "Sports injuries, accidents, single tooth loss",
      implantSolutions: ["Single implants", "Immediate placement", "Aesthetic focus"],
      familyConsiderations: ["Career impact minimal", "Future planning important", "Insurance coordination"],
      recovery: "2-3 months",
      icon: Target
    },
    {
      generation: "Parents (35-55)",
      commonCauses: "Periodontal disease, failed treatments, multiple tooth loss",
      implantSolutions: ["Multiple implants", "Implant bridges", "Comprehensive care"],
      familyConsiderations: ["Busy schedule accommodation", "Family role maintenance", "Long-term investment"],
      recovery: "3-6 months",
      icon: Users
    },
    {
      generation: "Pre-Seniors (55-65)",
      commonCauses: "Advanced dental problems, preparation for retirement",
      implantSolutions: ["Comprehensive restoration", "All-on-4", "Full mouth rehabilitation"],
      familyConsiderations: ["Quality of life focus", "Retirement planning", "Health investment"],
      recovery: "4-8 months",
      icon: Heart
    },
    {
      generation: "Seniors (65+)",
      commonCauses: "Extensive tooth loss, denture problems, eating difficulties",
      implantSolutions: ["All-on-4", "All-on-6", "Implant-supported dentures"],
      familyConsiderations: ["Comfort priority", "Eating enjoyment", "Family coordination"],
      recovery: "3-6 months",
      icon: Award
    }
  ];

  const treatmentTimeline = [
    {
      phase: "Family Consultation",
      description: "Comprehensive assessment for all family members needing implants",
      duration: "1-2 hours",
      activities: ["CT scans for all patients", "Treatment planning", "Coordination scheduling", "Investment planning"]
    },
    {
      phase: "Coordinated Placement",
      description: "Strategic timing of implant placement procedures",
      duration: "Per individual",
      activities: ["Precise implant placement", "Temporary solutions", "Recovery coordination", "Family support"]
    },
    {
      phase: "Family Recovery",
      description: "Coordinated healing and monitoring phase",
      duration: "3-6 months",
      activities: ["Regular check-ups", "Healing monitoring", "Soft diet coordination", "Activity planning"]
    },
    {
      phase: "Final Restoration",
      description: "Crown, bridge, or denture placement for all family members",
      duration: "2-4 weeks",
      activities: ["Final impressions", "Crown/bridge fitting", "Bite adjustment", "Care instruction"]
    }
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
            "name": "Pear Tree Dental - Family Dental Implants in Mapperley",
            "image": "https://peartree.dental/images/family-dental-implants-mapperley.jpg",
            "url": "https://peartree.dental/mapperley/family-dental-implants",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Mapperley, NG5"
            },
            "medicalSpecialty": "Family Dental Implants - Multi-Generational Care",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£2400-£8500"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Affluent Mapperley Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Dental Implants in <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Multi-Generational Tooth Replacement Just Down the Road
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Home className="inline w-5 h-5 mr-2" />
                Just down the road from Mapperley — Premium family implant coordination
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🏆 Treating multiple generations with premium implant solutions!</p>
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
                Family Dental Implant Excellence for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When multiple family members need dental implants, we excel at coordinated care that
                maximizes outcomes while minimizing disruption to your family's lifestyle and commitments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-emerald-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-emerald-100 text-emerald-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-emerald-50 rounded-lg p-8">
              <Trophy className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Premium Multi-Generational Care</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley families value quality and coordination. Our approach
                ensures each generation receives optimal implant solutions with family-centered planning.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Premium systems</div>
                  <p className="text-gray-600">Nobel Biocare & Straumann</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Family coordination</div>
                  <p className="text-gray-600">Multi-generational planning</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Down the road</div>
                  <p className="text-gray-600">Ultimate convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Implant Types */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Implant Solutions for Every Mapperley Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From young professionals to grandparents, we provide the perfect implant solution
                for each family member's age, lifestyle, and specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyImplantTypes || []).map((implant, index) => {
                const IconComponent = implant.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-emerald-400 relative">
                    {implant.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-emerald-600 text-white">{implant.highlight}</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-emerald-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{implant.implantType}</CardTitle>
                      <p className="text-gray-600 text-sm">{implant.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{implant.price}</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{implant.treatment}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{implant.bestFor}</Badge>
                      </div>
                      <div className="space-y-2">
                        {implant.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
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

      {/* Generational Needs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Implant Care for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each generation has unique implant needs and considerations. We tailor our approach
                to ensure optimal outcomes for every family member's life stage and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(generationalNeeds || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">{group.generation}</h3>
                        <p className="text-gray-600 text-sm">{group.commonCauses}</p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-emerald-600 text-sm mb-1">Implant Solutions:</h4>
                          <ul className="space-y-1">
                            {group.implantSolutions.map((solution, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-emerald-600 text-sm mb-1">Family Considerations:</h4>
                          <ul className="space-y-1">
                            {group.familyConsiderations.map((consideration, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                                <Star className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                {consideration}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Clock className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-emerald-600 font-medium">{group.recovery}</span>
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

      {/* Treatment Timeline */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Coordinated Family Implant Treatment Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures optimal coordination when treating multiple family
                members, minimizing disruption while maximizing treatment outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(treatmentTimeline || []).map((phase, index) => (
                <Card key={phase.phase} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{phase.phase}</h3>
                    <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                    <Badge variant="outline" className="mb-4">{phase.duration}</Badge>
                    <div className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
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
                What Mapperley Families Say About Our Implant Care
              </h2>
            </div>

            <TestimonialBanner
              text="My mother, husband, and I all needed dental implants at different times. Being literally down the road from Mapperley made it so convenient for our family. They coordinated everything perfectly - my mother got All-on-4, my husband had three single implants, and I had an implant bridge. The quality is exceptional, and having it all done by the same trusted team was invaluable. Worth every penny for our family's long-term oral health."
              author="Margaret T. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">3 generations</div>
                <p className="text-gray-600">Coordinated family care</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Premium systems</div>
                <p className="text-gray-600">Nobel Biocare & Straumann</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Down the road</div>
                <p className="text-gray-600">Ultimate convenience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Exceptional Family Implant Results from Mapperley
            </h2>
            <p className="text-lg text-gray-600">
              See the life-changing implant transformations achieved by Mapperley families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-implants-before-case-1.webp"
              afterImage="/images/family-implants-after-case-1.webp"
              beforeAlt="Before family dental implants - missing teeth affecting eating"
              afterAlt="After family dental implants - restored function and confidence"
              title="Multi-Generational Implant Success"
              description="Mother and daughter from affluent Mapperley family with coordinated implant care"
              treatmentType="Family Dental Implant Program"
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
                Family Implant Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from affluent Mapperley families about coordinated dental implant care
              </p>
            </div>

            <FAQSection faqs={mapperleyImplantsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Premium Implant Care Just Down the Road from Mapperley
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
                    <p className="text-pear-primary font-semibold">Journey: Just down the road!</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-50 rounded-lg p-6">
                    <Trophy className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-bold text-emerald-700 mb-2">Premium Family Care</h4>
                    <p className="text-gray-600">Multi-generational implant coordination</p>
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
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Invest in Your Family's Oral Health with Premium Dental Implants from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your family the gift of confident smiles and optimal function. Book your coordinated
              family implant consultation from Mapperley with premium systems and expert coordination.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Implant Specialists
              </p>
              <p className="text-sm opacity-90">
                Multi-generational care • Premium systems • Family coordination • Just down the road
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Premium implant systems</span>
              <span>✓ Multi-generational coordination</span>
              <span>✓ Family payment plans available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
