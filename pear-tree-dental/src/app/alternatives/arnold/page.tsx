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
  title: "Looking for a Private Dentist in Arnold? Try Pear Tree Dental",
  description: "Professional dental care with modern tech, free parking, and expert service – all minutes from NG5. Discover why Arnold patients are choosing Pear Tree Dental.",
  keywords: [
    "private dentist Arnold",
    "Arnold dental alternative",
    "modern dentist NG5",
    "private dental care Arnold",
    "dental practice near Arnold",
    "Arnold dentist",
    "professional dentist NG5"
  ],
  openGraph: {
    title: "Looking for a Private Dentist in Arnold? Try Pear Tree Dental",
    description: "Professional dental care with modern tech, free parking, and expert service – all minutes from NG5.",
    url: "https://peartree.dental/alternatives/arnold"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/arnold"
  }
};

export default function PrivateDentistArnoldOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to traditional dental practices in Arnold?",
      answer: "Many patients seek newer private dentists offering modern technology, professional service, and convenient parking. Pear Tree Dental delivers these benefits while maintaining high professional standards."
    },
    {
      question: "Why are Arnold patients switching to practices outside the high street?",
      answer: "High street parking difficulties, outdated equipment, and inflexible scheduling drive patients to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and professional-focused service."
    },
    {
      question: "How do modern private dentists compare to traditional Arnold practices?",
      answer: "Modern practices typically offer digital X-rays, CEREC same-day crowns, transparent pricing, and better parking. The investment in technology and professional service often provides superior value."
    },
    {
      question: "Is it worth traveling outside Arnold for better dental care?",
      answer: "Many Arnold patients find that a 10-minute drive to a modern practice with free parking actually saves time compared to struggling with high street parking and limited appointment times."
    },
    {
      question: "What should Arnold professionals look for in a private dentist?",
      answer: "Key factors include convenient parking, modern equipment, transparent pricing, flexible professional scheduling, and respect for time. Pear Tree Dental specifically addresses these professional priorities."
    }
  ];

  const whyPatientsSwitch = [
    {
      reason: "High Street Parking Problems",
      oldExperience: "Circling for parking, paid parking, being late for appointments",
      newSolution: "Free parking directly outside practice - stress-free arrival",
      impact: "Transforms the entire visit from stressful to professional",
      icon: Car
    },
    {
      reason: "Outdated Technology",
      oldExperience: "Film X-rays, messy impressions, waiting weeks for crowns",
      newSolution: "Digital X-rays, CEREC same-day crowns, intraoral cameras",
      impact: "Better diagnostics, faster treatment, professional efficiency",
      icon: Zap
    },
    {
      reason: "Hidden Costs",
      oldExperience: "Surprise charges, unclear pricing, budget uncertainty",
      newSolution: "Transparent pricing, detailed estimates, professional budgeting",
      impact: "Financial confidence and professional planning capability",
      icon: DollarSign
    },
    {
      reason: "Inflexible Scheduling",
      oldExperience: "Limited hours, no emergency slots, rigid appointment times",
      newSolution: "Professional-friendly hours, same-day emergency care",
      impact: "Better fits professional schedules and urgent needs",
      icon: Calendar
    },
    {
      reason: "Impersonal Service",
      oldExperience: "Rushed appointments, different staff, feeling like a number",
      newSolution: "Personal professional attention, consistent expert team",
      impact: "Builds trust and confidence in professional care",
      icon: Heart
    },
    {
      reason: "Reactive Approach",
      oldExperience: "Only treating problems when they become urgent",
      newSolution: "Preventive care, early intervention, professional planning",
      impact: "Better long-term oral health and fewer emergency situations",
      icon: Shield
    }
  ];

  const modernAdvantages = [
    {
      advantage: "CEREC Same-Day Crowns",
      description: "Complete crown treatment in one visit - perfect for professionals",
      traditionalAlternative: "Temporary crowns and multiple appointments",
      patientBenefit: "Save time, avoid multiple visits, immediate professional results",
      technology: "Latest CEREC CAD/CAM technology for precision professional fitting"
    },
    {
      advantage: "Digital X-Ray Technology",
      description: "Instant, high-quality images with enhanced diagnostic capability",
      traditionalAlternative: "Film X-rays with chemical processing and delays",
      patientBenefit: "Safer, faster, and enhanced images for better professional diagnosis",
      technology: "State-of-the-art digital sensors and professional imaging software"
    },
    {
      advantage: "Intraoral Cameras",
      description: "See exactly what needs attention with detailed professional images",
      traditionalAlternative: "Verbal descriptions and basic hand mirrors",
      patientBenefit: "Professional understanding of treatments and oral health status",
      technology: "High-definition cameras for professional patient education"
    },
    {
      advantage: "Transparent Pricing System",
      description: "Clear professional pricing guides and detailed estimates upfront",
      traditionalAlternative: "Quotes only after examination with potential surprises",
      patientBenefit: "Professional budgeting confidence and understanding of value",
      technology: "Digital treatment planning and professional cost estimation"
    },
    {
      advantage: "Professional Scheduling Platform",
      description: "Book, reschedule, and manage appointments 24/7 online",
      traditionalAlternative: "Phone-only booking during limited business hours",
      patientBenefit: "Convenient professional scheduling that fits your career",
      technology: "Integrated practice management and professional patient portal"
    },
    {
      advantage: "Comprehensive Professional Care",
      description: "Detailed treatment plans addressing current and future professional needs",
      traditionalAlternative: "Addressing only immediate problems as they arise",
      patientBenefit: "Proactive care that prevents problems and maintains professional image",
      technology: "Digital charting and comprehensive professional examination protocols"
    }
  ];

  const patientJourneyComparison = [
    {
      stage: "Before Your Visit",
      traditional: "Call during business hours, limited booking options",
      modern: "Online booking 24/7, email confirmations, digital forms",
      peartree: "Professional online booking, comprehensive patient information"
    },
    {
      stage: "Arrival Experience",
      traditional: "Search for high street parking, potentially late, stressed",
      modern: "Designated parking, relaxed arrival",
      peartree: "Free parking directly outside, immediate professional arrival"
    },
    {
      stage: "Check-In Process",
      traditional: "Paper forms, waiting room delays, outdated facilities",
      modern: "Digital check-in, comfortable professional environment",
      peartree: "Professional reception area, digital processes, calming atmosphere"
    },
    {
      stage: "Clinical Examination",
      traditional: "Basic examination, film X-rays if needed",
      modern: "Comprehensive digital examination with instant results",
      peartree: "Full professional examination with intraoral camera, instant digital X-rays"
    },
    {
      stage: "Treatment Discussion",
      traditional: "Basic verbal explanation, hand-drawn diagrams",
      modern: "Visual presentation of findings and professional options",
      peartree: "Detailed professional explanation using your images, clear treatment options"
    },
    {
      stage: "Treatment Planning",
      traditional: "Basic treatment plan, cost estimates provided later",
      modern: "Comprehensive planning with professional upfront pricing",
      peartree: "Detailed professional plan with transparent pricing and payment options"
    },
    {
      stage: "Treatment Delivery",
      traditional: "Multiple visits for complex treatments",
      modern: "Efficient treatment with modern technology",
      peartree: "CEREC same-day crowns, minimal professional visits, maximum comfort"
    },
    {
      stage: "Follow-Up Care",
      traditional: "Basic follow-up when problems arise",
      modern: "Proactive follow-up and professional preventive planning",
      peartree: "Comprehensive professional aftercare with preventive focus"
    }
  ];

  const locationBenefits = [
    {
      benefit: "Strategic Professional Location",
      description: "Just 10 minutes from Arnold with excellent transport links",
      advantage: "Avoid high street traffic and parking issues completely",
      details: "Direct route via A612 with clear professional signage"
    },
    {
      benefit: "Executive Parking",
      description: "Dedicated parking spaces directly outside the practice",
      advantage: "No parking fees or time limits - professional convenience",
      details: "Safe, well-lit executive parking with easy practice access"
    },
    {
      benefit: "Modern Professional Facilities",
      description: "Purpose-built practice with latest dental technology",
      advantage: "Superior professional treatment outcomes and comfort",
      details: "Professional spa-like environment designed for executive patients"
    },
    {
      benefit: "Professional Scheduling",
      description: "Extended hours and same-day emergency appointments",
      advantage: "Better accommodation of professional work schedules",
      details: "Early morning and evening slots for working professionals"
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
                "name": "What are the alternatives to traditional dental practices in Arnold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many patients seek newer private dentists offering modern technology, professional service, and convenient parking. Pear Tree Dental delivers these benefits while maintaining high professional standards."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Arnold patients switching to practices outside the high street?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "High street parking difficulties, outdated equipment, and inflexible scheduling drive patients to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and professional-focused service."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Alternative for Arnold
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Private Dentist</span> in Arnold?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Professional Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Professional service, modern tech, and free parking – all minutes from NG5
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-orange-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Professional Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🚗 Just 10 minutes from Arnold with executive parking!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Arnold Patients Are Switching to Professional Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Traditional high street practices have served Arnold well, but professional alternatives
                offer significant advantages that improve the entire dental experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPatientsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-orange-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Old Experience:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-3">
                          <h4 className="font-semibold text-orange-700 text-sm mb-1">Professional Solution:</h4>
                          <p className="text-sm text-orange-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Impact:</h4>
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

      {/* Modern Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Professional Dental Technology: The Pear Tree Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology doesn't just make treatment more comfortable –
                it delivers better professional results and saves your valuable time.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {modernAdvantages.map((advantage, index) => (
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

                        <div className="bg-orange-50 rounded-lg p-3">
                          <h4 className="font-semibold text-orange-700 text-sm mb-1">Professional Benefit:</h4>
                          <p className="text-sm text-orange-700">{advantage.patientBenefit}</p>
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

      {/* Patient Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Professional Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that professional dental care makes at every step of your visit.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Visit Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Professional</div>
              </div>

              {patientJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-orange-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Professional Difference:</strong> Every step designed around your professional needs,
                time constraints, and expectations for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Professional Location for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sometimes the best professional choice is just outside the high street –
                easier to reach, easier to park, and much more professional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {locationBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <Building2 className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-orange-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-orange-700 text-sm mb-1">Professional Advantage:</h4>
                          <p className="text-sm text-orange-700">{benefit.advantage}</p>
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
                Why Arnold Professionals Choose the Modern Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="I'd been with my Arnold high street dentist for years, but the parking was becoming impossible and their equipment was clearly outdated. When I switched to Pear Tree, it was like entering a different world – everything digital, free executive parking right outside, and they completed my crown in one visit with their CEREC technology. As a professional, I appreciate that they respect my time and deliver service that matches my expectations. It's only 10 minutes from Arnold but the difference in professional standards is remarkable."
              author="David L. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Professional service</div>
                <p className="text-gray-600">Matches your professional standards</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Executive parking</div>
                <p className="text-gray-600">No high street parking stress</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Time efficient</div>
                <p className="text-gray-600">Respects your professional schedule</p>
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
              Professional Dental Care Results for Arnold Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that professional technology and expert care make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp"
              afterImage="/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp"
              beforeAlt="Before professional dental treatment - older style dental work"
              afterAlt="After professional dental treatment - natural-looking, precision results"
              title="Professional Dental Excellence"
              description="Arnold professional's transformation with modern techniques"
              treatmentType="CEREC Crown and Professional Smile Design"
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
                Questions About Professional Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Arnold professionals considering their options
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
              Easy Journey from Arnold to Professional Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 10-Minute Professional Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east on Arnold Lane from NG5</p>
                    <p>2. Continue onto A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Executive parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="font-bold text-orange-700 mb-2">Professional Convenience</h4>
                    <p className="text-gray-600">No parking hassles or time limits</p>
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
      <section className="py-20 bg-gradient-to-br from-orange-700 to-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Professional Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Arnold professionals are discovering –
              better technology, executive parking, and superior service just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Professional Alternative to High Street Dental Care
              </p>
              <p className="text-sm opacity-90">
                CEREC technology • Executive parking • Professional service • 10 minutes from NG5
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-orange-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Professional Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Executive parking directly outside</span>
              <span>✓ Latest professional technology</span>
              <span>✓ Professional-focused service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
