import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Home,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  ChevronLeft,
  Moon,
  Calendar,
  Heart,
  Sparkles
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Boutique Whitening - Professional At-Home System | Pear Tree Dental",
  description: "Boutique whitening in Burton Joyce - professional at-home teeth whitening system. 6-8 shades whiter from £400. Book your consultation today.",
  keywords: [
    "Boutique whitening Burton Joyce",
    "at-home teeth whitening Nottingham",
    "professional whitening trays",
    "custom whitening system",
    "take-home whitening Burton Joyce",
    "affordable teeth whitening"
  ],
  openGraph: {
    title: "Boutique Whitening - Professional At-Home Results | Pear Tree Dental",
    description: "Achieve 6-8 shades whiter teeth with Boutique whitening system. Professional results from the comfort of home.",
    type: "website",
    url: "https://peartreedental.co.uk/services/cosmetic/teeth-whitening/boutique"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/cosmetic/teeth-whitening/boutique"
  }
};

export default function BoutiqueWhiteningPage() {
  const boutiqueFAQs = [
    {
      question: "How does Boutique whitening work?",
      answer: "Boutique whitening uses custom-fitted trays made from impressions of your teeth. You wear these trays with professional-grade whitening gel for a specified time each day, typically 2-3 weeks."
    },
    {
      question: "How many shades whiter will my teeth become?",
      answer: "Most patients achieve 6-8 shades whiter with Boutique whitening. Results depend on your starting shade and how well you follow the treatment protocol."
    },
    {
      question: "Is Boutique whitening safe?",
      answer: "Yes, Boutique whitening is completely safe when used as directed. The system uses clinically proven ingredients and is supervised by our dental professionals."
    },
    {
      question: "How long do I wear the trays each day?",
      answer: "Treatment time varies depending on the gel strength prescribed. Typically, you'll wear the trays for 4-6 hours during the day or overnight while sleeping."
    },
    {
      question: "What if I experience sensitivity?",
      answer: "Some mild sensitivity is normal. We provide desensitizing gel and can adjust your treatment schedule if needed. Most sensitivity subsides after treatment."
    }
  ];

  const features = [
    {
      icon: Home,
      title: "At-Home Convenience",
      description: "Whiten your teeth in the comfort of your own home at your own pace",
      highlight: true
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Treatment fits around your lifestyle - day or night application"
    },
    {
      icon: Shield,
      title: "Professional Grade",
      description: "Stronger and more effective than over-the-counter products"
    },
    {
      icon: Users,
      title: "Custom Fitted",
      description: "Trays made specifically for your teeth ensure even whitening"
    },
    {
      icon: Calendar,
      title: "2-3 Week Treatment",
      description: "Gradual whitening over 2-3 weeks for comfortable results"
    },
    {
      icon: Heart,
      title: "Gentle Formula",
      description: "Designed to minimize sensitivity while maximizing results"
    }
  ];

  const process = [
    {
      phase: "Initial Consultation",
      duration: "30 minutes",
      description: "Assessment and treatment planning for your whitening journey",
      details: [
        "Oral health examination",
        "Shade assessment and photography",
        "Treatment suitability evaluation",
        "Custom tray impressions taken"
      ]
    },
    {
      phase: "Tray Collection",
      duration: "15 minutes",
      description: "Collection of your custom trays and whitening kit",
      details: [
        "Perfect-fit custom trays",
        "Professional whitening gel supply",
        "Detailed usage instructions",
        "Emergency contact information"
      ]
    },
    {
      phase: "Home Treatment",
      duration: "2-3 weeks",
      description: "Self-administered treatment in the comfort of your home",
      details: [
        "Daily tray application",
        "Gradual shade improvement",
        "Flexible timing options",
        "Ongoing support available"
      ]
    },
    {
      phase: "Progress Review",
      duration: "15 minutes",
      description: "Final assessment and maintenance planning",
      details: [
        "Results documentation",
        "Maintenance guidance",
        "Top-up gel provision",
        "Long-term care advice"
      ]
    }
  ];

  const benefits = [
    "Professional-strength whitening gel",
    "Custom-fitted trays for even results",
    "Flexible treatment schedule",
    "6-8 shades improvement typically",
    "Comfort of your own home",
    "Professional supervision and support",
    "Top-up treatments available",
    "Cost-effective professional whitening"
  ];

  const comparison = [
    {
      feature: "Strength",
      boutique: "Professional grade",
      otc: "Limited strength"
    },
    {
      feature: "Fit",
      boutique: "Custom-made trays",
      otc: "One-size-fits-all"
    },
    {
      feature: "Results",
      boutique: "6-8 shades",
      otc: "2-3 shades"
    },
    {
      feature: "Support",
      boutique: "Professional guidance",
      otc: "Self-guided only"
    },
    {
      feature: "Safety",
      boutique: "Dentist supervised",
      otc: "Unsupervised use"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Boutique Teeth Whitening"
        description="Professional at-home teeth whitening system with custom-fitted trays. Achieve 6-8 shades whiter teeth in the comfort of your home."
        price="From £400"
        category="Cosmetic Dentistry"
        duration="2-3 weeks home treatment"
        preparation="Dental examination, custom tray impressions"
        recovery="No downtime, possible mild sensitivity"
        benefits={[
          "6-8 shades whiter teeth",
          "Custom-fitted treatment trays",
          "Professional-grade whitening gel",
          "Flexible at-home schedule",
          "Professional supervision"
        ]}
        risks={[
          "Mild temporary sensitivity",
          "Requires consistent daily use",
          "Not suitable for all stain types",
          "Results vary by individual"
        ]}
        rating={4.8}
        reviewCount={320}
        url="https://peartreedental.co.uk/services/cosmetic/teeth-whitening/boutique"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Boutique Teeth Whitening"
        faqs={boutiqueFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/cosmetic" className="hover:text-pear-primary">Cosmetic</Link>
            <span>/</span>
            <Link href="/services/cosmetic/teeth-whitening" className="hover:text-pear-primary">Teeth Whitening</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Boutique</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/cosmetic/teeth-whitening" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Teeth Whitening
              </Link>

              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Sparkles className="w-4 h-4 mr-2" />
                Most Popular Choice
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Boutique
                <span className="text-blue-600 block">Whitening</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Professional-strength teeth whitening in the comfort of your own home.
                Custom-fitted trays and professional-grade gel deliver outstanding results.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Over 1,000 satisfied patients</span>
              </div>

              {/* Key Features */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose Boutique?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">At-home convenience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">6-8 shades whiter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Custom-fitted trays</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Professional strength</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">From</div>
                  <div className="text-3xl font-bold text-blue-600">{getTreatmentPrice("Teeth Whitening")}</div>
                  <div className="text-sm text-gray-600">Complete kit</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                    Book Boutique Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                    Call 0115 931 2525
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500 text-white">At-Home System</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Professional Results at Home</h3>
                  <p className="text-gray-600">
                    Custom-fitted trays and professional-grade whitening gel
                    deliver results that match in-practice treatments.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">2-3 Weeks</div>
                      <div className="text-gray-600">Treatment time</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-600">6-8 Shades</div>
                      <div className="text-gray-600">Whiter teeth</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Boutique Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience professional-grade whitening with the convenience and
              flexibility of at-home treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`text-center hover:shadow-lg transition-shadow ${
                    feature.highlight ? 'border-2 border-blue-500 bg-blue-50' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      feature.highlight ? 'bg-blue-500' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${feature.highlight ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Professional vs Over-the-Counter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why professional Boutique whitening delivers superior results
              compared to shop-bought alternatives.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Boutique Professional</th>
                    <th className="py-4 px-6 text-center">Over-the-Counter</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">{item.boutique}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.otc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Boutique Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process ensures you get the best possible results
              from your at-home whitening treatment.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {process.map((phase, index) => (
              <Card key={phase.phase} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <Badge variant="outline" className="border-blue-500 text-blue-600">
                          {phase.duration}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-pear-primary mb-2">{phase.phase}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Patients Love Boutique
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The perfect balance of professional results and at-home convenience.
                Boutique whitening fits seamlessly into your lifestyle.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Moon className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-pear-primary">Day or Night Treatment</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Choose to wear your trays during the day for 4-6 hours or overnight
                  while sleeping - whatever works best for your schedule.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">At-Home Convenience</h3>
                    <p className="text-white/90">
                      Professional results in the comfort and privacy of your own home,
                      on your own schedule.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold">6-8</div>
                      <div className="text-sm text-white/80">Shades Whiter</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">2-3</div>
                      <div className="text-sm text-white/80">Weeks Treatment</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Start Your Whitening Journey
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience professional-grade whitening from home with Boutique.
                Book your consultation today and discover the convenience of custom whitening.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Book Boutique Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Compare Whitening Options
                </Button>
              </div>

              <div className="text-sm text-white/80">
                From {getTreatmentPrice("Teeth Whitening")} • 6-8 Shades Whiter • At-Home Convenience
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
