import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import ServiceHero from "@/components/ServiceHero";
import BeforeAfterSliderPair from "@/components/BeforeAfterSliderPair";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  Award,
  Timer,
  Smile,
  Heart,
  Gauge,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buccal Corridor Correction Nottingham - Unlock the Full Beauty of Your Smile | Pear Tree Dental",
  description: "Transform your smile with buccal corridor correction in Nottingham. Get the Hollywood smile, boost confidence, and discover a fuller, more radiant smile. From £2,500. Life-changing results for Nottingham patients.",
  keywords: [
    "buccal corridor correction Nottingham",
    "smile widening Nottingham",
    "dark spaces smile correction Nottingham",
    "narrow smile treatment Nottingham",
    "orthodontic expansion Nottinghamshire",
    "smile transformation Nottingham",
    "cosmetic dentistry Nottingham"
  ],
  openGraph: {
    title: "Buccal Corridor Correction Nottingham | Pear Tree Dental",
    description: "Get the Hollywood Smile in Nottingham by eliminating dark spaces at the corners. Expert buccal corridor correction from £2,500.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic-dentistry/buccal-corridor-correction"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic-dentistry/buccal-corridor-correction"
  },
  // Add performance optimizations
  other: {
    'preload-bcc-smile-thumb': '/images/buccal-corridor/BCC-smile-thumb.webp',
    'preload-bcc-before-large': '/images/before-after/BCC-before-large.webp',
    'preload-bcc-after-large': '/images/before-after/BCC-after-large.webp'
  }
};

export default function BuccalCorridorCorrectionPage() {
  const buccalCorridorFAQs = [
    {
      question: "How long will my transformation take?",
      answer: "Every journey is unique, but most orthodontic approaches take 12-24 months to complete, whilst cosmetic solutions can often be achieved in just a few visits. We'll give you a clear timeline during your consultation."
    },
    {
      question: "Will I be comfortable during treatment?",
      answer: "Absolutely. Any mild discomfort from orthodontic movement is temporary and manageable, whilst cosmetic procedures are performed with local anaesthesia to ensure your complete comfort."
    },
    {
      question: "What about the investment?",
      answer: "We believe everyone deserves to love their smile, which is why we offer various payment options and will help you explore any insurance benefits you may have."
    },
    {
      question: "How long will my beautiful results last?",
      answer: "With proper care and the retainers we'll provide, your orthodontic results can last a lifetime. Cosmetic restorations typically maintain their beauty for 15-20 years or more with good care."
    },
    {
      question: "How do I know if buccal corridor correction could help me?",
      answer: "You might benefit if you notice prominent dark spaces that make your smile appear narrow, feel self-conscious about showing your teeth, or find that your smile doesn't reflect the vibrant person you are."
    }
  ];

  const treatmentOptions = [
    {
      name: "Gentle Orthodontic Expansion",
      description: "Using modern clear aligners or carefully planned traditional braces, we can gradually encourage your upper arch to widen naturally",
      features: ["Clear aligner technology", "Natural arch widening", "Maintains tooth health", "Long-lasting results"],
      duration: "12-24 months",
      suitability: "Most common approach"
    },
    {
      name: "Innovative Palatal Expansion",
      description: "For more comprehensive changes, we can work with the structure of your upper jaw itself, creating lasting improvements",
      features: ["Structural jaw changes", "Enhanced breathing", "Improved oral function", "Comprehensive benefits"],
      duration: "6-18 months",
      suitability: "Significant improvements needed"
    },
    {
      name: "Artful Cosmetic Enhancement",
      description: "Through expertly crafted porcelain veneers or crowns, we can create the visual harmony you're looking for",
      features: ["Immediate transformation", "Custom-designed restorations", "Natural appearance", "Minimal preparation"],
      duration: "2-4 weeks",
      suitability: "Quick visual improvements"
    },
    {
      name: "Integrated Treatment Approaches",
      description: "Often, the most beautiful results come from combining different techniques for your perfect smile",
      features: ["Best of all approaches", "Personalised planning", "Comprehensive results", "Expert coordination"],
      duration: "12-30 months",
      suitability: "Complex transformations"
    }
  ];

  const benefits = [
    {
      icon: Smile,
      title: "A Smile That Matches Your Spirit",
      description: "Your new, fuller smile will reflect the confident, joyful person you are inside. You'll find yourself smiling more freely and feeling completely at ease in every photo"
    },
    {
      icon: Heart,
      title: "Confidence That Radiates",
      description: "There's something transformative about loving your smile. It affects how you present yourself to the world and how you feel about yourself every single day"
    },
    {
      icon: Gauge,
      title: "Functional Improvements You'll Notice",
      description: "Many patients are surprised to discover that their treatment also improves their breathing, speech clarity, and overall oral comfort"
    },
    {
      icon: Eye,
      title: "Life-Changing Transformation",
      description: "It's wonderful when looking better also means feeling better. Your smile transformation affects every aspect of how you interact with the world"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Getting to Know You and Your Goals",
      description: "Your first visit is all about you. We'll listen to your concerns, understand your hopes for your smile, and conduct a thorough evaluation using the latest digital imaging technology"
    },
    {
      step: "2",
      title: "Seeing Your Future Smile",
      description: "Using sophisticated planning software, we'll create a detailed preview of your results. Watching our patients see their transformed smile for the first time is one of the most rewarding parts of what we do"
    },
    {
      step: "3",
      title: "Your Comfortable Treatment Experience",
      description: "Whether your journey involves wearing aligners, traditional braces, or preparing for beautiful cosmetic restorations, we'll be with you every step of the way"
    },
    {
      step: "4",
      title: "Protecting Your Investment",
      description: "Once you've achieved your dream smile, we'll provide you with everything you need to maintain those stunning results for years to come"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink/10 via-white to-soft-lavender/10">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Buccal Corridor Correction"
        description="Life-changing buccal corridor correction to unlock the full beauty of your smile. Eliminate dark spaces and discover the confidence that comes with a radiant, fuller smile"
        price="From £2,500"
        category="Cosmetic & Orthodontic Dentistry"
        duration="3-18 months depending on treatment approach"
        preparation="Comprehensive evaluation, digital imaging, treatment planning"
        recovery="Minimal discomfort, gradual improvement over treatment period"
        benefits={[
          "Fuller, more balanced smile",
          "Increased confidence and self-esteem",
          "Improved oral function and breathing",
          "Youthful appearance restoration",
          "Enhanced photogenic appeal"
        ]}
        risks={[
          "Temporary discomfort during orthodontic movement",
          "Initial adjustment period",
          "Requires consistent retainer wear",
          "Individual results may vary"
        ]}
        rating={4.9}
        reviewCount={156}
        url="https://peartree.dental/services/cosmetic-dentistry/buccal-corridor-correction"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="Buccal Corridor Correction"
        faqs={buccalCorridorFAQs}
      />

      {/* Hero Section */}
      <ServiceHero
        title="Unlock your own"
        subtitle="True Smile"
        description="Your smile should tell the world exactly who you are - confident, radiant, and completely at ease. Those shadowy gaps at the corners of your smile don't have to hold you back anymore."
        heroVideo="/videos/heroes/buccal-corridor-hero.mp4"
        heroVideoType="mp4"
        heroImageAlt="Buccal corridor correction treatment demonstration video"
        badgeText="Buccal Corridor Correction"
        badgeIcon="Smile"
        keyBenefits={[
          { text: "Fuller smile", icon: "Smile" },
          { text: "Increased confidence", icon: "Heart" },
          { text: "Better function", icon: "Gauge" },
          { text: "Youthful appearance", icon: "Eye" }
        ]}
        primaryCTA={{
          text: "Book Smile Consultation",
          href: "/book"
        }}
        secondaryCTA={{
          text: "View Treatment Options",
          href: "#treatment-options",
          icon: "ArrowRight"
        }}
        gradientFrom="soft-pink/10"
        gradientTo="soft-lavender/10"
        textColor="pear-primary"
      />

      {/* Opening Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Pear Tree Dental, we understand how much your smile means to you, and we're here to help you discover the life-changing transformation that comes with buccal corridor correction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Perhaps you've noticed that the smile people see doesn't match the joy you feel. Maybe you find yourself covering your mouth when you laugh, or avoiding photos because your smile doesn't look quite right. These feelings are more common than you might think, and completely understandable.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Buccal Corridors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                What Are Buccal Corridors?
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the spaces that affect your smile's beauty
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Buccal corridors are the dark spaces that appear between your back teeth and the corners of your mouth when you smile. While some space is natural, too much can make your smile appear narrow or aged.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      These spaces often develop when your upper arch is naturally narrow, after tooth extractions, or simply as part of the ageing process. The good news? There's so much we can do to help.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pear-primary mb-3">You might benefit from treatment if you experience:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Prominent dark spaces that make your smile appear narrow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Feeling self-conscious about showing your teeth in social situations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Photos where your smile seems smaller than your personality</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pear-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">A sense that your smile doesn't reflect the person you are</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 rounded-3xl overflow-hidden">
                  {/* Top Image - BCC-smile */}
                  <div className="h-1/2 relative border-b border-white/20">
                    <div className="absolute inset-0 p-4">
                      <div className="w-full h-full bg-white/10 rounded-2xl overflow-hidden relative">
                        <Image
                          src="/images/buccal-corridor/BCC-smile-large.webp"
                          alt="Buccal corridor correction - enhanced smile result"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Image - BCC-before */}
                  <div className="h-1/2 relative">
                    <div className="absolute inset-0 p-4">
                      <div className="w-full h-full bg-white/10 rounded-2xl overflow-hidden relative">
                        <Image
                          src="/images/before-after/BCC-before-large.webp"
                          alt="Before buccal corridor correction treatment"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-gray-700 text-center bg-white/80 rounded-lg py-1 px-2">
                      Before & After comparison showing buccal corridor reduction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section id="treatment-options" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your Journey to a Fuller, More Radiant Smile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer personalised treatment approaches designed to give you the beautiful, confident smile you deserve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentOptions.map((option) => (
              <Card key={option.name} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-pear-primary mb-2">
                    {option.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-medium text-pear-primary">{option.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Best for:</span>
                        <div className="font-medium text-pear-primary">{option.suitability}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pear-primary mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-pear-gold mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The Life-Changing Benefits You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you love your smile, it transforms not just how you look, but how you feel about yourself every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-soft-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-soft-pink" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-soft-pink text-white">Real Results</Badge>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Buccal Corridor Correction Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the remarkable transformation achieved through our buccal corridor correction treatment.
              Slide to compare the before and after results.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mb-8">
            <BeforeAfterSliderPair
              primarySlider={{
                beforeImage: "/images/before-after/BCC-before.png",
                afterImage: "/images/before-after/BCC-after.png",
                beforeAlt: "Narrow smile with pronounced buccal corridors (dark spaces at the corners)",
                afterAlt: "Wider, fuller smile after buccal corridor correction with reduced dark spaces",
                title: "Buccal Corridor Correction – Smile Widening",
                description: "Orthodontic and aesthetic techniques to reduce dark corridors and create a broader, more photogenic smile",
                treatmentType: "Buccal Corridor Correction"
              }}
              secondarySlider={{
                beforeImage: "/images/before-after/orthondontics-invisalign-whitening-boutique-composite-bonding-before.webp",
                afterImage: "/images/before-after/orthondontics-invisalign-whitening-boutique-composite-bonding-after.webp",
                beforeAlt: "Crooked, uneven tooth edges before Invisalign, Boutique Whitening, and composite edge bonding",
                afterAlt: "Aligned, brighter teeth with refined edges after Invisalign, Boutique Whitening, and composite bonding",
                title: "Invisalign • Boutique Whitening • Edge Bonding",
                description: "Sequential alignment and shade improvement followed by precise edge refinement for a complete smile upgrade",
                treatmentType: "Invisalign • Whitening • Bonding"
              }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Treatment Duration</h4>
                <p className="text-gray-600 text-sm">3-18 months depending on approach</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Patient Satisfaction</h4>
                <p className="text-gray-600 text-sm">97% would recommend treatment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-soft-pink" />
                </div>
                <h4 className="font-semibold text-pear-primary mb-2">Expert Results</h4>
                <p className="text-gray-600 text-sm">Specialist orthodontic care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree Dental Section */}
      <section className="py-16 bg-gradient-to-r from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Choose Pear Tree Dental for Your Smile Transformation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing experts who truly understand your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-pear-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-pear-primary mb-2">We See Your Vision Before You Do</h4>
                  <p className="text-gray-600">Our advanced 3D imaging technology allows us to show you exactly how your transformed smile will look before we even begin. There's something magical about seeing your future smile for the first time.</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-pear-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-pear-primary mb-2">Experience That Makes the Difference</h4>
                  <p className="text-gray-600">Our team includes orthodontists and cosmetic dentists with a special interest in creating life-changing smile transformations. We work together, sharing decades of combined experience.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pear-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-pear-primary mb-2">Comfort Is Our Priority</h4>
                  <p className="text-gray-600">Your journey should be as pleasant as your destination. From our welcoming practice environment to our gentle treatment techniques, we're committed to making every visit comfortable and positive.</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pear-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-pear-primary mb-2">Your Smile, Your Story</h4>
                  <p className="text-gray-600">No two smiles are alike, and neither are our treatment plans. We take time to understand not just your dental needs, but your lifestyle, your personality, and your dreams for your smile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              What Your Transformation Journey Looks Like
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first consultation to your beautiful results, we're with you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const colorClasses = [
                "bg-gradient-to-br from-pear-primary to-pear-primary/80",
                "bg-gradient-to-br from-pear-gold to-pear-gold/80",
                "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
                "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90"
              ];
              return (
                <Card key={step.step} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 ${colorClasses[index]} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-pear-gold/60" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                The Pear Tree Dental Difference
              </h2>
              <p className="text-xl text-gray-600">
                Expertise in smile transformations with a personal touch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Advanced Digital Planning</h3>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge 3D imaging and smile design software show you exactly how your corrected smile will look before treatment begins.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Expert Team</h3>
                    <p className="text-gray-600 text-sm">
                      Our orthodontists and cosmetic dentists work collaboratively, providing coordinated care under one roof for optimal results.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Comfortable Experience</h3>
                    <p className="text-gray-600 text-sm">
                      Modern, relaxing practice environment with gentle treatment techniques prioritising your comfort throughout the process.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Personalised Plans</h3>
                    <p className="text-gray-600 text-sm">
                      Every smile is unique. We develop customised treatment plans based on your specific anatomy, lifestyle, and goals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-pinky-fade text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to Fall in Love with Your Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Your perfect smile is waiting, and we can't wait to help you discover it. At Pear Tree Dental, we don't just correct buccal corridors - we unlock the full potential of your smile and transform how you see yourself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 font-semibold">
                    Book Personal Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 border-2 border-white">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <p className="text-white/80 italic text-lg">
                  "At Pear Tree Dental, we believe that everyone deserves a smile that lights up their world. Let us help you discover yours."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Comprehensive evaluation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>3D smile preview</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert guidance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
