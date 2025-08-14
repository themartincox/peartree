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
  Sparkles,
  ArrowRight,
  Camera,
  Palette,
  Award,
  Crown,
  Heart,
  Users,
  Eye,
  Smile,
  Zap,
  TreePine
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smile Design East Bridgford - Village Complete Smile Makeovers | Pear Tree Dental',
  description: 'Exclusive smile design for East Bridgford village residents. Veneers, crowns, whitening, and smile makeovers with village convenience and personal care.',
  keywords: [
    'smile design East Bridgford',
    'village smile makeover East Bridgford',
    'cosmetic dentistry East Bridgford',
    'veneers East Bridgford',
    'smile transformation East Bridgford'
  ],
  openGraph: {
    title: 'Village Smile Design in East Bridgford - Complete Smile Makeovers',
    description: 'Transform your smile with exclusive smile design for East Bridgford village residents.',
    url: 'https://peartree.dental/east-bridgford-smile-design'
  },
  alternates: {
    canonical: 'https://peartree.dental/east-bridgford-smile-design'
  }
};

export default function EastBridgfordSmileDesignPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/east-bridgford-smile-design",
            "name": "Smile Design - East Bridgford",
            "description": "Exclusive smile design and makeover treatments for East Bridgford village residents using advanced cosmetic dentistry techniques.",
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
      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-pear-gold/20 to-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">East Bridgford Village</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Village Smile Design
              <span className="text-pear-gold block">for East Bridgford</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your smile with exclusive smile design and makeovers for East Bridgford village residents.
              Expert cosmetic dentistry with the personal attention and village convenience you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Village Design: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4"
              >
                <Link href="/east-bridgford">
                  <MapPin className="h-5 w-5 mr-2" />
                  East Bridgford Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for East Bridgford */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-pear-gold/20 text-pear-gold border-pear-gold/30">
                <Palette className="w-4 h-4 mr-1" />
                Digital Design Preview
              </Badge>
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
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

      {/* Smile Design Services */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exclusive Smile Design for East Bridgford Village</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From subtle enhancements to complete smile transformations, our expert team creates beautiful, natural-looking results with village personal care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Palette className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Village Digital Design</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-gold/10 text-pear-gold">
                    Preview Your Smile
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">From £295</p>
                  <p className="text-gray-600 mb-4">See your new smile before treatment begins</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3D digital smile preview</p>
                    <p>• Personal consultation</p>
                    <p>• Multiple design options</p>
                    <p>• Village resident benefits</p>
                  </div>
                  <Button className="w-full bg-pear-gold hover:bg-pear-gold/90 text-dental-navy">
                    Book Village Design
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Village Makeover</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-dental-green/10 text-dental-green">
                    Complete Transformation
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">From £4,500</p>
                  <p className="text-gray-600 mb-4">Comprehensive smile transformation with village care</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Veneers, crowns, or combination</p>
                    <p>• Teeth whitening included</p>
                    <p>• Village scheduling priority</p>
                    <p>• Personal care approach</p>
                  </div>
                  <Button variant="outline" className="w-full border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                    Book Village Makeover
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Village Enhancement</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-primary/10 text-pear-primary">
                    Natural Improvements
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">From £1,895</p>
                  <p className="text-gray-600 mb-4">Subtle improvements with village personal touch</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Composite bonding</p>
                    <p>• Professional whitening</p>
                    <p>• Minor reshaping</p>
                    <p>• Village member benefits</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    Book Village Enhancement
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Design Process */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Village Smile Design Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive, personal process designed to create your perfect smile with village care and attention
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {([
                {
                  step: "1",
                  title: "Village Consultation",
                  description: "Personal assessment of your smile goals with village priority",
                  icon: Users,
                  time: "60 minutes"
                },
                {
                  step: "2",
                  title: "Digital Design",
                  description: "3D modeling and preview of your new smile options",
                  icon: Camera,
                  time: "45 minutes"
                },
                {
                  step: "3",
                  title: "Village Planning",
                  description: "Detailed treatment plan with village member benefits",
                  icon: CheckCircle,
                  time: "30 minutes"
                },
                {
                  step: "4",
                  title: "Smile Creation",
                  description: "Precise implementation with village personal care",
                  icon: Crown,
                  time: "2-6 visits"
                }
              ] || []).map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 text-center border border-pear-gold/20">
                    <div className="w-12 h-12 bg-pear-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="h-8 w-8 mx-auto text-pear-gold mb-4" />
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <Badge variant="secondary" className="bg-pear-gold/10 text-pear-gold text-xs">
                      {step.time}
                    </Badge>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Village Smile Design Treatment Options</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple treatment approaches tailored to your needs with the personal care that East Bridgford village residents value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {([
                {
                  title: "Village Veneers",
                  description: "Ultra-thin porcelain shells for dramatic transformation",
                  icon: Crown,
                  features: ["Natural appearance", "Stain resistant", "Long-lasting", "Village member benefits"],
                  price: "From £795 per tooth",
                  popular: "Village exclusive"
                },
                {
                  title: "Village Bonding",
                  description: "Sculpted resin for subtle shape and color improvements",
                  icon: Palette,
                  features: ["Same-day treatment", "Conservative approach", "Reversible option", "Village care"],
                  price: "From £295 per tooth",
                  popular: "Natural enhancement"
                },
                {
                  title: "Village Crowns",
                  description: "Complete coverage for extensively damaged teeth",
                  icon: Shield,
                  features: ["Complete protection", "Natural strength", "Color matched", "Village priority"],
                  price: "From £895 per crown",
                  popular: "Restoration & beauty"
                },
                {
                  title: "Village Whitening",
                  description: "Professional whitening for a brighter foundation",
                  icon: Sparkles,
                  features: ["Immediate results", "Safe procedure", "Long-lasting", "Village exclusive"],
                  price: "From £395",
                  popular: "Perfect starting point"
                },
                {
                  title: "Village Contouring",
                  description: "Reshape gums for perfect smile proportions",
                  icon: Heart,
                  features: ["Precise shaping", "Immediate results", "Comfortable procedure", "Village care"],
                  price: "From £295",
                  popular: "Perfect smile frame"
                },
                {
                  title: "Village Alignment",
                  description: "Clear aligners for straight teeth foundation",
                  icon: Eye,
                  features: ["Nearly invisible", "Removable", "Predictable results", "Village priority"],
                  price: "From £2,800",
                  popular: "Discreet straightening"
                }
              ] || []).map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <Card key={index} className="p-6 border border-pear-gold/20 hover:border-pear-gold/40 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-pear-gold flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">{treatment.title}</h3>
                          <Badge variant="secondary" className="text-xs mt-1 bg-pear-gold/10 text-pear-gold">
                            {treatment.popular}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600">{treatment.description}</p>
                      <div className="text-sm font-semibold text-dental-green">{treatment.price}</div>
                      <ul className="space-y-1">
                        {(treatment.features || []).map((feature, idx) => (
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

      {/* East Bridgford Village Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expert Village Smile Design from East Bridgford</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                World-class cosmetic dentistry without the city center hassle. Beautiful village access and the personal care you deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Village Location</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 5 minutes from East Bridgford with peaceful countryside route and village parking.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Beautiful village route</p>
                  <p>• No traffic congestion</p>
                  <p>• Village parking available</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Village Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Highly experienced cosmetic dentists with extensive smile design expertise and village care approach.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Advanced cosmetic training</p>
                  <p>• Village community approach</p>
                  <p>• Know you by name service</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Village Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible appointment times with village priority booking and personal scheduling attention.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Village priority booking</p>
                  <p>• Personal appointment care</p>
                  <p>• Flexible treatment scheduling</p>
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
              <h2 className="text-3xl font-bold mb-4">East Bridgford Village Smile Transformations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from East Bridgford village residents who've transformed their confidence with smile design
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {([
                {
                  name: "Lady Catherine Ashworth",
                  location: "East Bridgford Village",
                  text: "The digital preview was remarkable and the final result exceeded all expectations. Village service combined with world-class expertise - absolutely perfect.",
                  rating: 5,
                  treatment: "Village Complete Makeover"
                },
                {
                  name: "Professor Michael Richardson",
                  location: "East Bridgford",
                  text: "Subtle enhancement that made a huge difference to my confidence. The team's personal attention and village approach was exactly what I needed.",
                  rating: 5,
                  treatment: "Village Bonding Enhancement"
                },
                {
                  name: "Elizabeth & William Bennett",
                  location: "East Bridgford Village",
                  text: "Both had smile makeovers and the coordination was perfect. Village residents truly are treated as part of the family here. Outstanding results.",
                  rating: 5,
                  treatment: "Village Porcelain Veneers"
                }
              ] || []).map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
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
                      <div className="font-semibold text-pear-gold">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <div className="text-sm text-dental-green font-medium">{review.treatment}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-gold to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Design Your Perfect Village Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join East Bridgford village residents who've discovered the confidence that comes with a perfectly designed smile
              and the personal care that village life deserves.
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
