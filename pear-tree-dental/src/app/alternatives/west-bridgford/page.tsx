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
  title: "Looking for a Private Dentist in West Bridgford? Try Pear Tree Dental",
  description: "Modern tech, free parking, and caring experts – all minutes from NG2. Discover why West Bridgford patients are choosing Pear Tree Dental for their private dental care.",
  keywords: [
    "private dentist West Bridgford",
    "West Bridgford dental alternative",
    "modern dentist NG2",
    "private dental care West Bridgford",
    "dental practice near West Bridgford",
    "West Bridgford dentist",
    "private dentist NG2"
  ],
  openGraph: {
    title: "Looking for a Private Dentist in West Bridgford? Try Pear Tree Dental",
    description: "Modern tech, free parking, and caring experts – all minutes from NG2.",
    url: "https://peartree.dental/alternatives/west-bridgford"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/west-bridgford"
  }
};

export default function PrivateDentistWestBridgfordOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to older dental practices in West Bridgford?",
      answer: "Many patients seek newer private dentists offering flexible hours, digital tech, and easier parking. Pear Tree Dental delivers these benefits while keeping care personal and comprehensive."
    },
    {
      question: "Why are West Bridgford patients switching to practices outside the city centre?",
      answer: "Parking difficulties, outdated equipment, and limited appointment times drive patients to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and same-day appointments."
    },
    {
      question: "How do modern private dentists compare to traditional West Bridgford practices?",
      answer: "Modern practices typically offer digital X-rays, CEREC same-day crowns, transparent pricing, and better parking. The investment in technology and patient experience often provides better value."
    },
    {
      question: "Is it worth traveling slightly further for a better dental experience?",
      answer: "Many West Bridgford patients find that an 8-10 minute drive to a modern practice with free parking actually saves time compared to struggling with city centre parking and longer waiting times."
    },
    {
      question: "What should West Bridgford patients look for in a private dentist?",
      answer: "Key factors include convenient parking, modern equipment, transparent pricing, flexible appointments, and a focus on preventive care. Pear Tree Dental specifically addresses these patient priorities."
    }
  ];

  const whyPatientsSwitch = [
    {
      reason: "Parking Problems",
      oldExperience: "Circling for parking, paying high fees, being late for appointments",
      newSolution: "Free parking directly outside practice - stress-free arrival",
      impact: "Transforms the entire visit experience from stressful to relaxing",
      icon: Car
    },
    {
      reason: "Outdated Technology",
      oldExperience: "Film X-rays, messy impressions, waiting weeks for crowns",
      newSolution: "Digital X-rays, CEREC same-day crowns, intraoral cameras",
      impact: "Better diagnostics, faster treatment, more comfortable experience",
      icon: Zap
    },
    {
      reason: "Hidden Costs",
      oldExperience: "Surprise charges, unclear pricing, budget uncertainty",
      newSolution: "Transparent pricing, detailed estimates, no hidden fees",
      impact: "Financial confidence and trust in treatment recommendations",
      icon: DollarSign
    },
    {
      reason: "Limited Availability",
      oldExperience: "Long waits for appointments, no emergency slots, rigid scheduling",
      newSolution: "Same-day emergency care, flexible hours, efficient scheduling",
      impact: "Better fits work schedules and urgent dental needs",
      icon: Calendar
    },
    {
      reason: "Impersonal Service",
      oldExperience: "Rushed appointments, seeing different staff, feeling like a number",
      newSolution: "Personal attention, consistent team, time for questions",
      impact: "Builds trust and comfort with dental care",
      icon: Heart
    },
    {
      reason: "Reactive Approach",
      oldExperience: "Only treating problems when they become painful or urgent",
      newSolution: "Preventive care, early intervention, comprehensive planning",
      impact: "Better long-term oral health and fewer emergency situations",
      icon: Shield
    }
  ];

  const modernAdvantages = [
    {
      advantage: "CEREC Same-Day Crowns",
      description: "Complete crown treatment in one visit instead of multiple appointments",
      traditionalAlternative: "Temporary crowns and weeks of waiting",
      patientBenefit: "Save time, avoid temporary crown discomfort, immediate results",
      technology: "Latest CEREC CAD/CAM technology for precision fitting"
    },
    {
      advantage: "Digital X-Ray Technology",
      description: "Instant, high-quality images with 90% less radiation exposure",
      traditionalAlternative: "Film X-rays with chemical processing and higher radiation",
      patientBenefit: "Safer, faster, and images can be enhanced for better diagnosis",
      technology: "State-of-the-art digital sensors and imaging software"
    },
    {
      advantage: "Intraoral Cameras",
      description: "See exactly what the dentist sees with detailed close-up images",
      traditionalAlternative: "Verbal descriptions and hand mirrors",
      patientBenefit: "Better understanding of treatments and oral health status",
      technology: "High-definition cameras for patient education and documentation"
    },
    {
      advantage: "Transparent Pricing System",
      description: "Clear pricing guides and detailed treatment estimates upfront",
      traditionalAlternative: "Quotes only after examination with potential surprises",
      patientBenefit: "Budget with confidence and understand value of treatments",
      technology: "Digital treatment planning and cost estimation systems"
    },
    {
      advantage: "Online Booking Platform",
      description: "Book, reschedule, and manage appointments 24/7 online",
      traditionalAlternative: "Phone-only booking during business hours",
      patientBenefit: "Convenient scheduling that fits your busy lifestyle",
      technology: "Integrated practice management and patient portal systems"
    },
    {
      advantage: "Comprehensive Care Planning",
      description: "Detailed treatment plans addressing current and future needs",
      traditionalAlternative: "Addressing only immediate problems as they arise",
      patientBenefit: "Proactive care that prevents problems and saves money long-term",
      technology: "Digital charting and comprehensive examination protocols"
    }
  ];

  const patientJourneyComparison = [
    {
      stage: "Before Your Visit",
      traditional: "Call during business hours, limited booking options",
      modern: "Online booking 24/7, email confirmations, digital forms",
      peartree: "Book online anytime, comprehensive new patient information sent digitally"
    },
    {
      stage: "Arrival Experience",
      traditional: "Search for parking, potentially late, stressed start",
      modern: "Designated parking, relaxed arrival",
      peartree: "Free parking directly outside, immediate stress-free arrival"
    },
    {
      stage: "Check-In Process",
      traditional: "Paper forms, waiting room delays, outdated magazines",
      modern: "Digital check-in, comfortable environment",
      peartree: "Spa-like reception area, digital processes, calming atmosphere"
    },
    {
      stage: "Clinical Examination",
      traditional: "Basic examination, film X-rays if needed",
      modern: "Comprehensive digital examination with instant results",
      peartree: "Full digital examination with intraoral camera, instant digital X-rays"
    },
    {
      stage: "Treatment Discussion",
      traditional: "Verbal explanation, hand-drawn diagrams",
      modern: "Visual presentation of findings and options",
      peartree: "Detailed visual explanation using your own images, clear treatment options"
    },
    {
      stage: "Treatment Planning",
      traditional: "Basic treatment plan, cost estimates after",
      modern: "Comprehensive planning with upfront pricing",
      peartree: "Detailed written plan with transparent pricing and payment options"
    },
    {
      stage: "Treatment Delivery",
      traditional: "Multiple visits for complex treatments",
      modern: "Efficient treatment with modern technology",
      peartree: "CEREC same-day crowns, minimal visits, maximum comfort"
    },
    {
      stage: "Follow-Up Care",
      traditional: "Basic follow-up when problems arise",
      modern: "Proactive follow-up and preventive planning",
      peartree: "Comprehensive aftercare with preventive focus and easy contact"
    }
  ];

  const locationBenefits = [
    {
      benefit: "Strategic Location",
      description: "Just 8 minutes from West Bridgford with excellent transport links",
      advantage: "Avoid city centre traffic and parking issues",
      details: "Quick A52/A612 route with clear signage"
    },
    {
      benefit: "Free Parking",
      description: "Dedicated parking spaces directly outside the practice",
      advantage: "No parking fees or time limits - stress-free visits",
      details: "Safe, well-lit parking with easy access to practice"
    },
    {
      benefit: "Modern Facilities",
      description: "Purpose-built practice with latest dental technology",
      advantage: "Superior treatment outcomes and patient comfort",
      details: "Spa-like environment designed for relaxation and efficiency"
    },
    {
      benefit: "Flexible Scheduling",
      description: "Extended hours and same-day emergency appointments",
      advantage: "Better accommodation of work and family schedules",
      details: "Early morning and evening slots available"
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
                "name": "What are the alternatives to older dental practices in West Bridgford?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many patients seek newer private dentists offering flexible hours, digital tech, and easier parking. Pear Tree Dental delivers these benefits while keeping care personal and comprehensive."
                }
              },
              {
                "@type": "Question",
                "name": "Why are West Bridgford patients switching to practices outside the city centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parking difficulties, outdated equipment, and limited appointment times drive patients to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and same-day appointments."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Modern Alternative for West Bridgford
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Private Dentist</span> in West Bridgford?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Modern Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Modern tech, free parking, and caring experts – all minutes from NG2
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Modern Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🚗 Just 8 minutes from West Bridgford with free parking!</p>
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
                Why West Bridgford Patients Are Switching to Modern Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Traditional dental practices have served West Bridgford well, but modern alternatives
                offer significant advantages that improve the entire dental experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPatientsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-green-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Old Experience:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Modern Solution:</h4>
                          <p className="text-sm text-green-700">{reason.newSolution}</p>
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
                Modern Dental Technology: The Pear Tree Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology doesn't just make treatment more comfortable –
                it delivers better results and saves you time.
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

                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Patient Benefit:</h4>
                          <p className="text-sm text-green-700">{advantage.patientBenefit}</p>
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
                Your Patient Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that modern dental care makes at every step of your visit.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Visit Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Experience</div>
              </div>

              {patientJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-green-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Difference:</strong> Every step designed around your comfort,
                convenience, and optimal treatment outcomes.
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
                Perfect Location for West Bridgford Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sometimes the best choice is just outside the city centre –
                easier to reach, easier to park, and much more relaxing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {locationBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Building2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-green-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Advantage:</h4>
                          <p className="text-sm text-green-700">{benefit.advantage}</p>
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
                Why West Bridgford Patients Choose the Modern Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="I'd been with my old dentist in West Bridgford for years, but the parking was becoming impossible and they still hadn't upgraded their equipment. When I tried Pear Tree, it was like stepping into the future – everything digital, free parking right outside, and they did my crown in one visit with their CEREC machine. It's only a few minutes further but such a better experience that I'll never go back to fighting for parking in the city centre."
              author="Michael P. from West Bridgford, NG2"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Digital everything</div>
                <p className="text-gray-600">Modern technology throughout</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Free parking</div>
                <p className="text-gray-600">Never fight for spaces again</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">One visit crowns</div>
                <p className="text-gray-600">CEREC same-day technology</p>
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
              Modern Dental Care Results for West Bridgford Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that modern technology and expert care make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp"
              afterImage="/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp"
              beforeAlt="Before modern dental treatment - older style dental work"
              afterAlt="After modern dental treatment - natural-looking, precision results"
              title="Modern Dental Excellence"
              description="West Bridgford patient's transformation with modern techniques"
              treatmentType="CEREC Crown and Digital Smile Design"
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
                Questions About Modern Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from West Bridgford patients considering their options
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
              Easy Journey from West Bridgford to Modern Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 8-Minute Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head north on A52 from West Bridgford</p>
                    <p>2. Continue onto A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-700 mb-2">Stress-Free Arrival</h4>
                    <p className="text-gray-600">No parking hassles or time limits</p>
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
      <section className="py-20 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Modern Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what West Bridgford patients are discovering –
              better technology, easier parking, and superior care just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Modern Alternative to Traditional Dental Care
              </p>
              <p className="text-sm opacity-90">
                CEREC technology • Free parking • Same-day appointments • 8 minutes from NG2
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Modern Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free parking directly outside</span>
              <span>✓ Latest dental technology</span>
              <span>✓ Same-day emergency care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
