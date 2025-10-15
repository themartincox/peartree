"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import dynamic from "next/dynamic";
import JudgeBanner from "@/components/JudgeBanner";

const MobileGoogleReviews = dynamic(() => import("@/components/MobileGoogleReviews"), { ssr: false });

type HeroProps = {
  nonLocalBanner?: { city: string } | null;
};

const Hero = ({ nonLocalBanner = null }: HeroProps) => {
  const { trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  const handleBookingClick = () => {
    trackBookingAttempt("hero_primary", "booking");
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest", "burton_joyce");
  };

  const showNonLocalBanner = Boolean(nonLocalBanner?.city);

  return (
    <>
      {showNonLocalBanner ? (
        <div className="px-4 sm:px-6 lg:px-8">
          <JudgeBanner city={nonLocalBanner!.city} />
        </div>
      ) : null}

      <section className="relative w-full overflow-hidden min-h-[100svh] -mt-16 sm:-mt-20 pt-16 sm:pt-20 bg-pear">
        {/* ------------------------ */}
        {/* DESKTOP/TABLET BACKGROUND (DECORATIVE, NO PRIORITY) */}
        {/* ------------------------ */}
        <div className="absolute top-0 left-0 right-0 h-[90%] -z-10 hidden sm:block">
          <Image
            src="/images/heroes/pear-tree-home-hero-full.webp"
            alt=""
            fill
            // Desktop/tablet decorative background should not compete with LCP
            loading="lazy"
            quality={85}
            sizes="100vw"
            className="object-cover object-[12%_center]"
          />
          <div className="absolute inset-0 bg-gray-100/40" />
        </div>

        {/* ------------------------ */}
        {/* MOBILE-ONLY: right-anchored slice (wider so shoulder isn't cut) */}
        {/* ------------------------ */}
        <div
          className="block lg:hidden absolute right-0 bottom-6 z-10 pointer-events-none h-[75vh]
                     w-[85vw] sm:w-[46vw] md:w-[42vw]"
          aria-hidden="true"
          style={{
            WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/heroes/hero-home-family-left.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={30}
              sizes="(min-width: 1024px) 0px, 75vw"
              className="object-cover opacity-50 object-[12%_center]"
            />
          </div>
        </div>

        {/* ------------------------ */}
        {/* DESKTOP FAMILY IMAGE - LARGER SIZE */}
        {/* ------------------------ */}
        <div className="absolute bottom-[10%] right-0 z-20 pointer-events-none hidden lg:block">
          <Image
            src="/images/heroes/hero-home-new-family.webp"
            alt="Smiling family at Pear Tree Dental"
            width={1200}
            height={900}
            quality={85}
            loading="lazy"
            sizes="(min-width:1536px) 1320px, (min-width:1280px) 1155px, (min-width:1024px) 990px, 825px"
            className="w-[57vw] min-w-[660px] max-w-[1320px] xl:w-[66vw] 2xl:w-[75vw] h-auto object-contain"
          />
        </div>

        {/* ------------------------ */}
        {/* MAIN CONTAINER */}
        {/* ------------------------ */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* MOBILE / TABLET */}
          <div className="lg:hidden py-8 sm:py-12 relative">
            <h1
              className="heading-serif text-[2.6rem] sm:text-6xl md:text-7xl font-bold
                         text-pear-primary drop-shadow-md leading-[1.05] mb-6"
            >
              Expert dental care
              <br />
              with a{" "}
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">
                personal
              </span>
              <br />
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">
                touch
              </span>
            </h1>

            {/* MOBILE-ONLY bounded text container (1/2 width, centred region) */}
            <div className="w-3/4 mx-0 mb-8">
              <p
                className="text-lg sm:text-xl text-pear-primary font-normal leading-relaxed
                           drop-shadow-[1px_1px_2px_rgba(0,0,0,0.25)]"
              >
                <br />
                Award-winning modern dental care at Nottingham&apos;s top-rated dental clinic.
                <br />
                Trusted since 1990.
              </p>
            </div>

            <div className="flex flex-col space-y-4 w-full max-w-md mt-[60px]">
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

              <MobileGoogleReviews />

              {/* Mobile: Awards finalist badge below reviews widget (subtle, ~20% width) */}
              <div className="mt-4">
                <Image
                  src="/images/pear-tree-dental-private-dentistry-awards-finalist.webp"
                  alt="Private Dentistry Awards 2025 finalist"
                  width={300}
                  height={300}
                  className="w-1/5 min-w-[72px] h-auto opacity-80"
                  sizes="(max-width: 767px) 20vw"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex lg:items-center min-h-[100svh]">
            <div className="max-w-2xl">
              <h1 className="heading-serif text-[85px] font-bold text-pear-primary drop-shadow-md leading-tight mb-6 transform -translate-y-20">
                Expert dental care
                <br />
                with a{" "}
                <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
                <br />
                <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
              </h1>

              <p className="text-xl text-pear-primary font-semibold leading-relaxed max-w-lg mb-8
                           drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)]">
                Award-winning modern dental care at Nottingham&apos;s top-rated dental clinic.
                <br /> Trusted since 1990.
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
    </>
  );
};

export default Hero;
