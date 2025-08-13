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
  Layers,
  Grid3X3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Multiple Dental Implants - Replace Several Missing Teeth | Pear Tree Dental",
  description: "Multiple dental implants in Burton Joyce. Replace several missing teeth with individual implant solutions. From £6,000. Independent function and natural appearance.",
  keywords: [
    "multiple dental implants Burton Joyce",
    "several missing teeth replacement",
    "multiple implant treatment",
    "individual dental implants",
    "multiple tooth implants Nottingham",
    "several implants Burton Joyce",
    "multiple implant solutions"
  ],
  openGraph: {
    title: "Multiple Dental Implants - Replace Several Missing Teeth | Pear Tree Dental",
    description: "Replace several missing teeth with individual implant solutions. Natural function and appearance.",
    type: "website",
    url: "https://peartree.dental/services/implants/multiple-implant"
  },
  alternates: {
    canonical: "https://peartree.dental/services/implants/multiple-implant"
  }
};

export default function MultipleImplantPage() {
  const multipleImplantFAQs = [
    {
      question: "What are multiple dental implants?",
      answer: "Multiple dental implants involve placing several individual titanium implants to replace multiple missing teeth. Each implant supports its own crown, providing independent function and optimal aesthetics."
    },
    {
      question: "How many implants do I need for multiple missing teeth?",
      answer: "Typically, one implant per missing tooth provides the best function and aesthetics. However, depending on your situation, implant bridges may be an option to replace more teeth with fewer implants."
    },
    {
      question: "Can multiple implants be placed at the same time?",
      answer: "Yes, multiple implants can often be placed during the same surgical appointment. This reduces overall treatment time and the need for multiple procedures."
    },
    {
      question: "How long does multiple implant treatment take?",
      answer: "The complete process takes 4-6 months. Implant placement takes 2-4 hours depending on the number of implants. The healing period is 3-6 months, followed by crown placement."
    },
    {
      question: "Are multiple implants better than a bridge or partial denture?",
      answer: "Multiple implants preserve bone health, don't affect adjacent teeth, and provide the most natural function. Each tooth operates independently, making cleaning easier and function more natural."
    }
  ];

  const benefits = [
    {
      icon: Grid3X3,
      title: "Independent Function",
      description: "Each implant functions independently for optimal chewing and cleaning"
    },
    {
      icon: Shield,
      title: "Preserve Bone Health",
      description: "Multiple implants provide comprehensive bone stimulation"
    },
    {
      icon: Crown,
      title: "Natural Aesthetics",
      description: "Individual crowns create the most natural appearance"
    },
    {
      icon: Award,
      title: "Superior Longevity",
      description: "Independent implants typically last longer than connected options"
    }
  ];

  const advantages = [
    "One implant per tooth for optimal function",
    "Independent cleaning and maintenance",
    "Superior long-term success rates",
    "Prevents bone loss in all areas",
    "Most natural chewing function",
    "Easy to repair individual components",
    "Preserves all adjacent healthy teeth",
    "Comprehensive oral health restoration"
  ];

  const scenarios = [
    {
      situation: "Multiple Adjacent Missing",
      description: "Several teeth missing in a row requiring individual replacement",
      implants: "3-4 implants",
      icon: Target
    },
    {
      situation: "Scattered Missing Teeth",
      description: "Missing teeth in different areas of the mouth",
      implants: "2-6 implants",
      icon: Sparkles
    },
    {
      situation: "Bilateral Missing",
      description: "Missing teeth on both sides of the mouth",
      implants: "4-8 implants",
      icon: Layers
    },
    {
      situation: "Partial Arch Loss",
      description: "Significant tooth loss requiring comprehensive restoration",
      implants: "6-8 implants",
      icon: Crown
    }
  ];

  const considerations = [
    {
      factor: "Cost Efficiency",
      description: "Higher initial investment but better long-term value",
      detail: "Individual implants cost more initially but provide superior longevity"
    },
    {
      factor: "Treatment Time",
      description: "Can place multiple implants in single appointment",
      detail: "Simultaneous placement reduces overall treatment timeline"
    },
    {
      factor: "Maintenance",
      description: "Easy individual cleaning and maintenance",
      detail: "Each implant cleans like a natural tooth with regular brushing and flossing"
    },
    {
      factor: "Success Rate",
      description: "Excellent success rates for multiple implants",
      detail: "98% success rate per implant with proper planning and care"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Planning",
      description: "Detailed exam, 3D imaging, and multi-implant treatment planning",
      duration: "1-2 hours"
    },
    {
      step: "2",
      title: "Multiple Implant Placement",
      description: "Surgical placement of all planned implants in single appointment",
      duration: "2-4 hours"
    },
    {
      step: "3",
      title: "Healing & Integration",
      description: "Osseointegration period for all implants to fuse with bone",
      duration: "3-6 months"
    },
    {
      step: "4",
      title: "Individual Crown Placement",
      description: "Custom crowns attached to each implant for complete restoration",
      duration: "3-4 weeks"
    }
  ];

  const comparison = [
    {
      feature: "Function per tooth",
      multiple: "100% independent",
      bridge: "Connected function",
      denture: "Shared pressure"
    },
    {
      feature: "Bone preservation",
      multiple: "Complete stimulation",
      bridge: "Partial preservation",
      denture: "Progressive loss"
    },
    {
      feature: "Maintenance",
      multiple: "Individual care",
      bridge: "Special cleaning tools",
      denture: "Remove for cleaning"
    },
    {
      feature: "Repairability",
      multiple: "Individual replacement",
      bridge: "Entire bridge replacement",
      denture: "Reline or remake"
    },
    {
      feature: "Longevity",
      multiple: "25+ years each",
      bridge: "10-15 years",
      denture: "5-7 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Multiple Dental Implants"
        description="Individual dental implants to replace several missing teeth with independent function and natural aesthetics"
        price="From £6,000"
        category="Implant Dentistry"
        duration="4-6 months total treatment"
        preparation="Comprehensive examination, 3D imaging, multi-implant planning"
        recovery="3-6 months healing for osseointegration"
        benefits={[
          "Independent function for each tooth",
          "Comprehensive bone preservation",
          "Natural aesthetics and feel",
          "Superior long-term success",
          "Easy individual maintenance"
        ]}
        risks={[
          "Surgical risks (minimal)",
          "Higher initial investment",
          "Extended treatment time",
          "Requires adequate bone volume"
        ]}
        rating={4.9}
        reviewCount={125}
        url="https://peartree.dental/services/implants/multiple-implant"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Multiple Dental Implants"
        faqs={multipleImplantFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/implants" className="hover:text-pear-primary">Implants</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Multiple Implants</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/implants" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Implants
              </Link>

              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Multiple Tooth Replacement
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Multiple Dental
                <span className="text-blue-600 block">Implants</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Replace several missing teeth with individual implant solutions. Each implant
                functions independently for optimal chewing, cleaning, and longevity.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Individual implants provide superior long-term success</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Multiple Individual Implants?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Independent function</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Complete bone preservation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Easy maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Superior longevity</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-blue-600">£6,000</div>
                  <div className="text-sm text-gray-600">For multiple implants</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                    Book Multiple Implant Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500 text-white">Individual Solutions</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Independent Excellence</h3>
                  <p className="text-gray-600">
                    Multiple individual implants provide the most natural function,
                    with each tooth operating independently for optimal performance.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">98%</div>
                      <div className="text-gray-600">Success rate each</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">25+</div>
                      <div className="text-gray-600">Years lifespan</div>
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
              The Multiple Implant Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Individual implants for multiple missing teeth provide superior
              function, maintenance, and long-term success compared to connected solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Multiple Implant Scenarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple implants are ideal for various situations involving
              several missing teeth in different configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(scenarios || []).map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card key={scenario.situation} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{scenario.situation}</h3>
                    <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {scenario.implants}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Multiple Implant Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive benefits of choosing individual implants
              for multiple missing teeth replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(advantages || []).map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Treatment Considerations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important factors to consider when planning multiple implant treatment
              for optimal results and patient satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(considerations || []).map((consideration) => (
              <Card key={consideration.factor} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{consideration.factor}</CardTitle>
                  <CardDescription>{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">{consideration.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Multiple Implants vs Other Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare individual implants to bridges and partial dentures
              for replacing multiple missing teeth.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Multiple Implants</th>
                    <th className="py-4 px-6 text-center">Implant Bridge</th>
                    <th className="py-4 px-6 text-center">Partial Denture</th>
                  </tr>
                </thead>
                <tbody>
                  {(comparison || []).map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">{item.multiple}</span>
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

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Multiple Implant Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your multiple implants
              integrate perfectly for optimal function and aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-blue-600 font-medium">{step.duration}</span>
                  </div>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
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
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Restore Multiple Teeth with Confidence
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let multiple missing teeth limit your life. Individual implants provide
                the most natural, long-lasting solution for comprehensive tooth replacement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Book Multiple Implant Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Compare All Treatment Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                From £6,000 • Individual function • 25+ year lifespan each
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
