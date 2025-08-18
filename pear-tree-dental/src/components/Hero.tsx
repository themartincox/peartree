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
      {/* Background image anchored to page top underneath navigation - reduced height by 10% */}
      <div className="absolute top-0 left-0 right-0 h-[90%] -z-10">
        <Image
          src="public/images/heroes/pear-tree-home-hero-full.webp"
          alt="Pear Tree Dental modern practice background"
          fill
          priority
          quality={85}
          className="object-cover object-top"
        />
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Family Image – enlarged by 50% with optimized responsive scaling */}
<div className="absolute bottom-[10%] right-0 z-20 pointer-events-none hidden lg:block">
  <Image
    src="public/images/heroes/hero-home-new-family.webp"
    alt="Smiling family at Pear Tree Dental"
    width={1200}
    height={900}
    priority
    quality={85}
    sizes="(min-width: 1536px) 1200px, (min-width: 1280px) 1050px, (min-width: 1024px) 900px, 750px"
    className="w-[52vw] min-w-[600px] max-w-[1200px] xl:w-[60vw] 2xl:w-[68vw] h-auto object-contain"
  />
</div>

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden py-8 sm:py-12">
          <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-pear-primary drop-shadow-md leading-tight mb-6">
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

          <div className="flex flex-col space-y-4 w-full max-w-md">
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

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-6 py-4 text-base sm:text-lg w-full animate-fade-in min-h-[60px] sm:min-h-[56px]"
              onClick={handleMembershipClick}
            >
              <Link href="/membership" className="text-center leading-tight">
                Enjoy peace of mind from just 36p per day
              </Link>
            </Button>
          </div>

          {/* Family image for mobile/tablet - enlarged by 50% with optimized responsive scaling */}
          <div className="lg:hidden mt-8 flex justify-center">
            <Image
              src="/images/heroes/hero-home-new-family.webp"
              alt="Smiling family at Pear Tree Dental"
              width={600}
              height={450}
              priority
              unoptimized={false}
              quality={85}
              sizes="(min-width: 768px) 750px, (min-width: 640px) 600px, 525px"
              className="object-contain w-[95vw] max-w-[750px] sm:w-[90vw] md:w-[90vw] h-auto max-h-[50vh] sm:max-h-[60vh]"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-center min-h-[100svh]">
          {/* Text Content - positioned on left side with family image on right */}
          <div className="max-w-2xl space-y-8">
            <h1 className="heading-serif text-[85px] font-bold text-pear-primary drop-shadow-md leading-tight">
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

            <div className="flex flex-col space-y-4 max-w-md">
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

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-6 py-4 text-base sm:text-lg w-full animate-fade-in min-h-[60px] sm:min-h-[56px]"
                onClick={handleMembershipClick}
              >
                <Link href="/membership" className="text-center leading-tight">
                  Enjoy peace of mind from just 36p per day
                </Link>
              </Button>
            </div>
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
