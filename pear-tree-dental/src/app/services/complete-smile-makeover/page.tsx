import React from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Camera,
  CheckCircle,
  Clock,
  Crown,
  Diamond,
  Eye,
  Heart,
  Palette,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServiceHeroConfig } from "@/data/serviceHeroes";

// Icon mapping for benefits
const iconMap = {
  Star,
  Heart,
  Award,
  Clock,
  Shield,
  Smile,
  CheckCircle,
  ArrowRight,
};

export const metadata: Metadata = {
  title:
    "Complete Smile Makeover Burton Joyce | Total Smile Transformation | Pear Tree Dental",
  description:
    "Complete smile makeover in Burton Joyce. Transform your smile with veneers, whitening, crowns, and orthodontics. Comprehensive smile transformation from £2,500.",
  keywords: [
    "complete smile makeover Burton Joyce",
    "smile transformation Nottingham",
    "total smile makeover Burton Joyce",
    "cosmetic dentistry makeover",
    "smile design Burton Joyce",
    "full mouth makeover Nottingham",
    "comprehensive smile transformation",
  ],
  openGraph: {
    title:
      "Complete Smile Makeover - Total Smile Transformation | Pear Tree Dental",
    description:
      "Transform your smile completely with our comprehensive makeover treatments",
    type: "website",
    url: "https://peartree.dental/services/complete-smile-makeover",
  },
  alternates: {
    canonical: "https://peartree.dental/services/complete-smile-makeover",
  },
};

export default function CompleteSmileMakeoverPage() {
  const smileMakeoverFAQs = [
    {
      question: "What is included in a complete smile makeover?",
      answer:
        "A complete smile makeover is a comprehensive treatment plan that combines multiple cosmetic and restorative procedures to transform your entire smile. This may include teeth whitening, veneers, crowns, orthodontics, gum contouring, and dental implants as needed.",
    },
    {
      question: "How much does a complete smile makeover cost?",
      answer:
        "Complete smile makeovers start from £2,500 but vary significantly based on your individual needs. The final cost depends on which treatments are included in your personalized plan. We offer detailed quotes after your consultation and assessment.",
    },
    {
      question: "How long does a complete smile makeover take?",
      answer:
        "The timeline varies from 2-12 months depending on the complexity of your case. Simple makeovers with whitening and bonding may take 2-4 weeks, while comprehensive cases requiring orthodontics and multiple procedures may take 6-12 months.",
    },
    {
      question: "Is a smile makeover painful?",
      answer:
        "Most smile makeover procedures are comfortable with modern anesthetics and techniques. Any discomfort is typically mild and temporary. We use advanced pain management techniques and sedation options to ensure your comfort throughout treatment.",
    },
    {
      question: "How long do smile makeover results last?",
      answer:
        "With proper care, smile makeover results can last 10-20 years or more. Porcelain veneers typically last 15-20 years, crowns 10-15 years, and whitening results 2-3 years with touch-ups. Good oral hygiene and regular check-ups maximize longevity.",
    },
    {
      question: "Can I see what my new smile will look like before treatment?",
      answer:
        "Yes! We use advanced smile design technology and digital mock-ups to show you exactly how your new smile will look before we begin treatment. This allows you to make informed decisions and ensures you'll love your results.",
    },
  ];

  const treatmentOptions = [
    {
      title: "Cosmetic Veneers",
      description:
        "Ultra-thin porcelain or composite shells to perfect tooth shape, size, and color",
      price: "From £750 per tooth",
      icon: Crown,
      benefits: [
        "Perfect tooth shape",
        "Natural appearance",
        "Stain resistant",
        "Long-lasting results",
      ],
    },
    {
      title: "Professional Whitening",
      description:
        "Advanced whitening systems for dramatically brighter, whiter teeth",
      price: "From £400",
      icon: Sparkles,
      benefits: [
        "Up to 8 shades whiter",
        "Safe and effective",
        "Quick results",
        "Lasting brightness",
      ],
    },
    {
      title: "Clear Aligners",
      description:
        "Invisible orthodontic treatment to straighten and align your teeth",
      price: "From £2,000",
      icon: Eye,
      benefits: [
        "Nearly invisible",
        "Removable",
        "Comfortable",
        "Predictable results",
      ],
    },
    {
      title: "Dental Crowns",
      description:
        "Full coverage restorations for damaged or severely discolored teeth",
      price: "From £750",
      icon: Diamond,
      benefits: [
        "Complete coverage",
        "Natural appearance",
        "Strong and durable",
        "Perfect fit",
      ],
    },
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement for missing teeth in your smile",
      price: "From £3,000",
      icon: Target,
      benefits: [
        "Permanent solution",
        "Natural feel",
        "Preserves jawbone",
        "No diet restrictions",
      ],
    },
    {
      title: "Gum Contouring",
      description: "Reshape your gum line for perfect smile proportions",
      price: "From £200 per tooth",
      icon: Palette,
      benefits: [
        "Perfect proportions",
        "Enhanced tooth appearance",
        "Minimal discomfort",
        "Quick healing",
      ],
    },
  ];

  const makeoverPackages = [
    {
      name: "Minimal Makeover",
      price: "£2,500 - £4,000",
      duration: "2-4 weeks",
      ideal: "Minor improvements and touch-ups",
      treatments: [
        "Professional whitening",
        "Composite bonding",
        "Polish and contouring",
      ],
      description:
        "Perfect for enhancing your natural smile with subtle improvements",
    },
    {
      name: "Moderate Makeover",
      price: "£4,000 - £8,000",
      duration: "6-12 weeks",
      ideal: "Noticeable smile transformation",
      treatments: [
        "Whitening",
        "4-6 veneers",
        "Gum contouring",
        "Minor orthodontics",
      ],
      description:
        "Comprehensive improvement addressing multiple aesthetic concerns",
    },
    {
      name: "Complete Transformation",
      price: "£8,000 - £15,000",
      duration: "3-6 months",
      ideal: "Total smile redesign",
      treatments: [
        "Full mouth veneers",
        "Orthodontics",
        "Crowns",
        "Gum reshaping",
      ],
      description: "Complete smile reconstruction for dramatic transformation",
    },
    {
      name: "Full Mouth Rehabilitation",
      price: "£15,000+",
      duration: "6-12 months",
      ideal: "Comprehensive oral health restoration",
      treatments: [
        "Implants",
        "Full mouth reconstruction",
        "Bite correction",
        "Comprehensive care",
      ],
      description:
        "Total oral health and aesthetic restoration for complex cases",
    },
  ];

  const beforeAfterCases = [
    {
      case: "Crowded & Stained Teeth",
      before: "Severely crowded, yellowed teeth with gaps",
      after: "Straight, white, perfectly aligned smile",
      treatments: ["Invisalign", "Whitening", "4 veneers"],
      duration: "8 months",
      satisfaction: "Life-changing confidence boost",
    },
    {
      case: "Missing & Damaged Teeth",
      before: "Missing front teeth, chipped and discolored",
      after: "Complete, natural-looking smile",
      treatments: ["2 implants", "6 veneers", "Whitening"],
      duration: "6 months",
      satisfaction: "Can smile freely again",
    },
    {
      case: "Worn & Aged Smile",
      before: "Worn, short teeth with poor proportions",
      after: "Youthful, full, bright smile",
      treatments: ["8 crowns", "Gum contouring", "Whitening"],
      duration: "3 months",
      satisfaction: "Look 10 years younger",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Consultation",
      description:
        "Detailed assessment of your oral health, aesthetic concerns, and smile goals",
      duration: "90 minutes",
      includes: [
        "Digital photography",
        "3D scanning",
        "Bite analysis",
        "Treatment planning",
      ],
    },
    {
      step: "2",
      title: "Smile Design & Planning",
      description:
        "Create your personalized smile design using advanced digital technology",
      duration: "1-2 weeks",
      includes: [
        "Digital smile design",
        "Treatment timeline",
        "Cost breakdown",
        "Preview mockup",
      ],
    },
    {
      step: "3",
      title: "Treatment Phase",
      description: "Execute your smile makeover plan with precision and care",
      duration: "2-12 months",
      includes: [
        "Progressive treatments",
        "Regular monitoring",
        "Comfort management",
        "Progress updates",
      ],
    },
    {
      step: "4",
      title: "Completion & Maintenance",
      description: "Reveal your new smile and establish long-term care plan",
      duration: "Ongoing",
      includes: [
        "Final adjustments",
        "Professional photography",
        "Maintenance plan",
        "Follow-up care",
      ],
    },
  ];

  const benefits = [
    {
      icon: "Star",
      title: "Dramatic Transformation",
      description:
        "Complete smile redesign addressing all aesthetic and functional concerns",
    },
    {
      icon: "Heart",
      title: "Boosted Confidence",
      description: "Renewed self-confidence and improved quality of life",
    },
    {
      icon: "Award",
      title: "Expert Planning",
      description:
        "Comprehensive treatment planning by experienced cosmetic dentists",
    },
    {
      icon: "Clock",
      title: "Efficient Timeline",
      description: "Coordinated treatments for optimal results in minimal time",
    },
    {
      icon: "Shield",
      title: "Long-term Investment",
      description:
        "Durable results that enhance your appearance for years to come",
    },
    {
      icon: "Smile",
      title: "Natural Appearance",
      description:
        "Beautiful, natural-looking results that complement your facial features",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/30 via-white to-amber-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Complete Smile Makeover"
        description="Comprehensive smile transformation combining multiple cosmetic and restorative treatments for total smile redesign"
        price="From £2,500"
        category="Cosmetic Dentistry & Smile Design"
        duration="2-12 months depending on treatment plan"
        preparation="Comprehensive consultation, digital smile design, treatment planning"
        recovery="Varies by treatment - minimal downtime for most procedures"
        benefits={[
          "Complete smile transformation",
          "Dramatically improved appearance",
          "Enhanced self-confidence",
          "Coordinated treatment planning",
          "Long-lasting beautiful results",
          "Natural-looking smile design",
        ]}
        risks={[
          "Significant financial investment",
          "Extended treatment timeline for complex cases",
          "Possible temporary sensitivity",
          "Need for ongoing maintenance",
          "Multiple appointments required",
        ]}
        rating={4.9}
        reviewCount={127}
        url="https://peartree.dental/services/complete-smile-makeover"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Complete Smile Makeover"
        faqs={smileMakeoverFAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">
              Services
            </Link>
            <span>/</span>
            <span className="text-rose-600 font-medium">
              Complete Smile Makeover
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <ServiceHero
        {...getServiceHeroConfig("/services/complete-smile-makeover")}
      />

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose a Complete Smile Makeover?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to smile transformation addresses all
              aspects of your smile for optimal aesthetics, function, and
              long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon =
                iconMap[benefit.icon as keyof typeof iconMap] || Star;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Smile Makeover Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive smile makeovers combine the best cosmetic and
              restorative treatments to create your perfect smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(treatmentOptions || []).map((treatment) => {
              const Icon = treatment.icon;
              return (
                <Card
                  key={treatment.title}
                  className="hover:shadow-lg transition-shadow border-2 border-rose-200 hover:border-rose-400"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-pear-primary">
                          {treatment.title}
                        </CardTitle>
                        <div className="text-sm font-semibold text-rose-600">
                          {treatment.price}
                        </div>
                      </div>
                    </div>
                    <CardDescription>{treatment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(treatment.benefits || []).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Makeover Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Smile Makeover Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From subtle enhancements to complete transformations, we offer
              comprehensive packages tailored to your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(makeoverPackages || []).map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`hover:shadow-lg transition-shadow ${index === 1 || index === 2 ? "border-2 border-rose-300" : ""}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-pear-primary">
                        {pkg.name}
                      </CardTitle>
                      <div className="text-2xl font-bold text-rose-600 mt-2">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        {pkg.duration}
                      </div>
                    </div>
                    {(index === 1 || index === 2) && (
                      <Badge className="bg-rose-500 text-white">Popular</Badge>
                    )}
                  </div>
                  <CardDescription className="font-medium text-gray-700">
                    {pkg.ideal}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                  <div>
                    <h4 className="font-semibold text-pear-primary mb-2">
                      Typical Treatments:
                    </h4>
                    <ul className="space-y-1">
                      {(pkg.treatments || []).map((treatment, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {treatment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Smile Transformation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real patient transformations showcasing the dramatic improvements
              possible with comprehensive smile makeover treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(beforeAfterCases || []).map((caseStudy, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-700">BEFORE/AFTER</h4>
                    <p className="text-sm text-gray-600">{caseStudy.case}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-pear-primary mb-3">
                    {caseStudy.case}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-red-600">Before: </span>
                      <span className="text-gray-600">{caseStudy.before}</span>
                    </div>
                    <div>
                      <span className="font-medium text-green-600">
                        After:{" "}
                      </span>
                      <span className="text-gray-600">{caseStudy.after}</span>
                    </div>
                    <div>
                      <span className="font-medium text-rose-600">
                        Treatments:{" "}
                      </span>
                      <span className="text-gray-600">
                        {caseStudy.treatments.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">
                        Timeline:{" "}
                      </span>
                      <span className="text-gray-600">
                        {caseStudy.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 bg-rose-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-rose-600" />
                      <span className="text-sm font-medium text-rose-700">
                        "{caseStudy.satisfaction}"
                      </span>
                    </div>
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
              Your Smile Makeover Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive planning and
              flawless execution for outstanding smile transformation results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => {
              const colorClasses = [
                "bg-gradient-to-br from-pear-primary to-pear-primary/80",
                "bg-gradient-to-br from-pear-gold to-pear-gold/80",
                "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
                "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90",
              ];
              const accentColors = [
                "text-pear-primary",
                "text-pear-gold",
                "text-pear-primary",
                "text-pear-gold",
              ];
              return (
                <Card
                  key={step.step}
                  className="text-center relative hover:shadow-xl hover:shadow-pear-gold/20 hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 ${colorClasses[index]} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                    >
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Clock className={`w-4 h-4 ${accentColors[index]}`} />
                      <span
                        className={`text-xs ${accentColors[index]} font-medium`}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {(step.includes || []).map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-pear-gold/60" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing & Investment */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Smile Makeover Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible payment options and membership discounts make your dream
              smile transformation accessible and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Pricing */}
            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pear-primary">
                  Complete Makeover
                </CardTitle>
                <div className="text-4xl font-bold text-rose-600 mt-4">
                  £2,500+
                </div>
                <p className="text-gray-600">Customized treatment plan</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(
                    [
                      "Comprehensive consultation",
                      "Digital smile design",
                      "Coordinated treatment plan",
                      "Multiple procedures included",
                      "Progress monitoring",
                      "Final adjustments",
                    ] || []
                  ).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
                    Get Personalized Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Membership Pricing */}
            <Card className="border-2 border-pear-gold bg-gradient-to-br from-pear-gold/5 to-white">
              <CardHeader className="text-center">
                <Badge className="bg-pear-gold text-white mb-4">
                  Membership Advantage
                </Badge>
                <CardTitle className="text-2xl text-pear-primary">
                  With Membership
                </CardTitle>
                <div className="text-4xl font-bold text-pear-gold mt-4">
                  10% Off
                </div>
                <p className="text-gray-600">Significant savings on makeover</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(
                    [
                      "10% discount on all treatments",
                      "Priority appointment scheduling",
                      "Extended warranty options",
                      "Flexible payment plans",
                      "Ongoing maintenance included",
                      "Additional family discounts",
                    ] || []
                  ).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/membership">
                  <Button className="w-full mt-6 btn-gold text-white">
                    Join Membership
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Payment Options */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Flexible payment options to make your dream smile affordable
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 border border-rose-200">
                <h4 className="font-semibold text-rose-600 mb-2">
                  Flexible Payment Plans
                </h4>
                <p className="text-sm text-gray-600">
                  Multiple payment options available to suit your budget
                </p>
              </Card>
              <Card className="p-6 border border-rose-200">
                <h4 className="font-semibold text-rose-600 mb-2">
                  Monthly Payment Plans
                </h4>
                <p className="text-sm text-gray-600">
                  Spread costs over 12-36 months with affordable monthly
                  payments
                </p>
              </Card>
              <Card className="p-6 border border-rose-200">
                <h4 className="font-semibold text-rose-600 mb-2">
                  Insurance Coverage
                </h4>
                <p className="text-sm text-gray-600">
                  Some treatments may be partially covered by dental insurance
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-rose-600 to-amber-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Transform Your Life with a New Smile
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step toward your dream smile. Book your
                comprehensive consultation and discover how a complete smile
                makeover can transform your confidence and life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="bg-white text-rose-600 hover:bg-white/90 font-semibold"
                  >
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Smile Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-rose-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="text-sm text-white/80">
                From £2,500 • Flexible payment plans • 10% membership discount
                available
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>180+ Smile Transformations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Expert Cosmetic Dentists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Satisfaction Guarantee</span>
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
