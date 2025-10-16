import { practiceInfo } from "@/data/practiceInfo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Sparkles,
  Zap,
  Smile,
  AlertCircle,
  CalendarDays,
  Phone,
  ArrowRight,
  Crown,
  CheckCircle,
  Clock,
  Users,
  Star
} from "lucide-react";

// Data fetching and types
import { fetchAllServices } from "@/lib/contentful-client";
import type { ServiceEntry } from "@/types/contentful";

export const metadata: Metadata = {
  title: "Dental Services in Nottingham | Pear Tree Dental",
  description: "Comprehensive dental services in Nottingham including cosmetic, orthodontics, implants, and general dentistry. High-quality care from experienced Nottingham dentists.",
  keywords: "dental services Nottingham, dentist Nottingham, cosmetic dentistry Nottingham, dental implants Nottingham, orthodontics Nottingham, emergency dentist Nottingham, general dentistry, restorative dentistry, Nottingham",
  openGraph: {
    title: "Dental Services in Nottingham | Pear Tree Dental",
    description: "From routine check-ups to smile makeovers, discover our comprehensive dental services in Nottingham designed to keep your smile healthy and beautiful.",
    type: "website",
    url: "https://peartree.dental/services"
  },
  alternates: {
    canonical: "https://peartree.dental/services"
  }
};

type ServiceDecoration = {
  slug: string;
  contentfulSlug?: string;
  label: string;
  description: string;
  href: string;
  icon: typeof Heart;
  color: string;
  features: string[];
  image: string;
  isCore: boolean;
  featured?: boolean;
};

const serviceDecorations: ServiceDecoration[] = [
  {
    slug: "general",
    contentfulSlug: "general-dentistry",
    label: "General Dentistry",
    description:
      "Keep your smile healthy with routine examinations, hygiene visits, and preventive care tailored to your needs.",
    href: "/services/general",
    icon: Heart,
    color: "dental-green",
    features: ["Regular Check-ups", "Professional Cleaning", "Fluoride Treatments", "Oral Health Advice"],
    image: "/images/general-dental-checkup.webp",
    isCore: true,
  },
  {
    slug: "restorative",
    contentfulSlug: "restorative-dentistry",
    label: "Restorative Dentistry",
    description:
      "Repair or replace damaged teeth with lifelike crowns, bridges, dentures, and advanced restorative treatments.",
    href: "/services/restorative",
    icon: Shield,
    color: "dental-green",
    features: ["Fillings", "Crowns & Bridges", "Root Canal Treatment", "Dentures"],
    image: "/images/restorative-dental-treatment.webp",
    isCore: true,
  },
  {
    slug: "cosmetic",
    contentfulSlug: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    description:
      "Design the smile you love with whitening, veneers, bonding, and bespoke makeover plans.",
    href: "/services/cosmetic",
    icon: Sparkles,
    color: "soft-pink",
    features: ["Teeth Whitening", "Porcelain Veneers", "Composite Bonding", "Smile Makeovers"],
    image: "/images/cosmetic-dentistry-services.webp",
    isCore: false,
  },
  {
    slug: "implants",
    contentfulSlug: "dental-implants",
    label: "Dental Implants",
    description:
      "Permanent tooth replacement solutions ranging from single implants to full-arch restorations.",
    href: "/services/implants",
    icon: Crown,
    color: "soft-pink",
    features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Implant-Supported Dentures"],
    image: "/images/dental-implants-procedure.webp",
    isCore: false,
  },
  {
    slug: "orthodontics",
    contentfulSlug: "orthodontics",
    label: "Orthodontics",
    description:
      "Straighten teeth discreetly with Invisalign, ClearCorrect, or specialist orthodontic options.",
    href: "/services/orthodontics",
    icon: Smile,
    color: "soft-pink",
    features: ["Invisalign", "ClearCorrect", "Traditional Braces", "Retainers"],
    image: "/images/orthodontics-invisalign-treatment.webp",
    isCore: false,
  },
  {
    slug: "emergency",
    contentfulSlug: "emergency-dentistry",
    label: "Emergency Dentistry",
    description:
      "Rapid relief for toothache, trauma, broken teeth, and urgent dental problems in Nottingham.",
    href: "/services/emergency",
    icon: AlertCircle,
    color: "red-500",
    features: ["Pain Relief", "Urgent Repairs", "Same-Day Appointments", "Out-of-Hours Care"],
    image: "/images/emergency-dental-care.webp",
    isCore: true,
  },
];

const ServicesPage = async () => {
  const fetchedServices = await fetchAllServices();

  const decorationMap = new Map(
    serviceDecorations.map((decoration) => [decoration.contentfulSlug ?? decoration.slug, decoration]),
  );

  const servicesFromCms = fetchedServices.map((service: ServiceEntry) => {
    const contentfulSlug = service.fields.slug;
    const decoration = decorationMap.get(contentfulSlug);
    const routeSlug = decoration?.slug ?? contentfulSlug;

    return {
      id: service.sys.id,
      slug: routeSlug,
      title: service.fields.serviceName || decoration?.label || "",
      description: service.fields.description || decoration?.description || '',
      href: decoration?.href || `/services/${contentfulSlug}`,
      icon: decoration?.icon || Heart,
      color: decoration?.color || "dental-green",
      features: decoration?.features || [],
      image: decoration?.image || '',
      isCore: decoration?.isCore ?? false,
      featured: decoration?.featured ?? false,
      originalSlug: contentfulSlug,
    };
  });

  const cmsBySlug = new Map(servicesFromCms.map((service) => [service.slug, service]));

  const decoratedServices = serviceDecorations.map((decoration) => {
    const cmsService = cmsBySlug.get(decoration.slug);
    if (cmsService) {
      const { originalSlug: _originalSlug, ...rest } = cmsService;
      return rest;
    }

    return {
      id: decoration.slug,
      slug: decoration.slug,
      title: decoration.label,
      description: decoration.description,
      href: decoration.href,
      icon: decoration.icon,
      color: decoration.color,
      features: decoration.features,
      image: decoration.image,
      isCore: decoration.isCore,
      featured: decoration.featured ?? false,
    };
  });

  const additionalServices = servicesFromCms
    .filter((service) => !decorationMap.has(service.originalSlug))
    .map(({ originalSlug: _originalSlug, ...service }) => service);
  const services = [...decoratedServices, ...additionalServices];

  const coreServices = services.filter((service) => service.isCore);
  const cosmeticServices = services.filter((service) => !service.isCore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pear-primary via-pear-primary/95 to-pear-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pear-gold/20 rounded-full translate-y-32 -translate-x-32" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Heart className="w-4 h-4 mr-2" />
              Complete Dental Care
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Dental Services
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              From routine care to smile transformations, we offer the full spectrum of dental treatments
              for patients across Nottingham in our state-of-the-art practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold px-8 py-4">
                <Link href="/contact">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-[#f20202] text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4">
                <Link href="/urgent-dental-pain">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Care
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Core Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Foundation treatments that keep your oral health in optimal condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-dental-green/20 bg-white/80 backdrop-blur-sm h-full relative overflow-hidden">
                  {service.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Professional dental care at Pear Tree Dental`}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg">
                          <ServiceIcon
                            className={`w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-200 ${
                              service.color === 'red-500'
                                ? 'text-red-500'
                                : service.color === 'dental-green'
                                  ? 'text-dental-green'
                                  : 'text-soft-pink'
                            }`}
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-pear-gold transition-colors drop-shadow-lg">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
                      <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0 drop-shadow-md" />
                            <span className="text-sm text-white/90 drop-shadow-md">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="w-full bg-white/90 hover:bg-white text-pear-primary hover:text-pear-gold transition-colors backdrop-blur-sm shadow-lg">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cosmetic Services Section */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Cosmetic & Specialty Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced treatments to transform your smile and boost your confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cosmeticServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-soft-pink/20 bg-white/80 backdrop-blur-sm h-full relative overflow-hidden">
                  {service.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Professional dental care at Pear Tree Dental`}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg">
                          <ServiceIcon className="w-6 h-6 text-soft-pink opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-pear-gold transition-colors drop-shadow-lg">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
                      <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0 drop-shadow-md" />
                            <span className="text-sm text-white/90 drop-shadow-md">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="w-full bg-white/90 hover:bg-white text-pear-primary hover:text-pear-gold transition-colors backdrop-blur-sm shadow-lg">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
                Why Choose Pear Tree Dental?
              </h2>
              <p className="text-lg text-gray-600">
                Experience the difference of comprehensive, patient-centered dental care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about/team" className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-pear-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:bg-pear-gold/90 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-pear-gold transition-colors">Expert Team</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Experienced dental professionals committed to excellence</p>
              </Link>

              <Link href="/about/practice" className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-dental-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:bg-dental-green/90 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-dental-green transition-colors">Modern Technology</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">State-of-the-art equipment for optimal treatment outcomes</p>
              </Link>

              <Link href="/contact" className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-soft-pink rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:bg-soft-pink/90 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-soft-pink transition-colors">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Convenient appointment times to fit your busy lifestyle</p>
              </Link>

              <a
                href="https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-pear-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:bg-pear-primary/90 transition-all duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-pear-primary/80 transition-colors">5-Star Care</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Consistently rated excellent by our satisfied patients</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pear-primary via-pear-primary/95 to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Dental Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards optimal oral health and a confident smile.
              Our team is here to provide personalised care tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold px-8 py-4">
                <Link href="/book">
                  <CalendarDays className="w-5 h-5 mr-2" />Book Your Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-[#e5b03e] text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4">
                <Link href="/membership">
                  <Crown className="w-5 h-5 mr-2" />Explore Memberships
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{practiceInfo.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Emergency care available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Same-day appointments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
