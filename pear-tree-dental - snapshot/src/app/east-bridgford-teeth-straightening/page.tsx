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
  Eye,
  ArrowRight,
  Users,
  Award,
  Crown,
  Heart,
  Zap,
  Sparkles,
  TreePine
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Straightening East Bridgford - Village Invisalign & Clear Aligners | Pear Tree Dental',
  description: 'Exclusive teeth straightening for East Bridgford village residents. Invisalign, clear aligners, and discreet orthodontics with village convenience.',
  keywords: [
    'teeth straightening East Bridgford',
    'Invisalign East Bridgford',
    'village clear aligners East Bridgford',
    'orthodontics East Bridgford',
    'teeth alignment East Bridgford'
  ],
  openGraph: {
    title: 'Village Teeth Straightening in East Bridgford - Invisalign & Clear Aligners',
    description: 'Discreet teeth straightening for East Bridgford village residents with personal care and attention.',
    url: 'https://peartree.dental/east-bridgford-teeth-straightening'
  },
  alternates: {
    canonical: 'https://peartree.dental/east-bridgford-teeth-straightening'
  }
};

export default function EastBridgfordTeethStraighteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/east-bridgford-teeth-straightening",
            "name": "Teeth Straightening - East Bridgford",
            "description": "Exclusive teeth straightening treatments including Invisalign and clear aligners for East Bridgford village residents.",
            "provider": {
              "@type": "Dentist",
              "name": "Pear Tree Dental",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street",
                "addressLocality": "Burton Joyce",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG14 5DP",
                "addressCountry": "GB"
              },
              "telephone": "0115 931 2935"
            },
            "areaServed": {
              "@type": "Place",
              "name": "East Bridgford, Nottinghamshire"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-dental-green/20 to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-dental-green" />
              <span className="text-dental-green font-medium">East Bridgford Village</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Village Teeth Straightening
              <span className="text-dental-green block">for East Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discreet teeth straightening for East Bridgford village residents with Invisalign and clear aligners.
              Professional orthodontic care with the personal attention and village convenience you value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
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
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/east-bridgford">
                  <MapPin className="h-5 w-5 mr-2" />
                  East Bridgford Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for East Bridgford */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Eye className="w-4 h-4 mr-1" />
                Nearly Invisible
              </Badge>
              <Badge variant="secondary" className="bg-pear-primary/20 text-pear-primary border-pear-primary/30">
                <Car className="w-4 h-4 mr-1" />
                5 mins from Village
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TreePine className="w-4 h-4 mr-1" />
                Village Exclusive
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
              <h2 className="text-3xl font-bold mb-4">Exclusive Teeth Straightening for East Bridgford Village</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of discreet orthodontic treatments with the personal care and village convenience that East Bridgford residents value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Eye className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Village Invisalign</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-dental-green/10 text-dental-green">
                    Village Exclusive
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">From £2,800</p>
                  <p className="text-gray-600 mb-4">Clear, removable aligners with village priority</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Nearly invisible aligners</p>
                    <p>• Removable for eating & cleaning</p>
                    <p>• 6-18 months treatment time</p>
                    <p>• Village resident priority</p>
                  </div>
                  <Button className="w-full bg-dental-green hover:bg-dental-green/90 text-white">
                    Book Village Invisalign
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Zap className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Village Express</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-primary/10 text-pear-primary">
                    Quick Results
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">From £1,995</p>
                  <p className="text-gray-600 mb-4">Fast correction with village convenience</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3-6 months treatment time</p>
                    <p>• Focus on front teeth</p>
                    <p>• Clear aligner technology</p>
                    <p>• Village scheduling priority</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    Book Village Express
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Village Premium</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-gold/10 text-pear-gold">
                    Complete Solution
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">From £3,500</p>
                  <p className="text-gray-600 mb-4">Comprehensive treatment with village benefits</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 12-24 months treatment</p>
                    <p>• Complex alignment correction</p>
                    <p>• Includes refinements</p>
                    <p>• Village member privileges</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy">
                    Book Village Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Village Clear Aligners */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Why East Bridgford Village Chooses Clear Aligners</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Virtually Invisible</h3>
                      <p className="text-gray-700">
                        Clear aligners are nearly invisible, allowing you to straighten your teeth discreetly
                        while maintaining the confidence that village life requires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Village Lifestyle Friendly</h3>
                      <p className="text-gray-700">
                        Removable aligners mean no food restrictions and easy cleaning. Perfect for
                        the active village lifestyle and community events.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Personal Care</h3>
                      <p className="text-gray-700">
                        Modern aligner technology with the personal attention and village service
                        that East Bridgford residents have come to expect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/10 to-pear-primary/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Eye className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">VILLAGE ORTHODONTICS</h3>
                      <p className="text-gray-600 mb-4">Exclusive alignment for East Bridgford</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Village exclusive treatment</p>
                        <p>• Nearly invisible aligners</p>
                        <p>• Personal care approach</p>
                        <p>• Know you by name service</p>
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
              <h2 className="text-3xl font-bold mb-4">Your Village Teeth Straightening Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple, personal process designed with village convenience and care in mind
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Village Consultation",
                  description: "Personal assessment with village priority scheduling",
                  icon: Users,
                  time: "45 minutes"
                },
                {
                  step: "2",
                  title: "Digital Imaging",
                  description: "3D scans to create your personalized treatment plan",
                  icon: Sparkles,
                  time: "30 minutes"
                },
                {
                  step: "3",
                  title: "Aligner Fitting",
                  description: "Receive your aligners with personal instructions",
                  icon: CheckCircle,
                  time: "20 minutes"
                },
                {
                  step: "4",
                  title: "Village Progress",
                  description: "Regular check-ups with village member care",
                  icon: Award,
                  time: "15 minutes"
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 text-center border border-dental-green/20">
                    <div className="w-12 h-12 bg-dental-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="h-8 w-8 mx-auto text-dental-green mb-4" />
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <Badge variant="secondary" className="bg-dental-green/10 text-dental-green text-xs">
                      {step.time}
                    </Badge>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* East Bridgford Village Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Village Orthodontic Care from East Bridgford</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional teeth straightening without the city center hassle. Peaceful village access and personal care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Village Access</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 5 minutes from East Bridgford with beautiful countryside route and village parking.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Peaceful village route</p>
                  <p>• No traffic congestion</p>
                  <p>• Village parking available</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Village Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible appointments with village priority and personal scheduling attention.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Village priority booking</p>
                  <p>• Personal appointment care</p>
                  <p>• Flexible treatment scheduling</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Expert Village Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Experienced orthodontic team with village community approach and personal attention.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Know you by name service</p>
                  <p>• Village community approach</p>
                  <p>• Personal care planning</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* East Bridgford Village Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What East Bridgford Village Says</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from East Bridgford village residents who've transformed their smiles with clear aligners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Richard Pemberton",
                  location: "East Bridgford Village",
                  text: "Invisalign was perfect for my professional image. The team's personal attention and village convenience made the whole experience exceptional.",
                  rating: 5,
                  treatment: "Village Invisalign"
                },
                {
                  name: "Susan & David Clarke",
                  location: "East Bridgford",
                  text: "Both had express treatment and couldn't be happier. The 5-minute journey and personal care made all the difference. Village service at its best.",
                  rating: 5,
                  treatment: "Village Express Treatment"
                },
                {
                  name: "Jennifer Morrison",
                  location: "East Bridgford Village",
                  text: "The complex case treatment was handled with such care and attention. Village residents really are treated as part of the family here.",
                  rating: 5,
                  treatment: "Village Premium Treatment"
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
                    <div className="border-t pt-4">
                      <div className="font-semibold text-dental-green">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <div className="text-sm text-pear-primary font-medium">{review.treatment}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Straighten Your Village Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join East Bridgford village residents who've chosen discreet, effective clear aligners
              with the personal care and attention that village life deserves.
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
