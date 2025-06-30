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
import { ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Service {
  name: string;
  slug: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  resultMetric: string;
}

interface CategoryPageProps {
  // Category info
  categoryName: string;
  categorySlug: string;
  categoryDescription: string;
  parentService: "growth-marketing" | "ai-automation";

  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroColor: "coral-red" | "forest-green" | "midnight-blue";

  // Services in this category
  services: Service[];

  // Process steps
  processSteps: {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }[];

  // Results/benefits
  categoryBenefits: string[];
  categoryMetrics: {
    metric: string;
    value: string;
    description: string;
  }[];

  // CTA
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
}

export default function CategoryPageTemplate({
  categoryName,
  categorySlug,
  categoryDescription,
  parentService,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroColor,
  services,
  processSteps,
  categoryBenefits,
  categoryMetrics,
  ctaPrimary,
  ctaSecondary,
}: CategoryPageProps) {
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
            <span className={colorClass.text}>{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${colorClass.bg} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              {heroSubtitle}
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
                <Link href={ctaPrimary.href}>
                  {ctaPrimary.text}
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
                  href={ctaSecondary.href}
                  className="text-white hover:text-midnight-blue"
                >
                  <span className="font-heading font-semibold">
                    {ctaSecondary.text}
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {categoryMetrics.map((metric, index) => (
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

      {/* Services in Category */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              {categoryName} Services
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              {categoryDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={`service-${index}-${service.slug}`}
                className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${colorClass.border}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 ${colorClass.bg} rounded-lg flex items-center justify-center`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading text-midnight-blue">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-body">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={`feature-${index}-${featureIndex}-${feature.slice(0, 10)}`}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle
                          className={`h-4 w-4 ${colorClass.text} mt-1 flex-shrink-0`}
                        />
                        <p className="font-body text-gray-600 text-sm">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div
                    className={`${colorClass.bg.replace("bg-", "bg-")}/5 p-4 rounded-lg`}
                  >
                    <div
                      className={`font-heading font-semibold ${colorClass.text} mb-1`}
                    >
                      Typical Results:
                    </div>
                    <p className="text-sm font-body text-gray-600">
                      {service.resultMetric}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full ${colorClass.border} ${colorClass.text} hover:${colorClass.bg} hover:text-white`}
                  >
                    <Link
                      href={`/${parentService}/${categorySlug}/${service.slug}`}
                    >
                      Learn More About {service.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our {categoryName} Process
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every{" "}
              {categoryName.toLowerCase()} initiative delivers maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={`step-${index}-${step.step}`} className="text-center">
                <div
                  className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div
                  className={`text-2xl font-heading font-bold ${colorClass.text} mb-2`}
                >
                  {step.step}
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

      {/* Category Benefits */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Our {categoryName} Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {categoryBenefits.map((benefit, index) => (
                  <div
                    key={`benefit-${index}-${benefit.slice(0, 20)}`}
                    className="flex items-start space-x-4"
                  >
                    <div
                      className={`w-8 h-8 ${colorClass.bg} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-body text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-2xl border border-gray-100">
              <h4 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
                Ready to Get Started?
              </h4>
              <div className="space-y-4">
                <Button
                  asChild
                  className={`w-full ${colorClass.bg} hover:${colorClass.bg}/90 text-white`}
                >
                  <Link href={ctaPrimary.href}>
                    {ctaPrimary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={`w-full ${colorClass.border} ${colorClass.text} hover:${colorClass.bg} hover:text-white`}
                >
                  <Link href={ctaSecondary.href}>
                    {ctaSecondary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
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
