"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Sparkles,
  ShieldCheck,
  Zap,
  Smile,
  AlertTriangle,
  ChevronRight,
  CheckCircle,
  Plus,
  Minus,
  ArrowRight
} from "lucide-react";

// TypeScript interfaces
interface Service {
  id: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  theme: "medical" | "cosmetic";
  treatments: string[];
  href: string;
  image?: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cardVariants: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconVariants: any;
}

const ServicesOverview = () => {
  return (
    <section className="pt-[200px] pb-16 bg-white xl:pb-[6px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <ServicesContent />
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, cardVariants, iconVariants }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;
  const isTeal = service.theme === "medical";
  const isMutedGold = service.theme === "cosmetic";

  return (
    <div
      key={service.id}
      className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{ perspective: 1000 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-gold/20 h-full relative overflow-hidden">
        {/* Full Card Background Image */}
        {service.image && (
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={`${service.title} - Professional dental care at Pear Tree Dental`}
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
        )}

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col">
          <CardHeader className="pb-4 flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-200">
              <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                isTeal ? 'text-dental-green' : 'text-pear-gold'
              }`} />
            </div>

            {/* Mobile expand/collapse button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="sm:hidden p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              {isExpanded ? (
                <Minus className="w-5 h-5 text-pear-primary" />
              ) : (
                <Plus className="w-5 h-5 text-pear-primary" />
              )}
            </button>
          </div>

          <Link href={service.href}>
            <CardTitle className="text-lg sm:text-xl font-semibold text-white group-hover:text-pear-gold transition-colors cursor-pointer hover:underline drop-shadow-lg">
              {service.title}
            </CardTitle>
          </Link>
          <CardDescription className="text-white/90 text-sm sm:text-base drop-shadow-md">
            {service.description}
          </CardDescription>
          </CardHeader>

        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            {/* Treatment List - Hidden on mobile unless expanded, always visible on desktop */}
            <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
              {service.treatments.map((treatment: string) => (
                <div key={treatment} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pear-gold flex-shrink-0 drop-shadow-md" />
                  <span className="text-xs sm:text-sm text-white/90 drop-shadow-md">{treatment}</span>
                </div>
              ))}
            </div>

            {/* CTA - Always visible */}
            <Link href={service.href}>
              <div className="hover:scale-105 transition-transform duration-200">
                <Button
                  className="w-full group/btn text-sm bg-white/90 hover:bg-white text-pear-primary hover:text-pear-gold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                  size="sm"
                >
                  Explore {service.title}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </Link>
          </div>
        </CardContent>
        </div>
      </Card>
    </div>
  );
};

const ServicesContent = () => {
  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateY: -10
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hidden: {
      rotate: -15,
      opacity: 0
    },
    visible: (index: number) => ({
      rotate: [15, -8, 0],
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: (index * 0.1) + 0.2,
        ease: "easeOut",
        rotate: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    })
  };

  const services: Service[] = [
    {
      id: "general",
      title: "General Dentistry",
      description: "Comprehensive dental care for your daily life. Preventive treatments and routine care to keep your smile healthy.",
      icon: Shield,
      theme: "medical" as const,
      treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
      href: "/services/general",
      image: "/images/general-dental-checkup.webp"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments. Professional whitening and smile makeovers.",
      icon: Sparkles,
      theme: "cosmetic" as const,
      treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      href: "/services/cosmetic",
      image: "/images/cosmetic-dentistry-services.webp"
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth to optimal health and function with modern techniques. Be proud of your smile again.",
      icon: ShieldCheck,
      theme: "medical" as const,
      treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
      href: "/services/restorative",
      image: "/images/restorative-dental-treatment.webp"
    },
    {
      id: "implants",
      title: "Implant Dentistry",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth. We can find the right outcomes for you.",
      icon: Zap,
      theme: "cosmetic" as const,
      treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
      href: "/services/implants",
      image: "/images/dental-implants-procedure.webp"
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: "Straighten your teeth discreetly with modern clear aligner technology. Choose from the market leading options.",
      icon: Smile,
      theme: "cosmetic" as const,
      treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
      href: "/services/orthodontics",
      image: "/images/orthodontics-invisalign-treatment.webp"
    },
    {
      id: "emergency",
      title: "Emergency Dentistry",
      description: "Urgent dental care when you need it most. Same-day appointments available for dental emergencies.",
      icon: AlertTriangle,
      theme: "medical" as const,
      treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
      href: "/services/emergency",
      image: "/images/emergency-dental-care.webp"
    }
  ];

  return (
    <>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
          Comprehensive Dental Care
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From routine check-ups to advanced cosmetic treatments, we provide complete dental care
          using the latest technology and techniques. All treatments available with our membership plans.
        </p>
      </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Top Row: Cosmetic, General, Restorative */}
          {[services[1], services[0], services[2]].map((service: Service, index: number) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              cardVariants={cardVariants}
              iconVariants={iconVariants}
            />
          ))}

          {/* Bottom Row: Implants, Orthodontics, Emergency */}
          {[services[3], services[4], services[5]].map((service: Service, index: number) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index + 3} // Offset for bottom row animation
              cardVariants={cardVariants}
              iconVariants={iconVariants}
            />
          ))}
        </div>

        {/* Simple CTA */}
        <div className="flex justify-center">
          <Link href="/book">
            <div className="hover:scale-105 transition-transform duration-200">
              <Button size="lg" className="bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white font-semibold">
                Book Now
              </Button>
            </div>
          </Link>
        </div>

    </>
  );
};

export default ServicesOverview;
