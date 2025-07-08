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
  Zap,
  DollarSign,
  Wrench,
  Palette,
  RotateCcw,
  Timer,
  Coffee,
  Paintbrush2,
  Repeat,
  Hammer,
  CalendarDays,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Composite Veneers | Same-Day Smile Transformation | Pear Tree Dental",
  description: "Affordable composite veneers with same-day results. Budget-friendly smile transformation with minimal preparation. Instantly improve your smile in Burton Joyce.",
  keywords: [
    "composite veneers Burton Joyce",
    "same-day veneers Nottinghamshire",
    "affordable smile makeover",
    "budget-friendly veneers",
    "instant smile improvement",
    "resin veneers",
    "tooth-colored veneers",
    "reversible veneers"
  ],
  openGraph: {
    title: "Composite Veneers | Same-Day Smile Transformation | Pear Tree Dental",
    description: "Affordable composite veneers with same-day results. Budget-friendly smile transformation with minimal preparation.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/veneers/composite"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/veneers/composite"
  }
};

export default function CompositeVeneersPage() {
  const breadcrumbItems = [
    { name: "Services", href: "/services" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Veneers", href: "/veneers" },
    { name: "Composite Veneers" }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Immediate Results",
      description: "Complete treatment in a single visit - walk in with concerns and leave with a transformed smile the same day."
    },
    {
      icon: DollarSign,
      title: "Budget-Friendly",
      description: "Significantly more affordable than porcelain alternatives while still delivering excellent aesthetic improvements."
    },
    {
      icon: Wrench,
      title: "Easily Repairable",
      description: "If damaged, composite veneers can often be repaired chair-side without full replacement, saving time and money."
    },
    {
      icon: Heart,
      title: "Minimal Preparation",
      description: "Requires little to no removal of natural tooth structure, preserving your original teeth."
    },
    {
      icon: Paintbrush2,
      title: "Artistic Customization",
      description: "Sculpted directly on your teeth, allowing for real-time adjustments and personalized shaping."
    },
    {
      icon: RotateCcw,
      title: "Reversible Treatment",
      description: "Can be removed if desired, returning teeth to their original state - perfect for trying cosmetic changes."
    }
  ];

  const comparisonData = [
    {
      feature: "Cost",
      composite: "Most affordable",
      ultraThin: "Moderate",
      porcelain: "Highest"
    },
    {
      feature: "Time",
      composite: "Same day",
      ultraThin: "2-3 visits",
      porcelain: "2-3 visits"
    },
    {
      feature: "Prep Required",
      composite: "Minimal/None",
      ultraThin: "Minimal",
      porcelain: "Moderate"
    },
    {
      feature: "Durability",
      composite: "5-7 years",
      ultraThin: "10-15 years",
      porcelain: "10-20 years"
    },
    {
      feature: "Repairability",
      composite: "Excellent",
      ultraThin: "Replacement needed",
      porcelain: "Replacement needed"
    },
    {
      feature: "Best For",
      composite: "Budget-conscious, immediate results",
      ultraThin: "Conservative, natural look",
      porcelain: "Maximum durability, major corrections"
    }
  ];

  const keyAdvantages = [
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Fraction of the cost of porcelain veneers while still providing significant aesthetic improvement"
    },
    {
      icon: Zap,
      title: "Instant Gratification",
      description: "See your new smile immediately - no waiting weeks for lab fabrication"
    },
    {
      icon: Hammer,
      title: "Easy Maintenance",
      description: "Simple repairs and touch-ups can be done in the office without replacement"
    },
    {
      icon: Repeat,
      title: "Adjustable",
      description: "Can be modified, reshaped, or adjusted even after placement"
    }
  ];

  const considerations = [
    {
      icon: Timer,
      title: "Shorter Lifespan",
      description: "Typically last 5-7 years compared to 10-20 years for porcelain veneers"
    },
    {
      icon: Coffee,
      title: "Stain Susceptibility",
      description: "More prone to staining from coffee, wine, and other pigmented foods"
    },
    {
      icon: Star,
      title: "Less Natural Translucency",
      description: "May not achieve the same light-reflecting properties as high-end porcelain"
    },
    {
      icon: Wrench,
      title: "More Maintenance",
      description: "May require more frequent polishing and touch-ups to maintain appearance"
    }
  ];

  const sameDayProcess = [
    {
      time: "30 Minutes",
      title: "Consultation & color matching",
      icon: Clock
    },
    {
      time: "60 Minutes",
      title: "Tooth preparation & composite application",
      icon: Paintbrush2
    },
    {
      time: "30 Minutes",
      title: "Shaping, polishing & final adjustments",
      icon: Star
    },
    {
      time: "New Smile!",
      title: "Walk out with your transformed smile",
      icon: Zap
    }
  ];

  const treatmentSteps = [
    {
      step: 1,
      title: "Consultation & Planning",
      description: "Discuss your goals, examine your teeth, and select the perfect shade to match or enhance your natural teeth."
    },
    {
      step: 2,
      title: "Minimal Preparation",
      description: "Light surface preparation of teeth to ensure optimal bonding - typically no anesthesia required."
    },
    {
      step: 3,
      title: "Composite Application",
      description: "High-quality composite resin applied in layers and carefully sculpted to create your ideal tooth shape."
    },
    {
      step: 4,
      title: "Shaping & Polishing",
      description: "Precise contouring and high-gloss polishing create natural-looking texture and shine."
    },
    {
      step: 5,
      title: "Final Adjustments",
      description: "Bite check and final refinements ensure comfort and perfect fit with your natural bite pattern."
    }
  ];

  const careInstructions = [
    {
      title: "Daily Care",
      description: "Brush twice daily with a soft toothbrush and non-abrasive toothpaste. Floss gently around veneer edges.",
      icon: Heart
    },
    {
      title: "Stain Prevention",
      description: "Limit coffee, tea, red wine, and tobacco. Rinse with water after consuming staining substances.",
      icon: Shield
    },
    {
      title: "Regular Check-ups",
      description: "Professional cleanings every 6 months help maintain appearance and identify any needed touch-ups.",
      icon: CalendarDays
    },
    {
      title: "Protective Habits",
      description: "Avoid biting hard objects, nail biting, and teeth grinding. Use a night guard if recommended.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "How long do composite veneers last?",
      answer: "Composite veneers typically last 5-7 years with proper care. Their lifespan depends on oral hygiene, eating habits, and lifestyle factors. Regular maintenance and touch-ups can extend their appearance."
    },
    {
      question: "Can composite veneers be repaired if damaged?",
      answer: "Yes! One of the major advantages of composite veneers is that they can often be repaired directly in the dental chair if chipped or damaged, without needing complete replacement."
    },
    {
      question: "Do composite veneers require special care?",
      answer: "They require the same basic care as natural teeth - regular brushing, flossing, and dental visits. However, avoiding staining substances and hard foods will help maintain their appearance longer."
    },
    {
      question: "How much do composite veneers cost compared to porcelain?",
      answer: "Composite veneers are significantly more affordable than porcelain veneers, typically costing 3-5 times less. This makes them an excellent option for budget-conscious patients wanting smile improvements."
    },
    {
      question: "Can I get composite veneers on just one tooth?",
      answer: "Absolutely! Composite veneers are perfect for single tooth corrections, such as repairing a chipped tooth or closing a small gap. The color can be precisely matched to your surrounding teeth."
    },
    {
      question: "Will composite veneers stain over time?",
      answer: "Composite material is more porous than porcelain, so it can pick up stains from coffee, tea, wine, and tobacco over time. However, professional polishing can often restore much of their original brightness."
    },
    {
      question: "Can I upgrade to porcelain veneers later?",
      answer: "Yes! Many patients start with composite veneers to trial their new smile, then upgrade to porcelain veneers later for increased durability and longevity. Your dentist can help plan this transition."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="Composite Veneers"
        description="Affordable same-day composite veneers with minimal preparation and immediate results"
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
            <Badge className="mb-4 bg-dental-green text-white">
              <Zap className="w-4 h-4 mr-2" />
              Same Day Results
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
              Composite Veneers
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Affordable, same-day smile transformation with minimal preparation required
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Same-day treatment
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Budget-friendly
              </span>
              <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Check className="w-4 h-4 text-dental-green" />
                Easily repairable
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Book Same-Day Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Enhancement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Instant Smile Enhancement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Composite veneers offer an accessible, same-day solution for smile improvement. Using advanced tooth-colored resin materials, these veneers can address various cosmetic concerns in a single appointment without extensive preparation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-gradient-to-br from-dental-green/20 to-soft-blue/20 border-dental-green/30">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-dental-green rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Same Day Results</h3>
              <p className="text-gray-600">
                Single appointment for complete smile transformation
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
              Why Choose Composite Veneers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience immediate smile improvement with budget-friendly, reversible treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Same Day Transformation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Same-Day Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your smile can be completely transformed in just one appointment
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sameDayProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-soft-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-pear-primary mb-2">{step.time}</div>
                  <p className="text-gray-600 text-sm">{step.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Composite Veneers Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how composite veneers compare to other veneer options
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-pear-primary text-white">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-dental-green">Composite Veneers</th>
                  <th className="text-center p-4 font-semibold">Ultra-Thin Veneers</th>
                  <th className="text-center p-4 font-semibold">Traditional Porcelain</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-dental-green/10 font-semibold text-pear-primary">{row.composite}</td>
                    <td className="p-4 text-center">{row.ultraThin}</td>
                    <td className="p-4 text-center">{row.porcelain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Advantages & Considerations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Advantages */}
            <div>
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-8">
                Key Advantages
              </h2>
              <div className="space-y-6">
                {keyAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dental-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pear-primary mb-1">{advantage.title}</h3>
                        <p className="text-gray-600 text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Considerations */}
            <div>
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-8">
                Considerations
              </h2>
              <div className="space-y-6">
                {considerations.map((consideration, index) => {
                  const IconComponent = consideration.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-soft-pink rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pear-primary mb-1">{consideration.title}</h3>
                        <p className="text-gray-600 text-sm">{consideration.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Your Same-Day Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, efficient process for immediate smile enhancement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center flex-shrink-0">
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

      {/* Care Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Caring for Your Composite Veneers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple care instructions to maintain your new smile
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {careInstructions.map((instruction, index) => {
              const IconComponent = instruction.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-soft-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-pear-primary mb-2">{instruction.title}</h3>
                      <p className="text-gray-600 text-sm">{instruction.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about composite veneers
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
            Transform Your Smile Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience instant smile enhancement with affordable composite veneers at Pear Tree Dental
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pear-primary hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 0115 931 2520
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary">
              <Mail className="w-5 h-5 mr-2" />
              Book Same-Day Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
