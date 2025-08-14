import React from "react";
import {
  Award,
  Camera,
  Car,
  CreditCard,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  Timer,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Complete Smile Makeovers in Gedling - Affordable Transformations for Working Families | Pear Tree Dental",
  description:
    "Complete smile makeovers for Gedling working families. Affordable smile transformations, flexible payment plans, and comprehensive care. Quick drive from Gedling NG4.",
  keywords: [
    "complete smile makeover Gedling",
    "smile transformation Gedling NG4",
    "affordable smile makeover Gedling",
    "comprehensive dental makeover Gedling",
    "working families smile makeover Gedling",
    "smile design Gedling",
    "full smile transformation Gedling",
  ],
  openGraph: {
    title:
      "Complete Smile Makeovers in Gedling - Affordable Transformations for Working Families | Pear Tree Dental",
    description:
      "Complete smile makeovers for Gedling working families. Affordable smile transformations with flexible payment plans.",
    url: "https://peartree.dental/gedling/complete-smile-makeovers",
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/complete-smile-makeovers",
  },
};

export default function GedlingCompleteSmileMakeoversPage() {
  const gedlingMakeoverFAQs = [
    {
      question:
        "How affordable are complete smile makeovers for working families from Gedling?",
      answer:
        "We design smile makeovers to fit working family budgets, starting from £3,500 with payment plans from £200/month. We use a phased approach, addressing priority concerns first, allowing families to spread treatment over time while seeing immediate improvements.",
    },
    {
      question: "How long does a complete smile makeover take?",
      answer:
        "Most smile makeovers are completed in 2-6 months, depending on treatments chosen. We can often phase treatment to minimize work disruption for Gedling families, with initial improvements visible after the first phase of treatment.",
    },
    {
      question: "What treatments are included in a smile makeover?",
      answer:
        "Smile makeovers are completely customized but may include teeth whitening, composite bonding, crowns, veneers, orthodontics, or gum treatments. We design each makeover based on individual needs, goals, and budget considerations.",
    },
    {
      question: "Can smile makeovers be done in phases for budget management?",
      answer:
        "Absolutely! This is perfect for working families. We can prioritize the most impactful treatments first, allowing you to see dramatic improvements while spreading costs over time. Each phase builds on the previous improvements.",
    },
    {
      question:
        "How do you ensure the results look natural for professional settings?",
      answer:
        "We specialize in natural-looking transformations that enhance confidence in professional environments. We consider facial features, age, and lifestyle to create beautiful, appropriate smiles that look authentically yours.",
    },
  ];

  const makeoverPackages = [
    {
      package: "Essential Smile Refresh",
      description: "Address key concerns for immediate confidence boost",
      treatments: "Whitening + bonding + hygiene therapy",
      timeframe: "4-6 weeks completion",
      pricing: "From £1,200",
      benefits: "Quick results, natural enhancement",
      icon: Sparkles,
    },
    {
      package: "Professional Smile Makeover",
      description: "Comprehensive transformation for working professionals",
      treatments: "Whitening + multiple bonding/crowns + orthodontics",
      timeframe: "3-4 months completion",
      pricing: "From £3,500",
      benefits: "Complete smile transformation, career confidence",
      icon: Award,
    },
    {
      package: "Premium Family Makeover",
      description: "Multiple family members' coordinated smile improvements",
      treatments: "Customized treatment plans for each family member",
      timeframe: "3-6 months staggered",
      pricing: "From £2,800 per person",
      benefits: "Family coordination, package discounts",
      icon: Users,
    },
    {
      package: "Phased Smile Transformation",
      description: "Major makeover split into manageable phases",
      treatments: "Phase 1: Priority concerns, Phase 2: Enhancement",
      timeframe: "6-12 months total",
      pricing: "From £5,000 (phased payments)",
      benefits: "Budget-friendly timing, immediate improvements",
      icon: Target,
    },
  ];

  const affordableBenefits = [
    {
      benefit: "Phased Treatment Options",
      description: "Break comprehensive makeovers into manageable phases",
      value: "Budget-friendly timing",
      icon: Timer,
    },
    {
      benefit: "Payment Plan Flexibility",
      description: "Spread makeover costs over 12-24 months with 0% interest",
      value: "Affordable monthly payments",
      icon: CreditCard,
    },
    {
      benefit: "Professional Results",
      description:
        "Natural-looking transformations perfect for work environments",
      value: "Career confidence boost",
      icon: Award,
    },
    {
      benefit: "Family Coordination",
      description: "Coordinate multiple family members for package savings",
      value: "Family discounts available",
      icon: Users,
    },
  ];

  const makeoverScenarios = [
    {
      scenario: "Working Parent's Confidence Crisis",
      challenge:
        "Multiple dental issues affecting professional confidence and self-esteem",
      makeoverSolution:
        "Phased approach addressing most visible concerns first",
      phase1: "Whitening and front tooth bonding for immediate improvement",
      phase2: "Back tooth crowns and additional refinements",
      familyBenefit:
        "Restored confidence affects parenting and career positively",
      practicalValue: "Treatments timed around work schedule and budget",
    },
    {
      scenario: "Teenager's Self-Esteem Impact",
      challenge:
        "Dental imperfections affecting social confidence and future opportunities",
      makeoverSolution: "Age-appropriate comprehensive smile enhancement",
      phase1: "Orthodontic consultation and teeth straightening",
      phase2: "Whitening and bonding after orthodontics complete",
      familyBenefit: "Investment in child's confidence and future success",
      practicalValue: "Long-term improvement that grows with the teenager",
    },
    {
      scenario: "Couple's Joint Makeover",
      challenge: "Both partners want smile improvements but budget is limited",
      makeoverSolution: "Coordinated treatment plan with staggered timing",
      phase1: "Priority treatments for one partner first",
      phase2: "Second partner's treatment after first is complete",
      familyBenefit: "Both partners achieve smile goals within family budget",
      practicalValue: "Shared payment plan and coordinated care",
    },
    {
      scenario: "Career Advancement Investment",
      challenge: "Professional seeking confidence boost for career progression",
      makeoverSolution: "Focused makeover targeting professional appearance",
      phase1: "Quick improvements for immediate confidence",
      phase2: "Comprehensive enhancements over time",
      familyBenefit: "Career advancement benefits whole family financially",
      practicalValue: "ROI through improved professional opportunities",
    },
  ];

  const treatmentOptions = [
    {
      treatment: "Professional Teeth Whitening",
      purpose: "Foundation treatment for brighter, more youthful appearance",
      cost: "£195-£495",
      timeframe: "1-3 weeks",
      impact: "Immediate transformation, 4-8 shades whiter",
    },
    {
      treatment: "Composite Bonding",
      purpose: "Fix chips, gaps, and shape irregularities",
      cost: "£120-£200 per tooth",
      timeframe: "Same day",
      impact: "Natural-looking repairs and improvements",
    },
    {
      treatment: "Porcelain Crowns",
      purpose: "Comprehensive restoration for damaged or heavily filled teeth",
      cost: "£450-£750 per crown",
      timeframe: "2-3 weeks",
      impact: "Complete tooth transformation with natural appearance",
    },
    {
      treatment: "Orthodontic Treatment",
      purpose: "Straighten teeth for improved alignment and function",
      cost: "£2,200-£3,500",
      timeframe: "12-24 months",
      impact: "Fundamental smile structure improvement",
    },
    {
      treatment: "Gum Contouring",
      purpose: "Improve gum line for better tooth proportions",
      cost: "£200-£400 per area",
      timeframe: "Same day",
      impact: "Enhanced smile proportions and aesthetics",
    },
    {
      treatment: "Dental Implants",
      purpose: "Replace missing teeth with permanent solutions",
      cost: "£2,400+ per implant",
      timeframe: "3-6 months",
      impact: "Complete restoration of function and appearance",
    },
  ];

  const affordabilityStrategies = [
    {
      strategy: "Phased Treatment Planning",
      approach: "Break comprehensive makeovers into 2-3 manageable phases",
      benefit: "Immediate improvements while spreading costs over time",
      value: "See results quickly without overwhelming budget",
    },
    {
      strategy: "Priority-Based Approach",
      approach:
        "Address most impactful improvements first for maximum confidence boost",
      benefit: "Greatest visual improvement for smallest initial investment",
      value: "Quick confidence boost while planning additional phases",
    },
    {
      strategy: "Payment Plan Coordination",
      approach:
        "Flexible payment plans from £200-£500 monthly over 12-24 months",
      benefit: "Makes comprehensive makeovers accessible to working families",
      value: "Professional results within monthly budget constraints",
    },
    {
      strategy: "Family Package Discounts",
      approach: "Coordinate multiple family members' treatments for savings",
      benefit: "Reduced per-person costs when treating multiple family members",
      value: "Family-wide smile improvements at better value",
    },
    {
      strategy: "Conservative Treatment Maximization",
      approach:
        "Use bonding and whitening where possible before expensive options",
      benefit: "Achieve dramatic results with more affordable treatments",
      value: "80% of aesthetic improvement at 40% of premium treatment cost",
    },
    {
      strategy: "Long-Term Value Investment",
      approach:
        "Focus on treatments that provide lasting results and prevent future problems",
      benefit: "Makeover investment pays dividends in confidence and health",
      value: "Career and personal benefits that justify the investment",
    },
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
            name: "Pear Tree Dental - Complete Smile Makeovers in Gedling",
            image:
              "https://peartree.dental/images/complete-smile-makeovers-gedling.jpg",
            url: "https://peartree.dental/gedling/complete-smile-makeovers",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: {
              "@type": "Place",
              name: "Gedling, NG4",
            },
            medicalSpecialty:
              "Cosmetic Dentistry - Complete Smile Transformations",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£1,200-£8,000",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-rose-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Complete Smile Makeovers in{" "}
              <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Affordable Transformations for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Complete smile transformations from
                £1,200 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-rose-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Book Makeover Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                ✨ Complete smile transformations with phased payment plans for
                Gedling families!
              </p>
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
                Affordable Complete Smile Makeovers for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families want comprehensive
                smile transformations that fit their budget and lifestyle. Our
                phased approach and payment plans make complete makeovers
                achievable for any family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(affordableBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-rose-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-rose-100 text-rose-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-rose-50 rounded-lg p-8">
              <Camera className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Complete Smile Transformation Made Affordable
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe every Gedling working family deserves the confidence
                that comes with a beautiful smile. Our phased approach and
                flexible payment plans make comprehensive smile makeovers
                achievable for any budget.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    Phased approach
                  </div>
                  <p className="text-gray-600">
                    Immediate results, manageable costs
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    From £200/month
                  </div>
                  <p className="text-gray-600">Flexible payment plans</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-2">
                    Quick drive
                  </div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeover Packages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Smile Makeover Packages for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of smile makeover packages designed to
                provide comprehensive transformations at prices that work for
                working family budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(makeoverPackages || []).map((makeover, index) => {
                const IconComponent = makeover.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-rose-400"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-rose-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {makeover.package}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {makeover.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {makeover.pricing}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {makeover.timeframe}
                          </Badge>
                        </div>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-rose-700 font-medium">
                          {makeover.treatments}
                        </p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3">
                        <p className="text-sm text-rose-700 font-medium">
                          {makeover.benefits}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Makeover Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Real Family Scenarios Where Smile Makeovers Transform Lives
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how complete smile makeovers solve real challenges
                for working families helps Gedling families see the practical
                value of comprehensive smile transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(makeoverScenarios || []).map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">
                      {scenario.scenario}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-rose-600 text-sm mb-1">
                          Challenge:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-rose-600 text-sm mb-1">
                          Makeover Solution:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.makeoverSolution}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <h4 className="font-semibold text-rose-600 text-xs mb-1">
                            Phase 1:
                          </h4>
                          <p className="text-xs text-gray-700">
                            {scenario.phase1}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-rose-600 text-xs mb-1">
                            Phase 2:
                          </h4>
                          <p className="text-xs text-gray-700">
                            {scenario.phase2}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-rose-600 text-sm mb-1">
                          Family Benefit:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.familyBenefit}
                        </p>
                      </div>

                      <div className="bg-rose-50 rounded-lg p-3">
                        <h4 className="font-semibold text-rose-700 text-sm mb-1">
                          Practical Value:
                        </h4>
                        <p className="text-sm text-rose-700">
                          {scenario.practicalValue}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Smile Makeover Treatment Options for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our smile makeovers combine multiple treatments tailored to each
                family's needs, goals, and budget. Every makeover is completely
                customized.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(treatmentOptions || []).map((treatment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-2">
                      {treatment.treatment}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-rose-600 text-sm mb-1">
                          Purpose:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {treatment.purpose}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h4 className="font-semibold text-rose-600 text-xs mb-1">
                            Cost:
                          </h4>
                          <p className="text-xs text-gray-700">
                            {treatment.cost}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-rose-600 text-xs mb-1">
                            Time:
                          </h4>
                          <p className="text-xs text-gray-700">
                            {treatment.timeframe}
                          </p>
                        </div>
                      </div>

                      <div className="bg-rose-50 rounded-lg p-3">
                        <h4 className="font-semibold text-rose-700 text-sm mb-1">
                          Impact:
                        </h4>
                        <p className="text-sm text-rose-700">
                          {treatment.impact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Making Complete Smile Makeovers Affordable for Gedling Working
                Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smart strategies to achieve comprehensive smile transformations
                that work within working family budgets and busy lifestyles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(affordabilityStrategies || []).map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {strategy.strategy}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-rose-600 text-sm mb-1">
                              Approach:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.approach}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-rose-600 text-sm mb-1">
                              Benefit:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.benefit}
                            </p>
                          </div>
                          <div className="bg-rose-50 rounded-lg p-3">
                            <h4 className="font-semibold text-rose-700 text-sm mb-1">
                              Value:
                            </h4>
                            <p className="text-sm text-rose-700">
                              {strategy.value}
                            </p>
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
                What Gedling Families Say About Our Affordable Smile Makeovers
              </h2>
            </div>

            <TestimonialBanner
              text="I'd been hiding my smile for years because of chipped and stained teeth. As a working mum, I thought smile makeovers were only for celebrities! Being just a quick drive from Gedling, I went for a consultation expecting to be told it was too expensive. Instead, they designed a phased treatment plan that fit our family budget perfectly. Phase 1 was whitening and bonding for just £850 - the transformation was incredible! Six months later, I completed Phase 2 with crowns on my back teeth. The payment plan made it so manageable, and my confidence has completely changed. I smile in every photo now!"
              author="Claire B. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Phased treatment
                </div>
                <p className="text-gray-600">Budget-friendly approach</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Incredible transformation
                </div>
                <p className="text-gray-600">Immediate confidence boost</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  Manageable payments
                </div>
                <p className="text-gray-600">
                  Worked perfectly for family budget
                </p>
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
              Complete Smile Makeover Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic transformations achieved with our affordable,
              phased smile makeover approach
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/complete-smile-makeover-before-case-1.webp"
              afterImage="/images/complete-smile-makeover-after-case-1.webp"
              beforeAlt="Before complete smile makeover - multiple dental issues affecting confidence"
              afterAlt="After complete smile makeover - beautiful, natural, confident smile transformation"
              title="Affordable Complete Smile Transformation"
              description="Gedling working parent's comprehensive makeover with phased approach"
              treatmentType="Complete Smile Makeover - Phased Treatment"
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
                Smile Makeover Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about affordable
                complete smile makeovers
              </p>
            </div>

            <FAQSection faqs={gedlingMakeoverFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Affordable Smile Transformations - Quick Drive from Gedling
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
                    <p className="text-pear-primary font-semibold">
                      Journey: Quick 15-minute drive
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-rose-50 rounded-lg p-6">
                    <Camera className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                    <h4 className="font-bold text-rose-700 mb-2">
                      Complete Smile Makeovers
                    </h4>
                    <p className="text-gray-600">
                      Affordable transformations with payment plans
                    </p>
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
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Gedling
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Smile and Your Confidence from Gedling Today
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let budget concerns stop you from achieving the confident
              smile you deserve. Book comprehensive smile makeover consultation
              with phased treatment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Complete Smile Makeover Specialists
              </p>
              <p className="text-sm opacity-90">
                Phased treatment plans • Payment plans available • Natural
                results • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-rose-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Book Makeover Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Complete makeovers from £1,200</span>
              <span>✓ Phased treatment options</span>
              <span>✓ Payment plans from £200/month</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
