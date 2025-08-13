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
  Baby
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Family Dentist in Bingham - Pear Tree Dental | Quality Dental Care',
  description: 'Family dental care for Bingham residents. Pear Tree Dental offers comprehensive dental treatments, membership plans, and convenient A52 access from Bingham.',
  keywords: [
    'dentist Bingham',
    'family dentist Bingham',
    'dental practice Bingham',
    'children\'s dentist Bingham',
    'emergency dentist Bingham',
    'dental care Bingham Nottinghamshire'
  ],
  openGraph: {
    title: 'Family Dentist in Bingham - Pear Tree Dental | Quality Dental Care',
    description: 'Comprehensive family dental care for Bingham residents. Modern treatments, membership plans, and convenient access.',
    url: 'https://peartree.dental/bingham'
  },
  alternates: {
    canonical: 'https://peartree.dental/bingham'
  }
};

export default function BinghamPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/bingham",
            "name": "Pear Tree Dental - Family Care for Bingham",
            "image": "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            "description": "Family dental practice serving Bingham residents with comprehensive dental care, children's dentistry, and membership plans.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Street",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5DP",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9847",
              "longitude": "-1.0147"
            },
            "telephone": "0115 931 2935",
            "url": "https://peartree.dental",
            "priceRange": "££",
            "areaServed": {
              "@type": "Place",
              "name": "Bingham, Nottinghamshire"
            },
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

      {/* Family Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dental-navy via-dental-green/20 to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-dental-green rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pear-gold rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="h-6 w-6 text-dental-green" />
              <span className="text-dental-green font-medium">Family Care for Bingham</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Family Dentist
              <span className="text-dental-green block">in Bingham</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive family dental care just 8 minutes from Bingham. Modern treatments,
              gentle care for children, and affordable membership plans that cover the whole family.
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
                  <Users className="h-5 w-5 mr-2" />
                  Family Plans
                </Link>
              </Button>
            </div>

            {/* Family Focus Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Baby className="w-4 h-4 mr-1" />
                Children Welcome
              </Badge>
              <Badge variant="secondary" className="bg-pear-gold/20 text-pear-gold border-pear-gold/30">
                <Car className="w-4 h-4 mr-1" />
                8 mins from Bingham
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                Family Memberships
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Access & Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Convenient Family Dental Care from Bingham</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Easy A52 access makes dental care hassle-free for Bingham families. Same-day appointments and
                flexible scheduling for busy family life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Quick Journey</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">8 minutes</p>
                  <p className="text-gray-600">Direct drive from Bingham via A52 to Burton Joyce</p>
                  <p className="text-sm text-gray-500 mt-2">Dual carriageway all the way</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Family Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">6.5 miles</p>
                  <p className="text-gray-600">Easy route through Nottinghamshire countryside</p>
                  <p className="text-sm text-gray-500 mt-2">No city center traffic</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Users className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Family Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">All Ages</p>
                  <p className="text-gray-600">From toddlers to grandparents - everyone welcome</p>
                  <p className="text-sm text-gray-500 mt-2">Family appointment scheduling</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Family Dental Care for Bingham</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive dental services for every member of your Bingham family, from first teeth to golden years
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {([
                {
                  title: "Children's Dentistry",
                  description: "Gentle, fun dental care to build healthy habits",
                  icon: Baby,
                  features: ["First dental visits", "Fissure sealants", "Fluoride treatments", "Gentle approach"],
                  price: "From £25",
                  badge: "Kids Love Us"
                },
                {
                  title: "Family Check-ups",
                  description: "Regular preventive care for the whole family",
                  icon: Users,
                  features: ["Comprehensive exams", "Professional cleaning", "Oral health advice", "Family scheduling"],
                  price: "From £95",
                  badge: "Most Popular"
                },
                {
                  title: "Emergency Care",
                  description: "Same-day treatment for urgent dental problems",
                  icon: Shield,
                  features: ["Same-day appointments", "Pain relief", "Emergency repairs", "24/7 advice"],
                  price: "From £95",
                  badge: "Always Available"
                },
                {
                  title: "Cosmetic Dentistry",
                  description: "Transform your smile with modern treatments",
                  icon: Sparkles,
                  features: ["Teeth whitening", "Composite bonding", "Smile design", "Natural results"],
                  price: "From £295",
                  badge: "Beautiful Smiles"
                },
                {
                  title: "Restorative Care",
                  description: "Repair and strengthen damaged teeth",
                  icon: Award,
                  features: ["Natural fillings", "Crowns & bridges", "Root canal therapy", "Long-lasting solutions"],
                  price: "From £195",
                  badge: "Expert Care"
                },
                {
                  title: "Family Memberships",
                  description: "Affordable monthly plans for the whole family",
                  icon: Heart,
                  features: ["Predictable costs", "No consultation fees", "Emergency cover", "Family discounts"],
                  price: "From £8.99",
                  badge: "Great Value"
                }
              ] || []).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-all hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <Badge variant="secondary" className="text-xs mt-1 bg-dental-green/10 text-dental-green">
                              {service.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dental-green">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                      <ul className="space-y-1">
                        {(service.features || []).map((feature, idx) => (
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
              <div className="bg-gradient-to-r from-dental-green/10 to-pear-gold/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Family Membership Plans for Bingham</h3>
                <p className="text-gray-700 mb-6">
                  Save money with family memberships that cover everyone from children to adults.
                  Includes check-ups, cleaning, and emergency cover for the whole family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold">
                    <Users className="w-5 h-5 mr-2" />
                    View Family Plans
                  </Button>
                  <Button size="lg" variant="outline" className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Family Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Family Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Bingham Families</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read what Bingham families say about their dental care experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {([
                {
                  name: "Sarah & Family",
                  location: "Bingham",
                  text: "Perfect for our family! The kids actually look forward to their appointments now. The journey from Bingham is so easy and the family plan saves us hundreds.",
                  rating: 5,
                  service: "Family Membership"
                },
                {
                  name: "Mark Thompson",
                  location: "Bingham",
                  text: "Excellent emergency care when my son fell off his bike. Seen within the hour and fixed up perfectly. Great to have such quality care so close to Bingham.",
                  rating: 5,
                  service: "Children's Emergency Care"
                },
                {
                  name: "Emma Wilson",
                  location: "Bingham",
                  text: "The team makes everyone feel welcome, from our 3-year-old to my elderly mother. Professional service and the A52 route makes it a breeze from Bingham.",
                  rating: 5,
                  service: "Multi-Generation Care"
                }
              ] || []).map((review, index) => (
                <Card key={index} className="p-6 shadow-xl border border-dental-green/20">
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
                      <div className="font-semibold text-dental-green">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <div className="text-sm text-pear-gold font-medium">{review.service}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-dental-green/10 to-pear-gold/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-dental-green">
                    {([...Array(5)] || []).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-dental-green">5.0</span>
                </div>
                <p className="text-gray-700 font-semibold">Based on 85+ reviews from Bingham families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Contact */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Easy Access from Bingham</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Practice Location</h3>
                      <p className="text-gray-700">
                        Pear Tree Dental<br />
                        Main Street<br />
                        Burton Joyce<br />
                        Nottinghamshire NG14 5DP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Contact Details</h3>
                      <p className="text-gray-700">
                        Phone: 0115 931 2935<br />
                        Email: hello@peartree.dental<br />
                        Emergency: 24/7 availability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Family-Friendly Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>After school appointments available</p>
                        <p>Family scheduling welcomed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Direct Route from Bingham</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-dental-green/20">
                  <h3 className="font-semibold mb-4 text-dental-green">Quick Route (8 minutes)</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">1</span>
                      <span>Exit Bingham via A52 eastbound toward Grantham</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">2</span>
                      <span>Continue on A52 for 4 miles toward Radcliffe-on-Trent</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">3</span>
                      <span>Take A612 exit toward Burton Joyce/Gedling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">4</span>
                      <span>Turn right on Main Street - Pear Tree Dental on your left</span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-dental-green/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Family tip:</strong> Easy dual carriageway journey - perfect for bringing the whole family to appointments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Care for Your Family's Smiles?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join Bingham families who trust Pear Tree Dental for comprehensive, gentle dental care.
              Book your family consultation and discover stress-free dentistry.
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
                  Family Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
