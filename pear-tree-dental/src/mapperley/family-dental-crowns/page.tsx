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
  Target,
  Timer,
  Crown,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Crowns in Mapperley - Quality Restorations for Working Families | Pear Tree Dental",
  description: "Dental crowns for Mapperley working families. Quality restorations, honest pricing, and flexible payment options. Same-day CEREC crowns available. Quick drive from Mapperley NG3.",
  keywords: [
    "dental crowns Mapperley",
    "tooth crowns Mapperley NG3",
    "quality dental crowns Mapperley",
    "affordable crowns Mapperley",
    "same day crowns Mapperley",
    "CEREC crowns Mapperley",
    "working families dentist Mapperley"
  ],
  openGraph: {
    title: "Dental Crowns in Mapperley - Quality Restorations for Working Families | Pear Tree Dental",
    description: "Dental crowns for Mapperley working families. Quality restorations with honest pricing and flexible payment options.",
    url: "https://peartree.dental/mapperley/dental-crowns"
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/dental-crowns"
  }
};

export default function MapperleyDentalCrownsPage() {
  const mapperleyCrownsFAQs = [
    {
      question: "How affordable are quality dental crowns from Mapperley?",
      answer: "We believe quality dental crowns should be accessible to Mapperley working families. Our crowns start from £450 with payment plan options available. We provide honest pricing upfront and use quality materials that offer excellent value for money."
    },
    {
      question: "What's the difference between your crown options?",
      answer: "We offer metal-free porcelain crowns (£450-£650) and premium all-ceramic crowns (£750-£950). Both provide excellent function and appearance. We explain the differences honestly so Mapperley families can choose what fits their needs and budget best."
    },
    {
      question: "Can you fit crown appointments around work schedules?",
      answer: "Absolutely! We understand working families in Mapperley have busy schedules. We offer early morning and evening appointments, and our same-day CEREC crowns can often be completed in one visit, minimizing time off work."
    },
    {
      question: "How long do dental crowns last?",
      answer: "Quality dental crowns typically last 10-15 years with proper care. We provide detailed aftercare instructions and regular check-ups to ensure your investment lasts. Our crowns come with warranties for added peace of mind."
    },
    {
      question: "Do you offer payment plans for crown treatment?",
      answer: "Yes! We understand crown treatment is an investment for working families. We offer flexible payment plans to spread costs over 6-12 months with 0% interest options available, making quality restoration affordable."
    }
  ];

  const crownOptions = [
    {
      option: "Porcelain Crowns",
      description: "High-quality metal-free crowns with natural appearance",
      materials: "Premium porcelain bonded to tooth-colored base",
      durability: "10-15 years typical lifespan",
      pricing: "From £450",
      benefits: "Natural look, proven durability, good value",
      icon: Crown
    },
    {
      option: "All-Ceramic Crowns",
      description: "Premium crowns with superior aesthetics",
      materials: "High-strength ceramic with translucent qualities",
      durability: "12-20 years typical lifespan",
      pricing: "From £750",
      benefits: "Outstanding appearance, biocompatible",
      icon: Award
    },
    {
      option: "Same-Day CEREC Crowns",
      description: "Computer-designed crowns completed in one visit",
      materials: "High-quality ceramic created in-house",
      durability: "10-15 years typical lifespan",
      pricing: "From £650",
      benefits: "Convenient, no temporary crown needed",
      icon: Zap
    },
    {
      option: "NHS Crowns",
      description: "Functional crowns available under NHS Band 3",
      materials: "Metal-based crown with white facing",
      durability: "8-12 years typical lifespan",
      pricing: "NHS Band 3: £319.10",
      benefits: "Most affordable option, functional",
      icon: Shield
    }
  ];

  const qualityBenefits = [
    {
      benefit: "Quality Materials",
      description: "Premium porcelain and ceramic materials for lasting results",
      value: "Excellent durability",
      icon: Award
    },
    {
      benefit: "Honest Pricing",
      description: "Transparent costs with no hidden fees or surprise charges",
      value: "Budget-friendly confidence",
      icon: DollarSign
    },
    {
      benefit: "Same-Day Options",
      description: "CEREC technology for crowns completed in one visit",
      value: "Time-saving convenience",
      icon: Zap
    },
    {
      benefit: "Flexible Payment Plans",
      description: "Spread costs over 6-12 months to fit working family budgets",
      value: "Manageable payments",
      icon: CreditCard
    }
  ];

  const crownScenarios = [
    {
      scenario: "Large Filling Replacement",
      indication: "When a filling becomes too large to be reliable",
      crownSolution: "Crown provides complete tooth protection and strength",
      timelineExpectation: "Usually completed in 2 visits or same-day with CEREC",
      workingFamilyBenefit: "Prevents emergency breakdown requiring urgent time off work"
    },
    {
      scenario: "Cracked or Broken Tooth",
      indication: "Tooth has significant crack or break affecting function",
      crownSolution: "Crown restores full strength and protects from further damage",
      timelineExpectation: "Often treated as priority to prevent pain",
      workingFamilyBenefit: "Quick resolution prevents ongoing discomfort affecting work"
    },
    {
      scenario: "After Root Canal Treatment",
      indication: "Root-treated teeth become brittle and need protection",
      crownSolution: "Crown provides essential protection and natural appearance",
      timelineExpectation: "Typically done 2-3 weeks after root canal completion",
      workingFamilyBenefit: "Protects investment in root canal treatment"
    },
    {
      scenario: "Tooth Wear or Grinding Damage",
      indication: "Teeth worn down from grinding or acid erosion",
      crownSolution: "Crowns restore proper height and protect from further wear",
      timelineExpectation: "Can treat multiple teeth with coordinated plan",
      workingFamilyBenefit: "Prevents progressive damage and future costly treatment"
    }
  ];

  const valueStrategies = [
    {
      strategy: "Material Selection Guidance",
      approach: "Honest advice about which crown material offers best value",
      benefit: "Choose option that fits needs and budget without overpaying",
      savings: "Avoid paying for premium features you don't need"
    },
    {
      strategy: "Treatment Timing Optimization",
      approach: "Plan crown treatment at optimal time to prevent emergencies",
      benefit: "Avoid urgent treatment costs and work disruption",
      savings: "Planned treatment often 20-30% less than emergency alternatives"
    },
    {
      strategy: "Same-Day Crown Efficiency",
      approach: "CEREC technology eliminates need for multiple visits",
      benefit: "Complete treatment in one appointment, minimal work disruption",
      savings: "Save time and travel costs with single-visit treatment"
    },
    {
      strategy: "Multiple Crown Planning",
      approach: "Coordinate multiple crown treatments for efficiency",
      benefit: "Better treatment outcomes with coordinated approach",
      savings: "Reduced per-crown costs and fewer total appointments"
    },
    {
      strategy: "Payment Plan Utilization",
      approach: "Spread crown costs over 6-12 months with 0% interest",
      benefit: "Get quality treatment now, pay over time",
      savings: "Avoid delaying treatment which can lead to more expensive problems"
    },
    {
      strategy: "NHS vs Private Comparison",
      approach: "Transparent comparison of NHS and private crown options",
      benefit: "Make informed choice based on value and appearance needs",
      savings: "Choose option that provides best long-term value for your situation"
    }
  ];

  const crownMaterials = [
    {
      material: "High-Grade Porcelain",
      characteristics: "Natural tooth-like appearance with good strength",
      advantages: "Proven track record, excellent aesthetics, good value",
      ideal: "Most teeth, especially visible areas",
      warranty: "5-year manufacturer warranty included"
    },
    {
      material: "All-Ceramic (Zirconia)",
      characteristics: "Superior strength and translucency",
      advantages: "Outstanding appearance, biocompatible, very durable",
      ideal: "Front teeth requiring premium aesthetics",
      warranty: "7-year manufacturer warranty included"
    },
    {
      material: "CEREC Ceramic",
      characteristics: "Computer-milled ceramic for same-day treatment",
      advantages: "Convenient, precise fit, no temporary crown needed",
      ideal: "Busy professionals wanting minimal appointments",
      warranty: "5-year manufacturer warranty included"
    },
    {
      material: "NHS Metal-Ceramic",
      characteristics: "Metal base with white ceramic facing",
      advantages: "Functional, regulated NHS pricing, proven durability",
      ideal: "Back teeth where appearance is less critical",
      warranty: "12-month NHS warranty"
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
            "name": "Pear Tree Dental - Dental Crowns in Mapperley",
            "image": "https://peartree.dental/images/dental-crowns-mapperley.jpg",
            "url": "https://peartree.dental/mapperley/dental-crowns",
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
              "name": "Mapperley, NG3"
            },
            "medicalSpecialty": "Restorative Dentistry - Quality Dental Crowns",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£319-£950"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-amber-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dental Crowns in <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Quality Restorations for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Mapperley — Quality crowns from £450 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Book Crown Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">👑 Quality dental crowns with honest pricing for Mapperley families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Quality Dental Crowns for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Mapperley working families need dental crowns that offer excellent quality
                and value. Our honest pricing and flexible payment options make quality restorations achievable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {qualityBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-amber-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-amber-100 text-amber-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-amber-50 rounded-lg p-8">
              <Crown className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Quality Crowns with Honest Value</h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe Mapperley working families deserve quality dental crowns that provide excellent
                value for money. Our transparent approach helps you choose the best option for your needs and budget.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">From £450</div>
                  <p className="text-gray-600">Quality porcelain crowns</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">Same-day option</div>
                  <p className="text-gray-600">CEREC technology available</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Mapperley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crown Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Quality Crown Options for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of quality crown treatments designed to provide
                excellent value and results for working family budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {crownOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-amber-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.option}</CardTitle>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.pricing}</p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{option.durability}</Badge>
                        </div>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-3">
                        <p className="text-sm text-amber-700 font-medium">{option.benefits}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Crown Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                When Mapperley Working Families Need Dental Crowns
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding when crowns are needed helps working families plan
                treatment and avoid emergency situations that disrupt busy schedules.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {crownScenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{scenario.scenario}</h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-amber-600 text-sm mb-1">When Needed:</h4>
                        <p className="text-sm text-gray-700">{scenario.indication}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-amber-600 text-sm mb-1">Crown Solution:</h4>
                        <p className="text-sm text-gray-700">{scenario.crownSolution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-amber-600 text-sm mb-1">Timeline:</h4>
                        <p className="text-sm text-gray-700">{scenario.timelineExpectation}</p>
                      </div>

                      <div className="bg-amber-50 rounded-lg p-3">
                        <h4 className="font-semibold text-amber-700 text-sm mb-1">Working Family Benefit:</h4>
                        <p className="text-sm text-amber-700">{scenario.workingFamilyBenefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crown Materials */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Quality Crown Materials for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use only quality materials that provide excellent value and longevity,
                with honest guidance about which option best suits your needs and budget.
              </p>
            </div>

            <div className="space-y-6">
              {crownMaterials.map((material, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2">{material.material}</h3>
                        <p className="text-gray-600 text-sm">{material.characteristics}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-amber-600 text-sm mb-2">Key Advantages:</h4>
                        <p className="text-sm text-gray-700">{material.advantages}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-amber-600 text-sm mb-2">Ideal For:</h4>
                        <p className="text-sm text-gray-700">{material.ideal}</p>
                      </div>

                      <div>
                        <div className="bg-amber-50 rounded-lg p-3">
                          <h4 className="font-semibold text-amber-700 text-sm mb-1">Warranty:</h4>
                          <p className="text-sm text-amber-700">{material.warranty}</p>
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

      {/* Value Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Value Strategies for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smart approaches to getting quality crown treatment that provides
                excellent value for working family budgets and schedules.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{strategy.strategy}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-amber-600 text-sm mb-1">Approach:</h4>
                            <p className="text-sm text-gray-700">{strategy.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-amber-600 text-sm mb-1">Benefit:</h4>
                            <p className="text-sm text-gray-700">{strategy.benefit}</p>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-3">
                            <h4 className="font-semibold text-amber-700 text-sm mb-1">Value:</h4>
                            <p className="text-sm text-amber-700">{strategy.savings}</p>
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
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Mapperley Families Say About Our Quality Crown Treatment
              </h2>
            </div>

            <TestimonialBanner
              text="I needed a crown on my back tooth and was worried about the cost and time off work. Being just a quick drive from Mapperley made it convenient to visit. They explained all the options honestly - I chose the porcelain crown at £495 with a payment plan. The same-day CEREC option meant I got it done in one visit during my lunch break! The crown looks and feels perfect, and I love that they were upfront about costs. No surprises, just quality treatment that fits a working family budget."
              author="Mark H. from Mapperley, NG3"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">£495 crown</div>
                <p className="text-gray-600">Quality porcelain with payment plan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">One visit</div>
                <p className="text-gray-600">Same-day CEREC convenience</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">Perfect fit</div>
                <p className="text-gray-600">Looks and feels natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Quality Crown Results for Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the excellent quality and natural appearance achieved with our crown treatments
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/dental-crowns-before-case-1.webp"
              afterImage="/images/dental-crowns-after-case-1.webp"
              beforeAlt="Before crown treatment - damaged, unsightly tooth affecting confidence"
              afterAlt="After crown treatment - natural-looking, strong crown restoring function and appearance"
              title="Quality Crown Restoration Success"
              description="Mapperley working professional's crown transformation"
              treatmentType="Premium Porcelain Crown"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Crown Treatment Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley working families about quality dental crown treatment
              </p>
            </div>

            <FAQSection faqs={mapperleyCrownsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Quality Dental Crowns - Quick Drive from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Mapperley
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
                  <div className="bg-amber-50 rounded-lg p-6">
                    <Crown className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h4 className="font-bold text-amber-700 mb-2">Quality Dental Crowns</h4>
                    <p className="text-gray-600">Honest pricing with payment plans</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Mapperley,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Get Quality Dental Crowns That Fit Your Budget from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let cost concerns delay essential crown treatment. Book quality dental crowns
              with honest pricing and payment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Quality Crown Specialists
              </p>
              <p className="text-sm opacity-90">
                Premium materials • Honest pricing • Payment plans available • Quick drive from Mapperley
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Book Crown Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Quality crowns from £450</span>
              <span>✓ Same-day CEREC option available</span>
              <span>✓ Flexible payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
