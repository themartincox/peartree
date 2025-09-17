import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Crown,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Award,
  Heart,
  Target,
  Zap,
  Camera
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Single Dental Implant - Replace One Missing Tooth | Pear Tree Dental",
  description: "Single dental implant in Burton Joyce. Replace one missing tooth permanently with titanium implant and crown. £2,500. Natural look and function.",
  keywords: [
    "single dental implant Burton Joyce",
    "single tooth replacement Nottingham",
    "missing tooth implant",
    "individual dental implant",
    "single implant crown",
    "tooth implant Burton Joyce",
    "permanent tooth replacement"
  ],
  openGraph: {
    title: "Single Dental Implant - Permanent Single Tooth Replacement | Pear Tree Dental",
    description: "Replace one missing tooth permanently with a single dental implant. Natural appearance and function.",
    type: "website",
    url: "https://peartree.dental/services/implants/single-implant"
  },
  alternates: {
    canonical: "https://peartree.dental/services/implants/single-implant"
  }
};

export default function SingleImplantPage() {
  const singleImplantFAQs = [
    {
      question: "What is a single dental implant?",
      answer: "A single dental implant is a titanium post surgically placed into the jawbone to replace the root of one missing tooth. It's topped with a custom crown that looks and functions like your natural tooth."
    },
    {
      question: "How long does a single implant procedure take?",
      answer: "The implant placement takes about 1-2 hours. The complete process from consultation to final crown takes 3-6 months, allowing time for the implant to integrate with your jawbone."
    },
    {
      question: "Is a single implant better than a bridge?",
      answer: "Yes, single implants preserve adjacent healthy teeth since they don't require alteration of neighboring teeth like bridges do. They also prevent bone loss and last longer - typically 25+ years versus 10-15 for bridges."
    },
    {
      question: "Will my single implant look natural?",
      answer: "Absolutely! The custom crown is made to match your natural teeth in color, shape, and size. Most people won't be able to tell which tooth is the implant."
    },
    {
      question: "How do I care for my single implant?",
      answer: "Care for your single implant just like a natural tooth - brush twice daily, floss regularly, and attend routine dental check-ups. With proper care, it can last a lifetime."
    }
  ];

  const benefits = [
    {
      icon: Crown,
      title: "Preserve Adjacent Teeth",
      description: "No need to alter healthy neighboring teeth like with bridges"
    },
    {
      icon: Shield,
      title: "Prevent Bone Loss",
      description: "Stimulates jawbone to maintain structure and facial support"
    },
    {
      icon: Heart,
      title: "Natural Function",
      description: "Chew, speak, and smile with complete confidence"
    },
    {
      icon: Award,
      title: "Long-lasting Solution",
      description: "Can last 25+ years with proper care and maintenance"
    }
  ];

  const advantages = [
    "Preserves healthy adjacent teeth",
    "Prevents jawbone deterioration",
    "Most natural-looking solution",
    "Functions like a real tooth",
    "No dietary restrictions",
    "Easy to clean and maintain",
    "98% success rate",
    "Long-term investment"
  ];

  const candidateFactors = [
    {
      factor: "Single Missing Tooth",
      description: "When one tooth is lost due to decay, trauma, or extraction",
      icon: Target
    },
    {
      factor: "Healthy Adjacent Teeth",
      description: "When neighboring teeth are healthy and don't need treatment",
      icon: Shield
    },
    {
      factor: "Adequate Bone",
      description: "Sufficient jawbone density to support the implant",
      icon: Award
    },
    {
      factor: "Good Oral Health",
      description: "Healthy gums and commitment to oral hygiene",
      icon: Heart
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Comprehensive exam, 3D imaging, and treatment planning",
      duration: "1-2 hours"
    },
    {
      step: "2",
      title: "Implant Placement",
      description: "Surgical placement of titanium implant into jawbone",
      duration: "1-2 hours"
    },
    {
      step: "3",
      title: "Healing Period",
      description: "Osseointegration - implant fuses with bone tissue",
      duration: "3-6 months"
    },
    {
      step: "4",
      title: "Crown Placement",
      description: "Custom crown attached to complete your new tooth",
      duration: "2-3 weeks"
    }
  ];

  const comparison = [
    {
      feature: "Adjacent Teeth",
      implant: "Preserved completely",
      bridge: "Require alteration",
      denture: "May cause pressure"
    },
    {
      feature: "Bone Health",
      implant: "Preserves and stimulates",
      bridge: "Gradual bone loss",
      denture: "Accelerated bone loss"
    },
    {
      feature: "Longevity",
      implant: "25+ years",
      bridge: "10-15 years",
      denture: "5-7 years"
    },
    {
      feature: "Function",
      implant: "100% natural",
      bridge: "95% function",
      denture: "70% function"
    },
    {
      feature: "Maintenance",
      implant: "Brush and floss",
      bridge: "Special cleaning",
      denture: "Remove for cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/30 via-white to-cyan-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Single Dental Implant"
        description="Single titanium implant with custom crown to replace one missing tooth permanently"
        price="£2,500"
        category="Implant Dentistry"
        duration="3-6 months total treatment"
        preparation="Comprehensive examination, 3D imaging, treatment planning"
        recovery="3-6 months healing for osseointegration"
        benefits={[
          "Preserves adjacent healthy teeth",
          "Prevents bone loss",
          "Natural appearance and function",
          "98% success rate",
          "Long-lasting solution 25+ years"
        ]}
        risks={[
          "Surgical risks (minimal)",
          "Implant rejection (very rare)",
          "Infection (preventable with care)",
          "Sinus complications (upper jaw only)"
        ]}
        rating={4.9}
        reviewCount={180}
        url="https://peartree.dental/services/implants/single-implant"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Single Dental Implant"
        faqs={singleImplantFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/implants" className="hover:text-pear-primary">Implants</Link>
            <span>/</span>
            <span className="text-teal-600 font-medium">Single Implant</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/implants" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Implants
              </Link>

              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                <Crown className="w-4 h-4 mr-2" />
                Single Tooth Replacement
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Single Dental
                <span className="text-teal-600 block">Implant</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Replace one missing tooth permanently with a titanium implant and custom crown.
                The most natural solution that preserves your healthy teeth.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">98% success rate - Gold standard for single tooth replacement</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose a Single Implant?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">Preserves adjacent teeth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">Prevents bone loss</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">Natural function</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">25+ year lifespan</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Complete treatment</div>
                  <div className="text-3xl font-bold text-teal-600">£2,500</div>
                  <div className="text-sm text-gray-600">Implant + crown</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/book">
                    <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold">
                      Book Single Implant Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:01159312935">
                    <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white">
                      Call 0115 931 2935
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-teal-500 text-white">Premium Solution</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-teal-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">The Natural Choice</h3>
                  <p className="text-gray-600">
                    A single implant preserves your healthy teeth while providing
                    the most natural replacement for your missing tooth.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-teal-600">98%</div>
                      <div className="text-gray-600">Success rate</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-teal-600">3-6 months</div>
                      <div className="text-gray-600">Treatment time</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose a Single Implant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Single implants offer the most conservative and effective solution
              for replacing one missing tooth without affecting healthy teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Single Implant Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why single implants are considered the gold standard
              for replacing individual missing teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Single Implant vs Other Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how single implants compare to bridges and partial dentures
              for replacing one missing tooth.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Single Implant</th>
                    <th className="py-4 px-6 text-center">Bridge</th>
                    <th className="py-4 px-6 text-center">Partial Denture</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-600" />
                          <span className="text-teal-600 font-medium">{item.implant}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.bridge}</td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.denture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Candidate Factors Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Are You a Candidate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Single implants are ideal for specific situations involving
              the loss of one tooth with healthy surrounding teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.factor} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{factor.factor}</h3>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Single Implant Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your single implant integrates
              perfectly and provides lifelong function and aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span className="text-xs text-teal-600 font-medium">{step.duration}</span>
                  </div>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-teal-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Replace Your Missing Tooth Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let one missing tooth affect your confidence and oral health.
                A single implant provides the most natural, long-lasting solution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90 font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                    Compare All Treatment Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                £2,500 complete treatment • 98% success rate • 25+ year lifespan
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
