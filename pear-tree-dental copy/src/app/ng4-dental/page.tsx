import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Navigation,
  Route,
  Users,
  Home,
  Baby,
  UserPlus,
  HeartHandshake,
  Building,
  MapIcon,
  PackageCheck,
  TreePine,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NG4 Dentist - Pear Tree Dental | Convenient Dental Care for NG4 Residents',
  description: 'Local dentist for NG4 postal area including Arnold, Gedling, and new developments. Modern dental care with easy access from all NG4 locations.',
  keywords: [
    'NG4 dentist',
    'dentist NG4',
    'Arnold dentist',
    'Gedling dentist',
    'NG4 dental care',
    'new homes NG4',
    'dental practice NG4',
    'family dentist NG4'
  ],
  openGraph: {
    title: 'NG4 Dentist - Pear Tree Dental | Convenient Dental Care for NG4 Residents',
    description: 'Convenient dental care for NG4 residents. Serving Arnold, Gedling, and new developments with modern treatments and family care.',
    url: 'https://peartree.dental/ng4-dental'
  },
  alternates: {
    canonical: 'https://peartree.dental/ng4-dental'
  }
};

export default function NG4DentalPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/ng4-dental",
            "name": "Pear Tree Dental - Serving NG4 Area",
            "image": "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            "description": "Convenient dental practice serving the NG4 postal area including Arnold, Gedling, and new housing developments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9847",
              "longitude": "-1.0147"
            },
            "telephone": "0115 931 2935",
            "url": "https://peartree.dental",
            "areaServed": [
              {
                "@type": "PostalAddress",
                "postalCode": "NG4",
                "addressCountry": "GB"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.9847",
                "longitude": "-1.0147"
              },
              "geoRadius": "15000"
            }
          })
        }}
      />

      {/* NG4 Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-pear-primary/20 to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <Building className="absolute top-20 left-20 w-32 h-32 text-pear-gold" />
          <Zap className="absolute bottom-20 right-20 w-48 h-48 text-dental-green" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">NG4 Postal Area</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Convenient Dental Care
              <span className="text-pear-gold block">for NG4 Residents</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Easy access dental care for NG4 residents! Serving Arnold, Gedling, Carlton, and all the
              growing communities in the NG4 area. Modern treatments, family care, just minutes away.
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
                  <Zap className="h-5 w-5 mr-2" />
                  Quick NG4 Registration
                </Link>
              </Button>
            </div>

            {/* NG4 Coverage Areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-pear-gold">NG4 Communities We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  "Arnold",
                  "Gedling",
                  "Carlton",
                  "Mapperley",
                  "Woodthorpe",
                  "St Albans",
                  "New Estates",
                  "Sherwood Areas"
                ].map((area, index) => (
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

      {/* NG4 Convenience & Access */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Easy Access from Across NG4</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic location means quick, convenient journeys from all NG4 areas.
                No city center traffic, easy parking, flexible appointment times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Route className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Quick NG4 Routes</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center">
                      <span>Arnold:</span>
                      <span className="font-bold text-dental-green">15 mins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gedling:</span>
                      <span className="font-bold text-dental-green">12 mins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Carlton:</span>
                      <span className="font-bold text-dental-green">18 mins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mapperley:</span>
                      <span className="font-bold text-dental-green">10 mins</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Zap className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Avoid City Traffic</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">
                    Smart route planning means you avoid Nottingham city center completely
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Direct A612 and A614 routes</p>
                    <p>• Bypass city center congestion</p>
                    <p>• Easy countryside journey</p>
                    <p>• Free parking on arrival</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Clock className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">NG4 Flexible Times</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">
                    Appointment times that work for NG4 commuters and families
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Early morning slots</p>
                    <p>• Late evening availability</p>
                    <p>• Saturday appointments</p>
                    <p>• Same-day emergency care</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NG4 New Developments */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Growing NG4 Communities</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">New NG4 Developments</h3>
                      <p className="text-gray-700">
                        With new housing estates throughout NG4, we're perfectly positioned to serve
                        growing families and established communities alike.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Community-Focused Care</h3>
                      <p className="text-gray-700">
                        We understand NG4 communities - from young families in Arnold to professionals
                        in Gedling. Dental care tailored to your lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Family-First Approach</h3>
                      <p className="text-gray-700">
                        From children's first dental visits to family membership plans,
                        we make dental care accessible for every NG4 family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/10 to-pear-gold/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapIcon className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">NG4 AREA MAP</h3>
                      <p className="text-gray-600 mb-4">Strategic location for all NG4 communities</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Central access point for NG4</p>
                        <p>• Direct routes from all areas</p>
                        <p>• Avoid city center traffic</p>
                        <p>• 15-20 minute maximum journey</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Floating travel time cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-dental-green/20">
                  <div className="text-center">
                    <p className="font-bold text-dental-green">Arnold</p>
                    <p className="text-sm text-gray-600">15 mins</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-pear-gold/20">
                  <div className="text-center">
                    <p className="font-bold text-pear-gold">Gedling</p>
                    <p className="text-sm text-gray-600">12 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NG4 Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Care for NG4 Communities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Modern dental treatments and services designed for busy NG4 families and professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "NG4 Family Dentistry",
                  description: "Complete dental care for NG4 families",
                  icon: Users,
                  features: ["All ages welcome", "Family block bookings", "Children's dental care", "Preventive treatments"],
                  price: "From £45",
                  popular: "Popular with NG4 families"
                },
                {
                  title: "Commuter Dentistry",
                  description: "Convenient care for NG4 professionals",
                  icon: Zap,
                  features: ["Early & late appointments", "Express treatments", "Lunch-hour visits", "Weekend availability"],
                  price: "From £65",
                  popular: "Perfect for NG4 commuters"
                },
                {
                  title: "Emergency Care",
                  description: "Urgent dental care for NG4 residents",
                  icon: Shield,
                  features: ["Same-day emergency slots", "Pain relief", "Rapid treatment", "NG4 priority access"],
                  price: "From £75",
                  popular: "Available to all NG4"
                },
                {
                  title: "Cosmetic Dentistry",
                  description: "Smile makeovers for NG4 residents",
                  icon: Heart,
                  features: ["Teeth whitening", "Veneers", "Smile design", "Confidence boost"],
                  price: "From £350",
                  popular: "Transform your smile"
                },
                {
                  title: "NG4 Membership",
                  description: "Affordable plans for NG4 residents",
                  icon: HeartHandshake,
                  features: ["Monthly payments", "No hidden costs", "NG4 family discounts", "Priority booking"],
                  price: "From £8.99",
                  popular: "Save hundreds annually"
                },
                {
                  title: "Advanced Treatments",
                  description: "Modern dentistry for NG4",
                  icon: Building,
                  features: ["Dental implants", "Orthodontics", "Root canal therapy", "Oral surgery"],
                  price: "From £2,500",
                  popular: "Latest technology"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dental-green">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-dental-green font-medium">{service.popular}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-dental-green/10 to-pear-gold/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">NG4 New Patient Offer</h3>
                <p className="text-gray-700 mb-6">
                  <strong>15% off</strong> your first treatment when you register as a new NG4 patient.
                  Plus free dental health consultation and treatment planning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Register as NG4 Patient
                  </Button>
                  <Button size="lg" variant="outline" className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NG4 Reviews */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What NG4 Residents Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real reviews from NG4 communities - Arnold, Gedling, Carlton, and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Lisa Williams",
                  location: "Arnold, NG4",
                  text: "Perfect for our family in Arnold. The kids actually enjoy going to the dentist now! Easy journey and the membership plan saves us loads.",
                  rating: 5,
                  service: "Family Membership"
                },
                {
                  name: "James Carter",
                  location: "Gedling, NG4",
                  text: "Great to find a quality dentist that's easily accessible from Gedling. Professional service and modern treatments. Highly recommend to NG4 residents.",
                  rating: 5,
                  service: "Cosmetic Treatment"
                },
                {
                  name: "Sophie Taylor",
                  location: "Carlton, NG4",
                  text: "Moved to Carlton last year and needed emergency dental care. They saw me same day and sorted everything out. Now our whole family is registered here.",
                  rating: 5,
                  service: "Emergency Care"
                }
              ].map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-dental-green">
                      {[...Array(review.rating)].map((_, i) => (
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-dental-navy">4.9</span>
              </div>
              <p className="text-gray-600">Based on 75+ reviews from NG4 area residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* NG4 CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Convenient NG4 Dental Care?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of NG4 families who've discovered the convenience of quality dental care
              without the city center hassle. Easy access, modern care, local service.
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
                className="border-white text-dental-green hover:bg-white hover:text-dental-green px-8 py-4"
              >
                <Link href="/membership">
                  <Zap className="h-5 w-5 mr-2" />
                  NG4 Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
