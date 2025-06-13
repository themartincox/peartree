"use client";

import { useState } from "react";
import Link from "next/link";
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
  ArrowRight,
  CheckCircle,
  Plus,
  Minus
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Before Services */}
        <TestimonialBanner
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          author="Sarah Johnson"
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
        className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-gold/20 h-full ${
          isTeal ? 'bg-gradient-to-br from-white to-dental-green/5' : 'bg-gradient-to-br from-white to-pear-gold/5'
        }`}
      >
        <CardHeader className="pb-4">
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
              className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
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
            <CardTitle className="text-lg sm:text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors cursor-pointer hover:underline">
              {service.title}
            </CardTitle>
          </Link>
          <CardDescription className="text-gray-600 text-sm sm:text-base">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            {/* Treatment List - Hidden on mobile unless expanded, always visible on desktop */}
            <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
              {service.treatments.map((treatment: string) => (
                <div key={treatment} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pear-gold flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{treatment}</span>
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
                    isTeal
                      ? 'bg-gradient-to-r from-dental-green to-soft-blue hover:shadow-lg'
                      : 'bg-gradient-to-r from-pear-gold/70 to-pear-gold hover:shadow-lg'
                  } text-white`}
                  size="sm"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </CardContent>
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
      description: "Comprehensive dental care for your everyday needs. Preventive treatments and routine care to keep your smile healthy.",
      icon: Shield,
      theme: "medical" as const,
      treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
      href: "/services/general"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments. Professional whitening and smile makeovers.",
      icon: Sparkles,
      theme: "cosmetic" as const,
      treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      href: "/services/cosmetic"
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth to optimal health and function with modern techniques. Be proud of your smile again.",
      icon: ShieldCheck,
      theme: "medical" as const,
      treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
      href: "/services/restorative"
    },
    {
      id: "implants",
      title: "Implant Dentistry",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth. We can find the right outcomes for you.",
      icon: Zap,
      theme: "cosmetic" as const,
      treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
      href: "/services/implants"
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: "Straighten your teeth discreetly with modern clear aligner technology. Choose from the market leading options.",
      icon: Smile,
      theme: "cosmetic" as const,
      treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
      href: "/services/orthodontics"
    },
    {
      id: "emergency",
      title: "Emergency Dentistry",
      description: "Urgent dental care when you need it most. Same-day appointments available for dental emergencies.",
      icon: AlertTriangle,
      theme: "medical" as const,
      treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
      href: "/services/emergency"
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
