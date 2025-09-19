"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import dynamic from "next/dynamic";

const MobileGoogleReviews = dynamic(() => import("@/components/MobileGoogleReviews"), { ssr: false });
const InlineGoogleReviews = dynamic(() => import("@/components/ClientGoogleReviews"), { ssr: false });

const Hero = () => {
  const { trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  const handleBookingClick = () => {
    trackBookingAttempt("hero_primary", "booking");
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest", "burton_joyce");
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[100svh] -mt-16 sm:-mt-20 pt-16 sm:pt-20 bg-pear">
      {/* BACKGROUND (LCP): practice image */}
      <div className="absolute top-0 left-0 right-0 h-[90%] -z-10 hidden sm:block">
        <Image
          src="/images/heroes/pear-tree-home-hero-full.webp"
          alt="Pear Tree Dental modern practice background"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className="object-cover object-[12%_center]"
        />
        <div className="absolute inset-0 bg-gray-100/40" />
      </div>

      {/* MOBILE-ONLY slice (NO priority) */}
<div
  className="block lg:hidden absolute right-0 bottom-0 z-10 pointer-events-none h-[66vh]
             w-[52vw] sm:w-[46vw] md:w-[42vw] min-w-[320px] -bottom-[30px] -right-[30px] -translate-y-[30px]"
  aria-hidden
  style={{
    WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
    maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
  }}
>
  <div className="relative h-full w-full overflow-hidden">
    <Image
      src="/images/heroes/hero-home-new-family.webp"
      alt=""
      fill
      quality={85}
      sizes="100vw"
      className="object-cover opacity-50 object-[12%_center]"
    />
  </div>
</div>

      {/* DESKTOP family image (NO priority) */}
      <div className="absolute bottom-[10%] right-0 z-20 pointer-events-none hidden lg:block">
        <Image
          src="/images/heroes/hero-home-new-family.webp"
          alt="Smiling family at Pear Tree Dental"
          width={1200}
          height={900}
          quality={85}
          sizes="(min-width: 1536px) 1200px, (min-width: 1280px) 1050px, (min-width: 1024px) 900px, 750px"
          className="w-[52vw] min-w-[600px] max-w-[1200px] xl:w-[60vw] 2xl:w-[68vw] h-auto object-contain"
        />
      </div>

      {/* MAIN CONTAINER (unchanged content) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              {/* MOBILE / TABLET LAYOUT */}
        <div className="lg:hidden py-8 sm:py-12 relative">
          <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-pear-primary drop-shadow-md leading-tight mb-6">
            Expert dental care
            <br />
            with a <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
            <br />
            <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
          </h1>

          <p className="text-lg sm:text-xl text-pear-primary lg:text-white leading-relaxed max-w-2xl mb-8">
  Modern dental care serving Nottingham and surrounding areas. Skip
  the NHS waiting lists with our Nottingham membership plans from just £10.95/month.
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

            {/* Mobile Google reviews on mobile below the two buttons */}
            <MobileGoogleReviews />
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex lg:items-center min-h-[100svh]">
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
              the NHS waiting lists with our Nottingham membership plans from just £10.95/month.
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
            </div>
          </div>

          <div className="relative">{/* Desktop right-side area */}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
