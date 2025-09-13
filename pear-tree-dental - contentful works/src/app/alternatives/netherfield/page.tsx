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
  title: "Looking for an Honest Value Dentist in Netherfield? Try Pear Tree Dental",
  description: "Reliable dental care with fair pricing and working family focus – just 8 minutes from NG4. Discover why Netherfield residents are choosing Pear Tree Dental.",
  keywords: [
    "honest value dentist Netherfield",
    "Netherfield dental alternative",
    "working family dentist NG4",
    "reliable dental care Netherfield",
    "dental practice near Netherfield",
    "Netherfield dentist",
    "practical dental NG4"
  ],
  openGraph: {
    title: "Looking for an Honest Value Dentist in Netherfield? Try Pear Tree Dental",
    description: "Reliable dental care with fair pricing and working family focus – just 8 minutes from NG4.",
    url: "https://peartree.dental/alternatives/netherfield"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/netherfield"
  }
};

export default function HonestValueDentistNetherfieldOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to unreliable dental practices for Netherfield working families?",
      answer: "Many working families seek practices offering honest pricing, reliable service, and practical scheduling. Pear Tree Dental delivers these benefits while maintaining the straightforward approach valued by working communities."
    },
    {
      question: "Why are Netherfield residents switching to practices outside their immediate area?",
      answer: "Hidden costs, unreliable service, and inflexible scheduling drive working families to seek honest alternatives. Practices like Pear Tree offer transparent pricing, dependable care, and working family-friendly service."
    },
    {
      question: "How do modern dental practices compare to traditional options for Netherfield working families?",
      answer: "Modern practices typically offer honest pricing, reliable service, practical technology, and working family scheduling. The focus on value and dependability often provides better outcomes for working communities."
    },
    {
      question: "Is it worth traveling outside Netherfield for more reliable dental care?",
      answer: "Many Netherfield working families find that an 8-minute drive to a practice with honest pricing and reliable service actually provides better value than local options with hidden costs and unreliable service."
    },
    {
      question: "What should Netherfield working families look for in a dental practice?",
      answer: "Key factors include honest pricing, reliable service, practical technology, working family scheduling, and straightforward communication. Pear Tree Dental specifically addresses these working community priorities."
    }
  ];

  const whyWorkingFamiliesSwitch = [
    {
      reason: "Unreliable Service Quality",
      oldExperience: "Inconsistent appointments, variable quality, unpredictable service",
      newSolution: "Reliable, consistent service with dependable quality standards",
      impact: "Confidence in every appointment and predictable working family care",
      icon: Shield
    },
    {
      reason: "Hidden Costs and Surprises",
      oldExperience: "Unexpected fees, unclear pricing, budget disruption for working families",
      newSolution: "Honest, transparent pricing with no hidden costs or surprises",
      impact: "Working family budget confidence and financial planning ability",
      icon: DollarSign
    },
    {
      reason: "Inflexible Scheduling",
      oldExperience: "Rigid hours, no shift work accommodation, family scheduling conflicts",
      newSolution: "Working family-friendly scheduling with shift work understanding",
      impact: "Dental care that fits with work patterns and family commitments",
      icon: Calendar
    },
    {
      reason: "Overcomplicated Service",
      oldExperience: "Unnecessary complexity, confusing explanations, impractical approach",
      newSolution: "Straightforward, honest service with clear communication",
      impact: "Easy understanding and no-nonsense working family care",
      icon: Heart
    },
    {
      reason: "Poor Value for Money",
      oldExperience: "High costs, limited benefits, unclear value proposition",
      newSolution: "Fair pricing with clear value and practical benefits",
      impact: "Better value for working family dental budgets",
      icon: Target
    },
    {
      reason: "Inconvenient Access",
      oldExperience: "Difficult parking, inconvenient location, access challenges",
      newSolution: "Convenient access with free parking and working family accommodation",
      impact: "Easy, stress-free visits for busy working families",
      icon: Car
    }
  ];

  const workingFamilyAdvantages = [
    {
      advantage: "Working Family CEREC Crowns",
      description: "Same-day crowns that save working families time off work",
      traditionalAlternative: "Multiple appointments, time off work, lost wages for working families",
      workingFamilyBenefit: "One visit instead of three, minimal work disruption",
      technology: "Practical CEREC technology designed for working family efficiency"
    },
    {
      advantage: "Honest Digital X-Rays",
      description: "Clear, immediate results with honest explanation of findings",
      traditionalAlternative: "Film processing delays, unclear results, confusing explanations",
      workingFamilyBenefit: "Immediate understanding with straightforward explanations",
      technology: "Digital technology with honest, working family-friendly communication"
    },
    {
      advantage: "Practical Treatment Planning",
      description: "Honest treatment planning focused on working family needs and budgets",
      traditionalAlternative: "Overcomplicated plans, unclear priorities, budget confusion",
      workingFamilyBenefit: "Clear priorities with practical, affordable treatment options",
      technology: "Straightforward planning systems with working family budget focus"
    },
    {
      advantage: "Working Family Scheduling Technology",
      description: "Flexible scheduling that works with shift patterns and work commitments",
      traditionalAlternative: "Rigid scheduling, no shift work accommodation, family conflicts",
      workingFamilyBenefit: "Appointments that fit with working patterns and family needs",
      technology: "Scheduling systems designed for working family convenience"
    },
    {
      advantage: "Transparent Pricing Technology",
      description: "Clear, honest pricing with no hidden costs for working family budgets",
      traditionalAlternative: "Hidden fees, surprise charges, budget uncertainty",
      workingFamilyBenefit: "Confident budgeting with honest, upfront pricing",
      technology: "Pricing systems focused on working family financial transparency"
    },
    {
      advantage: "Reliable Service Systems",
      description: "Dependable care that working families can count on consistently",
      traditionalAlternative: "Inconsistent quality, unreliable appointments, service variability",
      workingFamilyBenefit: "Consistent, dependable care that working families can trust",
      technology: "Quality systems ensuring reliable service for working community needs"
    }
  ];

  const workingFamilyJourneyComparison = [
    {
      stage: "Working Family Planning",
      traditional: "Inflexible booking, no shift work accommodation, family conflicts",
      modern: "Some flexibility, basic working family consideration",
      peartree: "Working family-focused booking with shift work understanding"
    },
    {
      stage: "Working Family Travel",
      traditional: "Inconvenient access, parking challenges, work disruption",
      modern: "Some convenience improvements, basic access",
      peartree: "8-minute convenient drive with free working family parking"
    },
    {
      stage: "Working Family Arrival",
      traditional: "Parking stress, rushed feeling, family complications",
      modern: "Some accommodation, basic family convenience",
      peartree: "Stress-free arrival with working family-friendly environment"
    },
    {
      stage: "Working Family Service",
      traditional: "Rigid service, no working family understanding, complications",
      modern: "Some working family awareness, basic accommodation",
      peartree: "Service designed around working family needs and schedules"
    },
    {
      stage: "Working Family Communication",
      traditional: "Complex explanations, unclear costs, family confusion",
      modern: "Some clear communication, basic cost information",
      peartree: "Honest, straightforward communication with clear working family pricing"
    },
    {
      stage: "Working Family Treatment",
      traditional: "Multiple visits, work disruption, family scheduling conflicts",
      modern: "Some efficiency, reduced family disruption",
      peartree: "Same-day treatments minimizing working family disruption"
    },
    {
      stage: "Working Family Aftercare",
      traditional: "Complex follow-up, working family scheduling difficulties",
      modern: "Some working family consideration, basic follow-up",
      peartree: "Working family-friendly aftercare with convenient scheduling"
    }
  ];

  const workingFamilyBenefits = [
    {
      benefit: "Honest Value Approach",
      description: "Transparent pricing that working families can understand and trust",
      advantage: "Clear value proposition without hidden costs or surprises",
      details: "Fair pricing with honest explanations and working family budget consideration"
    },
    {
      benefit: "Working Family Scheduling",
      description: "Appointment flexibility that accommodates shift work and family commitments",
      advantage: "Dental care that fits with working patterns rather than disrupting them",
      details: "Early morning, evening, and weekend options for working family convenience"
    },
    {
      benefit: "Reliable Service Standards",
      description: "Consistent, dependable care that working families can count on",
      advantage: "Predictable quality and service that working families can trust",
      details: "Quality systems ensuring consistent care for working community needs"
    },
    {
      benefit: "Practical Technology Benefits",
      description: "Modern technology that provides real benefits for working family life",
      advantage: "Technology that saves time and provides better value for working families",
      details: "Same-day treatments and efficient care reducing work disruption"
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
                "name": "What are the alternatives to unreliable dental practices for Netherfield working families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many working families seek practices offering honest pricing, reliable service, and practical scheduling. Pear Tree Dental delivers these benefits while maintaining the straightforward approach valued by working communities."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Netherfield residents switching to practices outside their immediate area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hidden costs, unreliable service, and inflexible scheduling drive working families to seek honest alternatives. Practices like Pear Tree offer transparent pricing, dependable care, and working family-friendly service."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gray-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Honest Value Alternative for Netherfield
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for an <span className="text-yellow-300">Honest Value Dentist</span> in Netherfield?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Reliable Working Family Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Honest pricing, reliable service, and working family focus – just 8 minutes from NG4
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Honest Value Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🛠️ Just 8 minutes from Netherfield with working family convenience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Working Families Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Netherfield Working Families Are Switching to Honest Value Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Working families need dental care that's honest, reliable, and practical.
                Modern alternatives offer significant advantages that respect working community values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyWorkingFamiliesSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Challenge:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-semibold text-gray-700 text-sm mb-1">Honest Solution:</h4>
                          <p className="text-sm text-gray-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Working Family Impact:</h4>
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

      {/* Working Family Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Honest Value Dental Technology: The Pear Tree Working Family Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Practical technology designed for working families –
                honest value, reliable results, and respect for working community needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workingFamilyAdvantages.map((advantage, index) => (
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

                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-semibold text-gray-700 text-sm mb-1">Working Family Benefit:</h4>
                          <p className="text-sm text-gray-700">{advantage.workingFamilyBenefit}</p>
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

      {/* Working Family Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Working Family Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that honest, working family-focused dental care makes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Working Family Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Working Family</div>
              </div>

              {workingFamilyJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-gray-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Working Family Difference:</strong> Every step designed around working community values,
                honest pricing, and reliable service that working families can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Family Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Honest Value Solution for Netherfield Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dental care that understands and respects working community values and practical needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workingFamilyBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-full">
                        <Users className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-gray-700 text-sm mb-1">Working Family Advantage:</h4>
                          <p className="text-sm text-gray-700">{benefit.advantage}</p>
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
                Why Netherfield Working Families Choose the Honest Value Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="Working in Netherfield, you need a dentist who's straight with you about costs and doesn't mess you about with appointments. My old practice kept changing appointment times and hitting me with extra charges I wasn't expecting. When I switched to Pear Tree, it was night and day - they tell you exactly what it costs upfront, they stick to appointment times, and they actually understand what it's like to work shifts. The crown was done in one visit which saved me taking another day off work. It's only 8 minutes away but the difference in how they treat working families is massive."
              author="Paul S. from Netherfield, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-600 mb-2">Straight talking</div>
                <p className="text-gray-600">Honest, reliable service</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-600 mb-2">Fair pricing</div>
                <p className="text-gray-600">No surprise charges</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-600 mb-2">Working family friendly</div>
                <p className="text-gray-600">Understands shift work</p>
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
              Honest Value Dental Care Results for Netherfield Working Families
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that reliable, honest dental care makes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/netherfield-working-family-before-case-1.webp"
              afterImage="/images/netherfield-working-family-after-case-1.webp"
              beforeAlt="Before honest value dental care - unreliable traditional treatment"
              afterAlt="After honest value dental care - reliable, quality results"
              title="Honest Value Dental Excellence"
              description="Netherfield working family's transformation with reliable care"
              treatmentType="CEREC Crown and Honest Value Care"
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
                Questions About Honest Value Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Netherfield working families considering their options
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
              Reliable Journey from Netherfield to Honest Value Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 8-Minute Working Family Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east from Netherfield towards Lowdham</p>
                    <p>2. Follow A612 to Burton Joyce</p>
                    <p>3. Reliable, direct route</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free working family parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-700 mb-2">Working Family Convenience</h4>
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
      <section className="py-20 bg-gradient-to-br from-gray-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Honest Value Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Netherfield working families are discovering –
              honest pricing, reliable service, and working family focus just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Honest Value Alternative to Unreliable Dental Care
              </p>
              <p className="text-sm opacity-90">
                Honest pricing • Reliable service • Working family focus • 8 minutes from NG4
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Honest Value Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Honest, transparent pricing</span>
              <span>✓ Reliable, dependable service</span>
              <span>✓ Working family convenience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
