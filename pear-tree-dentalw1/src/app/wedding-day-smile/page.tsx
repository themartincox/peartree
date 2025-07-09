import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import {
  Heart,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  Diamond,
  Star,
  Camera,
  CalendarDays,
  Phone,
  Crown,
  Smile,
  Users,
  Gift,
  Zap,
  Eye,
  Award,
  Shield,
  Timer,
  Palette,
  Wand2
} from "lucide-react";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Wedding Day Smile - Perfect Smile for Your Special Day | Pear Tree Dental",
  description: "Get the perfect wedding smile in Burton Joyce. Professional teeth whitening, veneers, and smile makeovers for your special day. Timeline-based treatments for brides and grooms.",
  keywords: [
    "wedding day smile Burton Joyce",
    "bridal smile makeover",
    "wedding teeth whitening",
    "bride smile transformation",
    "wedding day dentist Nottingham",
    "perfect wedding smile",
    "bridal cosmetic dentistry"
  ],
  openGraph: {
    title: "Perfect Wedding Day Smile - Bridal Smile Makeover | Pear Tree Dental",
    description: "Ensure your smile is picture-perfect for your wedding day with our specialized bridal smile treatments",
    type: "website",
    url: "https://peartree.dental/wedding-day-smile"
  },
  alternates: {
    canonical: "https://peartree.dental/wedding-day-smile"
  }
};

export default function WeddingDaySmilePage() {
  const weddingSmileFAQs = [
    {
      question: "How far in advance should I plan my wedding smile makeover?",
      answer: "We recommend booking your consultation 3-6 months before your wedding day. Simple treatments like whitening need 2-4 weeks, whilst more comprehensive makeovers may require 2-6 months depending on your chosen treatments."
    },
    {
      question: "What if I need dental work done close to my wedding?",
      answer: "We understand wedding timelines can be tight! For urgent treatments within 4 weeks of your wedding, we offer express appointments and same-day solutions like composite bonding and professional whitening to ensure your smile is perfect."
    },
    {
      question: "Will my teeth be sensitive on my wedding day?",
      answer: "We carefully time treatments to minimise any sensitivity. Whitening is typically completed 1-2 weeks before your wedding, and we provide desensitising treatments to ensure you're completely comfortable on your special day."
    },
    {
      question: "Can I eat and drink normally on my wedding day after treatment?",
      answer: "Absolutely! We schedule your treatments to ensure full recovery before your wedding. However, we do provide a list of foods and drinks to avoid in the 48 hours post-whitening to maintain your beautiful results."
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "Your satisfaction is our priority. We use digital smile previews to show you expected results beforehand, and all our treatments come with our satisfaction guarantee. We'll work with you until you're absolutely delighted with your wedding smile."
    },
    {
      question: "Do you offer emergency appointments before weddings?",
      answer: "Yes! We understand the importance of your special day and offer priority emergency appointments for soon-to-be-married couples. We'll do everything possible to ensure your smile is perfect for your wedding."
    }
  ];

  const treatmentTimeline = [
    {
      concern: "Yellow or Stained Teeth",
      treatment: "Professional Teeth Whitening",
      timeline: "2-4 weeks before wedding",
      appointments: "1-2 appointments",
      price: getTreatmentPrice("Teeth Whitening"),
      icon: Sparkles,
      description: "Quick and effective, often completed in just one or two appointments. For optimal results, we recommend scheduling your whitening treatment 2-4 weeks before your wedding.",
      difference: "Whilst at-home whitening kits can offer limited and often disappointing results, our professional-grade whitening treatments are safe, effective, and can lighten your teeth by several shades. This is the perfect, quick boost for a brighter, more youthful smile.",
      benefits: ["Several shades brighter", "Safe and professional", "Quick results", "Long-lasting brightness"]
    },
    {
      concern: "Chipped, Cracked, or Uneven Teeth",
      treatment: "Porcelain Veneers or Composite Bonding",
      timeline: "1-2 months for veneers, 1 month for bonding",
      appointments: "Few appointments for veneers, single visit for bonding",
      price: getTreatmentPrice("Porcelain Veneers"),
      icon: Crown,
      description: "Porcelain veneers typically require a few appointments over one to two months. Composite bonding can often be completed in a single visit.",
      difference: "Veneers offer a durable, long-lasting solution to transform your smile's shape, colour, and alignment, creating a stunningly uniform and natural look. Composite bonding is a fantastic and affordable option for repairing minor imperfections.",
      benefits: ["Natural-looking results", "Durable solution", "Uniform appearance", "Immediate transformation"]
    },
    {
      concern: "Gaps or Crooked Teeth",
      treatment: "Invisalign® Clear Aligners",
      timeline: "Around a year, but results visible sooner",
      appointments: "Regular check-ups every 6-8 weeks",
      price: getTreatmentPrice("Invisalign"),
      icon: Eye,
      description: "Whilst the average treatment time is around a year, many patients see significant results much sooner. We recommend a consultation as early as possible.",
      difference: "Invisalign® offers a discreet and comfortable way to straighten your teeth without the look of traditional braces. The clear aligners are virtually invisible and can be removed for eating and special occasions.",
      benefits: ["Virtually invisible", "Removable for special events", "Comfortable treatment", "Perfect for engagement photos"]
    }
  ];

  const weddingPackages = [
    {
      name: "Quick Glow Package",
      price: "From £400",
      timeline: "2-4 weeks",
      ideal: "Last-minute brightness boost",
      treatments: ["Professional teeth whitening", "Polish and clean"],
      description: "Perfect for brides who want a quick, radiant smile enhancement close to their wedding day"
    },
    {
      name: "Bridal Beauty Package",
      price: "From £1,200",
      timeline: "6-8 weeks",
      ideal: "Comprehensive smile enhancement",
      treatments: ["Whitening", "Composite bonding", "Gum contouring", "Professional clean"],
      description: "Our most popular bridal package combining multiple treatments for a stunning smile transformation"
    },
    {
      name: "Complete Bridal Makeover",
      price: "From £3,500",
      timeline: "3-6 months",
      ideal: "Total smile transformation",
      treatments: ["Porcelain veneers", "Whitening", "Gum reshaping", "Bite adjustment"],
      description: "The ultimate bridal smile makeover for those wanting a completely new, perfect smile"
    }
  ];

  const timelineBenefits = [
    {
      icon: CalendarDays,
      title: "Perfectly Timed",
      description: "Treatments scheduled to ensure optimal results and comfort on your wedding day"
    },
    {
      icon: Heart,
      title: "Stress-Free Planning",
      description: "We handle the timeline so you can focus on other wedding preparations"
    },
    {
      icon: Camera,
      title: "Picture Perfect",
      description: "Your smile will look stunning in every photo and video from your special day"
    },
    {
      icon: Diamond,
      title: "Confidence Boost",
      description: "Walk down the aisle knowing your smile is absolutely perfect"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Wedding Day Smile Makeover"
        description="Specialized cosmetic dental treatments for brides and grooms to achieve the perfect smile for their wedding day"
        price="From £400"
        category="Bridal Cosmetic Dentistry"
        duration="2 weeks to 6 months depending on treatment"
        preparation="Wedding timeline consultation, treatment planning, digital smile preview"
        recovery="Minimal downtime with treatments timed for wedding day comfort"
        benefits={[
          "Perfect wedding day smile",
          "Picture-perfect results",
          "Timeline-based treatment planning",
          "Confidence for your special day",
          "Professional photography-ready smile",
          "Lasting results for honeymoon and beyond"
        ]}
        risks={[
          "Temporary sensitivity with whitening",
          "Multiple appointments required for comprehensive treatments",
          "Treatment timeline considerations for wedding planning",
          "Need for maintenance after wedding"
        ]}
        rating={4.9}
        reviewCount={89}
        url="https://peartree.dental/wedding-day-smile"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="Wedding Day Smile"
        faqs={weddingSmileFAQs}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 border-rose-200">
                <Heart className="w-4 h-4 mr-2" />
                Wedding Day Special
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                Your Unforgettable
                <span className="text-rose-600 block">Wedding Smile</span>
                <span className="text-2xl sm:text-3xl text-gray-600 font-normal block mt-2">
                  Starts at Pear Tree Dental
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                As your special day approaches, let your smile be the one thing you don't have to worry about.
                Whilst the cake is ordered and the venue is set, it's your radiant, confident smile that will
                truly shine in every photograph and memory.
              </p>

              {/* Emotional Hook */}
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                <p className="text-rose-800 font-medium italic">
                  "At Pear Tree Dental, we specialise in creating beautiful, natural-looking smiles that will
                  have all eyes on you for all the right reasons."
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium">Picture-perfect results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium">Timeline-based planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium">Quick enhancement options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium">Stress-free process</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold group">
                  Book Your Bridal Consultation
                  <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white">
                  <Camera className="w-5 h-5 mr-2" />
                  View Wedding Smiles
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>500+ happy couples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-pear-gold fill-current" />
                  <span>Perfect day guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-pear-primary" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-rose-100 via-pink-50 to-white p-8 h-96 border-2 border-rose-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-rose-500 text-white">Perfect Wedding Smile</Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="w-4 h-4 text-rose-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Ready for Your Close-Up?</h3>
                  <p className="text-gray-600">
                    Whether you're looking for a quick enhancement or a more comprehensive smile makeover,
                    our skilled and caring dental team offers a range of cosmetic treatments to ensure you
                    look and feel your absolute best.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-rose-200">
                      <div className="font-semibold text-rose-600">2-4 Weeks</div>
                      <div className="text-gray-600">Quick whitening</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-rose-200">
                      <div className="font-semibold text-rose-600">3-6 Months</div>
                      <div className="text-gray-600">Complete makeover</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border border-rose-200">
                <Diamond className="w-6 h-6 text-rose-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-rose-500 rounded-full p-6 shadow-lg">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">500+</div>
                  <div className="text-xs">Happy Couples</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Plan Your Wedding Smile?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your smile will be captured in countless photos and memories that last a lifetime.
              Let us help make it absolutely perfect for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Timeline Section */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              A Timeline for Your Perfect Wedding Smile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your concern, we have a solution to fit your schedule and help you achieve
              your dream smile in time for your wedding day.
            </p>
          </div>

          <div className="space-y-12">
            {treatmentTimeline.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-rose-200">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Treatment Info */}
                    <div className="lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-rose-600 font-medium mb-1">For {treatment.concern}</div>
                            <CardTitle className="text-2xl text-pear-primary mb-2">{treatment.treatment}</CardTitle>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-rose-500" />
                                <span>{treatment.timeline}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <CalendarDays className="w-4 h-4 text-rose-500" />
                                <span>{treatment.appointments}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Crown className="w-4 h-4 text-rose-500" />
                                <span className="font-semibold text-rose-600">{treatment.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-pear-primary mb-2">Treatment Timeline:</h4>
                            <p className="text-gray-600">{treatment.description}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-pear-primary mb-2">The Pear Tree Dental Difference:</h4>
                            <p className="text-gray-600">{treatment.difference}</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    {/* Benefits */}
                    <div className="bg-rose-50 p-6">
                      <h4 className="font-semibold text-pear-primary mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {treatment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-rose-500 hover:bg-rose-600 text-white">
                        Learn More About {treatment.treatment}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Wedding Smile Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your timeline and budget. Each package is designed
              specifically for brides and grooms preparing for their special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <Card key={pkg.name} className={`hover:shadow-lg transition-shadow text-center ${index === 1 ? 'border-2 border-rose-300 scale-105' : 'border border-rose-200'}`}>
                {index === 1 && (
                  <div className="bg-rose-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular for Brides
                  </div>
                )}
                <CardHeader className={index === 1 ? 'pt-6' : 'pt-8'}>
                  <CardTitle className="text-xl text-pear-primary">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-rose-600 mt-2">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.timeline}</div>
                  <Badge variant="outline" className="text-rose-600 border-rose-600 mt-2">
                    {pkg.ideal}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                  <div>
                    <h4 className="font-semibold text-pear-primary mb-2">Included Treatments:</h4>
                    <ul className="space-y-1">
                      {pkg.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full ${index === 1 ? 'bg-rose-500 hover:bg-rose-600' : 'bg-gray-600 hover:bg-gray-700'} text-white`}>
                    Choose This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white overflow-hidden relative">
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Your Journey to "I Do" with a Smile You'll Love
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't let dental imperfections dim your inner radiance on your wedding day.
                Contact Pear Tree Dental today to schedule a consultation with our friendly team.
                We'll discuss your goals, answer all your questions, and create a personalised
                treatment plan to ensure your smile is as beautiful and timeless as your love story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-white/90 font-semibold">
                  <Heart className="w-5 h-5 mr-2" />
                  Book Your Bridal Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </div>

              <div className="text-sm text-white/80 mb-6">
                From £400 • Timeline-based planning • Perfect day guarantee
              </div>

              {/* Wedding-specific trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>500+ Happy Couples</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>Picture-Perfect Results</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Special Day Guarantee</span>
                </div>
              </div>

              {/* Decorative hearts */}
              <div className="absolute top-4 right-4 text-white/20">
                <Heart className="w-16 h-16 fill-current" />
              </div>
              <div className="absolute bottom-4 left-4 text-white/10">
                <Heart className="w-12 h-12 fill-current" />
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
