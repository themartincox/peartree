import {
  Building,
  CheckCircle,
  Clock,
  Heart,
  HeartHandshake,
  Home,
  MapIcon,
  MapPin,
  PackageCheck,
  Phone,
  Shield,
  Star,
  UserPlus,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "NG14 Dentist - Pear Tree Dental | Local Dental Care for NG14 Residents",
  description:
    "Local dentist for NG14 postal area residents. New home developments in Burton Joyce, Lowdham, and surrounding NG14 areas. Family dental care and membership plans.",
  keywords: [
    "NG14 dentist",
    "dentist NG14",
    "Burton Joyce dentist",
    "Lowdham dentist",
    "NG14 dental care",
    "new homes NG14",
    "dental practice NG14",
    "family dentist NG14",
  ],
  openGraph: {
    title:
      "NG14 Dentist - Pear Tree Dental | Local Dental Care for NG14 Residents",
    description:
      "Your local dentist in the heart of NG14. Serving new developments and established communities with modern dental care.",
    url: "https://peartree.dental/ng14-dental",
  },
  alternates: {
    canonical: "https://peartree.dental/ng14-dental",
  },
};

export default function NG14DentalPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/ng14-dental",
            name: "Pear Tree Dental - NG14 Local Dentist",
            image:
              "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            description:
              "Local dental practice serving the NG14 postal area including Burton Joyce, Lowdham, and new housing developments.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Main Street",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5DP",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "52.9847",
              longitude: "-1.0147",
            },
            telephone: "0115 931 2935",
            url: "https://peartree.dental",
            areaServed: [
              {
                "@type": "PostalAddress",
                postalCode: "NG14",
                addressCountry: "GB",
              },
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "52.9847",
                longitude: "-1.0147",
              },
              geoRadius: "10000",
            },
          }),
        }}
      />

      {/* NG14 Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-teal to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <MapIcon className="absolute top-20 left-20 w-32 h-32 text-dental-green" />
          <Building className="absolute bottom-20 right-20 w-48 h-48 text-pear-gold" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">
                NG14 Postal Area
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Local NG14
              <span className="text-pear-gold block">Dentist</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Right in the heart of NG14! Serving Burton Joyce, Lowdham, and all
              the new developments in the NG14 postal area. Local dental care
              for local residents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
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
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/membership">
                  <UserPlus className="h-5 w-5 mr-2" />
                  NG14 Membership Plans
                </Link>
              </Button>
            </div>

            {/* NG14 Coverage Areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-pear-gold">
                NG14 Areas We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {(
                  [
                    "Burton Joyce",
                    "Lowdham",
                    "Calverton",
                    "Woodborough",
                    "Lambley",
                    "Stoke Bardolph",
                    "New Developments",
                    "Rural NG14",
                  ] || []
                ).map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-dental-green flex-shrink-0" />
                    <span className="text-white">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New NG14 Developments */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                New to NG14? We're Your Local Dentist
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With new housing developments across NG14, we're here to welcome
                new residents and provide excellent dental care right on your
                doorstep.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Building className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">New Developments</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">
                    Serving new housing estates throughout NG14 including Burton
                    Joyce expansions and rural developments
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• New build housing estates</p>
                    <p>• Rural development sites</p>
                    <p>• Family home communities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Perfect Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">
                    Right in the heart of NG14 on Main Street, Burton Joyce -
                    the most convenient location for all NG14 residents
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Central NG14 location</p>
                    <p>• Easy access from all areas</p>
                    <p>• Free on-site parking</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Users className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Local Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">
                    Part of the NG14 community for years, we understand local
                    families and their dental care needs
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Established local practice</p>
                    <p>• Community-focused care</p>
                    <p>• Family-friendly approach</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NG14 Moving Checklist */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Moving to NG14? Don't Forget Dental Care!
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-dental-green/20">
                  <h3 className="text-xl font-bold mb-6 text-dental-green">
                    NG14 New Resident Checklist
                  </h3>
                  <div className="space-y-4">
                    {(
                      [
                        {
                          task: "Set up utilities (gas, electric, water)",
                          completed: true,
                        },
                        {
                          task: "Register with local council",
                          completed: true,
                        },
                        { task: "Find nearby schools", completed: true },
                        {
                          task: "Register with NG14 GP practice",
                          completed: true,
                        },
                        {
                          task: "Register with local dentist",
                          completed: false,
                          important: true,
                        },
                        {
                          task: "Explore NG14 local amenities",
                          completed: false,
                        },
                      ] || []
                    ).map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${
                          item.important
                            ? "bg-pear-gold/20 border border-pear-gold/30"
                            : item.completed
                              ? "bg-dental-green/10"
                              : "bg-gray-50"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            item.completed
                              ? "bg-dental-green"
                              : item.important
                                ? "bg-pear-gold"
                                : "bg-gray-300"
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <PackageCheck className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span
                          className={`${item.important ? "font-semibold text-pear-gold" : "text-gray-700"}`}
                        >
                          {item.task}
                        </span>
                        {item.important && (
                          <Badge
                            variant="secondary"
                            className="ml-auto bg-pear-gold text-white"
                          >
                            Next!
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border border-dental-green/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Right in Your NG14 Postcode
                      </h3>
                      <p className="text-gray-700 mb-2">
                        We're located at NG14 5DP - right in the heart of your
                        postal area for maximum convenience
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Same postcode area as many NG14 residents</li>
                        <li>• No need to travel outside your local area</li>
                        <li>• Quick journey from anywhere in NG14</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-pear-gold/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Easy NG14 Registration
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Simple registration process for NG14 residents - we know
                        the local area and community
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Streamlined registration for NG14 families</li>
                        <li>• Flexible appointment times</li>
                        <li>• New resident welcome offer</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-dental-green/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        NG14 Travel Times
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Quick and easy journey times from all NG14 locations
                      </p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Burton Joyce:</span>
                          <span className="font-semibold">2 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lowdham:</span>
                          <span className="font-semibold">8 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Calverton:</span>
                          <span className="font-semibold">12 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Woodborough:</span>
                          <span className="font-semibold">10 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NG14 Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Complete Dental Care for NG14 Residents
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive dental services for all NG14 families, from
                routine care to advanced treatments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: "NG14 Family Care",
                    description: "Dental care for the whole family",
                    icon: Users,
                    features: [
                      "All ages welcome",
                      "Family appointments",
                      "Children's dentistry",
                      "Preventive care",
                    ],
                    popular: "Most popular with NG14 families",
                  },
                  {
                    title: "New Resident Care",
                    description: "Perfect for those new to NG14",
                    icon: Home,
                    features: [
                      "Quick registration",
                      "Welcome checkups",
                      "Treatment planning",
                      "Area advice",
                    ],
                    popular: "Ideal for new NG14 residents",
                  },
                  {
                    title: "Emergency Care",
                    description: "Urgent dental care when needed",
                    icon: Shield,
                    features: [
                      "Same-day appointments",
                      "NG14 priority",
                      "Pain relief",
                      "Emergency repairs",
                    ],
                    popular: "Available to all NG14 residents",
                  },
                  {
                    title: "Cosmetic Dentistry",
                    description: "Smile improvements for NG14 residents",
                    icon: Heart,
                    features: [
                      "Teeth whitening",
                      "Veneers",
                      "Smile makeovers",
                      "Confidence boost",
                    ],
                    popular: "Popular with NG14 professionals",
                  },
                  {
                    title: "NG14 Membership",
                    description: "Local membership plans",
                    icon: HeartHandshake,
                    features: [
                      "NG14 resident rates",
                      "Monthly payments",
                      "No hidden costs",
                      "Priority booking",
                    ],
                    popular: "Exclusive NG14 benefits",
                  },
                  {
                    title: "Preventive Care",
                    description: "Keep NG14 smiles healthy",
                    icon: CheckCircle,
                    features: [
                      "Regular checkups",
                      "Professional cleaning",
                      "Oral health advice",
                      "Early detection",
                    ],
                    popular: "Foundation of health",
                  },
                ] || []
              ).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                        <h3 className="text-xl font-semibold">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                      <ul className="space-y-1">
                        {(service.features || []).map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-center space-x-2"
                          >
                            <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-dental-green font-medium">
                          {service.popular}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NG14 Reviews */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What NG14 Residents Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real reviews from your NG14 neighbors across Burton Joyce,
                Lowdham, and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "David Thompson",
                    location: "Burton Joyce, NG14",
                    text: "Perfect location for us in NG14. The convenience of having our dentist right here in Burton Joyce means no long journeys with the kids.",
                    rating: 5,
                    service: "Family Care",
                  },
                  {
                    name: "Rachel Green",
                    location: "Lowdham, NG14",
                    text: "We moved to Lowdham last year and registering with Pear Tree Dental was one of our best decisions. Local, professional, and caring.",
                    rating: 5,
                    service: "New Resident Registration",
                  },
                  {
                    name: "Mark Stevens",
                    location: "Calverton, NG14",
                    text: "Great to have a quality dentist right in our NG14 area. The journey from Calverton is easy and the care is excellent.",
                    rating: 5,
                    service: "Regular Care",
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
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-gray-500">{review.location}</span>
                    </div>
                    <div className="text-xs text-dental-green font-medium">
                      {review.service}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1 text-dental-green">
                  {([...Array(5)] || []).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-dental-navy">5.0</span>
              </div>
              <p className="text-gray-600">
                Based on 50+ reviews from NG14 area residents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NG14 CTA */}
      <section className="py-16 bg-dental-green text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Your Local NG14 Dentist is Ready to Welcome You
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of NG14 residents who trust Pear Tree Dental with
              their family's oral health. Right in your postcode area for
              ultimate convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-dental-navy hover:bg-dental-navy/90 text-white font-semibold px-8 py-4"
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
                className="border-dental-navy text-dental-navy hover:bg-dental-navy hover:text-white px-8 py-4"
              >
                <Link href="/membership">
                  <MapPin className="h-5 w-5 mr-2" />
                  NG14 Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
