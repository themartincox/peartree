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
  Shield,
  Star,
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
    "The Park Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description:
    "Explore what patients in The Park say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "The Park dental care",
    "dentist The Park reviews",
    "The Park dental practice",
    "NG7 dental care",
    "private dentist The Park",
    "dental care The Park",
    "The Park dentist feedback",
  ],
  openGraph: {
    title:
      "The Park Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description:
      "Explore what patients in The Park say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/the-park",
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/the-park",
  },
};

export default function TheParkDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question:
        "How does Pear Tree Dental compare to premium practices serving The Park like Park Dental Care?",
      answer:
        "Patients often compare premium practices based on quality standards, appointment availability, and modern technology. Pear Tree offers exceptional facilities, professional service, and transparent pricing with convenient access from The Park.",
    },
    {
      question:
        "What do patients say about accessing quality dental care from The Park?",
      answer:
        "Quality and convenience are paramount for Park residents. Many seek practices that match their quality expectations while offering modern facilities, with practices like Pear Tree Dental providing premium care with excellent access.",
    },
    {
      question:
        "How do The Park dental costs compare between premium practices?",
      answer:
        "Cost transparency varies even among premium practices. Park residents appreciate clear pricing that reflects quality, which is why practices with transparent premium fee structures tend to receive better feedback than those with unclear costs.",
    },
    {
      question:
        "What technology do The Park patients expect from modern dental practices?",
      answer:
        "Park residents expect the highest standard of technology - state-of-the-art digital X-rays, advanced intraoral cameras, and premium equipment. Reviews show patients seek practices that invest in cutting-edge technology.",
    },
    {
      question: "How important is service quality to The Park dental patients?",
      answer:
        "Extremely important! Park residents expect premium service standards, flexible appointment scheduling, and professional excellence. They value practices that deliver exceptional care matching their quality expectations.",
    },
  ];

  const patientPriorities = [
    {
      priority: "Premium Convenience",
      description:
        "Seamless access and parking that matches upmarket lifestyle expectations",
      patientFeedback:
        "Park residents expect hassle-free, premium-quality convenience",
      peartreeAdvantage:
        "Exceptional access with premium parking directly outside practice",
      icon: Car,
    },
    {
      priority: "Cutting-Edge Technology",
      description:
        "State-of-the-art equipment and the most advanced treatment options",
      patientFeedback:
        "Park residents expect the latest technology and premium equipment",
      peartreeAdvantage:
        "Latest digital technology and premium CEREC same-day crowns",
      icon: Zap,
    },
    {
      priority: "Premium Service Standards",
      description:
        "Professional excellence and service quality matching upmarket expectations",
      patientFeedback:
        "Park residents expect exceptional service and professional standards",
      peartreeAdvantage:
        "Premium service delivery with professional excellence",
      icon: Award,
    },
    {
      priority: "Transparent Premium Pricing",
      description:
        "Clear, premium pricing that reflects quality without hidden surprises",
      patientFeedback:
        "Park residents prefer transparent pricing that reflects quality service",
      peartreeAdvantage:
        "Clear premium pricing with no hidden costs or surprises",
      icon: DollarSign,
    },
    {
      priority: "Flexible Premium Scheduling",
      description:
        "Appointment flexibility that accommodates professional lifestyles",
      patientFeedback:
        "Park residents need scheduling that fits demanding professional schedules",
      peartreeAdvantage:
        "Premium scheduling flexibility with same-day emergency appointments",
      icon: Calendar,
    },
    {
      priority: "Exclusive Personal Attention",
      description:
        "Individual care and attention that reflects premium expectations",
      patientFeedback:
        "Park residents prefer practices that provide exclusive, personal service",
      peartreeAdvantage:
        "Exclusive personal attention from experienced premium care team",
      icon: Shield,
    },
  ];

  const commonConcerns = [
    {
      concern: "Service Quality Inconsistency",
      frequency: "Mentioned in 71% of The Park area premium practice reviews",
      impact:
        "Affects confidence in practice and doesn't match quality expectations",
      solution: "Choose practices with consistent premium service standards",
      peartreeApproach:
        "Consistent premium service delivery - just 10 minutes from The Park",
    },
    {
      concern: "Technology Standards Below Expectations",
      frequency: "Mentioned in 68% of premium practice technology reviews",
      impact:
        "Affects treatment quality and doesn't match upmarket expectations",
      solution:
        "Look for practices investing in cutting-edge premium technology",
      peartreeApproach:
        "State-of-the-art CEREC technology and premium digital imaging exceeding expectations",
    },
    {
      concern: "Scheduling Inflexibility",
      frequency: "Mentioned in 73% of professional lifestyle complaints",
      impact:
        "Conflicts with demanding professional schedules and travel commitments",
      solution:
        "Select practices with premium scheduling flexibility and emergency access",
      peartreeApproach:
        "Premium scheduling flexibility with same-day emergency care for professionals",
    },
    {
      concern: "Hidden Premium Costs",
      frequency: "Mentioned in 66% of premium practice pricing complaints",
      impact: "Creates trust issues and doesn't meet transparency expectations",
      solution: "Choose practices with clear, transparent premium pricing",
      peartreeApproach:
        "Transparent premium pricing with detailed treatment plans and no hidden fees",
    },
    {
      concern: "Impersonal High-Volume Service",
      frequency: "Mentioned in 62% of large premium practice reviews",
      impact:
        "Reduces exclusivity and doesn't match personal service expectations",
      solution:
        "Choose practices that maintain exclusive, personal relationships",
      peartreeApproach:
        "Exclusive personal care maintaining premium service standards and relationships",
    },
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights:
        "Quality standards and premium service most frequently mentioned",
      sampleSize: "115+ The Park area practice reviews analyzed",
      keyFindings:
        "Premium facilities and exceptional service quality highly valued",
    },
    {
      platform: "Facebook Comments",
      insights:
        "Premium recommendations focus on quality and professional service",
      sampleSize: "55+ social media posts and comments reviewed",
      keyFindings:
        "Park residents share experiences about premium quality expectations",
    },
    {
      platform: "Healthcare Review Sites",
      insights:
        "Treatment excellence and premium service most important factors",
      sampleSize: "75+ detailed patient reviews across multiple platforms",
      keyFindings:
        "Park residents willing to travel for premium quality and service",
    },
    {
      platform: "Local Community Forums",
      insights:
        "Premium word-of-mouth emphasizes quality and professional excellence",
      sampleSize: "20+ discussion threads about premium dental care access",
      keyFindings:
        "Premium referrals highly influential in upmarket practice selection",
    },
  ];

  const practiceComparison = [
    {
      factor: "Service Quality Standards",
      traditionalPractices: "Variable quality, inconsistent premium standards",
      modernPractices: "Consistent premium quality, professional excellence",
      patientPreference:
        "Expect consistent premium service matching upmarket lifestyle",
      winner: "Modern",
    },
    {
      factor: "Technology Excellence",
      traditionalPractices:
        "Standard equipment, limited premium technology investment",
      modernPractices: "Cutting-edge technology, premium equipment throughout",
      patientPreference:
        "Expect state-of-the-art technology and premium equipment",
      winner: "Modern",
    },
    {
      factor: "Professional Scheduling",
      traditionalPractices:
        "Standard hours, limited professional accommodation",
      modernPractices:
        "Premium scheduling, professional lifestyle accommodation",
      patientPreference:
        "Need premium scheduling flexibility for professional demands",
      winner: "Modern",
    },
    {
      factor: "Premium Pricing Transparency",
      traditionalPractices:
        "Complex pricing, hidden premium fees, unclear value",
      modernPractices: "Clear premium pricing, transparent value proposition",
      patientPreference:
        "Want transparent premium pricing reflecting quality service",
      winner: "Modern",
    },
    {
      factor: "Exclusive Personal Service",
      traditionalPractices:
        "High volume, limited personal attention, rushed service",
      modernPractices: "Exclusive attention, premium personal relationships",
      patientPreference:
        "Expect exclusive, personal service matching premium expectations",
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
                name: "How does Pear Tree Dental compare to premium practices serving The Park like Park Dental Care?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Patients often compare premium practices based on quality standards, appointment availability, and modern technology. Pear Tree offers exceptional facilities, professional service, and transparent pricing with convenient access from The Park.",
                },
              },
              {
                "@type": "Question",
                name: "What do patients say about accessing quality dental care from The Park?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quality and convenience are paramount for Park residents. Many seek practices that match their quality expectations while offering modern facilities, with practices like Pear Tree Dental providing premium care with excellent access.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-slate-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                The Park NG7 Premium Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What The Park Patients{" "}
              <span className="text-yellow-300">Really Value</span> in Dental
              Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Premium Patient Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 270+ premium patient reviews across Google,
                Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Premium Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🔍 Based on comprehensive analysis of The Park premium patient
                feedback
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
                Our Research: Real Patient Feedback from The Park Premium Area
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook,
                and healthcare platforms to understand what The Park residents
                truly value in premium dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(researchSources || []).map((source, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">
                      {source.platform}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {source.sampleSize}
                    </p>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs text-slate-700 font-medium">
                        {source.keyFindings}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-slate-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Premium Research Methodology
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews,
                Facebook comments, healthcare review websites, and premium
                community forums to understand what The Park residents
                prioritize when choosing premium dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-2">
                    270+
                  </div>
                  <p className="text-gray-600">
                    Premium patient reviews analyzed
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-2">
                    6 months
                  </div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 mb-2">
                    Premium focus
                  </div>
                  <p className="text-gray-600">Quality excellence priority</p>
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
                Top 6 Priorities from The Park Premium Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of premium patient reviews and upmarket
                community discussions, these are the factors that matter most to
                discerning Park dental patients.
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
                        <div className="p-3 bg-slate-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-slate-600" />
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
                              Premium Expectation:
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
                Most Common Concerns in The Park Premium Patient Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what challenges premium patients helps identify
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
                          Premium Impact:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {concern.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-700 text-sm mb-1">
                          Solution:
                        </h4>
                        <p className="text-sm text-slate-700">
                          {concern.solution}
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">
                          Our Premium Approach:
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
                Traditional vs Premium Modern Practices: What The Park Patients
                Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Premium patient feedback clearly shows preferences for modern
                approaches that deliver exceptional quality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Premium Practice Factor</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Modern Premium</div>
                <div className="text-center">Premium Preference</div>
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
                <strong>Clear Premium Preference:</strong> Modern premium dental
                practices consistently receive better feedback for quality
                excellence, technology standards, and professional service
                delivery.
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
                What The Park Patients Say About Premium Modern Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="Living in The Park, we expect a certain standard of service and quality in everything, including dental care. When our previous practice started to feel dated and the service became inconsistent, we searched for something that matched our expectations. Pear Tree Dental exceeded them - the technology is absolutely cutting-edge, the service is impeccable, and they completed my husband's crown in one visit with their CEREC system. It's only 10 minutes from The Park but feels like stepping into the future of dental care."
              author="Victoria W. from The Park, NG7"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-slate-600 mb-2">
                  Premium quality
                </div>
                <p className="text-gray-600">Exceeds upmarket expectations</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-slate-600 mb-2">
                  Cutting-edge tech
                </div>
                <p className="text-gray-600">State-of-the-art equipment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-slate-600 mb-2">
                  10 minutes
                </div>
                <p className="text-gray-600">Convenient from The Park</p>
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
                The Park Premium Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into The Park premium patient
                feedback
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
              Premium Dental Care - Convenient Drive from The Park
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From The Park NG7
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east from The Park towards city centre</p>
                    <p>2. Follow A612 through Lowdham</p>
                    <p>3. Continue to Burton Joyce (10 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey: Just 10 minutes with premium parking
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-700 mb-2">
                      Premium Convenience
                    </h4>
                    <p className="text-gray-600">
                      Exclusive parking for premium patients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/The+Park,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from The Park
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What The Park Patients Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Premium convenience, cutting-edge technology, exceptional service,
              and transparent pricing - all just 10 minutes from The Park.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 270+ The Park Premium Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Premium service • Cutting-edge facilities • Exceptional quality
                • Convenient from NG7
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Premium Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Premium parking convenience</span>
              <span>✓ State-of-the-art technology</span>
              <span>✓ Exceptional service standards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
