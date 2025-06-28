"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import { motion } from "framer-motion";
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
  imageAlt?: string;
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
    <section className="py-16 bg-white xl:py-[6px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Before Services */}
        <TestimonialBanner
          text="Javaad is an absolutely lovely chap and a truly skilled Dentist. No one wants a tooth extraction, but if I'm having one done, it's him I want on the business end. Cheers chap."
          author="Ian P"
          className="max-w-4xl mx-auto mb-16"
        />

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
    <motion.div
      key={service.id}
      custom={index}
      variants={cardVariants}
      whileHover={{
        rotateY: index === 0 ? -3 : index === 1 ? 0 : 3,
        rotateX: -2,
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <Card
        className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-gold/20 h-full relative overflow-hidden ${
          service.image
            ? 'bg-black' // Black background for image cards
            : isTeal
              ? 'bg-gradient-to-br from-white to-dental-green/5'
              : 'bg-gradient-to-br from-white to-pear-gold/5'
        }`}
      >
        {/* Full Card Background Image */}
        {service.image && (
          <>
            <Image
              src={service.image}
              alt={service.imageAlt || `${service.title} service`}
              fill
              className="object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              quality={85}
              priority={index < 2}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              loading={index < 2 ? "eager" : "lazy"}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
          </>
        )}

        {/* Content Container - positioned over image */}
        <div className="relative z-10 h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            {/* Icon and Expand Button Row */}
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                  isTeal ? 'bg-gradient-to-br from-dental-green to-soft-blue' : 'bg-gradient-to-br from-pear-gold/70 to-pear-gold'
                }`}
                custom={index}
                variants={iconVariants}
                whileHover={{
                  rotate: 5,
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>

              {/* Mobile expand/collapse button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`sm:hidden p-2 rounded-full transition-colors ${
                  service.image
                    ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                    : 'hover:bg-gray-100'
                }`}
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? (
                  <Minus className={`w-5 h-5 ${service.image ? 'text-white' : 'text-pear-primary'}`} />
                ) : (
                  <Plus className={`w-5 h-5 ${service.image ? 'text-white' : 'text-pear-primary'}`} />
                )}
              </button>
            </div>

            <Link href={service.href}>
              <CardTitle className={`text-lg sm:text-xl font-semibold group-hover:text-pear-gold transition-colors cursor-pointer hover:underline ${
                service.image ? 'text-white' : 'text-pear-primary'
              }`}>
                {service.title}
              </CardTitle>
            </Link>
            <CardDescription className={`text-sm sm:text-base ${
              service.image ? 'text-white/90' : 'text-gray-600'
            }`}>
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col justify-end">
            <div className="space-y-4 sm:space-y-6">
              {/* Treatment List - Hidden on mobile unless expanded, always visible on desktop */}
              <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                {service.treatments.map((treatment: string) => (
                  <div key={treatment} className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pear-gold flex-shrink-0" />
                    <span className={`text-xs sm:text-sm ${
                      service.image ? 'text-white/90' : 'text-gray-700'
                    }`}>{treatment}</span>
                  </div>
                ))}
              </div>

              {/* CTA - Always visible */}
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full group/btn text-sm ${
                      service.image
                        ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 hover:border-white/50'
                        : isTeal
                          ? 'bg-gradient-to-r from-dental-green to-soft-blue hover:shadow-lg text-white'
                          : 'bg-gradient-to-r from-pear-gold/70 to-pear-gold hover:shadow-lg text-white'
                    }`}
                    size="sm"
                  >
                    Learn About {service.title}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
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
      image: "/images/general-dentistry.webp",
      imageAlt: "Professional dental examination showing comprehensive general dentistry care"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments. Professional whitening and smile makeovers.",
      icon: Sparkles,
      theme: "cosmetic" as const,
      treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      href: "/services/cosmetic",
      image: "/images/cosmetic-dentistry.webp",
      imageAlt: "Beautiful woman showing perfect white teeth after cosmetic dentistry treatment"
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth to optimal health and function with modern techniques. Be proud of your smile again.",
      icon: ShieldCheck,
      theme: "medical" as const,
      treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
      href: "/services/restorative",
      image: "/images/restorative-dentistry.webp",
      imageAlt: "Dental restoration work showing crowns and bridges for optimal tooth function"
    },
    {
      id: "implants",
      title: "Implant Dentistry",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth. We can find the right outcomes for you.",
      icon: Zap,
      theme: "cosmetic" as const,
      treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
      href: "/services/implants",
      image: "/images/implant-dentistry.webp",
      imageAlt: "Confident mature man smiling showing successful dental implant results"
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: "Straighten your teeth discreetly with modern clear aligner technology. Choose from the market leading options.",
      icon: Smile,
      theme: "cosmetic" as const,
      treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
      href: "/services/orthodontics",
      image: "/images/orthodontics.webp",
      imageAlt: "Young woman with perfectly straight teeth showcasing orthodontic treatment results"
    },
    {
      id: "emergency",
      title: "Emergency Dentistry",
      description: "Urgent dental care when you need it most. Same-day appointments available for dental emergencies.",
      icon: AlertTriangle,
      theme: "medical" as const,
      treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
      href: "/services/emergency",
      image: "/images/emergency-dentistry.webp",
      imageAlt: "Emergency dental care providing immediate pain relief and urgent treatment"
    }
  ];

  return (
    <>
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive Dental Care
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From routine check-ups to advanced cosmetic treatments, we provide complete dental care
          using the latest technology and techniques. All treatments available with our membership plans.
        </motion.p>
      </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
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
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/services/general">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(9, 57, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white font-semibold">
                Book Now
              </Button>
            </motion.div>
          </Link>
        </motion.div>

    </>
  );
};

export default ServicesOverview;
