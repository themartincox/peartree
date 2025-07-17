"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Camera,
  Phone,
  Calendar,
  Sparkles,
  Stethoscope,
  Wrench,
  Smile,
  Zap,
  Heart,
  Circle
} from "lucide-react";

// Icon mapping to resolve string names to components
const iconMap = {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Camera,
  Phone,
  Calendar,
  Sparkles,
  Stethoscope,
  Wrench,
  Smile,
  Zap,
  Heart,
  Circle
};

interface ServiceHeroProps {
  // Basic content
  title: string;
  subtitle?: string;
  description: string;

  // Visual elements
  heroImage?: string;
  heroVideo?: string; // New: Video file path
  heroVideoType?: "mp4" | "webm"; // New: Video format
  heroImageAlt: string;
  badgeText: string;
  badgeIcon?: string;

  // Benefits/features (up to 4)
  keyBenefits?: Array<{
    text: string;
    icon?: string; // Changed to string
  }>;

  // Call-to-action buttons
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: string; // Changed to string
  };

  // Trust indicators
  trustIndicators?: Array<{
    icon: string; // Changed to string
    text: string;
  }>;

  // Styling options
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
  fallbackImage?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  heroImage,
  heroVideo,
  heroVideoType = "mp4",
  heroImageAlt,
  badgeText,
  badgeIcon = "Circle",
  keyBenefits = [],
  primaryCTA = {
    text: "Book Consultation",
    href: "/book"
  },
  secondaryCTA = {
    text: "Learn More",
    icon: "ArrowRight"
  },
  trustIndicators = [
    { icon: "Star", text: "5-star rated" },
    { icon: "Shield", text: "GDC registered" },
    { icon: "Clock", text: "20+ years experience" }
  ],
  gradientFrom = "soft-pink/10",
  gradientTo = "soft-lavender/10",
  textColor = "pear-primary",
  fallbackImage = "/images/dental-practice-hero-burton-joyce.webp"
}: ServiceHeroProps) {

  // Helper function to get icon component from string
  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Circle;
  };

  const BadgeIcon = getIcon(badgeIcon);
  const SecondaryCTAIcon = getIcon(secondaryCTA?.icon || "ArrowRight");

  return (
    <section className={`pt-32 pb-16 bg-gradient-to-br from-${gradientFrom} via-white to-${gradientTo}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile-first content order: Title → Video → Badge → Text → Benefits */}
          <div className="space-y-8 order-1 lg:order-1">
            {/* H1 Title - First on mobile for immediate page identification */}
            <div className="space-y-4 lg:order-2">
              <h1 className={`heading-serif text-4xl sm:text-6xl font-bold text-${textColor} leading-tight`}>
                {title}
                {subtitle && (
                  <span className="text-soft-pink block">{subtitle}</span>
                )}
              </h1>
            </div>

            {/* Hero Media - Second on mobile, appears above other content */}
            <div className="relative lg:hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {heroVideo ? (
                  // Video Hero
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroImage || fallbackImage}
                  >
                    <source src={heroVideo} type={`video/${heroVideoType}`} />
                    <img
                      src={fallbackImage}
                      alt={heroImageAlt}
                      className="w-full h-full object-cover"
                    />
                  </video>
                ) : (
                  // Image Hero
                  <Image
                    src={heroImage || fallbackImage}
                    alt={heroImageAlt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                )}
              </div>
            </div>

            {/* Badge - Third on mobile, provides context */}
            <div className="lg:order-1">
              <Badge variant="secondary" className={`bg-${textColor} text-white`}>
                <BadgeIcon className="w-4 h-4 mr-2" />
                {badgeText}
              </Badge>
            </div>

            {/* Description - Fourth on mobile */}
            <div className="lg:order-3">
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Key Benefits - Fifth on mobile */}
            {keyBenefits.length > 0 && (
              <div className="grid grid-cols-2 gap-4 lg:order-4">
                {keyBenefits.slice(0, 4).map((benefit, index) => {
                  const BenefitIcon = getIcon(benefit.icon || "CheckCircle");
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <BenefitIcon className={`w-5 h-5 text-${textColor}`} />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Buttons - Sixth on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 lg:order-5">
              <Button
                size="lg"
                className={`bg-gradient-to-r from-${textColor} to-${textColor}/80 text-white font-semibold group`}
                onClick={primaryCTA.onClick}
                asChild={!!primaryCTA.href}
              >
                {primaryCTA.href ? (
                  <a href={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <>
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  className={`border-${textColor} text-${textColor} hover:bg-${textColor} hover:text-white`}
                  onClick={secondaryCTA.onClick}
                  asChild={!!secondaryCTA.href}
                >
                  {secondaryCTA.href ? (
                    <a href={secondaryCTA.href}>
                      <SecondaryCTAIcon className="w-5 h-5 mr-2" />
                      {secondaryCTA.text}
                    </a>
                  ) : (
                    <>
                      <SecondaryCTAIcon className="w-5 h-5 mr-2" />
                      {secondaryCTA.text}
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Trust Indicators - Last on mobile */}
            {trustIndicators.length > 0 && (
              <div className="flex items-center space-x-6 text-sm text-gray-600 lg:order-6">
                {trustIndicators.map((indicator, index) => {
                  const IndicatorIcon = getIcon(indicator.icon);
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IndicatorIcon className="w-4 h-4 text-pear-gold" />
                      <span>{indicator.text}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Hero Media Column - Desktop only (hidden on mobile since it appears inline above) */}
          <div className="relative order-2 lg:order-2 hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {heroVideo ? (
                // Video Hero
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={heroImage || fallbackImage}
                >
                  <source src={heroVideo} type={`video/${heroVideoType}`} />
                  <img
                    src={fallbackImage}
                    alt={heroImageAlt}
                    className="w-full h-full object-cover"
                  />
                </video>
              ) : (
                // Image Hero
                <Image
                  src={heroImage || fallbackImage}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
