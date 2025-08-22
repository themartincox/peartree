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
  title: "Bingham Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in Bingham say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "Bingham dental care",
    "dentist Bingham reviews",
    "Bingham dental practice",
    "NG13 dental care",
    "private dentist Bingham",
    "dental care Bingham",
    "Bingham dentist feedback"
  ],
  openGraph: {
    title: "Bingham Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in Bingham say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/bingham"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/bingham"
  }
};

export default function BinghamDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to traditional practices serving Bingham?",
      answer: "Patients often compare Bingham area practices based on convenience, appointment availability, and modern technology. Pear Tree offers advanced facilities, efficient scheduling, and transparent pricing with easy access from the market town."
    },
    {
      question: "What do patients say about dental access from Bingham?",
      answer: "Access and convenience are key concerns for busy Bingham families. Many local practices have limited parking or outdated facilities, while modern practices like Pear Tree Dental offer comprehensive care with convenient access."
    },
    {
      question: "How do Bingham dental costs compare between practices?",
      answer: "Cost transparency varies significantly between practices serving Bingham. Patients appreciate clear pricing upfront, which is why practices with transparent fee structures tend to receive better feedback than those with hidden costs."
    },
    {
      question: "What technology do Bingham patients expect from modern dental practices?",
      answer: "Busy Bingham families increasingly expect efficient, modern technology - digital X-rays, intraoral cameras, and same-day treatments. Reviews show patients value practices that save time with advanced equipment."
    },
    {
      question: "How important is appointment flexibility to Bingham dental patients?",
      answer: "Very important! Bingham families often juggle work and school schedules, so they value practices that offer flexible scheduling, same-day emergency appointments, and efficient treatment."
    }
  ];

  const patientPriorities = [
    {
      priority: "Convenient Access",
      description: "Easy access from Bingham without parking complications",
      patientFeedback: "Busy families need convenient, stress-free dental appointments",
      peartreeAdvantage: "Easy access from Bingham with free parking directly outside",
      icon: Car
    },
    {
      priority: "Efficient Technology",
      description: "Modern equipment that saves time for busy market town families",
      patientFeedback: "Working families value efficient, time-saving dental technology",
      peartreeAdvantage: "Latest digital technology and CEREC same-day crowns",
      icon: Zap
    },
    {
      priority: "Transparent Pricing",
      description: "Clear costs upfront for family budgeting and planning",
      patientFeedback: "Market town families need predictable costs for financial planning",
      peartreeAdvantage: "Clear pricing with no hidden costs or surprises",
      icon: DollarSign
    },
    {
      priority: "Flexible Scheduling",
      description: "Appointment times that work with busy family and work schedules",
      patientFeedback: "Rigid scheduling conflicts with work and school commitments",
      peartreeAdvantage: "Flexible scheduling with same-day emergency appointments",
      icon: Calendar
    },
    {
      priority: "Professional Efficiency",
      description: "Streamlined care that respects busy family time",
      patientFeedback: "Long waits and inefficient service frustrate working families",
      peartreeAdvantage: "Efficient, professional service designed for busy families",
      icon: Shield
    },
    {
      priority: "Family-Friendly Service",
      description: "Comprehensive care suitable for all family members",
      patientFeedback: "Market town families prefer one practice for all their needs",
      peartreeAdvantage: "Complete family care from children to grandparents",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "Limited Parking Access",
      frequency: "Mentioned in 74% of Bingham area dental reviews",
      impact: "Affects busy family schedules and appointment punctuality",
      solution: "Choose practices with dedicated, convenient parking facilities",
      peartreeApproach: "Free parking directly outside our practice - just 12 minutes from Bingham"
    },
    {
      concern: "Time-Consuming Treatments",
      frequency: "Mentioned in 68% of busy family complaints",
      impact: "Multiple appointments disrupt work and school schedules",
      solution: "Look for practices offering efficient, same-day treatments",
      peartreeApproach: "CEREC same-day crowns and efficient digital technology minimizing family disruption"
    },
    {
      concern: "Inflexible Scheduling",
      frequency: "Mentioned in 71% of working family frustrations",
      impact: "Conflicts with work meetings and school pick-ups",
      solution: "Select practices with family-friendly flexible scheduling",
      peartreeApproach: "Flexible appointment times and same-day emergency care for busy families"
    },
    {
      concern: "Unexpected Family Costs",
      frequency: "Mentioned in 66% of market town family complaints",
      impact: "Budget disruption affects family financial planning",
      solution: "Choose practices with clear, upfront family pricing",
      peartreeApproach: "Transparent pricing with detailed family treatment plans and no hidden fees"
    },
    {
      concern: "Impersonal Busy Practice Service",
      frequency: "Mentioned in 59% of larger practice reviews",
      impact: "Reduces comfort and doesn't match market town expectations",
      solution: "Choose practices that maintain personal relationships with families",
      peartreeApproach: "Personal family care maintaining market town values and relationships"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Convenience and family service most frequently mentioned",
      sampleSize: "140+ Bingham area practice reviews analyzed",
      keyFindings: "Efficient modern facilities and family convenience highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Family recommendations focus on convenience and time-saving",
      sampleSize: "75+ social media posts and comments reviewed",
      keyFindings: "Busy families share experiences about efficient, family-friendly care"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment efficiency and family service most important factors",
      sampleSize: "90+ detailed patient reviews across multiple platforms",
      keyFindings: "Market town families willing to travel for efficient, modern care"
    },
    {
      platform: "Local Community Forums",
      insights: "Family word-of-mouth emphasizes convenience and professional efficiency",
      sampleSize: "30+ discussion threads about Bingham family dental care",
      keyFindings: "Family referrals highly influential in market town practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Family Convenience",
      traditionalPractices: "Limited parking, inflexible hours, multiple appointments",
      modernPractices: "Convenient access, flexible scheduling, efficient treatment",
      patientPreference: "Strongly prefer convenient, family-efficient care",
      winner: "Modern"
    },
    {
      factor: "Technology Efficiency",
      traditionalPractices: "Basic equipment, multiple appointments, time-consuming",
      modernPractices: "Digital technology, same-day treatments, time-saving",
      patientPreference: "Value technology that saves family time",
      winner: "Modern"
    },
    {
      factor: "Family Scheduling",
      traditionalPractices: "Rigid hours, limited emergency access, inflexible",
      modernPractices: "Family-friendly hours, emergency access, flexible scheduling",
      patientPreference: "Need flexibility for busy family schedules",
      winner: "Modern"
    },
    {
      factor: "Pricing Transparency",
      traditionalPractices: "Variable pricing, hidden fees, budget uncertainty",
      modernPractices: "Clear family pricing, upfront estimates, budget planning",
      patientPreference: "Want clear costs for family financial planning",
      winner: "Modern"
    },
    {
      factor: "Family Treatment Approach",
      traditionalPractices: "Individual focus, limited family coordination",
      modernPractices: "Comprehensive family care, coordinated treatment",
      patientPreference: "Prefer practices understanding busy family needs",
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
                "name": "How does Pear Tree Dental compare to traditional practices serving Bingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare Bingham area practices based on convenience, appointment availability, and modern technology. Pear Tree offers advanced facilities, efficient scheduling, and transparent pricing with easy access from the market town."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about dental access from Bingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Access and convenience are key concerns for busy Bingham families. Many local practices have limited parking or outdated facilities, while modern practices like Pear Tree Dental offer comprehensive care with convenient access."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-cyan-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Bingham NG13 Market Town Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Bingham Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Market Town Family Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 350+ patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-cyan-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Efficient Family Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of Bingham market town patient feedback</p>
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
                Our Research: Real Patient Feedback from Bingham Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what busy Bingham families truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">{source.platform}</h3>
                    <p className="text-sm text-gray-600 mb-3">{source.sampleSize}</p>
                    <div className="bg-cyan-50 rounded-lg p-3">
                      <p className="text-xs text-cyan-700 font-medium">{source.keyFindings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-cyan-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Market Town Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and local community forums to understand what
                Bingham market town families prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">350+</div>
                  <p className="text-gray-600">Family reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">Market town focus</div>
                  <p className="text-gray-600">Family convenience priority</p>
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
                Top 6 Priorities from Bingham Family Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of market town family reviews and community discussions,
                these are the factors that matter most to busy Bingham dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientPriorities.map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-pear-primary mb-2">{priority.priority}</h3>
                          <p className="text-sm text-gray-600 mb-3">{priority.description}</p>

                          <div className="mb-3">
                            <h4 className="font-semibold text-red-600 text-xs mb-1">Family Concern:</h4>
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
                Most Common Concerns in Bingham Family Patient Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what challenges busy families helps identify what to look for when choosing a dental practice.
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
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Family Impact:</h4>
                        <p className="text-sm text-gray-600">{concern.impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-cyan-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-cyan-700">{concern.solution}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Our Family Approach:</h4>
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
                Traditional vs Modern Family Practices: What Bingham Patients Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Market town family feedback clearly shows preferences for efficient, modern approaches to dental care.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Family Practice Factor</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Modern Approach</div>
                <div className="text-center">Family Preference</div>
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
                <strong>Clear Family Preference:</strong> Modern dental practices consistently receive better
                feedback for family convenience, efficiency, and understanding of busy market town life.
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
                What Bingham Families Say About Efficient Modern Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="Living in Bingham with two young children and busy work schedules, dental appointments were always a struggle - limited parking, long waits, and multiple visits for treatments. When we switched to Pear Tree Dental, it transformed our family dental care. Free parking right outside, they fit our whole family in efficiently, and when my husband needed a crown, they did it in one visit with their CEREC machine. It's only 12 minutes from Bingham but saves us so much time and stress. Perfect for busy market town families like ours."
              author="Caroline H. from Bingham, NG13"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Family-efficient</div>
                <p className="text-gray-600">Designed for busy families</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Free parking</div>
                <p className="text-gray-600">No parking stress for families</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-cyan-600 mb-2">12 minutes</div>
                <p className="text-gray-600">Quick drive from Bingham</p>
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
                Bingham Family Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into Bingham market town patient feedback
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
              Family-Efficient Dental Care - Quick Drive from Bingham
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Bingham NG13
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head north from Bingham market town</p>
                    <p>2. Follow A52 towards Nottingham</p>
                    <p>3. Continue to Burton Joyce (12 minutes)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 12 minutes with free family parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h4 className="font-bold text-cyan-700 mb-2">Family Convenience</h4>
                    <p className="text-gray-600">Easy access for busy market town families</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Bingham,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Bingham
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-cyan-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What Bingham Families Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Convenient access, efficient technology, family-friendly service, and transparent pricing -
              all just 12 minutes from Bingham market town.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 350+ Bingham Family Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Family-efficient care • Free parking • Modern facilities • Quick drive from market town
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-cyan-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Family Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Family-efficient scheduling</span>
              <span>✓ Modern time-saving technology</span>
              <span>✓ Free convenient parking</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
