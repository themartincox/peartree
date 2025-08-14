import React from "react";
import {
  Award,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Settings,
  Shield,
  Smile,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dentures in Arnold - Premium Denture Solutions | Pear Tree Dental",
  description:
    "Premium dentures for Arnold residents. Complete dentures, partial dentures, and implant-retained options just 15 minutes away. Natural-looking, comfortable fits guaranteed.",
  keywords: [
    "dentures Arnold",
    "false teeth Arnold",
    "complete dentures Arnold",
    "partial dentures Arnold NG5",
    "implant dentures Arnold",
    "denture repair Arnold",
    "affordable dentures Arnold",
  ],
  openGraph: {
    title: "Dentures in Arnold - Premium Denture Solutions | Pear Tree Dental",
    description:
      "Premium denture solutions for Arnold residents. Complete and partial dentures with natural-looking results just 15 minutes away.",
    url: "https://peartree.dental/arnold/dentures",
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/dentures",
  },
};

export default function ArnoldDenturesPage() {
  const arnoldDenturesFAQs = [
    {
      question: "How far is denture treatment from Arnold?",
      answer:
        "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're one of Nottinghamshire's most experienced denture practices with over 30 years of expertise and free parking.",
    },
    {
      question: "What types of dentures are available for Arnold patients?",
      answer:
        "We offer complete dentures, partial dentures, flexible Valplast dentures, and implant-retained dentures. Each option is custom-made for comfort and natural appearance.",
    },
    {
      question: "How long do dentures last for Arnold patients?",
      answer:
        "High-quality dentures typically last 5-8 years with proper care. We provide comprehensive aftercare, adjustments, and repairs to ensure optimal comfort and function.",
    },
    {
      question: "Can I get same-day dentures near Arnold?",
      answer:
        "Yes, we offer immediate dentures that can be fitted the same day as extractions. This ensures you're never without teeth during the healing process.",
    },
    {
      question: "What makes your denture service special for Arnold residents?",
      answer:
        "We combine 30+ years experience, multiple denture types, expert fitting, natural aesthetics, and convenient Arnold access. Our dentures restore confidence and function.",
    },
  ];

  const dentureTypes = [
    {
      name: "Complete Dentures",
      description: "Full replacement when all teeth are missing",
      features: [
        "Custom-made acrylic",
        "Natural gum coloring",
        "Perfect bite alignment",
        "Comfortable fit",
      ],
      price: "From £750",
      duration: "4-6 weeks",
      icon: Crown,
      suitable: "All teeth missing",
    },
    {
      name: "Partial Dentures",
      description: "Replace multiple missing teeth",
      features: [
        "Metal or acrylic framework",
        "Clips to existing teeth",
        "Natural tooth matching",
        "Removable design",
      ],
      price: "From £450",
      duration: "3-4 weeks",
      icon: Settings,
      suitable: "Some natural teeth remaining",
    },
    {
      name: "Flexible Dentures",
      description: "Valplast thermoplastic dentures",
      features: [
        "Metal-free design",
        "Flexible comfortable fit",
        "Natural pink gums",
        "Stain resistant",
      ],
      price: "From £850",
      duration: "3-4 weeks",
      icon: Heart,
      suitable: "Sensitive gums or metal allergies",
    },
    {
      name: "Implant Dentures",
      description: "Dentures secured with dental implants",
      features: [
        "No slipping or movement",
        "Enhanced chewing power",
        "Preserves jawbone",
        "Ultimate stability",
      ],
      price: "From £3,500",
      duration: "3-6 months",
      icon: Zap,
      suitable: "Maximum stability and function",
    },
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Restore Your Smile",
      description:
        "Natural-looking teeth that enhance your appearance and confidence",
    },
    {
      icon: Target,
      title: "Improve Function",
      description:
        "Eat your favorite foods again with properly fitted dentures",
    },
    {
      icon: Users,
      title: "Social Confidence",
      description:
        "Speak clearly and smile with confidence in social situations",
    },
    {
      icon: Shield,
      title: "Facial Support",
      description: "Maintain facial structure and prevent premature aging",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Pear Tree Dental - Dentures in Arnold",
            image: "https://peartree.dental/images/dentures-arnold.jpg",
            url: "https://peartree.dental/arnold/dentures",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: {
              "@type": "Place",
              name: "Arnold, NG5",
            },
            medicalSpecialty: "Restorative Dentistry - Dentures",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£450-£3500",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Arnold & NG5
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dentures in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Premium Denture Solutions Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Free parking & expert care
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Denture Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localised Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Arnold Residents Choose Our Premium Denture Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold residents seeking comfortable, natural-looking
                dentures, experience matters. Our 30+ years of denture expertise
                in Burton Joyce offers every type of denture solution, from
                traditional complete dentures to cutting-edge implant-retained
                options, just 15 minutes from Arnold.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {(benefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Denture Types Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Denture Solutions for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From traditional complete dentures to innovative
                implant-retained options, we provide the perfect denture
                solution for every Arnold patient's needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(dentureTypes || []).map((denture, index) => {
                const IconComponent = denture.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-primary" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {denture.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-2">
                        {denture.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {denture.suitable}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {(denture.features || []).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t text-center">
                        <p className="text-xl font-bold text-pear-primary mb-1">
                          {denture.price}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {denture.duration}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Expert Denture Care for Arnold Patients
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">30+ years experience</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Custom fitting process</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">
                    Ongoing aftercare support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Denture Journey from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures your dentures fit perfectly, look
                natural, and provide years of comfortable function.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(
                [
                  {
                    step: "1",
                    title: "Comprehensive Assessment",
                    description: "Detailed examination and treatment planning",
                    duration: "1 hour",
                  },
                  {
                    step: "2",
                    title: "Impressions & Measurements",
                    description: "Precise molds and bite registration",
                    duration: "45 minutes",
                  },
                  {
                    step: "3",
                    title: "Try-In Appointment",
                    description: "Test fit and aesthetic approval",
                    duration: "30 minutes",
                  },
                  {
                    step: "4",
                    title: "Final Fitting",
                    description: "Delivery and adjustment for perfect fit",
                    duration: "1 hour",
                  },
                ] || []
              ).map((step, _index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-primary" />
                      <span className="text-xs text-pear-primary font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Dentures
              </h2>
            </div>

            <TestimonialBanner
              text="After struggling with ill-fitting dentures for years, I found Pear Tree Dental. The difference is incredible - my new dentures fit perfectly, look completely natural, and I can eat all my favorite foods again. The team's expertise shows in every detail, and the 15-minute drive from Arnold was worth it for the quality of care I received."
              author="Margaret H. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  30+ years
                </div>
                <p className="text-gray-600">Denture expertise</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Perfect fit
                </div>
                <p className="text-gray-600">Custom-made comfort</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">
                  Natural look
                </div>
                <p className="text-gray-600">Confidence restored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Life-Changing Denture Results from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible transformations achieved with our expertly
              crafted dentures
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/dentures-before-case-1.webp"
              afterImage="/images/dentures-after-case-1.webp"
              beforeAlt="Before dentures - missing multiple teeth"
              afterAlt="After dentures - complete natural-looking smile"
              title="Complete Denture Transformation"
              description="Full upper and lower dentures restoring function and confidence"
              treatmentType="Complete Denture Treatment"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Denture Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about denture
                treatments
              </p>
            </div>

            <FAQSection faqs={arnoldDenturesFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Expert Denture Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Arnold
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 8 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey time: 15 minutes
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">
                      Comfortable Environment
                    </h4>
                    <p className="text-gray-600">
                      Relaxing atmosphere perfect for denture fittings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Arnold,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Restore Your Smile with Premium Dentures from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your denture consultation from Arnold — 30+ years expertise,
              perfect fitting, and natural-looking results just 15 minutes from
              your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free denture consultation worth £150 • Payment plans available •
                Same-day repairs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ 30+ years denture expertise</span>
              <span>✓ Perfect custom fitting</span>
              <span>✓ Same-day repair service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
