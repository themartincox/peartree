import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialBanner from "@/components/TestimonialBanner";
import practiceInfo from "@/data/practiceInfo";

export interface HighlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PackageItem {
  name: string;
  description: string;
  priceLabel?: string;
  duration?: string;
  features: string[];
  icon?: LucideIcon;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TravelInfoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface TestimonialConfig {
  quote: string;
  author: string;
}

export interface CTAConfig {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export interface StructuredDataConfig {
  image: string;
  medicalSpecialty: string;
  priceRange: string;
}

export interface WestBridgfordServiceConfig {
  slug: string;
  serviceName: string;
  serviceCategory: string;
  heroTagline: string;
  heroHeading: string;
  heroDescription: string;
  travelNote: string;
  heroStats: HeroStat[];
  highlights: HighlightItem[];
  premiumBenefits: HighlightItem[];
  packages: PackageItem[];
  process: ProcessStep[];
  travelInfo: TravelInfoItem[];
  testimonial: TestimonialConfig;
  faqs: { question: string; answer: string }[];
  cta: CTAConfig;
  structuredData: StructuredDataConfig;
}

interface WestBridgfordServicePageProps {
  config: WestBridgfordServiceConfig;
}

const formattedPhone = practiceInfo.contact.phone.replace(/\s+/g, "");

function CTAButtons({ cta }: { cta: CTAConfig }) {
  const telHref = `tel:${formattedPhone}`;
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href={cta.primary.href}>
        <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy px-8 py-4 text-lg font-semibold">
          <CalendarDays className="w-5 h-5 mr-2" />
          {cta.primary.label}
        </Button>
      </Link>
      <a href={telHref}>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call {practiceInfo.contact.phone}
        </Button>
      </a>
      {cta.secondary ? (
        <Link href={cta.secondary.href}>
          <Button
            size="lg"
            variant="outline"
            className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4 text-lg font-semibold"
          >
            {cta.secondary.label}
          </Button>
        </Link>
      ) : null}
    </div>
  );
}

export function WestBridgfordServicePage({ config }: WestBridgfordServicePageProps) {
  const {
    slug,
    serviceName,
    serviceCategory,
    heroTagline,
    heroHeading,
    heroDescription,
    travelNote,
    heroStats,
    highlights,
    premiumBenefits,
    packages,
    process,
    travelInfo,
    testimonial,
    faqs,
    cta,
    structuredData,
  } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Pear Tree Dental – ${serviceName} for West Bridgford`,
    image: structuredData.image,
    url: `https://peartree.dental/west-bridgford/${slug}`,
    telephone: practiceInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: practiceInfo.address.street,
      addressLocality: practiceInfo.address.city,
      addressRegion: practiceInfo.address.county,
      postalCode: practiceInfo.address.postcode,
      addressCountry: "GB",
    },
    priceRange: structuredData.priceRange,
    medicalSpecialty: structuredData.medicalSpecialty,
    areaServed: {
      "@type": "Place",
      name: "West Bridgford, Nottingham",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: practiceInfo.address.gps?.latitude ?? 52.9586,
      longitude: practiceInfo.address.gps?.longitude ?? -1.0375,
    },
    availableService: serviceName,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-navy via-pear-background/30 to-white text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative py-20 bg-gradient-to-br from-dental-navy via-pear-primary/20 to-dental-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-12 w-40 h-40 bg-pear-gold/40 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-10 w-52 h-52 bg-dental-green/40 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Badge className="bg-pear-gold/20 text-pear-gold border border-pear-gold/40 px-4 py-2">
                {heroTagline}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
            <div className="bg-white/10 rounded-2xl p-4 inline-flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
              <MapPin className="w-5 h-5 text-pear-gold" />
              <span className="text-gray-100">{travelNote}</span>
            </div>
            {heroStats.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {heroStats.map((stat) => (
                  <Card key={stat.label} className="bg-white/10 border-white/10">
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-pear-gold mb-2">{stat.value}</p>
                      <p className="text-gray-200 uppercase tracking-wide text-xs">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}
            <CTAButtons cta={cta} />
          </div>
        </div>
      </section>

      <section className="py-20 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why West Bridgford Professionals Choose Our {serviceName}
            </h2>
            <p className="text-lg text-gray-600">
              Designed around busy city lifestyles, our {serviceName.toLowerCase()} combines concierge-level service with clinical excellence, ensuring every appointment fits seamlessly around your schedule.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-pear-primary/10 text-pear-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-xl text-dental-navy">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Signature Treatment Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Tailored plans with concierge scheduling, digital smile planning, and wellness-focused aftercare for discerning West Bridgford patients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => {
              const Icon = pkg.icon ?? Shield;
              return (
                <Card key={pkg.name} className="border border-gray-200 shadow-sm hover:border-pear-primary/40 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-pear-primary/10 text-pear-primary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl text-dental-navy">{pkg.name}</CardTitle>
                    <p className="text-sm text-gray-500">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pkg.priceLabel ? <p className="text-2xl font-bold text-pear-primary">{pkg.priceLabel}</p> : null}
                    {pkg.duration ? (
                      <p className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </p>
                    ) : null}
                    <ul className="space-y-2 text-sm text-gray-700">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-pear-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-dental-navy bg-cream/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              A Concierge Experience from Consultation to Aftercare
            </h2>
            <p className="text-lg text-gray-600">
              Your dedicated treatment coordinator manages every detail, from digital planning sessions to discreet follow-up care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {premiumBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border border-gray-200/80 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-pear-primary/10 text-pear-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-dental-navy">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="border border-gray-200 bg-white shadow-sm">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-pear-primary text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-dental-navy">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary">
                Effortless Travel from West Bridgford
              </h2>
              <p className="text-gray-600">
                Concierge-style directions, complimentary parking, and seamless appointment scheduling designed for West Bridgford professionals.
              </p>
              <div className="grid gap-4">
                {travelInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="border border-gray-200">
                      <CardContent className="p-5 flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-pear-primary/10 text-pear-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dental-navy">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            <TestimonialBanner text={testimonial.quote} author={testimonial.author} className="bg-white" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything West Bridgford patients ask about {serviceName.toLowerCase()} at Pear Tree Dental.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-dental-navy">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pear-primary to-dental-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Begin Your {serviceName} Journey?</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Our concierge team will match appointments around your work and travel commitments and coordinate every stage of treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={cta.primary.href}>
              <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                <ArrowRight className="w-5 h-5 mr-2" />
                {cta.primary.label}
              </Button>
            </Link>
            <a href={`tel:${formattedPhone}`}>
              <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call {practiceInfo.contact.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
