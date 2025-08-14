import {
  ArrowRight,
  Award,
  Camera,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Eye,
  Heart,
  MapPin,
  Palette,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Smile Design West Bridgford - Complete Smile Makeovers | Pear Tree Dental",
  description:
    "Comprehensive smile design for West Bridgford residents. Veneers, crowns, whitening, and smile makeovers. Transform your smile with expert cosmetic dentistry.",
  keywords: [
    "smile design West Bridgford",
    "smile makeover West Bridgford",
    "cosmetic dentistry West Bridgford",
    "veneers West Bridgford",
    "smile transformation West Bridgford",
    "digital smile design",
    "complete smile makeover West Bridgford",
  ],
  openGraph: {
    title: "Smile Design in West Bridgford - Complete Smile Makeovers",
    description:
      "Transform your smile with comprehensive smile design in West Bridgford. Expert cosmetic dentistry and smile makeovers.",
    url: "https://peartree.dental/west-bridgford-smile-design",
  },
  alternates: {
    canonical: "https://peartree.dental/west-bridgford-smile-design",
  },
};

export default function WestBridgfordSmileDesignPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/west-bridgford-smile-design",
            name: "Smile Design - West Bridgford",
            description:
              "Comprehensive smile design and makeover treatments for West Bridgford residents using advanced cosmetic dentistry techniques.",
            provider: {
              "@type": "Dentist",
              name: "Pear Tree Dental",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Street",
                addressLocality: "Burton Joyce",
                addressRegion: "Nottinghamshire",
                postalCode: "NG14 5DP",
                addressCountry: "GB",
              },
              telephone: "0115 931 2935",
            },
            areaServed: {
              "@type": "Place",
              name: "West Bridgford, Nottinghamshire",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-pear-primary/20 to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">West Bridgford</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Complete Smile Design
              <span className="text-pear-gold block">for West Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your smile with comprehensive smile design and
              makeovers. Expert cosmetic dentistry combining veneers, crowns,
              whitening, and alignment for West Bridgford's discerning
              residents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Design Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4"
              >
                <Link href="/west-bridgford">
                  <MapPin className="h-5 w-5 mr-2" />
                  West Bridgford Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for West Bridgford */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="bg-pear-gold/20 text-pear-gold border-pear-gold/30"
              >
                <Palette className="w-4 h-4 mr-1" />
                Digital Design Preview
              </Badge>
              <Badge
                variant="secondary"
                className="bg-dental-green/20 text-dental-green border-dental-green/30"
              >
                <Car className="w-4 h-4 mr-1" />
                12 mins from West Bridgford
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Crown className="w-4 h-4 mr-1" />
                Complete Makeovers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Smile Design for West Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From subtle enhancements to complete smile transformations, our
                expert team creates beautiful, natural-looking results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Palette className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">
                    Digital Smile Design
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-gold/10 text-pear-gold"
                  >
                    Preview Your New Smile
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">
                    From £295
                  </p>
                  <p className="text-gray-600 mb-4">
                    See your new smile before treatment begins
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3D digital smile preview</p>
                    <p>• Comprehensive treatment planning</p>
                    <p>• Multiple design options</p>
                    <p>• Detailed cost breakdown</p>
                  </div>
                  <Button className="w-full bg-pear-gold hover:bg-pear-gold/90 text-dental-navy">
                    Book Design Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Complete Makeover</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-dental-green/10 text-dental-green"
                  >
                    Total Transformation
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    From £4,500
                  </p>
                  <p className="text-gray-600 mb-4">
                    Comprehensive smile transformation package
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Veneers, crowns, or combination</p>
                    <p>• Teeth whitening included</p>
                    <p>• Gum reshaping if needed</p>
                    <p>• Complete smile redesign</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                  >
                    Book Makeover Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Enhancement Package</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-primary/10 text-pear-primary"
                  >
                    Subtle Improvements
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">
                    From £1,895
                  </p>
                  <p className="text-gray-600 mb-4">
                    Subtle improvements for natural enhancement
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Composite bonding</p>
                    <p>• Professional whitening</p>
                    <p>• Minor reshaping</p>
                    <p>• Natural-looking results</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                  >
                    Book Enhancement Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Process */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Smile Design Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive process designed to create your perfect smile
                with precision and care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(
                [
                  {
                    step: "1",
                    title: "Consultation & Analysis",
                    description:
                      "Comprehensive assessment of your smile, facial features, and goals",
                    icon: Users,
                    time: "60 minutes",
                  },
                  {
                    step: "2",
                    title: "Digital Design",
                    description:
                      "3D modeling and digital preview of your new smile options",
                    icon: Camera,
                    time: "45 minutes",
                  },
                  {
                    step: "3",
                    title: "Treatment Planning",
                    description:
                      "Detailed treatment plan with timeline and investment options",
                    icon: CheckCircle,
                    time: "30 minutes",
                  },
                  {
                    step: "4",
                    title: "Smile Creation",
                    description:
                      "Precise implementation of your personalized smile design",
                    icon: Crown,
                    time: "2-6 visits",
                  },
                ] || []
              ).map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center border border-pear-gold/20"
                  >
                    <div className="w-12 h-12 bg-pear-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="h-8 w-8 mx-auto text-pear-gold mb-4" />
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-pear-gold/10 text-pear-gold text-xs"
                    >
                      {step.time}
                    </Badge>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Smile Design Treatment Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple treatment approaches to achieve your perfect smile,
                tailored to your needs and lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: "Porcelain Veneers",
                    description:
                      "Ultra-thin porcelain shells for dramatic transformation",
                    icon: Crown,
                    features: [
                      "Natural appearance",
                      "Stain resistant",
                      "Long-lasting",
                      "Minimal preparation",
                    ],
                    price: "From £795 per tooth",
                    popular: "Most popular choice",
                  },
                  {
                    title: "Composite Bonding",
                    description:
                      "Sculpted resin for subtle shape and color improvements",
                    icon: Palette,
                    features: [
                      "Same-day treatment",
                      "Conservative approach",
                      "Reversible option",
                      "Cost-effective",
                    ],
                    price: "From £295 per tooth",
                    popular: "Subtle enhancement",
                  },
                  {
                    title: "Dental Crowns",
                    description:
                      "Complete coverage for extensively damaged teeth",
                    icon: Shield,
                    features: [
                      "Complete protection",
                      "Natural strength",
                      "Color matched",
                      "Durable solution",
                    ],
                    price: "From £895 per crown",
                    popular: "Restoration & aesthetics",
                  },
                  {
                    title: "Teeth Whitening",
                    description:
                      "Professional whitening for a brighter foundation",
                    icon: Sparkles,
                    features: [
                      "Immediate results",
                      "Safe procedure",
                      "Long-lasting",
                      "Confidence boost",
                    ],
                    price: "From £395",
                    popular: "Perfect starting point",
                  },
                  {
                    title: "Gum Contouring",
                    description: "Reshape gums for perfect smile proportions",
                    icon: Heart,
                    features: [
                      "Precise shaping",
                      "Immediate results",
                      "Comfortable procedure",
                      "Enhanced proportions",
                    ],
                    price: "From £295",
                    popular: "Perfect smile frame",
                  },
                  {
                    title: "Smile Alignment",
                    description: "Clear aligners for straight teeth foundation",
                    icon: Eye,
                    features: [
                      "Nearly invisible",
                      "Removable",
                      "Predictable results",
                      "Professional grade",
                    ],
                    price: "From £2,800",
                    popular: "Discreet straightening",
                  },
                ] || []
              ).map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border border-pear-gold/20 hover:border-pear-gold/40 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-pear-gold flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">
                            {treatment.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs mt-1 bg-pear-gold/10 text-pear-gold"
                          >
                            {treatment.popular}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600">{treatment.description}</p>
                      <div className="text-sm font-semibold text-dental-green">
                        {treatment.price}
                      </div>
                      <ul className="space-y-1">
                        {(treatment.features || []).map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-center space-x-2"
                          >
                            <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* West Bridgford Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Expert Smile Design from West Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                World-class cosmetic dentistry without the city center hassle.
                Convenient access and expert care for discerning West Bridgford
                residents.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Convenient Location</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 12 minutes from West Bridgford with easy parking and
                  countryside route.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Direct route via A52 and A612</p>
                  <p>• Avoid city center traffic</p>
                  <p>• Free dedicated parking</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Expert Team</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Highly experienced cosmetic dentists with extensive smile
                  design expertise.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Advanced cosmetic training</p>
                  <p>• Hundreds of makeovers completed</p>
                  <p>• Latest technology and techniques</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Extended hours and weekend appointments to fit your
                  professional schedule.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Evening consultations</p>
                  <p>• Weekend appointments</p>
                  <p>• Flexible treatment schedules</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* West Bridgford Patient Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                West Bridgford Smile Transformations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from West Bridgford residents who've transformed
                their confidence with smile design
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "Victoria Hamilton",
                    location: "West Bridgford",
                    profession: "Business Owner",
                    text: "The digital preview was incredible - I could see exactly how my smile would look. The final result exceeded even those expectations. Absolutely life-changing.",
                    rating: 5,
                    treatment: "Complete Smile Makeover",
                  },
                  {
                    name: "Andrew Mitchell",
                    location: "West Bridgford",
                    profession: "Consultant",
                    text: "Subtle enhancement that made a huge difference to my confidence. The team understood exactly what I wanted - natural-looking improvement.",
                    rating: 5,
                    treatment: "Composite Bonding Enhancement",
                  },
                  {
                    name: "Caroline Rogers",
                    location: "West Bridgford",
                    profession: "Marketing Director",
                    text: "From consultation to final result, the attention to detail was remarkable. My new smile has transformed how I feel about myself professionally and personally.",
                    rating: 5,
                    treatment: "Porcelain Veneer Design",
                  },
                ] || []
              ).map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-pear-gold">
                      {([...Array(review.rating)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{review.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-pear-gold">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {review.profession}, {review.location}
                      </div>
                      <div className="text-sm text-dental-green font-medium">
                        {review.treatment}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-gold to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Design Your Perfect Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join West Bridgford residents who've discovered the confidence
              that comes with a perfectly designed smile. Book your
              comprehensive smile design consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-pear-gold font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pear-gold px-8 py-4"
              >
                <Link href="/west-bridgford">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  More West Bridgford Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
