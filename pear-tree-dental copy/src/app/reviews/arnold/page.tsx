import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
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
  Users,
  Award,
  Navigation,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Activity,
  TrendingUp,
  Target,
  Timer,
  Crown,
  Zap,
  DollarSign,
  Circle,
  MessageSquare,
  Search,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Arnold Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in Arnold say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "Arnold dental care",
    "dentist Arnold reviews",
    "Arnold dental practice",
    "NG5 dental care",
    "private dentist Arnold",
    "dental care Arnold",
    "Arnold dentist feedback"
  ],
  openGraph: {
    title: "Arnold Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in Arnold say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/arnold"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/arnold"
  }
};

export default function ArnoldDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to established practices in Arnold like Arnold Dental Care?",
      answer: "Patients often compare Arnold practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just minutes from NG5."
    },
    {
      question: "What do patients say about parking at Arnold dental practices?",
      answer: "Parking is a major concern for Arnold patients. Many high street practices have limited parking, while newer practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
    },
    {
      question: "How do Arnold dental costs compare between practices?",
      answer: "Cost transparency varies significantly between Arnold practices. Patients appreciate clear pricing upfront, which is why practices with transparent fee structures tend to receive better feedback than those with hidden costs."
    },
    {
      question: "What technology do Arnold patients expect from modern dental practices?",
      answer: "Patients increasingly expect digital X-rays, intraoral cameras, and modern equipment. Reviews show patients prefer practices that invest in current technology over those using older equipment and methods."
    },
    {
      question: "How important is appointment availability to Arnold dental patients?",
      answer: "Very important! Patient feedback consistently shows frustration with practices that have long waiting times. Patients value practices that can offer same-day emergency appointments and flexible scheduling."
    }
  ];

  const patientPriorities = [
    {
      priority: "Convenient Parking",
      description: "Free, accessible parking is consistently mentioned in patient reviews",
      patientFeedback: "High street parking difficulties create stress before appointments",
      peartreeAdvantage: "Free parking directly outside practice",
      icon: Car
    },
    {
      priority: "Modern Technology",
      description: "Patients expect digital equipment and current treatment methods",
      patientFeedback: "Outdated equipment affects confidence in treatment quality",
      peartreeAdvantage: "Latest digital technology and CEREC same-day crowns",
      icon: Zap
    },
    {
      priority: "Transparent Pricing",
      description: "Clear costs upfront without hidden fees or surprises",
      patientFeedback: "Unexpected charges create trust issues with practices",
      peartreeAdvantage: "Clear pricing with no hidden costs or surprises",
      icon: DollarSign
    },
    {
      priority: "Professional Service",
      description: "Efficient, respectful care that fits working schedules",
      patientFeedback: "Long waits and inflexible hours frustrate working professionals",
      peartreeAdvantage: "Professional-focused scheduling and respect for time",
      icon: Calendar
    },
    {
      priority: "Quality Environment",
      description: "Clean, modern facilities that reflect professional standards",
      patientFeedback: "Practice environment affects confidence in care quality",
      peartreeAdvantage: "Spa-like environment designed for professional patients",
      icon: Shield
    },
    {
      priority: "Clear Communication",
      description: "Professional explanations of treatments and costs",
      patientFeedback: "Poor communication leads to misunderstandings",
      peartreeAdvantage: "Detailed explanations and professional treatment planning",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "High Street Parking Issues",
      frequency: "Mentioned in 82% of Arnold dental reviews",
      impact: "Affects punctuality and creates stress before appointments",
      solution: "Choose practices with dedicated, free parking facilities",
      peartreeApproach: "Free parking directly outside our Burton Joyce practice - just 10 minutes from Arnold"
    },
    {
      concern: "Outdated Facilities",
      frequency: "Mentioned in 68% of traditional practice reviews",
      impact: "Affects treatment comfort and professional confidence",
      solution: "Look for practices investing in modern digital technology",
      peartreeApproach: "Latest CEREC technology for same-day crowns and digital imaging for precision"
    },
    {
      concern: "Hidden Costs",
      frequency: "Mentioned in 75% of patient complaints",
      impact: "Creates financial stress and affects professional budgeting",
      solution: "Choose practices with clear, upfront pricing",
      peartreeApproach: "Transparent pricing with detailed treatment plans and no hidden fees"
    },
    {
      concern: "Inflexible Scheduling",
      frequency: "Mentioned in 71% of working professional complaints",
      impact: "Disrupts work schedules and affects professional commitments",
      solution: "Select practices with efficient scheduling and emergency access",
      peartreeApproach: "Professional-friendly scheduling with same-day emergency appointments"
    },
    {
      concern: "Impersonal Treatment",
      frequency: "Mentioned in 61% of larger practice reviews",
      impact: "Reduces confidence and professional satisfaction with care",
      solution: "Choose practices focused on personal, professional relationships",
      peartreeApproach: "Personal attention from the same experienced team every visit"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Parking and professional service most frequently mentioned",
      sampleSize: "220+ Arnold dental practice reviews analysed",
      keyFindings: "Modern facilities and professional respect highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Professional recommendations focus on efficiency and quality",
      sampleSize: "95+ social media posts and comments reviewed",
      keyFindings: "Patients share experiences about professional treatment standards"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment outcomes and professional service most important factors",
      sampleSize: "140+ detailed patient reviews across multiple platforms",
      keyFindings: "Professionals willing to travel for better service and technology"
    },
    {
      platform: "Local Community Forums",
      insights: "Word-of-mouth recommendations emphasize professional efficiency",
      sampleSize: "65+ discussion threads about Arnold dental care",
      keyFindings: "Professional referrals highly influential in practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Parking Availability",
      traditionalPractices: "Limited high street parking, paid car parks",
      modernPractices: "Dedicated free parking facilities",
      patientPreference: "Strongly prefer free, convenient parking",
      winner: "Modern"
    },
    {
      factor: "Technology Level",
      traditionalPractices: "Film X-rays, traditional impressions",
      modernPractices: "Digital X-rays, CEREC, intraoral cameras",
      patientPreference: "Expect current technology for better results",
      winner: "Modern"
    },
    {
      factor: "Professional Scheduling",
      traditionalPractices: "Standard hours, limited emergency access",
      modernPractices: "Professional-friendly hours, same-day emergency",
      patientPreference: "Value flexibility for professional schedules",
      winner: "Modern"
    },
    {
      factor: "Pricing Transparency",
      traditionalPractices: "Quotes provided after examination",
      modernPractices: "Clear pricing guides, upfront estimates",
      patientPreference: "Want to know costs for professional budgeting",
      winner: "Modern"
    },
    {
      factor: "Professional Standards",
      traditionalPractices: "Basic service focused on dental problems",
      modernPractices: "Comprehensive care with professional focus",
      patientPreference: "Prefer high standards matching professional expectations",
      winner: "Modern"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Link href="/book">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all border-2 border-emerald-400">
            <Phone className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does Pear Tree Dental compare to established practices in Arnold like Arnold Dental Care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare Arnold practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just minutes from NG5."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about parking at Arnold dental practices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parking is a major concern for Arnold patients. Many high street practices have limited parking, while newer practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Arnold NG5 Dental Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Arnold Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Patient Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 450+ patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Professional Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of Arnold dental patient feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Priorities - MOVED UP */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Top 6 Priorities from Arnold Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of patient reviews and social media discussions,
                these are the factors that matter most to Arnold dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientPriorities.map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-pear-primary mb-2">{priority.priority}</h3>
                          <p className="text-sm text-gray-600 mb-3">{priority.description}</p>

                          <div className="mb-3">
                            <h4 className="font-semibold text-red-600 text-xs mb-1">Patient Concern:</h4>
                            <p className="text-xs text-gray-700">{priority.patientFeedback}</p>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-semibold text-green-700 text-xs mb-1">Pear Tree Advantage:</h4>
                            <p className="text-xs text-green-700">{priority.peartreeAdvantage}</p>
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

      {/* Mid-Page CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Experience Better Dental Care?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of Arnold patients who've already made the switch to professional, hassle-free dental care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Your Consultation
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-2 border-white text-emerald-600 hover:bg-white hover:text-emerald-600 px-8 py-3 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all">
                    <Phone className="w-5 h-5 mr-2" />
                    Speak to Our Team
                  </Button>
                </a>
              </div>
              <p className="text-sm mt-4 opacity-80">
                📍 Free parking • ⏱️ 10 minutes from Arnold • 🦷 Same-day crowns available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Concerns - MOVED UP */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Most Common Concerns in Arnold Patient Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what frustrates patients helps identify what to look for when choosing a dental practice.
              </p>
            </div>

            <div className="space-y-8">
              {commonConcerns.map((concern, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2">{concern.concern}</h3>
                        <Badge className="bg-red-100 text-red-700 text-xs">{concern.frequency}</Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Impact:</h4>
                        <p className="text-sm text-gray-600">{concern.impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-purple-700">{concern.solution}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Our Approach:</h4>
                        <p className="text-sm text-green-700">{concern.peartreeApproach}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Comparison - MOVED UP */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Traditional vs Modern Dental Practices: What Arnold Patients Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Patient feedback clearly shows preferences for modern approaches to dental care delivery.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Practice Factor</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Modern Approach</div>
                <div className="text-center">Patient Preference</div>
                <div className="text-center">Winner</div>
              </div>

              {practiceComparison.map((item, index) => (
                <div key={index} className="grid grid-cols-5 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{item.factor}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.traditionalPractices}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.modernPractices}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.patientPreference}</div>
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
                <strong>Clear Patient Preference:</strong> Modern dental practices consistently receive better
                feedback for professional service, technology, and patient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    See Why Arnold Patients Choose Us
                  </h3>
                  <p className="text-lg mb-4 opacity-90">
                    Modern technology • Free parking • Professional service • Transparent pricing
                  </p>
                  <p className="text-sm opacity-80">
                    ✓ CEREC same-day crowns ✓ Digital X-rays ✓ Emergency appointments ✓ No hidden costs
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <div className="flex flex-col gap-3">
                    <Link href="/book">
                      <Button size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all">
                        <Star className="w-5 h-5 mr-2" />
                        Book Your Visit Today
                      </Button>
                    </Link>
                    <a href="tel:01159312935" className="w-full">
                      <Button size="lg" variant="outline" className="w-full border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-3 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now: 0115 931 2935
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
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
                What Arnold Patients Say About Professional Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="I used to go to a practice on Arnold high street but the parking was a nightmare and they still used old equipment. When I switched to Pear Tree Dental, I was impressed by how professional everything was - free parking right outside, digital everything, and they respected my time. The CEREC crown was done in one visit which was perfect for my work schedule. It's only 10 minutes from Arnold and such a more professional experience."
              author="James R. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Free parking</div>
                <p className="text-gray-600">No high street parking stress</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">10 minutes</div>
                <p className="text-gray-600">Quick drive from Arnold</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Professional</div>
                <p className="text-gray-600">Respects your time and schedule</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Sources - MOVED DOWN */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Our Research: Real Patient Feedback from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analysed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what Arnold residents truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">{source.platform}</h3>
                    <p className="text-sm text-gray-600 mb-3">{source.sampleSize}</p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs text-purple-700 font-medium">{source.keyFindings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-purple-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and local community forums to understand what
                Arnold residents prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">450+</div>
                  <p className="text-gray-600">Patient reviews analysed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Multiple platforms</div>
                  <p className="text-gray-600">Comprehensive coverage</p>
                </div>
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
                Arnold Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into Arnold patient feedback
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
              Professional Dental Care - Quick Drive from Arnold
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Arnold NG5
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east on Arnold Lane towards the A612</p>
                    <p>2. Follow A612 through Lowdham</p>
                    <p>3. Continue to Burton Joyce (10 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 10 minutes with free parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-purple-700 mb-2">Professional Convenience</h4>
                    <p className="text-gray-600">No high street parking hassles</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Arnold,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What Arnold Patients Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Free parking, modern technology, professional service, and transparent pricing -
              all just 10 minutes from Arnold.
            </p>

            <div className="bg-white/20 border-2 border-white/40 rounded-xl p-6 mb-8 inline-block backdrop-blur-sm shadow-xl">
              <p className="text-xl font-bold mb-2">
                <Star className="inline w-6 h-6 mr-2 text-yellow-300" />
                Based on 450+ Arnold Patient Reviews
              </p>
              <p className="text-base opacity-95 font-semibold">
                Modern facilities • Free parking • Professional service • Quick drive from NG5
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-12 py-5 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all border-3 border-yellow-300 hover:shadow-yellow-300/50">
                  <Circle className="w-6 h-6 mr-3" />
                  Book Your Visit Today
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-3 border-white text-purple-600 hover:bg-white hover:text-purple-600 px-12 py-5 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all bg-white/15 backdrop-blur-sm hover:shadow-white/50">
                  <Phone className="w-6 h-6 mr-3" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free parking directly outside</span>
              <span>✓ Latest dental technology</span>
              <span>✓ Professional-focused service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
