import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  Shield,
  Heart,
  Sparkles,
  Award,
  Navigation,
  Palette,
  Zap,
  Target,
  Smile,
} from "lucide-react";
import practiceInfo from "@/data/practiceInfo";
import { getTreatmentPrice } from "@/data/pricing";

// INLINE, SERVER-SAFE FAQ COMPONENT (unblocks build)
type FAQItem = { question: string; answer: string };
function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
  return (
    <div className="space-y-4">
      {faqs.map((item, i) => (
        <details
          key={i}
          className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <h3 className="text-lg font-semibold text-pear-primary">
              {item.question}
            </h3>
            <span className="ml-4 text-gray-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title:
    "Composite Bonding in Nottingham - Affordable Smile Enhancement | Pear Tree Dental",
  description:
    "Composite bonding for Nottingham residents. Affordable same-day smile improvements, gap closure, and tooth reshaping just minutes away. Natural-looking results guaranteed.",
  keywords: [
    "composite bonding Nottingham",
    "dental bonding Nottingham",
    "tooth bonding Nottingham",
    "edge bonding Nottingham",
    "affordable cosmetic dentistry Nottingham",
    "same day smile makeover Nottingham",
    "gap closure Nottingham",
  ],
  openGraph: {
    title:
      "Composite Bonding in Nottingham - Affordable Smile Enhancement | Pear Tree Dental",
    description:
      "Composite bonding for Nottingham residents. Affordable same-day smile improvements with natural-looking results.",
    url: "https://peartree.dental/nottingham-dentist/composite-bonding",
  },
  alternates: {
    canonical: "https://peartree.dental/nottingham-dentist/composite-bonding",
  },
};

export default function NottinghamCompositeBondingPage() {
  const nottinghamBondingFAQs: FAQItem[] = [
    {
      question:
        "How far is composite bonding treatment from Nottingham city centre?",
      answer:
        "Pear Tree Dental is just a short drive from Nottingham city centre. We're specialists in aesthetic composite bonding with same-day appointments and natural-looking results.",
    },
    {
      question: "What can composite bonding fix for Nottingham patients?",
      answer:
        "Composite bonding can fix chipped teeth, close gaps, reshape teeth, cover stains, and improve tooth length. It's perfect for minor cosmetic improvements without major treatment.",
    },
    {
      question: "How long does composite bonding last?",
      answer:
        "High-quality composite bonding typically lasts 5-8 years with proper care. We use premium materials and provide comprehensive aftercare to maximize longevity.",
    },
    {
      question: "Can composite bonding be done in one visit?",
      answer:
        "Yes! Most composite bonding treatments are completed in a single appointment lasting 1-3 hours depending on the number of teeth being treated.",
    },
    {
      question:
        "What makes your bonding service special for Nottingham residents?",
      answer:
        "We combine artistic skill, premium composite materials, same-day treatment, and natural color matching. Our bonding is indistinguishable from natural teeth.",
    },
  ];

  const bondingTreatments = [
    {
      name: "Gap Closure",
      description: "Close small gaps between teeth",
      duration: "1-2 hours",
      teeth: "2-4 teeth",
      price: getTreatmentPrice("Composite Edge Bonding"),
      benefits: ["Instant results", "No drilling required", "Reversible treatment"],
      icon: Target,
    },
    {
      name: "Chip Repair",
      description: "Restore chipped or broken teeth",
      duration: "30-60 minutes",
      teeth: "Per tooth",
      price: getTreatmentPrice("Composite Edge Bonding"),
      benefits: ["Same-day repair", "Natural appearance", "Strengthen tooth"],
      icon: Shield,
    },
    {
      name: "Shape Enhancement",
      description: "Improve tooth shape and length",
      duration: "2-3 hours",
      teeth: "4-6 teeth",
      price: getTreatmentPrice("Composite Veneers"),
      benefits: ["Perfect symmetry", "Customised shape", "Immediate improvement"],
      icon: Palette,
    },
    {
      name: "Edge Bonding",
      description: "Enhance and lengthen front teeth",
      duration: "1-2 hours",
      teeth: "4-8 teeth",
      price: getTreatmentPrice("Composite Edge Bonding"),
      benefits: ["Youthful appearance", "Enhanced smile", "Conservative treatment"],
      icon: Smile,
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Same-Day Results",
      description: "Complete treatment in one appointment with immediate results",
    },
    {
      icon: Heart,
      title: "Conservative Treatment",
      description:
        "Minimal tooth preparation required, preserving natural tooth structure",
    },
    {
      icon: Sparkles,
      title: "Natural Appearance",
      description: "Perfect color matching and texture for invisible repairs",
    },
    {
      icon: Award,
      title: "Affordable Option",
      description: "Cost-effective way to dramatically improve your smile",
    },
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
            name: "Pear Tree Dental - Composite Bonding in Nottingham",
            image:
              "https://peartree.dental/images/composite-bonding-nottingham.jpg",
            url: "https://peartree.dental/nottingham-dentist/composite-bonding",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: { "@type": "Place", name: "Nottingham" },
            medicalSpecialty: "Cosmetic Dentistry - Composite Bonding",
            geo: { "@type": "GeoCoordinates", latitude: 52.9548, longitude: -1.1581 },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£120-£200",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Nottingham & Surrounds
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Composite Bonding in <span className="text-pear-gold">Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Affordable Same-Day Smile Enhancement Minutes from the City Centre — Same-day results available
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only minutes from Nottingham — Same-day results available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Bonding Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {practiceInfo.contact.phone}
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
                Why Nottingham Residents Choose Composite Bonding for Smile Enhancement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Nottingham residents seeking affordable, immediate smile improvements, composite bonding offers
                the perfect solution. Our artistic composite bonding specialists in Burton Joyce provide
                same-day transformations that look completely natural, just minutes from Nottingham city centre.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Composite Bonding Treatments for Nottingham Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From simple chip repairs to comprehensive smile enhancements, our composite bonding
                treatments offer affordable, immediate improvements for every Nottingham patient's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {bondingTreatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-primary" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{treatment.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{treatment.price}</p>
                        <p className="text-sm text-gray-600">{treatment.teeth}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{treatment.duration}</span>
                      </div>
                      <div className="space-y-2">
                        {treatment.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-6">
                Perfect for Nottingham's Busy Lifestyles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Zap className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Completed in single visit</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">No anesthesia needed</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Instant confidence boost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Same-Day Bonding Experience from Nottingham
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our efficient process ensures you leave with perfect results in just one appointment,
                making it ideal for busy Nottingham residents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Color Matching",
                  description: "Perfect shade selection for invisible results",
                  duration: "15 minutes",
                },
                {
                  step: "2",
                  title: "Tooth Preparation",
                  description: "Gentle surface preparation (no drilling)",
                  duration: "15 minutes",
                },
                {
                  step: "3",
                  title: "Artistic Application",
                  description: "Skillful composite application and shaping",
                  duration: "30-60 minutes",
                },
                {
                  step: "4",
                  title: "Final Polish",
                  description: "Professional polishing for natural shine",
                  duration: "15 minutes",
                },
              ].map((step) => (
                <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-primary" />
                      <span className="text-xs text-pear-primary font-medium">{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Nottingham Patients Say About Their Bonding Results
              </h2>
            </div>

            <TestimonialBanner
              text="I chipped my front tooth and was devastated. The team at Pear Tree fixed it in one appointment - you honestly can't tell which tooth was repaired! The color match is perfect, and it feels completely natural. The short drive from Nottingham was nothing compared to getting my confidence back instantly."
              author="Tom R. from Nottingham"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Same day</div>
                <p className="text-gray-600">Complete treatment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">5-8 years</div>
                <p className="text-gray-600">Expected lifespan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Perfect match</div>
                <p className="text-gray-600">Invisible results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Amazing Bonding Transformations from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible improvements achieved with our artistic composite bonding
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/bonding-before-case-1.webp"
              afterImage="/images/bonding-after-case-1.webp"
              beforeAlt="Before composite bonding - chipped and gapped front teeth"
              afterAlt="After composite bonding - perfect symmetrical smile"
              title="Composite Bonding Transformation"
              description="Gap closure and chip repair completed in single appointment"
              treatmentType="Composite Bonding"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Nottingham */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Composite Bonding Questions from Nottingham Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Nottingham patients about composite bonding treatments
              </p>
            </div>

            {Array.isArray(nottinghamBondingFAQs) && nottinghamBondingFAQs.length > 0 && (
              <FAQSection faqs={nottinghamBondingFAQs} />
            )}
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Nottingham for Same-Day Smile Enhancement
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Nottingham
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east from Nottingham city centre on A612</p>
                    <p>2. Continue for 6 miles through Colwick and Burton Joyce</p>
                    <p>3. We're at {practiceInfo.address.full}</p>
                    <p className="text-pear-primary font-semibold">Journey time: 15 minutes</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">Same-Day Service</h4>
                    <p className="text-gray-600">Walk in with problems, leave with perfect smile</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Nottingham,+UK/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Nottingham
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
              Transform Your Smile Today with Composite Bonding from Nottingham
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your bonding consultation from Nottingham — same-day results, natural appearance,
              and affordable smile enhancement just minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Nottingham Patients
              </p>
              <p className="text-sm opacity-90">
                Free consultation worth £75 • Same-day appointments • Payment plans available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day results available</span>
              <span>✓ No anesthesia required</span>
              <span>✓ 5-8 year durability</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}