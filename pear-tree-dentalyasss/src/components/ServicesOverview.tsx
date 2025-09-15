"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Plus,
  Minus,
  ArrowRight,
  Shield,
  Sparkles,
  ShieldCheck,
  Zap,
  Smile,
  AlertTriangle,
} from "lucide-react";

// TypeScript interfaces
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  theme: "medical" | "cosmetic";
  treatments: string[];
  href: string;
  image?: string;
  slug: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  cardVariants: any;
  iconVariants: any;
}

interface ServicesOverviewProps {
  services: Service[];
}

const IconRenderer = ({ iconName, className }: { iconName: string; className: string }) => {
  switch (iconName) {
    case "Shield":
      return <Shield className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "AlertTriangle":
      return <AlertTriangle className={className} />;
    default:
      return <Shield className={className} />;
  }
};

const ServicesOverview = ({ services }: ServicesOverviewProps) => {
  return (
    <section className="pt-[200px] pb-16 bg-white xl:pb-[6px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesContent services={services} />
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, cardVariants, iconVariants }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTeal = service.theme === "medical";

  return (
    <div
      key={service.id}
      className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{ perspective: 1000 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-gold/20 h-full relative overflow-hidden">
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
          <CardHeader className="pb-4 flex-grow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-200">
                <IconRenderer iconName={service.icon} className={`w-6 h-6 sm:w-7 sm:h-7 ${isTeal ? 'text-dental-green' : 'text-pear-gold'}`} />
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="sm:hidden p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? <Minus className="w-5 h-5 text-pear-primary" /> : <Plus className="w-5 h-5 text-pear-primary" />}
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
              <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                {service.treatments.map((treatment: string) => (
                  <div key={treatment} className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pear-gold flex-shrink-0 drop-shadow-md" />
                    <span className="text-xs sm:text-sm text-white/90 drop-shadow-md">{treatment}</span>
                  </div>
                ))}
              </div>
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

const ServicesContent = ({ services }: ServicesOverviewProps) => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20, rotateY: -10 }, visible: (index: number) => ({ opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } }) };
  const iconVariants = { hidden: { rotate: -15, opacity: 0 }, visible: (index: number) => ({ rotate: [15, -8, 0], opacity: 1, transition: { duration: 0.8, delay: (index * 0.1) + 0.2, ease: "easeOut", rotate: { duration: 0.8, ease: "easeOut" } } }) };

  // Helper to find a service by its slug
  const findService = (slug: string) => services.find(s => s.slug === slug);

  // Recreate the display order based on the fetched services
  const cosmetic = findService('cosmetic-dentistry');
  const general = findService('general-dentistry');
  const restorative = findService('restorative-dentistry');
  const implants = findService('dental-implants');
  const orthodontics = findService('orthodontics');
  const emergency = findService('emergency-dentistry');

  const topRowServices = [cosmetic, general, restorative].filter(Boolean) as Service[];
  const bottomRowServices = [implants, orthodontics, emergency].filter(Boolean) as Service[];


  return (
    <>
      <div className="text-center mb-12">
        <h2 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
          Comprehensive Dental Care
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From routine check-ups to advanced cosmetic treatments, we provide complete dental care
          using the latest technology and techniques. All treatments available with our membership plans.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {topRowServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            cardVariants={cardVariants}
            iconVariants={iconVariants}
          />
        ))}
        {bottomRowServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index + 3}
            cardVariants={cardVariants}
            iconVariants={iconVariants}
          />
        ))}
      </div>

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
