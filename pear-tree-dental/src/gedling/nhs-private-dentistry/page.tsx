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
  DollarSign,
  Zap,
  Target,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "NHS & Private Dentistry in Gedling - Flexible Options for Working Families | Pear Tree Dental",
  description: "NHS & Private dentistry for Gedling working families. Flexible treatment options, mixed care available, and honest advice about best value options. Quick drive from Gedling NG4.",
  keywords: [
    "NHS dentist Gedling",
    "private dentist Gedling NG4",
    "mixed NHS private dentistry Gedling",
    "flexible dental options Gedling",
    "working families dentist Gedling",
    "affordable dental care Gedling",
    "NHS private comparison Gedling"
  ],
  openGraph: {
    title: "NHS & Private Dentistry in Gedling - Flexible Options for Working Families | Pear Tree Dental",
    description: "NHS & Private dentistry for Gedling working families. Flexible treatment options and honest advice about best value.",
    url: "https://peartree.dental/gedling/nhs-private-dentistry"
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/nhs-private-dentistry"
  }
};

export default function GedlingNHSPrivateDentistryPage() {
  const gedlingNHSPrivateFAQs = [
    {
      question: "How convenient is mixed NHS and private care from Gedling?",
      answer: "Pear Tree Dental is just a quick drive from Gedling, making it easy for working families to access both NHS and private dental care. We offer honest advice about which option provides the best value for each treatment, helping you make informed decisions."
    },
    {
      question: "Can I mix NHS and private treatments for my family?",
      answer: "Yes! Many Gedling working families choose mixed care - using NHS for basic treatments and private for enhanced options. We provide clear guidance on what's available under each system and help you choose the most cost-effective combination."
    },
    {
      question: "What's the difference between NHS and private dental care?",
      answer: "NHS provides essential care with regulated pricing, while private offers enhanced materials, extended warranties, and more appointment flexibility. We explain both options honestly so Gedling families can choose what works best for their needs and budget."
    },
    {
      question: "How do you help families choose between NHS and private options?",
      answer: "We provide transparent comparisons showing treatment options, materials, warranties, and costs for both NHS and private. Our honest advice helps Gedling working families make the best choice for their situation without any pressure."
    },
    {
      question: "Are there payment options for private treatments?",
      answer: "Yes! We offer flexible payment plans for private treatments, making enhanced care more accessible to working families. Combined with selective use of NHS options, this helps create affordable comprehensive care."
    }
  ];

  const treatmentOptions = [
    {
      treatment: "Basic Fillings",
      nhsOption: "Amalgam fillings - functional, durable",
      privateOption: "White composite - aesthetic, mercury-free",
      nhsPrice: "NHS Band 2: £73.50",
      privatePrice: "From £120",
      recommendation: "NHS for back teeth, private for visible teeth",
      icon: Shield
    },
    {
      treatment: "Dental Crowns",
      nhsOption: "Metal-based crown - functional restoration",
      privateOption: "All-ceramic crown - natural appearance",
      nhsPrice: "NHS Band 3: £319.10",
      privatePrice: "From £450",
      recommendation: "Private often better value for front teeth",
      icon: Award
    },
    {
      treatment: "Teeth Cleaning",
      nhsOption: "Basic scale and polish",
      privateOption: "Comprehensive hygiene with airflow",
      nhsPrice: "NHS Band 1: £25.80",
      privatePrice: "From £65",
      recommendation: "Mix options based on individual needs",
      icon: Activity
    },
    {
      treatment: "Tooth Extraction",
      nhsOption: "Standard extraction procedure",
      privateOption: "Enhanced comfort and healing options",
      nhsPrice: "NHS Band 2: £73.50",
      privatePrice: "From £120",
      recommendation: "NHS adequate for most simple extractions",
      icon: Target
    }
  ];

  const flexibilityBenefits = [
    {
      benefit: "Choice & Flexibility",
      description: "Select NHS or private options for each treatment based on value",
      value: "Best of both systems",
      icon: Scale
    },
    {
      benefit: "Honest Professional Advice",
      description: "Transparent guidance on which option offers best value",
      value: "Informed decisions",
      icon: ThumbsUp
    },
    {
      benefit: "Budget-Friendly Solutions",
      description: "Mix options to create affordable comprehensive care",
      value: "Cost-effective treatment",
      icon: DollarSign
    },
    {
      benefit: "Working Family Convenience",
      description: "Flexible scheduling for both NHS and private appointments",
      value: "Time-saving efficiency",
      icon: Clock
    }
  ];

  const nhsPrivateComparison = [
    {
      aspect: "Cost Structure",
      nhs: "Fixed band pricing (£25.80, £73.50, £319.10)",
      private: "Individual treatment pricing with options",
      guidance: "NHS offers predictable costs, private offers value flexibility"
    },
    {
      aspect: "Material Quality",
      nhs: "Functional materials, limited aesthetic options",
      private: "Premium materials with enhanced aesthetics",
      guidance: "Choose based on tooth location and personal priorities"
    },
    {
      aspect: "Treatment Time",
      nhs: "Standard appointment lengths",
      private: "Extended appointments for complex work",
      guidance: "Private better for extensive treatments requiring more time"
    },
    {
      aspect: "Warranty Coverage",
      nhs: "12-month NHS warranty on most treatments",
      private: "Extended warranties up to 5 years available",
      guidance: "Consider long-term value when comparing options"
    },
    {
      aspect: "Appointment Availability",
      nhs: "Limited availability, longer waiting times",
      private: "Flexible scheduling, shorter waiting times",
      guidance: "Private better for urgent non-emergency needs"
    }
  ];

  const smartChoiceStrategies = [
    {
      strategy: "Basic Preventive Care",
      approach: "Use NHS for routine check-ups and basic cleaning",
      reasoning: "NHS provides excellent value for essential preventive services",
      savingsOpportunity: "Significant cost savings on regular maintenance"
    },
    {
      strategy: "Aesthetic Treatments",
      approach: "Choose private for visible tooth restorations",
      reasoning: "Better materials and appearance justify additional cost",
      savingsOpportunity: "Long-term value through enhanced durability and appearance"
    },
    {
      strategy: "Emergency Care",
      approach: "Start with NHS assessment, upgrade to private if needed",
      reasoning: "NHS covers urgent care, private adds comfort options",
      savingsOpportunity: "Pay only for enhanced services you actually want"
    },
    {
      strategy: "Complex Restorations",
      approach: "Compare NHS vs private value carefully for major work",
      reasoning: "Price difference may be smaller than expected for extensive treatment",
      savingsOpportunity: "Sometimes private offers better value for complex cases"
    },
    {
      strategy: "Family Planning",
      approach: "Mix NHS and private across family members based on individual needs",
      reasoning: "Children often fine with NHS, adults may prefer private aesthetics",
      savingsOpportunity: "Optimize family dental budget across all members"
    },
    {
      strategy: "Payment Timing",
      approach: "Use NHS for immediate needs, plan private upgrades over time",
      reasoning: "Address urgent issues affordably, enhance as budget allows",
      savingsOpportunity: "Spread costs while maintaining oral health"
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
            "@type": "MedicalBusiness",
            "name": "Pear Tree Dental - NHS & Private Dentistry in Gedling",
            "image": "https://peartree.dental/images/nhs-private-dentistry-gedling.jpg",
            "url": "https://peartree.dental/gedling/nhs-private-dentistry",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gedling, NG4"
            },
            "medicalSpecialty": "General Dentistry - NHS & Private Care",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£25.80-£450"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              NHS & Private Dentistry in <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Flexible Options for Working Family Budgets
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Choose NHS, private, or mix both for best value
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Scale className="w-5 h-5 mr-2" />
                  Book Flexible Consultation
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
              <p className="text-lg font-semibold">⚖️ Honest advice on NHS vs private options for Gedling families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Flexible NHS & Private Dental Options for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Working families shouldn't have to choose between quality and affordability. Our flexible approach
                combines NHS and private options to create personalized dental care that fits your family's budget and needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {flexibilityBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-green-100 text-green-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-green-50 rounded-lg p-8">
              <Scale className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Best of Both NHS & Private Care</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Gedling working families want quality dental care that fits their budget.
                Our honest approach helps you choose the best value option for each treatment without any pressure.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Honest advice</div>
                  <p className="text-gray-600">No pressure, just facts</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Flexible options</div>
                  <p className="text-gray-600">Mix NHS and private as needed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Comparison */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                NHS vs Private Treatment Options for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding your options helps make informed decisions. Here's an honest comparison
                of common treatments available under NHS and private care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {treatmentOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <CardTitle className="text-xl text-pear-primary">{option.treatment}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">NHS Option:</h4>
                          <p className="text-sm text-gray-700 mb-2">{option.nhsOption}</p>
                          <Badge className="bg-blue-100 text-blue-700">{option.nhsPrice}</Badge>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <h4 className="font-semibold text-purple-700 text-sm mb-1">Private Option:</h4>
                          <p className="text-sm text-gray-700 mb-2">{option.privateOption}</p>
                          <Badge className="bg-purple-100 text-purple-700">{option.privatePrice}</Badge>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-700 text-sm mb-1">Our Recommendation:</h4>
                        <p className="text-sm text-green-700">{option.recommendation}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NHS vs Private Detailed Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Detailed NHS vs Private Comparison for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the key differences helps Gedling families make the best choice
                for their specific needs and budget considerations.
              </p>
            </div>

            <div className="space-y-6">
              {nhsPrivateComparison.map((comparison, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2">{comparison.aspect}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">NHS:</h4>
                          <p className="text-sm text-gray-700">{comparison.nhs}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <h4 className="font-semibold text-purple-700 text-sm mb-1">Private:</h4>
                          <p className="text-sm text-gray-700">{comparison.private}</p>
                        </div>
                      </div>

                      <div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Guidance:</h4>
                          <p className="text-sm text-green-700">{comparison.guidance}</p>
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

      {/* Smart Choice Strategies */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Smart Choice Strategies for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Practical strategies for mixing NHS and private care to get the best value
                and outcomes for your family's dental health needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smartChoiceStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{strategy.strategy}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Approach:</h4>
                            <p className="text-sm text-gray-700">{strategy.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Reasoning:</h4>
                            <p className="text-sm text-gray-700">{strategy.reasoning}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-semibold text-green-700 text-sm mb-1">Savings Opportunity:</h4>
                            <p className="text-sm text-green-700">{strategy.savingsOpportunity}</p>
                          </div>
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
                What Gedling Families Say About Our Flexible NHS & Private Options
              </h2>
            </div>

            <TestimonialBanner
              text="I was so confused about NHS vs private dental care until I found Pear Tree Dental. Being just a quick drive from Gedling made it easy to go for a consultation. They explained everything so clearly - no pressure, just honest advice about what would work best for our family budget. We ended up using NHS for the kids' basic care and going private for my front tooth crown. It saved us money overall while getting exactly what we needed. Their approach is perfect for working families like us!"
              author="David R. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Clear guidance</div>
                <p className="text-gray-600">No pressure, honest advice</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Mixed approach</div>
                <p className="text-gray-600">NHS + private combination</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Money saved</div>
                <p className="text-gray-600">Best value for family needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Flexible NHS & Private Care Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See how smart mixing of NHS and private options delivers excellent results for working families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/repair-restore-before.webp"
              afterImage="/images/before-after/repair-restore-after.webp"
              beforeAlt="Before flexible NHS & private care - dental issues affecting confidence and function"
              afterAlt="After flexible NHS & private care - healthy, attractive smile achieved cost-effectively"
              title="Smart NHS & Private Treatment Combination"
              description="Gedling working family's successful mixed treatment approach"
              treatmentType="Strategic NHS & Private Care Plan"
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
                NHS & Private Dental Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about choosing between NHS and private dental care
              </p>
            </div>

            <FAQSection faqs={gedlingNHSPrivateFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Flexible NHS & Private Dental Care - Quick Drive from Gedling
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Gedling
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head south on Arnold Lane towards the A612</p>
                    <p>2. Continue on the A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (8 miles)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Quick 15-minute drive</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <Scale className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-700 mb-2">Flexible Dental Options</h4>
                    <p className="text-gray-600">NHS & private care choices</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Gedling,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Gedling
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Get Honest Advice on NHS & Private Dental Options from Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't navigate NHS vs private choices alone. Get transparent guidance that helps your
              family make informed decisions about dental care that fits your needs and budget.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Flexible Dental Care Specialists
              </p>
              <p className="text-sm opacity-90">
                Honest advice • NHS & private options • Mixed care available • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Scale className="w-5 h-5 mr-2" />
                  Book Flexible Consultation
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
              <span>✓ NHS & private options available</span>
              <span>✓ Honest, pressure-free advice</span>
              <span>✓ Flexible payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
