import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
  Sparkles,
  Users,
  ChevronLeft,
  Zap,
  Leaf,
  Award,
  Activity
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Biodentine Fillings - Bioactive Dental Restorations | Pear Tree Dental",
  description: "Biodentine fillings in Burton Joyce. Advanced bioactive material that promotes healing and regeneration. £195. Natural tooth-like properties for lasting restoration.",
  keywords: [
    "Biodentine fillings Burton Joyce",
    "bioactive dental fillings Nottingham",
    "tooth regeneration treatment",
    "calcium silicate fillings",
    "advanced dental materials",
    "tooth preservation Burton Joyce",
    "natural dental restoration"
  ],
  openGraph: {
    title: "Biodentine Fillings - Advanced Bioactive Restorations | Pear Tree Dental",
    description: "Experience the future of dental fillings with Biodentine - bioactive material that helps teeth heal naturally.",
    type: "website",
    url: "https://peartree.dental/services/general/biodentine-fillings"
  },
  alternates: {
    canonical: "https://peartree.dental/services/general/biodentine-fillings"
  }
};

export default function BiodentineFillingPage() {
  const biodentineFAQs = [
    {
      question: "What is Biodentine and how is it different from regular fillings?",
      answer: "Biodentine is a revolutionary bioactive material made from calcium silicate that mimics natural tooth structure. Unlike traditional fillings, it actively promotes tooth healing and regeneration, creating a stronger bond with your natural tooth."
    },
    {
      question: "What are the advantages of Biodentine fillings?",
      answer: "Biodentine fillings offer superior biocompatibility, promote natural tooth healing, provide excellent sealing properties, and have similar expansion properties to natural teeth. They also release calcium ions that help strengthen the surrounding tooth structure."
    },
    {
      question: "How long do Biodentine fillings last?",
      answer: "Biodentine fillings are highly durable and can last 10-15 years or more with proper care. Their bioactive properties actually help strengthen the tooth over time, potentially lasting longer than traditional filling materials."
    },
    {
      question: "Are Biodentine fillings suitable for all cavities?",
      answer: "Biodentine is particularly excellent for deep cavities, root canal treatments, and situations where the tooth pulp needs protection. We'll assess your specific case to determine if Biodentine is the best option for your restoration."
    },
    {
      question: "Is the Biodentine filling procedure different from regular fillings?",
      answer: "The procedure is similar to traditional fillings but Biodentine sets quickly and bonds directly to tooth structure without requiring etching or bonding agents. The placement technique is optimized for this advanced material's unique properties."
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Bioactive Properties",
      description: "Actively promotes healing and regeneration of natural tooth structure"
    },
    {
      icon: Shield,
      title: "Superior Protection",
      description: "Excellent sealing properties prevent bacterial infiltration and further decay"
    },
    {
      icon: Heart,
      title: "Biocompatible",
      description: "Highly compatible with natural tissue, reducing inflammation and sensitivity"
    },
    {
      icon: Activity,
      title: "Strengthens Teeth",
      description: "Releases beneficial minerals that strengthen surrounding tooth structure"
    }
  ];

  const comparisons = [
    {
      feature: "Bioactivity",
      biodentine: "Active healing promotion",
      traditional: "Inert material"
    },
    {
      feature: "Bonding",
      biodentine: "Chemical bond to tooth",
      traditional: "Mechanical retention"
    },
    {
      feature: "Sealing",
      biodentine: "Excellent marginal seal",
      traditional: "Good with proper technique"
    },
    {
      feature: "Expansion",
      biodentine: "Matches tooth expansion",
      traditional: "Different expansion rate"
    },
    {
      feature: "Pulp Protection",
      biodentine: "Promotes pulp healing",
      traditional: "Passive protection only"
    },
    {
      feature: "Longevity",
      biodentine: "10-15+ years",
      traditional: "5-10 years typically"
    }
  ];

  const idealCases = [
    {
      title: "Deep Cavities",
      description: "When decay is close to the nerve, Biodentine protects and promotes healing",
      icon: Shield
    },
    {
      title: "Root Canal Therapy",
      description: "Excellent for sealing and protecting teeth after root canal treatment",
      icon: Heart
    },
    {
      title: "Tooth Preservation",
      description: "When maximum tooth structure preservation is essential",
      icon: Leaf
    },
    {
      title: "Sensitive Teeth",
      description: "Reduces post-operative sensitivity due to biocompatible properties",
      icon: Activity
    }
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "Thorough examination to determine if Biodentine is the ideal choice"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Gentle removal of decay while preserving maximum healthy tooth structure"
    },
    {
      step: "3",
      title: "Placement",
      description: "Precise application of Biodentine using specialized techniques"
    },
    {
      step: "4",
      title: "Finishing",
      description: "Final shaping and polishing for optimal function and aesthetics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-white to-teal-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Biodentine Fillings"
        description="Advanced bioactive dental filling material that promotes natural tooth healing and regeneration using calcium silicate technology"
        price="£195"
        category="General Dentistry"
        duration="45-60 minutes"
        preparation="Local anesthesia if needed, standard cavity preparation"
        recovery="Minimal sensitivity, normal function restored immediately"
        benefits={[
          "Bioactive healing promotion",
          "Superior sealing properties",
          "Reduced post-operative sensitivity",
          "Long-lasting restoration",
          "Strengthens surrounding tooth structure"
        ]}
        risks={[
          "Standard filling risks apply",
          "Higher cost than traditional materials",
          "Not suitable for all cases",
          "Technique sensitive placement"
        ]}
        rating={4.9}
        reviewCount={75}
        url="https://peartree.dental/services/general/biodentine-fillings"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Biodentine Fillings"
        faqs={biodentineFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/general" className="hover:text-pear-primary">General</Link>
            <span>/</span>
            <span className="text-green-600 font-medium">Biodentine Fillings</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/general" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to General Services
              </Link>

              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Leaf className="w-4 h-4 mr-2" />
                Advanced Bioactive Material
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Biodentine
                <span className="text-green-600 block">Fillings</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of dental restorations with Biodentine - a revolutionary
                bioactive material that doesn't just fill teeth, it helps them heal naturally.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-dental-teal border border-dental-teal rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-white mr-2 fill-current" />
                <span className="text-sm font-semibold text-white">Advanced regenerative dental technology</span>
              </div>

              {/* Key Features */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Biodentine?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Promotes healing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Bioactive properties</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Superior sealing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Long-lasting</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-3xl font-bold text-green-600">{getTreatmentPrice("Biodentine Filling")}</div>
                  <div className="text-sm text-gray-600">Per filling</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/book">
                    <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold">
                      <span>
                        Book Biodentine Filling
                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </span>
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-green-100 to-teal-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-500 text-white">Bioactive Technology</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Natural Healing</h3>
                  <p className="text-gray-600">
                    Biodentine doesn't just restore your tooth - it actively promotes
                    healing and strengthens the surrounding natural tooth structure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-green-600">Bioactive</div>
                      <div className="text-gray-600">Healing promotion</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-green-600">10-15+ years</div>
                      <div className="text-gray-600">Expected lifespan</div>
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
              The Biodentine Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Biodentine represents the future of dental restorations
              with its unique bioactive properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Biodentine vs Traditional Fillings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Biodentine's advanced bioactive properties offer superior
              performance compared to conventional filling materials.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Biodentine</th>
                    <th className="py-4 px-6 text-center">Traditional Fillings</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">{item.biodentine}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ideal Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              When Biodentine is Ideal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certain dental situations particularly benefit from Biodentine's
              unique bioactive and healing properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {idealCases.map((case_) => {
              const Icon = case_.icon;
              return (
                <Card key={case_.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-3">{case_.title}</h3>
                    <p className="text-sm text-gray-600">{case_.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Biodentine Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our precise 4-step process ensures optimal placement and bonding
              of this advanced bioactive material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-green-300" />
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
          <Card className="bg-gradient-to-r from-green-600 to-teal-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Experience Advanced Dental Care
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Invest in the future of dental restorations with Biodentine. Book your
                consultation today and discover how bioactive technology can heal your teeth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90 font-semibold">
                  Book Biodentine Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600">
                  Learn About Other Filling Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                {getTreatmentPrice("Biodentine Filling")} • Bioactive healing • 10-15+ year lifespan
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
