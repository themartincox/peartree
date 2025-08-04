"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useConversionTracking } from '@/hooks/useConversionTracking';

const Hero = () => {
  const { trackPhoneClick, trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  const handleBookingClick = () => {
    trackBookingAttempt('hero_primary', 'booking');
  };

  const handleMembershipClick = () => {
    trackLocationConversion('membership_interest', 'burton_joyce');
  };

  return (
    <section className="relative pt-20 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile/Tablet Layout: H1, Image, Text, CTAs */}
        <div className="lg:hidden">
          {/* H1 First on Mobile */}
          <div className="text-center mb-8">
            <h1 className="heading-serif text-5xl sm:text-6xl font-bold text-pear-primary leading-tight">
              Expert dental care
              <br />
              with a <span className="text-pear-gold">personal touch</span>
            </h1>
          </div>

          {/* Hero Image Second on Mobile */}
          <div className="relative mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
              <img
                src="/images/dental-practice-hero-burton-joyce.webp"
                alt="Happy family with healthy smiles at Pear Tree Dental Burton Joyce"
                className="w-full h-[400px] object-cover opacity-80"
                loading="eager"
                width={600}
                height={400}
              />

              {/* Google Rating Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                  <span className="text-gray-800 text-sm font-medium">Google Rated</span>
                  <span className="text-orange-500 font-bold">4.9</span>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up Text Third on Mobile */}
          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Modern dental care in Burton Joyce, Nottinghamshire. Skip the NHS
              waiting lists with our membership plans from just £10.95/month.
            </p>
          </div>

          {/* CTA 1 Fourth on Mobile */}
          <div className="mb-4">
            <Button
              asChild
              size="lg"
              className="bg-pear-primary hover:bg-pear-primary/90 text-white font-semibold px-8 py-4 text-lg w-full"
              onClick={handleBookingClick}
            >
              <Link href="/book">
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Consultation
              </Link>
            </Button>
          </div>

          {/* CTA 2 Fifth on Mobile */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full"
              onClick={handleMembershipClick}
            >
              <Link href="/membership">
                View Membership Plans →
              </Link>
            </Button>
          </div>

          {/* Membership Highlight */}
          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">£</span>
              </div>
              <div>
                <h3 className="font-bold text-pear-primary text-lg">
                  Membership from just 36p per day
                </h3>
                <p className="text-gray-600 text-sm">
                  No hidden fees • Cancel anytime • Immediate access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="heading-serif text-7xl font-bold text-pear-primary leading-tight">
                Expert dental care
                <br />
                with a <span className="text-pear-gold">personal touch</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Modern dental care in Burton Joyce, Nottinghamshire. Skip the NHS
              waiting lists with our membership plans from just £10.95/month.
            </p>

            {/* CTA Buttons with Tracking */}
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                onClick={handleBookingClick}
              >
                <Link href="/book">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Consultation
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                onClick={handleMembershipClick}
              >
                <Link href="/membership">
                  View Membership Plans →
                </Link>
              </Button>
            </div>

            {/* Membership Highlight */}
            <div className="bg-gray-50 rounded-2xl p-6 max-w-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">£</span>
                </div>
                <div>
                  <h3 className="font-bold text-pear-primary text-lg">
                    Membership from just 36p per day
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees • Cancel anytime • Immediate access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Column */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/dental-practice-hero-burton-joyce.webp"
                alt="Happy family with healthy smiles at Pear Tree Dental Burton Joyce"
                className="w-full h-[600px] object-cover opacity-80"
                loading="eager"
                width={600}
                height={600}
              />

              {/* Google Rating Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                  <span className="text-gray-800 text-sm font-medium">Google Rated</span>
                  <span className="text-orange-500 font-bold">4.9</span>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
