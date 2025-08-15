import React from "react";
import {
  ArrowRight,
  Award,
  Camera,
  Car,
  Clock,
  Crown,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Teeth Whitening East Bridgford - Village Professional Whitening | Pear Tree Dental",
  description:
    "Exclusive teeth whitening for East Bridgford village residents. Professional whitening treatments with village convenience and personal service.",
  keywords: [
    "teeth whitening East Bridgford",
    "village teeth whitening East Bridgford",
    "professional teeth whitening East Bridgford",
    "dental whitening East Bridgford",
    "smile whitening East Bridgford",
  ],
  openGraph: {
    title: "Village Teeth Whitening in East Bridgford - Pear Tree Dental",
    description:
      "Transform your smile with exclusive teeth whitening for East Bridgford village residents.",
    url: "https://peartree.dental/east-bridgford-teeth-whitening",
  },
  alternates: {
    canonical: "https://peartree.dental/east-bridgford-teeth-whitening",
  },
};

export default function EastBridgfordTeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/east-bridgford-teeth-whitening",
            name: "Professional Teeth Whitening - East Bridgford",
            description:
              "Exclusive teeth whitening treatments for East Bridgford village residents with personalized service.",
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
              name: "East Bridgford, Nottinghamshire",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-pear-primary to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-primary" />
              <span className="text-pear-primary font-medium">
                East Bridgford Village
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Village Teeth Whitening
              <span className="text-pear-primary block">
                for East Bridgford
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Exclusive professional teeth whitening for East Bridgford village
              residents. Just 5 minutes away with the personal service and
              attention to detail you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Village Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-dental-navy px-8 py-4"
              >
                <Link href="/east-bridgford">
                  <MapPin className="h-5 w-5 mr-2" />
                  East Bridgford Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for East Bridgford */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="bg-pear-primary text-pear-primary border-pear-primary"
              >
                <Clock className="w-4 h-4 mr-1" />
                Same-Day Results
              </Badge>
              <Badge
                variant="secondary"
                className="bg-dental-green text-dental-green border-dental-green"
              >
                <Car className="w-4 h-4 mr-1" />5 mins from Village
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white text-white border-white"
              >
                <TreePine className="w-4 h-4 mr-1" />
                Village Exclusive
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Exclusive Whitening Options for East Bridgford Village
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of professional whitening treatments, all
                designed to deliver exceptional results with the personal touch
                that village life deserves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-primary bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Village Same-Day</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-primary text-pear-primary"
                  >
                    Village Exclusive
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">
                    £395
                  </p>
                  <p className="text-gray-600 mb-4">
                    Professional in-chair whitening with personal service
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Up to 8 shades lighter in one session</p>
                    <p>• 60-90 minute village appointment</p>
                    <p>• Includes personal touch-up kit</p>
                    <p>• Village resident priority</p>
                  </div>
                  <Button className="w-full bg-pear-primary hover:bg-pear-primary/90 text-white">
                    Book Village Treatment
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Camera className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Village Take-Home</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-dental-green text-dental-green"
                  >
                    Personal Choice
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    £295
                  </p>
                  <p className="text-gray-600 mb-4">
                    Custom trays with village convenience
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Custom-fitted whitening trays</p>
                    <p>• Professional grade gel</p>
                    <p>• Whiten in village comfort</p>
                    <p>• Personal follow-up care</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                  >
                    Book Village Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Village Premium</CardTitle>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-pear-gold text-pear-gold"
                  >
                    Complete Care
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">£550</p>
                  <p className="text-sm text-gray-500 line-through mb-2">
                    Was £690
                  </p>
                  <p className="text-gray-600 mb-4">
                    Complete whitening package with village benefits
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Same-day whitening session</p>
                    <p>• Custom take-home trays</p>
                    <p>• Professional maintenance gel</p>
                    <p>• Village member benefits</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy"
                  >
                    Book Premium Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Village Whitening */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Why East Bridgford Village Chooses Professional Whitening
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Superior Village Care
                      </h3>
                      <p className="text-gray-700">
                        Professional-grade whitening delivers results that
                        over-the-counter products simply cannot match, with the
                        personal attention that village residents deserve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Safe & Personal
                      </h3>
                      <p className="text-gray-700">
                        Professional supervision ensures safe application and
                        optimal results while providing the personal care and
                        attention you expect from village service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Long-Lasting Results
                      </h3>
                      <p className="text-gray-700">
                        Professional whitening results typically last 1-3 years
                        with proper care, far longer than store-bought
                        alternatives, with ongoing village support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-pear-primary to-dental-green flex items-center justify-center">
                    <div className="text-center p-8">
                      <Sparkles className="w-16 h-16 mx-auto mb-4 text-pear-primary" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
                        VILLAGE WHITENING
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Exclusive results for East Bridgford
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Village exclusive service</p>
                        <p>• Up to 8 shades lighter</p>
                        <p>• Personal attention</p>
                        <p>• Know you by name care</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* East Bridgford Village Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Village Convenience from East Bridgford
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional teeth whitening without the city center hassle.
                Beautiful countryside route and personal village service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">
                    5-Minute Village Journey
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Peaceful countryside route from East Bridgford via A46 and
                  A612. Beautiful village-to-village access.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Scenic countryside route</p>
                  <p>• No traffic congestion</p>
                  <p>• Village parking available</p>
                </div>
              </Card>

              <Card className="p-6 border border-dental-green">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Village Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible appointment times with village priority booking and
                  personal scheduling attention.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Village priority booking</p>
                  <p>• Personal appointment care</p>
                  <p>• Flexible timing</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Village Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Personal attention and community care that makes every village
                  resident feel valued and special.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Know you by name service</p>
                  <p>• Personal care approach</p>
                  <p>• Village community feel</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* East Bridgford Village Reviews */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What East Bridgford Village Says
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real reviews from fellow East Bridgford village residents who've
                transformed their smiles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "Margaret & Robert Hartley",
                    location: "East Bridgford Village",
                    text: "Absolutely wonderful! The personal attention we received was exceptional. Our smiles are 6 shades brighter and the village journey was so peaceful.",
                    rating: 5,
                    treatment: "Village Premium Package",
                  },
                  {
                    name: "Dr. Catherine Williams",
                    location: "East Bridgford",
                    text: "Perfect for village life! The team knows me by name and the results exceeded my expectations. Professional service with a personal touch.",
                    rating: 5,
                    treatment: "Village Same-Day Whitening",
                  },
                  {
                    name: "James Thompson",
                    location: "East Bridgford Village",
                    text: "The take-home kit was ideal. Personal consultation and follow-up care made all the difference. Genuine village service excellence.",
                    rating: 5,
                    treatment: "Village Take-Home Kit",
                  },
                ] || []
              ).map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-pear-primary">
                      {([...Array(review.rating)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{review.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-pear-primary">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {review.location}
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
      <section className="py-16 bg-gradient-to-r from-pear-primary to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Village Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join East Bridgford village residents who've discovered the
              confidence that comes with a brighter smile and the personal care
              that village life deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-pear-primary font-semibold px-8 py-4"
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
                className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4"
              >
                <Link href="/east-bridgford">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  More Village Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
