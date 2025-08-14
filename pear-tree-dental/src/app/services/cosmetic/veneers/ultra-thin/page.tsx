import {
  Check,
  Diamond,
  Mail,
  Microscope,
  Phone,
  RotateCcw,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ultra-Thin Veneers Burton Joyce | 0.2mm Contact Lens Veneers",
  description:
    "Revolutionary ultra-thin contact lens veneers at 0.2mm thickness. Minimal prep required, often reversible, natural translucency. Transform your smile conservatively in Burton Joyce.",
  keywords: [
    "ultra-thin veneers Burton Joyce",
    "contact lens veneers Nottinghamshire",
    "minimal prep veneers",
    "reversible veneers",
    "conservative cosmetic dentistry",
    "0.2mm veneers",
    "no-prep veneers",
    "natural tooth preservation",
  ],
  openGraph: {
    title: "Ultra-Thin Contact Lens Veneers | Pear Tree Dental",
    description:
      "Revolutionary ultra-thin contact lens veneers at 0.2mm thickness. Minimal prep, often reversible, natural results.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/veneers/ultra-thin",
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/veneers/ultra-thin",
  },
};

export default function UltraThinVeneersPage() {
  const breadcrumbItems = [
    { name: "Services", href: "/services" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Veneers", href: "/veneers" },
    { name: "Ultra-Thin Contact Lens Veneers" },
  ];

  const benefits = [
    {
      icon: Microscope,
      title: "Minimal Preparation",
      description:
        "Often requires little to no removal of natural tooth enamel, making this the most conservative veneer option available. Your natural teeth remain largely intact.",
    },
    {
      icon: Sparkles,
      title: "Natural Translucency",
      description:
        "The ultra-thin design allows your natural tooth color to show through, creating an incredibly lifelike appearance that mimics natural tooth enamel perfectly.",
    },
    {
      icon: RotateCcw,
      title: "Reversible Treatment",
      description:
        "Because minimal tooth structure is removed, this treatment is often reversible - giving you peace of mind with your cosmetic investment.",
    },
    {
      icon: Target,
      title: "Precision Fit",
      description:
        "Each veneer is custom-crafted using advanced digital impressions and CAD/CAM technology for a perfect fit that feels completely natural.",
    },
    {
      icon: Zap,
      title: "Quick Recovery",
      description:
        "With minimal preparation required, you'll experience less sensitivity and faster healing compared to traditional veneer procedures.",
    },
    {
      icon: Diamond,
      title: "Long-lasting Results",
      description:
        "Despite their thinness, these veneers are incredibly durable and can last 10-15 years with proper care and maintenance.",
    },
  ];

  const comparisonData = [
    {
      feature: "Thickness",
      ultraThin: "0.2-0.3mm",
      porcelain: "0.5-0.7mm",
      composite: "1-2mm",
    },
    {
      feature: "Prep Required",
      ultraThin: "Minimal/None",
      porcelain: "Moderate",
      composite: "Minimal",
    },
    {
      feature: "Visits Required",
      ultraThin: "2-3",
      porcelain: "2-3",
      composite: "1",
    },
    {
      feature: "Durability",
      ultraThin: "10-15 years",
      porcelain: "10-20 years",
      composite: "5-7 years",
    },
    {
      feature: "Reversible",
      ultraThin: "Often yes",
      porcelain: "No",
      composite: "Yes",
    },
    {
      feature: "Best For",
      ultraThin: "Minor corrections, conservative approach",
      porcelain: "Major corrections, maximum durability",
      composite: "Budget-conscious, temporary solution",
    },
  ];

  const treatmentSteps = [
    {
      step: 1,
      title: "Consultation & Assessment",
      description:
        "Comprehensive evaluation of your smile goals and dental health. Digital imaging to determine if you're a candidate for ultra-thin veneers.",
    },
    {
      step: 2,
      title: "Digital Design",
      description:
        "Advanced 3D scanning and smile design software create a preview of your new smile. Minimal tooth preparation if required.",
    },
    {
      step: 3,
      title: "Custom Fabrication",
      description:
        "Your ultra-thin veneers are precisely crafted in our partner lab using the finest porcelain materials and advanced techniques.",
    },
    {
      step: 4,
      title: "Placement & Bonding",
      description:
        "Careful placement and bonding using specialized techniques designed for ultra-thin veneers. Final adjustments for perfect fit and bite.",
    },
  ];

  const faqs = [
    {
      question: "Are ultra-thin veneers as strong as traditional veneers?",
      answer:
        "Yes! Advanced porcelain technology and specialized bonding techniques make ultra-thin veneers remarkably strong despite their minimal thickness. They're designed to withstand normal biting and chewing forces.",
    },
    {
      question: "Will I need my teeth drilled down?",
      answer:
        "In most cases, little to no tooth preparation is required. This is the major advantage of ultra-thin veneers - they preserve your natural tooth structure while delivering beautiful results.",
    },
    {
      question: "How long do ultra-thin veneers last?",
      answer:
        "With proper care, ultra-thin veneers typically last 10-15 years. Regular dental check-ups, good oral hygiene, and avoiding excessive force will maximize their lifespan.",
    },
    {
      question: "Can ultra-thin veneers be removed?",
      answer:
        "Because minimal tooth preparation is typically required, ultra-thin veneers are often reversible, unlike traditional veneers. However, this depends on your specific case and should be discussed during consultation.",
    },
    {
      question: "What issues can ultra-thin veneers address?",
      answer:
        "They're excellent for minor color correction, small gaps, slight misalignment, worn edges, and surface imperfections. For major corrections, traditional porcelain veneers might be more suitable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="Ultra-Thin Contact Lens Veneers"
        description="Revolutionary ultra-thin contact lens veneers at 0.2mm thickness with minimal tooth preparation"
        price="From £450 per veneer"
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
            <Badge className="mb-4 bg-soft-pink text-pear-primary">
              <Microscope className="w-4 h-4 mr-2" />
              Ultra-Thin Technology
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
              Ultra-Thin Contact Lens Veneers
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The most conservative approach to a perfect smile - as thin as
              0.2mm with minimal prep required
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                0.2mm thickness
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Minimal preparation
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Often reversible
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Revolutionary Smile Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ultra-thin contact lens veneers represent the pinnacle of
              conservative cosmetic dentistry. These remarkable porcelain shells
              are as thin as 0.2mm - thinner than a contact lens - and can
              transform your smile with minimal to no tooth preparation
              required.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 border-soft-pink/30">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-soft-pink rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">0.2mm</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Ultra-Thin Technology
              </h3>
              <p className="text-gray-600">
                Thinner than traditional veneers with revolutionary bonding
                strength
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
              Why Choose Ultra-Thin Veneers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of the most conservative cosmetic dental
              treatment available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(benefits || []).map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-soft-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-pear-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
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
              How Ultra-Thin Veneers Compare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See why ultra-thin contact lens veneers might be perfect for you
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-pear-primary text-white">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-soft-pink">
                    Ultra-Thin Veneers
                  </th>
                  <th className="text-center p-4 font-semibold">
                    Traditional Porcelain
                  </th>
                  <th className="text-center p-4 font-semibold">
                    Composite Veneers
                  </th>
                </tr>
              </thead>
              <tbody>
                {(comparisonData || []).map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-soft-pink/10 font-semibold text-pear-primary">
                      {row.ultraThin}
                    </td>
                    <td className="p-4 text-center">{row.porcelain}</td>
                    <td className="p-4 text-center">{row.composite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Your Treatment Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, conservative process for transforming your smile
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {(treatmentSteps || []).map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0">
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
              Get answers to common questions about ultra-thin contact lens
              veneers
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
            Ready for Your Smile Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover if ultra-thin contact lens veneers are right for you with a
            comprehensive consultation at Pear Tree Dental
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pear-primary hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 0115 931 2935
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pear-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Book Online Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
