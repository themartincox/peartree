import React from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Camera,
  Clock,
  Crown,
  Eye,
  Heart,
  Phone,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Digital Smile Design - Preview Your Perfect Smile | Pear Tree Dental",
  description:
    "See exactly how your new smile will look with our digital smile design technology in Burton Joyce. FREE consultation worth £150. Book your smile preview today.",
  keywords: [
    "digital smile design Burton Joyce",
    "smile preview Nottingham",
    "virtual smile makeover",
    "cosmetic dentistry consultation Burton Joyce",
    "smile transformation preview",
    "digital dentistry Nottinghamshire",
  ],
  openGraph: {
    title:
      "Digital Smile Design - Preview Your Perfect Smile | Pear Tree Dental",
    description:
      "See your perfect smile before treatment begins with our advanced digital smile design technology",
    type: "website",
    url: "https://peartree.dental/services/smile-design",
  },
  alternates: {
    canonical: "https://peartree.dental/services/smile-design",
  },
};

export default function SmileDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pear-gold/10 via-white to-pear-background/20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pear-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pear-primary rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-pear-gold text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  FREE Consultation Worth £150
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Design Your
                  <span className="block text-pear-gold">Perfect Smile</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Discover what your dream smile could look like with our
                  revolutionary digital smile design technology. See your
                  transformation before any treatment begins – completely FREE.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-gold text-white font-semibold group"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book FREE Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">100%</div>
                  <div className="text-sm text-gray-600">Digital preview</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">FREE</div>
                  <div className="text-sm text-gray-600">No obligation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">60min</div>
                  <div className="text-sm text-gray-600">Consultation</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      SMILE DESIGN HERO IMAGE
                    </h3>
                    <p className="text-gray-600">
                      Before/after smile transformation with digital preview
                    </p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-pear-gold/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pear-gold rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">
                      See Before You Decide
                    </p>
                    <p className="text-sm text-gray-600">Digital Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              What's Included in Your FREE Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive consultation gives you everything you need to
              make an informed decision about your smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              [
                {
                  icon: Camera,
                  title: "Digital Smile Analysis",
                  description:
                    "High-resolution photos and 3D scanning to capture every detail of your current smile",
                  value: "Worth £50",
                },
                {
                  icon: Eye,
                  title: "Virtual Smile Preview",
                  description:
                    "See exactly how your new smile will look using advanced digital design technology",
                  value: "Worth £75",
                },
                {
                  icon: Crown,
                  title: "Treatment Planning",
                  description:
                    "Personalized treatment options with clear timelines and expected outcomes",
                  value: "Worth £25",
                },
                {
                  icon: Shield,
                  title: "Expert Consultation",
                  description:
                    "60 minutes with our experienced cosmetic dentist discussing your goals",
                  value: "Included",
                },
                {
                  icon: Zap,
                  title: "Instant Results",
                  description:
                    "Walk away with your smile design on the same day - no waiting required",
                  value: "Included",
                },
                {
                  icon: Heart,
                  title: "No Pressure Discussion",
                  description:
                    "Honest advice about what's possible with no obligation to proceed",
                  value: "Included",
                },
              ] || []
            ).map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-pear-gold/20 hover:border-pear-gold/40 transition-colors"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-pear-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <Badge
                        variant="outline"
                        className="border-pear-gold text-pear-gold"
                      >
                        {item.value}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-pear-gold/10 to-pear-gold/5 rounded-2xl p-8 max-w-2xl mx-auto border border-pear-gold/20">
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Total Value: £150
              </h3>
              <p className="text-lg text-pear-gold font-semibold mb-4">
                Your Price: FREE
              </p>
              <p className="text-gray-600">
                Limited time offer - book your consultation today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Technology */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Advanced Digital Smile Design
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Using cutting-edge technology, we can show you exactly how
                different treatments will transform your smile. No guesswork, no
                surprises – just clear visual results.
              </p>

              <div className="space-y-6">
                {(
                  [
                    {
                      step: "1",
                      title: "Digital Photography",
                      description:
                        "High-resolution images capture every detail of your current smile from multiple angles.",
                    },
                    {
                      step: "2",
                      title: "3D Smile Modeling",
                      description:
                        "Advanced software creates a precise 3D model of your teeth and facial structure.",
                    },
                    {
                      step: "3",
                      title: "Design & Preview",
                      description:
                        "We digitally design your new smile and show you the transformation instantly.",
                    },
                    {
                      step: "4",
                      title: "Treatment Planning",
                      description:
                        "Create a step-by-step plan to achieve your desired results with clear timelines.",
                    },
                  ] || []
                ).map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-10 h-10 bg-pear-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-pear-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-700 mb-2">
                      DIGITAL TECHNOLOGY IMAGE
                    </h3>
                    <p className="text-gray-600">
                      Computer screen showing smile design software
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Smile Transformation Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              During your consultation, we'll discuss which treatments could
              give you your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(
              [
                {
                  title: "Porcelain Veneers",
                  description:
                    "Ultra-thin shells that create an instant perfect smile",
                  timeframe: "2-3 visits",
                  price: "From £450/tooth",
                },
                {
                  title: "Invisalign",
                  description:
                    "Invisible aligners that straighten teeth discreetly",
                  timeframe: "6-18 months",
                  price: "From £2,800",
                },
                {
                  title: "Teeth Whitening",
                  description:
                    "Professional whitening for a brighter, whiter smile",
                  timeframe: "1-2 visits",
                  price: "From £350",
                },
                {
                  title: "Composite Bonding",
                  description:
                    "Tooth-colored resin to reshape and perfect teeth",
                  timeframe: "1 visit",
                  price: "From £150/tooth",
                },
              ] || []
            ).map((treatment, index) => (
              <Card
                key={index}
                className="p-6 border border-gray-200 hover:border-pear-gold/40 transition-colors"
              >
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-pear-primary">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {treatment.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-gold" />
                      <span className="text-sm text-gray-700">
                        {treatment.timeframe}
                      </span>
                    </div>
                    <div className="text-pear-gold font-semibold">
                      {treatment.price}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All treatments include 10% discount with membership plans
            </p>
            <Button
              size="lg"
              className="bg-pear-primary hover:bg-pear-primary/90 text-white"
            >
              Explore Treatment Options
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Real Patient Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our smile design consultations have transformed lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(
              [
                {
                  name: "Sarah M.",
                  treatment: "Porcelain Veneers",
                  quote:
                    "The digital preview showed me exactly what to expect. My new smile exceeded even those expectations!",
                  result: "6 veneers, confidence transformed",
                },
                {
                  name: "James T.",
                  treatment: "Invisalign",
                  quote:
                    "Seeing my future smile before starting treatment gave me the confidence to go ahead. Best decision ever.",
                  result: "18 months treatment, perfectly straight",
                },
                {
                  name: "Emma L.",
                  treatment: "Composite Bonding",
                  quote:
                    "I was amazed how much difference small changes could make. The preview helped me understand the process.",
                  result: "Same day treatment, natural results",
                },
              ] || []
            ).map((story, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-pear-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{story.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-pear-primary">
                      {story.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {story.treatment}
                    </div>
                    <div className="text-sm text-pear-gold font-medium mt-1">
                      {story.result}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-gold to-pear-gold/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready to See Your New Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your FREE smile design consultation today. No obligations, no
              pressure – just discover what's possible for your smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-pear-gold hover:bg-white/90 font-semibold"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Book FREE Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pear-gold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </div>

            {/* Urgency & Trust */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Limited FREE consultations available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>No obligation or pressure</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Award-winning practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pear-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our smile design consultation
              </p>
            </div>

            <div className="space-y-6">
              {(
                [
                  {
                    question: "Is the consultation really free?",
                    answer:
                      "Yes, absolutely! Our smile design consultation normally costs £150, but we're offering it completely free for a limited time. There are no hidden costs or obligations.",
                  },
                  {
                    question: "How long does the consultation take?",
                    answer:
                      "The consultation takes approximately 60 minutes. This includes digital photography, smile analysis, design preview, and discussion of your treatment options.",
                  },
                  {
                    question: "Will I see results on the same day?",
                    answer:
                      "Yes! We'll show you a digital preview of your potential new smile during your appointment. You'll walk away with images showing exactly how different treatments could transform your smile.",
                  },
                  {
                    question: "Am I obligated to have treatment?",
                    answer:
                      "Not at all. This is a no-obligation consultation designed to help you understand your options. You're free to take time to consider or seek other opinions.",
                  },
                  {
                    question: "What if I decide to proceed with treatment?",
                    answer:
                      "If you choose to go ahead, we'll create a detailed treatment plan with clear timelines and costs. We offer flexible payment options and membership discounts to make treatment affordable.",
                  },
                ] || []
              ).map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-pear-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
