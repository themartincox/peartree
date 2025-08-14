import {
  Award,
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  Crown,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles, 
  Star,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import MedicalPracticeSchema from '@/components/seo/MedicalPracticeSchema';
import ServiceAreaSchema from '@/components/seo/ServiceAreaSchema';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Premium Dentist in West Bridgford - Pear Tree Dental | Quality Dental Care',
  description: 'Premium dental care for West Bridgford residents. Pear Tree Dental offers advanced dental treatments, membership plans, and convenient access from West Bridgford.',
  keywords: [
    'dentist West Bridgford',
    'premium dentist West Bridgford',
    'luxury dental care West Bridgford',
    'private dentist West Bridgford',
    'cosmetic dentist West Bridgford',
    'dental implants West Bridgford',
    'teeth whitening West Bridgford'
  ],
  openGraph: {
    title: 'Premium Dentist in West Bridgford - Pear Tree Dental | Luxury Dental Care',
    description: 'Premium dental care for discerning West Bridgford residents. Advanced treatments, luxury experience, membership plans available.',
    url: 'https://peartree.dental/west-bridgford'
  },
  alternates: {
    canonical: 'https://peartree.dental/west-bridgford'
  }
};

export default function WestBridgfordPage() {
  // Define area served for West Bridgford separately to avoid JSX syntax issues
  const westBridgfordArea = [
    "West Bridgford",
    "Nottingham City Centre",
    "The Park",
    "Trent Bridge",
  ];
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://peartree.dental/west-bridgford",
            "name": "Pear Tree Dental - Premium Care for West Bridgford",
            "image": "https://peartree.dental/images/pear-tree-dental-practice.jpg",
            "description": "Premium dental practice serving West Bridgford residents with luxury dental care, advanced treatments, and personalized service.",
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
            "priceRange": "£££",
            "areaServed": {
              "@type": "Place",
              "name": "West Bridgford, Nottinghamshire"
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
      {/* patched */}

      {/* Enhanced Medical Practice Schema for West Bridgford */}
      <MedicalPracticeSchema
        specialty="Premium Cosmetic Dentistry"
        serviceName="Premium Dental Care for West Bridgford"
        serviceDescription="Comprehensive premium dental services including cosmetic dentistry, dental implants, and advanced treatments for discerning West Bridgford residents"
        procedureType="Comprehensive Dental Care"
	        // areaServed removed due to syntax error with parentheses
	        areaServed={westBridgfordArea}
      />

      {/* Service Area Schema for West Bridgford Coverage */}
      <ServiceAreaSchema
        primaryLocation="West Bridgford"
        specialization="Premium Dental Care"
      />

      {/* Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dental-navy via-pear-primary to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pear-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-dental-green rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">Premium Care for West Bridgford</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Premium Dental Care
              <span className="text-pear-gold block">for West Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              West Bridgford residents choose Pear Tree Dental for exceptional dental care.
              Experience advanced treatments, personalized service, and quality care just minutes from home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold px-8 py-4"
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
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4"
              >
                <Link href="/membership">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Membership Plans
                </Link>
              </Button>
            </div>

            {/* Premium Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-pear-gold/20 text-pear-gold border-pear-gold/30">
                <Award className="w-4 h-4 mr-1" />
                Premium Care
              </Badge>
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Clock className="w-4 h-4 mr-1" />
                Same-Day Service
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                Advanced Technology
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Access & Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Convenient Access from West Bridgford</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium dental care without the city center hassle. Easy access, dedicated parking, and appointment times that respect your schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Easy Journey</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">12 minutes</p>
                  <p className="text-gray-600">Direct drive from West Bridgford via A52 and A612</p>
                  <p className="text-sm text-gray-500 mt-2">Avoid city center traffic entirely</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Premium Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">8.2 miles</p>
                  <p className="text-gray-600">Direct route through Nottinghamshire countryside</p>
                  <p className="text-sm text-gray-500 mt-2">Peaceful journey, no urban congestion</p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Premium Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">Complimentary</p>
                  <p className="text-gray-600">Dedicated parking & attentive personal service</p>
                  <p className="text-sm text-gray-500 mt-2">Quality experience from arrival to departure</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced Dental Care for West Bridgford Professionals</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                State-of-the-art treatments delivered with the attention to detail and service excellence you expect
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {([
                {
                  title: "Cosmetic Excellence",
                  description: "Transform your smile with premium aesthetic treatments",
                  icon: Sparkles,
                  features: ["Porcelain veneers", "Professional whitening", "Smile design", "Digital smile preview"],
                  price: "From £350",
                  badge: "Most Popular"
                },
                {
                  title: "Dental Implants",
                  description: "Permanent solutions using the latest implant technology",
                  icon: Award,
                  features: ["Single implants", "All-on-4 treatment", "Implant bridges", "Same-day implants"],
                  price: "From £2,500",
                  badge: "Advanced Care"
                },
                {
                  title: "Professional Dentistry",
                  description: "Comprehensive care for busy professionals",
                  icon: Crown,
                  features: ["Professional health checks", "Lunch-hour appointments", "Same-day treatments", "Personalized service"],
                  price: "From £150",
                  badge: "Professional Choice"
                },
                {
                  title: "Orthodontics",
                  description: "Discreet teeth straightening for adults",
                  icon: Heart,
                  features: ["Invisalign", "Lingual braces", "Express treatment", "Adult orthodontics"],
                  price: "From £2,800",
                  badge: "Discreet Solutions"
                },
                {
                  title: "Preventive Care",
                  description: "Maintain optimal oral health with regular care",
                  icon: Shield,
                  features: ["Comprehensive exams", "Professional hygiene", "Oral health coaching", "Preventive plans"],
                  price: "From £95",
                  badge: "Foundation of Health"
                },
                {
                  title: "Emergency Care",
                  description: "Urgent dental care when you need it most",
                  icon: Clock,
                  features: ["Same-day appointments", "Out-of-hours cover", "Pain management", "Emergency repairs"],
                  price: "From £95",
                  badge: "Peace of Mind"
                }
              ] || []).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 border border-pear-gold/20 hover:border-pear-gold/40 transition-all hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-pear-gold flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <Badge variant="secondary" className="text-xs mt-1 bg-pear-gold/10 text-pear-gold">
                              {service.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-pear-gold">{service.price}</p>
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
              <div className="bg-gradient-to-r from-pear-gold/10 to-dental-green/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Membership Plans for West Bridgford Residents</h3>
                <p className="text-gray-700 mb-6">
                  Save up to 15% on all treatments with our comprehensive membership plans. Includes priority booking,
                  member benefits, and complimentary services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold">
                    <Crown className="w-5 h-5 mr-2" />
                    Explore Membership Plans
                  </Button>
                  <Button size="lg" variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* West Bridgford Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by West Bridgford Residents</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read what fellow West Bridgford residents say about their premium dental care experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {([
                {
                  name: "Dr. Margaret Thompson",
                  location: "West Bridgford",
                  profession: "Consultant",
                  text: "The level of service and attention to detail is exceptional. As a healthcare professional myself, I appreciate their advanced approach and genuine care.",
                  rating: 5,
                  service: "Professional Dentistry"
                },
                {
                  name: "James Mitchell",
                  location: "West Bridgford",
                  profession: "Business Owner",
                  text: "Outstanding cosmetic work and the convenience from West Bridgford is perfect. The team understands the importance of a professional image.",
                  rating: 5,
                  service: "Cosmetic Dentistry"
                },
                {
                  name: "Sarah Williams",
                  location: "West Bridgford",
                  profession: "Solicitor",
                  text: "Premium dental care with the personal touch. The journey is easy and the results speak for themselves. Highly recommended to my colleagues.",
                  rating: 5,
                  service: "Dental Implants"
                }
              ] || []).map((review, index) => (
                <Card key={index} className="p-6 shadow-xl border border-pear-gold/20">
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
                      <div className="font-semibold text-pear-primary">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.profession}, {review.location}</div>
                      <div className="text-sm text-pear-gold font-medium">{review.service}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-pear-gold/10 to-dental-green/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-pear-gold">
                    {([...Array(5)] || []).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-pear-gold">5.0</span>
                </div>
                <p className="text-gray-700 font-semibold">Based on 60+ reviews from West Bridgford professionals</p>
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
                <h2 className="text-3xl font-bold mb-8">Easy Access from West Bridgford</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-pear-gold mt-1 flex-shrink-0" />
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
                    <Phone className="h-6 w-6 text-pear-gold mt-1 flex-shrink-0" />
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
                    <Clock className="h-6 w-6 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Evening appointments available</p>
                        <p>Lunch-hour appointments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Direct Route from West Bridgford</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-pear-gold/20">
                  <h3 className="font-semibold mb-4 text-pear-gold">Direct Route (12 minutes)</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">1</span>
                      <span>Exit West Bridgford via A52 (Nottingham Road) eastbound</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">2</span>
                      <span>Continue on A52 for 4 miles toward Bingham</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">3</span>
                      <span>Take A612 exit toward Burton Joyce/Gedling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-pear-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">4</span>
                      <span>Follow A612 into Burton Joyce, turn right on Main Street</span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-pear-gold/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Travel tip:</strong> Scenic countryside route with minimal traffic - perfect for a relaxing journey to your appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-gold to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience Quality Dental Care Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join West Bridgford residents who choose excellence in dental care.
              Book your consultation and discover the difference quality makes.
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
                <Link href="/membership">
                  <Crown className="h-5 w-5 mr-2" />
                  Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
