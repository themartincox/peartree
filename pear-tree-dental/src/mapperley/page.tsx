import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TestimonialBanner from '@/components/TestimonialBanner';
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
  Users,
  Sparkles,
  Trophy,
  Building2,
  ThumbsUp,
  Navigation
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dentist in Mapperley - Pear Tree Dental | Premium Care Minutes Away',
  description:
    'Mapperley families choose Pear Tree Dental for private dentistry without city stress. Five minutes down the hill to Burton Joyce, with modern technology, flexible plans, and same-day support.',
  keywords: [
    'dentist Mapperley',
    'Mapperley dentist near me',
    'private dentist Mapperley',
    'emergency dentist Mapperley',
    'family dentist Mapperley',
    'Burton Joyce dental practice'
  ],
  openGraph: {
    title: 'Dentist in Mapperley - Pear Tree Dental | Premium Care Minutes Away',
    description:
      'Modern private dentistry for Mapperley residents just down the hill in Burton Joyce. Membership from £10.95/month, same-day appointments, and parking outside the door.',
    url: 'https://peartree.dental/mapperley'
  },
  alternates: {
    canonical: 'https://peartree.dental/mapperley'
  }
};

export default function MapperleyPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://peartree.dental/mapperley',
            name: 'Pear Tree Dental - Serving Mapperley',
            image: 'https://peartree.dental/images/pear-tree-dental-practice.jpg',
            description:
              'Modern private dental practice serving Mapperley NG3 and NG3 with comprehensive family dentistry just minutes away in Burton Joyce.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '22 Nottingham Road',
              addressLocality: 'Burton Joyce',
              addressRegion: 'Nottinghamshire',
              postalCode: 'NG14 5AE',
              addressCountry: 'GB'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '52.9847',
              longitude: '-1.0147'
            },
            telephone: '0115 931 2935',
            url: 'https://peartree.dental',
            areaServed: {
              '@type': 'Place',
              name: 'Mapperley, Nottingham'
            },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '52.9847',
                longitude: '-1.0147'
              },
              geoRadius: '12000'
            }
          })
        }}
      />

      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-teal to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">Serving Mapperley</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Premium Dental Care
              <span className="text-pear-gold block">Just Down the Hill</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Mapperley residents reach Pear Tree Dental in under ten minutes — no city centre parking, no traffic lights.
              Enjoy boutique private dentistry with hospital-grade technology and a calm village setting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4">
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

      <section className="py-16 bg-dental-navy/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Mapperley families come to us</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                From Mapperley Tops you can be on our driveway in seven minutes. We combine small-practice attention with
                the digital dentistry and multi-specialist team you’d expect in the city.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                title: 'Door-to-door ease',
                description: 'Drop straight down Mapperley Plains and along the A612 — no congestion, no parking charges, front-door accessibility.'
              },
              {
                title: 'All specialists in one visit',
                description: 'Implants, orthodontics, cosmetic dentistry, and hygiene delivered under one roof — ideal for busy families.'
              },
              {
                title: 'Modern comfort',
                description: 'Digital scanners, sedation options, and relaxing suites remove the stress from treatment.'
              },
              {
                title: 'Flexible investment plans',
                description: 'Memberships from £10.95/month plus interest-free finance for advanced dentistry keeps care affordable.'
              }].map((item, index) => (
                <Card key={index} className="h-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-pear-gold mb-3">{item.title}</h3>
                    <p className="text-gray-100 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <TestimonialBanner
                text="Pear Tree Dental feels like a boutique practice without the city centre hassle. We’re there in minutes from Mapperley and the quality is exceptional."
                author="Claire • Mapperley Park"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fast, stress-free access from Mapperley</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <Car className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Direct route</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">7 minutes</p>
                  <p className="text-gray-600">Average drive from Mapperley Top via Mapperley Plains & A612</p>
                </CardContent>
              </Card>
              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <MapPin className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Under 4 miles</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">3.6 miles</p>
                  <p className="text-gray-600">Straight down Mapperley Plains to Burton Joyce</p>
                </CardContent>
              </Card>
              <Card className="p-6 border border-dental-green/20">
                <CardHeader className="text-center pb-4">
                  <Clock className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Zero city hassle</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">Free parking</p>
                  <p className="text-gray-600">Park outside the practice and walk straight in</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything your Mapperley family needs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Family smile makeovers',
                  description: 'Coordinate whitening, bonding, and veneers for multiple family members',
                  icon: Sparkles,
                  features: ['Phased treatment plans', 'Digital smile design previews', 'Flexible payment options', 'Suitable for teens & adults']
                },
                {
                  title: 'Orthodontics for every age',
                  description: 'Clear aligners and advanced braces tailored to Mapperley families',
                  icon: CheckCircle,
                  features: ['Teen aligners', 'Adult Invisalign', 'Advanced bite correction', 'Retainer programs']
                },
                {
                  title: 'Implants & restorative care',
                  description: 'Replace missing teeth with life-long solutions and premium crowns',
                  icon: Shield,
                  features: ['Fully guided implant surgery', 'Same-day smile options', 'Metal-free crowns', 'Multi-tooth solutions']
                },
                {
                  title: 'Children’s preventive care',
                  description: 'Healthy habits for Mapperley kids from nursery through sixth form',
                  icon: Users,
                  features: ['Fluoride & sealants', 'Growth monitoring', 'Sports mouthguards', 'Family-friendly scheduling']
                },
                {
                  title: 'Emergency support on call',
                  description: 'Same-day slots held back for Mapperley residents',
                  icon: Heart,
                  features: ['Out-of-hours advice', 'Immediate pain relief', 'Accident & trauma care', 'Priority for members']
                },
                {
                  title: 'Memberships that work',
                  description: 'Predictable monthly costs and priority booking cycles',
                  icon: Trophy,
                  features: ['Plans from £10.95/month', 'Family bundles available', 'Up to 10% off treatments', 'Worldwide emergency cover']
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-dental-green flex-shrink-0" />
                        <h3 className="text-xl font-semibold">{service.title}</h3>
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Loved by Mapperley and Mapperley Park families</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'James P.',
                  location: 'Mapperley Park',
                  text: 'I can leave the office on Porchester Road and be at Pear Tree in minutes. The dentistry is top-tier and the membership plan is great value.',
                  rating: 5,
                  service: 'Family Membership'
                },
                {
                  name: 'Sophie L.',
                  location: 'Mapperley Plains',
                  text: 'Emergency visit sorted the same morning. Parking outside, modern facilities, and no waiting room delays.',
                  rating: 5,
                  service: 'Emergency Care'
                },
                {
                  name: 'Tom & Emma',
                  location: 'Mapperley Ridge',
                  text: 'The team planned Invisalign for us and check-ups for the kids. Everything scheduled together which saves so much time.',
                  rating: 5,
                  service: 'Family Orthodontics'
                }
              ].map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-dental-green">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">"{review.text}"</blockquote>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-gray-500">{review.location}</span>
                    </div>
                    <div className="text-xs text-dental-green font-medium">{review.service}</div>
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
                <span className="text-2xl font-bold text-dental-navy">5.0</span>
              </div>
              <p className="text-gray-600">Based on 40+ reviews from Mapperley & Mapperley Park residents</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Visit us from Mapperley in minutes</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Address</h3>
                      <p className="text-gray-700">
                        Pear Tree Dental<br />
                        22 Nottingham Road<br />
                        Burton Joyce<br />
                        Nottinghamshire NG14 5AE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-700">
                        Phone: 0115 931 2935<br />
                        Email: hello@peartree.dental
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-dental-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Opening Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Thursday: 8:45 AM - 5:00 PM</p>
                        <p>Friday: 8:00 AM - 3:30 PM</p>
                        <p>Weekends: Emergency cover only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Mapperley to Burton Joyce Route</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4 text-dental-green">Fastest route (7 minutes)</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">1</span>
                      <span>Head down Mapperley Plains toward Mapperley</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">2</span>
                      <span>Join the A612 at Mapperley and continue straight toward Burton Joyce</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">3</span>
                      <span>Enter Burton Joyce, passing the riverside cafés and village green</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-dental-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">4</span>
                      <span>Turn right onto Main Street — Pear Tree Dental is ahead on the left with private parking</span>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-dental-green/10 rounded">
                    <p className="text-sm text-dental-navy">
                      <strong>Tip:</strong> Leaving Mapperley after school? We hold back after-school appointments for families so you can avoid multiple journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dental-green text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience Burton Joyce dentistry from Mapperley?</h2>
            <p className="text-xl mb-8">
              Join Mapperley neighbours enjoying modern private care without city centre hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dental-navy hover:bg-dental-navy/90 text-white font-semibold px-8 py-4">
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
