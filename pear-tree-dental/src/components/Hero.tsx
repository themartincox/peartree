"use client";

import { useMemo } from "react";
import { Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import dynamic from "next/dynamic";
import { googleReviewsStats } from "@/data/googleReviews";

const MobileGoogleReviews = dynamic(() => import("@/components/MobileGoogleReviews"), { ssr: false });

type HeroProps = {
  geo: string;               // "gedling" | "nottingham-city" | "england" | "uk-national" | "global"
  officeOpen: boolean;       // true during office hours (from middleware)
  device: string;            // "mobile" | "desktop"
  timeOfDay: string;         // "morning" | "afternoon" | "evening" | "night"
  source: string;            // "direct" | "organic-google" | etc.
  variant: string;           // "A" | "B" (or whatever your ab-testing returns)
};

const Hero = ({
  geo = "global",
  officeOpen = false,
  device = "desktop",
  timeOfDay = "day",
  source = "direct",
  variant = "A",
}: HeroProps) => {
  const { trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  const headline = useMemo(() => {
    if (geo === "gedling") return "Expert dental care in Gedling";
    if (geo === "nottingham-city") return "Expert dental care in Nottingham";
    return "Expert dental care with a personal touch";
  }, [geo]);

  const subline = useMemo(() => {
    // Tiny example of variant/time tweaks — adjust as you like
    const trust = "Award-winning modern dental care at Nottingham's top-rated dental clinic. ";
    const since = "Trusted since 1990.";
    if (variant === "B" && timeOfDay === "evening") {
      return trust + "Book online this evening — we'll confirm first thing tomorrow.";
    }
    return trust + since;
  }, [variant, timeOfDay]);

  const reviewStats = useMemo(
    () => ({
      averageRating: googleReviewsStats?.averageRating ?? 4.9,
      totalReviews: googleReviewsStats?.totalReviews ?? 500,
    }),
    [],
  );

  const primaryCTA = officeOpen && device !== "mobile" ? "call" : "book";
  const telHref = "tel:0115 931 2935"; // TODO: real number

  const handlePrimaryClick = () => {
    trackBookingAttempt("hero_primary", primaryCTA === "book" ? "booking" : "call");
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest", geo || "unknown");
  };

  return (
    <section
      className="relative w-full overflow-hidden min-h-[100svh] -mt-16 sm:-mt-20 pt-16 sm:pt-20 bg-pear"
      data-geo={geo}
      data-variant={variant}
      data-device={device}
      data-office-open={officeOpen}
      data-source={source}
    >
      {/* ------------------------ */}
      {/* DESKTOP/TABLET BACKGROUND (DECORATIVE, NO PRIORITY) */}
      {/* ------------------------ */}
      <div className="absolute top-0 left-0 right-0 h-[90%] -z-10 hidden sm:block">
        <Image
          src="/images/heroes/pear-tree-home-hero-full.webp"
          alt=""
          fill
          fetchPriority="low"
          quality={85}
          sizes="100vw"
          className="object-cover object-[12%_center]"
        />
        <div className="absolute inset-0 bg-gray-100/40" />
      </div>

      {/* ------------------------ */}
      {/* MOBILE-ONLY FOREGROUND (LCP TARGET) */}
      {/* ------------------------ */}
      <div
        className="block lg:hidden absolute right-[-30px] bottom-0 z-10 pointer-events-none
                   h-[66vh] w-[52vw] sm:w-[46vw] md:w-[42vw] min-w-[320px]
                   -translate-x-[30px] -translate-y-[30px] origin-bottom-right scale-[1.25]"
        aria-hidden="true"
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
            priority
            fetchPriority="high"
            quality={70}
            sizes="(max-width: 480px) 92vw, (max-width: 768px) 92vw, 50vw"
            className="object-cover object-[12%_center] opacity-60"
          />
        </div>
      </div>

      {/* ------------------------ */}
      {/* DESKTOP FAMILY IMAGE (DECORATIVE, NO PRIORITY) */}
      {/* ------------------------ */}
      <div className="absolute bottom-[10%] right-0 z-20 pointer-events-none hidden lg:block">
        <Image
          src="/images/heroes/hero-home-new-family.webp"
          alt="Smiling family at Pear Tree Dental"
          width={1200}
          height={900}
          quality={85}
          fetchPriority="low"
          sizes="(min-width:1536px) 1200px, (min-width:1280px) 1050px, (min-width:1024px) 900px, 750px"
          className="w-[52vw] min-w-[600px] max-w-[1200px] xl:w-[60vw] 2xl:w-[68vw] h-auto object-contain"
        />
      </div>

      {/* ------------------------ */}
      {/* MAIN CONTAINER */}
      {/* ------------------------ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* MOBILE / TABLET */}
        <div className="lg:hidden py-8 sm:py-12 relative">
          <h1 className="heading-serif text-[2.6rem] sm:text-6xl md:text-7xl font-bold text-pear-primary drop-shadow-md leading-[1.05] mb-6">
            {headline.split("\n").map((line, i) => (
              <span key={i} className={i > 0 ? "block" : ""}>{line}</span>
            ))}
          </h1>

          {/* MOBILE-ONLY bounded text container (1/2 width, centered region) */}
          <div className="block lg:hidden w-1/2 mx-0">
            <p className="text-lg sm:text-xl text-pear-primary font-medium leading-relaxed drop-shadow-[1px_1px_2px_rgba(0,0,0,0.25)]">
              {subline}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-4 w-full max-w-md mt-[60px]">
            {primaryCTA === "book" ? (
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full"
                onClick={handlePrimaryClick}
              >
                <Link href="/book">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Consultation
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full"
                onClick={handlePrimaryClick}
              >
                <a href={telHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            )}

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
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex lg:items-center min-h-[100svh]">
          <div className="max-w-2xl space-y-8">
            <h1 className="heading-serif text-[85px] font-bold text-pear-primary drop-shadow-md leading-tight">
              {headline}
            </h1>

            <p className="text-xl text-pear-primary leading-relaxed max-w-lg">
              {subline}
            </p>

            <div className="flex flex-col space-y-4 max-w-md">
              {primaryCTA === "book" ? (
                <Button
                  asChild
                  size="lg"
                  className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full"
                  onClick={handlePrimaryClick}
                >
                  <Link href="/book">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Consultation
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="bg-pear-primary hover:bg-pear-primary text-white font-semibold px-8 py-4 text-lg w-full"
                  onClick={handlePrimaryClick}
                >
                  <a href={telHref}>
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us Now
                  </a>
                </Button>
              )}

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white font-semibold px-8 py-4 text-lg w-full"
                onClick={handleMembershipClick}
              >
                <Link href="/membership">View Membership Plans →</Link>
              </Button>

              {/* Inline review stats for desktop */}
              <div className="flex items-center justify-between rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-md backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-pear-primary">
                    <span className="text-2xl font-semibold">
                      {reviewStats.averageRating.toFixed(1)}
                    </span>
                    <div className="flex items-center gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {reviewStats.totalReviews}+ Google reviews
                  </span>
                </div>
                <Image
                  src="/images/google-logo-mini.webp"
                  alt="Google reviews"
                  width={28}
                  height={28}
                  className="h-6 w-6"
                />
              </div>
            </div>

            {/* tiny debug tag — remove when happy */}
            {/* <div className="text-xs opacity-60">geo:{geo} • device:{device} • office:{String(officeOpen)} • {timeOfDay} • {source} • v:{variant}</div> */}
          </div>

          <div className="relative">{/* Desktop right-side area */}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
