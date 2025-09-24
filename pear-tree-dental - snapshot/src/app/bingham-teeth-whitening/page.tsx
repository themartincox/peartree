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
  Coffee,
  Award,
  Crown,
  Users,
  Heart,
  Baby
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Whitening Bingham - Professional Whitening | Pear Tree Dental',
  description: 'Professional teeth whitening for Bingham residents. Family-friendly whitening treatments, same-day options, and take-home kits. Book your consultation today.',
  keywords: [
    'teeth whitening Bingham',
    'professional teeth whitening Bingham',
    'family teeth whitening Bingham',
    'dental whitening Bingham',
    'same day teeth whitening',
    'smile whitening Bingham'
  ],
  openGraph: {
    title: 'Professional Teeth Whitening in Bingham - Pear Tree Dental',
    description: 'Transform your smile with professional teeth whitening in Bingham. Family-friendly treatments with immediate results.',
    url: 'https://peartree.dental/bingham-teeth-whitening'
  },
  alternates: {
    canonical: 'https://peartree.dental/bingham-teeth-whitening'
  }
};

export default function BinghamTeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/bingham-teeth-whitening",
            "name": "Professional Teeth Whitening - Bingham",
            "description": "Professional teeth whitening treatments for Bingham residents using advanced whitening technology in a family-friendly environment.",
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
              "name": "Bingham, Nottinghamshire"
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
              <span className="text-dental-green font-medium">Bingham</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Professional Teeth Whitening
              <span className="text-dental-green block">for Bingham</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your smile with professional teeth whitening treatments just 8 minutes from Bingham.
              Safe, effective treatments in a welcoming family environment that Bingham residents trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                <Link href="/bingham">
                  <MapPin className="h-5 w-5 mr-2" />
                  Bingham Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for Bingham */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Clock className="w-4 h-4 mr-1" />
                Same-Day Results
              </Badge>
              <Badge variant="secondary" className="bg-pear-gold/20 text-pear-gold border-pear-gold/30">
                <Car className="w-4 h-4 mr-1" />
                8 mins from Bingham
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                Family Friendly
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Whitening Options for Bingham</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of professional whitening treatments, all designed to deliver beautiful results in a comfortable, family-friendly environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Same-Day Whitening</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-dental-green/10 text-dental-green">
                    Most Popular
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">£395</p>
                  <p className="text-gray-600 mb-4">Professional in-chair whitening with immediate results</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Up to 8 shades lighter in one session</p>
                    <p>• 60-90 minute appointment</p>
                    <p>• Includes touch-up kit</p>
                    <p>• Family-friendly environment</p>
                  </div>
                  <Button className="w-full bg-dental-green hover:bg-dental-green/90 text-white">
                    Book Same-Day Treatment
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Camera className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Take-Home Whitening</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-gold/10 text-pear-gold">
                    Family Choice
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">£295</p>
                  <p className="text-gray-600 mb-4">Custom trays for professional home whitening</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Custom-fitted whitening trays</p>
                    <p>• Professional grade gel</p>
                    <p>• Whiten at your convenience</p>
                    <p>• Perfect for busy families</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy">
                    Book Take-Home Kit
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Crown className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Family Package</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-primary/10 text-pear-primary">
                    Best Value
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">£550</p>
                  <p className="text-sm text-gray-500 line-through mb-2">Was £690</p>
                  <p className="text-gray-600 mb-4">In-chair treatment plus take-home maintenance</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Same-day whitening session</p>
                    <p>• Custom take-home trays</p>
                    <p>• Professional maintenance gel</p>
                    <p>• Family appointment scheduling</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    Book Complete Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Professional Whitening */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Why Bingham Families Choose Professional Whitening</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Superior Results</h3>
                      <p className="text-gray-700">
                        Professional-grade whitening delivers results that over-the-counter products simply cannot match.
                        Lighten teeth by up to 8 shades safely and effectively.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Safe & Family-Friendly</h3>
                      <p className="text-gray-700">
                        Professional supervision ensures safe application and optimal results while protecting
                        your teeth and gums in a welcoming family environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Long-Lasting Results</h3>
                      <p className="text-gray-700">
                        Professional whitening results typically last 1-3 years with proper care, far longer
                        than store-bought alternatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/10 to-pear-gold/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Sparkles className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">FAMILY WHITENING</h3>
                      <p className="text-gray-600 mb-4">Professional results for Bingham families</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Safe for the whole family</p>
                        <p>• Up to 8 shades lighter</p>
                        <p>• Natural-looking results</p>
                        <p>• Boost everyone's confidence</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Convenient Access from Bingham</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional teeth whitening without the hassle. Easy A52 journey, free parking, flexible family scheduling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">8-Minute Journey</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Direct route from Bingham via A52. Easy dual carriageway access with no city center traffic.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Straight down the A52</p>
                  <p>• Free on-site parking</p>
                  <p>• Easy family access</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Family Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible appointment times to fit around family life, school runs, and work schedules.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• After school appointments</p>
                  <p>• Saturday availability</p>
                  <p>• Family appointment blocks</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Family Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Welcoming environment where the whole family feels comfortable and at ease.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Child-friendly approach</p>
                  <p>• Family treatment plans</p>
                  <p>• Gentle, caring team</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Family Reviews */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Bingham Families Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real reviews from Bingham residents who've transformed their smiles with professional whitening
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Linda & Tom Johnson",
                  location: "Bingham",
                  text: "Fantastic results for both of us! The team made us feel so welcome and the journey from Bingham was a breeze. Our smiles have never looked better.",
                  rating: 5,
                  treatment: "Family Whitening Package"
                },
                {
                  name: "Sophie Chen",
                  location: "Bingham",
                  text: "Perfect for busy mums! The take-home kit meant I could whiten my teeth when it suited me. Professional results without the hassle.",
                  rating: 5,
                  treatment: "Take-Home Whitening"
                },
                {
                  name: "Mike Roberts",
                  location: "Bingham",
                  text: "Same-day whitening was incredible. 6 shades whiter in just over an hour. The A52 route makes it so convenient from Bingham.",
                  rating: 5,
                  treatment: "Same-Day Whitening"
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
                      <div className="text-sm text-pear-gold font-medium">{review.treatment}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-pear-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Family's Smiles?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join Bingham families who've discovered the confidence that comes with a brighter, whiter smile.
              Book your professional whitening consultation today.
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
                <Link href="/bingham">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  More Bingham Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
