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
  Link2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Implant Bridge - Replace Multiple Teeth with Bridge | Pear Tree Dental",
  description: "Implant bridge in Burton Joyce. Replace multiple adjacent teeth with implant-supported bridge. From £8,500. Cost-effective solution with strong support.",
  keywords: [
    "implant bridge Burton Joyce",
    "implant supported bridge",
    "multiple teeth bridge",
    "dental bridge on implants",
    "implant bridge Nottingham",
    "fixed bridge on implants",
    "multiple tooth bridge"
  ],
  openGraph: {
    title: "Implant Bridge - Implant-Supported Bridge Solution | Pear Tree Dental",
    description: "Replace multiple adjacent teeth with implant-supported bridge. Cost-effective and stable solution.",
    type: "website",
    url: "https://peartreedental.co.uk/services/implants/implant-bridge"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/implants/implant-bridge"
  }
};

export default function ImplantBridgePage() {
  const implantBridgeFAQs = [
    {
      question: "What is an implant bridge?",
      answer: "An implant bridge uses 2-4 dental implants to support a connected series of crowns, replacing multiple adjacent missing teeth. It's more cost-effective than individual implants while providing excellent stability."
    },
    {
      question: "How many implants are needed for a bridge?",
      answer: "Typically 2-4 implants can support a bridge replacing 3-6 teeth. For example, 2 implants can support a 3-4 tooth bridge, while 4 implants can support up to 6 teeth."
    },
    {
      question: "Is an implant bridge better than a traditional bridge?",
      answer: "Yes, implant bridges don't require alteration of healthy adjacent teeth and provide better long-term stability. They also prevent bone loss and typically last much longer than traditional bridges."
    },
    {
      question: "How long does an implant bridge last?",
      answer: "Implant bridges typically last 15-25 years with proper care. The implants themselves can last a lifetime, though the bridge portion may need replacement after 15-20 years."
    },
    {
      question: "Can I eat normally with an implant bridge?",
      answer: "Yes! Implant bridges provide excellent chewing function, allowing you to eat most foods comfortably. They're much more stable than removable partial dentures."
    }
  ];

  const benefits = [
    {
      icon: Link2,
      title: "Cost-Effective Solution",
      description: "Fewer implants needed compared to individual replacement"
    },
    {
      icon: Shield,
      title: "Strong Support",
      description: "Multiple implants provide excellent stability and strength"
    },
    {
      icon: Crown,
      title: "Natural Function",
      description: "Fixed solution that functions like natural teeth"
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Excellent long-term success rates and patient satisfaction"
    }
  ];

  const advantages = [
    "More cost-effective than individual implants",
    "Fewer surgical sites needed",
    "Excellent stability and strength",
    "Natural chewing function",
    "Fixed, non-removable solution",
    "Prevents bone loss",
    "No alteration of adjacent teeth",
    "Long-lasting results"
  ];

  const bridgeConfigurations = [
    {
      name: "3-Unit Bridge",
      implants: "2 implants",
      teeth: "3 crowns",
      description: "Two implants support three connected crowns",
      price: "From £8,500",
      ideal: "Small gaps with good bone support"
    },
    {
      name: "4-Unit Bridge",
      implants: "2 implants",
      teeth: "4 crowns",
      description: "Two implants support four connected crowns",
      price: "From £10,000",
      ideal: "Moderate gaps with adequate spacing"
    },
    {
      name: "5-Unit Bridge",
      implants: "3 implants",
      teeth: "5 crowns",
      description: "Three implants support five connected crowns",
      price: "From £12,500",
      ideal: "Larger gaps requiring additional support"
    },
    {
      name: "6-Unit Bridge",
      implants: "4 implants",
      teeth: "6 crowns",
      description: "Four implants support six connected crowns",
      price: "From £15,000",
      ideal: "Extensive restoration with maximum stability"
    }
  ];

  const candidateFactors = [
    {
      factor: "Multiple Adjacent Missing",
      description: "3-6 missing teeth in a row requiring replacement",
      icon: Target
    },
    {
      factor: "Adequate Bone Support",
      description: "Sufficient bone for implant placement at key positions",
      icon: Shield
    },
    {
      factor: "Cost Considerations",
      description: "Want fixed solution more affordable than individual implants",
      icon: Award
    },
    {
      factor: "Good Oral Health",
      description: "Healthy gums and commitment to maintenance",
      icon: Heart
    }
  ];

  const vsComparison = [
    {
      treatment: "Implant Bridge",
      implants: "2-4 implants",
      cost: "From £8,500",
      function: "Excellent",
      maintenance: "Standard hygiene",
      longevity: "15-25 years"
    },
    {
      treatment: "Individual Implants",
      implants: "1 per tooth",
      cost: "From £12,000+",
      function: "Optimal",
      maintenance: "Individual care",
      longevity: "25+ years"
    },
    {
      treatment: "Traditional Bridge",
      implants: "None",
      cost: "From £2,500",
      function: "Good",
      maintenance: "Special cleaning",
      longevity: "10-15 years"
    },
    {
      treatment: "Partial Denture",
      implants: "None",
      cost: "From £750",
      function: "Limited",
      maintenance: "Remove daily",
      longevity: "5-7 years"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Bridge Planning",
      description: "Comprehensive planning for implant positions and bridge design",
      duration: "1-2 hours"
    },
    {
      step: "2",
      title: "Implant Placement",
      description: "Surgical placement of 2-4 implants to support the bridge",
      duration: "2-3 hours"
    },
    {
      step: "3",
      title: "Healing Period",
      description: "Osseointegration allows implants to integrate with bone",
      duration: "3-6 months"
    },
    {
      step: "4",
      title: "Bridge Fabrication",
      description: "Custom bridge crafted and fitted to complete restoration",
      duration: "3-4 weeks"
    }
  ];

  const considerations = [
    {
      title: "Implant Positioning",
      description: "Strategic placement for optimal support and distribution of forces",
      importance: "Critical for long-term success"
    },
    {
      title: "Bridge Design",
      description: "Cantilever limitations and pontic design for cleanability",
      importance: "Affects function and maintenance"
    },
    {
      title: "Material Selection",
      description: "Porcelain, zirconia, or metal-ceramic options available",
      importance: "Influences aesthetics and durability"
    },
    {
      title: "Maintenance Requirements",
      description: "Special cleaning techniques for connected crowns",
      importance: "Essential for longevity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-violet-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Implant Bridge"
        description="Implant-supported bridge using 2-4 implants to replace multiple adjacent missing teeth with connected crowns"
        price="From £8,500"
        category="Implant Dentistry"
        duration="4-6 months total treatment"
        preparation="Comprehensive planning, 3D imaging, implant positioning design"
        recovery="3-6 months healing for osseointegration"
        benefits={[
          "Cost-effective multiple tooth replacement",
          "Strong implant support",
          "Fixed, non-removable solution",
          "Natural chewing function",
          "Prevents bone loss"
        ]}
        risks={[
          "Surgical risks (minimal)",
          "Connected design considerations",
          "Requires adequate bone support",
          "Special cleaning requirements"
        ]}
        rating={4.8}
        reviewCount={95)
        url="https://peartreedental.co.uk/services/implants/implant-bridge"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Implant Bridge"
        faqs={implantBridgeFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/implants" className="hover:text-pear-primary">Implants</Link>
            <span>/</span>
            <span className="text-purple-600 font-medium">Implant Bridge</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/implants" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Implants
              </Link>

              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Link2 className="w-4 h-4 mr-2" />
                Connected Tooth Replacement
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Implant
                <span className="text-purple-600 block">Bridge</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Replace multiple adjacent teeth with implant-supported bridges. Strong, stable,
                and cost-effective solution using fewer implants than individual replacement.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Cost-effective solution with excellent stability</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose an Implant Bridge?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Cost-effective</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Strong support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Fixed solution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Natural function</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-purple-600">£8,500</div>
                  <div className="text-sm text-gray-600">3-unit bridge</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold">
                    Book Implant Bridge Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white">
                    Call 0115 931 2525
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-100 to-violet-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-500 text-white">Smart Solution</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-purple-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Connected Strength</h3>
                  <p className="text-gray-600">
                    Implant bridges combine the stability of multiple implants with
                    the cost-effectiveness of connected crowns for optimal value.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-purple-600">2-4</div>
                      <div className="text-gray-600">Implants needed</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-purple-600">15-25</div>
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
              The Implant Bridge Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implant bridges offer an excellent balance of stability, function,
              and cost-effectiveness for replacing multiple adjacent teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bridge Configurations Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Bridge Configuration Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the optimal bridge configuration based on the number
              of missing teeth and your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bridgeConfigurations.map((config) => (
              <Card key={config.name} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-primary">{config.name}</CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      {config.implants}
                    </Badge>
                    <Badge variant="outline" className="text-gray-600 border-gray-600">
                      {config.teeth}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{config.description}</p>
                  <div className="text-lg font-bold text-purple-600">{config.price}</div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <span className="text-xs font-medium text-purple-700">Ideal for: </span>
                    <span className="text-xs text-gray-700">{config.ideal}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Implant Bridge Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make implant bridges an excellent
              choice for multiple tooth replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Treatment Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare implant bridges with other options for replacing
              multiple missing teeth to make an informed decision.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Treatment</th>
                    <th className="py-4 px-6 text-center">Implants</th>
                    <th className="py-4 px-6 text-center">Cost</th>
                    <th className="py-4 px-6 text-center">Function</th>
                    <th className="py-4 px-6 text-center">Maintenance</th>
                    <th className="py-4 px-6 text-center">Longevity</th>
                  </tr>
                </thead>
                <tbody>
                  {vsComparison.map((item, index) => (
                    <tr key={item.treatment} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.treatment}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{item.implants}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{item.cost}</td>
                      <td className="py-4 px-6 text-center">
                        {item.treatment === "Implant Bridge" ? (
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600" />
                            <span className="text-purple-600 font-medium">{item.function}</span>
                          </div>
                        ) : (
                          <span className="text-gray-600">{item.function}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600">{item.maintenance}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{item.longevity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Candidate Factors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Are You a Candidate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implant bridges are ideal for specific situations involving
              multiple adjacent missing teeth requiring stable replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.factor} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Considerations Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Treatment Considerations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important factors in planning successful implant bridge treatment
              for optimal long-term results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {considerations.map((consideration) => (
              <Card key={consideration.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{consideration.title}</CardTitle>
                  <CardDescription>{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-purple-700">Importance: </span>
                    <span className="text-sm text-gray-700">{consideration.importance}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Implant Bridge Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your implant bridge
              provides optimal function, aesthetics, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-purple-600 font-medium">{step.duration}</span>
                  </div>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-300" />
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
          <Card className="bg-gradient-to-r from-purple-600 to-violet-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Restore Multiple Teeth Efficiently
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get the stability of implants with the cost-effectiveness of a bridge.
                Book your consultation to explore implant bridge solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
                  Book Bridge Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                    Compare All Treatment Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                From £8,500 • Strong implant support • 15-25 year lifespan
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
