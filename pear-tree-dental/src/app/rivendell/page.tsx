import React from "react";
import {
  Baby,
  CheckCircle,
  Clock,
  Heart,
  HeartHandshake,
  Home,
  MapPin,
  Phone,
  Route,
  Shield,
  Smile,
  Star,
  TreePine,
  UserPlus,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Dentist for Rivendell Residents - Pear Tree Dental | New Home Dental Care",
  description:
    "New to Rivendell? Register your family with Pear Tree Dental. Local dental care for Rivendell housing estate residents with family-friendly services.",
  keywords: [
    "dentist Rivendell",
    "Rivendell dental care",
    "new home dentist",
    "family dentist Rivendell",
    "dental registration Rivendell",
    "children dentist Rivendell",
    "Rivendell housing estate dentist",
  ],
  openGraph: {
    title:
      "Dentist for Rivendell Residents - Pear Tree Dental | New Home Dental Care",
    description:
      "Welcome to the area! Family dental care for Rivendell residents. Easy registration, children welcome, membership plans available.",
    url: "https://peartree.dental/rivendell",
  },
  alternates: {
    canonical: "https://peartree.dental/rivendell",
  },
};

export default function RivendellPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/rivendell",
            name: "Pear Tree Dental - Serving Rivendell Residents",
            image:
              "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            description:
              "Family dental practice serving Rivendell housing estate residents with comprehensive dental care for all ages.",
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
            areaServed: {
              "@type": "Place",
              name: "Rivendell, Nottinghamshire",
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "52.9847",
                longitude: "-1.0147",
              },
              geoRadius: "15000",
            },
          }),
        }}
      />

      {/* Welcome Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-green/20 to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <TreePine className="absolute top-20 left-20 w-32 h-32 text-dental-green" />
          <Home className="absolute bottom-20 right-20 w-48 h-48 text-pear-gold" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Home className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">
                Welcome to Rivendell
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              New to the Area?
              <span className="text-pear-gold block">Your Local Dentist</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Welcome to Rivendell! As you settle into your new home, let Pear
              Tree Dental be your family's trusted local dental practice.
              Convenient location, family-friendly care, and easy registration.
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
                  Register Your Family
                </Link>
              </Button>
            </div>

            {/* New Resident Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="bg-dental-green/20 text-dental-green border-dental-green/30"
              >
                <Baby className="w-4 h-4 mr-1" />
                Children Welcome
              </Badge>
              <Badge
                variant="secondary"
                className="bg-pear-gold/20 text-pear-gold border-pear-gold/30"
              >
                <Users className="w-4 h-4 mr-1" />
                Family Plans
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <HeartHandshake className="w-4 h-4 mr-1" />
                New Patient Discount
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* New Home Setup Checklist */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                ✓ Settling Into Your New Home?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Make dental care part of your new home setup. We make it easy
                for Rivendell families to register and get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-dental-green/10 to-dental-green/5 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6 text-dental-navy">
                    New Home Checklist
                  </h3>
                  <div className="space-y-4">
                    {(
                      [
                        { task: "Set up utilities", status: "complete" },
                        { task: "Register with GP", status: "complete" },
                        { task: "Find local schools", status: "complete" },
                        {
                          task: "Register with dentist",
                          status: "pending",
                          highlight: true,
                        },
                        { task: "Explore local amenities", status: "pending" },
                      ] || []
                    ).map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${
                          item.highlight
                            ? "bg-pear-gold/20 border border-pear-gold/30"
                            : item.status === "complete"
                              ? "bg-dental-green/10"
                              : "bg-gray-50"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            item.status === "complete"
                              ? "bg-dental-green"
                              : item.highlight
                                ? "bg-pear-gold"
                                : "bg-gray-300"
                          }`}
                        >
                          {item.status === "complete" ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-white text-xs font-bold">
                              !
                            </span>
                          )}
                        </div>
                        <span
                          className={`${item.highlight ? "font-semibold text-pear-gold" : "text-gray-700"}`}
                        >
                          {item.task}
                        </span>
                        {item.highlight && (
                          <Badge
                            variant="secondary"
                            className="ml-auto bg-pear-gold text-white"
                          >
                            Next Step
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
                      <Route className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Just 6 Minutes Away
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Quick and easy journey from Rivendell to our Burton
                        Joyce practice
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Direct route via local roads</li>
                        <li>• No city center traffic</li>
                        <li>• Free parking available</li>
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
                        Easy Registration
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Simple family registration process - we'll handle all
                        the paperwork
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Register whole family together</li>
                        <li>• Flexible appointment times</li>
                        <li>• New patient welcome discount</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-dental-green/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Baby className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Children Welcome
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Gentle, caring dental care for children of all ages
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fun, friendly environment</li>
                        <li>• Patient, experienced team</li>
                        <li>• Early dental health education</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family-Focused Services */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Family Dental Care for Rivendell Residents
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive dental services for every member of your family,
                from toddlers to grandparents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: "Children's Dentistry",
                    description:
                      "Gentle dental care to keep young smiles healthy",
                    icon: Baby,
                    features: [
                      "First dental visits",
                      "Preventive treatments",
                      "Tooth-friendly education",
                      "Fluoride applications",
                    ],
                    price: "From £35",
                    badge: "Ages 0-17",
                  },
                  {
                    title: "Family Check-ups",
                    description:
                      "Regular dental health assessments for the whole family",
                    icon: Users,
                    features: [
                      "Comprehensive exams",
                      "X-rays when needed",
                      "Oral health advice",
                      "Treatment planning",
                    ],
                    price: "From £45",
                    badge: "Whole Family",
                  },
                  {
                    title: "Emergency Care",
                    description: "Urgent dental care when your family needs it",
                    icon: Shield,
                    features: [
                      "Same-day appointments",
                      "Pain relief",
                      "Emergency repairs",
                      "Out-of-hours advice",
                    ],
                    price: "From £75",
                    badge: "24/7 Support",
                  },
                  {
                    title: "Preventive Care",
                    description:
                      "Keep your family's teeth healthy with regular care",
                    icon: Heart,
                    features: [
                      "Professional cleaning",
                      "Hygienist appointments",
                      "Dietary advice",
                      "Sealants for children",
                    ],
                    price: "From £55",
                    badge: "Prevention First",
                  },
                  {
                    title: "Family Membership",
                    description: "Affordable dental care plans for families",
                    icon: HeartHandshake,
                    features: [
                      "Predictable monthly costs",
                      "No consultation fees",
                      "Discounts on treatments",
                      "Priority booking",
                    ],
                    price: "From £8.99",
                    badge: "Save £££s",
                  },
                  {
                    title: "Cosmetic Dentistry",
                    description: "Smile makeovers for adults and teens",
                    icon: Smile,
                    features: [
                      "Teeth whitening",
                      "Straightening options",
                      "Veneers",
                      "Composite bonding",
                    ],
                    price: "From £300",
                    badge: "Confidence Boost",
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold">
                              {service.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="text-xs mt-1 bg-dental-green/10 text-dental-green"
                            >
                              {service.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dental-green">
                            {service.price}
                          </p>
                        </div>
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
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-dental-green/10 to-pear-gold/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  🎉 New Rivendell Resident Offer
                </h3>
                <p className="text-gray-700 mb-6">
                  <strong>20% off</strong> your family's first appointments when
                  you register as a new patient. Plus, children under 12 get a
                  free dental health pack!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Register Your Family
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rivendell Community Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Your Rivendell Neighbors Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from fellow Rivendell families about their dental care
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "Emma & Tom Bradley",
                    location: "Rivendell",
                    text: "We moved to Rivendell last year and finding Pear Tree Dental was one of the best decisions. The kids love going, and the staff make everything so easy for busy families.",
                    rating: 5,
                    service: "Family Registration",
                    children: "3 children",
                  },
                  {
                    name: "Sarah Johnson",
                    location: "Rivendell",
                    text: "As a new mum in the area, I was nervous about finding good dental care. The team is so understanding and gentle with my toddler. The journey is super quick too!",
                    rating: 5,
                    service: "Children's Dentistry",
                    children: "1 toddler",
                  },
                  {
                    name: "The Martinez Family",
                    location: "Rivendell",
                    text: "The family membership plan has saved us so much money. Great to have a local dentist that really cares about the community. Highly recommend to new residents!",
                    rating: 5,
                    service: "Family Membership",
                    children: "Family of 5",
                  },
                ] || []
              ).map((review, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg border border-dental-green/20"
                >
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
                        {review.location} • {review.children}
                      </div>
                      <div className="text-sm text-pear-gold font-medium">
                        {review.service}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-dental-green/10 to-pear-gold/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-dental-green">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-dental-green">
                    4.9/5
                  </span>
                </div>
                <p className="text-gray-700 font-semibold">
                  Based on 25+ reviews from Rivendell families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Easy Journey from Rivendell
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Practice</h3>
                      <p className="text-gray-700">
                        Pear Tree Dental
                        <br />
                        Main Street
                        <br />
                        Burton Joyce
                        <br />
                        Nottinghamshire NG14 5DP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-700">
                        Phone: 0115 931 2935
                        <br />
                        New patients welcome
                        <br />
                        Family registration available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Family-Friendly Hours
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>After-school appointments available</p>
                        <p>Emergency: 24/7 support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Quick Route from Rivendell
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-dental-green/20">
                  <h3 className="font-semibold mb-4 text-dental-green">
                    Simple Journey (6 minutes)
                  </h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <span>Exit Rivendell estate onto the main road</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <span>Follow signs to Burton Joyce village center</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <span>Turn right onto Main Street in Burton Joyce</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        4
                      </span>
                      <span>
                        Pear Tree Dental on your left with free parking
                      </span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-dental-green/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Perfect for families:</strong> Local route, no
                      traffic lights, safe parking right outside the practice!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Registration CTA */}
      <section className="py-16 bg-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Register Your Family?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the growing Rivendell community who trust Pear Tree Dental
              with their family's oral health. Easy registration, warm welcome,
              and dental care you can trust.
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
                <Link href="/membership">
                  <Users className="h-5 w-5 mr-2" />
                  Family Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
