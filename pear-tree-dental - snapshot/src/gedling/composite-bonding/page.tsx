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
  Smile,
  Target,
  Timer,
  Sparkles,
  DollarSign,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Composite Bonding in Gedling - Affordable Smile Improvements for Working Families | Pear Tree Dental",
  description: "Composite bonding for Gedling working families. Affordable smile improvements, same-day treatment, and flexible payment options. Quick drive from Gedling NG4.",
  keywords: [
    "composite bonding Gedling",
    "tooth bonding Gedling NG4",
    "affordable smile improvement Gedling",
    "cosmetic dentistry Gedling",
    "same day bonding Gedling",
    "working families cosmetic dentist Gedling",
    "budget smile makeover Gedling"
  ],
  openGraph: {
    title: "Composite Bonding in Gedling - Affordable Smile Improvements for Working Families | Pear Tree Dental",
    description: "Composite bonding for Gedling working families. Affordable smile improvements with same-day treatment and flexible payment options.",
    url: "https://peartree.dental/gedling/composite-bonding"
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/composite-bonding"
  }
};

export default function GedlingCompositeBondingPage() {
  const gedlingBondingFAQs = [
    {
      question: "How affordable is composite bonding from Gedling for working families?",
      answer: "Composite bonding is one of the most cost-effective cosmetic treatments available. Starting from £120 per tooth with payment plan options, it's accessible to Gedling working families. We provide transparent pricing and honest advice about what bonding can achieve for your smile."
    },
    {
      question: "Can composite bonding be completed in one visit?",
      answer: "Yes! Most composite bonding treatments can be completed in a single visit lasting 1-2 hours. This makes it perfect for busy working families from Gedling who want smile improvements without multiple appointments disrupting their schedule."
    },
    {
      question: "How long does composite bonding last?",
      answer: "With proper care, composite bonding typically lasts 5-8 years. We provide detailed aftercare instructions and can perform touch-ups if needed. The investment in bonding provides excellent value for improving your smile and confidence."
    },
    {
      question: "What smile problems can composite bonding fix?",
      answer: "Bonding can address chipped teeth, gaps between teeth, discoloration, slightly crooked teeth, and worn edges. We assess each case honestly and explain what bonding can achieve versus other treatments, helping Gedling families choose the best option."
    },
    {
      question: "Do you offer payment plans for composite bonding?",
      answer: "Yes! We understand working families need flexible payment options. We offer interest-free payment plans to spread bonding costs over 6-12 months, making smile improvements affordable for Gedling families on any budget."
    }
  ];

  const bondingOptions = [
    {
      option: "Single Tooth Bonding",
      description: "Repair chips, cracks, or discoloration on individual teeth",
      treatment: "One tooth composite restoration",
      duration: "30-45 minutes",
      pricing: "From £120",
      benefits: "Quick fix, natural appearance",
      icon: Target
    },
    {
      option: "Gap Closure Bonding",
      description: "Close small gaps between front teeth",
      treatment: "Multiple teeth shaped and bonded",
      duration: "1-2 hours",
      pricing: "From £200 per tooth",
      benefits: "Instant gap closure, conservative",
      icon: Smile
    },
    {
      option: "Edge Bonding",
      description: "Repair worn or chipped tooth edges",
      treatment: "Rebuild tooth edges with composite",
      duration: "1-1.5 hours",
      pricing: "From £150 per tooth",
      benefits: "Restore tooth length, improved function",
      icon: Award
    },
    {
      option: "Smile Improvement Package",
      description: "Multiple teeth bonding for smile transformation",
      treatment: "4-6 front teeth comprehensive bonding",
      duration: "2-3 hours",
      pricing: "From £600 (package discount)",
      benefits: "Complete smile makeover, best value",
      icon: Sparkles
    }
  ];

  const affordableBenefits = [
    {
      benefit: "Budget-Friendly Treatment",
      description: "Most affordable cosmetic dental treatment for smile improvement",
      value: "Excellent cost-effectiveness",
      icon: DollarSign
    },
    {
      benefit: "Same-Day Results",
      description: "Complete treatment in one visit with immediate transformation",
      value: "Instant satisfaction",
      icon: Zap
    },
    {
      benefit: "Conservative Approach",
      description: "Minimal tooth preparation required, preserves natural teeth",
      value: "Tooth-preserving treatment",
      icon: Shield
    },
    {
      benefit: "Flexible Payment Plans",
      description: "Spread costs over 6-12 months with 0% interest options",
      value: "Manageable payments",
      icon: CreditCard
    }
  ];

  const bondingApplications = [
    {
      issue: "Chipped Front Tooth",
      bondingSolution: "Composite carefully matched and sculpted to restore tooth shape",
      appearance: "Natural-looking repair that blends seamlessly",
      durability: "5-8 years with proper care",
      workingFamilyBenefit: "Quick fix prevents embarrassment at work and social situations"
    },
    {
      issue: "Gap Between Front Teeth",
      bondingSolution: "Composite added to adjacent teeth to close gap completely",
      appearance: "Smooth, natural tooth contours without orthodontic treatment",
      durability: "Long-lasting solution with touch-up options",
      workingFamilyBenefit: "Instant confidence boost without years of braces"
    },
    {
      issue: "Discolored Tooth",
      bondingSolution: "Composite overlay in ideal shade covers discoloration",
      appearance: "Matches surrounding teeth perfectly for uniform smile",
      durability: "Stain-resistant composite maintains appearance",
      workingFamilyBenefit: "Professional appearance improvement in single visit"
    },
    {
      issue: "Worn Tooth Edges",
      bondingSolution: "Composite rebuilds worn edges to restore natural tooth length",
      appearance: "Youthful tooth proportions and improved smile line",
      durability: "Protects teeth from further wear",
      workingFamilyBenefit: "Reverses aging effects for more confident professional image"
    }
  ];

  const valueComparison = [
    {
      aspect: "Treatment Cost",
      compositeBonding: "£120-£200 per tooth",
      veneers: "£600-£1,200 per tooth",
      orthodontics: "£2,000-£5,000 full treatment",
      winner: "Composite Bonding"
    },
    {
      aspect: "Treatment Time",
      compositeBonding: "1-2 hours, same day",
      veneers: "2-3 visits over 2-3 weeks",
      orthodontics: "18-24 months treatment",
      winner: "Composite Bonding"
    },
    {
      aspect: "Tooth Preservation",
      compositeBonding: "Minimal tooth removal",
      veneers: "Significant tooth preparation",
      orthodontics: "No tooth removal",
      winner: "Orthodontics"
    },
    {
      aspect: "Durability",
      compositeBonding: "5-8 years typical",
      veneers: "10-15 years typical",
      orthodontics: "Lifetime with retention",
      winner: "Orthodontics"
    },
    {
      aspect: "Immediate Results",
      compositeBonding: "Instant transformation",
      veneers: "Results in 2-3 weeks",
      orthodontics: "Gradual over months",
      winner: "Composite Bonding"
    },
    {
      aspect: "Working Family Suitability",
      compositeBonding: "Perfect - quick, affordable",
      veneers: "Good but more expensive",
      orthodontics: "Challenging due to time/cost",
      winner: "Composite Bonding"
    }
  ];

  const affordabilityStrategies = [
    {
      strategy: "Payment Plan Utilization",
      approach: "Spread bonding costs over 6-12 months with 0% interest",
      benefit: "Get smile improvements now, pay over time",
      savings: "Monthly payments from £25-50 instead of large upfront cost"
    },
    {
      strategy: "Targeted Treatment Approach",
      approach: "Focus bonding on most visible teeth for maximum impact",
      benefit: "Achieve significant smile improvement with minimal cost",
      savings: "Treat 2-3 key teeth instead of full smile for dramatic results"
    },
    {
      strategy: "Package Discount Pricing",
      approach: "Multiple teeth bonding packages offer better per-tooth value",
      benefit: "More comprehensive results at lower per-tooth cost",
      savings: "Save 15-20% compared to individual tooth pricing"
    },
    {
      strategy: "Early Intervention Value",
      approach: "Address chips and wear before they become bigger problems",
      benefit: "Prevent need for more expensive treatments later",
      savings: "Bonding now can prevent need for crowns or veneers worth thousands"
    },
    {
      strategy: "Conservative Treatment Choice",
      approach: "Choose bonding over more expensive alternatives when appropriate",
      benefit: "Achieve similar aesthetic results at fraction of veneer cost",
      savings: "Bonding often achieves 80% of veneer results at 20% of cost"
    },
    {
      strategy: "Maintenance Investment",
      approach: "Follow aftercare guidance to maximize bonding lifespan",
      benefit: "Protect investment with proper care and regular check-ups",
      savings: "Good care extends lifespan, reducing need for early replacement"
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
            "name": "Pear Tree Dental - Composite Bonding in Gedling",
            "image": "https://peartree.dental/images/composite-bonding-gedling.jpg",
            "url": "https://peartree.dental/gedling/composite-bonding",
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
            "medicalSpecialty": "Cosmetic Dentistry - Affordable Composite Bonding",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£120-£600"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pink-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Composite Bonding in <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Affordable Smile Improvements for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Same-day smile improvements from £120 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-pink-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Bonding Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pink-600 hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">✨ Same-day smile improvements with affordable payment plans for Gedling families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Smile Improvements for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Composite bonding offers the most cost-effective way to dramatically improve your smile.
                Perfect for Gedling working families who want beautiful results without the high costs of veneers or lengthy orthodontic treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {affordableBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-pink-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-pink-100 text-pink-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-pink-50 rounded-lg p-8">
              <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Same-Day Smile Transformation</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Gedling working families want smile improvements that fit their budget and busy schedule.
                Composite bonding delivers instant results in a single visit with affordable pricing and payment plans.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">From £120</div>
                  <p className="text-gray-600">Most affordable cosmetic treatment</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Same day</div>
                  <p className="text-gray-600">Instant transformation</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonding Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Composite Bonding Options for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of composite bonding treatments designed to provide
                maximum smile improvement at prices that work for working family budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {bondingOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-pink-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pink-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.option}</CardTitle>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.pricing}</p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{option.duration}</Badge>
                        </div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3">
                        <p className="text-sm text-pink-700 font-medium">{option.benefits}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bonding Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Common Smile Problems Solved with Affordable Bonding
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Composite bonding can address many common smile concerns that affect
                confidence and professional appearance for Gedling working families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bondingApplications.map((application, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{application.issue}</h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">Bonding Solution:</h4>
                        <p className="text-sm text-gray-700">{application.bondingSolution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">Appearance Result:</h4>
                        <p className="text-sm text-gray-700">{application.appearance}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pink-600 text-sm mb-1">Durability:</h4>
                        <p className="text-sm text-gray-700">{application.durability}</p>
                      </div>

                      <div className="bg-pink-50 rounded-lg p-3">
                        <h4 className="font-semibold text-pink-700 text-sm mb-1">Working Family Benefit:</h4>
                        <p className="text-sm text-pink-700">{application.workingFamilyBenefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Composite Bonding vs Other Treatments: Value Comparison
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how bonding compares to other smile improvement options
                helps Gedling working families make the best choice for their needs and budget.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Comparison Factor</div>
                <div className="text-center">Composite Bonding</div>
                <div className="text-center">Porcelain Veneers</div>
                <div className="text-center">Orthodontics</div>
                <div className="text-center">Best Value</div>
              </div>

              {valueComparison.map((item, index) => (
                <div key={index} className="grid grid-cols-5 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{item.aspect}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.compositeBonding}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.veneers}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.orthodontics}</div>
                  <div className="text-center">
                    <Badge
                      className={
                        item.winner === "Composite Bonding"
                          ? "bg-pink-100 text-pink-700"
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
                <strong>Overall Winner for Working Families:</strong> Composite bonding provides the best combination
                of affordability, speed, and results for busy Gedling families seeking smile improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Making Smile Improvements Affordable for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smart strategies to get maximum smile improvement value that works
                within working family budgets and busy schedules.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {affordabilityStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-pink-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{strategy.strategy}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-pink-600 text-sm mb-1">Approach:</h4>
                            <p className="text-sm text-gray-700">{strategy.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-pink-600 text-sm mb-1">Benefit:</h4>
                            <p className="text-sm text-gray-700">{strategy.benefit}</p>
                          </div>
                          <div className="bg-pink-50 rounded-lg p-3">
                            <h4 className="font-semibold text-pink-700 text-sm mb-1">Value:</h4>
                            <p className="text-sm text-pink-700">{strategy.savings}</p>
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
                What Gedling Families Say About Our Affordable Composite Bonding
              </h2>
            </div>

            <TestimonialBanner
              text="I chipped my front tooth and was so embarrassed at work meetings. I thought cosmetic dentistry would be way too expensive for our family budget. Being just a quick drive from Gedling, I popped in for a consultation. They explained composite bonding could fix it for just £150 with a payment plan option! I had it done on my lunch break - took just one hour and looked absolutely perfect. You can't even tell which tooth was damaged. For the price of a nice meal out, I got my confidence back. Best money I've ever spent!"
              author="Sharon T. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">£150 bonding</div>
                <p className="text-gray-600">Affordable with payment plan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">One hour</div>
                <p className="text-gray-600">Done on lunch break</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">Perfect result</div>
                <p className="text-gray-600">Confidence completely restored</p>
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
              Affordable Smile Improvements for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic smile improvements achieved with affordable composite bonding treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/composite-bonding-before-case-1.webp"
              afterImage="/images/composite-bonding-after-case-1.webp"
              beforeAlt="Before composite bonding - chipped, gapped teeth affecting confidence"
              afterAlt="After composite bonding - beautiful, seamless smile transformation"
              title="Affordable Same-Day Smile Makeover"
              description="Gedling working professional's bonding transformation"
              treatmentType="Multiple Tooth Composite Bonding"
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
                Composite Bonding Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about affordable composite bonding treatment
              </p>
            </div>

            <FAQSection faqs={gedlingBondingFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Affordable Smile Improvements - Quick Drive from Gedling
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
                  <div className="bg-pink-50 rounded-lg p-6">
                    <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <h4 className="font-bold text-pink-700 mb-2">Composite Bonding</h4>
                    <p className="text-gray-600">Same-day smile improvements</p>
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
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Smile Today with Affordable Bonding from Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let budget concerns stop you from having the confident smile you deserve.
              Book same-day composite bonding with payment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Affordable Smile Improvement Specialists
              </p>
              <p className="text-sm opacity-90">
                Same-day results • Payment plans available • Natural appearance • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-pink-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Bonding Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pink-600 hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day treatment from £120</span>
              <span>✓ Payment plans available</span>
              <span>✓ Natural, long-lasting results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
