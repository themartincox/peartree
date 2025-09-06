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
  Users,
  Award,
  Navigation,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Activity,
  TrendingUp,
  Target,
  Timer,
  Crown,
  Zap,
  DollarSign,
  Circle,
  ArrowRight,
  Sparkles,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Looking for a Premium Dentist in The Park? Try Pear Tree Dental",
  description: "Exceptional quality dental care with cutting-edge technology and premium service – just 10 minutes from NG7. Discover why The Park residents are choosing Pear Tree Dental.",
  keywords: [
    "premium dentist The Park",
    "The Park dental alternative",
    "luxury dentist NG7",
    "premium dental care The Park",
    "dental practice near The Park",
    "The Park dentist",
    "upmarket dental NG7"
  ],
  openGraph: {
    title: "Looking for a Premium Dentist in The Park? Try Pear Tree Dental",
    description: "Exceptional quality dental care with cutting-edge technology and premium service – just 10 minutes from NG7.",
    url: "https://peartree.dental/alternatives/the-park"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/the-park"
  }
};

export default function PremiumDentistTheParkOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to traditional dental practices for discerning Park residents?",
      answer: "Many upmarket residents seek practices offering exceptional quality, cutting-edge technology, and premium service standards. Pear Tree Dental delivers these benefits while exceeding the quality expectations valued in The Park."
    },
    {
      question: "Why are Park residents switching to practices outside their immediate area?",
      answer: "Inconsistent service quality, outdated facilities, and practices that don't match upmarket expectations drive residents to seek premium alternatives. Practices like Pear Tree offer exceptional standards with convenient access."
    },
    {
      question: "How do premium dental practices compare to traditional options for Park residents?",
      answer: "Premium practices typically offer state-of-the-art technology, exceptional service standards, exclusive personal attention, and transparent quality pricing. The investment in excellence often provides superior value for discerning patients."
    },
    {
      question: "Is it worth traveling outside The Park for exceptional dental care?",
      answer: "Many Park residents find that a 10-minute drive to a premium practice with exceptional standards actually provides better value than local options that don't match their quality expectations."
    },
    {
      question: "What should discerning Park residents look for in a premium dental practice?",
      answer: "Key factors include cutting-edge technology, exceptional service standards, premium convenience, transparent quality pricing, and exclusive personal attention. Pear Tree Dental specifically addresses these upmarket priorities."
    }
  ];

  const whyResidentsSwitch = [
    {
      reason: "Inconsistent Service Quality",
      oldExperience: "Variable standards, unpredictable service quality, disappointing experiences",
      newSolution: "Consistent premium service excellence with exceptional quality standards",
      impact: "Confidence in every visit meeting high quality expectations",
      icon: Award
    },
    {
      reason: "Outdated Technology Standards",
      oldExperience: "Basic equipment, dated facilities, technology below expectations",
      newSolution: "State-of-the-art technology and cutting-edge premium equipment",
      impact: "Superior treatment outcomes matching upmarket quality expectations",
      icon: Zap
    },
    {
      reason: "Impersonal High-Volume Service",
      oldExperience: "Rushed appointments, no personal relationships, feeling like a number",
      newSolution: "Exclusive personal attention with premium relationship building",
      impact: "Personalized care that matches exclusive lifestyle expectations",
      icon: Heart
    },
    {
      reason: "Scheduling Inflexibility",
      oldExperience: "Rigid appointment times, no professional accommodation, limited access",
      newSolution: "Premium scheduling flexibility with exclusive appointment access",
      impact: "Dental care that accommodates demanding professional schedules",
      icon: Calendar
    },
    {
      reason: "Unclear Premium Value",
      oldExperience: "Hidden costs, unclear pricing, value propositions below expectations",
      newSolution: "Transparent premium pricing with clear exceptional value",
      impact: "Confident investment in quality care with transparent premium pricing",
      icon: DollarSign
    },
    {
      reason: "Standard Convenience Levels",
      oldExperience: "Basic access, limited parking, convenience below upmarket standards",
      newSolution: "Premium convenience with exceptional access and exclusive parking",
      impact: "Hassle-free experience matching upmarket lifestyle expectations",
      icon: Car
    }
  ];

  const premiumAdvantages = [
    {
      advantage: "Premium CEREC Crown Excellence",
      description: "Same-day premium crowns with exceptional aesthetics and precision",
      traditionalAlternative: "Multiple visits, temporary solutions, standard crown materials",
      premiumBenefit: "Exceptional one-visit crowns with superior aesthetics and comfort",
      technology: "State-of-the-art CEREC technology with premium materials and precision"
    },
    {
      advantage: "Cutting-Edge Digital Imaging",
      description: "Advanced digital X-rays with exceptional image quality and safety",
      traditionalAlternative: "Standard X-ray equipment with basic image quality",
      premiumBenefit: "Superior diagnostic capability with exceptional image clarity",
      technology: "Premium digital sensors with advanced imaging software"
    },
    {
      advantage: "Premium Patient Education Technology",
      description: "Advanced intraoral cameras with exceptional visual consultation",
      traditionalAlternative: "Basic examination, limited visual explanation",
      premiumBenefit: "Comprehensive understanding with premium visual consultation",
      technology: "High-definition premium cameras with advanced consultation displays"
    },
    {
      advantage: "Exclusive Service Standards",
      description: "Premium service delivery exceeding upmarket expectations",
      traditionalAlternative: "Standard service levels, basic patient accommodation",
      premiumBenefit: "Exceptional service matching exclusive lifestyle expectations",
      technology: "Premium service protocols with exclusive patient care systems"
    },
    {
      advantage: "Premium Convenience Excellence",
      description: "Exceptional access and parking matching upmarket convenience expectations",
      traditionalAlternative: "Standard parking, basic access, limited convenience",
      premiumBenefit: "Exclusive convenience with premium parking and seamless access",
      technology: "Premium facility design with exclusive convenience features"
    },
    {
      advantage: "Exceptional Treatment Planning",
      description: "Comprehensive premium care planning with transparent quality pricing",
      traditionalAlternative: "Basic planning, standard treatment options, unclear pricing",
      premiumBenefit: "Premium treatment planning with exceptional quality transparency",
      technology: "Advanced planning systems with premium treatment visualization"
    }
  ];

  const premiumJourneyComparison = [
    {
      stage: "Premium Planning",
      traditional: "Basic booking, standard scheduling, limited accommodation",
      modern: "Some premium options, basic convenience",
      peartree: "Exclusive booking with premium scheduling and exceptional accommodation"
    },
    {
      stage: "Premium Journey",
      traditional: "Standard travel, basic parking, limited convenience",
      modern: "Some convenience improvements, variable access",
      peartree: "10-minute premium journey with exclusive parking convenience"
    },
    {
      stage: "Premium Arrival",
      traditional: "Standard reception, basic welcome, limited amenities",
      modern: "Some premium touches, basic comfort",
      peartree: "Exceptional welcome with premium amenities and exclusive comfort"
    },
    {
      stage: "Premium Reception",
      traditional: "Standard check-in, basic processing, limited personalization",
      modern: "Some personal touches, basic recognition",
      peartree: "Exclusive reception with premium personalization and exceptional service"
    },
    {
      stage: "Premium Consultation",
      traditional: "Standard examination, basic technology, limited explanation",
      modern: "Some advanced equipment, basic consultation",
      peartree: "Exceptional consultation with cutting-edge technology and premium explanation"
    },
    {
      stage: "Premium Treatment Planning",
      traditional: "Basic planning, standard options, unclear premium pricing",
      modern: "Some advanced planning, basic transparency",
      peartree: "Exceptional planning with premium options and transparent quality pricing"
    },
    {
      stage: "Premium Treatment Delivery",
      traditional: "Standard treatment, basic materials, multiple visits",
      modern: "Some premium options, reduced visits",
      peartree: "Exceptional treatment with premium materials and exclusive same-day service"
    },
    {
      stage: "Premium Aftercare",
      traditional: "Standard follow-up, basic support, limited accessibility",
      modern: "Some premium follow-up, basic accessibility",
      peartree: "Exceptional aftercare with premium support and exclusive accessibility"
    }
  ];

  const premiumBenefits = [
    {
      benefit: "Exceptional Quality Standards",
      description: "Premium service delivery that exceeds upmarket expectations",
      advantage: "Consistently exceptional experience matching exclusive lifestyle standards",
      details: "Every aspect designed to exceed the quality expectations of discerning patients"
    },
    {
      benefit: "Cutting-Edge Technology Excellence",
      description: "State-of-the-art equipment delivering superior treatment outcomes",
      advantage: "Access to the most advanced dental technology available",
      details: "Premium investment in cutting-edge equipment for exceptional results"
    },
    {
      benefit: "Exclusive Personal Service",
      description: "Premium personal attention with exclusive relationship building",
      advantage: "Personalized care that reflects individual preferences and lifestyle",
      details: "Dedicated premium service team focused on exclusive patient relationships"
    },
    {
      benefit: "Premium Convenience Excellence",
      description: "Exceptional convenience matching upmarket lifestyle expectations",
      advantage: "Seamless experience from booking to aftercare with premium convenience",
      details: "Every convenience designed for discerning patients with demanding schedules"
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the alternatives to traditional dental practices for discerning Park residents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many upmarket residents seek practices offering exceptional quality, cutting-edge technology, and premium service standards. Pear Tree Dental delivers these benefits while exceeding the quality expectations valued in The Park."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Park residents switching to practices outside their immediate area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Inconsistent service quality, outdated facilities, and practices that don't match upmarket expectations drive residents to seek premium alternatives. Practices like Pear Tree offer exceptional standards with convenient access."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-700 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gold-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Alternative for The Park
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Premium Dentist</span> in The Park?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Exceptional Quality Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Exceptional quality, cutting-edge tech, and premium service – just 10 minutes from NG7
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Premium Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">👑 Just 10 minutes from The Park with premium convenience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Residents Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why The Park Residents Are Switching to Premium Dental Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discerning upmarket residents expect exceptional quality in all aspects of life,
                including dental care. Premium alternatives deliver the excellence that matches their standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyResidentsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Experience:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-3">
                          <h4 className="font-semibold text-amber-700 text-sm mb-1">Premium Solution:</h4>
                          <p className="text-sm text-amber-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Premium Impact:</h4>
                          <p className="text-sm text-blue-700">{reason.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Premium Dental Excellence: The Pear Tree Quality Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Exceptional technology and service designed for discerning patients –
                superior results with premium convenience that exceeds upmarket expectations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {premiumAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{advantage.advantage}</h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Method:</h4>
                          <p className="text-sm text-red-700">{advantage.traditionalAlternative}</p>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-3">
                          <h4 className="font-semibold text-amber-700 text-sm mb-1">Premium Benefit:</h4>
                          <p className="text-sm text-amber-700">{advantage.premiumBenefit}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Our Premium Technology:</h4>
                        <p className="text-sm text-blue-700">{advantage.technology}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Premium Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that premium dental excellence makes at every step.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Premium Journey Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Premium</div>
              </div>

              {premiumJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-amber-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Premium Difference:</strong> Every step designed around exceptional quality,
                exclusive service, and premium convenience that exceeds upmarket expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Exceptional Premium Solution for Discerning Park Residents
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Premium dental care that understands and exceeds the quality expectations of upmarket lifestyles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {premiumBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <Crown className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-amber-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-amber-700 text-sm mb-1">Premium Advantage:</h4>
                          <p className="text-sm text-amber-700">{benefit.advantage}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Details:</h4>
                          <p className="text-sm text-blue-700">{benefit.details}</p>
                        </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                Why The Park Residents Choose the Premium Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="Living in The Park, we're accustomed to exceptional quality in everything - from our home to our professional services. When our dental practice started feeling mediocre and inconsistent, we knew we needed to find something that matched our standards. Pear Tree Dental didn't just meet our expectations, it exceeded them completely. The technology is absolutely state-of-the-art, the service is impeccable, and they delivered my crown in a single visit with results that are simply exceptional. At just 10 minutes from The Park, it's become our go-to for dental excellence."
              author="Charles M. from The Park, NG7"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">Exceptional quality</div>
                <p className="text-gray-600">Exceeds upmarket standards</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">State-of-the-art</div>
                <p className="text-gray-600">Cutting-edge technology</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">Premium service</div>
                <p className="text-gray-600">Impeccable attention to detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Premium Dental Excellence Results for The Park Residents
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that exceptional quality and cutting-edge technology make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/the-park-premium-before-case-1.webp"
              afterImage="/images/the-park-premium-after-case-1.webp"
              beforeAlt="Before premium dental care - standard quality treatment"
              afterAlt="After premium dental care - exceptional, natural-looking results"
              title="Premium Dental Excellence"
              description="The Park resident's transformation with exceptional quality care"
              treatmentType="Premium CEREC Crown and Exceptional Quality Care"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Questions About Premium Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from discerning Park residents considering their options
              </p>
            </div>

            <FAQSection faqs={alternativesFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Premium Journey from The Park to Exceptional Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Convenient 10-Minute Premium Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east from The Park towards Nottingham</p>
                    <p>2. Follow A612 through scenic countryside</p>
                    <p>3. Arrive at Burton Joyce</p>
                    <p>4. Premium destination at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Exclusive premium parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <Crown className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h4 className="font-bold text-amber-700 mb-2">Premium Convenience</h4>
                    <p className="text-gray-600">Exceptional access for discerning patients</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/The+Park,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from The Park
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gold-700 to-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Premium Dental Excellence
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what The Park residents are discovering –
              exceptional quality, cutting-edge technology, and premium service just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Premium Alternative to Standard Dental Care
              </p>
              <p className="text-sm opacity-90">
                Exceptional quality • Cutting-edge technology • Premium service • 10 minutes from NG7
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-amber-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Premium Excellence
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Exceptional quality standards</span>
              <span>✓ State-of-the-art technology</span>
              <span>✓ Premium convenience and service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
