import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Cpu,
  Heart,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "About Martin & Postino | Growth Marketing & AI Automation Expert",
  description: "Meet Martin, founder of Postino. 15+ years helping SMEs scale through strategic marketing and AI automation. Expert in B2B UX, LinkedIn marketing, and Total Search optimization.",
  path: "/about",
  keywords: "Martin Postino, marketing expert Nottingham, AI automation specialist, B2B UX design, LinkedIn marketing, Total Search optimization, client empowerment, business growth consultant",
  changeFreq: "monthly",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">About Postino</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Where Human Creativity Meets
              <span className="text-coral-red"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              We believe the future of marketing isn't about replacing human
              expertise with AI—it's about amplifying human creativity, insight,
              and strategic thinking with intelligent automation. This unique
              hybrid approach is what makes Postino different.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/growth-consultation">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
              >
                <Link
                  href="/case-studies"
                  className="text-coral-red hover:text-midnight-blue"
                >
                  <span className="font-heading font-semibold">
                    See Our Results
                  </span>
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Hybrid Philosophy
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              The most successful growth strategies emerge when human insight
              and artificial intelligence work in perfect harmony. Here's how we
              make it happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-6">
                The Power of Human + AI
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Human Creativity & Strategy
                    </h4>
                    <p className="font-body text-gray-600">
                      Our team brings deep industry experience, creative
                      problem-solving, and strategic thinking that understands
                      the nuances of your business and market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      AI Enhancement & Scale
                    </h4>
                    <p className="font-body text-gray-600">
                      Advanced AI augments our expertise with data-driven
                      insights, automated execution, and the ability to scale
                      successful strategies efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-midnight-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Synergistic Results
                    </h4>
                    <p className="font-body text-gray-600">
                      The combination delivers results that neither human
                      expertise nor AI alone could achieve— more creative, more
                      efficient, and more effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 right-8 w-2 h-2 bg-coral-red/30 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-8 left-6 w-1 h-1 bg-forest-green/40 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-12 left-1/3 w-1.5 h-1.5 bg-midnight-blue/20 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <h4 className="text-2xl font-heading font-bold text-midnight-blue mb-2 text-center relative z-10">
                Why This Approach Works
              </h4>
              <p className="text-center text-gray-600 font-heading mb-8 relative z-10">
                The perfect blend delivers exponential results
              </p>

              <div className="space-y-6 relative z-10">
                {/* Strategic Insight */}
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-coral-red/5 via-coral-red/3 to-transparent rounded-xl border border-coral-red/10 hover:border-coral-red/30 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-coral-red rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-gray-800">
                          Strategic Insight
                        </span>
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-coral-red h-2 rounded-full animate-pulse"
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-heading font-bold text-coral-red bg-coral-red/10 px-3 py-1 rounded-full">
                      Human-Led
                    </span>
                  </div>
                </div>

                {/* Data Processing */}
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-forest-green/5 via-forest-green/3 to-transparent rounded-xl border border-forest-green/10 hover:border-forest-green/30 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-forest-green rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-gray-800">
                          Data Processing
                        </span>
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-forest-green h-2 rounded-full animate-pulse"
                            style={{ width: "95%", animationDelay: "0.5s" }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-heading font-bold text-forest-green bg-forest-green/10 px-3 py-1 rounded-full">
                      AI-Enhanced
                    </span>
                  </div>
                </div>

                {/* Creative Solutions */}
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-midnight-blue/5 via-midnight-blue/3 to-transparent rounded-xl border border-midnight-blue/10 hover:border-midnight-blue/30 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-midnight-blue rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-gray-800">
                          Creative Solutions
                        </span>
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-midnight-blue h-2 rounded-full animate-pulse"
                            style={{ width: "90%", animationDelay: "1s" }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-heading font-bold text-midnight-blue bg-midnight-blue/10 px-3 py-1 rounded-full">
                      Human-Led
                    </span>
                  </div>
                </div>

                {/* Execution & Scale */}
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-coral-red/5 via-coral-red/3 to-transparent rounded-xl border border-coral-red/10 hover:border-coral-red/30 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-coral-red rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-gray-800">
                          Execution & Scale
                        </span>
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-coral-red h-2 rounded-full animate-pulse"
                            style={{ width: "88%", animationDelay: "1.5s" }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-heading font-bold text-coral-red bg-coral-red/10 px-3 py-1 rounded-full">
                      AI-Enhanced
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom stat */}
              <div className="mt-6 text-center p-4 bg-gradient-to-r from-forest-green/10 to-coral-red/10 rounded-lg border border-gray-100 relative z-10">
                <p className="text-sm font-heading font-semibold text-midnight-blue">
                  ={" "}
                  <span className="text-2xl font-bold text-coral-red">3x</span>{" "}
                  Better Results Than Traditional Approaches
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
                Our Story
              </h2>
              <p className="text-xl font-body text-gray-600">
                Born from the recognition that SMEs need more than traditional
                marketing— they need intelligent, scalable growth solutions.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-coral-red">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    The Problem We Saw
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 leading-relaxed">
                    Traditional marketing agencies were still operating with
                    outdated methods, while tech companies focused purely on
                    automation without strategic insight. SMEs were caught in
                    the middle—needing expert marketing guidance but also
                    requiring efficiency and scalability that only modern AI
                    could provide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-forest-green">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    Our Breakthrough Insight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 leading-relaxed">
                    We realized that the most powerful growth strategies emerge
                    when human creativity and strategic thinking are amplified
                    by AI capabilities. Not replacement, but enhancement. Not
                    automation for automation's sake, but intelligent systems
                    that make human expertise more impactful.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-midnight-blue">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    The Postino Difference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 leading-relaxed">
                    Today, we're proud to be the agency that seamlessly blends
                    decades of marketing expertise with cutting-edge AI
                    innovation. Our clients don't just get marketing services or
                    automation tools— they get intelligent growth systems that
                    evolve, learn, and scale with their ambitions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Postino? */}
      <section className="py-20 bg-gradient-to-br from-warm-white via-soft-gray to-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
                Why "Postino"?
              </h2>
              <p className="text-xl font-heading text-gray-600">
                Every great brand has a story. Here's ours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Story Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-3 bg-coral-red/10 px-4 py-2 rounded-full mb-4">
                      <span className="text-2xl">🇮🇹</span>
                      <span className="font-heading font-semibold text-coral-red">
                        Italian Heritage
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
                      The Trusted Messenger
                    </h3>
                  </div>

                  <div className="space-y-4 font-heading text-gray-700 leading-relaxed">
                    <p>
                      <span className="font-bold text-coral-red">
                        "Postino"
                      </span>{" "}
                      is Italian for "mailman" — the trusted figure who delivers
                      what matters most, rain or shine, without fail.
                    </p>

                    <p>
                      In Italian culture, the postino isn't just someone who
                      drops off letters. They're a reliable presence in the
                      community, someone who understands that what they carry
                      could change lives — whether it's news from loved ones,
                      important documents, or opportunities that shape the
                      future.
                    </p>

                    <p>
                      <span className="font-bold text-midnight-blue">
                        We chose this name because it embodies our promise:
                      </span>
                      <span className="italic text-coral-red">
                        {" "}
                        We deliver every time.
                      </span>
                    </p>

                    <p>
                      When we commit to your growth, when we promise results,
                      when we say we'll transform your business — we deliver.
                      Not just once, but consistently, reliably, with the same
                      dedication as that trusted postino who's been serving his
                      community for decades.
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-coral-red/5 to-forest-green/5 rounded-xl border border-coral-red/10">
                    <blockquote className="text-lg font-heading italic text-midnight-blue text-center">
                      "Your success is our delivery. Every time."
                    </blockquote>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="bg-gradient-to-br from-coral-red via-coral-red/90 to-forest-green p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full" />
                  <div className="absolute bottom-8 left-6 w-12 h-12 border border-white/30 rounded-full" />
                  <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse" />

                  <div className="text-center relative z-10">
                    <div className="mb-8">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <span className="text-4xl">📮</span>
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-white mb-2">
                        Reliability
                      </h4>
                      <p className="text-white/90 font-heading">
                        Like the trusted postino
                      </p>
                    </div>

                    <div className="space-y-4 text-white">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <span className="font-heading font-semibold">
                          We deliver results
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <span className="font-heading font-semibold">
                          We deliver on time
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-white rounded-full" />
                        <span className="font-heading font-semibold">
                          We deliver every time
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-3xl font-heading font-bold text-white">
                        100%
                      </p>
                      <p className="text-white/90 font-heading text-sm">
                        Delivery Success Rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="text-center mt-12">
              <p className="text-lg font-heading text-gray-600 max-w-2xl mx-auto">
                This isn't just our name — it's our commitment. When you work
                with Postino, you're working with a team that takes pride in
                delivering exactly what we promise,
                <span className="font-bold text-coral-red">
                  {" "}
                  every single time
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              What Drives Us
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our core values shape every strategy we develop and every solution
              we implement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Innovation with Purpose
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  We don't adopt technology for its own sake. Every AI
                  implementation and automation must serve a clear purpose:
                  accelerating your growth and improving your results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  True Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  We become an extension of your team, deeply understanding your
                  vision, challenges, and aspirations. Your success is our
                  success, and we're invested for the long term.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Measurable Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Every strategy is designed with clear, measurable outcomes. We
                  track what matters and continuously optimize to ensure you see
                  real, quantifiable business growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Proven Results
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our hybrid approach delivers exceptional outcomes for SMEs across
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                50+
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                SMEs Transformed
              </div>
              <p className="font-body text-gray-600 text-sm">
                Businesses across industries achieving exceptional growth
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-forest-green mb-2">
                300%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Average Growth
              </div>
              <p className="font-body text-gray-600 text-sm">
                Increase in key performance metrics within 12 months
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-2">
                40hrs
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Weekly Time Saved
              </div>
              <p className="font-body text-gray-600 text-sm">
                Through intelligent automation and optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                95%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Client Retention
              </div>
              <p className="font-body text-gray-600 text-sm">
                Long-term partnerships built on consistent results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Meet Your Growth Team
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team combines marketing mastery with
              technical expertise to deliver comprehensive growth solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Growth Strategists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Expert marketers who understand SME challenges and develop
                  winning growth strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  AI Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Technical experts who design and implement intelligent
                  automation solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Data Analysts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Analytics professionals who turn data into actionable insights
                  and optimization opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Creative Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Designers and content creators who bring strategies to life
                  with compelling, results-driven creative.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Experience the Postino Difference?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Discover how our unique blend of human expertise and AI innovation
            can transform your business growth. Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book Your Growth Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/case-studies"
                className="text-coral-red hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  Explore Success Stories
                </span>
                <Award className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Where growth meets AI innovation. Helping SMEs achieve
                measurable success through expert marketing and intelligent
                automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-services"
                    className="hover:text-white transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-strategy"
                    className="hover:text-white transition-colors"
                  >
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Strategy Session
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    Automation Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
