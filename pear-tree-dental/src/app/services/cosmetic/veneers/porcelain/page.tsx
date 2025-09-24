import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import {
  Check,
  Star,
  Users,
  Shield,
  Heart,
  Clock,
  ArrowRight,
  X,
  Phone,
  Mail,
  Diamond,
  Sparkles,
  Target,
  Zap,
  Palette,
  ShieldCheck,
  Crown,
  Hammer
} from "lucide-react";

export const metadata: Metadata = {
  title: "Porcelain Veneers Burton Joyce | Premium 10-20 Year Durability",
  description: "Premium traditional porcelain veneers lasting 10-20 years. Gold standard cosmetic dentistry with superior durability and natural appearance in Burton Joyce.",
  keywords: [
    "porcelain veneers Burton Joyce",
    "traditional veneers Nottinghamshire",
    "premium cosmetic dentistry",
    "durable veneers",
    "smile makeover",
    "porcelain smile transformation",
    "gold standard veneers",
    "long-lasting dental veneers"
  ],
  openGraph: {
    title: "Traditional Porcelain Veneers | Pear Tree Dental",
    description: "Premium traditional porcelain veneers lasting 10-20 years. Gold standard cosmetic dentistry with superior durability.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/veneers/porcelain"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/veneers/porcelain"
  }
};

export default function PorcelainVeneersPage() {
  const breadcrumbItems = [
    { name: "Services", href: "/services" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Veneers", href: "/veneers" },
    { name: "Traditional Porcelain Veneers" }
  ];

  const benefits = [
    {
      icon: Diamond,
      title: "Superior Durability",
      description: "Made from high-grade dental porcelain, these veneers are incredibly strong and resistant to chipping, cracking, and wear - lasting 10-20 years."
    },
    {
      icon: Sparkles,
      title: "Natural Appearance",
      description: "The translucent quality of porcelain perfectly mimics natural tooth enamel, creating results that are virtually indistinguishable from natural teeth."
    },
    {
      icon: ShieldCheck,
      title: "Stain Resistance",
      description: "Porcelain's non-porous surface resists staining from coffee, wine, and other foods, keeping your smile bright for years to come."
    },
    {
      icon: Target,
      title: "Comprehensive Correction",
      description: "Ideal for addressing major cosmetic issues including severe discoloration, significant gaps, worn teeth, and shape irregularities."
    },
    {
      icon: Crown,
      title: "Precision Crafted",
      description: "Each veneer is individually designed and fabricated by master ceramists using advanced materials and techniques for perfect fit and function."
    },
    {
      icon: Palette,
      title: "Versatile Solutions",
      description: "Suitable for single tooth corrections or complete smile makeovers, addressing multiple aesthetic concerns simultaneously."
    }
  ];

  const comparisonData = [
    {
      feature: "Durability",
      porcelain: "10-20 years",
      ultraThin: "10-15 years",
      composite: "5-7 years"
    },
    {
      feature: "Stain Resistance",
      porcelain: "Excellent",
      ultraThin: "Good",
      composite: "Fair"
    },
    {
      feature: "Natural Look",
      porcelain: "Superior",
      ultraThin: "Very Good",
      composite: "Good"
    },
    {
      feature: "Strength",
      porcelain: "Very High",
      ultraThin: "Good",
      composite: "Moderate"
    },
    {
      feature: "Major Corrections",
      porcelain: "Yes",
      ultraThin: "Limited",
      composite: "Limited"
    },
    {
      feature: "Investment",
      porcelain: "Higher upfront, excellent value",
      ultraThin: "Moderate",
      composite: "Lower"
    }
  ];

  const keyBenefits = [
    {
      icon: Zap,
      title: "Immediate Transformation",
      description: "Dramatic smile improvements achieved in just 2-3 appointments, addressing multiple concerns simultaneously."
    },
    {
      icon: Palette,
      title: "Customizable Aesthetics",
      description: "Shape, size, and color can be precisely tailored to complement your facial features and personal preferences."
    },
    {
      icon: Heart,
      title: "Conservative Treatment",
      description: "Preserves more tooth structure than crowns while providing comprehensive aesthetic correction."
    },
    {
      icon: Hammer,
      title: "Strengthens Teeth",
      description: "Bonded porcelain can actually strengthen weakened or worn teeth while improving their appearance."
    }
  ];

  const treatmentSteps = [
    {
      step: 1,
      title: "Comprehensive Consultation",
      description: "Detailed assessment of your smile goals, oral health evaluation, and treatment planning with digital smile preview."
    },
    {
      step: 2,
      title: "Tooth Preparation",
      description: "Careful removal of a thin layer of enamel (0.5-0.7mm) to accommodate the veneer thickness and ensure proper fit."
    },
    {
      step: 3,
      title: "Precision Impressions",
      description: "Digital or traditional impressions capture exact tooth dimensions. Temporary veneers protect teeth during fabrication."
    },
    {
      step: 4,
      title: "Custom Fabrication",
      description: "Master ceramists handcraft your veneers using premium porcelain, matching color, translucency, and surface texture."
    },
    {
      step: 5,
      title: "Bonding & Finishing",
      description: "Precise placement, bonding with advanced adhesives, and final adjustments ensure perfect fit, function, and aesthetics."
    }
  ];

  const idealCandidates = [
    "Severe tooth discoloration or staining",
    "Significant gaps between teeth",
    "Worn, chipped, or broken teeth",
    "Misshapen or uneven teeth",
    "Desire for long-lasting results",
    "Good overall oral health",
    "Realistic expectations",
    "Commitment to oral hygiene"
  ];

  const notSuitable = [
    "Severe teeth grinding (bruxism)",
    "Significant bite problems",
    "Insufficient tooth enamel",
    "Active gum disease",
    "Poor oral hygiene habits",
    "Unrealistic expectations",
    "Very minor cosmetic concerns",
    "Preference for reversible treatment"
  ];

  const faqs = [
    {
      question: "How long do traditional porcelain veneers last?",
      answer: "Traditional porcelain veneers typically last 10-20 years with proper care. Their longevity depends on oral hygiene, regular dental visits, and avoiding habits like teeth grinding or using teeth as tools."
    },
    {
      question: "Is the procedure painful?",
      answer: "Most patients experience minimal discomfort. Local anesthesia is used during tooth preparation, and any sensitivity after treatment is typically mild and temporary. We provide detailed aftercare instructions for your comfort."
    },
    {
      question: "Will my veneers look natural?",
      answer: "Yes! High-quality porcelain has optical properties very similar to natural tooth enamel. Our ceramists carefully match color, translucency, and surface texture to create results that look completely natural."
    },
    {
      question: "How much tooth structure is removed?",
      answer: "Typically, 0.5-0.7mm of enamel is carefully removed from the front surface of teeth. This is a conservative amount that maintains tooth strength while allowing space for the veneer."
    },
    {
      question: "Can veneers be whitened if they stain?",
      answer: "Porcelain veneers are highly stain-resistant and don't respond to traditional whitening. However, professional cleaning can maintain their brightness. If replacement is needed, new veneers can be made in a lighter shade."
    },
    {
      question: "What happens if a veneer breaks?",
      answer: "While porcelain veneers are very strong, if one breaks it will need to be replaced. We keep detailed records of your veneer specifications to ensure perfect color and shape matching for any replacements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="Traditional Porcelain Veneers"
        description="Premium traditional porcelain veneers offering superior durability and natural appearance lasting 10-20 years"
        price="From £650 per veneer"
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
            <Badge className="mb-4 bg-pear-gold text-white">
              <Crown className="w-4 h-4 mr-2" />
              Gold Standard
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
              Traditional Porcelain Veneers
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The gold standard in cosmetic dentistry - durable, natural-looking transformations lasting 10-20 years
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                10-20 year lifespan
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Superior durability
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Natural appearance
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Choice Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              The Premium Choice for Smile Perfection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional porcelain veneers are the gold standard in cosmetic dentistry, offering unparalleled durability, aesthetics, and longevity. These custom-crafted porcelain shells provide comprehensive solutions for significant smile makeovers.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-gradient-to-br from-pear-gold/20 to-dental-green/20 border-pear-gold/30">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-pear-gold rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">20</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Premium Durability</h3>
              <p className="text-gray-600">
                Years of beautiful, lasting results with proper care and maintenance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Why Choose Traditional Porcelain Veneers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the premium benefits of the gold standard in cosmetic dentistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Why Choose Traditional Porcelain Veneers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare the benefits and see why porcelain is the premium choice
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-pear-primary text-white">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-pear-gold">Traditional Porcelain</th>
                  <th className="text-center p-4 font-semibold">Ultra-Thin Veneers</th>
                  <th className="text-center p-4 font-semibold">Composite Veneers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-pear-gold/10 font-semibold text-pear-primary">{row.porcelain}</td>
                    <td className="p-4 text-center">{row.ultraThin}</td>
                    <td className="p-4 text-center">{row.composite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Key Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-dental-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Your Porcelain Veneer Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive process for achieving your perfect smile
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-pear-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Is This Right for You?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-dental-green mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Ideal Candidates
              </h3>
              <ul className="space-y-3">
                {idealCandidates.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-dental-green mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                <X className="w-5 h-5 mr-2" />
                May Not Be Suitable
              </h3>
              <ul className="space-y-3">
                {notSuitable.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
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
              Get answers to common questions about traditional porcelain veneers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-pear-primary mb-3">{faq.question}</h3>
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
            Transform Your Smile with Premium Porcelain Veneers
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the gold standard in cosmetic dentistry with a consultation at Pear Tree Dental
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pear-primary hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 0115 931 2935
            </Button>
            <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary">
              <Mail className="w-5 h-5 mr-2" />
              Book Online Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
