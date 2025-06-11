"use client";

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
  CheckCircle
} from "lucide-react";

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

  const services = [
    {
      id: "general",
      title: "General Dentistry",
      description: "Comprehensive dental care for your everyday needs. Preventive treatments and routine care to keep your smile healthy.",
      icon: Shield,
      theme: "medical",
      treatments: ["Check-ups & Cleaning", "Fillings", "Extractions", "Root Canal"],
      price: "From £45",
      href: "/services/general"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments. Professional whitening and smile makeovers.",
      icon: Sparkles,
      theme: "cosmetic",
      treatments: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      price: "From £350",
      href: "/services/cosmetic"
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth to optimal health and function with modern techniques. Be proud of your smile again.",
      icon: ShieldCheck,
      theme: "medical",
      treatments: ["Crowns", "Bridges", "Dentures", "Inlays & Onlays"],
      price: "From £450",
      href: "/services/restorative"
    },
    {
      id: "implants",
      title: "Implant Dentistry",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth. We can find the right outcomes for you.",
      icon: Zap,
      theme: "cosmetic",
      treatments: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Bridges"],
      price: "From £2,500",
      href: "/services/implants"
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: "Straighten your teeth discreetly with modern clear aligner technology. Choose from the market leading options.",
      icon: Smile,
      theme: "cosmetic",
      treatments: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic Consultation"],
      price: "From £2,800",
      href: "/services/orthodontics"
    },
    {
      id: "emergency",
      title: "Emergency Dentistry",
      description: "Urgent dental care when you need it most. Same-day appointments available for dental emergencies.",
      icon: AlertTriangle,
      theme: "medical",
      treatments: ["Dental Pain Relief", "Emergency Repairs", "Trauma Treatment", "Out-of-hours Care"],
      price: "From £85",
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
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top Row: Cosmetic, General, Restorative */}
          {[services[1], services[0], services[2]].map((service, index) => {
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
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
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
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  <Link href={service.href}>
                    <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors cursor-pointer hover:underline">
                      {service.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Treatment List */}
                    <div className="space-y-2">
                      {service.treatments.map((treatment) => (
                        <div key={treatment} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                          <span className="text-sm text-gray-700">{treatment}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={service.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full group/btn ${
                            isTeal
                              ? 'bg-gradient-to-r from-dental-green to-soft-blue hover:shadow-lg'
                              : 'bg-gradient-to-r from-pear-gold/70 to-pear-gold hover:shadow-lg'
                          } text-white`}
                          size="sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}

          {/* Bottom Row: Implants, Orthodontics, Emergency */}
          {[services[3], services[4], services[5]].map((service, index) => {
            const Icon = service.icon;
            const isTeal = service.id === "emergency";
            const isMutedGold = service.id === "implants" || service.id === "orthodontics";
            const bottomRowIndex = index + 3; // Offset for bottom row

            return (
              <motion.div
                key={service.id}
                custom={bottomRowIndex}
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
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                          isTeal ? 'bg-gradient-to-br from-dental-green to-soft-blue' : 'bg-gradient-to-br from-pear-gold/70 to-pear-gold'
                        }`}
                        custom={bottomRowIndex}
                        variants={iconVariants}
                        whileHover={{
                          rotate: 5,
                          scale: 1.05,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  <Link href={service.href}>
                    <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors cursor-pointer hover:underline">
                      {service.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Treatment List */}
                    <div className="space-y-2">
                      {service.treatments.map((treatment) => (
                        <div key={treatment} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                          <span className="text-sm text-gray-700">{treatment}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={service.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full group/btn ${
                            isTeal
                              ? 'bg-gradient-to-r from-dental-green to-soft-blue hover:shadow-lg'
                              : 'bg-gradient-to-r from-pear-gold/70 to-pear-gold hover:shadow-lg'
                          } text-white`}
                          size="sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
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
