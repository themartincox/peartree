// src/components/Hero.tsx

"use client";

// Import Car and Clock for the personalization banners
import { Calendar, Car, Clock } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { motion } from "framer-motion"; // Import motion for animations
// Import the interface from the new wrapper
import type { PersonalizationProps } from './PersonalizedHeroWrapper'; 

interface HeroProps {
  personalization: PersonalizationProps;
}

const Hero = ({ personalization }: HeroProps) => {
  const { trackBookingAttempt, trackLocationConversion } = useConversionTracking();

  // Destructure the personalized data
  const { city, travelTime, isOfficeHours, timeOfDay } = personalization;

  const handleBookingClick = () => {
    trackBookingAttempt("hero_primary", "booking");
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest", "burton_joyce");
  };

  // Dynamic localized content handling
  // If the location is unknown or the practice location itself, default to the broader area (Nottingham)
  const displayCity = (city === 'your area' || city === 'Burton Joyce') ? 'Nottingham' : city;
  
  const personalizedGreeting = `Good ${timeOfDay}, ${displayCity}!`;
  const localizedDescription = `Modern dental care serving ${displayCity} and surrounding areas. Skip the NHS waiting lists with our Nottingham membership plans from just £10.95/month.`;


  return (
    <section className="relative w-full overflow-hidden min-h-[100svh] -mt-16 sm:-mt-20 pt-16 sm:pt-20">
      {/* BACKGROUND (Unchanged) */}
      <div className="absolute top-0 left-0 right-0 h-[90%] -z-10">
        <Image
          src="/images/heroes/pear-tree-home-hero-full.webp"
          alt="Pear Tree Dental modern practice background"
          fill
          priority
          quality={85}
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

       {/* --- NEW: PERSONALIZATION BANNERS (Positioned absolutely near the top) --- */}
       <div className="absolute top-16 sm:top-20 left-0 right-0 z-30 flex flex-col items-center space-y-2 pt-4 px-4">
        
        {/* Travel Time Banner */}
        {travelTime && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} // Slight delay after page load
            className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-6 py-2 flex items-center text-pear-primary max-w-3xl"
          >
            <Car className="h-5 w-5 mr-3 text-pear-gold flex-shrink-0" />
            <p className="text-sm sm:text-base font-medium text-center">
              You are just a <span className="font-bold">{travelTime}</span> drive away right now.
            </p>
          </motion.div>
        )}

        {/* After Hours Notification */}
        {!isOfficeHours && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-yellow-100 border border-yellow-500 text-yellow-700 px-6 py-2 rounded-full flex items-center shadow-md max-w-3xl"
          >
            <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
            <p className="text-sm sm:text-base text-center">We are currently closed. You can still book online for the next available slot.</p>
          </motion.div>
        )}
      </div>
      {/* --- END PERSONALIZATION BANNERS --- */}

      {/* MOBILE-ONLY Slice (Unchanged) */}
      <div
        className="block lg:hidden absolute right-0 bottom-6 z-10 pointer-events-none h-[66vh]
                   w-[52vw] sm:w-[46vw] md:w-[42vw] min-w-[320px]"
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
            quality={85}
            sizes="100vw"
            className="object-cover opacity-50 object-[12%_center]"
          />
        </div>
      </div>

      {/* DESKTOP Image (Unchanged) */}
      <div className="absolute bottom-[10%] right-0 z-20 pointer-events-none hidden lg:block">
        <Image
          src="/images/heroes/hero-home-new-family.webp"
          alt="Smiling family at Pear Tree Dental"
          width={1200}
          height={900}
          priority
          quality={85}
          sizes="(min-width: 1536px) 1200px, (min-width: 1280px) 1050px, (min-width: 1024px) 900px, 750px"
          className="w-[52vw] min-w-[600px] max-w-[1200px] xl:w-[60vw] 2xl:w-[68vw] h-auto object-contain"
        />
      </div>

      {/* MAIN CONTAINER */}
      {/* Added extra padding top (pt-24 md:pt-20) to ensure content doesn't hide behind the personalization banners */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 md:pt-20">
        
        {/* MOBILE / TABLET LAYOUT */}
        <div className="lg:hidden py-8 sm:py-12 relative">

          {/* NEW: Personalized Greeting */}
          <p className="text-lg font-semibold text-pear-gold drop-shadow-sm mb-2">
            {personalizedGreeting}
          </p>

          <h1 className="heading-serif text-5xl sm:text-6xl md:text-7xl font-bold text-pear-primary drop-shadow-md leading-tight mb-6">
            Expert dental care
            <br />
            with a <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
            <br />
            <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
          </h1>

          {/* Updated localized description */}
          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8">
            {localizedDescription}
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
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex lg:items-center min-h-[100svh]"> 
          <div className="max-w-2xl space-y-8">

             {/* NEW: Personalized Greeting */}
            <p className="text-xl font-semibold text-pear-gold drop-shadow-sm mb-4">
                {personalizedGreeting}
            </p>

            <h1 className="heading-serif text-[85px] font-bold text-pear-primary drop-shadow-md leading-tight">
              Expert dental care
              <br />
              with a{" "}
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">personal</span>
              <br />
              <span className="text-pear-gold font-bold drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]">touch</span>
            </h1>

            {/* Updated localized description */}
            <p className="text-xl text-white leading-relaxed max-w-lg">
              {localizedDescription}
            </p>

            <div className="flex flex-col space-y-4 max-w-md">
                {/* Buttons (Unchanged) */}
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