import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
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
  Sparkles,
  Zap,
  Crown,
  Navigation,
  Coffee,
  Smile
} from "lucide-react";

export const metadata: Metadata = {
  title: "Teeth Whitening in Arnold - Professional Whitening Near You | Pear Tree Dental",
  description: "Professional teeth whitening for Arnold residents. Enlighten and boutique whitening just 15 minutes away in Burton Joyce. Guaranteed results with free parking.",
  keywords: [
    "teeth whitening Arnold",
    "tooth whitening Arnold",
    "dental whitening Arnold NG5",
    "professional whitening Arnold",
    "Enlighten whitening Arnold",
    "cosmetic dentist Arnold",
    "smile brightening Arnold"
  ],
  openGraph: {
    title: "Teeth Whitening in Arnold - Professional Whitening Near You | Pear Tree Dental",
    description: "Professional teeth whitening treatments for Arnold residents. Enlighten and boutique options available just 15 minutes away.",
    url: "https://peartree.dental/arnold/teeth-whitening"
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/teeth-whitening"
  }
};

export default function ArnoldTeethWhiteningPage() {
  const arnoldWhiteningFAQs = [
    {
      question: "How far is professional teeth whitening from Arnold town centre?",
      answer: "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We offer professional Enlighten and boutique whitening systems with guaranteed results and free parking."
    },
    {
      question: "What teeth whitening options are available for Arnold patients?",
      answer: "We offer two premium whitening systems: Enlighten (the only guaranteed whitening system) and Boutique whitening. Both are safe, effective, and perfect for Arnold's busy professionals."
    },
    {
      question: "Can I get same-day teeth whitening consultation in Arnold area?",
      answer: "Yes! We often have same-day availability for whitening consultations. We can assess your teeth, discuss options, and often start treatment on the same visit."
    },
    {
      question: "How long does professional teeth whitening take for Arnold patients?",
      answer: "Enlighten treatment takes 2 weeks with custom trays at home, followed by a 1-hour in-practice session. Boutique whitening can be completed in just 1-2 weeks at home."
    },
    {
      question: "Is teeth whitening safe for sensitive teeth?",
      answer: "Absolutely. Both our Enlighten and Boutique systems are designed for sensitive teeth. We provide desensitising gel and adjust treatment to ensure your comfort throughout."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Pear Tree Dental - Teeth Whitening in Arnold",
            "image": "https://peartree.dental/images/teeth-whitening-arnold.jpg",
            "url": "https://peartree.dental/arnold/teeth-whitening",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Arnold, NG5"
            },
            "medicalSpecialty": "Cosmetic Dentistry - Professional Teeth Whitening",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£350-£750"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Arnold & NG5
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Teeth Whitening in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Professional Whitening Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Free parking available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Whitening Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localised Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Arnold Residents Choose Professional Teeth Whitening
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Arnold's professionals know that a bright, confident smile makes all the difference.
                Our premium whitening treatments are perfect for busy Arnold lifestyles - just 15 minutes
                away in Burton Joyce with guaranteed results and free parking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Guaranteed Results</h3>
                  <p className="text-gray-600">Enlighten system guarantees B1 shade - the whitest natural tooth shade possible</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Quick Treatment</h3>
                  <p className="text-gray-600">Complete treatment in just 2-3 weeks with minimal disruption</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-dental-green mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Safe & Gentle</h3>
                  <p className="text-gray-600">Professional-grade systems designed for sensitive teeth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Professional Teeth Whitening Options for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer two premium whitening systems perfect for Arnold's busy professionals
                who want guaranteed results without the hassle of high street alternatives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Enlighten Whitening */}
              <Card className="border-2 border-pear-gold hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-pear-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-pear-primary">Enlighten Whitening</CardTitle>
                  <Badge className="bg-pear-gold text-white">Guaranteed Results</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Only Guaranteed System</h4>
                      <p className="text-sm text-gray-600">Guaranteed to reach B1 shade or your money back</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Perfect for Sensitive Teeth</h4>
                      <p className="text-sm text-gray-600">Virtually no sensitivity with revolutionary formula</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Long-lasting Results</h4>
                      <p className="text-sm text-gray-600">Results last years with proper maintenance</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-pear-primary">From £750</p>
                    <p className="text-sm text-gray-600">Complete treatment including custom trays</p>
                  </div>
                </CardContent>
              </Card>

              {/* Boutique Whitening */}
              <Card className="border-2 border-soft-pink hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-pear-primary">Boutique Whitening</CardTitle>
                  <Badge className="bg-soft-pink text-white">Professional Grade</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-soft-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Excellent Results</h4>
                      <p className="text-sm text-gray-600">Professional strength formula for dramatic whitening</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-soft-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Flexible Treatment</h4>
                      <p className="text-sm text-gray-600">Day or night wear options to suit your schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-soft-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Great Value</h4>
                      <p className="text-sm text-gray-600">Professional results at an accessible price</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-pear-primary">From £350</p>
                    <p className="text-sm text-gray-600">Complete treatment with custom trays</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Perfect for Arnold's Busy Lifestyles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Coffee className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Keep drinking coffee & tea</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Clock className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Fits around work schedule</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Minimal sensitivity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Whitening Results
              </h2>
            </div>

            <TestimonialBanner
              text="Amazing results with Enlighten whitening! As someone from Arnold who drinks a lot of coffee, I was skeptical about whitening. But the team at Pear Tree delivered exactly what they promised - my teeth are now B1 shade and the compliments haven't stopped. The 15-minute drive was so worth it, and the free parking made it stress-free."
              author="Michael R. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">B1 Shade</div>
                <p className="text-gray-600">Whitest natural tooth shade guaranteed</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">2-3 weeks</div>
                <p className="text-gray-600">Complete treatment time</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">100%</div>
                <p className="text-gray-600">Success rate with Enlighten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Real Whitening Results from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic transformations achieved with our professional whitening systems
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp"
              afterImage="/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp"
              beforeAlt="Before professional teeth whitening - discoloured teeth"
              afterAlt="After professional teeth whitening - bright white smile"
              title="Professional Whitening Transformation"
              description="Enlighten whitening achieved guaranteed B1 shade in 3 weeks"
              treatmentType="Enlighten Professional Whitening"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Teeth Whitening Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about professional whitening
              </p>
            </div>

            <FAQSection faqs={arnoldWhiteningFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Journey from Arnold for Professional Whitening
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Arnold
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 8 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey time: 15 minutes</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">Free Patient Parking</h4>
                    <p className="text-gray-600">No parking stress - dedicated spaces for all patients</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Arnold,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Smile with Professional Whitening from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your professional whitening consultation from Arnold — guaranteed results,
              no sensitivity, and the whitest natural shade possible just 15 minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Free whitening consultation worth £75 • 0% interest payment plans available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Guaranteed B1 shade with Enlighten</span>
              <span>✓ Same-day consultations available</span>
              <span>✓ Free parking for all patients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
