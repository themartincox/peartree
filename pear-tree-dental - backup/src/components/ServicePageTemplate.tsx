import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
}

interface ServicePageProps {
  // Service identification
  serviceName: string;
  serviceSlug: string;
  categoryName: string;
  categorySlug: string;
  parentService: "growth-marketing" | "ai-automation";

  // Hero section
  heroTitle: string;
  heroDescription: string;
  heroColor: "coral-red" | "forest-green" | "midnight-blue";

  // Service overview
  serviceOverview: string;
  keyBenefits: string[];

  // Features and deliverables
  serviceFeatures: ServiceFeature[];

  // Process
  processSteps: ProcessStep[];

  // Results and metrics
  resultMetrics: {
    metric: string;
    value: string;
    description: string;
  }[];

  // Case study
  caseStudy: CaseStudy;

  // Pricing/investment
  investmentInfo: {
    description: string;
    startingFrom?: string;
    consultationPrice?: string;
  };

  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];

  // Related services
  relatedServices: {
    name: string;
    slug: string;
    description: string;
  }[];
}

export default function ServicePageTemplate({
  serviceName,
  serviceSlug,
  categoryName,
  categorySlug,
  parentService,
  heroTitle,
  heroDescription,
  heroColor,
  serviceOverview,
  keyBenefits,
  serviceFeatures,
  processSteps,
  resultMetrics,
  caseStudy,
  investmentInfo,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const colorClasses = {
    "coral-red": {
      bg: "bg-coral-red",
      text: "text-coral-red",
      border: "border-coral-red",
    },
    "forest-green": {
      bg: "bg-forest-green",
      text: "text-forest-green",
      border: "border-forest-green",
    },
    "midnight-blue": {
      bg: "bg-midnight-blue",
      text: "text-midnight-blue",
      border: "border-midnight-blue",
    },
  };

  const colorClass = colorClasses[heroColor];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-soft-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-midnight-blue transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${parentService}`}
              className="hover:text-midnight-blue transition-colors capitalize"
            >
              {parentService.replace("-", " ")}
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${parentService}/${categorySlug}`}
              className="hover:text-midnight-blue transition-colors"
            >
              {categoryName}
            </Link>
            <span className="mx-2">/</span>
            <span className={colorClass.text}>{serviceName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${colorClass.bg} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              {categoryName} Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-midnight-blue hover:bg-white/90"
              >
                <Link href="/growth-consultation">
                  Get Your Strategy Session
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
                  className="text-white hover:text-midnight-blue"
                >
                  <span className="font-heading font-semibold">
                    View Results
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resultMetrics.map((metric, index) => (
              <div
                key={`metric-${index}-${metric.metric.replace(/\s+/g, "-")}`}
                className="text-center"
              >
                <div
                  className={`text-4xl lg:text-5xl font-heading font-bold ${colorClass.text} mb-2`}
                >
                  {metric.value}
                </div>
                <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                  {metric.metric}
                </div>
                <p className="font-body text-gray-600 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
                What Is {serviceName}?
              </h2>
              <p className="text-lg font-body text-gray-600 mb-8 leading-relaxed">
                {serviceOverview}
              </p>

              <h3 className="text-xl font-heading font-bold text-midnight-blue mb-4">
                Key Benefits:
              </h3>
              <div className="space-y-3">
                {keyBenefits.map((benefit, index) => (
                  <div
                    key={`benefit-${index}-${benefit.slice(0, 20)}`}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle
                      className={`h-5 w-5 ${colorClass.text} mt-1 flex-shrink-0`}
                    />
                    <p className="font-body text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
              <h4 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
                {serviceName} Results
              </h4>
              <div className="space-y-4">
                {resultMetrics.map((metric, index) => (
                  <div
                    key={`result-${index}-${metric.metric.replace(/\s+/g, "-")}`}
                    className={`p-4 bg-gradient-to-r from-${heroColor}/5 to-${heroColor}/10 rounded-lg`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-semibold text-gray-800">
                        {metric.metric}
                      </span>
                      <span
                        className={`text-2xl font-heading font-bold ${colorClass.text}`}
                      >
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-sm font-body text-gray-600 mt-1">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              What's Included in Our {serviceName} Service
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Comprehensive {serviceName.toLowerCase()} solutions designed to
              deliver maximum impact for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={`feature-${index}-${feature.title.replace(/\s+/g, "-")}`}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-sm text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our {serviceName} Process
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              A proven step-by-step approach that ensures your{" "}
              {serviceName.toLowerCase()} delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={`step-${index}-${step.step}`} className="text-center">
                <div
                  className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl font-heading font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              {serviceName} Success Story
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardHeader className={`${colorClass.bg} text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-heading">
                    {caseStudy.company}
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    {caseStudy.industry}
                  </CardDescription>
                </div>
                <Badge className="bg-white/20 text-white">
                  {caseStudy.metric}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading font-semibold text-coral-red mb-3">
                    Challenge
                  </h4>
                  <p className="font-body text-gray-600 mb-6">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-forest-green mb-3">
                    Result
                  </h4>
                  <p className="font-body text-gray-600">{caseStudy.result}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Investment & Next Steps
            </h2>
          </div>

          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
                    {serviceName} Investment
                  </h3>
                  <p className="font-body text-gray-600 mb-6">
                    {investmentInfo.description}
                  </p>
                  {investmentInfo.startingFrom && (
                    <div className={`p-4 ${colorClass.bg}/5 rounded-lg mb-6`}>
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-semibold text-gray-800">
                          Starting from:
                        </span>
                        <span
                          className={`text-2xl font-heading font-bold ${colorClass.text}`}
                        >
                          {investmentInfo.startingFrom}
                        </span>
                      </div>
                    </div>
                  )}
                  {investmentInfo.consultationPrice && (
                    <div className="flex items-center space-x-3 mb-6">
                      <CheckCircle className={`h-5 w-5 ${colorClass.text}`} />
                      <span className="font-body text-gray-600">
                        Includes {investmentInfo.consultationPrice} strategy
                        consultation
                      </span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <Button
                    asChild
                    className={`w-full ${colorClass.bg} hover:${colorClass.bg}/90 text-white`}
                  >
                    <Link href="/growth-consultation">
                      Book Strategy Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full ${colorClass.border} ${colorClass.text} hover:${colorClass.bg} hover:text-white`}
                  >
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={`faq-${index}-${faq.question.slice(0, 20)}`}
                className="bg-white shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Related Services
            </h2>
            <p className="text-xl font-body text-gray-600">
              Explore other services that complement {serviceName.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Card
                key={`related-${index}-${service.slug}`}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full ${colorClass.border} ${colorClass.text} hover:${colorClass.bg} hover:text-white`}
                  >
                    <Link
                      href={
                        service.slug.startsWith("../")
                          ? `/${parentService}/${service.slug.replace(/^\.\.\//, "")}`
                          : `/${parentService}/${categorySlug}/${service.slug}`
                      }
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
}
