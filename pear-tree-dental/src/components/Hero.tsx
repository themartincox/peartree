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
    <section className="relative w-full overflow-hidden min-h-[100svh] -mt-16 sm:-mt-20 pt-16 sm:pt-20">
      {/* Background image anchored to page top underneath navigation */}
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

      {/* Family Image – anchored bottom-right over the hero */}
<div className="absolute bottom-0 right-0 z-20 pointer-events-none">
  <Image
    src="/images/heroes/hero-home-new-family.webp"
    alt="Smiling family at Pear Tree Dental"
    width={1200}        // tweak size to taste
    height={900}
    priority
    className="w-[50vw] max-w-[780px] h-auto"
  />
</div>

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden py-8 sm:py-12">
          <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-md leading-tight mb-6">
            Expert dental care
            <br />
            with a <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
            <br />
            <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
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

          {/* Family image for mobile/tablet - smaller and positioned differently */}
          <div className="lg:hidden mt-8 flex justify-center">
            <Image
              src="/images/heroes/hero-home-new-family.webp"
              alt="Smiling family at Pear Tree Dental"
              width={600}
              height={450}
              priority
              className="object-contain max-h-[40vh] max-w-full"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-center min-h-[100svh]">
          {/* Text Content - positioned on left side with family image on right */}
          <div className="max-w-2xl space-y-8">
            <h1 className="heading-serif text-[85px] font-bold text-white drop-shadow-md leading-tight">
              Expert dental care
              <br />
              with a{" "}
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
              <br />
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
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

          {/* RIGHT: Text content takes full width on desktop since family image is positioned absolutely */}
          <div className="relative">
            {/* Content area - family image is positioned absolutely outside this grid */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
