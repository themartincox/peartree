import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  CalendarDays,
  Shield,
  Smile,
  Zap,
  Award,
  Users,
  Eye,
  Timer
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Straightening Nottingham - Invisalign & ClearCorrect | Pear Tree Dental',
  description: 'Professional teeth straightening in Nottingham. Invisalign and ClearCorrect clear aligners. Discreet, comfortable orthodontic treatment from £2,000.',
  keywords: [
    'teeth straightening Nottingham',
    'Invisalign Nottingham',
    'ClearCorrect Nottingham',
    'clear aligners Nottingham',
    'orthodontics Nottingham',
    'invisible braces Nottingham',
    'adult braces Nottingham',
    'cosmetic orthodontics Nottingham'
  ],
  openGraph: {
    title: 'Teeth Straightening Nottingham - Invisalign & ClearCorrect | Pear Tree Dental',
    description: 'Straighten your teeth discreetly with Invisalign and ClearCorrect in Nottingham. Professional orthodontic care with invisible aligners.',
    url: 'https://peartree.dental/nottingham-teeth-straightening'
  },
  alternates: {
    canonical: 'https://peartree.dental/nottingham-teeth-straightening'
  }
};

export default function NottinghamTeethStraighteningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pinky to-white text-pear-primary">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://peartree.dental/nottingham-teeth-straightening",
            "name": "Pear Tree Dental - Teeth Straightening Nottingham",
            "image": "https://peartree.dental/images/teeth-straightening-nottingham.jpg",
            "description": "Professional teeth straightening treatment in Nottingham. Invisalign and ClearCorrect clear aligners for discreet orthodontic care.",
            "url": "https://peartree.dental/nottingham-teeth-straightening",
            "telephone": "+441159312520",
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
              "latitude": 52.9833,
              "longitude": -1.0833
            },
            "openingHours": [
              "Mo-Fr 08:30-17:30",
              "Sa 08:30-14:00"
            ],
            "medicalSpecialty": "Orthodontics",
            "serviceArea": {
              "@type": "City",
              "name": "Nottingham"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Teeth Straightening Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Invisalign Treatment",
                    "description": "Clear aligners for discreet teeth straightening"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "ClearCorrect Treatment",
                    "description": "Affordable clear aligner orthodontic treatment"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-soft-lavender to-pear-gold/20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Smile className="h-16 w-16 text-pear-gold" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-pear-primary">
              Teeth Straightening in{' '}
              <span className="text-pear-gold">Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-pear-primary/80 leading-relaxed">
              Straighten your teeth discreetly with Invisalign & ClearCorrect.
              <br className="hidden sm:block" />
              Clear aligners for a perfect smile - from £2,500.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Consultation: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental-green text-dental-green hover:bg-dental-green hover:text-dental-navy px-8 py-4"
              >
                <Link href="/services/orthodontics">
                  View Orthodontic Options
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Eye className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Nearly Invisible</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Timer className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Faster Treatment</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-dental-green" />
                <span className="text-sm">Comfortable & Safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Aligner Systems */}
      <section className="py-16 bg-white text-pear-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-pear-primary">
              Clear Aligner Systems Available in Nottingham
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              We offer the leading clear aligner systems for discreet, comfortable teeth straightening.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Invisalign */}
              <Card className="relative overflow-hidden p-8 border-2 border-pear-gold/30 hover:border-pear-gold/60 transition-colors">
                <div className="pointer-events-none absolute inset-0 opacity-10">
                  <Image src="/images/Invisalign-aligner.png" alt="Invisalign" fill className="object-cover" />
                </div>
                <CardHeader className="relative text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-pear-primary">Invisalign</CardTitle>
                  <p className="text-gray-700">The world's most advanced clear aligner system</p>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Virtually invisible clear aligners</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Removable for eating and cleaning</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Predictable results with 3D planning</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Treats complex cases effectively</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>SmartTrack material for comfort</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-pear-gold/10 rounded-lg">
                    <p className="text-2xl font-bold text-pear-primary">From £3,500</p>
                    <p className="text-sm text-gray-700">Complete treatment including retainers</p>
                  </div>
                </CardContent>
              </Card>

              {/* ClearCorrect */}
              <Card className="relative overflow-hidden p-8 border-2 border-pear-gold/30 hover:border-pear-gold/60 transition-colors">
                <div className="pointer-events-none absolute inset-0 opacity-10">
                  <Image src="/images/clearcorrect-logo.png" alt="ClearCorrect" fill className="object-contain" />
                </div>
                <CardHeader className="relative text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-pear-primary">ClearCorrect</CardTitle>
                  <p className="text-gray-700">Professional clear aligners with excellent value</p>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Clear, comfortable aligners</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Excellent value for money</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Effective for most orthodontic cases</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Gradual, comfortable movement</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                      <span>Professional monitoring throughout</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-pear-gold/10 rounded-lg">
                    <p className="text-2xl font-bold text-pear-primary">From £2,500</p>
                    <p className="text-sm text-gray-700">Complete treatment including retainers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Clear Aligners */}
      <section className="py-16 bg-gray-50 text-pear-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Clear Aligners in Nottingham?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Nearly Invisible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Clear aligners are virtually invisible, so you can straighten your teeth without anyone noticing</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Removable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Take them out for eating, brushing, and special occasions - no dietary restrictions</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Comfortable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Smooth plastic aligners with no metal brackets or wires to irritate your mouth</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Timer className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Faster Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Many cases complete in 6-18 months, faster than traditional braces</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Adult-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Perfect for working professionals who want to improve their smile discreetly</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Predictable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">3D treatment planning shows you exactly how your smile will look before you start</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Your Clear Aligner Treatment Journey
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Comprehensive examination and 3D digital scan of your teeth. We'll discuss your goals
                    and determine if clear aligners are right for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treatment Planning</h3>
                  <p className="text-gray-600">
                    Advanced 3D software creates your personalised treatment plan, showing you exactly
                    how your teeth will move and your final result.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Your Aligners</h3>
                  <p className="text-gray-600">
                    Your custom aligners are manufactured and delivered to our practice. We'll show you
                    how to use and care for them properly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Progress Monitoring</h3>
                  <p className="text-gray-600">
                    Regular check-ups to monitor progress and provide new aligners. Most patients
                    change aligners every 1-2 weeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-dental-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Retention Phase</h3>
                  <p className="text-gray-600">
                    Once treatment is complete, we'll provide retainers to maintain your beautiful
                    new smile for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Orthodontic Conditions We Treat in Nottingham
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Crowded Teeth - Malocclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">When there isn't enough space for all teeth to align properly</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Gaps Between Teeth - Diastema</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Spaces between teeth that affect appearance and function</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Overbite - Deep bite</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Upper teeth extend too far over the lower teeth</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Underbite - Class III malocclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Lower teeth protrude past the upper teeth</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Crossbite - Anterior or posterior crossbite</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Upper and lower teeth don't align properly when biting</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-gold">Open Bite - Lack of vertical overlap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Upper and lower teeth don't touch when the mouth is closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-soft-pink via-soft-lavender to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Journey to Straighter Teeth Today
            </h2>
            <p className="text-xl mb-8">
              Book your clear aligner consultation and discover how discreet orthodontic treatment
              can transform your smile and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-pear-primary hover:bg-gray-100 font-semibold px-8 py-4"
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
                className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4"
              >
                <Link href="/book">
                  Book Online Consultation
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-90">
              <p>
                <MapPin className="h-4 w-4 inline mr-1" />
                22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE
              </p>
              <p className="mt-2">Convenient access from Nottingham city centre</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
