"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const Hero = () => {
  const { trackBookingAttempt, trackLocationConversion } =
    useConversionTracking();

  const handleBookingClick = () => {
    trackBookingAttempt("hero_primary", "booking");
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest", "burton_joyce");
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[100svh]">
      {/* Background image anchored to page top, behind nav */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/dental-practice-hero-burton-joyce.webp"
          alt="Modern dental practice in Burton Joyce"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Optional dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile/Tablet */}
        <div className="lg:hidden py-6 sm:py-10">
          {/* H1 */}
          <div className="text-left mb-6">
            <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-md leading-tight">
              <span className="md:hidden">
                Expert dental
                <br />
                care with a
                <br />
                <span className="text-pear-gold font-bold">personal touch</span>
              </span>
              <span className="hidden md:inline">
                Expert dental care
                <br />
                with a <span className="text-pear-gold font-bold">personal</span>
                <br />
                <span className="text-pear-gold font-bold">touch</span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8">
            Modern dental care serving Nottingham and surrounding areas. Skip
            the NHS waiting lists with our membership plans from just £10.95/month.
          </p>

          {/* CTA 1 */}
          <div className="mb-4">
            <Button
              asChild
              size="lg"
              className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full"
              onClick={handleBookingClick}
            >
              <Link href="/book">
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Consultation
              </Link>
            </Button>
          </div>

          {/* CTA 2 */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full"
              onClick={handleMembershipClick}
            >
              <Link href="/membership">View Membership Plans →</Link>
            </Button>
          </div>

          {/* Membership Highlight */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto animate-fade-in"
            onClick={handleMembershipClick}
          >
            <Link href="/membership">
              Enjoy peace of mind from just 36p per day
            </Link>
          </Button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 items-center min-h-[100svh] pt-6 pb-10">
          {/* Left column */}
          <div className="space-y-8 self-center">
            <h1 className="heading-serif text-[85px] font-bold text-white drop-shadow-md leading-tight">
              Expert dental care
              <br />
              with a{" "}
              <span className="text-pear-gold font-bold">personal</span>
              <br />
              <span className="text-pear-gold font-bold">touch</span>
            </h1>

            <p className="text-xl text-white leading-relaxed max-w-lg">
              Modern dental care serving Nottingham and surrounding areas. Skip
              the NHS waiting lists with our membership plans from just £10.95/month.
            </p>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto"
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
                <Link href="/membership">View Membership Plans →</Link>
              </Button>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto animate-fade-in"
              onClick={handleMembershipClick}
            >
              <Link href="/membership">
                Enjoy peace of mind from just 36p per day
              </Link>
            </Button>
          </div>

          {/* Right column image (family) */}
          <div className="relative">
            <div className="absolute right-0 bottom-0 z-10 overflow-hidden">
              <div className="relative transform -translate-y-[5px] translate-x-[50px]">
                <Image
                  src="/images/heroes/pear-tree-family-hero-43.png"
                  alt="Happy family at Pear Tree Dental - parents and children smiling"
                  width={1600}
                  height={1200}
                  priority
                  className="object-contain object-bottom w-auto h-auto max-h-[100vh] max-w-[65vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;