import {
  Car,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Phone,
  Route,
  Shield,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Dentist in Mapperly - Pear Tree Dental | Quality Dental Care Near You",
  description:
    "Looking for a dentist near Mapperly? Pear Tree Dental in Burton Joyce offers modern dental care, membership plans, and convenient access for Mapperly residents.",
  keywords: [
    "dentist Mapperly",
    "dentist near Mapperly",
    "dental practice Mapperly",
    "Burton Joyce dentist",
    "emergency dentist Mapperly",
    "dental care Mapperly Nottinghamshire",
    "Mapperly dental clinic",
  ],
  openGraph: {
    title:
      "Dentist in Mapperly - Pear Tree Dental | Quality Dental Care Near You",
    description:
      "Modern dental care for Mapperly residents. Membership plans from £8.99/month. Same-day emergency appointments available.",
    url: "https://peartree.dental/mapperly",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperly",
  },
};

export default function MapperlyPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/mapperly",
            name: "Pear Tree Dental - Serving Mapperly",
            image:
              "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            description:
              "Modern dental practice serving Mapperly residents with comprehensive dental care and affordable membership plans.",
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
              name: "Mapperly, Nottinghamshire",
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-teal to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">
                Serving Mapperly
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Local Dentist
              <span className="text-pear-gold block">Near Mapperly</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional dental care for Mapperly residents at Pear Tree
              Dental in nearby Burton Joyce. Just a 10-minute journey for
              comprehensive dental services with transparent membership pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distance & Access Info */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Easy Access from Mapperly
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Quick Journey</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    10 minutes
                  </p>
                  <p className="text-gray-600">
                    Average drive from Mapperly to our Burton Joyce practice
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Direct Route</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    5.8 miles
                  </p>
                  <p className="text-gray-600">
                    Via Woodborough Road and A612 from Mapperly
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Free Parking</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">
                    On-site
                  </p>
                  <p className="text-gray-600">
                    Complimentary parking available for all patients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapperly Community Focus */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Proudly Serving the Mapperly Community
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Local Community Care
                    </h3>
                    <p className="text-gray-700">
                      We understand the Mapperly community and provide dental
                      care that fits your busy lifestyle. From families near
                      Mapperly Park to professionals commuting to the city
                      center.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Route className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Convenient Location
                    </h3>
                    <p className="text-gray-700">
                      Perfect for Mapperly residents - easy access via
                      Woodborough Road or through Gedling. No city center
                      traffic to navigate, with ample free parking on arrival.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 w-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-700">
                      Extended hours including early morning and Saturday
                      appointments to work around Mapperly residents' schedules
                      and family commitments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/10 to-dental-green/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
                        MAPPERLY TO BURTON JOYCE
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Quick 10-minute journey
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Via Woodborough Road</p>
                        <p>• Through Gedling alternative route</p>
                        <p>• Avoid city center traffic</p>
                        <p>• Free parking on arrival</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Mapperly Residents */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Dental Care for Mapperly Residents
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: "Family Dentistry",
                    description: "Complete dental care for all family members",
                    icon: Users,
                    features: [
                      "Children's dentistry",
                      "Adult check-ups",
                      "Family appointments",
                      "Preventive care",
                    ],
                    popular: "Popular with Mapperly families",
                  },
                  {
                    title: "Emergency Care",
                    description:
                      "Same-day appointments for urgent dental needs",
                    icon: Shield,
                    features: [
                      "Same-day availability",
                      "Weekend cover",
                      "Pain relief",
                      "Emergency repairs",
                    ],
                    popular: "Available for Mapperly residents",
                  },
                  {
                    title: "Cosmetic Dentistry",
                    description: "Transform your smile with modern treatments",
                    icon: Heart,
                    features: [
                      "Teeth whitening",
                      "Veneers",
                      "Composite bonding",
                      "Smile makeovers",
                    ],
                    popular: "Trusted by Mapperly professionals",
                  },
                  {
                    title: "Restorative Care",
                    description: "Repair and restore damaged teeth",
                    icon: CheckCircle,
                    features: [
                      "Dental fillings",
                      "Crowns",
                      "Bridges",
                      "Root canal treatment",
                    ],
                    popular: "Comprehensive care",
                  },
                  {
                    title: "Membership Plans",
                    description: "Affordable monthly dental care from £8.99",
                    icon: Star,
                    features: [
                      "Predictable costs",
                      "No consultation fees",
                      "Emergency cover",
                      "Family discounts",
                    ],
                    popular: "Save hundreds annually",
                  },
                  {
                    title: "Advanced Treatments",
                    description: "Modern dental solutions for complex needs",
                    icon: Clock,
                    features: [
                      "Dental implants",
                      "Orthodontics",
                      "Invisalign",
                      "ClearCorrect",
                    ],
                    popular: "Latest technology",
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

      {/* Patient Reviews */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Mapperly Patients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  {
                    name: "Jennifer K.",
                    location: "Mapperly",
                    text: "The journey from Mapperly is so easy and quick. The quality of care is outstanding and the membership plan has saved our family hundreds of pounds.",
                    rating: 5,
                    service: "Family Membership",
                  },
                  {
                    name: "Andrew T.",
                    location: "Mapperly Park",
                    text: "Excellent emergency care when I had a tooth crisis. Seen same day from Mapperly - couldn't recommend them highly enough.",
                    rating: 5,
                    service: "Emergency Care",
                  },
                  {
                    name: "Claire D.",
                    location: "Mapperly Village",
                    text: "Finally found a dentist that uses the latest technology. The team explains everything clearly and the location from Mapperly is perfect.",
                    rating: 5,
                    service: "Cosmetic Treatment",
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
                Based on 40+ reviews from Mapperly area patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Directions */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Visit Us from Mapperly
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Address</h3>
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
                        Emergency: Same number
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Opening Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Emergency only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Directions from Mapperly
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-dental-green/20">
                  <h3 className="font-semibold mb-4 text-dental-green">
                    Direct Route (10 minutes)
                  </h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <span>Head east from Mapperly via Woodborough Road</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <span>
                        Continue straight through Gedling toward Burton Joyce
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <span>Join A612 toward Burton Joyce</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        4
                      </span>
                      <span>
                        Turn right onto Main Street - Pear Tree Dental on your
                        left
                      </span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-dental-green/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Alternative:</strong> Via Gedling bypass for
                      faster journey during peak hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-dental-green text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Modern Dental Care?
            </h2>
            <p className="text-xl mb-8">
              Join Mapperly residents who've made the switch to convenient,
              affordable dental care at Pear Tree Dental
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
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
