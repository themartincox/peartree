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
  Circle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Family Dental Implants in Gedling - Practical Tooth Replacement for Working Families | Pear Tree Dental",
  description: "Family dental implants for Gedling working families. Practical tooth replacement solutions, flexible payment plans, and family-focused care. Quick drive from Gedling NG4.",
  keywords: [
    "family dental implants Gedling",
    "dental implants Gedling NG4",
    "tooth replacement Gedling",
    "affordable implants Gedling",
    "working families dental implants Gedling",
    "family tooth replacement Gedling",
    "practical dental implants Gedling"
  ],
  openGraph: {
    title: "Family Dental Implants in Gedling - Practical Tooth Replacement for Working Families | Pear Tree Dental",
    description: "Family dental implants for Gedling working families. Practical tooth replacement solutions with flexible payment plans.",
    url: "https://peartree.dental/gedling/family-dental-implants"
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/family-dental-implants"
  }
};

export default function GedlingFamilyDentalImplantsPage() {
  const gedlingImplantsFAQs = [
    {
      question: "How practical are dental implants for working families from Gedling?",
      answer: "Dental implants are actually very practical for working families. While the initial investment is higher, they last 20-30 years and don't require special maintenance like dentures. We offer flexible payment plans from £150/month to make implants accessible to Gedling working families."
    },
    {
      question: "Can multiple family members get implants with payment plans?",
      answer: "Absolutely! We often help families coordinate implant treatment with staggered timing and combined payment plans. This allows families to spread the investment over time while ensuring everyone gets the tooth replacement they need."
    },
    {
      question: "How do implants compare to other tooth replacement options for busy families?",
      answer: "Implants are the most convenient option for busy working families. Unlike dentures that need daily removal and cleaning, or bridges that require special flossing, implants are brushed and cared for just like natural teeth - perfect for hectic schedules."
    },
    {
      question: "What's the time commitment for implant treatment from Gedling?",
      answer: "Initial consultation and implant placement typically takes 1-2 hours. The implant heals for 3-6 months, then the crown is fitted in another 1-hour appointment. Being just a quick drive from Gedling makes these appointments very manageable."
    },
    {
      question: "Are dental implants worth the investment for working families?",
      answer: "Yes! When you consider implants last 20-30 years without replacement, they're often more cost-effective than bridges or dentures long-term. Plus, they preserve jawbone health and adjacent teeth, preventing costly problems later."
    }
  ];

  const implantOptions = [
    {
      option: "Single Tooth Implant",
      description: "Replace one missing tooth with permanent implant solution",
      treatment: "Implant, abutment, and crown",
      timeframe: "3-6 months total treatment",
      pricing: "From £2,400",
      benefits: "Preserves adjacent teeth, most natural feel",
      icon: Circle
    },
    {
      option: "Multiple Implants",
      description: "Replace several missing teeth with individual implants",
      treatment: "Multiple implants with individual crowns",
      timeframe: "3-6 months, can be staggered",
      pricing: "From £2,200 per implant",
      benefits: "Independent teeth, excellent function",
      icon: Target
    },
    {
      option: "Implant Bridge",
      description: "Replace 3-4 missing teeth with 2 implants supporting bridge",
      treatment: "2 implants supporting 3-4 crowns",
      timeframe: "3-6 months treatment",
      pricing: "From £4,800",
      benefits: "Cost-effective for multiple teeth",
      icon: Crown
    },
    {
      option: "All-on-4 Solution",
      description: "Replace full arch of teeth with 4 implants",
      treatment: "4 implants supporting full arch",
      timeframe: "Same day or 3-month process",
      pricing: "From £12,000",
      benefits: "Complete transformation, fixed teeth",
      icon: Award
    }
  ];

  const practicalBenefits = [
    {
      benefit: "Long-Term Investment",
      description: "Implants last 20-30 years, making them cost-effective over time",
      value: "Excellent value for money",
      icon: TrendingUp
    },
    {
      benefit: "No Special Maintenance",
      description: "Brush and floss like natural teeth - perfect for busy families",
      value: "Convenient daily care",
      icon: Timer
    },
    {
      benefit: "Preserve Other Teeth",
      description: "Don't damage adjacent teeth like bridges require",
      value: "Protects remaining teeth",
      icon: Shield
    },
    {
      benefit: "Flexible Payment Plans",
      description: "Spread investment over 18-24 months with affordable monthly payments",
      value: "Budget-friendly payments",
      icon: CreditCard
    }
  ];

  const familyScenarios = [
    {
      scenario: "Parent's Back Tooth Loss",
      challenge: "Lost molar affecting chewing and adjacent teeth shifting",
      implantSolution: "Single implant restores full chewing function and prevents teeth moving",
      familyBenefit: "Can enjoy family meals again, no dietary restrictions",
      longTermValue: "Prevents need for costly orthodontics or further tooth loss",
      practicalAspect: "No daily appliance removal, brush like normal tooth"
    },
    {
      scenario: "Teenager's Missing Front Tooth",
      challenge: "Accident or congenital missing tooth affecting confidence",
      implantSolution: "Implant provides permanent, natural-looking replacement",
      familyBenefit: "Confident smile for school, social activities, and future career",
      longTermValue: "Investment lasts into adulthood, avoiding repeated treatments",
      practicalAspect: "No removable appliance affecting speech or eating"
    },
    {
      scenario: "Multiple Family Members Needing Treatment",
      challenge: "Several family members have different tooth replacement needs",
      implantSolution: "Coordinated treatment plan with staggered timing and combined financing",
      familyBenefit: "Whole family gets optimal treatment within manageable budget",
      longTermValue: "Family-wide investment in long-term oral health",
      practicalAspect: "Coordinated appointments minimize disruption to work schedules"
    },
    {
      scenario: "Working Parent's Denture Problems",
      challenge: "Ill-fitting dentures affecting work confidence and nutrition",
      implantSolution: "Implant-supported dentures or individual implants for stability",
      familyBenefit: "Parent regains eating ability and professional confidence",
      longTermValue: "No ongoing denture adjustments or replacements needed",
      practicalAspect: "Fixed teeth don't slip during important work presentations"
    }
  ];

  const valueComparison = [
    {
      aspect: "Initial Cost",
      implants: "Higher upfront investment",
      bridges: "Moderate initial cost",
      dentures: "Lower initial cost",
      winner: "Dentures"
    },
    {
      aspect: "Lifespan",
      implants: "20-30 years typical",
      bridges: "10-15 years typical",
      dentures: "5-10 years typical",
      winner: "Implants"
    },
    {
      aspect: "Daily Maintenance",
      implants: "Brush like natural teeth",
      bridges: "Special flossing required",
      dentures: "Daily removal and cleaning",
      winner: "Implants"
    },
    {
      aspect: "Eating Capability",
      implants: "Eat anything, full function",
      bridges: "Good function, some restrictions",
      dentures: "Limited function, dietary restrictions",
      winner: "Implants"
    },
    {
      aspect: "Effect on Other Teeth",
      implants: "Preserves all adjacent teeth",
      bridges: "Requires cutting adjacent teeth",
      dentures: "May accelerate bone loss",
      winner: "Implants"
    },
    {
      aspect: "Working Family Convenience",
      implants: "No special care routines",
      bridges: "Moderate special care",
      dentures: "High maintenance requirements",
      winner: "Implants"
    }
  ];

  const investmentStrategies = [
    {
      strategy: "Payment Plan Approach",
      approach: "Spread implant costs over 18-24 months with 0% interest options",
      benefit: "Makes premium treatment accessible to working family budgets",
      value: "Monthly payments from £150 instead of large upfront cost"
    },
    {
      strategy: "Preventive Investment Mindset",
      approach: "View implants as preventing more expensive future problems",
      benefit: "Single investment prevents multiple future treatments",
      value: "Avoids costs of bone grafts, orthodontics, or additional tooth loss"
    },
    {
      strategy: "Family Coordination Planning",
      approach: "Plan multiple family members' treatments for maximum efficiency",
      benefit: "Better treatment outcomes and potential cost savings",
      value: "Coordinated care often reduces per-person treatment costs"
    },
    {
      strategy: "Long-Term Value Analysis",
      approach: "Calculate cost per year over 20-30 year implant lifespan",
      benefit: "Reveals implants are often most economical long-term choice",
      value: "Often less than £100 per year for permanent tooth replacement"
    },
    {
      strategy: "Insurance Maximization",
      approach: "Coordinate treatment timing to maximize dental insurance benefits",
      benefit: "Reduce out-of-pocket costs for working families",
      value: "Insurance can cover £1,000-£2,000 of implant costs annually"
    },
    {
      strategy: "Quality of Life Investment",
      approach: "Consider implants as investment in health, nutrition, and confidence",
      benefit: "Benefits extend beyond dental health to overall well-being",
      value: "Improved nutrition, confidence, and professional success"
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
            "name": "Pear Tree Dental - Family Dental Implants in Gedling",
            "image": "https://peartree.dental/images/family-dental-implants-gedling.jpg",
            "url": "https://peartree.dental/gedling/family-dental-implants",
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
            "medicalSpecialty": "Dental Implantology - Family Tooth Replacement Solutions",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£2,200-£12,000"
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
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Dental Implants in <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Practical Tooth Replacement for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Permanent tooth replacement from £2,400 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Implant Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🦷 Practical, long-lasting tooth replacement with payment plans for Gedling families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Practical Dental Implants for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families need tooth replacement solutions that offer excellent
                long-term value and convenience. Dental implants provide the most practical, permanent solution that fits busy lifestyles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {practicalBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-blue-100 text-blue-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-blue-50 rounded-lg p-8">
              <Tooth className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Smart Investment in Permanent Tooth Replacement</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Gedling working families make careful decisions about major investments.
                Dental implants offer the best combination of longevity, convenience, and value for busy families.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">20-30 years</div>
                  <p className="text-gray-600">Expected lifespan</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">No special care</div>
                  <p className="text-gray-600">Brush like natural teeth</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implant Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Dental Implant Solutions for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of implant treatments designed to provide
                permanent tooth replacement solutions that work for working family budgets and lifestyles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {implantOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.option}</CardTitle>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.pricing}</p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{option.timeframe}</Badge>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-blue-700 font-medium">{option.benefits}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Family Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Real Family Situations Where Implants Provide Practical Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how dental implants solve real problems for working families
                helps Gedling families make informed decisions about tooth replacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {familyScenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{scenario.scenario}</h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-700">{scenario.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-1">Implant Solution:</h4>
                        <p className="text-sm text-gray-700">{scenario.implantSolution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-1">Family Benefit:</h4>
                        <p className="text-sm text-gray-700">{scenario.familyBenefit}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-1">Long-Term Value:</h4>
                        <p className="text-sm text-gray-700">{scenario.longTermValue}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Practical Aspect:</h4>
                        <p className="text-sm text-blue-700">{scenario.practicalAspect}</p>
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
                Implants vs Other Options: Practical Comparison for Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how implants compare to bridges and dentures helps
                Gedling working families choose the most practical tooth replacement solution.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Comparison Factor</div>
                <div className="text-center">Dental Implants</div>
                <div className="text-center">Dental Bridges</div>
                <div className="text-center">Dentures</div>
                <div className="text-center">Best Option</div>
              </div>

              {valueComparison.map((item, index) => (
                <div key={index} className="grid grid-cols-5 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{item.aspect}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.implants}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.bridges}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.dentures}</div>
                  <div className="text-center">
                    <Badge
                      className={
                        item.winner === "Implants"
                          ? "bg-blue-100 text-blue-700"
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
                <strong>Overall Winner for Working Families:</strong> Dental implants provide the best combination
                of convenience, longevity, and functionality for busy Gedling families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Smart Investment Strategies for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Practical approaches to making dental implants affordable and accessible
                for working family budgets while maximizing long-term value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{strategy.strategy}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-blue-600 text-sm mb-1">Approach:</h4>
                            <p className="text-sm text-gray-700">{strategy.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-600 text-sm mb-1">Benefit:</h4>
                            <p className="text-sm text-gray-700">{strategy.benefit}</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <h4 className="font-semibold text-blue-700 text-sm mb-1">Value:</h4>
                            <p className="text-sm text-blue-700">{strategy.value}</p>
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
                What Gedling Families Say About Our Practical Implant Solutions
              </h2>
            </div>

            <TestimonialBanner
              text="I lost a back tooth and initially thought I could just leave the gap, but it was affecting my chewing and other teeth were shifting. Being just a quick drive from Gedling made it easy to get a consultation. They explained how an implant would prevent future problems and offered a payment plan that made it affordable - £150 per month over 18 months. The treatment was straightforward, and now I can eat anything again. Six months later, I honestly forget which tooth is the implant! Best investment I've made in my health - no more worrying about my teeth shifting or needing expensive orthodontics later."
              author="David K. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">£150 per month</div>
                <p className="text-gray-600">Affordable 18-month payment plan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Prevents problems</div>
                <p className="text-gray-600">Avoided expensive future treatments</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Feels natural</div>
                <p className="text-gray-600">Forgets which tooth is implant</p>
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
              Family Dental Implant Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See the natural, long-lasting results achieved with our practical implant solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-dental-implants-before-case-1.webp"
              afterImage="/images/family-dental-implants-after-case-1.webp"
              beforeAlt="Before dental implant - missing tooth affecting function and adjacent teeth"
              afterAlt="After dental implant - natural-looking, fully functional tooth replacement"
              title="Practical Family Implant Success"
              description="Gedling working professional's implant transformation"
              treatmentType="Single Tooth Dental Implant"
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
                Family Dental Implant Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about practical dental implant solutions
              </p>
            </div>

            <FAQSection faqs={gedlingImplantsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Practical Dental Implants - Quick Drive from Gedling
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
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Tooth className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">Family Dental Implants</h4>
                    <p className="text-gray-600">Practical tooth replacement solutions</p>
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
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Invest in Permanent Tooth Replacement That Works for Your Family from Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let missing teeth affect your family's nutrition, confidence, and oral health.
              Book practical dental implant consultation with payment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Dental Implant Specialists
              </p>
              <p className="text-sm opacity-90">
                Practical solutions • Payment plans available • 20-30 year lifespan • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Book Implant Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Permanent tooth replacement from £2,400</span>
              <span>✓ Payment plans from £150/month</span>
              <span>✓ 20-30 year expected lifespan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
