import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema, { commonDentalFAQs } from "@/components/seo/ServiceFAQSchema";
import ServiceHero from "@/components/ServiceHero";
import { getServiceHeroConfig } from "@/data/serviceHeroes";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
  Smile,
  Camera,
  Shield
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry - Transform Your Smile in Burton Joyce",
  description: "Transform your smile with cosmetic dentistry in Burton Joyce. Teeth whitening, veneers, composite bonding, smile makeovers. Expert treatments to boost your confidence and oral health.",
  keywords: [
    "cosmetic dentistry Burton Joyce",
    "smile makeover Nottingham",
    "teeth whitening Burton Joyce",
    "dental veneers Nottinghamshire",
    "composite bonding Burton Joyce",
    "smile transformation Nottingham",
    "cosmetic dental treatments Burton Joyce",
    "aesthetic dentistry Nottinghamshire"
  ],
  openGraph: {
    title: "Cosmetic Dentistry | Transform Your Smile | Pear Tree Dental",
    description: "Transform your smile with our expert cosmetic dental treatments in Burton Joyce",
    type: "website",
    url: "https://peartree.dental/services/cosmetic"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic"
  }
};

export default function CosmeticDentistryPage() {
  const cosmeticFAQs = [
    {
      question: "How much does cosmetic dentistry cost?",
      answer: "Cosmetic treatments start from £180 for composite bonding and range up to £4,500 for complete smile makeovers. We offer free consultations, flexible payment plans, and 10% membership discounts to make treatments affordable."
    },
    {
      question: "Will cosmetic dental treatments look natural?",
      answer: "Yes, our cosmetic treatments are designed to look completely natural. We use high-quality materials and advanced techniques to ensure your results blend seamlessly with your natural teeth."
    },
    {
      question: "How long do cosmetic dental results last?",
      answer: "Results vary by treatment: composite bonding (5-8 years), veneers (10-20 years), teeth whitening (1-3 years). Proper oral hygiene and regular check-ups help maximize longevity."
    },
    {
      question: "Can I see what my smile will look like before treatment?",
      answer: "Yes, we use digital smile design technology to show you exactly how your new smile will look before we begin any treatment. This ensures you're completely happy with the planned results."
    },
    {
      question: "Is cosmetic dentistry painful?",
      answer: "Most cosmetic treatments are minimally invasive and cause little to no discomfort. We use local anesthesia when needed and provide detailed aftercare instructions for your comfort."
    },
    commonDentalFAQs.insurance
  ];

  const treatments = [
    {
      name: "Professional Teeth Whitening",
      description: "Brighten your smile by up to 8 shades with our professional whitening treatments",
      price: getTreatmentPrice("Teeth Whitening"),
      duration: "1 hour",
      results: "Immediate",
      popular: true,
      link: "/services/cosmetic/teeth-whitening",
      socialProof: "Over 1,000 happy patients"
    },
    {
      name: "Dental Veneers",
      description: "Transform your smile with ultra-thin, porcelain, or composite veneers - choose your perfect option",
      price: "From £700",
      duration: "Same day to 2-3 visits",
      results: "Immediate to 10 years +",
      popular: false,
      link: "/veneers",
      socialProof: "Over 500 happy patients"
    },
    {
      name: "Composite Bonding",
      description: "Quick and affordable solution for minor imperfections and gaps",
      price: getTreatmentPrice("Composite Edge Bonding"),
      duration: "1 hour - 3 hours",
      results: "Immediate - up to 7 years",
      popular: false,
      link: "/services/cosmetic/bonding"
    },
    {
      name: "Complete Smile Makeover",
      description: "Comprehensive transformation combining multiple treatments for your perfect smile",
      price: "From £1,000",
      duration: "2-12 months",
      results: "Life-changing",
      popular: true,
      link: "/services/complete-smile-makeover",
      socialProof: "180+ smile transformations"
    },
    {
      name: "Wedding Day Smile",
      description: "Perfect smile for your special day with timeline-based treatments for brides and grooms",
      price: "From £400",
      duration: "2 weeks to 6 months",
      results: "Picture-perfect - whole life memories",
      popular: true,
      link: "/wedding-day-smile",
      socialProof: "500+ happy couples"
    }
  ];

  const beforeAfterCases = [
    {
      title: "Teeth Whitening Transformation",
      description: "Professional whitening achieved 6 shades brighter in just one session",
      treatment: "Professional Whitening"
    },
    {
      title: "Veneer Smile Makeover",
      description: "Complete smile transformation with dental veneers",
      treatment: "Dental Veneers"
    },
    {
      title: "Gap Closure with Bonding",
      description: "Closed gap and reshaped teeth with composite bonding",
      treatment: "Composite Bonding"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Boost Your Confidence",
      description: "Feel more confident in social and professional situations with your new smile"
    },
    {
      icon: Heart,
      title: "Improve Your Health",
      description: "Better oral health often comes with improved overall wellbeing and self-care"
    },
    {
      icon: Smile,
      title: "Look Years Younger",
      description: "A bright, straight smile can take years off your appearance naturally"
    },
    {
      icon: Shield,
      title: "Long-lasting Results",
      description: "With proper care, your cosmetic treatments can last many years"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We'll discuss your goals, examine your teeth, and create a personalised treatment plan"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Digital smile design and preview of your new smile before we begin treatment"
    },
    {
      step: "3",
      title: "Professional Treatment",
      description: "Expert application using the latest techniques and premium materials"
    },
    {
      step: "4",
      title: "Aftercare & Maintenance",
      description: "Ongoing support and advice to maintain your beautiful new smile"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink/10 via-white to-soft-lavender/10">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Cosmetic Dentistry"
        description="Transform your smile with professional cosmetic dentistry treatments including teeth whitening, veneers, bonding, and complete smile makeovers"
        price="From £180"
        category="Cosmetic & Aesthetic Dentistry"
        duration="Single visit to 4-6 weeks"
        preparation="Consultation, digital smile design, treatment planning"
        recovery="Minimal to no downtime depending on treatment"
        benefits={[
          "Boost confidence and self-esteem",
          "Natural-looking results",
          "Immediate smile transformation",
          "Long-lasting improvements",
          "Improved oral health"
        ]}
        risks={[
          "Temporary sensitivity (whitening)",
          "Slight discomfort initially",
          "Regular maintenance required",
          "Not suitable for all cases"
        ]}
        rating={4.9}
        reviewCount={312}
        url="https://peartree.dental/services/cosmetic"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Cosmetic Dentistry"
        faqs={cosmeticFAQs}
      />
      {/* Hero Section */}
      <ServiceHero {...getServiceHeroConfig("/services/cosmetic")} />

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Cosmetic Dentistry?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful smile does more than just look good - it transforms how you feel about yourself
              and how others perceive you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-soft-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-soft-pink" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Our Cosmetic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From subtle enhancements to complete smile makeovers, we offer a full range of
              cosmetic treatments to help you achieve your perfect smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment) => (
              <Card
                key={treatment.name}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  treatment.popular ? 'border-2 border-soft-pink' : ''
                }`}
              >
                {treatment.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-soft-pink text-white text-center py-2 text-sm font-semibold">
                    Transformational
                  </div>
                )}

                <CardHeader className={treatment.popular ? 'pt-12' : 'pt-6'}>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-semibold text-pear-primary">
                      {treatment.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-soft-pink border-soft-pink">
                      {treatment.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Social Proof Badge */}
                  {treatment.socialProof && (
                    <div className="mb-6">
                      <div className="inline-flex items-center bg-dental-teal border border-dental-teal rounded-full px-4 py-2">
                        <Star className="w-4 h-4 text-white mr-2 fill-current" />
                        <span className="text-sm font-semibold text-white">{treatment.socialProof}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-500">Appointment Duration:</span>
                      <div className="font-medium text-pear-primary">{treatment.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Results:</span>
                      <div className="font-medium text-pear-primary">{treatment.results}</div>
                    </div>
                  </div>

                  {treatment.link ? (
                    <Link href={treatment.link}>
                      <Button className="w-full bg-soft-pink hover:bg-soft-pink/90 text-white">
                        Explore {treatment.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-soft-pink hover:bg-soft-pink/90 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Smile Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make getting your perfect smile as easy and comfortable as possible with our
              proven 4-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const colorClasses = [
                "bg-gradient-to-br from-pear-primary to-pear-primary/80",
                "bg-gradient-to-br from-pear-gold to-pear-gold/80",
                "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
                "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90"
              ];
              const accentColors = [
                "text-pear-primary",
                "text-pear-gold",
                "text-pear-primary",
                "text-pear-gold"
              ];
              return (
              <Card key={step.step} className="text-center relative hover:shadow-xl hover:shadow-soft-pink/20 hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${colorClasses[index]} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {step.step}
                  </div>
                  <h3 className={`font-semibold mb-2 group-hover:${accentColors[index]} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-pear-gold/60 group-hover:text-pear-gold transition-colors duration-300" />
                  </div>
                )}
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Real Patient Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with our cosmetic treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {beforeAfterCases.map((case_) => (
              <Card key={case_.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-soft-pink mx-auto mb-4" />
                    <p className="text-sm text-gray-600">Before & After</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-pear-primary mb-2">{case_.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{case_.description}</p>
                  <Badge variant="outline" className="text-soft-pink border-soft-pink">
                    {case_.treatment}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-soft-pink to-soft-lavender text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready for Your Dream Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Book your free consultation today and take the first step towards the confident,
                beautiful smile you deserve. No obligation, just expert advice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-soft-pink hover:bg-white/90 font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" className="bg-white text-soft-pink hover:bg-white/90 border-2 border-white">
                  Call 0115 931 2935
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No pressure consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Flexible payment options</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Results guarantee</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-white/20 rounded-full" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
