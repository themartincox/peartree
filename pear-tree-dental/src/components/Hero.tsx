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
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      aria-label="Welcome to Pear Tree Dental"
      role="main"
    >
      {/* Background Pattern - Pure CSS for better performance */}
      <div className="absolute inset-0 opacity-5 hero-bg-pattern" aria-hidden="true" />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pear-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pear-gold/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:pt-24 lg:pt-28 sm:pb-8 lg:pb-10 relative py-[25px]">
        {/* Mobile-only headline above image */}
        <div className="block lg:hidden mb-6">
          <h1 className="heading-serif sm:text-[4.2rem] font-bold text-pear-primary text-center text-[55px]">
            Expert dental care with a <span className="text-pear-gold">personal touch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-4 sm:space-y-6 flex flex-col lg:h-[600px] justify-between lg:mt-[-100px] order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              {/* Main Headline - SEO Optimized - Hidden on mobile, shown on desktop */}
              <h1 className="heading-serif text-[3.15rem] sm:text-[4.2rem] md:text-[5.25rem] lg:text-[6.3rem] font-bold text-pear-primary leading-tight xl:text-[85px] hidden lg:block">
                Expert dental care with a <span className="text-pear-gold">personal touch</span>
              </h1>

              <p className="text-[1.26rem] sm:text-[1.32rem] lg:text-[1.68rem] text-gray-600 leading-relaxed xl:text-[20px]">
                Modern dental care in Burton Joyce, Nottinghamshire.
                Skip the NHS waiting lists with our membership plans from just £10.95/month.
              </p>

              {/* CTA Buttons - Optimized for performance */}
              <div className="flex flex-col gap-4" role="group" aria-label="Primary actions">
                <Button
                  size="lg"
                  className="bg-pear-primary text-white hover:bg-pear-primary/90 font-semibold group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-pear-primary focus:ring-offset-2"
                  aria-label="Schedule a free dental consultation with our team"
                >
                  <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true" />
                  Book Free Consultation
                </Button>
              </div>
            </div>

            {/* Bottom-aligned elements */}
            <div className="space-y-4 sm:space-y-6">
              <Button
                size="lg"
                variant="outline"
                className="text-pear-gold-dark border-pear-gold-dark hover:bg-pear-gold-dark hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-pear-gold-dark focus:ring-offset-2 w-full lg:w-auto"
                aria-label="Join our dental membership plan starting at £10.95 per month"
              >View Membership Plans
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

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
          </div>

          {/* Right Column - Premium Hero Imagery */}
          <div className="relative mt-8 lg:-mt-[100px] hero-image-container order-1 lg:order-2" role="img" aria-label="Dental care showcase">
            {/* Main Hero Image */}
            <div
              className="relative h-72 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              role="img"
              aria-label="Two confident women showcasing beautiful, healthy smiles - representing the quality dental care at Pear Tree Dental"
            >
              <Image
                src="/images/dental-practice-hero-burton-joyce.webp"
                alt="Beautiful smile showcasing the quality dental care and transformations at Pear Tree Dental in Burton Joyce, Nottinghamshire"
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


            </div>

            {/* Secondary Service Images - Clickable service links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6" role="group" aria-label="Featured dental services">
              {/* Orthodontics Service Image */}
              <Link
                href="/services/orthodontics"
                className="block h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                aria-label="Orthodontics service - Invisalign and ClearCorrect clear aligner treatments"
              >
                <div className="relative h-full bg-white">
                  <Image
                    src="/images/1.jpg"
                    alt="Orthodontic treatment options - professional teeth straightening services"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  {/* Pink glass overlay */}
                  <div className="absolute inset-0 bg-pink-200/30 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-0"></div>
                </div>
              </Link>

              {/* Whitening Service Image */}
              <Link
                href="/services/cosmetic"
                className="block h-20 sm:h-24 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                aria-label="Teeth whitening service - Boutique Whitening and Enlighten professional treatments"
              >
                <div className="relative h-full bg-white">
                  <Image
                    src="/images/2.jpg"
                    alt="Professional teeth whitening services - smile brightening treatments"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  {/* Pink glass overlay */}
                  <div className="absolute inset-0 bg-pink-200/30 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-0"></div>
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
