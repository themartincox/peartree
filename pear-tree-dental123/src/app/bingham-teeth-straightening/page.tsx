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
  Baby
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Straightening Bingham - Invisalign & Clear Aligners | Pear Tree Dental',
  description: 'Family teeth straightening in Bingham. Invisalign, clear aligners, and orthodontics for children and adults. Gentle, effective treatment just 8 minutes from Bingham.',
  keywords: [
    'teeth straightening Bingham',
    'Invisalign Bingham',
    'clear aligners Bingham',
    'family orthodontics Bingham',
    'children\'s braces Bingham',
    'teeth alignment Bingham'
  ],
  openGraph: {
    title: 'Family Teeth Straightening in Bingham - Invisalign & Clear Aligners',
    description: 'Gentle teeth straightening for Bingham families. Modern orthodontics with invisible aligners for all ages.',
    url: 'https://peartree.dental/bingham-teeth-straightening'
  },
  alternates: {
    canonical: 'https://peartree.dental/bingham-teeth-straightening'
  }
};

export default function BinghamTeethStraighteningPage() {
  return (
    <div className="min-h-screen bg-dental-navy text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://peartree.dental/bingham-teeth-straightening",
            "name": "Teeth Straightening - Bingham",
            "description": "Family teeth straightening treatments including Invisalign and clear aligners for Bingham residents of all ages.",
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
              "telephone": "0115 931 2520"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bingham, Nottinghamshire"
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
              <span className="text-pear-gold font-medium">Bingham</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Family Teeth Straightening
              <span className="text-pear-gold block">for Bingham</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Gentle teeth straightening for the whole family with Invisalign and clear aligners.
              Perfect for children, teens, and adults in Bingham who want straighter teeth without traditional braces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold px-8 py-4"
              >
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Consultation: 0115 931 2520
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4"
              >
                <Link href="/bingham">
                  <MapPin className="h-5 w-5 mr-2" />
                  Bingham Info
                </Link>
              </Button>
            </div>

            {/* Key Benefits for Bingham */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-pear-gold/20 text-pear-gold border-pear-gold/30">
                <Eye className="w-4 h-4 mr-1" />
                Nearly Invisible
              </Badge>
              <Badge variant="secondary" className="bg-dental-green/20 text-dental-green border-dental-green/30">
                <Car className="w-4 h-4 mr-1" />
                8 mins from Bingham
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Baby className="w-4 h-4 mr-1" />
                All Ages Welcome
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
              <h2 className="text-3xl font-bold mb-4">Modern Teeth Straightening for Bingham Families</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of gentle orthodontic treatments designed for all ages, from children to adults in Bingham.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                <CardHeader className="text-center pb-4">
                  <Eye className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                  <CardTitle className="text-xl">Invisalign</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-gold/10 text-pear-gold">
                    Most Popular
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-gold mb-2">From £2,800</p>
                  <p className="text-gray-600 mb-4">Clear, removable aligners for discreet treatment</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Nearly invisible aligners</p>
                    <p>• Removable for eating & cleaning</p>
                    <p>• 6-18 months treatment time</p>
                    <p>• Perfect for teens and adults</p>
                  </div>
                  <Button className="w-full bg-pear-gold hover:bg-pear-gold/90 text-dental-navy">
                    Book Invisalign Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-dental-green/20 bg-gradient-to-br from-white to-dental-green/5">
                <CardHeader className="text-center pb-4">
                  <Baby className="h-12 w-12 mx-auto text-dental-green mb-4" />
                  <CardTitle className="text-xl">Children's Orthodontics</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-dental-green/10 text-dental-green">
                    Family Friendly
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-dental-green mb-2">From £1,995</p>
                  <p className="text-gray-600 mb-4">Gentle treatment for growing smiles</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• Age-appropriate treatment</p>
                    <p>• Clear aligners for children</p>
                    <p>• Fun, engaging approach</p>
                    <p>• Early intervention benefits</p>
                  </div>
                  <Button variant="outline" className="w-full border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                    Book Children's Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border border-pear-primary/20 bg-gradient-to-br from-white to-pear-primary/5">
                <CardHeader className="text-center pb-4">
                  <Zap className="h-12 w-12 mx-auto text-pear-primary mb-4" />
                  <CardTitle className="text-xl">Express Treatment</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-pear-primary/10 text-pear-primary">
                    Quick Results
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-pear-primary mb-2">From £1,795</p>
                  <p className="text-gray-600 mb-4">Fast correction for minor alignment issues</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <p>• 3-6 months treatment time</p>
                    <p>• Focus on front teeth</p>
                    <p>• Clear aligner technology</p>
                    <p>• Ideal for adults</p>
                  </div>
                  <Button variant="outline" className="w-full border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    Book Express Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Clear Aligners */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Why Bingham Families Choose Clear Aligners</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-pear-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Virtually Invisible</h3>
                      <p className="text-gray-700">
                        Clear aligners are nearly invisible, allowing children and adults to straighten their teeth
                        discreetly without affecting confidence or daily activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-dental-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Family Lifestyle Friendly</h3>
                      <p className="text-gray-700">
                        Removable aligners mean no food restrictions and easy cleaning. Perfect for
                        active Bingham families with busy schedules.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-pear-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Gentle & Effective</h3>
                      <p className="text-gray-700">
                        Modern aligner technology provides gentle, controlled movement that's comfortable
                        for patients of all ages, with predictable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-pear-gold/10 to-dental-green/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Eye className="w-16 h-16 mx-auto mb-4 text-pear-gold" />
                      <h3 className="text-xl font-bold text-gray-700 mb-2">FAMILY ORTHODONTICS</h3>
                      <p className="text-gray-600 mb-4">Modern alignment for all ages</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Suitable for children & adults</p>
                        <p>• Nearly invisible treatment</p>
                        <p>• Comfortable to wear</p>
                        <p>• Predictable results</p>
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
              <h2 className="text-3xl font-bold mb-4">Your Family's Teeth Straightening Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple, family-friendly process designed to fit around busy Bingham family life
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Family Consultation",
                  description: "Assessment for all family members considering treatment",
                  icon: Users,
                  time: "45 minutes"
                },
                {
                  step: "2",
                  title: "Digital Imaging",
                  description: "3D scans to create personalized treatment plans",
                  icon: Sparkles,
                  time: "30 minutes"
                },
                {
                  step: "3",
                  title: "Aligner Fitting",
                  description: "Receive your custom aligners with full instructions",
                  icon: CheckCircle,
                  time: "20 minutes"
                },
                {
                  step: "4",
                  title: "Progress Reviews",
                  description: "Regular family-friendly check-ups to monitor progress",
                  icon: Award,
                  time: "15 minutes"
                }
              ].map((step, index) => {
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

      {/* Bingham Family Convenience */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Convenient Family Treatment from Bingham</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Family orthodontic care without the hassle. Easy A52 access and flexible scheduling for busy Bingham families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-dental-green" />
                  <h3 className="text-xl font-semibold">Easy Family Access</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Just 8 minutes from Bingham with free parking and easy countryside route perfect for family visits.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Direct A52 route</p>
                  <p>• No city center traffic</p>
                  <p>• Family parking available</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-gold/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-pear-gold" />
                  <h3 className="text-xl font-semibold">Family Scheduling</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible appointments including after school, weekends, and family appointment blocks.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• After school appointments</p>
                  <p>• Saturday availability</p>
                  <p>• Family appointment coordination</p>
                </div>
              </Card>

              <Card className="p-6 border border-pear-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-pear-primary" />
                  <h3 className="text-xl font-semibold">Expert Family Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Experienced orthodontic team with expertise in treating patients of all ages in a family-friendly environment.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Pediatric orthodontic experience</p>
                  <p>• Family treatment planning</p>
                  <p>• Gentle, caring approach</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bingham Family Reviews */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Bingham Families Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from Bingham families who've transformed their smiles with clear aligners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "The Williams Family",
                  location: "Bingham",
                  text: "Both our teenagers got Invisalign and loved how discrete it was. No one at school even noticed! The team made the whole family feel welcome.",
                  rating: 5,
                  treatment: "Family Invisalign"
                },
                {
                  name: "Rachel & Emma Thompson",
                  location: "Bingham",
                  text: "Mum and daughter treatment together was brilliant! We supported each other through the process and both have amazing straight teeth now.",
                  rating: 5,
                  treatment: "Mother & Daughter Treatment"
                },
                {
                  name: "David Parker",
                  location: "Bingham",
                  text: "As a dad, I wanted to set a good example. The express treatment was perfect - straight teeth in 4 months and my kids think I'm cool now!",
                  rating: 5,
                  treatment: "Express Adult Treatment"
                }
              ].map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-pear-gold">
                      {[...Array(review.rating)].map((_, i) => (
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
              Ready to Straighten Your Family's Smiles?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join Bingham families who've chosen gentle, effective clear aligners for straighter smiles.
              Book your family consultation and discover modern orthodontics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-pear-gold font-semibold px-8 py-4"
              >
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2520
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pear-gold px-8 py-4"
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
