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
      {/* Background image anchored to page top */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/heroes/pear-tree-home-hero-full.webp"
          alt="Pear Tree Dental modern practice background"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden py-8 sm:py-12">
          <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-md leading-tight mb-6">
            Expert dental care
            <br />
            with a <span className="text-pear-gold font-bold">personal</span>
            <br />
            <span className="text-pear-gold font-bold">touch</span>
          </h1>

          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8">
            Modern dental care serving Nottingham and surrounding areas. Skip
            the NHS waiting lists with our membership plans from just £10.95/month.
          </p>

          <div className="space-y-4">
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

          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-6 border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto animate-fade-in"
            onClick={handleMembershipClick}
          >
            <Link href="/membership">
              Enjoy peace of mind from just 36p per day
            </Link>
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 items-center min-h-[100svh]">
          {/* LEFT: Text Content */}
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

          {/* RIGHT: Foreground Hero Image */}
          <div className="relative flex justify-end items-end">
            <Image
              src="/images/heroes/hero-home-new-family.webp"
              alt="Smiling family at Pear Tree Dental"
              width={1600}
              height={1200}
              priority
              className="object-contain object-bottom max-h-[100vh] max-w-[65vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;