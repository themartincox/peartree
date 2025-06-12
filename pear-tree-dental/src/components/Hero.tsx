"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  fadeInVariants,
  slideUpVariants,
  staggerContainer,
  floatingVariants,
  buttonVariants,
  getAnimationVariants
} from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pear-background via-white to-pear-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pear-primary rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-pear-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-dental-green rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-end">
          {/* Left Column - Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-pear-primary leading-tight">
                Premium Dentistry
                <span className="block">with a <span className="text-pear-gold">Personal</span></span>
                <span className="text-pear-gold block">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Modern dental care in Burton Joyce, Nottinghamshire.
                Skip the NHS waiting lists with our membership plans from just £8.99/month.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button size="lg" className="btn-gold text-white font-semibold group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14">
                Join Membership Plan
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Book Free Consultation
              </Button>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-pear-primary/10 min-h-[100px] sm:h-32 flex items-center">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pear-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl sm:text-2xl">£</span>
                </div>
                <div>
                  <p className="text-pear-primary font-semibold text-lg sm:text-xl">Membership from just 29p per day</p>
                  <p className="text-gray-600 text-sm sm:text-base">No hidden fees • Cancel anytime • Immediate access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Hero Imagery */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Hero Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">HERO IMAGE</h3>
                <p className="text-gray-500 text-sm sm:text-base px-4">Beautiful woman with perfect white teeth smiling confidently</p>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pear-gold rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary text-sm sm:text-base">4.9 Rating</p>
                    <p className="text-xs sm:text-sm text-gray-600">400+ Reviews</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                <div className="text-center">
                  <p className="font-semibold text-pear-primary text-sm sm:text-base">Same Day</p>
                  <p className="text-xs sm:text-sm text-gray-600">Emergency Care</p>
                </div>
              </div>
            </div>

            {/* Secondary Color Blocks */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg bg-gradient-to-br from-soft-pink to-soft-lavender flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-wider">ORTHODONTICS</span>
              </div>
              <div className="h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg bg-gradient-to-br from-pear-gold to-pear-gold/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-wider">WHITENING</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pear-gold/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-soft-pink/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
