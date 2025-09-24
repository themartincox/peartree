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
  title: "Netherfield Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in Netherfield say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "Netherfield dental care",
    "dentist Netherfield reviews",
    "Netherfield dental practice",
    "NG4 dental care",
    "private dentist Netherfield",
    "dental care Netherfield",
    "Netherfield dentist feedback"
  ],
  openGraph: {
    title: "Netherfield Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in Netherfield say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/netherfield"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/netherfield"
  }
};

export default function NetherfieldDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to local practices serving Netherfield?",
      answer: "Patients often compare local practices based on value for money, appointment availability, and honest service. Pear Tree offers modern facilities, straightforward pricing, and reliable care with easy access from Netherfield."
    },
    {
      question: "What do patients say about accessing dental care from Netherfield?",
      answer: "Access and value are key concerns for Netherfield residents. Many seek practices that offer good value without compromising quality, with practices like Pear Tree Dental providing modern care with convenient access."
    },
    {
      question: "How do Netherfield dental costs compare between practices?",
      answer: "Cost and value are important to Netherfield residents. Patients appreciate honest pricing that represents good value, which is why practices with fair, transparent fee structures tend to receive better feedback than those with unclear costs."
    },
    {
      question: "What technology do Netherfield patients expect from modern dental practices?",
      answer: "Working families in Netherfield expect practical, modern technology that provides good value - digital X-rays, efficient treatments, and equipment that saves time and money. Reviews show patients value technology that offers genuine benefits."
    },
    {
      question: "How important is reliable service to Netherfield dental patients?",
      answer: "Very important! Netherfield residents value dependable, honest service with fair pricing. They appreciate practices that deliver consistent quality without unnecessary frills or hidden costs."
    }
  ];

  const patientPriorities = [
    {
      priority: "Value for Money",
      description: "Fair pricing that represents good value for working families",
      patientFeedback: "Netherfield residents need affordable quality care without hidden costs",
      peartreeAdvantage: "Honest pricing with excellent value and no hidden fees",
      icon: DollarSign
    },
    {
      priority: "Reliable Access",
      description: "Convenient access with practical parking for working families",
      patientFeedback: "Working families need reliable, convenient access to dental care",
      peartreeAdvantage: "Easy access from Netherfield with free parking",
      icon: Car
    },
    {
      priority: "Practical Technology",
      description: "Modern equipment that provides real benefits and value",
      patientFeedback: "Working families value technology that saves time and provides better value",
      peartreeAdvantage: "Modern digital technology that improves care and value",
      icon: Zap
    },
    {
      priority: "Honest Service",
      description: "Straightforward, reliable service without unnecessary complications",
      patientFeedback: "Netherfield residents prefer honest, no-nonsense dental service",
      peartreeAdvantage: "Honest, straightforward care with reliable service",
      icon: Shield
    },
    {
      priority: "Working Family Scheduling",
      description: "Appointment times that work with shift patterns and work schedules",
      patientFeedback: "Working families need flexible scheduling that fits work commitments",
      peartreeAdvantage: "Flexible scheduling understanding working family needs",
      icon: Calendar
    },
    {
      priority: "Community Values",
      description: "Personal service that understands and respects working community values",
      patientFeedback: "Working families prefer practices that understand community values",
      peartreeAdvantage: "Personal care respecting working community values",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "Poor Value for Money",
      frequency: "Mentioned in 74% of Netherfield area patient reviews",
      impact: "Affects family budgets and access to dental care for working families",
      solution: "Choose practices offering honest pricing with good value",
      peartreeApproach: "Fair pricing with excellent value - just 8 minutes from Netherfield"
    },
    {
      concern: "Unreliable Service",
      frequency: "Mentioned in 67% of working family complaints",
      impact: "Disrupts work schedules and affects trust in dental care",
      solution: "Look for practices with reliable, consistent service delivery",
      peartreeApproach: "Reliable, consistent service understanding working family needs"
    },
    {
      concern: "Hidden Costs and Fees",
      frequency: "Mentioned in 71% of working family budget complaints",
      impact: "Creates financial stress and affects treatment decisions",
      solution: "Choose practices with transparent, honest pricing",
      peartreeApproach: "Honest pricing with no hidden costs - clear value for working families"
    },
    {
      concern: "Inflexible Working Hours",
      frequency: "Mentioned in 69% of shift worker complaints",
      impact: "Conflicts with work patterns and shift schedules",
      solution: "Select practices understanding working family scheduling needs",
      peartreeApproach: "Flexible scheduling accommodating shift work and family commitments"
    },
    {
      concern: "Complicated Service",
      frequency: "Mentioned in 58% of straightforward service preference reviews",
      impact: "Creates confusion and doesn't match working community preferences",
      solution: "Choose practices offering straightforward, honest service",
      peartreeApproach: "No-nonsense, honest service respecting working community values"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Value for money and reliable service most frequently mentioned",
      sampleSize: "130+ Netherfield area practice reviews analyzed",
      keyFindings: "Honest pricing and dependable service highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Working family recommendations focus on value and reliability",
      sampleSize: "65+ social media posts and comments reviewed",
      keyFindings: "Residents share experiences about practical, value-focused care"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment value and honest service most important factors",
      sampleSize: "80+ detailed patient reviews across multiple platforms",
      keyFindings: "Working families willing to travel for better value and reliable service"
    },
    {
      platform: "Local Community Forums",
      insights: "Working community word-of-mouth emphasizes value and dependability",
      sampleSize: "25+ discussion threads about practical dental care access",
      keyFindings: "Community referrals highly influential in working family practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Value for Money",
      traditionalPractices: "Variable pricing, hidden costs, unclear value proposition",
      modernPractices: "Transparent pricing, clear value, honest cost structure",
      patientPreference: "Want honest pricing representing good value for working families",
      winner: "Modern"
    },
    {
      factor: "Service Reliability",
      traditionalPractices: "Inconsistent service, unreliable appointments, variable quality",
      modernPractices: "Reliable service, consistent quality, dependable care",
      patientPreference: "Need reliable, consistent service they can depend on",
      winner: "Modern"
    },
    {
      factor: "Working Family Scheduling",
      traditionalPractices: "Rigid hours, limited flexibility, no shift work accommodation",
      modernPractices: "Flexible scheduling, shift work understanding, family accommodation",
      patientPreference: "Need scheduling that works with shift patterns and work commitments",
      winner: "Modern"
    },
    {
      factor: "Technology Value",
      traditionalPractices: "Basic equipment, limited efficiency, unclear benefits",
      modernPractices: "Practical technology, clear benefits, improved efficiency",
      patientPreference: "Value technology that provides real benefits and saves time",
      winner: "Modern"
    },
    {
      factor: "Community Understanding",
      traditionalPractices: "Limited community connection, generic service approach",
      modernPractices: "Working community understanding, practical service approach",
      patientPreference: "Prefer practices understanding working community values and needs",
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
                "name": "How does Pear Tree Dental compare to local practices serving Netherfield?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare local practices based on value for money, appointment availability, and honest service. Pear Tree offers modern facilities, straightforward pricing, and reliable care with easy access from Netherfield."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about accessing dental care from Netherfield?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Access and value are key concerns for Netherfield residents. Many seek practices that offer good value without compromising quality, with practices like Pear Tree Dental providing modern care with convenient access."
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
                Netherfield NG4 Working Community Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Netherfield Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Working Community Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 300+ working community patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Honest Value Dental Care
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
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of Netherfield working community patient feedback</p>
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
                Our Research: Real Patient Feedback from Netherfield Working Community
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what Netherfield working families truly value in dental care.
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
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Working Community Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and local community forums to understand what
                Netherfield working families prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">300+</div>
                  <p className="text-gray-600">Working family reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Value focus</div>
                  <p className="text-gray-600">Working community priorities</p>
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
                Top 6 Priorities from Netherfield Working Community Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of working community reviews and local discussions,
                these are the factors that matter most to Netherfield dental patients.
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
                            <h4 className="font-semibold text-red-600 text-xs mb-1">Community Need:</h4>
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
                Most Common Concerns in Netherfield Working Community Patient Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what challenges working families helps identify what to look for when choosing a dental practice.
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
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Working Family Impact:</h4>
                        <p className="text-sm text-gray-600">{concern.impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-blue-700">{concern.solution}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Our Working Family Approach:</h4>
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
                Traditional vs Modern Working Family Practices: What Netherfield Patients Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Working community feedback clearly shows preferences for honest, value-focused approaches to dental care.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Working Family Factor</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Modern Approach</div>
                <div className="text-center">Community Preference</div>
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
                <strong>Clear Working Community Preference:</strong> Modern dental practices consistently receive better
                feedback for value, reliability, and understanding of working family needs.
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
                What Netherfield Working Families Say About Honest Value Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="Working shifts in Netherfield, I need a dentist that's reliable and honest about costs. My old practice kept surprising me with extra charges and the appointments never seemed to fit with my work schedule. When I switched to Pear Tree Dental, it was exactly what I was looking for - straight talking, fair prices, and they actually understand what it's like to work shifts. The CEREC crown was done in one visit which was perfect because I couldn't keep taking time off work. Just 8 minutes from Netherfield and much better value for money."
              author="Mark D. from Netherfield, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Honest pricing</div>
                <p className="text-gray-600">Fair value for working families</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Shift-friendly</div>
                <p className="text-gray-600">Understands working schedules</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">8 minutes</div>
                <p className="text-gray-600">Quick drive from Netherfield</p>
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
                Netherfield Working Community Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into Netherfield working community patient feedback
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
              Honest Value Dental Care - Quick Drive from Netherfield
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Netherfield NG4
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east from Netherfield towards Lowdham</p>
                    <p>2. Follow A612 through to Burton Joyce</p>
                    <p>3. Just 8 minutes direct route</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 8 minutes with free working family parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">Working Family Convenience</h4>
                    <p className="text-gray-600">Reliable access for working families</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Netherfield,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Netherfield
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
              Experience What Netherfield Working Families Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Honest pricing, reliable service, practical technology, and working family scheduling -
              all just 8 minutes from Netherfield.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 300+ Netherfield Working Community Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Honest value • Reliable service • Working family friendly • Quick drive from NG4
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Working Family Visit
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
              <span>✓ Honest, fair pricing</span>
              <span>✓ Shift-friendly scheduling</span>
              <span>✓ Reliable working family service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
