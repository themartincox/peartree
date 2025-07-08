import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Layers,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  ChevronLeft,
  Zap,
  Palette,
  Heart,
  Award
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Composite Edge Bonding - Instant Smile Enhancement | Pear Tree Dental",
  description: "Composite edge bonding in Burton Joyce. Fix chipped, worn, or uneven teeth edges. £150 per tooth. Same-day treatment for immediate smile improvement.",
  keywords: [
    "composite edge bonding Burton Joyce",
    "tooth edge repair Nottingham",
    "chipped tooth repair",
    "worn teeth edges",
    "cosmetic tooth bonding",
    "same day smile improvement",
    "dental bonding Burton Joyce"
  ],
  openGraph: {
    title: "Composite Edge Bonding - Fix Chipped & Worn Teeth | Pear Tree Dental",
    description: "Repair chipped, worn, or uneven tooth edges with composite bonding. Same-day treatment from £150 per tooth.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic/edge-bonding"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic/edge-bonding"
  }
};

export default function CompositeEdgeBondingPage() {
  const edgeBondingFAQs = [
    {
      question: "What is composite edge bonding?",
      answer: "Composite edge bonding is a cosmetic dental procedure that uses tooth-colored resin to repair and reshape the edges of your teeth. It's ideal for fixing chips, cracks, worn edges, or creating a more even smile line."
    },
    {
      question: "How long does composite edge bonding last?",
      answer: "With proper care, composite edge bonding typically lasts 5-8 years. The longevity depends on your oral hygiene, habits (like nail-biting or teeth grinding), and the location of the bonding."
    },
    {
      question: "Is edge bonding painful?",
      answer: "No, composite edge bonding is typically painless as it only involves the outer surface of the tooth. No drilling or anesthesia is usually required, making it a comfortable treatment option."
    },
    {
      question: "Can edge bonding be completed in one visit?",
      answer: "Yes! One of the major advantages of composite edge bonding is that it can usually be completed in a single appointment, often in just 30-60 minutes per tooth."
    },
    {
      question: "How do I care for my bonded teeth?",
      answer: "Care for bonded teeth like natural teeth with regular brushing and flossing. Avoid biting hard objects, nail-biting, or using teeth as tools. Regular dental check-ups help maintain and monitor the bonding."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "Immediate transformation in a single appointment with no waiting period"
    },
    {
      icon: Shield,
      title: "Minimally Invasive",
      description: "No drilling or removal of healthy tooth structure required"
    },
    {
      icon: Palette,
      title: "Natural Appearance",
      description: "Custom color-matched to blend seamlessly with your natural teeth"
    },
    {
      icon: Clock,
      title: "Quick Treatment",
      description: "Typically completed in 30-60 minutes per tooth in one visit"
    }
  ];

  const suitableCases = [
    {
      issue: "Chipped Teeth",
      description: "Repair small to medium chips from accidents or wear",
      result: "Smooth, natural-looking tooth edge"
    },
    {
      issue: "Worn Edges",
      description: "Restore teeth worn down by grinding or acid erosion",
      result: "Rebuilt edge with proper length and shape"
    },
    {
      issue: "Uneven Smile Line",
      description: "Create a more symmetrical and even smile",
      result: "Harmonious smile with balanced tooth edges"
    },
    {
      issue: "Minor Gaps",
      description: "Close small spaces between teeth edges",
      result: "Seamless smile without gaps"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Assessment of your teeth and discussion of desired improvements"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Gentle cleaning and slight roughening of tooth surface for bonding"
    },
    {
      step: "3",
      title: "Bonding",
      description: "Application and sculpting of tooth-colored composite resin"
    },
    {
      step: "4",
      title: "Finishing",
      description: "Shaping, smoothing, and polishing for a natural appearance"
    }
  ];

  const beforeAfter = [
    {
      case: "Chipped Front Tooth",
      before: "Visible chip affecting smile confidence",
      after: "Seamless repair indistinguishable from natural tooth"
    },
    {
      case: "Worn Canine Tips",
      before: "Flattened, aged appearance from grinding",
      after: "Restored pointed canine shape for youthful smile"
    },
    {
      case: "Uneven Smile Line",
      before: "Irregular tooth heights affecting aesthetics",
      after: "Balanced, harmonious smile line"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Composite Edge Bonding"
        description="Cosmetic dental treatment using tooth-colored resin to repair chipped, worn, or uneven tooth edges for immediate smile enhancement"
        price="£150 per tooth"
        category="Cosmetic Dentistry"
        duration="30-60 minutes per tooth"
        preparation="No special preparation required"
        recovery="No downtime, immediate normal function"
        benefits={[
          "Immediate smile improvement",
          "No drilling or tooth removal",
          "Natural appearance",
          "Same-day completion",
          "Cost-effective solution"
        ]}
        risks={[
          "May chip or wear over time",
          "Requires replacement every 5-8 years",
          "Not suitable for large restorations",
          "Can stain with certain foods/drinks"
        ]}
        rating={4.8}
        reviewCount={120}
        url="https://peartree.dental/services/cosmetic/edge-bonding"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Composite Edge Bonding"
        faqs={edgeBondingFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/cosmetic" className="hover:text-pear-primary">Cosmetic</Link>
            <span>/</span>
            <span className="text-purple-600 font-medium">Edge Bonding</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/cosmetic" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Cosmetic Services
              </Link>

              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Layers className="w-4 h-4 mr-2" />
                Same-Day Smile Enhancement
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Composite
                <span className="text-purple-600 block">Edge Bonding</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Fix chipped, worn, or uneven teeth edges instantly with composite bonding.
                Transform your smile in just one appointment with natural-looking results.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Over 500 successful edge bonding treatments</span>
              </div>

              {/* Key Features */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Edge Bonding?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Same-day results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">No drilling required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Natural appearance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Painless procedure</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">From</div>
                  <div className="text-3xl font-bold text-purple-600">{getTreatmentPrice("Composite Edge Bonding")}</div>
                  <div className="text-sm text-gray-600">Per tooth</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                    Book Edge Bonding
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-500 text-white">Same-Day Treatment</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-purple-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Instant Transformation</h3>
                  <p className="text-gray-600">
                    Watch your smile transform in real-time as we sculpt and shape
                    your tooth edges to perfection in just one visit.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-purple-600">30-60 mins</div>
                      <div className="text-gray-600">Per tooth</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-purple-600">5-8 years</div>
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
              The Edge Bonding Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most conservative and effective way to enhance your smile
              with immediate, natural-looking results.
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

      {/* Suitable Cases Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Perfect For These Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edge bonding can address various cosmetic concerns to give you
              the perfect smile you've always wanted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suitableCases.map((case_) => (
              <Card key={case_.issue} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-pear-primary mb-3">{case_.issue}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-purple-700">Result: </span>
                    <span className="text-sm text-gray-700">{case_.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Real Patient Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with composite edge bonding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((transformation) => (
              <Card key={transformation.case} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-primary">{transformation.case}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Before</h4>
                      <p className="text-sm text-gray-700">{transformation.before}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">After</h4>
                      <p className="text-sm text-gray-700">{transformation.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Edge Bonding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our gentle 4-step process transforms your smile in just one appointment
              with comfortable, precise treatment.
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
                  <p className="text-sm text-gray-600">{step.description}</p>
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
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Transform Your Smile Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience the instant confidence boost of composite edge bonding.
                Book your same-day transformation appointment now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
                  Book Edge Bonding
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Explore Other Cosmetic Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                From {getTreatmentPrice("Composite Edge Bonding")} per tooth • Same-day results • 5-8 year lifespan
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
