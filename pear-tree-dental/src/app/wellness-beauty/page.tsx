import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Check,
  Star,
  Sparkles,
  TrendingUp,
  BarChart3,
  Calendar,
  Camera,
  Shield,
  Users,
  Heart,
  Award,
  Smartphone,
  Target,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function WellnessBeautyPage() {
  const packages = [
    {
      name: "Independent Clinic",
      description: "Single-location wellness or beauty clinic",
      setup: "£4,000",
      monthly: "£800/month + 3% revenue share",
      ideal: "Solo practitioners, independent clinics, new beauty businesses",
      features: [
        "Professional clinic website",
        "Treatment showcase galleries",
        "Online consultation booking",
        "Before/after photo galleries",
        "Client testimonial system",
        "Treatment pricing display",
        "Staff profile pages",
        "Mobile-optimised design",
        "SSL security & hosting",
        "Basic SEO setup",
        "Google Business integration",
        "Social media integration"
      ]
    },
    {
      name: "Established Clinic",
      description: "Multi-treatment facility with growth ambitions",
      setup: "£7,000",
      monthly: "£1,200/month + 5% revenue share",
      ideal: "Growing clinics, multi-treatment centres, expanding beauty brands",
      features: [
        "Advanced clinic platform",
        "Multiple treatment categories",
        "Advanced booking system",
        "Client portal & history",
        "Email marketing automation",
        "Financing calculator integration",
        "Advanced photo galleries",
        "Video consultations",
        "Review management system",
        "Advanced analytics & reporting",
        "Multi-location support",
        "Staff scheduling system",
        "SEO optimisation",
        "PPC campaign management"
      ]
    },
    {
      name: "Wellness Group",
      description: "Multi-location wellness organisation",
      setup: "£12,000",
      monthly: "£2,000/month + 7% revenue share",
      ideal: "Multi-location groups, franchise operations, premium wellness brands",
      features: [
        "Custom wellness platform",
        "Multi-location management",
        "Advanced automation workflows",
        "Membership management",
        "Subscription services",
        "Advanced personalisation",
        "Predictive analytics",
        "Custom integrations & APIs",
        "International SEO",
        "Performance optimisation",
        "Dedicated account management",
        "Staff training & management",
        "Advanced reporting suite",
        "Brand consistency tools",
        "Client lifecycle automation"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: Camera,
      title: "Treatment Galleries",
      description: "Stunning before/after galleries and treatment showcases that build trust and drive conversions"
    },
    {
      icon: Calendar,
      title: "Consultation Booking",
      description: "Advanced booking systems with consultation scheduling, staff availability, and automated reminders"
    },
    {
      icon: DollarSign,
      title: "Financing Calculators",
      description: "Treatment cost calculators and financing options to help clients plan their wellness journey"
    },
    {
      icon: Users,
      title: "Client Testimonials",
      description: "Comprehensive review and testimonial systems that showcase real client results and experiences"
    },
    {
      icon: Shield,
      title: "Compliance & Privacy",
      description: "GDPR-compliant client data handling with medical-grade privacy and security standards"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      description: "Mobile-first design optimised for clients browsing treatments and booking on their phones"
    }
  ];

  const results = [
    {
      metric: "500%",
      description: "ROI typically exceeds within 18 months",
      icon: TrendingUp
    },
    {
      metric: "280%",
      description: "Average increase in consultation bookings",
      icon: Calendar
    },
    {
      metric: "75%",
      description: "Improvement in online enquiry conversion rates",
      icon: Target
    },
    {
      metric: "40hrs",
      description: "Monthly time savings through automation",
      icon: Clock
    }
  ];

  const wellnessTypes = [
    {
      category: "Aesthetic Clinics",
      treatments: ["Botox & Fillers", "Laser Treatments", "Skin Rejuvenation", "Body Contouring"],
      icon: Sparkles
    },
    {
      category: "Beauty Salons",
      treatments: ["Facial Treatments", "Nail Services", "Hair Styling", "Makeup Services"],
      icon: Star
    },
    {
      category: "Wellness Centres",
      treatments: ["Massage Therapy", "Physiotherapy", "Acupuncture", "Nutrition Coaching"],
      icon: Heart
    },
    {
      category: "Medical Spas",
      treatments: ["Medical Facials", "Chemical Peels", "Laser Hair Removal", "Injectable Treatments"],
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 via-pink-700 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Premium
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Wellness & Beauty Websites That
              <span className="text-yellow-300"> Convert Consultations</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Sophisticated websites for aesthetic clinics, spas, and beauty services.
              We create premium digital experiences that attract high-value clients and grow your practice.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>Premium Design</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>Advanced Booking</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold"
              >
                <Link href="/contact?service=wellness-beauty">
                  Get Your Wellness Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-purple-800 bg-white/5"
              >
                <Link href="#packages" className="text-white hover:text-purple-800">
                  <span className="font-heading font-semibold">
                    View Packages
                  </span>
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Proven Wellness & Beauty Results
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              Our wellness and beauty websites deliver exceptional results through premium design and strategic client journey optimisation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <result.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-purple-600 mb-2">
                  {result.metric}
                </div>
                <p className="font-body text-gray-600 text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Types */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Specialised for Your Wellness Business
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of different wellness and beauty businesses.
              Our solutions are tailored to your specific services and client expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessTypes.map((type, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {type.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.treatments.map((treatment, treatmentIndex) => (
                      <li key={treatmentIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="font-body text-gray-700 text-sm">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Premium Wellness Features
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Everything you need to showcase treatments, build trust, and convert consultations into loyal clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Wellness Package
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Revenue-sharing partnerships designed for premium wellness and beauty businesses.
              We grow when you grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${index === 1 ? 'ring-2 ring-purple-600' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-heading font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className={index === 1 ? 'pt-12' : ''}>
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600">
                    {pkg.description}
                  </CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-heading font-bold text-purple-600">
                      {pkg.setup}
                    </div>
                    <div className="text-lg text-gray-600">
                      {pkg.monthly}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit border-purple-200 text-purple-700">
                    Ideal for: {pkg.ideal}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${index === 1 ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-midnight-blue hover:bg-midnight-blue/90'} text-white`}
                  >
                    <Link href="/contact?service=wellness-beauty">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Postino for Wellness & Beauty?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">
                Typical Web Agencies:
              </h3>
              <ul className="space-y-4">
                {[
                  "Generic templates that don't reflect premium positioning",
                  "No understanding of wellness client psychology",
                  "Basic booking systems that lose potential clients",
                  "Poor mobile experience for browsing treatments",
                  "No compliance with health and beauty regulations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-purple-600 mb-6">
                Our Wellness Approach:
              </h3>
              <ul className="space-y-4">
                {[
                  "Premium design that reflects your high-quality services",
                  "Deep understanding of wellness client decision-making",
                  "Advanced booking and consultation scheduling systems",
                  "Mobile-optimised experience for treatment browsing",
                  "Full GDPR compliance and medical-grade privacy protection"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Elevate Your Wellness Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Join premium wellness and beauty businesses achieving exceptional ROI
            with our sophisticated, conversion-focused approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold"
            >
              <Link href="/contact?service=wellness-beauty">
                Start Your Wellness Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-purple-800 bg-white/5"
            >
              <Link href="/case-studies" className="text-white hover:text-purple-800">
                <span className="font-heading font-semibold">
                  View Case Studies
                </span>
                <Award className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Premium wellness and beauty websites for sophisticated businesses.
                We create digital experiences that convert consultations.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Wellness Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/wellness-beauty" className="hover:text-white transition-colors">
                    Wellness & Beauty Websites
                  </Link>
                </li>
                <li>
                  <Link href="/consultation-booking" className="hover:text-white transition-colors">
                    Consultation Booking Systems
                  </Link>
                </li>
                <li>
                  <Link href="/treatment-showcases" className="hover:text-white transition-colors">
                    Treatment Showcase Galleries
                  </Link>
                </li>
                <li>
                  <Link href="/wellness-marketing" className="hover:text-white transition-colors">
                    Wellness Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    All Industries
                  </Link>
                </li>
                <li>
                  <Link href="/industries/medical-practices" className="hover:text-white transition-colors">
                    Medical Practices
                  </Link>
                </li>
                <li>
                  <Link href="/industries/dental-practices" className="hover:text-white transition-colors">
                    Dental Practices
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce" className="hover:text-white transition-colors">
                    Ecommerce
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/contact?service=wellness-beauty" className="hover:text-white transition-colors">
                    Wellness Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/revenue-forecast" className="hover:text-white transition-colors">
                    Revenue Forecast
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Premium wellness & beauty websites for sophisticated businesses.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
