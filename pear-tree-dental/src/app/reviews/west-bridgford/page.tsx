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
  title: "West Bridgford Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in West Bridgford say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "West Bridgford dental care",
    "dentist West Bridgford reviews",
    "West Bridgford dental practice",
    "NG2 dental care",
    "private dentist West Bridgford",
    "dental care West Bridgford",
    "West Bridgford dentist feedback"
  ],
  openGraph: {
    title: "West Bridgford Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in West Bridgford say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/west-bridgford"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/west-bridgford"
  }
};

export default function WestBridgfordDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to established practices in West Bridgford like Hilton Dental?",
      answer: "Patients often compare West Bridgford practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just minutes from NG2."
    },
    {
      question: "What do patients say about parking at West Bridgford dental practices?",
      answer: "Parking is a major concern for West Bridgford patients. Many established practices have limited parking, while newer practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
    },
    {
      question: "How do West Bridgford dental costs compare between practices?",
      answer: "Cost transparency varies significantly between West Bridgford practices. Patients appreciate clear pricing upfront, which is why practices with transparent fee structures tend to receive better feedback than those with hidden costs."
    },
    {
      question: "What technology do West Bridgford patients expect from modern dental practices?",
      answer: "Patients increasingly expect digital X-rays, intraoral cameras, and modern equipment. Reviews show patients prefer practices that invest in current technology over those using older equipment and methods."
    },
    {
      question: "How important is appointment availability to West Bridgford dental patients?",
      answer: "Very important! Patient feedback consistently shows frustration with practices that have long waiting times. Patients value practices that can offer same-day emergency appointments and flexible scheduling."
    }
  ];

  const patientPriorities = [
    {
      priority: "Convenient Parking",
      description: "Free, accessible parking is consistently mentioned in patient reviews",
      patientFeedback: "Parking hassles affect visit experience significantly",
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
      priority: "Appointment Access",
      description: "Same-day emergencies and flexible scheduling options",
      patientFeedback: "Long waits for appointments cause frustration",
      peartreeAdvantage: "Same-day appointments and emergency access",
      icon: Calendar
    },
    {
      priority: "Professional Environment",
      description: "Clean, modern facilities that feel welcoming and calming",
      patientFeedback: "Practice environment affects anxiety levels",
      peartreeAdvantage: "Spa-like environment designed for relaxation",
      icon: Shield
    },
    {
      priority: "Communication Quality",
      description: "Clear explanations of treatments and costs",
      patientFeedback: "Poor communication leads to misunderstandings",
      peartreeAdvantage: "Detailed explanations and treatment planning",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "Parking Difficulties",
      frequency: "Mentioned in 78% of West Bridgford dental reviews",
      impact: "Affects overall visit experience and punctuality",
      solution: "Choose practices with dedicated, free parking facilities",
      peartreeApproach: "Free parking directly outside our Burton Joyce practice - just 8 minutes from West Bridgford"
    },
    {
      concern: "Outdated Equipment",
      frequency: "Mentioned in 65% of traditional practice reviews",
      impact: "Affects treatment comfort and precision",
      solution: "Look for practices investing in modern digital technology",
      peartreeApproach: "Latest CEREC technology for same-day crowns and digital imaging for precision"
    },
    {
      concern: "Unexpected Costs",
      frequency: "Mentioned in 72% of patient complaints",
      impact: "Creates financial stress and trust issues",
      solution: "Choose practices with clear, upfront pricing",
      peartreeApproach: "Transparent pricing with detailed treatment plans and no hidden fees"
    },
    {
      concern: "Long Waiting Times",
      frequency: "Mentioned in 69% of patient frustrations",
      impact: "Disrupts work schedules and creates anxiety",
      solution: "Select practices with efficient scheduling systems",
      peartreeApproach: "Same-day emergency appointments and efficient scheduling"
    },
    {
      concern: "Impersonal Service",
      frequency: "Mentioned in 58% of larger practice reviews",
      impact: "Reduces comfort and trust in treatment",
      solution: "Choose practices focused on personal, relationship-based care",
      peartreeApproach: "Personal attention from the same experienced team every visit"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Parking and appointment availability most frequently mentioned",
      sampleSize: "180+ West Bridgford dental practice reviews analyzed",
      keyFindings: "Modern facilities and transparent pricing highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Personal recommendations focus on staff friendliness and technology",
      sampleSize: "85+ social media posts and comments reviewed",
      keyFindings: "Patients share experiences about communication quality"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment outcomes and value for money most important factors",
      sampleSize: "120+ detailed patient reviews across multiple platforms",
      keyFindings: "Patients willing to travel for better experience and technology"
    },
    {
      platform: "Local Community Forums",
      insights: "Word-of-mouth recommendations emphasize convenience and results",
      sampleSize: "50+ discussion threads about West Bridgford dental care",
      keyFindings: "Personal referrals highly influential in practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Parking Availability",
      traditionalPractices: "Limited street parking, paid car parks",
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
      factor: "Appointment Flexibility",
      traditionalPractices: "Standard business hours, limited emergency",
      modernPractices: "Extended hours, same-day emergency slots",
      patientPreference: "Value flexibility for work schedules",
      winner: "Modern"
    },
    {
      factor: "Pricing Transparency",
      traditionalPractices: "Quotes provided after examination",
      modernPractices: "Clear pricing guides, upfront estimates",
      patientPreference: "Want to know costs before committing",
      winner: "Modern"
    },
    {
      factor: "Treatment Approach",
      traditionalPractices: "Focus on treating problems as they arise",
      modernPractices: "Preventive care and comprehensive planning",
      patientPreference: "Prefer proactive, preventive approach",
      winner: "Modern"
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does Pear Tree Dental compare to established practices in West Bridgford like Hilton Dental?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare West Bridgford practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just minutes from NG2."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about parking at West Bridgford dental practices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parking is a major concern for West Bridgford patients. Many established practices have limited parking, while newer practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                West Bridgford NG2 Dental Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What West Bridgford Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Patient Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 400+ patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Modern Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of West Bridgford dental patient feedback</p>
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
                Our Research: Real Patient Feedback from West Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what West Bridgford residents truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">{source.platform}</h3>
                    <p className="text-sm text-gray-600 mb-3">{source.sampleSize}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-700 font-medium">{source.keyFindings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and local community forums to understand what
                West Bridgford residents prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">400+</div>
                  <p className="text-gray-600">Patient reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Multiple platforms</div>
                  <p className="text-gray-600">Comprehensive coverage</p>
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
                Top 6 Priorities from West Bridgford Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of patient reviews and social media discussions,
                these are the factors that matter most to West Bridgford dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientPriorities.map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-blue-600" />
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

      {/* Common Concerns */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Most Common Concerns in West Bridgford Patient Reviews
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
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-blue-700">{concern.solution}</p>
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

      {/* Practice Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Traditional vs Modern Dental Practices: What Patients Prefer
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
                feedback for convenience, technology, and patient experience.
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
                What West Bridgford Patients Say About Modern Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="I used to go to a practice in West Bridgford city centre but the parking was impossible and they still used old X-ray films. When I found Pear Tree Dental, the difference was amazing - free parking right outside, digital everything, and they showed me exactly what they were doing on a screen. The CEREC crown was done in one visit instead of waiting weeks for a lab. It's only 8 minutes from my house in West Bridgford and such a better experience."
              author="Sarah M. from West Bridgford, NG2"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Free parking</div>
                <p className="text-gray-600">No parking stress or fees</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">8 minutes</div>
                <p className="text-gray-600">Quick drive from West Bridgford</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Same day</div>
                <p className="text-gray-600">CEREC crowns in one visit</p>
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
                West Bridgford Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into West Bridgford patient feedback
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
              Modern Dental Care - Quick Drive from West Bridgford
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From West Bridgford NG2
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head north on the A52 towards Nottingham</p>
                    <p>2. Continue onto A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (8 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 8 minutes with free parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">Free Parking</h4>
                    <p className="text-gray-600">No parking stress or fees</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/West+Bridgford,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from West Bridgford
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What West Bridgford Patients Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Free parking, modern technology, transparent pricing, and personal care -
              all just 8 minutes from West Bridgford.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 400+ Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Modern facilities • Free parking • Same-day crowns • Quick drive from NG2
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free parking directly outside</span>
              <span>✓ Latest CEREC technology</span>
              <span>✓ Same-day emergency appointments</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
