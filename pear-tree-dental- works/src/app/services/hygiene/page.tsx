import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema, { commonDentalFAQs } from "@/components/seo/ServiceFAQSchema";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Heart,
  Wind,
  Award,
  Smile
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Dental Hygiene Services - Professional Cleaning in Burton Joyce",
  description: "Professional dental hygiene services in Burton Joyce. Scale & polish, Air Flow stain removal, preventive care. Keep your teeth and gums healthy with expert hygiene treatments.",
  keywords: [
    "dental hygiene Burton Joyce",
    "scale and polish Nottingham",
    "Air Flow treatment Burton Joyce",
    "dental cleaning Nottinghamshire",
    "preventive dental care",
    "gum disease prevention",
    "professional teeth cleaning"
  ],
  openGraph: {
    title: "Professional Dental Hygiene Services | Pear Tree Dental Burton Joyce",
    description: "Expert dental hygiene treatments including scale & polish and Air Flow stain removal for optimal oral health.",
    type: "website",
    url: "https://peartree.dental/services/hygiene"
  },
  alternates: {
    canonical: "https://peartree.dental/services/hygiene"
  }
};

export default function HygieneServicesPage() {
  const hygieneFAQs = [
    {
      question: "How often should I have professional dental cleaning?",
      answer: "Most patients benefit from professional cleaning every 6 months. However, some patients with gum disease or heavy staining may need more frequent visits. Our hygienist will recommend the ideal frequency based on your oral health."
    },
    {
      question: "What's the difference between scale & polish and Air Flow?",
      answer: "Scale & polish removes tartar and plaque using traditional instruments and polishing. Air Flow uses advanced technology to remove stubborn stains and biofilm that traditional cleaning can't reach. Both are important for optimal oral health."
    },
    {
      question: "Is professional dental cleaning painful?",
      answer: "Professional cleaning is generally comfortable. Some patients may experience mild sensitivity, especially if they have gum inflammation. We use gentle techniques and can provide numbing gel if needed for comfort."
    },
    {
      question: "Can hygiene treatment help with bad breath?",
      answer: "Yes! Professional cleaning removes bacteria and plaque that cause bad breath. Regular hygiene appointments, combined with good home care, significantly improve breath freshness and oral health."
    },
    {
      question: "What should I expect during a hygiene appointment?",
      answer: "Your appointment includes examination of teeth and gums, removal of plaque and tartar, polishing, and personalized advice on home care. We may also apply fluoride treatment for additional protection."
    },
    commonDentalFAQs.insurance
  ];

  const services = [
    {
      name: "Scale & Polish",
      description: "Professional removal of plaque and tartar with polishing for smooth, clean teeth",
      price: getTreatmentPrice("Scale and Polish (Hygienist)"),
      duration: "30-45 minutes",
      benefits: ["Removes plaque & tartar", "Polishes teeth", "Prevents gum disease", "Fresh breath"],
      popular: true,
      link: "/services/hygiene/scale-polish",
      icon: Sparkles
    },
    {
      name: "Air Flow Stain Removal",
      description: "Advanced stain removal system for stubborn coffee, tea, wine, and tobacco stains",
      price: getTreatmentPrice("Air Flow Stain Removal"),
      duration: "30-45 minutes",
      benefits: ["Removes stubborn stains", "Gentle on enamel", "Instant results", "No harsh scraping"],
      popular: false,
      link: "/services/hygiene/airflow-stain-removal",
      icon: Wind
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Prevent Gum Disease",
      description: "Regular cleaning prevents gingivitis and periodontitis, protecting your gums"
    },
    {
      icon: Sparkles,
      title: "Remove Stains",
      description: "Professional cleaning removes surface stains for a brighter smile"
    },
    {
      icon: Heart,
      title: "Improve Overall Health",
      description: "Good oral hygiene is linked to better heart health and overall wellbeing"
    },
    {
      icon: Smile,
      title: "Fresh Breath",
      description: "Eliminate bacteria and plaque that cause persistent bad breath"
    }
  ];

  const whyChooseUs = [
    "Experienced dental hygienists",
    "Latest Air Flow technology",
    "Gentle, comfortable treatments",
    "Personalized oral health advice",
    "Flexible appointment times",
    "Membership plans available",
    "Modern, clean environment",
    "Focus on preventive care"
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description: "Thorough examination of your teeth, gums, and oral health status"
    },
    {
      step: "2",
      title: "Professional Cleaning",
      description: "Removal of plaque, tartar, and stains using appropriate techniques"
    },
    {
      step: "3",
      title: "Polishing",
      description: "Smooth polishing to remove surface stains and bacteria"
    },
    {
      step: "4",
      title: "Education",
      description: "Personalized advice on home care and maintaining oral health"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Dental Hygiene Services"
        description="Professional dental hygiene treatments including scale & polish and Air Flow stain removal for optimal oral health and gum disease prevention"
        price="From £70"
        category="Preventive Dental Care"
        duration="30-45 minutes"
        preparation="No special preparation required"
        recovery="No downtime, immediate normal function"
        benefits={[
          "Prevents gum disease",
          "Removes plaque and tartar",
          "Eliminates surface stains",
          "Improves breath freshness",
          "Maintains oral health"
        ]}
        risks={[
          "Mild temporary sensitivity",
          "Slight gum irritation possible",
          "Not suitable during pregnancy (Air Flow)",
          "May cause minor bleeding if gums inflamed"
        ]}
        rating={4.8}
        reviewCount={250}
        url="https://peartree.dental/services/hygiene"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Dental Hygiene Services"
        faqs={hygieneFAQs}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Hygiene Services
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Professional
                <span className="text-cyan-600 block">Dental Hygiene</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Maintain optimal oral health with our professional hygiene services.
                From routine scale & polish to advanced Air Flow stain removal.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Trusted hygiene care for over 15 years</span>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium">Prevent gum disease</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium">Remove stains</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium">Freshen breath</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium">Expert advice</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold group">
                  Book Hygiene Appointment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white">
                  Call 0115 931 2935
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 p-8 h-96">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-pear-primary">Healthy Gums, Healthy Life</h3>
                  <p className="text-gray-600">
                    Professional hygiene care is essential for preventing gum disease,
                    maintaining fresh breath, and supporting your overall health.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-cyan-600">Every 6 months</div>
                      <div className="text-gray-600">Recommended frequency</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-cyan-600">30-45 mins</div>
                      <div className="text-gray-600">Appointment time</div>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-white/90">
                    Learn More About Benefits
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Our Hygiene Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional hygiene treatments designed
              to keep your teeth and gums healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.name}
                  className={`relative hover:shadow-xl transition-all duration-300 h-full ${
                    service.popular ? 'border-2 border-cyan-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-cyan-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className={service.popular ? 'pt-12' : 'pt-6'}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-pear-primary">
                          {service.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-cyan-600 border-cyan-600 mt-1">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Duration:</span> {service.duration}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-pear-primary">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link href={service.link}>
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                          Learn More About {service.name}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Professional Hygiene Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular professional hygiene care does more than keep your mouth clean -
              it protects your overall health and wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Our Hygiene Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that expert hygiene care can make
              to your oral health and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 bg-cyan-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive hygiene appointments follow a proven process
              to ensure optimal results and your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Book Your Hygiene Appointment
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards optimal oral health. Our expert hygienists
                are ready to help you maintain a healthy, beautiful smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90 font-semibold">
                  Book Hygiene Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                  Call 0115 931 2935
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Experienced hygienists</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Latest technology</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Gentle, comfortable care</span>
                </div>
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
