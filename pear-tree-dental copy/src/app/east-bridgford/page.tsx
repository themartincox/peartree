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
  Award,
  Crown,
  Sparkles,
  TreePine
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Village Dentist in East Bridgford - Pear Tree Dental | Exclusive Dental Care',
  description: 'Exclusive dental care for East Bridgford village residents. Pear Tree Dental offers premium treatments, membership plans, and convenient village access from East Bridgford.',
  keywords: [
    'dentist East Bridgford',
    'village dentist East Bridgford',
    'premium dental care East Bridgford',
    'private dentist East Bridgford',
    'cosmetic dentist East Bridgford',
    'dental practice East Bridgford'
  ],
  openGraph: {
    title: 'Village Dentist in East Bridgford - Pear Tree Dental | Exclusive Dental Care',
    description: 'Exclusive dental care for East Bridgford village residents. Premium treatments with village convenience.',
    url: 'https://peartree.dental/east-bridgford'
  },
  alternates: {
    canonical: 'https://peartree.dental/east-bridgford'
  }
};

export default function EastBridgfordPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/east-bridgford",
            "name": "Pear Tree Dental - Village Care for East Bridgford",
            "image": "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            "description": "Premium village dental practice serving East Bridgford residents with exclusive dental care and membership plans.",
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
            "priceRange": "£££",
            "areaServed": {
              "@type": "Place",
              "name": "East Bridgford, Nottinghamshire"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.9847",
                "longitude": "-1.0147"
              },
              "geoRadius": "10000"
            }
          })
        }}
      />

      {/* Village Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dental-navy via-pear-primary/20 to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pear-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-dental-green rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <TreePine className="h-6 w-6 text-pear-primary" />
              <span className="text-pear-primary font-medium">Exclusive Village Care for East Bridgford</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Village Dentist
              <span className="text-pear-primary block">in East Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Exclusive dental care for East Bridgford village residents at nearby Pear Tree Dental in Burton Joyce.
              Just a peaceful 5-minute journey for premium dental services with the personal touch you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-dental-navy font-semibold px-8 py-4"
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
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-dental-navy px-8 py-4"
              >
                <Link href="/membership">
                  <Crown className="h-5 w-5 mr-2" />
                  Exclusive Plans
                </Link>
              </Button>
            </div>

            {/* Village Exclusivity Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-pear-primary/20 text-pear-primary border-pear-primary/30">
                <TreePine className="w-4 h-4 mr-1" />
                Village Exclusive
              </Badge>
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Clock className="w-4 h-4 mr-1" />
                5 mins Away
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                Personal Service
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Village Access & Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exclusive Village Access from East Bridgford</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium dental care with the convenience and personal touch that East Bridgford village residents value.
                No city center hassle, just quality care close to home.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Village Journey</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">5 minutes</p>
                  <p className="text-gray-600">Peaceful village route via A46 and A612</p>
                  <p className="text-sm text-gray-500 mt-2">Beautiful countryside drive</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Village Proximity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">4.5 miles</p>
                  <p className="text-gray-600">Direct village-to-village route</p>
                  <p className="text-sm text-gray-500 mt-2">No urban congestion</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Village Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">Personal</p>
                  <p className="text-gray-600">Dedicated care with village community feel</p>
                  <p className="text-sm text-gray-500 mt-2">Know you by name service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Village Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium Dental Care for East Bridgford Village</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive dental services delivered with the attention to detail and personal service that village life deserves
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Village Dentistry",
                  description: "Personal dental care with village community values",
                  icon: TreePine,
                  features: ["Know you by name", "Personal attention", "Village scheduling", "Community care"],
                  price: "From £95",
                  badge: "Village Exclusive"
                },
                {
                  title: "Premium Cosmetics",
                  description: "Advanced cosmetic treatments for discerning residents",
                  icon: Sparkles,
                  features: ["Teeth whitening", "Smile design", "Veneers", "Natural results"],
                  price: "From £295",
                  badge: "Beautiful Smiles"
                },
                {
                  title: "Emergency Care",
                  description: "Priority emergency care for village residents",
                  icon: Shield,
                  features: ["Same-day availability", "Village priority", "Pain relief", "Urgent care"],
                  price: "From £95",
                  badge: "Always Available"
                },
                {
                  title: "Advanced Treatments",
                  description: "Sophisticated dental solutions close to home",
                  icon: Award,
                  features: ["Dental implants", "Clear aligners", "Complex dentistry", "Specialist care"],
                  price: "From £1,995",
                  badge: "Advanced Care"
                },
                {
                  title: "Village Memberships",
                  description: "Exclusive membership plans for village residents",
                  icon: Crown,
                  features: ["Village member benefits", "Priority booking", "Personal service", "Exclusive rates"],
                  price: "From £10.95",
                  badge: "Exclusive Access"
                },
                {
                  title: "Preventive Care",
                  description: "Maintain optimal oral health with village convenience",
                  icon: Heart,
                  features: ["Regular check-ups", "Professional hygiene", "Oral health coaching", "Village scheduling"],
                  price: "From £75",
                  badge: "Village Health"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 border border-pear-primary/20 hover:border-pear-primary/40 transition-all hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-pear-primary flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <Badge variant="secondary" className="text-xs mt-1 bg-pear-primary/10 text-pear-primary">
                              {service.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-pear-primary">{service.price}</p>
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
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-pear-primary/10 to-dental-green/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Exclusive Village Membership Plans</h3>
                <p className="text-gray-700 mb-6">
                  Join fellow East Bridgford village residents with exclusive membership plans offering priority booking,
                  personal service, and village member benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white font-semibold">
                    <Crown className="w-5 h-5 mr-2" />
                    Village Membership Plans
                  </Button>
                  <Button size="lg" variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Village Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* East Bridgford Village Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by East Bridgford Village</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read what fellow East Bridgford village residents say about their premium dental care experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Margaret Spencer",
                  location: "East Bridgford Village",
                  text: "The personal attention and quality of care is exceptional. As a village resident, I appreciate having such premium dental care so close to home.",
                  rating: 5,
                  service: "Village Premium Care"
                },
                {
                  name: "James & Helen Whitfield",
                  location: "East Bridgford",
                  text: "Perfect for village life! The 5-minute journey is ideal and the team treats us like family. Village membership has been fantastic value.",
                  rating: 5,
                  service: "Village Membership"
                },
                {
                  name: "Sarah Johnston",
                  location: "East Bridgford Village",
                  text: "Beautiful smile makeover with the personal touch you expect in village life. The team understood exactly what I wanted - natural excellence.",
                  rating: 5,
                  service: "Village Smile Design"
                }
              ].map((review, index) => (
                <Card key={index} className="p-6 shadow-xl border border-pear-primary/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-pear-primary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{review.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-pear-primary">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <div className="text-sm text-dental-green font-medium">{review.service}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-pear-primary/10 to-dental-green/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-pear-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-pear-primary">5.0</span>
                </div>
                <p className="text-gray-700 font-semibold">Based on 40+ reviews from East Bridgford village residents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Directions & Contact */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Village-to-Village Access</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Practice Location</h3>
                      <p className="text-gray-700">
                        Pear Tree Dental<br />
                       22 Nottingham Road<br />
                        Burton Joyce<br />
                        Nottinghamshire NG14 5AE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Village Contact</h3>
                      <p className="text-gray-700">
                        Phone: 0115 931 2935<br />
                        Email: hello@peartree.dental<br />
                        Village priority booking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-pear-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Village-Friendly Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Village appointment priority</p>
                        <p>Personal scheduling available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Peaceful Village Route</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-pear-primary/20">
                  <h3 className="font-semibold mb-4 text-pear-primary">Village Route (5 minutes)</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">1</span>
                      <span>Head northeast on Main Street toward A46</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">2</span>
                      <span>Take A46 northbound toward Nottingham (2 miles)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">3</span>
                      <span>Exit onto A612 toward Burton Joyce</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">4</span>
                      <span>Turn right on Main Street - Pear Tree Dental on your left</span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-pear-primary/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Village tip:</strong> Beautiful countryside route with no traffic - perfect for a peaceful journey to your appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Premium CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience Village Dental Excellence
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join East Bridgford village residents who've discovered premium dental care with the personal touch.
              Book your village consultation and experience the difference.
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
                className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4"
              >
                <Link href="/membership">
                  <Crown className="h-5 w-5 mr-2" />
                  Village Membership
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
