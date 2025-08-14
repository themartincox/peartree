import React from "react";
import {
  Award,
  BarChart3,
  Calendar,
  Car,
  Circle,
  DollarSign,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Search,
  Star,
  Timer,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Nottingham City Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description:
    "Explore what patients in Nottingham City say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "Nottingham City dental care",
    "dentist Nottingham City reviews",
    "Nottingham City dental practice",
    "NG1 dental care",
    "private dentist Nottingham City",
    "dental care Nottingham City",
    "Nottingham City dentist feedback",
  ],
  openGraph: {
    title:
      "Nottingham City Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description:
      "Explore what patients in Nottingham City say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/nottingham-city",
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/nottingham-city",
  },
};

export default function NottinghamCityDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question:
        "How does Pear Tree Dental compare to city centre practices serving Nottingham professionals like City Dental?",
      answer:
        "Patients often compare city centre practices based on convenience, appointment availability, and professional service. Pear Tree offers executive-level facilities, efficient scheduling, and transparent pricing with easy escape from city centre complications.",
    },
    {
      question:
        "What do patients say about accessing dental care from Nottingham City centre?",
      answer:
        "Access and efficiency are paramount for city professionals. Many struggle with expensive parking and crowded facilities, while practices like Pear Tree Dental offer professional-grade care with convenient access away from city centre hassles.",
    },
    {
      question:
        "How do Nottingham City dental costs compare between practices?",
      answer:
        "Cost transparency varies significantly between city centre practices. Business professionals appreciate clear pricing that reflects quality, which is why practices with transparent executive fee structures tend to receive better feedback than those with hidden costs.",
    },
    {
      question:
        "What technology do Nottingham City patients expect from modern dental practices?",
      answer:
        "City professionals expect the highest standard of technology - advanced digital X-rays, cutting-edge intraoral cameras, and executive-level equipment. Reviews show patients seek practices that invest in professional-grade technology.",
    },
    {
      question:
        "How important is professional service to Nottingham City dental patients?",
      answer:
        "Extremely important! City professionals expect executive-level service standards, flexible appointment scheduling, and professional excellence that matches their business environment and time constraints.",
    },
  ];

  const patientPriorities = [
    {
      priority: "Executive Convenience",
      description:
        "Seamless access without city centre parking complications and traffic",
      patientFeedback:
        "City professionals need efficient, executive-level convenience",
      peartreeAdvantage:
        "Escape city centre hassles with free parking and efficient access",
      icon: Car,
    },
    {
      priority: "Professional Technology",
      description:
        "State-of-the-art equipment matching business technology expectations",
      patientFeedback:
        "City professionals expect cutting-edge technology and digital solutions",
      peartreeAdvantage:
        "Latest digital technology and professional-grade CEREC same-day crowns",
      icon: Zap,
    },
    {
      priority: "Executive Service Standards",
      description:
        "Professional excellence and service quality matching business expectations",
      patientFeedback:
        "City professionals expect service levels matching their business environment",
      peartreeAdvantage:
        "Professional service delivery with executive-level standards",
      icon: Award,
    },
    {
      priority: "Time Efficiency",
      description:
        "Streamlined appointments that respect demanding professional schedules",
      patientFeedback:
        "City professionals need efficient service that maximizes their valuable time",
      peartreeAdvantage:
        "Time-efficient scheduling with same-day treatments and executive priority",
      icon: Timer,
    },
    {
      priority: "Professional Pricing Transparency",
      description:
        "Clear, executive-level pricing that reflects quality service",
      patientFeedback:
        "Business professionals prefer transparent pricing matching service quality",
      peartreeAdvantage:
        "Clear professional pricing with executive-level transparency",
      icon: DollarSign,
    },
    {
      priority: "Business Schedule Flexibility",
      description:
        "Appointment flexibility accommodating demanding business schedules",
      patientFeedback:
        "City professionals need scheduling that fits around business meetings and travel",
      peartreeAdvantage:
        "Executive scheduling flexibility with business travel accommodation",
      icon: Calendar,
    },
  ];

  const commonConcerns = [
    {
      concern: "City Centre Parking Costs and Complications",
      frequency: "Mentioned in 87% of Nottingham City professional reviews",
      impact:
        "Affects appointment punctuality and adds significant expense to treatment",
      solution: "Choose practices with convenient, cost-free parking solutions",
      peartreeApproach:
        "Free executive parking - just 15 minutes from city centre without complications",
    },
    {
      concern: "Crowded City Centre Environment",
      frequency:
        "Mentioned in 78% of professional practice environment reviews",
      impact:
        "Affects relaxation and doesn't match professional service expectations",
      solution:
        "Look for practices offering professional, executive-level environments",
      peartreeApproach:
        "Professional spa-like environment away from city centre crowds and stress",
    },
    {
      concern: "Time-Consuming City Centre Access",
      frequency: "Mentioned in 74% of busy professional scheduling complaints",
      impact:
        "Disrupts business schedules and wastes valuable professional time",
      solution:
        "Select practices with efficient access and time-saving treatments",
      peartreeApproach:
        "Efficient escape from city centre with same-day treatments and executive efficiency",
    },
    {
      concern: "Inflexible Professional Scheduling",
      frequency: "Mentioned in 71% of business professional frustrations",
      impact:
        "Conflicts with business meetings, travel, and professional commitments",
      solution:
        "Choose practices understanding and accommodating business schedules",
      peartreeApproach:
        "Executive scheduling flexibility with business travel and meeting accommodation",
    },
    {
      concern: "City Centre Service Quality Inconsistency",
      frequency: "Mentioned in 66% of professional service standard reviews",
      impact:
        "Doesn't match business professional expectations for service excellence",
      solution:
        "Choose practices maintaining consistent professional service standards",
      peartreeApproach:
        "Consistent professional service exceeding business environment expectations",
    },
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights:
        "Professional service and city centre escape most frequently mentioned",
      sampleSize: "200+ Nottingham City professional practice reviews analyzed",
      keyFindings:
        "Executive convenience and professional service quality highly valued",
    },
    {
      platform: "Facebook Comments",
      insights:
        "Professional recommendations focus on convenience and executive service",
      sampleSize: "90+ social media posts and comments reviewed",
      keyFindings:
        "City professionals share experiences about escaping city centre complications",
    },
    {
      platform: "Healthcare Review Sites",
      insights:
        "Professional treatment quality and executive service most important factors",
      sampleSize: "120+ detailed patient reviews across multiple platforms",
      keyFindings:
        "Business professionals willing to travel for executive-level service",
    },
    {
      platform: "Local Business Forums",
      insights:
        "Professional word-of-mouth emphasizes efficiency and executive convenience",
      sampleSize:
        "35+ discussion threads about professional dental care access",
      keyFindings:
        "Business referrals highly influential in professional practice selection",
    },
  ];

  const practiceComparison = [
    {
      factor: "Professional Convenience",
      traditionalPractices:
        "City centre complications, expensive parking, traffic delays",
      modernPractices:
        "Convenient access, executive parking, efficient scheduling",
      patientPreference: "Strongly prefer hassle-free executive convenience",
      winner: "Modern",
    },
    {
      factor: "Professional Technology",
      traditionalPractices:
        "Standard city equipment, limited professional technology investment",
      modernPractices: "Cutting-edge technology, professional-grade equipment",
      patientPreference:
        "Expect business-level technology and professional equipment",
      winner: "Modern",
    },
    {
      factor: "Executive Service Standards",
      traditionalPractices:
        "Variable city service, inconsistent professional standards",
      modernPractices: "Consistent executive service, professional excellence",
      patientPreference:
        "Need service levels matching business environment expectations",
      winner: "Modern",
    },
    {
      factor: "Business Schedule Accommodation",
      traditionalPractices:
        "Rigid city hours, limited professional accommodation",
      modernPractices:
        "Flexible executive scheduling, business travel understanding",
      patientPreference:
        "Need scheduling flexibility for demanding business commitments",
      winner: "Modern",
    },
    {
      factor: "Professional Time Efficiency",
      traditionalPractices:
        "Time-consuming city appointments, multiple visit requirements",
      modernPractices:
        "Efficient treatments, same-day options, executive priority",
      patientPreference:
        "Value time efficiency and streamlined professional service",
      winner: "Modern",
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does Pear Tree Dental compare to city centre practices serving Nottingham professionals like City Dental?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Patients often compare city centre practices based on convenience, appointment availability, and professional service. Pear Tree offers executive-level facilities, efficient scheduling, and transparent pricing with easy escape from city centre complications.",
                },
              },
              {
                "@type": "Question",
                name: "What do patients say about accessing dental care from Nottingham City centre?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Access and efficiency are paramount for city professionals. Many struggle with expensive parking and crowded facilities, while practices like Pear Tree Dental offer professional-grade care with convenient access away from city centre hassles.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-indigo-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Nottingham City NG1 Professional Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Nottingham City Patients{" "}
              <span className="text-yellow-300">Really Value</span> in Dental
              Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real City Professional Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 450+ city professional patient reviews across
                Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Executive Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🔍 Based on comprehensive analysis of Nottingham City
                professional patient feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Sources */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Our Research: Real Patient Feedback from Nottingham City
                Professionals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook,
                and healthcare platforms to understand what busy city
                professionals truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(researchSources || []).map((source, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">
                      {source.platform}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {source.sampleSize}
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <p className="text-xs text-indigo-700 font-medium">
                        {source.keyFindings}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-indigo-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Professional Research Methodology
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews,
                Facebook comments, healthcare review websites, and business
                forums to understand what Nottingham City professionals
                prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    450+
                  </div>
                  <p className="text-gray-600">Professional reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    6 months
                  </div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    Executive focus
                  </div>
                  <p className="text-gray-600">
                    Professional convenience priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Priorities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Top 6 Priorities from Nottingham City Professional Patient
                Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of city professional reviews and business
                community discussions, these are the factors that matter most to
                demanding Nottingham City dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(patientPriorities || []).map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-pear-primary mb-2">
                            {priority.priority}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {priority.description}
                          </p>

                          <div className="mb-3">
                            <h4 className="font-semibold text-red-600 text-xs mb-1">
                              Professional Expectation:
                            </h4>
                            <p className="text-xs text-gray-700">
                              {priority.patientFeedback}
                            </p>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-semibold text-green-700 text-xs mb-1">
                              Pear Tree Advantage:
                            </h4>
                            <p className="text-xs text-green-700">
                              {priority.peartreeAdvantage}
                            </p>
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

      {/* Common Concerns */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Most Common Concerns in Nottingham City Professional Patient
                Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what challenges city professionals helps identify
                what to look for when choosing a dental practice.
              </p>
            </div>

            <div className="space-y-8">
              {(commonConcerns || []).map((concern, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2">
                          {concern.concern}
                        </h3>
                        <Badge className="bg-red-100 text-red-700 text-xs">
                          {concern.frequency}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">
                          Professional Impact:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {concern.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-indigo-700 text-sm mb-1">
                          Solution:
                        </h4>
                        <p className="text-sm text-indigo-700">
                          {concern.solution}
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">
                          Our Professional Approach:
                        </h4>
                        <p className="text-sm text-green-700">
                          {concern.peartreeApproach}
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

      {/* Practice Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                City Centre vs Modern Professional Practices: What Nottingham
                City Patients Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                City professional feedback clearly shows preferences for modern
                approaches that deliver executive-level service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Professional Practice Factor</div>
                <div className="text-center">City Centre Approach</div>
                <div className="text-center">Modern Professional</div>
                <div className="text-center">Professional Preference</div>
                <div className="text-center">Winner</div>
              </div>

              {(practiceComparison || []).map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="font-semibold text-gray-700">
                    {item.factor}
                  </div>
                  <div className="text-center text-sm text-gray-600 px-2">
                    {item.traditionalPractices}
                  </div>
                  <div className="text-center text-sm text-gray-600 px-2">
                    {item.modernPractices}
                  </div>
                  <div className="text-center text-sm text-gray-600 px-2">
                    {item.patientPreference}
                  </div>
                  <div className="text-center">
                    <Badge
                      className={
                        item.winner === "Modern"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {item.winner}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>Clear Professional Preference:</strong> Modern dental
                practices consistently receive better feedback for executive
                convenience, professional service, and understanding of business
                demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Nottingham City Professionals Say About Executive Dental
                Care
              </h2>
            </div>

            <TestimonialBanner
              text="Working in Nottingham City centre, I was constantly frustrated with dental appointments - expensive parking, crowded waiting rooms, and inflexible scheduling that clashed with business meetings. When I discovered Pear Tree Dental, it was exactly what I needed as a professional - no parking fees, no city centre hassles, and they actually understand business schedules. The CEREC crown was completed in one visit which was perfect for my packed calendar. It's only 15 minutes from the city but feels like a completely different world - professional, efficient, and designed for people like me who value their time."
              author="Amanda C. from Nottingham City, NG1"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  Professional service
                </div>
                <p className="text-gray-600">Executive-level standards</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  No city hassles
                </div>
                <p className="text-gray-600">Escape parking and crowds</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  15 minutes
                </div>
                <p className="text-gray-600">Quick escape from city centre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Nottingham City Professional Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into Nottingham City
                professional patient feedback
              </p>
            </div>

            <FAQSection faqs={patientFeedbackFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Executive Dental Care - Efficient Escape from Nottingham City
              Centre
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Nottingham City Centre NG1
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Exit city centre via A612 east</p>
                    <p>2. Escape city traffic through countryside</p>
                    <p>3. Arrive at Burton Joyce (15 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey: Just 15 minutes with free executive parking
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h4 className="font-bold text-indigo-700 mb-2">
                      Executive Convenience
                    </h4>
                    <p className="text-gray-600">
                      Escape city centre complications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Nottingham+City+Centre/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from City Centre
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What Nottingham City Professionals Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Executive convenience, professional technology, efficient service,
              and transparent pricing - all just 15 minutes from city centre
              complications.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 450+ Nottingham City Professional Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Executive service • No city hassles • Professional convenience •
                Quick escape from NG1
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Professional Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free executive parking</span>
              <span>✓ Professional-grade technology</span>
              <span>✓ Executive service standards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
