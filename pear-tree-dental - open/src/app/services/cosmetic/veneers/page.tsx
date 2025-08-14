import {
  ArrowRight,
  Check,
  Crown,
  Heart,
  Mail,
  Microscope,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Dental Veneers | Ultra-Thin, Porcelain & Composite Options | Pear Tree Dental",
  description:
    "Transform your smile with dental veneers in Burton Joyce. Choose from ultra-thin contact lens, traditional porcelain, or same-day composite veneers. Expert cosmetic dentistry.",
  keywords: [
    "dental veneers Burton Joyce",
    "porcelain veneers Nottinghamshire",
    "ultra-thin veneers",
    "composite veneers",
    "smile makeover",
    "cosmetic dentistry",
    "tooth veneers",
    "smile transformation",
  ],
  openGraph: {
    title: "Dental Veneers | Transform Your Smile | Pear Tree Dental",
    description:
      "Transform your smile with dental veneers. Ultra-thin, porcelain, or composite options available. Expert cosmetic dentistry in Burton Joyce.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/veneers",
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/veneers",
  },
};

export default function VeneersPage() {
  const breadcrumbItems = [
    { name: "Services", href: "/services" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Dental Veneers" },
  ];

  const veneerTypes = [
    {
      id: "ultra-thin",
      name: "Ultra-Thin Contact Lens Veneers",
      tagline: "Revolutionary 0.2mm Technology",
      description:
        "The most conservative approach to smile transformation with minimal tooth preparation required",
      price: "From £450",
      duration: "2-3 visits",
      lifespan: "10-15 years",
      color: "soft-pink",
      icon: Microscope,
      href: "/services/cosmetic/veneers/ultra-thin",
      features: [
        "0.2mm thickness - thinner than a contact lens",
        "Minimal to no tooth preparation",
        "Often reversible treatment",
        "Natural translucency",
        "Conservative approach",
      ],
      idealFor: [
        "Minor cosmetic corrections",
        "Patients wanting to preserve tooth structure",
        "Those seeking reversible options",
        "Natural-looking enhancements",
      ],
      badge: "Most Conservative",
    },
    {
      id: "porcelain",
      name: "Traditional Porcelain Veneers",
      tagline: "The Gold Standard",
      description:
        "Premium porcelain veneers offering superior durability and comprehensive smile transformations",
      price: "From £650",
      duration: "2-3 visits",
      lifespan: "10-20 years",
      color: "pear-gold",
      icon: Crown,
      href: "/services/cosmetic/veneers/porcelain",
      features: [
        "Superior durability and strength",
        "Excellent stain resistance",
        "Master-crafted ceramics",
        "Comprehensive corrections",
        "Natural appearance",
      ],
      idealFor: [
        "Major smile makeovers",
        "Severe discoloration or damage",
        "Long-term investment",
        "Maximum aesthetic results",
      ],
      badge: "Most Popular",
    },
    {
      id: "composite",
      name: "Composite Veneers",
      tagline: "Same-Day Transformation",
      description:
        "Affordable, immediate smile enhancement completed in a single appointment",
      price: "From £180",
      duration: "Same day",
      lifespan: "5-7 years",
      color: "dental-green",
      icon: Zap,
      href: "/services/cosmetic/veneers/composite",
      features: [
        "Completed in one visit",
        "Most budget-friendly option",
        "Easily repairable",
        "Minimal preparation",
        "Immediate results",
      ],
      idealFor: [
        "Budget-conscious patients",
        "Immediate smile needs",
        "Trial cosmetic changes",
        "Quick corrections",
      ],
      badge: "Most Affordable",
    },
  ];

  const commonBenefits = [
    {
      icon: Sparkles,
      title: "Instant Confidence Boost",
      description:
        "Transform your smile and boost your self-confidence with natural-looking results",
    },
    {
      icon: Shield,
      title: "Stain Resistant",
      description:
        "Maintain your bright, white smile with materials that resist everyday staining",
    },
    {
      icon: Heart,
      title: "Natural Appearance",
      description:
        "Custom-designed to complement your facial features and look completely natural",
    },
    {
      icon: Target,
      title: "Precise Fit",
      description:
        "Each veneer is carefully crafted for perfect fit, comfort, and optimal function",
    },
  ];

  const treatmentProcess = [
    {
      step: 1,
      title: "Consultation & Assessment",
      description:
        "Comprehensive evaluation of your smile goals and oral health to determine the best veneer option for you",
    },
    {
      step: 2,
      title: "Treatment Planning",
      description:
        "Digital smile design and treatment planning with preview of your expected results",
    },
    {
      step: 3,
      title: "Preparation & Fabrication",
      description:
        "Tooth preparation (if needed) and custom veneer creation using advanced materials and techniques",
    },
    {
      step: 4,
      title: "Placement & Finishing",
      description:
        "Precise placement, bonding, and final adjustments for perfect fit and beautiful results",
    },
  ];

  const faqs = [
    {
      question: "Which type of veneer is right for me?",
      answer:
        "The best veneer type depends on your specific needs, budget, and goals. Ultra-thin veneers are ideal for minor corrections with minimal preparation, porcelain veneers offer maximum durability for major transformations, and composite veneers provide immediate, affordable results. We'll assess your situation during consultation to recommend the best option.",
    },
    {
      question: "How long do veneers last?",
      answer:
        "Lifespan varies by type: composite veneers last 5-7 years, ultra-thin veneers last 10-15 years, and traditional porcelain veneers can last 10-20 years with proper care. Regular dental visits and good oral hygiene help maximize their longevity.",
    },
    {
      question: "Are veneers painful to get?",
      answer:
        "Most patients experience minimal discomfort during veneer placement. Local anesthesia is used when tooth preparation is needed. Ultra-thin and composite veneers often require little to no anesthesia due to minimal preparation required.",
    },
    {
      question: "Can veneers be whitened?",
      answer:
        "Veneers don't respond to traditional whitening treatments. However, they're designed to resist staining and maintain their color. If you want whiter veneers, new ones would need to be made in a lighter shade.",
    },
    {
      question: "How much do veneers cost?",
      answer:
        "Costs vary by type: composite veneers from £180, ultra-thin veneers from £450, and porcelain veneers from £650 per tooth. We offer financing options and will provide a detailed cost estimate during your consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="Dental Veneers"
        description="Comprehensive dental veneer options including ultra-thin, porcelain, and composite veneers for smile transformation"
        price="From £180 per veneer"
        category="Cosmetic Dentistry"
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbSchema items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pear-primary text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Smile Transformation
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
              Transform Your Smile with
              <span className="block text-dental-green">Dental Veneers</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the perfect veneer solution for your smile. Choose from
              ultra-thin contact lens veneers, traditional porcelain, or
              same-day composite options.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />3 veneer options
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Expert consultation
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Natural results
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-dental-green hover:bg-dental-green/90 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services/treatment-comparison">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Compare Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Veneer Types Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Choose Your Perfect Veneer Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each veneer type offers unique advantages. Find the perfect match
              for your smile goals, budget, and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {(veneerTypes || []).map((veneer, index) => {
              const IconComponent = veneer.icon;
              const colorClasses = {
                "soft-pink": "bg-soft-pink border-soft-pink/30",
                "pear-gold": "bg-pear-gold border-pear-gold/30",
                "dental-green": "bg-dental-green border-dental-green/30",
              };

              return (
                <Card
                  key={veneer.id}
                  className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 1 ? "scale-105 border-2 border-pear-gold" : ""}`}
                >
                  {veneer.badge && (
                    <Badge
                      className={`absolute top-4 right-4 ${veneer.color === "pear-gold" ? "bg-pear-gold" : veneer.color === "soft-pink" ? "bg-soft-pink" : "bg-dental-green"} text-white`}
                    >
                      {veneer.badge}
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-full ${colorClasses[veneer.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-pear-primary">
                      {veneer.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-500">
                      {veneer.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-600 text-center">
                      {veneer.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-pear-primary">
                          {veneer.price}
                        </div>
                        <div className="text-xs text-gray-500">per tooth</div>
                      </div>
                      <div>
                        <div className="font-semibold text-pear-primary">
                          {veneer.duration}
                        </div>
                        <div className="text-xs text-gray-500">treatment</div>
                      </div>
                      <div>
                        <div className="font-semibold text-pear-primary">
                          {veneer.lifespan}
                        </div>
                        <div className="text-xs text-gray-500">lifespan</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pear-primary mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {veneer.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pear-primary mb-3">
                        Ideal For:
                      </h4>
                      <ul className="space-y-2">
                        {veneer.idealFor.slice(0, 2).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <Star className="w-4 h-4 text-pear-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={veneer.href}>
                      <Button
                        className="w-full"
                        variant={index === 1 ? "default" : "outline"}
                      >
                        Learn More About {veneer.name.split(" ")[0]} Veneers
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Compare All Veneer Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Side-by-side comparison to help you make the best choice for your
              smile
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-pear-primary text-white">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-soft-pink/20">
                    Ultra-Thin
                  </th>
                  <th className="text-center p-4 font-semibold bg-pear-gold/20">
                    Porcelain
                  </th>
                  <th className="text-center p-4 font-semibold bg-dental-green/20">
                    Composite
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Thickness</td>
                  <td className="p-4 text-center">0.2-0.3mm</td>
                  <td className="p-4 text-center">0.5-0.7mm</td>
                  <td className="p-4 text-center">1-2mm</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Preparation Required</td>
                  <td className="p-4 text-center">Minimal/None</td>
                  <td className="p-4 text-center">Moderate</td>
                  <td className="p-4 text-center">Minimal</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Treatment Time</td>
                  <td className="p-4 text-center">2-3 visits</td>
                  <td className="p-4 text-center">2-3 visits</td>
                  <td className="p-4 text-center">Same day</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Durability</td>
                  <td className="p-4 text-center">10-15 years</td>
                  <td className="p-4 text-center">10-20 years</td>
                  <td className="p-4 text-center">5-7 years</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Reversible</td>
                  <td className="p-4 text-center">Often yes</td>
                  <td className="p-4 text-center">No</td>
                  <td className="p-4 text-center">Yes</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">Cost Range</td>
                  <td className="p-4 text-center">£450-650</td>
                  <td className="p-4 text-center">£650-900</td>
                  <td className="p-4 text-center">£180-350</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="p-4 text-center text-sm">
                    Conservative corrections
                  </td>
                  <td className="p-4 text-center text-sm">
                    Major transformations
                  </td>
                  <td className="p-4 text-center text-sm">
                    Immediate, budget-friendly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Why Choose Veneers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits that all veneer types share
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(commonBenefits || []).map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-pear-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Your Veneer Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive process tailored to your chosen veneer type
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {(treatmentProcess || []).map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about dental veneers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {(faqs || []).map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-pear-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a consultation to discover which veneer option is perfect for
            your smile goals and budget
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01159312935">
              <Button
                size="lg"
                className="bg-white text-pear-primary hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </a>
            <Link href="/book">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pear-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Book Online Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {(veneerTypes || []).map((veneer) => (
              <Link key={veneer.id} href={veneer.href}>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Learn About {veneer.name.split(" ")[0]} Veneers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
