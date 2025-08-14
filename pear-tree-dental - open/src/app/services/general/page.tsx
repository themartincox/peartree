import {
  ArrowRight,
  Award,
  Baby,
  CalendarDays,
  CheckCircle,
  Clock,
  Heart,
  Phone,
  Shield,
  Stethoscope,
  UserCheck, 
  Users
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema, { commonDentalFAQs } from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "General Dentistry Burton Joyce | NHS & Private Care | Pear Tree Dental",
  description: "Comprehensive general dentistry in Burton Joyce. Check-ups, cleanings, fillings, extractions. NHS and private options. Book your dental appointment today.",
  keywords: [
    "general dentistry Burton Joyce",
    "dental check-up Nottinghamshire",
    "NHS dentist Burton Joyce",
    "dental cleaning Nottingham",
    "tooth fillings Burton Joyce",
    "dental extractions Burton Joyce",
    "family dentist Nottinghamshire",
    "preventive dental care Nottingham"
  ],
  openGraph: {
    title: "General Dentistry | Pear Tree Dental",
    description: "Comprehensive dental care for the whole family in Burton Joyce",
    type: "website",
    url: "https://peartree.dental/services/general"
  },
  alternates: {
    canonical: "https://peartree.dental/services/general"
  }
};

export default function GeneralDentistryPage() {
  const generalDentistryFAQs = [
    {
      question: "What's included in a dental check-up?",
      answer: "A comprehensive dental check-up includes oral examination, digital X-rays when needed, oral cancer screening, gum health assessment, and personalized treatment planning. We also provide oral hygiene advice and preventive care recommendations."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend dental check-ups every 6 months for most patients. However, some patients may need more frequent visits based on their oral health needs. We'll create a personalized schedule that's right for you."
    },
    {
      question: "Do you accept NHS patients?",
      answer: "Yes, we accept both NHS and private patients. NHS treatment is available at standard NHS rates: Band 1 (£25.80), Band 2 (£70.70), Band 3 (£306.80). Private care offers additional options and flexible scheduling."
    },
    {
      question: "What's the difference between NHS and private treatment?",
      answer: "NHS treatment covers essential dental care at fixed prices. Private treatment offers extended appointment times, premium materials, cosmetic options, and more flexible scheduling. Both receive the same high standard of care."
    },
    {
      question: "Do you offer emergency appointments?",
      answer: "Yes, we provide same-day emergency appointments for urgent dental problems including severe pain, dental trauma, and lost fillings. Emergency slots are available during practice hours."
    },
    commonDentalFAQs.insurance
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="General Dentistry"
        description="Comprehensive general dentistry services including routine check-ups, cleanings, fillings, extractions, and preventive care for all ages"
        price="From £25 (NHS) / From £65 (Private)"
        category="General & Preventive Dentistry"
        duration="30-60 minutes per appointment"
        preparation="No special preparation required for routine check-ups"
        recovery="No recovery time needed for check-ups and cleanings"
        benefits={([
          "Early problem detection",
          "Prevent serious dental issues",
          "Maintain oral health",
          "NHS and private options",
          "Family-friendly care"
        ]}
        risks={([
          "Minimal risks for routine care",
          "Slight sensitivity after cleaning",
          "Very rare allergic reactions to materials"
        ]}
        rating={4.8}
        reviewCount={425}
        url="https://peartree.dental/services/general"
        procedureType="Service"
      />

      <ServiceFAQSchema
        serviceName="General Dentistry"
        faqs={generalDentistryFAQs}
        pageUrl="/services/general"
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 bg-gradient-to-br from-dental-green/10 via-white to-soft-blue/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-dental-green rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-soft-blue rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile-first content order: Title → Image → Badge → Text → Benefits → CTAs */}
            <div className="space-y-8 order-1 lg:order-1">
              {/* H1 Title - First on mobile for immediate page identification */}
              <h1 className="heading-serif text-[40px] sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-4 sm:mb-6">
                Complete
                <span className="block text-dental-green">General Dentistry</span>
              </h1>

              {/* Hero Image - Second on mobile, appears above other content */}
              <div className="relative mt-8 lg:mt-0 lg:hidden">
                <Card className="overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-base sm:text-xl font-bold text-gray-700 mb-2">GENERAL DENTISTRY IMAGE</h3>
                      <p className="text-gray-600 text-xs sm:text-base">Family receiving dental check-ups</p>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-dental-green/20">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dental-green rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-pear-primary text-sm sm:text-base">Family Care</p>
                      <p className="text-xs sm:text-sm text-gray-600">All Ages Welcome</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge - Third on mobile, provides context */}
              <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                <Heart className="w-4 h-4 mr-2" />
                Comprehensive Dental Care
              </Badge>

              {/* Description - Fourth on mobile */}
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Comprehensive dental care for all ages. From routine check-ups to preventive treatments,
                we provide the foundation for lifelong oral health in a comfortable, caring environment.
              </p>

              {/* CTAs - Fifth on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold group w-full sm:w-auto">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Check-up
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              {/* Quick Stats - Last on mobile */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-dental-green">NHS</div>
                  <div className="text-xs sm:text-sm text-gray-600">& Private care</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-dental-green">All Ages</div>
                  <div className="text-xs sm:text-sm text-gray-600">Family friendly</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-dental-green">Priority</div>
                  <div className="text-xs sm:text-sm text-gray-600">Appointments</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Desktop only (hidden on mobile since it appears inline above) */}
            <div className="relative mt-8 lg:mt-0 order-2 lg:order-2 hidden lg:block">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-base sm:text-xl font-bold text-gray-700 mb-2">GENERAL DENTISTRY IMAGE</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Family receiving dental check-ups</p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-dental-green/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dental-green rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary text-sm sm:text-base">Family Care</p>
                    <p className="text-xs sm:text-sm text-gray-600">All Ages Welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Essential Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care covering all aspects of your oral health and wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {([
              {
                title: "Dental Check-ups",
                description: "Comprehensive examinations to detect issues early",
                features: ["Full oral examination", "Digital X-rays", "Oral cancer screening", "Treatment planning"],
                price: "From £60",
                icon: Stethoscope
              },
              {
                title: "Scale & Polish",
                description: "Professional cleaning to remove plaque and tartar",
                features: ["Plaque removal", "Tartar cleaning", "Stain removal", "Fluoride treatment"],
                price: "From £65",
                icon: Shield
              },
              {
                title: "Fillings",
                description: "White composite and amalgam fillings for cavities",
                features: ["Tooth-colored fillings", "Pain-free treatment", "Same-day completion", "Natural appearance"],
                price: "From £150",
                icon: Heart
              },
              {
                title: "Children's Dentistry",
                description: "Gentle, specialised care for young patients",
                features: ["Fissure sealants", "Fluoride treatments", "Gentle techniques", "Education & prevention"],
                price: "From £35",
                icon: Baby
              },
              {
                title: "Oral Health Education",
                description: "Learn proper techniques for optimal oral hygiene",
                features: ["Brushing technique", "Flossing guidance", "Diet advice", "Preventive care"],
                price: "Included",
                icon: UserCheck
              },
              {
                title: "Gum Disease Treatment",
                description: "Treatment and management of periodontal conditions",
                features: ["Deep cleaning", "Root planing", "Maintenance therapy", "Monitoring"],
                price: "From £150",
                icon: Users
              }
            ] || []).map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-to-br from-dental-green/5 to-dental-green/10 border-2 border-dental-green/20 hover:border-dental-green hover:shadow-xl hover:shadow-dental-green/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-dental-green to-dental-green/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-pear-primary group-hover:text-pear-primary/80 transition-colors duration-300">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    <ul className="space-y-1">
                      {(service.features || []).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-dental-green/20 group-hover:border-dental-green/40 transition-colors duration-300">
                      <div className="text-pear-primary font-semibold text-lg group-hover:scale-105 transition-transform duration-300">{service.price}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preventive Care Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Prevention is Better Than Cure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our focus on preventive care helps you avoid complex dental problems, saving you time,
                discomfort, and money in the long run.
              </p>

              <div className="space-y-6">
                {([
                  {
                    icon: Shield,
                    title: "Early Detection",
                    description: "Regular check-ups allow us to spot problems before they become serious, painful, or expensive to treat."
                  },
                  {
                    icon: UserCheck,
                    title: "Patient Education",
                    description: "We teach you proper oral hygiene techniques and provide personalized advice for your specific needs."
                  },
                  {
                    icon: Heart,
                    title: "Whole Health Connection",
                    description: "Good oral health is linked to overall health. We help protect your general wellbeing too."
                  }
                ] || []).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-dental-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-[4/3]">
                  <img
                    src="/images/treatment-journey/treatment.webp"
                    alt="Dental hygienist providing preventive treatment"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Book Your Check-up Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Regular dental check-ups are the foundation of good oral health.
              Book your appointment today and take the first step toward a healthier smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />Book Appointment
                </Button>
              </Link>
              <Link href="/book">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Family-friendly practice</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>NHS & private care</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Convenient appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
