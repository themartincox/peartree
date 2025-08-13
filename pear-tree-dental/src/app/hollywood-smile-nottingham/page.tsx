import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  Phone,
  CalendarDays,
  MapPin,
  Camera,
  Users,
  Clock,
  Shield,
  Zap,
  CreditCard
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hollywood Smile Nottingham | Perfect Smile Transformation | Pear Tree Dental",
  description: "Transform your smile with a stunning Hollywood smile in Nottingham. Camera-ready results, expert craftsmanship, flexible payments. Book your consultation today at Pear Tree Dental.",
  keywords: [
    "Hollywood smile Nottingham",
    "porcelain veneers Nottingham",
    "smile makeover Nottingham",
    "cosmetic dentist Nottingham",
    "perfect smile Nottingham",
    "celebrity smile Nottingham",
    "teeth transformation Nottingham",
    "smile design Nottingham",
    "dental veneers Nottingham",
    "Nottingham cosmetic dentistry"
  ],
  openGraph: {
    title: "Hollywood Smile Nottingham | Perfect Smile Transformation",
    description: "Achieve the perfect camera-ready smile with expert Hollywood smile treatments in Nottingham. World-class results, local convenience.",
    type: "website",
    url: "https://peartree.dental/hollywood-smile-nottingham",
    siteName: "Pear Tree Dental",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hollywood Smile transformation results - Pear Tree Dental Nottingham"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollywood Smile Nottingham | Pear Tree Dental",
    description: "Transform your smile with expert Hollywood smile treatments in Nottingham. Camera-ready results close to home.",
    images: ["/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://peartree.dental/hollywood-smile-nottingham"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "GB-NTT",
    "geo.placename": "Nottingham",
    "geo.position": "52.9548;-1.1581",
    "ICBM": "52.9548, -1.1581"
  }
};

export default function HollywoodSmileNottinghamPage() {
  const hollywoodSmileFAQs = [
    {
      question: "How long does it take to get a Hollywood smile?",
      answer: "Most Hollywood smile treatments take 2-4 weeks from consultation to completion, though some complex cases may require additional time for optimal results."
    },
    {
      question: "Will my Hollywood smile look natural?",
      answer: "Absolutely. The hallmark of a great Hollywood smile is that it looks naturally perfect - stunning yet completely believable."
    },
    {
      question: "How long will my Hollywood smile last?",
      answer: "With proper care, your Hollywood smile can maintain its beauty for 15-20 years or more. We'll provide you with everything you need to protect your investment."
    },
    {
      question: "Do you offer guarantees?",
      answer: "Yes, we stand behind our work with comprehensive warranties and are committed to ensuring you absolutely love your new Hollywood smile."
    },
    {
      question: "How much does a Hollywood smile cost in Nottingham?",
      answer: "Investment varies depending on your specific needs and treatment plan. We offer flexible payment plans and will provide detailed pricing during your consultation. Most treatments range from £3,000 to £15,000."
    }
  ];

  const treatmentOptions = [
    {
      name: "Porcelain Veneers",
      subtitle: "The Gold Standard",
      description: "Ultra-thin, custom-crafted porcelain shells that transform your teeth into works of art",
      features: ["Custom design for your face", "Natural-looking results", "Stain-resistant material", "15-20 year lifespan"],
      ideal: "Perfect for comprehensive smile transformation"
    },
    {
      name: "Complete Smile Makeover",
      subtitle: "Total Transformation",
      description: "Combine multiple treatments for dramatic, show-stopping Hollywood smile results",
      features: ["Veneers + crowns + whitening", "Orthodontics if needed", "Comprehensive planning", "Dramatic results"],
      ideal: "Ideal for complete smile overhauls"
    },
    {
      name: "Express Smile Enhancement",
      subtitle: "Quick Results",
      description: "Accelerated treatments for those wanting Hollywood sparkle with minimal time investment",
      features: ["Professional whitening", "Minor cosmetic adjustments", "Quick turnaround", "Immediate impact"],
      ideal: "Great for already good smiles"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Artistic Excellence",
      description: "Our cosmetic dentists specialize in smile design and have created hundreds of stunning Hollywood smiles for Nottingham residents"
    },
    {
      icon: Zap,
      title: "State-of-the-Art Technology",
      description: "From digital smile design to precision crafting, we use the most advanced techniques available"
    },
    {
      icon: Heart,
      title: "Personalised Care",
      description: "Every Hollywood smile is unique. We take time to understand your lifestyle, personality, and goals"
    },
    {
      icon: Users,
      title: "Proven Results",
      description: "Our portfolio of Hollywood smile transformations consistently delivers the stunning results our Nottingham patients dream of"
    }
  ];

  const benefits = [
    "Flawless Symmetry - Each tooth perfectly positioned and shaped to complement your face",
    "Brilliant Whiteness - A radiant shade that catches the light beautifully",
    "Natural Elegance - Results that look stunning yet completely authentic",
    "Confident Presence - The kind of smile that commands attention for all the right reasons"
  ];

  const testimonials = [
    {
      quote: "I never imagined I could have a smile like this without going to London. The team at Pear Tree Dental gave me the Hollywood smile I'd dreamed of for years. Now I smile in every photo!",
      author: "Sarah M.",
      location: "Nottingham"
    },
    {
      quote: "The attention to detail was incredible. Every tooth was crafted to perfection. People constantly ask if I've had work done - my Hollywood smile looks completely natural.",
      author: "James R.",
      location: "West Bridgford"
    },
    {
      quote: "Best investment I've ever made. My new Hollywood smile has transformed not just how I look, but how I feel about myself.",
      author: "Emma L.",
      location: "Beeston"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Hollywood Smile"
        description="Complete smile transformation creating perfect, camera-ready smiles using porcelain veneers and advanced cosmetic dentistry techniques"
        price="From £3,000"
        category="Cosmetic Dentistry & Smile Design"
        duration="2-4 weeks treatment time"
        preparation="Digital smile design, comprehensive planning, custom veneer creation"
        recovery="Minimal downtime, immediate results"
        benefits={([
          "Camera-ready perfect smile",
          "Custom-designed for your face",
          "Natural yet stunning appearance",
          "Boost confidence dramatically",
          "15-20 year lifespan"
        ]}
        risks={([
          "Temporary sensitivity possible",
          "Irreversible tooth preparation",
          "Requires ongoing maintenance",
          "Investment in appearance"
        ]}
        rating={4.9}
        reviewCount={156}
        url="https://peartree.dental/hollywood-smile-nottingham"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Hollywood Smile Nottingham"
        faqs={hollywoodSmileFAQs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 text-sm font-semibold px-4 py-2">
              <Camera className="w-4 h-4 mr-2" />
              Hollywood Smile Nottingham
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Transform Your Smile with a Stunning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Hollywood Smile
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">
                in Nottingham
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Dreaming of that perfect, camera-ready smile you see on the red carpet? Your Hollywood smile awaits right here in Nottingham. We've helped hundreds of patients achieve the dazzling, confidence-boosting smiles they've always wanted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold text-lg px-8 py-4 h-auto hover:shadow-lg transition-all">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Hollywood Smile Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 font-semibold text-lg px-8 py-4 h-auto hover:bg-amber-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {([
                { icon: Star, text: "5-Star Results" },
                { icon: Users, text: "500+ Smiles" },
                { icon: Award, text: "Expert Team" },
                { icon: MapPin, text: "Nottingham Based" }
              ] || []).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Hollywood Smile Special */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Makes a Hollywood Smile So Special?
            </h2>
            <p className="text-xl text-gray-600">
              A Hollywood smile isn't just about having white teeth - it's about creating perfect harmony between your smile and your unique facial features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {(benefits || []).map((benefit, index) => {
              const [title, description] = benefit.split(' - ');
              return (
                <Card key={index} className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your Hollywood Smile Transformation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect treatment path for your dream smile transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(treatmentOptions || []).map((option, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{option.name}</CardTitle>
                  <div className="text-amber-600 font-semibold">{option.subtitle}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{option.description}</p>

                  <div className="space-y-3 mb-6">
                    {(option.features || []).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-amber-800 font-medium">{option.ideal}</p>
                  </div>

                  <Link href="/book">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Real Hollywood Smile Results from Nottingham Patients
            </h2>
            <p className="text-xl text-gray-600">
              See what our patients are saying about their life-changing smile transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(testimonials || []).map((testimonial, index) => (
              <Card key={index} className="border-2 border-amber-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {([...Array(5)] || []).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-amber-600 text-sm">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nottingham */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Nottingham for Your Hollywood Smile?
            </h2>
            <p className="text-xl text-gray-600">
              You don't need to travel to London or abroad for world-class smile transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(whyChooseUs || []).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <Card className="border-2 border-amber-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Local Expertise, Global Standards</h4>
                <p className="text-gray-600">Our team has trained with leading cosmetic dentists internationally, bringing the latest Hollywood smile techniques directly to Nottingham.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Convenient Location</h4>
                <p className="text-gray-600">No lengthy travel or overnight stays - achieve your dream smile close to home with easy access and familiar surroundings.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600">Your relationship with us doesn't end when your treatment does. We're here for maintenance, touch-ups, and ongoing care for years to come.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Pear Tree Dental Hollywood Smile Process
            </h2>
            <p className="text-xl text-gray-600">
              Your journey to the perfect smile, step by step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {([
              {
                step: "1",
                title: "Your Personal Consultation",
                description: "We begin by understanding your vision for your Hollywood smile. Using advanced digital imaging, we'll show you exactly how your transformed smile will look.",
                icon: Camera
              },
              {
                step: "2",
                title: "Bespoke Treatment Planning",
                description: "Your Hollywood smile design is created specifically for you, taking into account your facial structure, skin tone, and personal style preferences.",
                icon: Award
              },
              {
                step: "3",
                title: "Expert Craftsmanship",
                description: "Our skilled technicians create your veneers or restorations using the finest materials and latest techniques, ensuring perfection.",
                icon: Sparkles
              },
              {
                step: "4",
                title: "The Big Reveal",
                description: "The moment you see your completed Hollywood smile for the first time is unforgettable. It's one of the most emotional and joyful experiences.",
                icon: Heart
              }
            ] || []).map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Investment in Your Hollywood Smile
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Your Hollywood smile is an investment in yourself that pays dividends every single day
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {([
                { icon: CreditCard, title: "Interest-free finance plans" },
                { icon: Clock, title: "Flexible monthly payments" },
                { icon: Shield, title: "Insurance claim assistance" },
                { icon: Users, title: "Corporate wellness discounts" }
              ] || []).map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} className="border-2 border-amber-200">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium text-sm">{option.title}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="text-gray-600 mb-8">
              We offer flexible payment plans to make your dream smile accessible, and we'll help you explore any insurance benefits you may have.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About Hollywood Smiles in Nottingham
              </h2>
            </div>

            <div className="space-y-6">
              {(hollywoodSmileFAQs || []).map((faq, index) => (
                <Card key={index} className="border-2 border-amber-100">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready for Your Hollywood Smile Consultation in Nottingham?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Your dream smile is just a consultation away. During your personalised appointment, we'll discuss your goals, show you digital previews, and create your perfect treatment plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                {([
                  "Discuss your Hollywood smile goals",
                  "Examine your current smile and oral health",
                  "Show you digital previews of your results"
                ] || []).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {([
                  "Explain your treatment options and timeline",
                  "Provide detailed investment information",
                  "Answer all your questions about the process"
                ] || []).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Hollywood Smile Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold text-lg px-8 py-4 h-auto bg-transparent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            <p className="text-white/90 text-lg font-medium italic">
              Don't wait another day to start your Hollywood smile journey. Transform your smile, transform your life.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pear Tree Dental - Creating Life-Changing Hollywood Smiles in Nottingham</h3>
            <p className="text-gray-300 mb-6">
              Conveniently located in the heart of Nottingham, serving patients throughout Nottinghamshire who dream of achieving their perfect Hollywood smile.
            </p>
            <div className="flex items-center justify-center space-x-2 text-amber-400">
              <MapPin className="w-5 h-5" />
              <span>Burton Joyce, Nottingham | Serving all of Nottinghamshire</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
