import type { Metadata } from "next";
import Link from "next/link";
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
  Star,
  Scissors
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services - Comprehensive Care at Pear Tree Dental Burton Joyce",
  description: "Discover our full range of dental services including general dentistry, cosmetic treatments, implants, orthodontics, and emergency care. Quality dental care in Burton Joyce, Nottingham.",
  keywords: "dental services, dentist Burton Joyce, cosmetic dentistry, dental implants, orthodontics, emergency dentist, general dentistry, restorative dentistry, Nottingham",
  openGraph: {
    title: "Complete Dental Services - Pear Tree Dental Burton Joyce",
    description: "From routine check-ups to smile makeovers, discover our comprehensive dental services designed to keep your smile healthy and beautiful.",
    type: "website",
  }
};

const services = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Comprehensive dental care for your everyday needs including check-ups, cleanings, and preventive treatments.",
    href: "/services/general",
    icon: Heart,
    color: "dental-green",
    features: ["Regular Check-ups", "Professional Cleaning", "Fluoride Treatments", "Oral Health Advice"],
    isCore: true
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    description: "Repair and restore your teeth to optimal health with our advanced restorative treatments.",
    href: "/services/restorative",
    icon: Shield,
    color: "dental-green",
    features: ["Fillings", "Crowns & Bridges", "Root Canal Treatment", "Dentures"],
    isCore: true
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our aesthetic treatments designed to enhance your natural beauty.",
    href: "/services/cosmetic",
    icon: Sparkles,
    color: "soft-pink",
    features: ["Teeth Whitening", "Porcelain Veneers", "Composite Bonding", "Smile Makeovers"],
    isCore: false
  },
  {
    id: "implants",
    title: "Implant Dentistry",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    href: "/services/implants",
    icon: Crown,
    color: "soft-pink",
    features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Implant-Supported Dentures"],
    isCore: false
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions including clear aligners.",
    href: "/services/orthodontics",
    icon: Smile,
    color: "soft-pink",
    features: ["Invisalign", "ClearCorrect", "Traditional Braces", "Retainers"],
    isCore: false
  },
  {
    id: "emergency",
    title: "Emergency Dentistry",
    description: "Urgent dental care when you need it most. We're here to help with dental emergencies.",
    href: "/services/emergency",
    icon: AlertCircle,
    color: "red-500",
    features: ["Pain Relief", "Urgent Repairs", "Same-Day Appointments", "Out-of-Hours Care"],
    isCore: true
  }
];

const ServicesPage = () => {
  const coreServices = services.filter(service => service.isCore);
  const cosmeticServices = services.filter(service => !service.isCore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pear-primary via-pear-primary/95 to-pear-primary/90 text-white relative overflow-hidden">
        {/* Decorative elements */}
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
              in our state-of-the-art Burton Joyce practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold px-8 py-4">
                <Link href="/contact">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4">
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-dental-green/10 text-dental-green">
              <Shield className="w-4 h-4 mr-2" />
              Essential Care
            </Badge>
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
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-dental-green/20 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.color === 'red-500' ? 'bg-red-500' : `bg-${service.color}`
                      }`}>
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      {service.isCore && (
                        <Badge variant="secondary" className="bg-dental-green/10 text-dental-green text-xs">
                          Essential
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-pear-primary group-hover:text-dental-green transition-colors">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full group-hover:bg-dental-green group-hover:text-white transition-colors">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cosmetic Services Section */}
      <section className="py-16 bg-gradient-to-br from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-soft-pink/10 text-soft-pink">
              <Sparkles className="w-4 h-4 mr-2" />
              Smile Enhancement
            </Badge>
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
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-soft-pink/20 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${service.color} flex items-center justify-center`}>
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-soft-pink/10 text-soft-pink text-xs">
                        Cosmetic
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-pear-primary group-hover:text-soft-pink transition-colors">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-soft-pink flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full group-hover:bg-soft-pink group-hover:text-white transition-colors">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
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
              <div className="text-center">
                <div className="w-16 h-16 bg-pear-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">Experienced dental professionals committed to excellence</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-dental-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">Modern Technology</h3>
                <p className="text-sm text-gray-600">State-of-the-art equipment for optimal treatment outcomes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-soft-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Convenient appointment times to fit your busy lifestyle</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pear-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">5-Star Care</h3>
                <p className="text-sm text-gray-600">Consistently rated excellent by our satisfied patients</p>
              </div>
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
              Our team is here to provide personalized care tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold px-8 py-4">
                <Link href="/contact">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4">
                <Link href="/membership">
                  <Crown className="w-5 h-5 mr-2" />
                  Explore Membership Plans
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0115 931 2525</span>
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
