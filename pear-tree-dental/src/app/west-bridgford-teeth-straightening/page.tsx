import React from "react";
import {
  ArrowRight,
  Award,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Eye,
  Heart,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Teeth Straightening West Bridgford - Invisalign & Clear Aligners | Pear Tree Dental",
  description:
    "Discreet teeth straightening for West Bridgford residents. Invisalign, clear aligners, and modern orthodontics. Straighten your teeth without metal braces.",
  keywords: [
    "teeth straightening West Bridgford",
    "Invisalign West Bridgford",
    "clear aligners West Bridgford",
    "invisible braces West Bridgford",
    "orthodontics West Bridgford",
    "teeth alignment West Bridgford",
    "discreet braces West Bridgford",
  ],
  openGraph: {
    title:
      "Teeth Straightening in West Bridgford - Invisalign & Clear Aligners",
    description:
      "Discreet teeth straightening for West Bridgford professionals. Modern orthodontics with invisible aligners.",
    url: "https://peartree.dental/west-bridgford-teeth-straightening",
  },
  alternates: {
    canonical: "https://peartree.dental/west-bridgford-teeth-straightening",
  },
};

export default function WestBridgfordTeethStraighteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/west-bridgford-teeth-straightening",
            name: "Teeth Straightening - West Bridgford",
            description:
              "Discreet teeth straightening treatments including Invisalign and clear aligners for West Bridgford residents.",
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
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-green/20 to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">West Bridgford</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Discreet Teeth Straightening
              <span className="text-pear-gold block">for West Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Straighten your teeth discreetly with Invisalign and clear
              aligners. Perfect for West Bridgford professionals who want a
              confident smile without the appearance of traditional braces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
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
                className="bg-dental-green/20 text-dental-green border-dental-green/30"
              >
                <Eye className="w-4 h-4 mr-1" />
                Nearly Invisible
              </Badge>
              <Badge
                variant="secondary"
                className="bg-pear-gold/20 text-pear-gold border-pear-gold/30"
              >
                <Car className="w-4 h-4 mr-1" />
                12 mins from West Bridgford
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Users className="w-4 h-4 mr-1" />
                Professional Choice
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Straightening Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Modern Teeth Straightening for West Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of discreet orthodontic treatments
                designed for busy West Bridgford professionals and families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Eye className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Invisalign</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-dental-green/10 text-dental-green"
                  >
                    Most Popular
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    From £2,800
                  </p>
                  <p className="text-gray-600 mb-4">
                    Clear, removable aligners for discreet treatment
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Nearly invisible aligners</p>
                    <p>• Removable for eating & cleaning</p>
                    <p>• 6-18 months treatment time</p>
                    <p>• No dietary restrictions</p>
                  </div>
                  <Button className="w-full bg-dental-green hover:bg-dental-green/90 text-white">
                    Book Invisalign Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Zap className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Express Treatment</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-gold/10 text-pear-gold"
                  >
                    Fast Results
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">
                    From £1,995
                  </p>
                  <p className="text-gray-600 mb-4">
                    Quick correction for minor alignment issues
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3-6 months treatment time</p>
                    <p>• Focus on front teeth</p>
                    <p>• Clear aligner technology</p>
                    <p>• Ideal for professionals</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white"
                  >
                    Book Express Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">
                    Comprehensive Treatment
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-primary/10 text-pear-primary"
                  >
                    Complete Solution
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">
                    From £3,500
                  </p>
                  <p className="text-gray-600 mb-4">
                    Full orthodontic treatment for complex cases
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 12-24 months treatment</p>
                    <p>• Complex alignment correction</p>
                    <p>• Includes refinements</p>
                    <p>• Long-term stability</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                  >
                    Book Complex Case Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Clear Aligners */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Why West Bridgford Professionals Choose Clear Aligners
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Virtually Invisible
                      </h3>
                      <p className="text-gray-700">
                        Clear aligners are nearly invisible, allowing you to
                        straighten your teeth discreetly without affecting your
                        professional appearance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Lifestyle Friendly
                      </h3>
                      <p className="text-gray-700">
                        Removable aligners mean no food restrictions and easy
                        cleaning. Perfect for West Bridgford's active
                        professional lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Faster Treatment
                      </h3>
                      <p className="text-gray-700">
                        Modern aligner technology often provides faster results
                        than traditional braces, with most cases completed in
                        6-18 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/10 to-pear-gold/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Eye className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
                        CLEAR ALIGNER TECHNOLOGY
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Modern orthodontics for professionals
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Nearly invisible treatment</p>
                        <p>• Removable convenience</p>
                        <p>• Comfortable to wear</p>
                        <p>• Predictable results</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Teeth Straightening Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple, straightforward process designed to fit around your
                West Bridgford lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {(
                [
                  {
                    step: "1",
                    title: "Consultation",
                    description:
                      "Free initial assessment and treatment planning",
                    icon: Users,
                    time: "45 minutes",
                  },
                  {
                    step: "2",
                    title: "Digital Scan",
                    description:
                      "3D imaging to create your personalized treatment plan",
                    icon: Sparkles,
                    time: "30 minutes",
                  },
                  {
                    step: "3",
                    title: "Aligner Fitting",
                    description: "Receive your first set of custom aligners",
                    icon: CheckCircle,
                    time: "20 minutes",
                  },
                  {
                    step: "4",
                    title: "Progress Monitoring",
                    description: "Regular check-ups to monitor your progress",
                    icon: Award,
                    time: "15 minutes",
                  },
                ] || []
              ).map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center border border-dental-green/20"
                  >
                    <div className="w-12 h-12 bg-dental-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="h-8 w-8 mx-auto text-dental-green mb-4" />
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-dental-green/10 text-dental-green text-xs"
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

      {/* West Bridgford Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Convenient Treatment from West Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional orthodontic care without the city center hassle.
                Easy access and flexible scheduling for busy lifestyles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Easy Access</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 12 minutes from West Bridgford with free parking and easy
                  countryside route.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Direct route via A52 and A612</p>
                  <p>• Avoid city center traffic</p>
                  <p>• Free on-site parking</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">
                    Flexible Appointments
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Evening and weekend appointments to fit around your
                  professional schedule.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Early morning slots</p>
                  <p>• Evening appointments</p>
                  <p>• Weekend availability</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Expert Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Experienced orthodontic team with extensive clear aligner
                  expertise.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Certified Invisalign providers</p>
                  <p>• Hundreds of cases completed</p>
                  <p>• Ongoing professional development</p>
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
                What West Bridgford Patients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from West Bridgford residents who've transformed
                their smiles with clear aligners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "David Chen",
                    location: "West Bridgford",
                    profession: "Accountant",
                    text: "Perfect for my professional life. Clients never knew I was having treatment! Results exceeded my expectations and the journey from West Bridgford was always easy.",
                    rating: 5,
                    treatment: "Invisalign",
                  },
                  {
                    name: "Rachel Thompson",
                    location: "West Bridgford",
                    profession: "Marketing Manager",
                    text: "The express treatment was exactly what I needed. 4 months to straight teeth without anyone noticing. Fantastic service and convenient location.",
                    rating: 5,
                    treatment: "Express Aligners",
                  },
                  {
                    name: "Mark Stevens",
                    location: "West Bridgford",
                    profession: "Solicitor",
                    text: "Comprehensive treatment for my complex case. The team's expertise was evident throughout. Couldn't be happier with my new smile and confidence.",
                    rating: 5,
                    treatment: "Complex Case Treatment",
                  },
                ] || []
              ).map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-dental-green">
                      {([...Array(review.rating)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{review.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-dental-green">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {review.profession}, {review.location}
                      </div>
                      <div className="text-sm text-pear-gold font-medium">
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
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Straighten Your Smile Discreetly?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join West Bridgford professionals who've chosen clear aligners for
              a confident, straight smile. Book your consultation and discover
              how easy modern orthodontics can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-dental-green font-semibold px-8 py-4"
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
                className="border-white text-white hover:bg-white hover:text-dental-green px-8 py-4"
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
