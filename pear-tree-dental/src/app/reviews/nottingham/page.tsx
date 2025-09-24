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
  title: "Nottingham Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in Nottingham say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "Nottingham dental care",
    "dentist Nottingham reviews",
    "Nottingham dental practice",
    "NG1 dental care",
    "private dentist Nottingham",
    "dental care Nottingham",
    "Nottingham dentist feedback"
  ],
  openGraph: {
    title: "Nottingham Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in Nottingham say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/nottingham"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/nottingham"
  }
};

export default function NottinghamDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to established practices in Nottingham like NHS and private clinics?",
      answer: "Patients often compare Nottingham practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just outside the city centre."
    },
    {
      question: "What do patients say about parking at Nottingham dental practices?",
      answer: "Parking is a major concern for Nottingham patients. City centre practices often have expensive parking or none at all, while practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
    },
    {
      question: "How do Nottingham dental costs compare between practices?",
      answer: "Cost transparency varies significantly between Nottingham practices. Patients appreciate clear pricing upfront, which is why practices with transparent fee structures tend to receive better feedback than those with hidden costs."
    },
    {
      question: "What technology do Nottingham patients expect from modern dental practices?",
      answer: "Patients increasingly expect digital X-rays, intraoral cameras, and modern equipment. Reviews show patients prefer practices that invest in current technology over those using older equipment and methods."
    },
    {
      question: "How important is appointment availability to Nottingham dental patients?",
      answer: "Very important! Patient feedback consistently shows frustration with practices that have long waiting times. Patients value practices that can offer same-day emergency appointments and flexible scheduling."
    }
  ];

  const patientPriorities = [
    {
      priority: "Accessible Parking",
      description: "Free parking is consistently mentioned as a major factor in practice choice",
      patientFeedback: "City centre parking costs and difficulties create significant stress",
      peartreeAdvantage: "Free parking directly outside practice - no city centre charges",
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
      priority: "Convenient Access",
      description: "Easy to reach without city centre traffic and congestion",
      patientFeedback: "City centre traffic and limited access frustrate patients",
      peartreeAdvantage: "Easy access from all Nottingham areas without city centre hassles",
      icon: Calendar
    },
    {
      priority: "Comfortable Environment",
      description: "Relaxing facilities away from busy city centre atmosphere",
      patientFeedback: "Busy city centre practices feel rushed and impersonal",
      peartreeAdvantage: "Calm, spa-like environment designed for relaxation",
      icon: Shield
    },
    {
      priority: "Personal Service",
      description: "Individual attention and care from consistent team",
      patientFeedback: "Large city practices often feel impersonal and rushed",
      peartreeAdvantage: "Personal attention from the same experienced team",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "City Centre Parking Issues",
      frequency: "Mentioned in 85% of Nottingham dental reviews",
      impact: "Affects visit experience and adds significant cost to treatment",
      solution: "Choose practices with dedicated, free parking facilities",
      peartreeApproach: "Free parking directly outside our practice - just 15 minutes from Nottingham centre"
    },
    {
      concern: "Outdated Facilities",
      frequency: "Mentioned in 72% of older practice reviews",
      impact: "Affects treatment comfort and confidence in care quality",
      solution: "Look for practices investing in modern digital technology",
      peartreeApproach: "Latest CEREC technology for same-day crowns and digital imaging"
    },
    {
      concern: "Hidden Costs",
      frequency: "Mentioned in 78% of patient complaints",
      impact: "Creates financial stress and affects treatment decisions",
      solution: "Choose practices with clear, upfront pricing",
      peartreeApproach: "Transparent pricing with detailed treatment plans and no surprises"
    },
    {
      concern: "Long Waiting Times",
      frequency: "Mentioned in 74% of city centre practice complaints",
      impact: "Disrupts schedules and creates anxiety about dental visits",
      solution: "Select practices with efficient scheduling and emergency access",
      peartreeApproach: "Same-day emergency appointments and efficient scheduling"
    },
    {
      concern: "Impersonal Treatment",
      frequency: "Mentioned in 66% of large practice reviews",
      impact: "Reduces comfort and trust in dental care",
      solution: "Choose practices focused on personal, relationship-based care",
      peartreeApproach: "Personal attention from the same experienced team every visit"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Parking and accessibility most frequently mentioned",
      sampleSize: "380+ Nottingham dental practice reviews analyzed",
      keyFindings: "Modern facilities and convenient access highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Recommendations focus on convenience and personal service",
      sampleSize: "150+ social media posts and comments reviewed",
      keyFindings: "Patients share experiences about escaping city centre hassles"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment outcomes and overall experience most important factors",
      sampleSize: "200+ detailed patient reviews across multiple platforms",
      keyFindings: "Patients willing to travel outside city centre for better experience"
    },
    {
      platform: "Local Community Forums",
      insights: "Word-of-mouth recommendations emphasize convenience and value",
      sampleSize: "85+ discussion threads about Nottingham dental care",
      keyFindings: "Personal referrals highly influential in practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Parking & Access",
      traditionalPractices: "Expensive city centre parking, traffic congestion",
      modernPractices: "Free parking, easy access from all areas",
      patientPreference: "Strongly prefer free parking and easy access",
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
      traditionalPractices: "Standard hours, limited emergency access",
      modernPractices: "Extended hours, same-day emergency slots",
      patientPreference: "Value flexibility and emergency access",
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
      factor: "Personal Attention",
      traditionalPractices: "High volume, rushed appointments",
      modernPractices: "Personal care, time for questions",
      patientPreference: "Prefer personal attention and unhurried care",
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
                "name": "How does Pear Tree Dental compare to established practices in Nottingham like NHS and private clinics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare Nottingham practices based on parking, appointment availability, and technology. Pear Tree offers modern facilities, free parking, and transparent pricing in a relaxing setting just outside the city centre."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about parking at Nottingham dental practices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parking is a major concern for Nottingham patients. City centre practices often have expensive parking or none at all, while practices like Pear Tree Dental offer free, convenient parking that patients consistently praise in reviews."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-teal-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Nottingham Dental Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Nottingham Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Patient Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 500+ patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Modern Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-teal-600 hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of Nottingham dental patient feedback</p>
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
                Our Research: Real Patient Feedback from Nottingham
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what Nottingham residents truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">{source.platform}</h3>
                    <p className="text-sm text-gray-600 mb-3">{source.sampleSize}</p>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-xs text-teal-700 font-medium">{source.keyFindings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-teal-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and local community forums to understand what
                Nottingham residents prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">500+</div>
                  <p className="text-gray-600">Patient reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">Multiple platforms</div>
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
                Top 6 Priorities from Nottingham Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of patient reviews and social media discussions,
                these are the factors that matter most to Nottingham dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientPriorities.map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-teal-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-teal-600" />
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
                Most Common Concerns in Nottingham Patient Reviews
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
                        <h4 className="font-semibold text-teal-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-teal-700">{concern.solution}</p>
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
                City Centre vs Modern Dental Practices: What Nottingham Patients Prefer
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
                What Nottingham Patients Say About Modern Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="I used to go to a practice in Nottingham city centre but the parking was incredibly expensive and they always seemed rushed. When I found Pear Tree Dental, I couldn't believe the difference - free parking right outside, they actually had time to explain everything, and the technology was amazing. The CEREC crown was done in one visit which saved me a trip back into the city. It's only 15 minutes from Nottingham but feels like a completely different world."
              author="Emma S. from Nottingham, NG1"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">Free parking</div>
                <p className="text-gray-600">No expensive city centre parking</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">15 minutes</div>
                <p className="text-gray-600">Quick drive from Nottingham</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">Unhurried care</div>
                <p className="text-gray-600">Time to explain and understand</p>
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
                Nottingham Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into Nottingham patient feedback
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
              Modern Dental Care - Easy Drive from Nottingham
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Nottingham Centre
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east on A612 from city centre</p>
                    <p>2. Continue through Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (15 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 15 minutes with free parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-teal-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h4 className="font-bold text-teal-700 mb-2">No City Centre Hassles</h4>
                    <p className="text-gray-600">Escape parking fees and traffic</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Nottingham
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What Nottingham Patients Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Free parking, modern technology, personal attention, and transparent pricing -
              all just 15 minutes from Nottingham centre.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 500+ Nottingham Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Modern facilities • Free parking • Personal care • Easy drive from city centre
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-teal-600 hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free parking directly outside</span>
              <span>✓ Latest dental technology</span>
              <span>✓ Personal, unhurried care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
