"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, CalendarDays, ArrowRight } from "lucide-react";
import LiveGoogleRatingWidget from "@/components/LiveGoogleRatingWidget";
import GoogleReviewsModal from "@/components/GoogleReviewsModal";

const Hero = () => {
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen from-pear-background via-white to-pear-background overflow-hidden bg-[#ffffff]"
      aria-label="Welcome to Pear Tree Dental"
      role="main"
    >
      {/* Background Pattern - Pure CSS for better performance */}
      <div className="absolute inset-0 opacity-5 hero-bg-pattern" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-end">
          {/* Left Column - Main Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Headline - SEO Optimized */}
            <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-pear-primary leading-tight">
              Expert dental care with a <span className="text-pear-gold">personal touch</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Modern dental care in Burton Joyce, Nottinghamshire.
              Skip the NHS waiting lists with our membership plans from just £10.95/month.
            </p>

            {/* CTA Buttons - Optimized for performance */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6" role="group" aria-label="Primary actions">
              <Button
                size="lg"
                className="btn-gold text-white font-semibold group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-pear-gold focus:ring-offset-2"
                aria-label="Join our dental membership plan starting at £8.99 per month"
              >
                Join Membership Plan
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-pear-primary focus:ring-offset-2"
                aria-label="Schedule a free dental consultation with our team"
              >
                <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true" />
                Book Free Consultation
              </Button>
            </div>

            {/* Value Proposition - Simplified structure */}
            <div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-pear-primary/10 min-h-[100px] sm:h-32 flex items-center space-x-4 sm:space-x-6"
              role="region"
              aria-label="Membership pricing information"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-pear-gold rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl sm:text-2xl">£</span>
              </div>
              <div>
                <p className="text-pear-primary font-semibold text-lg sm:text-xl">Membership from just 36p per day</p>
                <p className="text-gray-600 text-sm sm:text-base">No hidden fees • Cancel anytime • Immediate access</p>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Hero Imagery */}
          <div className="relative mt-8 lg:mt-0 hero-image-container" role="img" aria-label="Dental care showcase">
            {/* Main Hero Image */}
            <div
              className="relative h-56 sm:h-72 lg:h-80 xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              role="img"
              aria-label="Two confident women showcasing beautiful, healthy smiles - representing the quality dental care at Pear Tree Dental"
            >
              <Image
                src="/images/Pear_tree_dental_smile_design.jpg"
                alt="Two confident women showcasing beautiful, healthy smiles - representing the quality dental care and smile transformations at Pear Tree Dental in Burton Joyce, Nottinghamshire"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />

              {/* Floating Elements - Optimized positioning */}
              <div
                className="absolute top-3 left-3 sm:top-6 sm:left-6 opacity-75 hover:opacity-100 transition-opacity duration-300"
                role="region"
                aria-label="Patient rating information"
              >
                <LiveGoogleRatingWidget onClick={() => setIsReviewsModalOpen(true)} />
              </div>

              <div
                className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                role="region"
                aria-label="Emergency care availability"
              >
                <div className="text-center">
                  <p className="font-semibold text-pear-primary text-sm sm:text-base">Same Day</p>
                  <p className="text-xs sm:text-sm text-gray-600">Emergency Care</p>
                </div>
              </div>
            </div>

            {/* Secondary Service Images - Clickable service links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6" role="group" aria-label="Featured dental services">
              {/* Orthodontics Service Image */}
              <Link
                href="/services/orthodontics"
                className="block h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                aria-label="Orthodontics service - Invisalign and ClearCorrect clear aligner treatments"
              >
                <div className="relative h-full">
                  <Image
                    src="/images/pear_tree_dental_aligners_logos.png"
                    alt="Invisalign and ClearCorrect orthodontic treatment options - clear aligners for teeth straightening"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </Link>

              {/* Whitening Service Image */}
              <Link
                href="/services/cosmetic"
                className="block h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                aria-label="Teeth whitening service - Boutique Whitening and Enlighten professional treatments"
              >
                <div className="relative h-full">
                  <Image
                    src="/images/pear_tree_dental_whitening_logos.png"
                    alt="Boutique Whitening and Enlighten teeth whitening treatment options - professional smile brightening"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Optimized SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20" aria-hidden="true">
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Google Reviews Modal */}
      <GoogleReviewsModal
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
