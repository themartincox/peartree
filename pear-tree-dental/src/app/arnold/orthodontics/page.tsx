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
  Crown,
  Sparkles,
  Award,
  Navigation,
  Zap,
  Target,
  Settings,
  Eye,
  Smile,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Orthodontics in Arnold - Comprehensive Teeth Straightening | Pear Tree Dental",
  description: "Complete orthodontic treatment for Arnold residents. Invisalign, ClearCorrect, and traditional braces for all ages just 15 minutes away. Transform your smile affordably.",
  keywords: [
    "orthodontics Arnold",
    "teeth straightening Arnold",
    "braces Arnold NG5",
    "Invisalign Arnold",
    "clear aligners Arnold",
    "adult orthodontics Arnold",
    "teen braces Arnold"
  ],
  openGraph: {
    title: "Orthodontics in Arnold - Comprehensive Teeth Straightening | Pear Tree Dental",
    description: "Complete orthodontic treatment for Arnold residents. All teeth straightening options for adults and teens just 15 minutes away.",
    url: "https://peartree.dental/arnold/orthodontics"
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/orthodontics"
  }
};

export default function ArnoldOrthodonticsPage() {
  const arnoldOrthodonticsFAQs = [
    {
      question: "How far is orthodontic treatment from Arnold?",
      answer: "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're comprehensive orthodontic specialists offering all teeth straightening options for adults and teens."
    },
    {
      question: "What orthodontic options are available for Arnold patients?",
      answer: "We offer Invisalign, ClearCorrect clear aligners, traditional braces, and ceramic braces. Each option suits different needs, budgets, and lifestyle preferences."
    },
    {
      question: "Do you provide adult orthodontics near Arnold?",
      answer: "Absolutely! Over 50% of our orthodontic patients are adults. We specialize in discreet options like Invisalign and clear aligners perfect for working professionals."
    },
    {
      question: "How long does orthodontic treatment take?",
      answer: "Treatment time varies: clear aligners 6-18 months, traditional braces 12-24 months. We'll provide an accurate timeline during your consultation based on your specific case."
    },
    {
      question: "What makes your orthodontic service special for Arnold residents?",
      answer: "We combine all modern orthodontic options, flexible payment plans, expert treatment planning, and convenient Arnold access. Every smile is individually designed."
    }
  ];

  const orthodonticOptions = [
    {
      name: "Invisalign",
      description: "World's most advanced clear aligner system",
      features: ["Virtually invisible", "Removable convenience", "SmartTrack material", "Predictable results"],
      price: "From £2,800",
      duration: "6-18 months",
      icon: Eye,
      suitability: "All ages, complex cases",
      highlight: "Most Popular"
    },
    {
      name: "ClearCorrect",
      description: "Professional clear aligner alternative",
      features: ["Excellent value", "Clear and comfortable", "Effective results", "Flexible treatment"],
      price: "From £2,400",
      duration: "8-16 months",
      icon: Target,
      suitability: "Adults and teens",
      highlight: "Great Value"
    },
    {
      name: "Ceramic Braces",
      description: "Tooth-colored traditional braces",
      features: ["Less visible than metal", "Effective for all cases", "Precise control", "Proven results"],
      price: "From £2,200",
      duration: "12-24 months",
      icon: Sparkles,
      suitability: "All ages, complex cases",
      highlight: "Discreet Option"
    },
    {
      name: "Traditional Braces",
      description: "Time-tested metal orthodontic braces",
      features: ["Maximum effectiveness", "Handles all cases", "Most affordable", "Fastest results"],
      price: "From £1,800",
      duration: "12-20 months",
      icon: Settings,
      suitability: "All ages, budget-conscious",
      highlight: "Most Affordable"
    }
  ];

  const ageGroups = [
    {
      group: "Children (7-11)",
      description: "Early intervention orthodontics",
      benefits: ["Guide jaw development", "Prevent complex problems", "Phase treatment options", "Build confidence early"],
      recommendedOptions: ["Traditional braces", "Space maintainers", "Expanders"]
    },
    {
      group: "Teens (12-18)",
      description: "Peak orthodontic treatment age",
      benefits: ["Fastest treatment time", "Social acceptance", "Long-term results", "Boost self-esteem"],
      recommendedOptions: ["Invisalign Teen", "Ceramic braces", "Traditional braces"]
    },
    {
      group: "Adults (18+)",
      description: "Professional orthodontic solutions",
      benefits: ["Discreet treatment", "Flexible options", "Career-friendly", "Health improvements"],
      recommendedOptions: ["Invisalign", "ClearCorrect", "Ceramic braces"]
    }
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Perfect Smile",
      description: "Achieve the straight, beautiful smile you've always wanted"
    },
    {
      icon: Heart,
      title: "Improved Health",
      description: "Straighter teeth are easier to clean and maintain"
    },
    {
      icon: Award,
      title: "Boost Confidence",
      description: "Feel confident in social and professional situations"
    },
    {
      icon: Shield,
      title: "Long-Term Investment",
      description: "Straight teeth last a lifetime with proper care"
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
            "name": "Pear Tree Dental - Orthodontics in Arnold",
            "image": "https://peartree.dental/images/orthodontics-arnold.jpg",
            "url": "https://peartree.dental/arnold/orthodontics",
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
            "medicalSpecialty": "Orthodontics - Comprehensive Teeth Straightening",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£1800-£2800"
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
              Orthodontics in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Comprehensive Teeth Straightening Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — All orthodontic options available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Smile className="w-5 h-5 mr-2" />
                  Book Free Orthodontic Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
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
                Why Arnold Families Choose Comprehensive Orthodontic Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For Arnold families seeking professional teeth straightening, having all options under one roof matters.
                Our comprehensive orthodontic practice in Burton Joyce offers every modern teeth straightening solution
                for children, teens, and adults, just 15 minutes from Arnold with flexible payment plans.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {(benefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Orthodontic Options Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Complete Orthodontic Solutions for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From invisible clear aligners to traditional braces, we offer every modern orthodontic
                solution to straighten teeth for patients of all ages from Arnold.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(orthodonticOptions || []).map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary relative">
                    {option.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-pear-gold text-white">{option.highlight}</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-pear-primary" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.name}</CardTitle>
                      <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                      <Badge variant="outline" className="text-xs">{option.suitability}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.price}</p>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{option.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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
                Expert Orthodontic Care for Arnold Families
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">All ages welcome (7-70+)</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Flexible payment plans</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-6 h-6 text-pear-primary" />
                  <span className="text-gray-600">Modern technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Orthodontic Solutions for Every Age from Arnold
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're 7 or 70, it's never too early or too late to achieve the smile you deserve.
                We provide age-appropriate orthodontic solutions for every stage of life.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {(ageGroups || []).map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-pear-primary">{group.group}</CardTitle>
                    <p className="text-gray-600">{group.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {group.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Recommended Options:</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.recommendedOptions.map((option, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {option}
                          </Badge>
                        ))}
                      </div>
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
                What Arnold Patients Say About Their Orthodontic Experience
              </h2>
            </div>

            <TestimonialBanner
              text="As a working mum from Arnold, I thought orthodontics would be impossible, but the Invisalign option was perfect. I could remove them for important meetings and school events. The 15-minute drive to Burton Joyce was easy to fit around the school run, and now I finally have the straight smile I always wanted. My teenage daughter is starting treatment next!"
              author="Helen M. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">All ages</div>
                <p className="text-gray-600">Children to adults welcome</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">6-24 months</div>
                <p className="text-gray-600">Treatment time range</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Lifetime</div>
                <p className="text-gray-600">Beautiful smile benefits</p>
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
              Amazing Orthodontic Transformations from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible smile transformations achieved with our comprehensive orthodontic care
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/orthodontics-before-case-1.webp"
              afterImage="/images/orthodontics-after-case-1.webp"
              beforeAlt="Before orthodontic treatment - crooked and crowded teeth"
              afterAlt="After orthodontic treatment - perfectly straight smile"
              title="Comprehensive Orthodontic Transformation"
              description="Severe crowding corrected with Invisalign treatment in 16 months"
              treatmentType="Invisalign Orthodontics"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Orthodontic Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about comprehensive orthodontic treatments
              </p>
            </div>

            <FAQSection faqs={arnoldOrthodonticsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Access from Arnold for Family Orthodontic Care
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
                    <h4 className="font-bold text-pear-primary mb-2">Family-Friendly</h4>
                    <p className="text-gray-600">Perfect for families with multiple treatment needs</p>
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
              Transform Your Smile with Expert Orthodontics from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your orthodontic consultation from Arnold — all modern teeth straightening options,
              flexible payment plans, and expert care just 15 minutes from your doorstep.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Special Offer for Arnold Families
              </p>
              <p className="text-sm opacity-90">
                Free orthodontic consultation worth £200 • Family discounts available • 0% interest financing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Smile className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ All orthodontic options available</span>
              <span>✓ All ages welcome (7-70+)</span>
              <span>✓ Flexible payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
