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
  ArrowRight,
  Sparkles,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Looking for an Efficient Family Dentist in Bingham? Try Pear Tree Dental",
  description: "Modern family dental care with time-saving technology and convenient access – just 12 minutes from NG13. Discover why Bingham families are choosing Pear Tree Dental.",
  keywords: [
    "efficient family dentist Bingham",
    "Bingham dental alternative",
    "modern dentist NG13",
    "family dental care Bingham",
    "dental practice near Bingham",
    "Bingham dentist",
    "efficient dental NG13"
  ],
  openGraph: {
    title: "Looking for an Efficient Family Dentist in Bingham? Try Pear Tree Dental",
    description: "Modern family dental care with time-saving technology and convenient access – just 12 minutes from NG13.",
    url: "https://peartree.dental/alternatives/bingham"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/bingham"
  }
};

export default function EfficientFamilyDentistBinghamOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to traditional dental practices for busy Bingham families?",
      answer: "Many market town families seek practices offering efficient modern technology, convenient scheduling, and family-friendly service. Pear Tree Dental delivers these benefits while maintaining the personal touch valued in Bingham."
    },
    {
      question: "Why are Bingham families switching to practices outside their immediate area?",
      answer: "Limited local parking, inefficient treatment requiring multiple visits, and inflexible scheduling drive families to seek modern alternatives. Practices like Pear Tree offer time-saving technology and family-convenient care."
    },
    {
      question: "How do modern dental practices compare to traditional options for Bingham families?",
      answer: "Modern practices typically offer same-day treatments, digital X-rays, flexible scheduling, and efficient family care. The investment in time-saving technology often provides superior convenience for busy market town families."
    },
    {
      question: "Is it worth traveling outside Bingham for more efficient dental care?",
      answer: "Many Bingham families find that a 12-minute drive to a modern practice with same-day treatments actually saves time compared to multiple visits to traditional practices with limited parking."
    },
    {
      question: "What should busy Bingham families look for in a modern dental practice?",
      answer: "Key factors include convenient parking, efficient same-day treatments, flexible family scheduling, transparent pricing, and technology that saves time. Pear Tree Dental specifically addresses these busy family priorities."
    }
  ];

  const whyFamiliesSwitch = [
    {
      reason: "Time-Consuming Multiple Visits",
      oldExperience: "Multiple appointments, repeated travel, disrupted work schedules",
      newSolution: "Same-day CEREC crowns and efficient comprehensive treatments",
      impact: "Saves family time and reduces disruption to busy market town schedules",
      icon: Clock
    },
    {
      reason: "Inflexible Traditional Scheduling",
      oldExperience: "Rigid appointment times, no emergency access, family coordination difficulties",
      newSolution: "Flexible family scheduling with same-day emergency care",
      impact: "Better accommodation of work, school, and family commitments",
      icon: Calendar
    },
    {
      reason: "Parking and Access Challenges",
      oldExperience: "Limited parking, time wasted searching, late appointments",
      newSolution: "Free parking directly outside practice with easy family access",
      impact: "Eliminates parking stress and ensures punctual family appointments",
      icon: Car
    },
    {
      reason: "Inefficient Traditional Technology",
      oldExperience: "Slow treatments, multiple visits, outdated equipment",
      newSolution: "Latest digital technology and time-saving modern equipment",
      impact: "Faster treatments with better results for busy families",
      icon: Zap
    },
    {
      reason: "Budget Uncertainty for Families",
      oldExperience: "Surprise costs, hidden fees, family budget disruption",
      newSolution: "Transparent family pricing with clear treatment plans",
      impact: "Confident family financial planning and budget management",
      icon: DollarSign
    },
    {
      reason: "Impersonal High-Volume Service",
      oldExperience: "Rushed appointments, different staff, no family continuity",
      newSolution: "Personal family care with consistent team relationships",
      impact: "Builds family trust and maintains market town values",
      icon: Heart
    }
  ];

  const efficiencyAdvantages = [
    {
      advantage: "Family-Efficient CEREC Crowns",
      description: "Complete crown treatment in one visit saving busy families time",
      traditionalAlternative: "Multiple family visits, time off work and school, scheduling complications",
      familyBenefit: "One appointment instead of three, minimal family disruption",
      technology: "Latest CEREC technology designed for busy family efficiency"
    },
    {
      advantage: "Time-Saving Digital X-Rays",
      description: "Instant results eliminating waiting time for busy families",
      traditionalAlternative: "Film processing delays, additional appointment time",
      familyBenefit: "Immediate consultation and treatment planning",
      technology: "Digital sensors with instant family-friendly explanations"
    },
    {
      advantage: "Efficient Family Scheduling Technology",
      description: "Online booking and coordination for multiple family members",
      traditionalAlternative: "Phone-only booking, individual appointment scheduling",
      familyBenefit: "Coordinate whole family efficiently, save planning time",
      technology: "Integrated family scheduling and appointment management"
    },
    {
      advantage: "Family Budget Technology",
      description: "Clear digital treatment planning with transparent family pricing",
      traditionalAlternative: "Unclear costs, manual estimates, budget uncertainty",
      familyBenefit: "Confident family financial planning and clear cost understanding",
      technology: "Digital treatment planning with instant family cost estimates"
    },
    {
      advantage: "Comprehensive Family Care Efficiency",
      description: "All family members treated efficiently in coordinated appointments",
      traditionalAlternative: "Separate practices, multiple locations, family coordination challenges",
      familyBenefit: "One practice for whole family, coordinated efficient care",
      technology: "Family care protocols and age-appropriate efficient treatments"
    },
    {
      advantage: "Emergency Family Access",
      description: "Same-day emergency care for busy families when needed",
      traditionalAlternative: "Long waits for emergency care, family schedule disruption",
      familyBenefit: "Immediate family emergency care without schedule disruption",
      technology: "Efficient emergency protocols and family priority systems"
    }
  ];

  const familyJourneyComparison = [
    {
      stage: "Family Planning",
      traditional: "Multiple phone calls, individual appointments, complex coordination",
      modern: "Some online options, basic family coordination",
      peartree: "Efficient online family booking, coordinated appointment planning"
    },
    {
      stage: "Family Travel",
      traditional: "Multiple trips, parking challenges, family time loss",
      modern: "Some efficiency improvements, variable convenience",
      peartree: "12-minute drive with guaranteed free family parking"
    },
    {
      stage: "Family Arrival",
      traditional: "Parking stress, rushing with children, family anxiety",
      modern: "Some parking provision, basic family accommodation",
      peartree: "Stress-free family arrival with immediate parking outside"
    },
    {
      stage: "Family Check-In",
      traditional: "Paper forms, individual processing, family waiting time",
      modern: "Some digital options, basic family processing",
      peartree: "Efficient family check-in with digital processing"
    },
    {
      stage: "Family Treatment",
      traditional: "Individual focus, limited family coordination, multiple visits",
      modern: "Some family awareness, basic coordination",
      peartree: "Coordinated family care with efficient same-day treatments"
    },
    {
      stage: "Family Treatment Planning",
      traditional: "Separate plans, complex family coordination, unclear costs",
      modern: "Some family planning, basic cost coordination",
      peartree: "Comprehensive family plans with transparent pricing"
    },
    {
      stage: "Family Treatment Delivery",
      traditional: "Multiple family visits, repeated travel, family schedule disruption",
      modern: "Some efficiency, reduced visits",
      peartree: "CEREC same-day crowns, minimized family visits, maximum efficiency"
    },
    {
      stage: "Family Follow-Up",
      traditional: "Individual follow-ups, complex family scheduling",
      modern: "Some family coordination, basic follow-up",
      peartree: "Coordinated family aftercare with efficient scheduling"
    }
  ];

  const familyBenefits = [
    {
      benefit: "Time-Saving Technology",
      description: "Advanced equipment that reduces treatment time for busy families",
      advantage: "More time for family activities and less disruption to schedules",
      details: "CEREC same-day crowns, digital X-rays, and efficient treatment protocols"
    },
    {
      benefit: "Family Coordination Efficiency",
      description: "Streamlined care for multiple family members in coordinated visits",
      advantage: "One practice visit covers whole family efficiently",
      details: "Back-to-back appointments, family treatment planning, coordinated care"
    },
    {
      benefit: "Convenient Market Town Access",
      description: "Easy 12-minute drive from Bingham with stress-free parking",
      advantage: "More convenient than struggling with local parking limitations",
      details: "Free parking directly outside, easy access for families with children"
    },
    {
      benefit: "Transparent Family Budgeting",
      description: "Clear pricing that helps busy families plan dental costs",
      advantage: "Confident family financial planning without surprise costs",
      details: "Upfront estimates, family payment plans, no hidden fees"
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
                "name": "What are the alternatives to traditional dental practices for busy Bingham families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many market town families seek practices offering efficient modern technology, convenient scheduling, and family-friendly service. Pear Tree Dental delivers these benefits while maintaining the personal touch valued in Bingham."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Bingham families switching to practices outside their immediate area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Limited local parking, inefficient treatment requiring multiple visits, and inflexible scheduling drive families to seek modern alternatives. Practices like Pear Tree offer time-saving technology and family-convenient care."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-violet-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Efficient Family Alternative for Bingham
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for an <span className="text-yellow-300">Efficient Family Dentist</span> in Bingham?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Time-Saving Family Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Time-saving tech, family scheduling, and convenient access – just 12 minutes from NG13
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-violet-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Efficient Family Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-violet-600 hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">⏰ Just 12 minutes from Bingham with time-saving family care!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Bingham Families Are Switching to Time-Saving Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Busy market town families need dental care that fits their schedules, not disrupts them.
                Modern alternatives offer significant time-saving advantages for family life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyFamiliesSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-violet-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-violet-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Challenge:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-violet-50 rounded-lg p-3">
                          <h4 className="font-semibold text-violet-700 text-sm mb-1">Efficient Solution:</h4>
                          <p className="text-sm text-violet-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Family Impact:</h4>
                          <p className="text-sm text-blue-700">{reason.impact}</p>
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

      {/* Efficiency Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Time-Saving Family Dental Technology: The Pear Tree Efficiency Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology designed for busy families –
                better results in less time with minimal disruption to family schedules.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {efficiencyAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{advantage.advantage}</h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Method:</h4>
                          <p className="text-sm text-red-700">{advantage.traditionalAlternative}</p>
                        </div>

                        <div className="bg-violet-50 rounded-lg p-3">
                          <h4 className="font-semibold text-violet-700 text-sm mb-1">Family Benefit:</h4>
                          <p className="text-sm text-violet-700">{advantage.familyBenefit}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Our Technology:</h4>
                        <p className="text-sm text-blue-700">{advantage.technology}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Family Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that efficient, family-focused dental care makes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Family Journey Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Efficiency</div>
              </div>

              {familyJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-violet-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Efficiency Difference:</strong> Every step designed around busy family schedules,
                time-saving technology, and minimal disruption to market town life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Efficient Solution for Busy Bingham Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Time-saving dental care that understands and accommodates the busy schedules of market town families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {familyBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-violet-100 rounded-full">
                        <Clock className="w-6 h-6 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-violet-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-violet-700 text-sm mb-1">Family Advantage:</h4>
                          <p className="text-sm text-violet-700">{benefit.advantage}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Details:</h4>
                          <p className="text-sm text-blue-700">{benefit.details}</p>
                        </div>
                      </div>
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
                Why Bingham Families Choose the Time-Saving Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="As a working parent in Bingham with three children, traditional dental care was eating up our family time - multiple visits, waiting around, trying to coordinate everyone's schedules. When we switched to Pear Tree, it was like getting our weekends back. My daughter's crown was done in one visit instead of three, the kids actually enjoy going because of the technology, and the free parking means no more circling around looking for spaces. Just 12 minutes from Bingham but saves us hours of family time."
              author="Helen K. from Bingham, NG13"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-violet-600 mb-2">Time-saving</div>
                <p className="text-gray-600">More family time, less dental time</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-violet-600 mb-2">One visit crowns</div>
                <p className="text-gray-600">CEREC same-day technology</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-violet-600 mb-2">Family-efficient</div>
                <p className="text-gray-600">Designed for busy families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Efficient Family Dental Care Results for Bingham Families
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that time-saving technology and efficient care make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/bingham-family-before-case-1.webp"
              afterImage="/images/bingham-family-after-case-1.webp"
              beforeAlt="Before efficient family dental care - traditional time-consuming treatment"
              afterAlt="After efficient family dental care - natural-looking, same-day results"
              title="Efficient Family Dental Excellence"
              description="Bingham family's transformation with time-saving care"
              treatmentType="CEREC Crown and Efficient Family Care"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Questions About Efficient Family Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from busy Bingham families considering their options
              </p>
            </div>

            <FAQSection faqs={alternativesFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Time-Saving Journey from Bingham to Efficient Family Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 12-Minute Family Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head north from Bingham market town</p>
                    <p>2. Follow A52 towards Nottingham</p>
                    <p>3. Quick route to Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free family parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-violet-50 rounded-lg p-6">
                    <Clock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                    <h4 className="font-bold text-violet-700 mb-2">Time-Saving Convenience</h4>
                    <p className="text-gray-600">Efficient access for busy families</p>
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
      <section className="py-20 bg-gradient-to-br from-violet-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Time-Saving Family Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Bingham families are discovering –
              efficient technology, time-saving treatments, and convenient access just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Time-Saving Alternative to Traditional Family Dental Care
              </p>
              <p className="text-sm opacity-90">
                Efficient technology • Family scheduling • Convenient access • 12 minutes from NG13
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-violet-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Efficient Family Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-violet-600 hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Time-saving CEREC crowns</span>
              <span>✓ Efficient family scheduling</span>
              <span>✓ Convenient free parking</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
