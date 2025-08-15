import React from "react";
import {
  Award,
  CalendarDays,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  TrendingUp, 
  Users
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSliderPair from "@/components/BeforeAfterSliderPair";
import ServiceHero from "@/components/ServiceHero";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceHeroConfig } from "@/data/serviceHeroes";

export const metadata: Metadata = {
  title: "Orthodontics Burton Joyce | Invisalign & Clear Aligners | Pear Tree Dental",
  description: "Orthodontic treatment in Burton Joyce and Nottingham. Invisalign, ClearCorrect clear aligners. Straighten teeth invisibly. Free consultation. Treatment from £2,400.",
  keywords: [
    "orthodontics Burton Joyce",
    "Invisalign Nottingham",
    "clear aligners Burton Joyce",
    "teeth straightening Nottinghamshire",
    "invisible braces Burton Joyce",
    "ClearCorrect Nottingham",
    "adult orthodontics Burton Joyce",
    "teen braces Nottinghamshire"
  ],
  openGraph: {
    title: "Orthodontics & Clear Aligners | Pear Tree Dental",
    description: "Invisible teeth straightening with Invisalign and ClearCorrect",
    type: "website",
    url: "https://peartree.dental/services/orthodontics"
  },
  alternates: {
    canonical: "https://peartree.dental/services/orthodontics"
  },
  other: {
    'preload-before-large': '/images/before-after/BCC-before-large.webp',
    'preload-after-large': '/images/before-after/BCC-after-large.webp'
  }
};

export default function OrthodonticsPage() {
  // Consolidated FAQs including both general practice and orthodontics-specific questions
  const orthodonticsFAQs = [
    {
      question: "Where is the nearest dentist in Burton Joyce?",
      answer: "Pear Tree Dental is located at 22 Nottingham Road, Burton Joyce, NG14 5AE. We're the closest dental practice to Burton Joyce village center, just 2 minutes from the main shops."
    },
    {
      question: "What time does the dentist open?",
      answer: "We open at 8:45 AM Monday through Thursday, and 8:00 AM on Friday. We're open until 5:00 PM Monday-Thursday and 3:30 PM Friday."
    },
    {
      question: "How much does a dental checkup cost?",
      answer: "NHS dental checkups cost £25.80, but our membership plans start at £10.95 per month and include free checkups, cleaning, and 10% off treatments."
    },
    {
      question: "Do you take emergency appointments?",
      answer: "Yes, we provide same-day emergency appointments. Call 0115 931 2935 immediately for urgent dental problems including severe pain, swelling, or trauma."
    },
    {
      question: "Are you accepting new patients?",
      answer: "Yes, we're accepting new NHS and private patients. Our membership plans offer immediate access with no waiting lists, starting from £10.95 per month."
    },
    {
      question: "How much do clear aligners cost?",
      answer: "Clear aligner treatment starts from £2,400 for ClearCorrect and £2,800 for Invisalign. The exact cost depends on the complexity of your case and treatment duration. We offer flexible payment plans and 10% membership discounts."
    },
    {
      question: "How long does clear aligner treatment take?",
      answer: "Treatment typically takes 6-18 months depending on the complexity of tooth movement required. Simple cases may be completed in 6 months, while complex cases may take up to 18 months."
    },
    {
      question: "Are clear aligners really invisible?",
      answer: "Yes, clear aligners are 95% invisible. They're made from clear, medical-grade plastic that's virtually undetectable when worn. Most people won't notice you're wearing them."
    },
    {
      question: "Do I need to wear aligners all the time?",
      answer: "Clear aligners should be worn 20-22 hours per day for optimal results. You can remove them for eating, drinking (except water), and cleaning your teeth."
    },
    {
      question: "What's the difference between Invisalign and ClearCorrect?",
      answer: "Both are excellent clear aligner systems. Invisalign is the premium option with advanced features, while ClearCorrect offers similar results at a more affordable price point. We'll recommend the best option for your specific case."
    },
    {
      question: "Am I suitable for clear aligners?",
      answer: "Clear aligners can treat most orthodontic issues including crowding, spacing, and bite problems. About 85% of cases are suitable for clear aligner treatment. We'll assess your suitability during a free consultation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Orthodontics & Clear Aligners"
        description="Invisible teeth straightening with Invisalign and ClearCorrect clear aligners for all ages"
        price="From £2,400"
        category="Orthodontics & Teeth Straightening"
        duration="6-18 months treatment time"
        preparation="Digital impressions, treatment planning, aligner fabrication"
        recovery="No recovery needed - continue normal activities"
        benefits={([
          "95% invisible treatment",
          "Removable for eating and cleaning",
          "No food restrictions",
          "Comfortable smooth plastic",
          "Shorter treatment time than braces"
        ]}
        risks={([
          "Temporary speech changes initially",
          "Mild discomfort with new aligners",
          "Requires patient compliance",
          "Not suitable for all complex cases"
        ]}
        rating={4.8}
        reviewCount={186}
        url="https://peartree.dental/services/orthodontics"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Orthodontics & Clear Aligners"
        faqs={orthodonticsFAQs}
        pageUrl="/services/orthodontics"
      />
      {/* Hero Section */}
      <ServiceHero {...getServiceHeroConfig("/services/orthodontics")} />

      {/* Treatment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Clear Aligner Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from the world's leading clear aligner brands for your perfect smile transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Invisalign */}
            <Card className="overflow-hidden shadow-xl border-2 border-soft-pink hover:border-soft-pink/40 transition-colors">
              <div className="aspect-[16] bg-gradient-to-br from-soft-pink to-soft-pink p-6 flex items-center justify-center">
                <Image
                  src="/images/Invisalign-logo.png"
                  alt="Invisalign logo and clear aligners treatment system"
                  width={400}
                  height={250}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-pear-primary flex items-center">
                  <div className="w-8 h-8 bg-soft-pink rounded-lg flex items-center justify-center mr-3">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  Invisalign
                </CardTitle>
                <div className="text-3xl font-bold text-soft-pink">£2,800 - £4,500</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The world's most advanced clear aligner system with proven results for mild to complex cases.
                </p>
                <ul className="space-y-3 mb-6">
                  {([
                    "SmartTrack material for comfort",
                    "Precision attachments when needed",
                    "Virtual treatment planning",
                    "Compliance indicators",
                    "Proven track record",
                    "Comprehensive case coverage"
                  ] || []).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-pink flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/orthodontics/invisalign">
                  <Button className="w-full bg-gradient-to-r from-soft-pink to-soft-lavender text-white">
                    Learn About Invisalign
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* ClearCorrect */}
            <Card className="overflow-hidden shadow-xl border-2 border-soft-lavender hover:border-soft-lavender/40 transition-colors">
              <div className="aspect-[16] bg-gradient-to-br from-soft-lavender to-soft-lavender p-6 flex items-center justify-center">
                <Image
                  src="/images/clearcorrect-logo.png"
                  alt="ClearCorrect logo and clear aligner treatment system"
                  width={400}
                  height={250}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-pear-primary flex items-center">
                  <div className="w-8 h-8 bg-soft-lavender rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  ClearCorrect
                </CardTitle>
                <div className="text-3xl font-bold text-soft-lavender">£2,400 - £3,800</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Premium clear aligners offering excellent value with effective treatment for most orthodontic cases.
                </p>
                <ul className="space-y-3 mb-6">
                  {([
                    "ClearQuartz material",
                    "Excellent value for money",
                    "Effective for most cases",
                    "Comfortable fit",
                    "Digital treatment planning",
                    "Regular progress monitoring"
                  ] || []).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-lavender flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/orthodontics/clearcorrect">
                  <Button className="w-full bg-gradient-to-r from-soft-lavender to-soft-lavender/80 text-white">
                    Learn About ClearCorrect
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comparison vs Traditional Braces */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
              <CardHeader className="bg-gradient-to-r from-soft-pink to-soft-lavender text-white text-center">
                <CardTitle className="text-2xl">Clear Aligners vs Traditional Braces</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Feature</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-soft-pink">Clear Aligners</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Traditional Braces</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {([
                        { feature: "Visibility", aligners: "Nearly invisible", braces: "Highly visible metal" },
                        { feature: "Comfort", aligners: "Smooth plastic", braces: "Metal brackets/wires" },
                        { feature: "Eating", aligners: "Remove for meals", braces: "Food restrictions" },
                        { feature: "Cleaning", aligners: "Normal brushing", braces: "Special techniques" },
                        { feature: "Treatment Time", aligners: "6-18 months", braces: "18-36 months" },
                        { feature: "Office Visits", aligners: "Every 6-8 weeks", braces: "Every 4-6 weeks" },
                        { feature: "Emergency Visits", aligners: "Rare", braces: "Common (broken brackets)" }
                      ] || []).map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                          <td className="px-6 py-4 text-sm text-center text-soft-pink font-semibold">{row.aligners}</td>
                          <td className="px-6 py-4 text-sm text-center text-gray-600">{row.braces}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <BeforeAfterSliderPair
              sectionTitle="Teeth Straightening Results"
              sectionDescription="Life-changing transformations with our orthodontic treatments."
              primarySlider={{
                beforeImage: "/images/before-after/BCC-before.png",
                afterImage: "/images/before-after/BCC-after.png",
                beforeAlt: "Before orthodontic treatment - buccal corridor correction",
                afterAlt: "After orthodontic treatment - improved buccal corridor",
                title: "Orthodontic Transformation",
                description: "Complete smile transformation showing improved buccal corridor and overall smile aesthetics",
                treatmentType: "Clear Aligners"
              }}
              secondarySlider={{
                beforeImage: "/images/before-after/BCC-before.png",
                afterImage: "/images/before-after/BCC-after.png",
                beforeAlt: "Before orthodontic treatment - crowding correction case",
                afterAlt: "After orthodontic treatment - aligned teeth and improved spacing",
                title: "Crowding Correction",
                description: "Effective treatment of severe crowding using advanced clear aligner technology",
                treatmentType: "Invisalign"
              }}
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Treatment Duration</h4>
                <p className="text-gray-600 text-sm">12-18 months for optimal results</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Patient Satisfaction</h4>
                <p className="text-gray-600 text-sm">98% would recommend treatment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Professional Results</h4>
                <p className="text-gray-600 text-sm">Expert orthodontic care delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Clear Aligner Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages that make clear aligners the preferred choice for modern orthodontic treatment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-8">
                Why Choose Clear Aligners?
              </h3>
              <div className="space-y-6">
                {([
                  {
                    icon: Eye,
                    title: "Nearly Invisible Treatment",
                    description: "95% transparent aligners that are virtually undetectable, allowing you to straighten your teeth discreetly without anyone noticing."
                  },
                  {
                    icon: Heart,
                    title: "Superior Comfort",
                    description: "Smooth plastic aligners with no metal brackets or wires. No cuts, scrapes, or emergency visits for broken appliances."
                  },
                  {
                    icon: Sparkles,
                    title: "Removable Convenience",
                    description: "Remove aligners for eating, drinking, brushing, and special occasions. Maintain perfect oral hygiene throughout treatment."
                  },
                  {
                    icon: Clock,
                    title: "Faster Treatment Time",
                    description: "Average treatment time of 6-18 months compared to 18-36 months with traditional braces, getting you results sooner."
                  }
                ] || []).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-soft-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-pear-primary mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-soft-pink to-soft-lavender p-6 flex items-center justify-center">
                  <Image
                    src="/images/Aligner-smile.png"
                    alt="Happy patient showing clear aligner benefits with beautiful smile"
                    width={400}
                    height={300}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white/70 rounded-2xl p-6 shadow-lg border border-soft-pink">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-pink">6-18</div>
                  <div className="text-sm text-gray-600">months average</div>
                  <div className="text-sm text-gray-600">treatment time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Advantages */}
      <section className="py-16 pink-haze">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Lifestyle Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear aligners fit seamlessly into your lifestyle without the restrictions and inconveniences of traditional braces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {([
              {
                icon: Smile,
                title: "Eat Anything",
                description: "No food restrictions - remove aligners to enjoy all your favorite foods including popcorn, nuts, and sticky treats.",
                benefit: "Complete dietary freedom"
              },
              {
                icon: Sparkles,
                title: "Easy Cleaning",
                description: "Brush and floss normally with removable aligners. Maintain excellent oral hygiene throughout treatment.",
                benefit: "Better oral health"
              },
              {
                icon: Users,
                title: "Social Confidence",
                description: "Smile confidently in photos and social situations. No one will know you're undergoing orthodontic treatment.",
                benefit: "Unaffected social life"
              },
              {
                icon: Award,
                title: "Professional Appearance",
                description: "Perfect for business meetings, presentations, and professional photos without visible orthodontic appliances.",
                benefit: "Career-friendly treatment"
              },
              {
                icon: Heart,
                title: "Comfortable Speaking",
                description: "Minimal impact on speech. Practice presentations and important conversations without lisp or difficulty.",
                benefit: "Clear communication"
              },
              {
                icon: Shield,
                title: "Sports & Activities",
                description: "Continue playing sports and musical instruments without worry. No risk of cuts from broken brackets.",
                benefit: "Active lifestyle maintained"
              }
            ] || []).map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-soft-pink bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-soft-pink to-soft-lavender rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{advantage.description}</p>
                    <div className="bg-soft-pink rounded-lg p-2">
                      <span className="text-xs font-medium text-soft-pink">{advantage.benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinical Features */}
      <section className="py-16 bg-gradient-to-br from-soft-pink via-white to-soft-lavender">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Advanced Clinical Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern clear aligner technology incorporates sophisticated features for optimal treatment outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {([
              {
                title: "3D Digital Planning",
                description: "Advanced computer modeling creates a precise treatment plan showing exactly how your teeth will move at each stage.",
                features: ["Virtual treatment preview", "Precise force calculations", "Optimized tooth movements", "Predictable timeline"],
                icon: TrendingUp
              },
              {
                title: "Custom Fabrication",
                description: "Each aligner is individually crafted using advanced 3D printing technology for perfect fit and optimal force delivery.",
                features: ["Individual tooth control", "Precise force application", "Optimal material thickness", "Perfect fit guarantee"],
                icon: Award
              },
              {
                title: "Progressive Treatment",
                description: "Gradual, controlled tooth movement in small increments ensures comfort while achieving comprehensive results.",
                features: ["Gentle force application", "Reduced discomfort", "Controlled movement", "Stable results"],
                icon: Clock
              },
              {
                title: "Quality Materials",
                description: "Medical-grade thermoplastic materials engineered specifically for orthodontic movement and patient comfort.",
                features: ["Biocompatible materials", "Stain-resistant plastic", "Optimal flexibility", "Durable construction"],
                icon: Shield
              }
            ] || []).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-soft-lavender rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-pear-primary">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(feature.features || []).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-soft-pink flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-soft-pink/5 via-white to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Your Clear Aligner Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, predictable process to your perfectly straight smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {([
              {
                step: "01",
                title: "Smile Assessment",
                description: "Comprehensive examination and digital scanning to assess your case",
                icon: Smile,
                features: ["3D digital scan", "Bite analysis", "Treatment planning"]
              },
              {
                step: "02",
                title: "Treatment Preview",
                description: "See your new smile before you start with our digital preview technology",
                icon: Eye,
                features: ["ClinCheck preview", "Timeline estimate", "Approval process"]
              },
              {
                step: "03",
                title: "Receive Aligners",
                description: "Get your custom-made aligners and learn how to use them effectively",
                icon: Heart,
                features: ["Aligner delivery", "Wearing instructions", "Care guidance"]
              },
              {
                step: "04",
                title: "Monitor Progress",
                description: "Regular check-ups to ensure treatment is progressing as planned",
                icon: TrendingUp,
                features: ["Progress monitoring", "New aligners", "Adjustments if needed"]
              }
            ] || []).map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 border-soft-pink hover:border-soft-pink/40 transition-colors">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-soft-lavender rounded-full flex items-center justify-center">
                    <span className="text-soft-lavender font-bold text-sm">{step.step}</span>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-soft-pink to-soft-lavender rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg text-pear-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {(step.features || []).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-soft-pink flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Are Clear Aligners Right for You?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Clear aligners can effectively treat a wide range of orthodontic issues. Here are the conditions we commonly address:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {([
                  { condition: "Crowded Teeth", description: "Insufficient space causing overlapping" },
                  { condition: "Gaps & Spacing", description: "Unwanted spaces between teeth" },
                  { condition: "Overbite", description: "Upper teeth overlap lower teeth too much" },
                  { condition: "Underbite", description: "Lower teeth extend past upper teeth" },
                  { condition: "Crossbite", description: "Some upper teeth sit inside lower teeth" },
                  { condition: "Open Bite", description: "Front teeth don't meet when biting down" }
                ] || []).map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-soft-pink/5 to-soft-lavender/5 rounded-xl p-4 border border-soft-pink">
                    <h3 className="font-semibold text-pear-primary mb-2">{item.condition}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <BeforeAfterSliderPair
                primarySlider={{
                  beforeImage: "/images/before-after/BCC-before.png",
                  afterImage: "/images/before-after/BCC-after.png",
                  beforeAlt: "Patient's smile before orthodontic enhancement showing alignment and spacing concerns",
                  afterAlt: "Patient's smile after orthodontic treatment showing improved alignment and spacing",
                  title: "Orthodontic Smile Enhancement",
                  description: "See the incredible improvement in smile aesthetics achieved with our advanced orthodontic treatments",
                  treatmentType: "Clear Aligner Treatment"
                }}
                secondarySlider={{
                  beforeImage: "/images/before-after/BCC-before.png",
                  afterImage: "/images/before-after/BCC-after.png",
                  beforeAlt: "Before orthodontic treatment showing overbite and misalignment",
                  afterAlt: "After orthodontic treatment with corrected bite and straight teeth",
                  title: "Bite Correction Case",
                  description: "Comprehensive orthodontic treatment addressing both alignment and bite issues",
                  treatmentType: "ClearCorrect"
                }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6"
              />
            </div>
          </div>

          {/* Treatment Success Rate Stats */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/70 rounded-2xl p-6 shadow-lg border border-soft-lavender">
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-lavender mb-2">85%</div>
                <div className="text-sm text-gray-600">of cases treatable</div>
                <div className="text-sm text-gray-600">with clear aligners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Membership */}
      <section className="py-16 bg-gradient-to-br from-soft-pink/5 via-white to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Clear Aligner Investment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible payment options and membership discounts make your perfect smile affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Pricing */}
            <Card className="border-2 border-gray-200 hover:border-soft-pink transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pear-primary">Clear Aligners</CardTitle>
                <div className="text-4xl font-bold text-soft-pink mt-4">£2,400 - £4,500</div>
                <p className="text-gray-600">Complete treatment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {([
                    "Comprehensive assessment",
                    "Digital treatment planning",
                    "Custom aligner sets",
                    "Regular monitoring visits",
                    "Retainers included",
                    "2-year guarantee"
                  ] || []).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-pink flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-gradient-to-r from-soft-pink to-soft-lavender text-white">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Membership Pricing */}
            <Card className="border-2 border-pear-gold bg-gradient-to-br from-pear-gold/5 to-white">
              <CardHeader className="text-center">
                <Badge className="bg-pear-gold text-white mb-4">Membership Discount</Badge>
                <CardTitle className="text-2xl text-pear-primary">With Membership</CardTitle>
                <div className="text-4xl font-bold text-pear-gold mt-4">£2,160 - £4,050</div>
                <p className="text-gray-600">Complete treatment (10% off)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {([
                    "10% discount on all treatments",
                    "Free initial consultation",
                    "Priority appointment booking",
                    "Extended warranty options",
                    "Flexible payment plans",
                    "Ongoing dental care included"
                  ] || []).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/membership">
                  <Button className="w-full mt-6 btn-gold text-white">
                    Join Membership
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Payment Plans */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Make treatment affordable with flexible payment options</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 border border-soft-pink">
                <h4 className="font-semibold text-soft-pink mb-2">Payment Plans</h4>
                <p className="text-sm text-gray-600">Flexible payment options available</p>
              </Card>
              <Card className="p-6 border border-soft-pink">
                <h4 className="font-semibold text-soft-pink mb-2">Monthly Payments</h4>
                <p className="text-sm text-gray-600">From £100/month over 2-3 years</p>
              </Card>
              <Card className="p-6 border border-soft-pink">
                <h4 className="font-semibold text-soft-pink mb-2">Insurance</h4>
                <p className="text-sm text-gray-600">Orthodontic coverage may apply</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-soft-pink to-soft-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Start Your Smile Transformation
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your free smile assessment and discover how clear aligners can give you the confident smile you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-soft-pink hover:bg-white/90 font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Smile Assessment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-gold hover:bg-white hover:text-pear-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1000+ Smiles Transformed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Certified Provider</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>2 Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
