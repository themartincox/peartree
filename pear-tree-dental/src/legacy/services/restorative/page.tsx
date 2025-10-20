import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import BeforeAfterSliderPair from "@/components/BeforeAfterSliderPair";
import BeforeAfterButton from "@/components/BeforeAfterButton";
import {
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Heart,
  Zap,
  Users,
  Activity,
  Settings,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Restorative Dentistry - Repair & Restore Teeth in Nottingham",
  description: "Expert restorative dentistry in Burton Joyce. Crowns, bridges, dentures, and tooth restoration. High-quality materials and modern techniques for lasting results.",
  keywords: [
    "restorative dentistry Burton Joyce",
    "dental crowns Nottingham",
    "dental bridges Burton Joyce",
    "dentures Nottinghamshire",
    "tooth restoration Burton Joyce",
    "dental repairs Nottingham",
    "crown and bridge work Burton Joyce",
    "partial dentures Nottinghamshire"
  ],
  openGraph: {
    title: "Restorative Dentistry | Repair & Restore | Pear Tree Dental",
    description: "Expert restorative dentistry to repair and restore your teeth with high-quality materials",
    type: "website",
    url: "https://peartree.dental/services/restorative"
  },
  alternates: {
    canonical: "https://peartree.dental/services/restorative"
  }
};

export default function RestorativeDentistryPage() {
  const treatments = [
    {
      name: "Dental Crowns",
      description: "Custom-made porcelain crowns to restore severely damaged or weakened teeth",
      price: "From £450",
      duration: "2-3 visits",
      lifespan: "10-15 years",
      popular: true,
      materials: ["Porcelain", "Zirconia", "Metal-free"]
    },
    {
      name: "Dental Bridges",
      description: "Replace one or more missing teeth with a fixed bridge restoration",
      price: "From £850",
      duration: "2-3 visits",
      lifespan: "10-12 years",
      popular: true,
      materials: ["Porcelain", "Porcelain-fused-to-metal"]
    },
    {
      name: "Partial Dentures",
      description: "Removable appliances to replace multiple missing teeth",
      price: "From £650",
      duration: "3-4 visits",
      lifespan: "5-7 years",
      popular: false,
      materials: ["Acrylic", "Flexible", "Cast metal"]
    },
    {
      name: "Complete Dentures",
      description: "Full mouth restoration with custom-fitted complete dentures",
      price: "From £1,200",
      duration: "4-6 visits",
      lifespan: "5-8 years",
      popular: false,
      materials: ["Premium acrylic", "Precision-fitted"]
    },
    {
      name: "Inlays & Onlays",
      description: "Precise porcelain restorations for larger cavities and damaged teeth",
      price: "From £350",
      duration: "2 visits",
      lifespan: "10-15 years",
      popular: false,
      materials: ["Porcelain", "Composite", "Gold"]
    },
    {
      name: "Dental Bonding",
      description: "Conservative tooth-colored repairs for chips, cracks, and gaps",
      price: "From £180",
      duration: "1 visit",
      lifespan: "5-8 years",
      popular: false,
      materials: ["Composite resin", "Color-matched"]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Restore Function",
      description: "Return your teeth to full chewing capacity and proper bite alignment"
    },
    {
      icon: Heart,
      title: "Improve Health",
      description: "Prevent further tooth loss and maintain good oral health"
    },
    {
      icon: Award,
      title: "Natural Appearance",
      description: "Modern materials blend seamlessly with your natural teeth"
    },
    {
      icon: Clock,
      title: "Long-lasting",
      description: "Quality restorations can last 10-15 years with proper care"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description: "Detailed examination, X-rays, and digital impressions to plan your restoration"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Custom treatment plan with material options and timeline discussion"
    },
    {
      step: "3",
      title: "Tooth Preparation",
      description: "Precise preparation of teeth using modern techniques and local anaesthetic"
    },
    {
      step: "4",
      title: "Custom Fabrication",
      description: "Expert lab technicians craft your restoration using premium materials"
    },
    {
      step: "5",
      title: "Final Placement",
      description: "Careful fitting and adjustment for perfect comfort and function"
    }
  ];

  const materials = [
    {
      name: "Premium Porcelain",
      description: "Natural-looking, stain-resistant material that mimics tooth enamel",
      benefits: ["Natural appearance", "Stain resistant", "Biocompatible"]
    },
    {
      name: "Zirconia",
      description: "Ultra-strong ceramic material ideal for posterior teeth",
      benefits: ["Exceptional strength", "Metal-free", "Long-lasting"]
    },
    {
      name: "Composite Resin",
      description: "Tooth-coloured material perfect for conservative restorations",
      benefits: ["Conservative", "Same-day treatment", "Color-matched"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-primary/5 via-white to-soft-blue/5">
      {/* Hero Section - Medical Theme */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-pear-primary text-white">
                <Wrench className="w-4 h-4 mr-2" />
                Restorative Dentistry
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Repair & Restore
                <span className="text-pear-primary block">Your Teeth</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Expert restorative dentistry to repair damaged teeth and replace missing ones.
                Using modern materials and techniques, we restore both function and aesthetics.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pear-primary" />
                  <span className="text-sm font-medium">Natural-looking results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pear-primary" />
                  <span className="text-sm font-medium">Premium materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pear-primary" />
                  <span className="text-sm font-medium">Long-lasting solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pear-primary" />
                  <span className="text-sm font-medium">Expert craftsmanship</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-gradient-to-r from-pear-primary to-soft-blue text-white font-semibold group shadow-lg">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white bg-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-pear-primary" />
                  <span>Expert technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4 text-soft-blue" />
                  <span>Latest technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-pear-primary" />
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/images/heroes/restorative/veneers.webp" type="image/webp" />
                  <source media="(min-width: 480px)" srcSet="/images/heroes/restorative/veneers.webp" type="image/webp" />
                  <source srcSet="/images/heroes/demo-veneers.png" type="image/png" />
                  <img
                    src="/images/heroes/restorative/veneers.webp"
                    alt="Advanced restorative dentistry at Pear Tree Dental"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>

                {/* Overlay with content - lighter and disappears on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pear-primary/60 to-soft-blue/60 group-hover:from-pear-primary/20 group-hover:to-soft-blue/20 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white p-8 max-w-md group-hover:opacity-80 transition-opacity duration-500">
                    <h3 className="text-2xl font-semibold mb-4">Advanced Restoration Technology</h3>
                    <p className="text-white/90 mb-6">
                      Using the latest digital technology and premium materials for natural-looking results.
                    </p>
                    <ul className="space-y-2 text-sm text-left">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Digital impressions for perfect fit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>CAD/CAM technology for precision</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Expert lab partnerships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Restorative Dentistry?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Damaged or missing teeth affect more than just your appearance.
              Our restorative treatments restore both function and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pear-primary to-soft-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformations we've achieved for our patients with
              expert restorative dentistry.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mb-16">
            <BeforeAfterSliderPair
              primarySlider={{
                beforeImage: "/images/before-after/flexible-denture-removable-bridge-before.png",
                afterImage: "/images/before-after/flexible-denture-removable-bridge-after.png",
                beforeAlt: "Patient before flexible denture treatment showing missing teeth and compromised smile",
                afterAlt: "Patient after flexible denture treatment with natural-looking, comfortable dentures providing full smile restoration",
                title: "Flexible Denture Transformation",
                description: "Revolutionary flexible denture technology providing superior comfort, natural appearance, and confident function",
                treatmentType: "Flexible Dentures"
              }}
              secondarySlider={{
                beforeImage: "/images/before-after/airflow-composite-bond-polish-hygienist-before.webp",
                afterImage: "/images/before-after/airflow-composite-bond-polish-hygienist-after.webp",
                beforeAlt: "Patient's teeth before composite bonding treatment showing worn and discolored areas",
                afterAlt: "Patient's teeth after airflow polish and composite bonding showing natural, restored appearance",
                title: "Composite Bonding Transformation",
                description: "Advanced airflow polishing combined with composite bonding to restore natural tooth shape and color with seamless results",
                treatmentType: "Composite Bonding + Airflow Polish"
              }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6"
            />
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Our Restorative Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single-tooth restorations to full mouth rehabilitation,
              we offer comprehensive solutions for all your restorative needs.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-full md:w-1/2 lg:w-[48%]">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 border-pear-primary">
                    <div className="bg-pear-primary text-white text-center py-2 text-sm font-semibold">
                        Popular Treatment
                    </div>
                    <CardHeader className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                            <CardTitle className="text-xl font-semibold text-pear-primary">
                                Dental Veneers
                            </CardTitle>
                            <Badge variant="outline" className="text-pear-primary border-pear-primary">
                                From £750
                            </Badge>
                        </div>
                        <CardDescription className="text-gray-600">
                            Transform your smile with ultra-thin, custom-made porcelain veneers.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                                <span className="text-gray-500">Duration:</span>
                                <div className="font-medium text-pear-primary">2-3 visits</div>
                            </div>
                            <div>
                                <span className="text-gray-500">Lifespan:</span>
                                <div className="font-medium text-pear-primary">10-15 years</div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <span className="text-gray-500 text-sm">Materials:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="secondary" className="text-xs">
                                    Porcelain
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                    Composite
                                </Badge>
                            </div>
                        </div>
                        <Link href="/services/cosmetic/veneers">
                            <Button className="w-full bg-gradient-to-r from-pear-primary to-soft-blue text-white hover:shadow-lg">
                                Learn More about Veneers
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment) => (
              <Card
                key={treatment.name}
                className={`hover:shadow-xl transition-all duration-300 ${
                  treatment.popular ? 'border-2 border-pear-primary' : ''
                }`}
              >
                {treatment.popular && (
                  <div className="bg-pear-primary text-white text-center py-2 text-sm font-semibold">
                    Popular Treatment
                  </div>
                )}

                <CardHeader className={treatment.popular ? 'pt-6' : 'pt-6'}>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-semibold text-pear-primary">
                      {treatment.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-pear-primary border-pear-primary">
                      {treatment.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <div className="font-medium text-pear-primary">{treatment.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Lifespan:</span>
                      <div className="font-medium text-pear-primary">{treatment.lifespan}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-gray-500 text-sm">Materials:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {treatment.materials.map((material) => (
                        <Badge key={material} variant="secondary" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/book">
                    <Button className="w-full bg-gradient-to-r from-pear-primary to-soft-blue text-white hover:shadow-lg">
                      Book {treatment.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Transformations - Side by Side */}
      <section className="pt-16 pb-0 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Restorative Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the remarkable results achieved with our expert restorative treatments,
              showcasing precise composite bonding and comprehensive dental restorations.
            </p>
          </div>

          {/* Composite Bonding Focus */}
          <div className="max-w-6xl mx-auto">
            <BeforeAfterSliderPair
              primarySlider={{
                beforeImage: "/images/before-after/dental-composite-bond-before.webp",
                afterImage: "/images/before-after/dental-composite-bond-after.webp",
                beforeAlt: "Patient's teeth before composite bonding showing chips and wear",
                afterAlt: "Patient's teeth after composite bonding with restored natural shape and color",
                title: "Dental Composite Bonding",
                description: "Precise composite bonding technique to repair chips, gaps, and reshape teeth for a natural, seamless appearance",
                treatmentType: "Composite Bonding"
              }}
              secondarySlider={{
                beforeImage: "/images/before-after/repair-restore-before.JPG",
                afterImage: "/images/before-after/repair-restore-after.JPG",
                beforeAlt: "Patient with missing tooth before dental implant treatment showing gap in smile",
                afterAlt: "Patient after dental implant treatment with natural-looking replacement tooth perfectly integrated",
                title: "Dental Implant Restoration",
                description: "Complete tooth replacement with dental implant providing natural appearance and full functionality like your own teeth",
                treatmentType: "Single Tooth Implant"
              }}
              className="[&>div]:aspect-[16/8] [&_img]:object-cover [&_img]:object-center"
            />
          </div>
        </div>
      </section>

      {/* Subtle Visual Transition */}
      <div className="relative h-12 bg-gradient-to-b from-white via-pear-primary/2 to-pear-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pear-primary/10 to-soft-blue/10 opacity-50" />
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-pear-primary/20 to-transparent" />
      </div>

      {/* Materials Section */}
      <section className="pt-12 pb-16 bg-gradient-to-r from-pear-primary/5 to-soft-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Premium Materials for Lasting Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We only use the highest quality materials from trusted manufacturers
              to ensure your restorations look natural and last for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-50/50 to-teal-50/50 border border-green-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-pear-primary">
                    {material.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {material.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {material.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-green-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Restoration Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures excellent results with maximum comfort
              and minimal disruption to your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center relative bg-white border-pear-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pear-primary to-soft-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-pear-primary/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                    <Wrench className="w-4 h-4 mr-2" />
                    Restorative Benefits
                  </Badge>
                  <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                    Save on Quality Restorations
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    Our membership plans include significant discounts on all restorative treatments.
                    Get the quality care you deserve at affordable prices.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold flex-shrink-0" />
                      <span className="text-white/90">10% discount on crowns and bridges</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold flex-shrink-0" />
                      <span className="text-white/90">Flexible payment plans available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold flex-shrink-0" />
                      <span className="text-white/90">Quality guarantee on all work</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold flex-shrink-0" />
                      <span className="text-white/90">Priority booking for treatment</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-sm text-white/70 mb-2">Member savings example:</div>
                    <div className="text-2xl font-bold text-pear-gold mb-1">Save £45</div>
                    <div className="text-white/80 mb-2">on a £450 crown</div>
                    <div className="text-xs text-white/60">With 10% membership discount</div>
                  </div>

                  <Link href="/membership">
                    <Button size="lg" className="btn-gold text-white w-full font-semibold shadow-lg">
                      Join Membership Plan
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/book">
                    <Button size="lg" variant="outline" className="w-full border-white hover:bg-white hover:text-pear-primary text-[#ffffff] bg-[#FFFFFF1A]">
                      Book Consultation
                    </Button>
                  </Link>
                  <p className="text-xs text-white/60 text-center">
                    Free consultation • Treatment planning included
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-pear-gold/20 rounded-full" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-green-50/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pear-primary to-soft-blue text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to Restore Your Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let damaged teeth affect your confidence and health. Book a consultation
                to discuss how our expert restorative treatments can help you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-pear-primary hover:bg-gray-100 font-semibold shadow-lg">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary bg-transparent">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Expert technicians</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Premium materials</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality guarantee</span>
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
