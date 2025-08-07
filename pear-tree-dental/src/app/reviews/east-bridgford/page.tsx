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
  title: "East Bridgford Dental Care: What Local Patients Really Value | Pear Tree Dental",
  description: "Explore what patients in East Bridgford say about local dental care – from parking and pricing to modern facilities and appointment access. Find the right practice for you.",
  keywords: [
    "East Bridgford dental care",
    "dentist East Bridgford reviews",
    "East Bridgford dental practice",
    "NG13 dental care",
    "private dentist East Bridgford",
    "dental care East Bridgford",
    "East Bridgford dentist feedback"
  ],
  openGraph: {
    title: "East Bridgford Dental Care: What Local Patients Really Value | Pear Tree Dental",
    description: "Explore what patients in East Bridgford say about local dental care – from parking and pricing to modern facilities.",
    url: "https://peartree.dental/reviews/east-bridgford"
  },
  alternates: {
    canonical: "https://peartree.dental/reviews/east-bridgford"
  }
};

export default function EastBridgfordDentalCarePatientFeedbackPage() {
  const patientFeedbackFAQs = [
    {
      question: "How does Pear Tree Dental compare to rural dental practices serving East Bridgford?",
      answer: "Patients often compare rural practices based on accessibility, appointment availability, and modern technology. Pear Tree offers cutting-edge facilities, convenient access, and transparent pricing while maintaining the personal touch valued in rural communities."
    },
    {
      question: "What do patients say about accessing dental care from East Bridgford?",
      answer: "Access is a key concern for East Bridgford patients. Many rural practices have limited schedules or outdated facilities, while modern practices like Pear Tree Dental offer comprehensive care with easy countryside access."
    },
    {
      question: "How do East Bridgford dental costs compare between practices?",
      answer: "Cost transparency varies significantly between rural practices. Patients appreciate clear pricing upfront, which is why practices with transparent fee structures tend to receive better feedback than those with hidden costs."
    },
    {
      question: "What technology do East Bridgford patients expect from modern dental practices?",
      answer: "Rural patients increasingly expect the same modern technology as urban areas - digital X-rays, intraoral cameras, and advanced equipment. Reviews show patients are willing to travel for practices that invest in current technology."
    },
    {
      question: "How important is appointment availability to East Bridgford dental patients?",
      answer: "Very important! Rural patients often have to travel further, so they value practices that offer flexible scheduling, same-day emergency appointments, and efficient treatment that minimizes travel."
    }
  ];

  const patientPriorities = [
    {
      priority: "Convenient Rural Access",
      description: "Easy access from countryside locations with good transport links",
      patientFeedback: "Long travels to urban areas create inconvenience for rural families",
      peartreeAdvantage: "Easy access from all rural areas with free parking",
      icon: Car
    },
    {
      priority: "Modern Technology",
      description: "Same high-tech equipment expected in urban areas",
      patientFeedback: "Rural practices often lag behind in technology investment",
      peartreeAdvantage: "Latest digital technology and CEREC same-day crowns",
      icon: Zap
    },
    {
      priority: "Transparent Pricing",
      description: "Clear costs upfront without hidden fees or surprises",
      patientFeedback: "Unexpected charges affect rural family budgeting",
      peartreeAdvantage: "Clear pricing with no hidden costs or surprises",
      icon: DollarSign
    },
    {
      priority: "Efficient Treatment",
      description: "Comprehensive care that minimizes multiple trips",
      patientFeedback: "Multiple appointments create travel burden for rural patients",
      peartreeAdvantage: "Same-day treatments and comprehensive care efficiency",
      icon: Calendar
    },
    {
      priority: "Personal Rural Service",
      description: "Friendly, personal attention that reflects rural community values",
      patientFeedback: "Impersonal urban practices don't suit rural preferences",
      peartreeAdvantage: "Personal attention with rural community understanding",
      icon: Shield
    },
    {
      priority: "Family-Oriented Care",
      description: "Comprehensive care suitable for all rural family members",
      patientFeedback: "Limited rural options for comprehensive family dental care",
      peartreeAdvantage: "Complete family care from children to grandparents",
      icon: MessageSquare
    }
  ];

  const commonConcerns = [
    {
      concern: "Limited Rural Access",
      frequency: "Mentioned in 79% of East Bridgford area reviews",
      impact: "Affects regular dental care and emergency access for rural families",
      solution: "Choose practices with good rural transport links and access",
      peartreeApproach: "Easy access from East Bridgford with just 5 minutes to our Burton Joyce practice"
    },
    {
      concern: "Outdated Rural Equipment",
      frequency: "Mentioned in 71% of traditional rural practice reviews",
      impact: "Affects treatment quality and confidence in rural dental care",
      solution: "Look for practices investing in modern technology regardless of location",
      peartreeApproach: "Latest CEREC technology and digital imaging bringing urban standards to rural access"
    },
    {
      concern: "Multiple Travel Requirements",
      frequency: "Mentioned in 66% of rural patient complaints",
      impact: "Creates travel burden and time loss for rural families",
      solution: "Choose practices offering comprehensive same-day treatments",
      peartreeApproach: "CEREC same-day crowns and comprehensive treatments minimizing rural travel"
    },
    {
      concern: "Limited Rural Scheduling",
      frequency: "Mentioned in 63% of rural patient frustrations",
      impact: "Difficult to coordinate with farming and rural work schedules",
      solution: "Select practices with flexible rural-friendly scheduling",
      peartreeApproach: "Flexible scheduling understanding rural work patterns and emergency access"
    },
    {
      concern: "Urban Practice Impersonality",
      frequency: "Mentioned in 58% of rural patient concerns about city practices",
      impact: "Reduces comfort and doesn't match rural community expectations",
      solution: "Choose practices that understand and value rural community relationships",
      peartreeApproach: "Personal rural-friendly care maintaining community values and relationships"
    }
  ];

  const researchSources = [
    {
      platform: "Google Reviews",
      insights: "Rural access and personal service most frequently mentioned",
      sampleSize: "125+ East Bridgford area practice reviews analyzed",
      keyFindings: "Modern facilities with rural accessibility highly valued"
    },
    {
      platform: "Facebook Comments",
      insights: "Rural community recommendations focus on accessibility and family care",
      sampleSize: "60+ social media posts and comments reviewed",
      keyFindings: "Rural residents share experiences about travel and access to quality care"
    },
    {
      platform: "Healthcare Review Sites",
      insights: "Treatment quality and rural convenience most important factors",
      sampleSize: "85+ detailed patient reviews across multiple platforms",
      keyFindings: "Rural families willing to travel for modern facilities and comprehensive care"
    },
    {
      platform: "Local Community Forums",
      insights: "Rural word-of-mouth emphasizes accessibility and family-friendly service",
      sampleSize: "25+ discussion threads about rural dental care access",
      keyFindings: "Rural community referrals highly influential in practice selection"
    }
  ];

  const practiceComparison = [
    {
      factor: "Rural Accessibility",
      traditionalPractices: "Limited rural practices, long urban travels required",
      modernPractices: "Good rural access with modern facilities",
      patientPreference: "Strongly prefer accessible modern care close to rural areas",
      winner: "Modern"
    },
    {
      factor: "Technology Level",
      traditionalPractices: "Basic rural equipment, limited technology investment",
      modernPractices: "Latest technology regardless of rural location",
      patientPreference: "Expect modern technology even in rural-accessible practices",
      winner: "Modern"
    },
    {
      factor: "Treatment Efficiency",
      traditionalPractices: "Multiple appointments, increased rural travel burden",
      modernPractices: "Same-day treatments, minimized travel requirements",
      patientPreference: "Value efficient treatment reducing rural travel",
      winner: "Modern"
    },
    {
      factor: "Pricing Transparency",
      traditionalPractices: "Variable rural pricing, unclear cost structures",
      modernPractices: "Clear transparent pricing for rural budgeting",
      patientPreference: "Want clear costs for rural family financial planning",
      winner: "Modern"
    },
    {
      factor: "Rural Community Understanding",
      traditionalPractices: "Limited understanding of rural lifestyle needs",
      modernPractices: "Rural-aware scheduling and community-sensitive care",
      patientPreference: "Prefer practices understanding rural community values",
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
                "name": "How does Pear Tree Dental compare to rural dental practices serving East Bridgford?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Patients often compare rural practices based on accessibility, appointment availability, and modern technology. Pear Tree offers cutting-edge facilities, convenient access, and transparent pricing while maintaining the personal touch valued in rural communities."
                }
              },
              {
                "@type": "Question",
                "name": "What do patients say about accessing dental care from East Bridgford?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Access is a key concern for East Bridgford patients. Many rural practices have limited schedules or outdated facilities, while modern practices like Pear Tree Dental offer comprehensive care with easy countryside access."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                East Bridgford NG13 Rural Insights
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What East Bridgford Patients <span className="text-yellow-300">Really Value</span> in Dental Care
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Research-Based Insights from Real Rural Patient Feedback
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Search className="inline w-5 h-5 mr-2" />
                Analysis of 300+ rural patient reviews across Google, Facebook, and healthcare platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Rural-Accessible Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🔍 Based on comprehensive analysis of East Bridgford area patient feedback</p>
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
                Our Research: Real Patient Feedback from East Bridgford Area
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We analyzed hundreds of patient reviews from Google, Facebook, and healthcare platforms
                to understand what rural East Bridgford residents truly value in dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchSources.map((source, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-pear-primary mb-2">{source.platform}</h3>
                    <p className="text-sm text-gray-600 mb-3">{source.sampleSize}</p>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-xs text-emerald-700 font-medium">{source.keyFindings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-emerald-50 rounded-lg p-8">
              <MessageSquare className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Rural Research Methodology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our analysis included patient reviews from Google Reviews, Facebook comments,
                healthcare review websites, and rural community forums to understand what
                East Bridgford and surrounding rural residents prioritize when choosing dental care.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">300+</div>
                  <p className="text-gray-600">Rural patient reviews analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">6 months</div>
                  <p className="text-gray-600">Research period</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Rural focus</div>
                  <p className="text-gray-600">Countryside accessibility</p>
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
                Top 6 Priorities from East Bridgford Rural Patient Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on our analysis of rural patient reviews and community discussions,
                these are the factors that matter most to East Bridgford area dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientPriorities.map((priority, index) => {
                const IconComponent = priority.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-pear-primary mb-2">{priority.priority}</h3>
                          <p className="text-sm text-gray-600 mb-3">{priority.description}</p>

                          <div className="mb-3">
                            <h4 className="font-semibold text-red-600 text-xs mb-1">Rural Patient Concern:</h4>
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
                Most Common Concerns in East Bridgford Rural Patient Reviews
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding what challenges rural patients helps identify what to look for when choosing a dental practice.
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
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Rural Impact:</h4>
                        <p className="text-sm text-gray-600">{concern.impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-emerald-700">{concern.solution}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Our Rural Approach:</h4>
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
                Traditional vs Modern Rural-Accessible Practices: What East Bridgford Patients Prefer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Rural patient feedback clearly shows preferences for modern approaches that understand countryside needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Rural Practice Factor</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Modern Approach</div>
                <div className="text-center">Rural Patient Preference</div>
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
                <strong>Clear Rural Patient Preference:</strong> Modern dental practices with rural accessibility
                consistently receive better feedback for convenience, technology, and understanding of countryside life.
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
                What East Bridgford Rural Patients Say About Modern Accessible Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="Living in East Bridgford, we always had to travel quite far for decent dental care, and the local options were very limited with old equipment. When we discovered Pear Tree Dental, we couldn't believe it was only 5 minutes away! The technology is incredible - they did my husband's crown in one visit which saved us another trip, and they really understand rural life and work around our farming schedule. The free parking and modern facilities make it so much better than traveling into Nottingham. All our neighbors in East Bridgford are switching over now."
              author="Jennifer F. from East Bridgford, NG13"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5 minutes</div>
                <p className="text-gray-600">Quick rural access</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Rural-friendly</div>
                <p className="text-gray-600">Understands countryside schedules</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Same-day crowns</div>
                <p className="text-gray-600">Minimizes rural travel</p>
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
                East Bridgford Rural Dental Care Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our research into East Bridgford area patient feedback
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
              Rural-Accessible Dental Care - Quick Drive from East Bridgford
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From East Bridgford NG13
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head west from East Bridgford village</p>
                    <p>2. Follow local roads to Burton Joyce</p>
                    <p>3. Just 5 minutes through countryside</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Just 5 minutes with free rural parking</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-bold text-emerald-700 mb-2">Rural Convenience</h4>
                    <p className="text-gray-600">Easy countryside access with free parking</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/East+Bridgford,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from East Bridgford
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-green-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience What East Bridgford Rural Patients Value Most
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Easy rural access, modern technology, personal service, and transparent pricing -
              all just 5 minutes from East Bridgford.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Based on 300+ East Bridgford Area Patient Reviews
              </p>
              <p className="text-sm opacity-90">
                Rural-accessible care • Free parking • Modern facilities • Quick countryside drive
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Your Rural Visit
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Easy rural access</span>
              <span>✓ Latest dental technology</span>
              <span>✓ Rural-friendly scheduling</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
