import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  CalendarDays,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Award,
  Navigation,
  Zap,
  Target,
  Settings,
  Camera
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Crowns in Arnold - Same Day CEREC Crowns | Pear Tree Dental",
  description: "Premium dental crowns for Arnold residents. Same-day CEREC crowns and traditional porcelain options just 15 minutes away. Expert restorative dentistry with 10-year guarantees.",
  keywords: [
    "dental crowns Arnold",
    "CEREC crowns Arnold",
    "tooth crowns Arnold NG5",
    "porcelain crowns Arnold",
    "same day crowns Arnold",
    "crown dentist Arnold",
    "tooth restoration Arnold"
  ],
  openGraph: {
    title: "Dental Crowns in Arnold - Same Day CEREC Crowns | Pear Tree Dental",
    description: "Premium dental crowns for Arnold residents. Same-day CEREC crowns and expert restorative dentistry just 15 minutes away.",
    url: "https://peartree.dental/arnold/dental-crowns"
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/dental-crowns"
  }
};

export default function ArnoldDentalCrownsPage() {
  const arnoldCrownsFAQs = [
    {
      question: "How far is dental crown treatment from Arnold?",
      answer: "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're one of Nottinghamshire's most advanced crown specialists with same-day CEREC technology and traditional options."
    },
    {
      question: "What types of dental crowns are available for Arnold patients?",
      answer: "We offer same-day CEREC crowns, premium porcelain crowns, gold crowns, and zirconia crowns. Each option provides excellent durability and natural aesthetics with 10-year guarantees."
    },
    {
      question: "Can I get same-day dental crowns near Arnold?",
      answer: "Yes! Our CEREC technology allows us to design, mill, and fit your crown in a single appointment. No temporary crowns needed - you leave with your permanent restoration."
    },
    {
      question: "How long do dental crowns last for Arnold patients?",
      answer: "High-quality crowns typically last 10-15 years with proper care. We provide comprehensive aftercare and a 10-year guarantee on all premium crown treatments."
    },
    {
      question: "What makes your crown service special for Arnold residents?",
      answer: "We combine CEREC same-day technology, expert craftsmanship, premium materials, and convenient Arnold access. Our crowns are virtually indistinguishable from natural teeth."
    }
  ];

  const crownTypes = [
    {
      name: "CEREC Same-Day Crowns",
      description: "Digital design and milling in one appointment",
      features: ["Completed in 2-3 hours", "No temporary crown needed", "Perfect color matching", "Immediate function"],
      price: "From £750",
      duration: "Same day",
      icon: Zap,
      highlight: "Most Popular"
    },
    {
      name: "Premium Porcelain Crowns",
      description: "Traditional laboratory-made porcelain crowns",
      features: ["Maximum aesthetics", "Custom laboratory crafted", "Perfect translucency", "10-year guarantee"],
      price: "From £650",
      duration: "2-3 weeks",
      icon: Crown,
      highlight: "Premium Quality"
    },
    {
      name: "Zirconia Crowns",
      description: "Ultra-strong ceramic crowns for back teeth",
      features: ["Maximum durability", "Metal-free ceramic", "Excellent strength", "Natural appearance"],
      price: "From £700",
      duration: "2-3 weeks",
      icon: Shield,
      highlight: "Ultra-Strong"
    },
    {
      name: "Gold Crowns",
      description: "Traditional gold crowns for ultimate durability",
      features: ["Longest lifespan", "Gentle on opposing teeth", "Excellent biocompatibility", "Traditional option"],
      price: "From £800",
      duration: "2-3 weeks",
      icon: Award,
      highlight: "Most Durable"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Restore Function",
      description: "Return full chewing power and bite strength to damaged teeth"
    },
    {
      icon: Sparkles,
      title: "Natural Aesthetics",
      description: "Crowns that perfectly match your natural teeth in color and shape"
    },
    {
      icon: Shield,
      title: "Long-Term Protection",
      description: "Protect weakened teeth from further damage and fracture"
    },
    {
      icon: Heart,
      title: "Boost Confidence",
      description: "Smile with confidence knowing your teeth look and feel natural"
    }
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
            "name": "Pear Tree Dental - Dental Crowns in Arnold",
            "image": "https://peartree.dental/images/dental-crowns-arnold.jpg",
            "url": "https://peartree.dental/arnold/dental-crowns",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Arnold, NG5"
            },
            "medicalSpecialty": "Restorative Dentistry - Dental Crowns",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£650-£800"
          })
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
              Dental Crowns in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Same-Day CEREC Crowns Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Same-day crowns available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Crown Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
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
                Why Arnold Residents Choose Advanced Dental Crowns
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold residents needing crown treatment, technology and expertise matter. Our advanced
                dental practice in Burton Joyce offers both same-day CEREC crowns and traditional premium options
                with 10-year guarantees, just 15 minutes from Arnold with convenient free parking.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Crown Types Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Advanced Crown Options for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From revolutionary same-day CEREC crowns to traditional premium porcelain,
                we offer the complete range of crown solutions for every Arnold patient's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {crownTypes.map((crown, index) => {
                const IconComponent = crown.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary relative">
                    {crown.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-pear-gold text-white">{crown.highlight}</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-primary" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{crown.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{crown.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{crown.price}</p>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{crown.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {crown.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Advanced Technology for Arnold Patients
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Camera className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Digital impressions (no messy molds)</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Settings className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Computer-designed precision fit</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">10-year guarantee included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Crown Treatment
              </h2>
            </div>

            <TestimonialBanner
              text="I needed a crown on my front tooth after an accident and was dreading weeks with a temporary. The CEREC same-day crown at Pear Tree was incredible - designed and fitted in one morning! The 15-minute drive from Arnold was nothing compared to having a perfect tooth that matches exactly. You honestly can't tell which one is the crown."
              author="Rachel D. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Same day</div>
                <p className="text-gray-600">CEREC crown completion</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">10-15 years</div>
                <p className="text-gray-600">Expected crown lifespan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Perfect match</div>
                <p className="text-gray-600">Color and shape precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Stunning Crown Restorations from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible transformations achieved with our advanced crown technology
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/crown-before-case-1.webp"
              afterImage="/images/crown-after-case-1.webp"
              beforeAlt="Before dental crown - damaged and discolored tooth"
              afterAlt="After dental crown - perfect natural-looking restoration"
              title="Same-Day CEREC Crown Restoration"
              description="Damaged front tooth restored with CEREC crown in single appointment"
              treatmentType="CEREC Same-Day Crown"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Dental Crown Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about advanced crown treatments
              </p>
            </div>

            <FAQSection faqs={arnoldCrownsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Advanced Crown Treatment
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
                    <p className="text-pear-primary font-semibold">Journey time: 15 minutes</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">Advanced Technology</h4>
                    <p className="text-gray-600">State-of-the-art CEREC technology for same-day crowns</p>
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
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
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
              Restore Your Smile with Advanced Dental Crowns from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your crown consultation from Arnold — same-day CEREC technology, 10-year guarantees,
              and expert craftsmanship just 15 minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free crown consultation worth £150 • Same-day CEREC available • 0% interest payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day CEREC crowns available</span>
              <span>✓ 10-year guarantee included</span>
              <span>✓ Digital impressions (no molds)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
