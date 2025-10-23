"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceNavItem {
  id: string;
  title: string;
  href: string;
  category: "general" | "cosmetic" | "restorative" | "implants" | "orthodontics" | "emergency";
  description: string;
}

const allServices: ServiceNavItem[] = [
  {
    id: "general",
    title: "General Dentistry",
    href: "/services/general",
    category: "general",
    description: "Comprehensive dental care for everyday needs"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic",
    category: "cosmetic",
    description: "Transform your smile with aesthetic treatments"
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    href: "/services/restorative",
    category: "restorative",
    description: "Repair and restore your teeth to optimal health"
  },
  {
    id: "implants",
    title: "Implant Dentistry",
    href: "/services/implants",
    category: "implants",
    description: "Permanent tooth replacement solutions"
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    href: "/services/orthodontics",
    category: "orthodontics",
    description: "Straighten teeth with modern clear aligners"
  },
  {
    id: "emergency",
    title: "Emergency Dentistry",
    href: "/services/emergency",
    category: "emergency",
    description: "Urgent dental care when you need it most"
  },
  {
    id: "complete-smile-makeover",
    title: "Complete Smile Makeover",
    href: "/services/complete-smile-makeover",
    category: "cosmetic",
    description: "Total smile transformation with comprehensive treatments"
  },
  {
    id: "wedding-day-smile",
    title: "Wedding Day Smile",
    href: "/wedding-day-smile",
    category: "cosmetic",
    description: "Perfect smile for your special day with timeline-based treatments"
  },
  {
    id: "treatment-comparison",
    title: "Treatment Comparison",
    href: "/services/treatment-comparison",
    category: "general",
    description: "Compare dental treatments to find your best option"
  }
];

const ServiceNavigation = () => {
  const pathname = usePathname();

  // Find current service index
  const currentIndex = allServices.findIndex(service =>
    pathname.includes(service.id) || pathname === service.href
  );

  if (currentIndex === -1) return null;

  const previousService = currentIndex > 0 ? allServices[currentIndex - 1] : allServices[allServices.length - 1];
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : allServices[0];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-white to-pear-background/30"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of dental treatments designed to keep your smile healthy and beautiful
          </p>
        </motion.div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Previous Service */}
          <motion.div variants={itemVariants}>
            <Link href={previousService.href}>
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <Card className="h-full border-2 border-pear-gold/20 hover:border-pear-gold/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="w-10 h-10 bg-pear-primary/10 rounded-full flex items-center justify-center group-hover:bg-pear-primary/20 transition-colors"
                        whileHover={{ rotate: -180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowLeft className="w-5 h-5 text-pear-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Previous</p>
                        <h3 className="font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                          {previousService.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{previousService.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>

          {/* All Services Overview */}
          <motion.div variants={itemVariants}>
            <Link href="/services">
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <Card className="h-full border-2 border-pear-primary/20 hover:border-pear-primary/40 transition-colors duration-300 bg-gradient-to-br from-pear-primary/5 to-pear-primary/10">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pear-gold transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Grid3X3 className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-pear-gold transition-colors">
                      All Services
                    </h3>
                    <p className="text-sm text-gray-600">
                      View our complete range of dental treatments
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>

          {/* Next Service */}
          <motion.div variants={itemVariants}>
            <Link href={nextService.href}>
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <Card className="h-full border-2 border-pear-gold/20 hover:border-pear-gold/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="w-10 h-10 bg-pear-gold/10 rounded-full flex items-center justify-center group-hover:bg-pear-gold/20 transition-colors"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-pear-gold" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Next</p>
                        <h3 className="font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                          {nextService.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{nextService.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/membership">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pear-gold to-pear-gold/80 hover:from-pear-gold/90 hover:to-pear-gold text-pear-primary font-semibold px-8"
              >
                Join Our Membership Plan
              </Button>
            </motion.div>
          </Link>

          <Link href="/book">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white px-8"
              >
                Book Consultation
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceNavigation;
