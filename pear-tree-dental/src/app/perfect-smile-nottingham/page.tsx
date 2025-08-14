import {
  ArrowRight,
  Award,
  CalendarDays,
  Camera,
  CheckCircle,
  Clock,
  CreditCard,
  Diamond,
  Eye,
  Heart,
  MapPin,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Perfect Smile Nottingham | Expert Smile Transformations | Pear Tree Dental",
  description:
    "Discover your perfect smile in Nottingham. Expert cosmetic dentistry, porcelain veneers, teeth whitening & orthodontics. Personalised smile design. Book consultation today.",
  keywords: [
    "perfect smile Nottingham",
    "cosmetic dentistry Nottingham",
    "smile transformation Nottingham",
    "porcelain veneers Nottingham",
    "teeth whitening Nottingham",
    "smile makeover Nottingham",
    "dental veneers Nottingham",
    "smile design Nottingham",
    "perfect teeth Nottingham",
    "Nottingham cosmetic dentist",
  ],
  openGraph: {
    title: "Perfect Smile Nottingham | Expert Smile Transformations",
    description:
      "Discover your perfect smile in Nottingham. Personalised smile design, expert craftsmanship, and life-changing results close to home.",
    type: "website",
    url: "https://peartree.dental/perfect-smile-nottingham",
    siteName: "Pear Tree Dental",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Smile transformation results - Pear Tree Dental Nottingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Smile Nottingham | Pear Tree Dental",
    description:
      "Discover your perfect smile in Nottingham. Expert cosmetic dentistry and personalised smile design close to home.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://peartree.dental/perfect-smile-nottingham",
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
    ICBM: "52.9548, -1.1581",
  },
};

export default function PerfectSmileNottinghamPage() {
  const perfectSmileFAQs = [
    {
      question: "How do I know what my perfect smile should look like?",
      answer:
        "During your consultation, we'll work together to define your perfect smile using digital imaging and design software. You'll see exactly how your smile will look before any treatment begins.",
    },
    {
      question: "How long does it take to achieve a perfect smile?",
      answer:
        "Timeline varies depending on your chosen treatments. Simple enhancements might take just a few weeks, whilst comprehensive transformations typically take 6-12 weeks to complete.",
    },
    {
      question: "Will my perfect smile look natural?",
      answer:
        "Absolutely. The best cosmetic dentistry looks completely natural - perfectly beautiful but unmistakably you.",
    },
    {
      question: "What if I'm not completely happy with the results?",
      answer:
        "Your satisfaction is our priority. We work with you throughout the process to ensure your perfect smile exceeds your expectations, and we stand behind our work with comprehensive guarantees.",
    },
    {
      question: "How much does a perfect smile cost in Nottingham?",
      answer:
        "Investment varies depending on your specific needs and treatment plan. We offer flexible payment plans and will provide detailed pricing during your consultation. Most treatments range from £500 to £15,000.",
    },
  ];

  const treatmentOptions = [
    {
      name: "Porcelain Veneers",
      subtitle: "Perfect Symmetry",
      description:
        "Transform irregular, stained, or worn teeth into perfectly shaped, beautifully coloured masterpieces. Each veneer is individually crafted to contribute to your overall perfect smile.",
      features: [
        "Individual craftsmanship",
        "Perfect colour matching",
        "Natural appearance",
        "Long-lasting results",
      ],
      icon: Diamond,
    },
    {
      name: "Professional Teeth Whitening",
      subtitle: "Radiant Brightness",
      description:
        "Sometimes your perfect smile just needs to shine a little brighter. Our advanced whitening treatments can lift years of staining to reveal the radiant smile underneath.",
      features: [
        "Advanced whitening technology",
        "Safe and effective",
        "Dramatic results",
        "Customised treatment",
      ],
      icon: Sparkles,
    },
    {
      name: "Invisible Orthodontics",
      subtitle: "Perfect Alignment",
      description:
        "Achieve perfectly straight teeth without traditional braces. Clear aligners gradually guide your teeth into ideal positions whilst maintaining your lifestyle and appearance.",
      features: [
        "Nearly invisible treatment",
        "Removable convenience",
        "Comfortable fit",
        "Predictable results",
      ],
      icon: Target,
    },
    {
      name: "Complete Smile Reconstruction",
      subtitle: "Total Transformation",
      description:
        "For comprehensive transformations, we combine multiple treatments to address every aspect of your smile, creating results that exceed even your highest expectations.",
      features: [
        "Comprehensive planning",
        "Multiple treatments",
        "Dramatic transformation",
        "Life-changing results",
      ],
      icon: Award,
    },
    {
      name: "Cosmetic Bonding",
      subtitle: "Artistic Enhancement",
      description:
        "Minor imperfections can often be corrected with artistic bonding and gentle reshaping, providing dramatic improvements with minimal intervention.",
      features: [
        "Minimal preparation",
        "Same-day results",
        "Conservative approach",
        "Natural enhancement",
      ],
      icon: Zap,
    },
  ];

  const perfectSmileFeatures = [
    {
      title: "Beautifully Straight and Aligned",
      description:
        "Teeth that are perfectly positioned to create harmony and balance",
    },
    {
      title: "Bright, Healthy-Looking Colour",
      description:
        "A radiant shade that suits your complexion and enhances your natural beauty",
    },
    {
      title: "Complete Confidence",
      description:
        "The freedom to smile freely in any situation without hesitation",
    },
    {
      title: "Natural Enhancement",
      description:
        "Results that enhance your best features while looking completely authentic",
    },
    {
      title: "Perfect Comfort",
      description:
        "The comfort of knowing your smile looks exactly as it should",
    },
  ];

  const nottinghamAdvantages = [
    {
      icon: MapPin,
      title: "No Lengthy Travel",
      description:
        "No time away from home - achieve your perfect smile close to where you live",
    },
    {
      icon: Heart,
      title: "Ongoing Local Support",
      description:
        "Maintenance and follow-up care conveniently located near you",
    },
    {
      icon: Users,
      title: "Long-term Relationship",
      description:
        "Build lasting relationships with your dental team who understand your needs",
    },
    {
      icon: Shield,
      title: "Competitive Quality",
      description:
        "World-class results without compromising on quality or convenience",
    },
  ];

  const testimonials = [
    {
      quote:
        "I'd been hiding my smile for decades. Now, six months later, I can't stop smiling. The team at Pear Tree Dental gave me the perfect smile I never thought was possible.",
      author: "Michelle T.",
      location: "Nottingham",
    },
    {
      quote:
        "My perfect smile has changed everything - my confidence, my career prospects, even my social life. I wish I'd done this years ago.",
      author: "David H.",
      location: "Arnold",
    },
    {
      quote:
        "The results exceeded my expectations. My perfect smile looks so natural that people think I was just born lucky.",
      author: "Lisa K.",
      location: "Carlton",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Our cosmetic dentists have helped hundreds of Nottingham residents achieve their perfect smiles using the latest techniques and highest quality materials",
    },
    {
      icon: Heart,
      title: "Personalised Approach",
      description:
        "We understand that perfect means something different to everyone. Our treatments are tailored to your unique features, lifestyle, and goals",
    },
    {
      icon: Eye,
      title: "Advanced Technology",
      description:
        "From digital smile design to precision crafting, we use cutting-edge technology to ensure predictable, beautiful results",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description:
        "Your relationship with us doesn't end when your treatment does. We're here to help maintain your perfect smile for life",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Perfect Smile Transformation"
        description="Personalised perfect smile design and transformation creating naturally beautiful, confidence-boosting smiles using advanced cosmetic dentistry techniques"
        price="From £500"
        category="Cosmetic Dentistry & Smile Design"
        duration="2-12 weeks depending on treatment"
        preparation="Comprehensive smile analysis, digital design, personalised treatment planning"
        recovery="Minimal downtime, immediate confidence boost"
        benefits={[
          "Perfectly personalised smile design",
          "Natural-looking beautiful results",
          "Increased confidence and self-esteem",
          "Long-lasting smile transformation",
          "Expert local care in Nottingham",
        ]}
        risks={[
          "Temporary sensitivity possible",
          "Individual healing variation",
          "Requires ongoing maintenance",
          "Investment in appearance",
        ]}
        rating={4.9}
        reviewCount={234}
        url="https://peartree.dental/perfect-smile-nottingham"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Perfect Smile Nottingham"
        faqs={perfectSmileFAQs}
        pageUrl="/perfect-smile-nottingham"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-sm font-semibold px-4 py-2">
              <Smile className="w-4 h-4 mr-2" />
              Perfect Smile Nottingham
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Perfect Smile
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">
                in Nottingham
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Everyone deserves to feel completely confident when they smile. If
              you've been searching for the perfect smile in Nottingham, your
              journey ends here. At Pear Tree Dental, we believe that your
              perfect smile isn't just about having beautiful teeth - it's about
              creating a smile that's perfectly, authentically you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg px-8 py-4 h-auto hover:shadow-lg transition-all"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Discover Your Perfect Smile
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 font-semibold text-lg px-8 py-4 h-auto hover:bg-purple-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {(
                [
                  { icon: Star, text: "Perfect Results" },
                  { icon: Users, text: "500+ Smiles" },
                  { icon: Award, text: "Expert Team" },
                  { icon: MapPin, text: "Nottingham Local" },
                ] || []
              ).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What Does Perfect Mean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Does a Perfect Smile Mean to You?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your perfect smile is as unique as you are. For some, it's about
              correcting years of self-consciousness. For others, it's about
              enhancing what nature gave them. Whatever your perfect smile looks
              like, we're here to help you achieve it right here in Nottingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(perfectSmileFeatures || []).map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-purple-100 hover:border-purple-200 transition-colors text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nottingham */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Nottingham is the Perfect Place for Your Perfect Smile
            </h2>
            <p className="text-xl text-gray-600">
              You shouldn't have to compromise on quality or travel far from
              home to achieve your perfect smile. Nottingham offers world-class
              cosmetic dentistry right on your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(nottinghamAdvantages || []).map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow bg-white"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Creating Your Perfect Smile in Nottingham: Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your perfect smile journey is carefully crafted using our proven
              approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(
              [
                {
                  step: "1",
                  title: "Comprehensive Smile Analysis",
                  description:
                    "We begin by understanding what 'perfect' means to you. Using advanced digital technology, we analyse your facial features, smile dynamics, and personal preferences.",
                  icon: Eye,
                },
                {
                  step: "2",
                  title: "Tailored Treatment Planning",
                  description:
                    "Your perfect smile journey is designed specifically for you. We might recommend whitening, veneers, orthodontics, or a combination - whatever it takes.",
                  icon: Target,
                },
                {
                  step: "3",
                  title: "Expert Craftsmanship",
                  description:
                    "Our team has a special interest in cosmetic dentistry. Every aspect is carefully planned and expertly executed using the finest materials.",
                  icon: Award,
                },
                {
                  step: "4",
                  title: "Ongoing Perfection",
                  description:
                    "Your perfect smile deserves perfect care. We provide comprehensive aftercare to ensure your results remain flawless for years to come.",
                  icon: Shield,
                },
              ] || []
            ).map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="relative text-center hover:shadow-lg transition-shadow"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Perfect Smile Treatment Options in Nottingham
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of smile enhancement treatments, each
              designed to help you achieve your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {(treatmentOptions || []).map((option, index) => {
              const Icon = option.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-white"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {option.name}
                        </CardTitle>
                        <div className="text-purple-600 font-semibold">
                          {option.subtitle}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{option.description}</p>

                    <div className="space-y-3">
                      {(option.features || []).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Real Perfect Smile Stories from Nottingham
            </h2>
            <p className="text-xl text-gray-600">
              See what our patients are saying about their perfect smile
              transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(testimonials || []).map((testimonial, index) => (
              <Card key={index} className="border-2 border-purple-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {([...Array(5)] || []).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-purple-500 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-purple-600 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Nottingham Residents Trust Pear Tree Dental for Their Perfect
              Smile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing experts who
              understand your perfect smile vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(whyChooseUs || []).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow bg-white"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Investment in Your Perfect Smile
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Your perfect smile is one of the best investments you can make in
              yourself. The confidence and joy that comes from loving your smile
              affects every area of your life, and the benefits last for
              decades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {(
                [
                  {
                    icon: CreditCard,
                    title: "Extended payment plans to suit any budget",
                  },
                  { icon: Clock, title: "Interest-free finance available" },
                  { icon: Shield, title: "Insurance benefits consultation" },
                  {
                    icon: Users,
                    title: "Family and multiple treatment discounts",
                  },
                ] || []
              ).map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} className="border-2 border-purple-200">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium text-sm">
                        {option.title}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Perfect Smile FAQs for Nottingham Patients
              </h2>
            </div>

            <div className="space-y-6">
              {(perfectSmileFAQs || []).map((faq, index) => (
                <Card
                  key={index}
                  className="border-2 border-purple-100 bg-white"
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Smile Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Perfect Smile Experience at Pear Tree Dental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to your perfect smile should be as exceptional as
              your final results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(
              [
                {
                  title: "Your Perfect Smile Consultation",
                  description:
                    "During your comprehensive consultation, we'll listen to your concerns, understand your goals, and show you exactly what your perfect smile could look like using our advanced imaging technology.",
                  icon: Camera,
                },
                {
                  title: "Personalised Treatment Design",
                  description:
                    "We create a detailed treatment plan that addresses your specific needs and desires. You'll see digital previews of your results and understand every step of your journey.",
                  icon: Target,
                },
                {
                  title: "Comfortable Treatment Process",
                  description:
                    "Your experience should be as perfect as your final results. We prioritise your comfort throughout every appointment, using the latest pain-free techniques.",
                  icon: Heart,
                },
                {
                  title: "The Perfect Reveal",
                  description:
                    "The moment you see your completed perfect smile is truly special. Our patients often describe it as life changing - and we never tire of witnessing that joy.",
                  icon: Sparkles,
                },
              ] || []
            ).map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-purple-100 hover:border-purple-200 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          {experience.title}
                        </h3>
                        <p className="text-gray-600">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Start Your Perfect Smile Journey in Nottingham Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Your perfect smile is waiting, and we're excited to help you
              discover it. During your personalised consultation, we'll work
              together to create your vision and plan your transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                {(
                  [
                    "Listen to your perfect smile vision and concerns",
                    "Conduct a thorough examination of your current smile",
                    "Create digital previews of your potential results",
                  ] || []
                ).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {(
                  [
                    "Explain all suitable treatment options",
                    "Provide transparent pricing and payment options",
                    "Answer every question you have about the process",
                  ] || []
                ).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 h-auto"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Perfect Smile Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold text-lg px-8 py-4 h-auto bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            <p className="text-white/90 text-lg font-medium italic mb-6">
              "Take the first step towards your perfect smile today. Don't wait
              - your confidence and happiness are worth it."
            </p>

            <div className="text-center">
              <p className="text-white/80 text-sm">
                Your perfect smile journey starts with a single consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pear Tree Dental - Creating Perfect Smiles in Nottingham
            </h3>
            <p className="text-gray-300 mb-6">
              Centrally located in Nottingham, proudly serving patients
              throughout Nottinghamshire who are ready to discover their perfect
              smile.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <MapPin className="w-5 h-5" />
              <span>
                Burton Joyce, Nottingham | Serving all of Nottinghamshire
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
