import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema, { commonDentalFAQs } from "@/components/seo/ServiceFAQSchema";
import ServiceHero from "@/components/ServiceHero";
import { getServiceHeroConfig } from "@/data/serviceHeroes";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  Zap,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Heart,
  ArrowRight,
  CalendarDays,
  Phone,
  Users,
  Star,
  TrendingUp,
  Camera
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Implants Burton Joyce | Permanent Tooth Replacement | Pear Tree Dental",
  description: "Premium dental implants in Burton Joyce. Replace missing teeth permanently with 98% success rate. Consultation, surgery, and crown from £2,500. Finance available.",
  keywords: [
    "dental implants Burton Joyce",
    "tooth replacement Nottingham",
    "missing teeth solution",
    "implant dentist Nottinghamshire",
    "permanent teeth replacement",
    "single tooth implant Burton Joyce",
    "multiple teeth implants Nottingham",
    "implant surgery Burton Joyce"
  ],
  openGraph: {
    title: "Dental Implants | Pear Tree Dental",
    description: "Permanent tooth replacement solutions with 98% success rate",
    type: "website",
    url: "https://peartree.dental/services/implants"
  },
  alternates: {
    canonical: "https://peartree.dental/services/implants"
  }
};

export default function ImplantsPage() {
  const implantFAQs = [
    {
      question: "How much do dental implants cost?",
      answer: "Dental implants start from £2,500 per implant including the crown. The total cost depends on your specific needs, the number of implants required, and any additional procedures. We offer flexible payment plans and membership discounts of 10%."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last 25+ years or even a lifetime. They have a 98% success rate and are the most durable tooth replacement option available."
    },
    {
      question: "Are dental implants painful?",
      answer: "The implant procedure is performed under local anesthesia, so you won't feel pain during treatment. Most patients experience only mild discomfort afterward, which can be managed with over-the-counter pain medication."
    },
    {
      question: "How long does the implant process take?",
      answer: "The complete process typically takes 3-6 months. This includes initial consultation, implant placement, healing time for osseointegration, and final crown placement. Some cases may qualify for same-day teeth."
    },
    {
      question: "Am I suitable for dental implants?",
      answer: "Most adults with good general health are suitable for implants. You need adequate bone density and healthy gums. We'll assess your suitability during a comprehensive consultation including 3D scans."
    },
    commonDentalFAQs.insurance
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Dental Implants"
        description="Premium dental implants for permanent tooth replacement with 98% success rate using titanium fixtures"
        price="From £2,500 per implant"
        category="Oral Surgery & Implantology"
        duration="3-6 months total treatment time"
        preparation="Comprehensive assessment, 3D imaging, treatment planning"
        recovery="3-6 months healing period for osseointegration"
        benefits={[
          "98% success rate",
          "25+ year lifespan",
          "Preserves jawbone",
          "Natural function and appearance",
          "No impact on adjacent teeth"
        ]}
        risks={[
          "Infection (rare with proper care)",
          "Implant rejection (very rare)",
          "Sinus problems (upper jaw only)",
          "Nerve damage (extremely rare)"
        ]}
        rating={4.9}
        reviewCount={243}
        url="https://peartree.dental/services/implants"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Dental Implants"
        faqs={implantFAQs}
        pageUrl="/services/implants"
      />

      {/* Hero Section */}
      <ServiceHero {...getServiceHeroConfig("/services/implants")} />

{/* Implant Types */}
<section id="implant-types" className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
        Complete Implant Solutions
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        From single tooth replacement to full mouth reconstruction, we have the right solution for you
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Single Implant",
          description: "Replace one missing tooth with a natural-looking implant crown",
          price: "From £2,500",
          features: ["One titanium implant", "Custom crown", "Natural appearance", "Preserve adjacent teeth"],
          image: "single-implant",
          url: "/services/implants/single-implant",
          buttonText: "Explore Single Implants"
        },
        {
          title: "Multiple Implants",
          description: "Replace several missing teeth with individual implant solutions",
          price: "From £6,000",
          features: ["Multiple implants", "Individual crowns", "Stable foundation", "Independent function"],
          image: "multiple-implants",
          url: "/services/implants/multiple-implant",
          buttonText: "Explore Multiple Implants"
        },
        {
          title: "Implant Bridge",
          description: "Replace multiple adjacent teeth with implant-supported bridge",
          price: "From £8,500",
          features: ["2-4 implants", "Connected crowns", "Cost effective", "Strong support"],
          image: "implant-bridge",
          url: "/services/implants/implant-bridge",
          buttonText: "Explore Implant Bridges"
        },
        {
          title: "All-on-4",
          description: "Replace entire arch of teeth with 4 strategically placed implants",
          price: "POA",
          features: ["4 implants per arch", "Full arch restoration", "Same day teeth", "Minimal surgery"],
          image: "all-on-4",
          url: "/services/implants/all-on-4",
          buttonText: "Explore All-on-4"
        }
      ].map((implant, index) => (
        <Card
          key={index}
          className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pear-gold/20"
        >
          {implant.image === "all-on-4" ? (
            // Existing All-on-4 picture wrapped in link
            <Link href={implant.url} aria-label={`View ${implant.title}`} className="block">
              <div className="aspect-[4/3] relative overflow-hidden">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/implants/all-on-4-large.webp"
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 480px)"
                    srcSet="/images/implants/all-on-4-medium.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/implants/all-on-4-small.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/images/implants-all-on-4.JPG"
                    alt="All-on-4 dental implants full arch restoration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 400px, 500px"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Link>
          ) : implant.image === "single-implant" ? (
            <Link href={implant.url} aria-label={`View ${implant.title}`} className="block">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/implants/single-implant.webp"
                  alt="Single dental implant with crown"
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 300px, (max-width: 768px) 400px, 500px"
                  loading="lazy"
                />
              </div>
            </Link>
          ) : implant.image === "multiple-implants" ? (
            <Link href={implant.url} aria-label={`View ${implant.title}`} className="block">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/implants/multiple-implants.webp"
                  alt="Multiple dental implants with individual crowns"
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 300px, (max-width: 768px) 400px, 500px"
                  loading="lazy"
                />
              </div>
            </Link>
          ) : implant.image === "implant-bridge" ? (
            <Link href={implant.url} aria-label={`View ${implant.title}`} className="block">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/implants/implant-bridge.webp"
                  alt="Implant-supported dental bridge"
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 300px, (max-width: 768px) 400px, 500px"
                  loading="lazy"
                />
              </div>
            </Link>
          ) : null}

          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-pear-primary mb-2">{implant.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{implant.description}</p>
                <div className="text-lg font-bold text-pear-gold">{implant.price}</div>
              </div>

              <ul className="space-y-2">
                {implant.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={implant.url}>
                <Button className="w-full bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                  <span className="hidden sm:inline">{implant.buttonText}</span>
                  <span className="sm:hidden">Learn More</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      
      {/* Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              The Implant Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven step-by-step approach for successful implant placement and integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description: "Comprehensive examination, 3D imaging, and treatment planning",
                icon: Camera,
                duration: "1-2 hours"
              },
              {
                step: "02",
                title: "Implant Placement",
                description: "Precise surgical placement of titanium implant into jawbone",
                icon: Zap,
                duration: "1-2 hours"
              },
              {
                step: "03",
                title: "Healing & Integration",
                description: "Osseointegration period for implant to fuse with bone",
                icon: Heart,
                duration: "3-6 months"
              },
              {
                step: "04",
                title: "Crown Placement",
                description: "Custom crown attached to complete your new tooth",
                icon: Award,
                duration: "2-3 weeks"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 border-pear-primary/20 hover:border-pear-primary/40 transition-colors">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-pear-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-pear-gold font-bold text-sm">{step.step}</span>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-pear-primary to-pear-primary/80 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg text-pear-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-gold" />
                      <span className="text-sm text-gray-700 font-medium">{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pear-primary text-white">Real Results</Badge>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Dental Implant Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the remarkable transformation achieved through our dental implant treatment.
              Slide to compare the before and after results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
              <BeforeAfterSlider
                beforeImage="/images/before-after/single-dental-implant-before.webp"
                afterImage="/images/before-after/single-dental-implant-after.webp"
                beforeAlt="Before single dental implant"
                afterAlt="After single dental implant"
                title="Single Dental Implant — Real Patient"
                description="See how a single implant restores function and aesthetics."
                treatmentType="Implants"
              />
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-pear-primary" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Treatment Duration</h4>
                <p className="text-gray-600 text-sm">3-6 months total process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-pear-primary" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Success Rate</h4>
                <p className="text-gray-600 text-sm">98% long-term success</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-pear-primary" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Expert Care</h4>
                <p className="text-gray-600 text-sm">Specialist implant dentistry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Choose Dental Implants?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Permanent Solution",
                    description: "Dental implants can last 25+ years with proper care, making them the most cost-effective long-term solution."
                  },
                  {
                    icon: Heart,
                    title: "Preserve Bone Health",
                    description: "Implants stimulate jawbone like natural teeth, preventing bone loss that occurs with missing teeth."
                  },
                  {
                    icon: Star,
                    title: "Natural Function",
                    description: "Eat, speak, and smile with confidence. Implants function exactly like your natural teeth."
                  },
                  {
                    icon: TrendingUp,
                    title: "Protect Adjacent Teeth",
                    description: "Unlike bridges, implants don't require altering healthy adjacent teeth for support."
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-pear-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Comparison Table */}
            <div>
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                  <CardTitle className="text-xl">Treatment Comparison</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-pear-primary">Implants</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Bridge</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Dentures</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { feature: "Lifespan", implant: "25+ years", bridge: "10-15 years", denture: "5-7 years" },
                          { feature: "Bone Preservation", implant: "✓", bridge: "✗", denture: "✗" },
                          { feature: "Adjacent Teeth", implant: "Preserved", bridge: "Altered", denture: "Preserved" },
                          { feature: "Cleaning", implant: "Brush & Floss", bridge: "Special Tools", denture: "Remove Daily" },
                          { feature: "Eating Ability", implant: "100%", bridge: "90%", denture: "60%" }
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium text-gray-700">{row.feature}</td>
                            <td className="px-4 py-3 text-sm text-center text-pear-primary font-semibold">{row.implant}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-600">{row.bridge}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-600">{row.denture}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Financing */}
      <section className="py-16 bg-gradient-to-br from-pear-background/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Investment & Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with flexible payment options to make implants affordable
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Standard Pricing */}
            <Card className="border-2 border-gray-200 hover:border-pear-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pear-primary">Single Implant</CardTitle>
                <div className="text-4xl font-bold text-pear-primary mt-4">£2,500</div>
                <p className="text-gray-600">Complete treatment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Premium titanium implant",
                    "Surgical placement",
                    "Healing abutment",
                    "Custom crown",
                    "All follow-up care",
                    "10-year guarantee"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Financing Options */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Make implants affordable with our payment options</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">Payment Plans</h4>
                <p className="text-sm text-gray-600">Flexible payment options available</p>
              </Card>
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">Monthly Payments</h4>
                <p className="text-sm text-gray-600">0% Payment plans over the treatment length</p>
              </Card>
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">Insurance</h4>
                <p className="text-sm text-gray-600">Partial coverage may be available</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Restore Your Confidence Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Stop living with missing teeth. Book your implant consultation and discover how we can restore your smile permanently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services/treatment-comparison">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary bg-transparent">
                  Compare All Options
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-gold hover:bg-white hover:text-pear-primary bg-transparent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1000+ Implants Placed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>10 Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
