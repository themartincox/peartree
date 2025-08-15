import React from "react";
import {
  Banknote,
  Calculator,
  Car,
  DollarSign,
  HandHeart,
  MapPin,
  Navigation,
  Phone,
  PiggyBank,
  Star,
  ThumbsUp,
  Users,
  Zap,
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
    "Flexible Payment Dentistry in Gedling - Financing Options for Working Families | Pear Tree Dental",
  description:
    "Flexible payment dentistry for Gedling working families. Affordable financing options, payment plans, and budget-friendly dental care. Quick drive from Gedling NG4.",
  keywords: [
    "flexible payment dentistry Gedling",
    "dental payment plans Gedling NG4",
    "affordable dental financing Gedling",
    "payment options dentist Gedling",
    "working families dental finance Gedling",
    "budget dental care Gedling",
    "dental finance plans Gedling",
  ],
  openGraph: {
    title:
      "Flexible Payment Dentistry in Gedling - Financing Options for Working Families | Pear Tree Dental",
    description:
      "Flexible payment dentistry for Gedling working families. Affordable financing options and payment plans for all treatments.",
    url: "https://peartree.dental/gedling/flexible-payment-dentistry",
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/flexible-payment-dentistry",
  },
};

export default function GedlingFlexiblePaymentDentistryPage() {
  const gedlingPaymentFAQs = [
    {
      question:
        "What payment options are available for working families from Gedling?",
      answer:
        "We offer multiple payment options including 0% interest payment plans (6-24 months), third-party financing, family payment packages, and flexible scheduling to spread costs. We believe quality dental care should be accessible to all Gedling working families regardless of budget constraints.",
    },
    {
      question: "How do 0% interest payment plans work?",
      answer:
        "Our 0% interest plans allow you to spread treatment costs over 6-24 months with no additional charges. For example, a £1,200 treatment becomes just £100 per month over 12 months. There are no hidden fees or credit checks for plans under £1,500.",
    },
    {
      question: "Can families combine payment plans for multiple treatments?",
      answer:
        "Absolutely! We can coordinate payment plans across family members and multiple treatments. This allows families to get necessary care for everyone while managing cash flow effectively. We often customize plans to fit family budgets and paydays.",
    },
    {
      question: "What financing options are available for larger treatments?",
      answer:
        "For comprehensive treatments over £1,500, we work with specialist dental finance companies offering competitive rates and flexible terms. These plans can extend up to 60 months and often have promotional 0% periods. We help you find the best option for your situation.",
    },
    {
      question:
        "How do you help families prioritize treatments within their budget?",
      answer:
        "We provide honest guidance on treatment priorities, helping families address urgent needs first while planning for comprehensive care over time. We can phase treatments to spread costs and ensure optimal health outcomes within budget constraints.",
    },
  ];

  const paymentOptions = [
    {
      option: "In-House 0% Interest Plans",
      description: "Direct payment plans with no interest charges",
      terms: "6-24 months",
      suitability: "Treatments up to £1,500",
      benefits: "No credit checks, immediate approval",
      example: "£600 treatment = £50/month for 12 months",
      icon: PiggyBank,
    },
    {
      option: "Third-Party Financing",
      description: "Specialist dental finance with competitive rates",
      terms: "12-60 months",
      suitability: "Larger treatments £1,500+",
      benefits: "Extended terms, promotional 0% periods",
      example: "£4,000 treatment = £120/month for 36 months",
      icon: Banknote,
    },
    {
      option: "Family Package Plans",
      description: "Coordinated payment plans for multiple family members",
      terms: "Customized timing",
      suitability: "Multiple family treatments",
      benefits: "Simplified billing, family discounts",
      example: "Family plan from £150/month for comprehensive care",
      icon: Users,
    },
    {
      option: "Flexible Direct Debit",
      description: "Automated payments aligned with your payday",
      terms: "Weekly, monthly, or custom",
      suitability: "All treatment types",
      benefits: "Automatic payments, budget control",
      example: "Payments timed to your salary schedule",
      icon: Calculator,
    },
  ];

  const flexibleBenefits = [
    {
      benefit: "No Interest Options",
      description: "0% interest payment plans for treatments up to £1,500",
      value: "Save money on financing",
      icon: DollarSign,
    },
    {
      benefit: "Immediate Treatment",
      description: "Start treatment now, pay over time with approved plan",
      value: "Don't delay essential care",
      icon: Zap,
    },
    {
      benefit: "Budget Control",
      description: "Fixed monthly payments that fit your family budget",
      value: "Predictable expenses",
      icon: Calculator,
    },
    {
      benefit: "Family Coordination",
      description: "Combined plans for multiple family members' treatments",
      value: "Simplified family billing",
      icon: Users,
    },
  ];

  const budgetScenarios = [
    {
      scenario: "Single Parent Needing Urgent Treatment",
      challenge: "£800 urgent dental work needed but tight monthly budget",
      paymentSolution: "0% interest plan over 16 months at £50 per month",
      familyBenefit: "Gets essential treatment without financial strain",
      budgetImpact: "Manageable payment that fits within existing budget",
      longTermValue:
        "Prevents more expensive problems, maintains work attendance",
    },
    {
      scenario: "Family Needing Comprehensive Care",
      challenge:
        "Multiple family members need various treatments totaling £3,200",
      paymentSolution: "Phased treatment plan with staggered payment schedules",
      familyBenefit: "Everyone gets needed care within affordable timeframe",
      budgetImpact: "Spread over 18 months at £180 per month for whole family",
      longTermValue: "Complete family health achieved affordably",
    },
    {
      scenario: "Working Couple's Smile Makeover Goals",
      challenge:
        "Both partners want cosmetic improvements but cash flow limited",
      paymentSolution: "Sequential treatment with extended financing options",
      familyBenefit:
        "Both achieve aesthetic goals without compromising other expenses",
      budgetImpact: "Extended 36-month plan keeps monthly payments under £150",
      longTermValue: "Career confidence boost pays for itself over time",
    },
    {
      scenario: "Unexpected Dental Emergency",
      challenge: "Child's dental trauma requires immediate £1,200 treatment",
      paymentSolution: "Emergency payment plan with immediate approval",
      familyBenefit: "Child gets immediate care without financial crisis",
      budgetImpact: "12-month plan at £100 per month with 0% interest",
      longTermValue: "Prevents long-term complications and additional costs",
    },
  ];

  const treatmentCostExamples = [
    {
      treatment: "Routine Dental Care",
      cost: "£65-150",
      paymentExample: "Can be paid immediately or split over 2-3 months",
      monthlyPayment: "From £25-50 per month",
      familyValue: "Preventive care prevents expensive problems",
    },
    {
      treatment: "Dental Crowns",
      cost: "£450-750",
      paymentExample: "0% interest over 12-18 months",
      monthlyPayment: "£25-65 per month",
      familyValue: "Saves tooth, prevents extraction and replacement costs",
    },
    {
      treatment: "Family Orthodontics",
      cost: "£2,200-3,500",
      paymentExample: "Extended financing over 24-36 months",
      monthlyPayment: "£65-150 per month",
      familyValue: "Lifetime benefit of straight teeth and confidence",
    },
    {
      treatment: "Dental Implants",
      cost: "£2,400-4,800",
      paymentExample: "Third-party financing with promotional 0% periods",
      monthlyPayment: "£80-200 per month",
      familyValue: "20-30 year solution replacing missing teeth",
    },
    {
      treatment: "Complete Smile Makeover",
      cost: "£3,500-8,000",
      paymentExample: "Phased treatment with coordinated payment plans",
      monthlyPayment: "£150-350 per month",
      familyValue: "Comprehensive transformation over manageable timeframe",
    },
    {
      treatment: "Family Comprehensive Care",
      cost: "£1,500-4,000",
      paymentExample: "Family package plan with coordinated scheduling",
      monthlyPayment: "£100-250 per month",
      familyValue: "Complete family health achieved affordably",
    },
  ];

  const budgetStrategies = [
    {
      strategy: "Treatment Prioritization",
      approach: "Address urgent needs first, plan comprehensive care over time",
      benefit: "Ensures health while managing cash flow effectively",
      implementation:
        "Create priority list, phase treatments by urgency and budget",
    },
    {
      strategy: "Family Package Approach",
      approach:
        "Coordinate multiple family members' care for efficiency and savings",
      benefit: "Reduced per-person costs and simplified payment management",
      implementation:
        "Schedule family treatments together, combine payment plans",
    },
    {
      strategy: "Preventive Investment Focus",
      approach:
        "Use affordable payment plans for preventive care to avoid expensive problems",
      benefit: "Long-term savings through problem prevention",
      implementation:
        "Monthly preventive care budget prevents costly emergency treatments",
    },
    {
      strategy: "Flexible Timing Strategy",
      approach: "Align treatment timing with family financial calendar",
      benefit: "Treatments timed for optimal cash flow management",
      implementation:
        "Schedule major treatments after tax returns, bonuses, or budget resets",
    },
    {
      strategy: "Progressive Care Planning",
      approach:
        "Start with essential care, progressively add enhancements as budget allows",
      benefit: "Immediate health improvement with ongoing upgrades",
      implementation:
        "Phase 1: Essential care, Phase 2: Improvements, Phase 3: Enhancements",
    },
    {
      strategy: "Insurance Maximization",
      approach: "Time treatments to maximize dental insurance benefits",
      benefit: "Reduce out-of-pocket costs through strategic planning",
      implementation:
        "Coordinate treatment timing with insurance plan years and maximums",
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
            name: "Pear Tree Dental - Flexible Payment Dentistry in Gedling",
            image:
              "https://peartree.dental/images/flexible-payment-dentistry-gedling.jpg",
            url: "https://peartree.dental/gedling/flexible-payment-dentistry",
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
            medicalSpecialty: "General Dentistry - Flexible Payment Options",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£25-£350 per month",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-teal-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Flexible Payment Dentistry in{" "}
              <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Financing Options for Working Families
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Flexible payment plans from £25/month
                with 0% interest options
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  Discuss Payment Options
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                💳 Flexible financing makes quality dental care accessible for
                every Gedling family!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Flexible Payment Options for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families have varying
                financial situations and cash flow needs. Our flexible payment
                options ensure that quality dental care is accessible to every
                family, regardless of budget constraints.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(flexibleBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-teal-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-teal-100 text-teal-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-teal-50 rounded-lg p-8">
              <HandHeart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Quality Dental Care Made Affordable for Every Family
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe that financial constraints shouldn't prevent families
                from receiving quality dental care. Our flexible payment
                solutions ensure that every Gedling family can access the dental
                treatment they need.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    0% interest
                  </div>
                  <p className="text-gray-600">
                    No interest payment plans available
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    From £25/month
                  </div>
                  <p className="text-gray-600">Flexible monthly payments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    Quick drive
                  </div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Payment Solutions for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of flexible payment options designed to
                make dental care affordable and accessible for every working
                family situation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(paymentOptions || []).map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-teal-400"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {option.option}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <div className="flex flex-col gap-1 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {option.terms}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {option.suitability}
                          </span>
                        </div>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-teal-700 font-medium">
                          {option.benefits}
                        </p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-3">
                        <p className="text-sm text-teal-700 font-medium">
                          {option.example}
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

      {/* Budget Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Real Budget Scenarios for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our flexible payment solutions help real families access
                the dental care they need within their budget constraints.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(budgetScenarios || []).map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">
                      {scenario.scenario}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Challenge:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Payment Solution:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.paymentSolution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Family Benefit:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.familyBenefit}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Budget Impact:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {scenario.budgetImpact}
                        </p>
                      </div>

                      <div className="bg-teal-50 rounded-lg p-3">
                        <h4 className="font-semibold text-teal-700 text-sm mb-1">
                          Long-Term Value:
                        </h4>
                        <p className="text-sm text-teal-700">
                          {scenario.longTermValue}
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

      {/* Treatment Cost Examples */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Treatment Costs & Payment Examples for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding real treatment costs and payment options helps
                families plan their dental care investment and budget
                effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(treatmentCostExamples || []).map((treatment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-2">
                      {treatment.treatment}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Treatment Cost:
                        </h4>
                        <p className="text-2xl font-bold text-teal-600">
                          {treatment.cost}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Payment Example:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {treatment.paymentExample}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-teal-600 text-sm mb-1">
                          Monthly Payment:
                        </h4>
                        <p className="text-lg font-bold text-gray-700">
                          {treatment.monthlyPayment}
                        </p>
                      </div>

                      <div className="bg-teal-50 rounded-lg p-3">
                        <h4 className="font-semibold text-teal-700 text-sm mb-1">
                          Family Value:
                        </h4>
                        <p className="text-sm text-teal-700">
                          {treatment.familyValue}
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

      {/* Budget Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Smart Budget Strategies for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Practical approaches to managing dental care costs that work
                with working family budgets and financial planning needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(budgetStrategies || []).map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {strategy.strategy}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-teal-600 text-sm mb-1">
                              Approach:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.approach}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-teal-600 text-sm mb-1">
                              Benefit:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.benefit}
                            </p>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-3">
                            <h4 className="font-semibold text-teal-700 text-sm mb-1">
                              Implementation:
                            </h4>
                            <p className="text-sm text-teal-700">
                              {strategy.implementation}
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
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Gedling Families Say About Our Flexible Payment Options
              </h2>
            </div>

            <TestimonialBanner
              text="I needed several crowns but couldn't afford the £2,000 upfront cost. Being just a quick drive from Gedling, I went to discuss options expecting to be turned away. Instead, they offered a 0% interest payment plan that fit perfectly with our family budget - just £110 per month for 18 months. No credit checks, no hidden fees, just honest help. The treatment was excellent, and the flexible payments meant I could get the dental care I needed without affecting our family's other expenses. They even timed the payments to come out just after payday! It's such a relief to find a dentist that understands working families' financial situations."
              author="Karen H. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  £110 per month
                </div>
                <p className="text-gray-600">Affordable payment plan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  0% interest
                </div>
                <p className="text-gray-600">No additional costs</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  Payday timing
                </div>
                <p className="text-gray-600">Payments aligned with salary</p>
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
              Accessible Dental Care Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See the excellent results achieved when flexible payment options
              make quality dental care accessible
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/flexible-payment-dentistry-before-case-1.webp"
              afterImage="/images/flexible-payment-dentistry-after-case-1.webp"
              beforeAlt="Before affordable payment plan treatment - dental issues affecting confidence and health"
              afterAlt="After affordable payment plan treatment - healthy, confident smile achieved through flexible financing"
              title="Accessible Quality Care Success"
              description="Gedling working family's transformation through flexible payment options"
              treatmentType="Comprehensive Care with Payment Plan"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Payment Option Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about flexible
                payment and financing options
              </p>
            </div>

            <FAQSection faqs={gedlingPaymentFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Flexible Payment Dentistry - Quick Drive from Gedling
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
                  <div className="bg-teal-50 rounded-lg p-6">
                    <HandHeart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h4 className="font-bold text-teal-700 mb-2">
                      Flexible Payment Dentistry
                    </h4>
                    <p className="text-gray-600">
                      Financing options for every family
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Don't Let Budget Concerns Delay Your Family's Dental Care from
              Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Get the dental care your family needs with payment options that
              work for your budget. Start your treatment today with flexible
              financing designed for working families.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Flexible Payment Specialists
              </p>
              <p className="text-sm opacity-90">
                0% interest options • From £25/month • Family plans available •
                Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-teal-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  Discuss Payment Options
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ 0% interest payment plans available</span>
              <span>✓ Monthly payments from £25</span>
              <span>✓ Family coordination options</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
