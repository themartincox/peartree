"use client";

import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Circle,
  Clock,
  Heart,
  MessageCircle,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useConversionTracking } from "@/hooks/useConversionTracking";

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
  Circle,
  Award,
  Users,
  MessageCircle,
  ChevronDown,
};

interface ServiceHeroProps {
  // Basic content
  title: string;
  subtitle?: string;
  description: string;

  // Visual elements
  heroImage?: string;
  heroVideo?: string;
  heroVideoType?: "mp4" | "webm";
  heroImageAlt?: string;
  badgeText?: string;
  badgeIcon?: string;

  // Benefits/features (up to 4)
  keyBenefits?: Array<{
    text: string;
    icon?: string;
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
    icon?: string;
  };

  // Trust indicators
  trustIndicators?: Array<{
    icon: string;
    text: string;
  }>;

  // Stats overlay (optional)
  stats?: {
    primary: string;
    secondary: string;
    additional?: string[];
  };

  // Testimonials (optional)
  testimonials?: Array<{
    text: string;
    author: string;
  }>;

  // Key points (optional)
  keyPoints?: string[];

  // Styling options
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
  fallbackImage?: string;

  // Additional
  className?: string;
  layout?: string;
  theme?: string;
  priority?: "high" | "normal";
  videoScale?: number; // Scale factor for video size (1.0 = normal, 1.15 = 15% larger)
  mobileVideoScale?: number; // Mobile-specific video scale factor
  hideMembershipLink?: boolean; // Hide the membership link in secondary CTAs
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
    href: "/book",
  },
  secondaryCTA = {
    text: "",
    href: "",
  },
  trustIndicators = [
    { icon: "Star", text: "5-star rated" },
    { icon: "Shield", text: "GDC registered" },
    { icon: "Clock", text: "20+ years experience" },
  ],
  stats,
  testimonials = [],
  keyPoints = [],
  gradientFrom = "soft-pink/10",
  gradientTo = "soft-lavender/10",
  textColor = "pear-primary",
  fallbackImage = "/images/dental-practice-hero-burton-joyce.webp",
  className = "",
  layout = "default",
  theme = "default",
  priority = "high",
  videoScale = 1.0,
  mobileVideoScale,
  hideMembershipLink = false,
}: ServiceHeroProps) {
  const [expandedStats, setExpandedStats] = useState(false);
  const {
    trackServiceInterest,
    trackPhoneClick,
    trackBookingAttempt,
    trackLocationConversion,
  } = useConversionTracking();

  // Memoize service type for tracking
  const serviceType = useMemo(() => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("emergency") || titleLower.includes("urgent"))
      return "emergency";
    if (
      titleLower.includes("whitening") ||
      titleLower.includes("veneers") ||
      titleLower.includes("cosmetic") ||
      titleLower.includes("smile")
    )
      return "cosmetic";
    if (
      titleLower.includes("orthodontics") ||
      titleLower.includes("invisalign") ||
      titleLower.includes("straighten")
    )
      return "orthodontics";
    if (titleLower.includes("implant")) return "implants";
    return "general";
  }, [title]);

  // Helper function to get icon component from string
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return Circle;
    return iconMap[iconName as keyof typeof iconMap] || Circle;
  };

  // Enhanced tracking handlers
  const handleServiceInterest = () => {
    trackServiceInterest(
      title,
      serviceType as "emergency" | "cosmetic" | "general" | "orthodontics",
    );
  };

  const handlePhoneClick = () => {
    trackPhoneClick("service_hero", "0115 931 2935");
    handleServiceInterest();
  };

  const handleBookingClick = () => {
    trackBookingAttempt("service_hero", "booking");
    handleServiceInterest();
  };

  const handleMembershipClick = () => {
    trackLocationConversion("membership_interest_from_service", "burton_joyce");
  };

  const handleStatsExpand = () => {
    setExpandedStats(!expandedStats);
    trackLocationConversion("stats_engagement", "burton_joyce");
  };

  const handleTestimonialClick = () => {
    trackLocationConversion("testimonial_engagement", "burton_joyce");
  };

  // Theme classes (could be expanded for more themes)
  const themeClasses = {
    background: `bg-gradient-to-br from-${gradientFrom} via-white to-${gradientTo}`,
    accent: `bg-${textColor} text-white`,
  };

  // Badge icon
  const BadgeIcon = getIcon(badgeIcon);
  // Secondary CTA icon
  const SecondaryCTAIcon = getIcon(secondaryCTA?.icon || "ArrowRight");

  return (
    <section
      className={`pt-12 sm:pt-32 pb-16 ${themeClasses.background} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column - Mobile First Layout */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* H1 Title - First for immediate page identification */}
            <div className="space-y-4">
              <h1
                className={`heading-serif text-[40px] sm:text-6xl font-bold text-${textColor} leading-tight`}
              >
                {title}
                {subtitle && (
                  <span className="text-soft-pink block">{subtitle}</span>
                )}
              </h1>
            </div>

            {/* Visual Content - Second for engagement (mobile only) */}
            <div className="lg:hidden mb-6 -mx-8">
              {heroVideo ? (
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    transform: `scale(${mobileVideoScale || videoScale})`,
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroImage || fallbackImage}
                    aria-label={heroImageAlt || `${title} demonstration video`}
                  >
                    <source src={heroVideo} type={`video/${heroVideoType}`} />
                    <img
                      src={fallbackImage}
                      alt={heroImageAlt || title}
                      className="w-full h-full object-cover"
                    />
                  </video>
                </div>
              ) : (
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    transform: `scale(${mobileVideoScale || videoScale})`,
                  }}
                >
                  <Image
                    src={heroImage || fallbackImage}
                    alt={heroImageAlt || title}
                    fill
                    className="object-cover"
                    priority={priority === "high"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              )}
            </div>

            {/* Badge - Third for context */}
            {badgeText && (
              <Badge
                variant="secondary"
                className={`mb-4 sm:mb-6 ${themeClasses.accent}`}
              >
                <BadgeIcon className="w-4 h-4 mr-2" />
                {badgeText}
              </Badge>
            )}

            {/* Description - Fourth */}
            <div className="lg:order-3">
              <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Key Benefits and Key Points - Fifth */}
            {keyPoints.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-dental-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {keyBenefits.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-6 sm:mb-8">
                {keyBenefits.slice(0, 4).map((benefit, index) => {
                  const BenefitIcon = getIcon(benefit.icon || "CheckCircle");
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <BenefitIcon className={`w-5 h-5 text-${textColor}`} />
                      <span className="text-sm font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Buttons - Conversion tracking */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pear-primary to-pear-primary/80 text-white font-semibold group"
                onClick={handlePhoneClick}
              >
                <a href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call: 0115 931 2935
                </a>
              </Button>

              <Button
                asChild={!!primaryCTA.href}
                variant="outline"
                size="lg"
                className="border-2 border-pear-primary text-pear-primaryte hover:bg-pear-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group"
                onClick={handleBookingClick}
              >
                {primaryCTA.href ? (
                  <Link href={primaryCTA.href}>
                    <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    {primaryCTA.text}
                  </Link>
                ) : (
                  <>
                    <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    {primaryCTA.text}
                  </>
                )}
              </Button>
            </div>

            {/* Secondary CTAs with tracking */}
            <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
              {!hideMembershipLink && (
                <Button
                  asChild
                  variant="link"
                  className="text-pear-primary hover:text-pear-primary/80 underline underline-offset-4"
                  onClick={handleMembershipClick}
                >
                  <Link href="/membership">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Explore Membership Plans
                  </Link>
                </Button>
              )}

              {testimonials.length > 0 && (
                <Button
                  asChild
                  variant="link"
                  className="text-gray-600 hover:text-pear-primary underline underline-offset-4"
                  onClick={handleTestimonialClick}
                >
                  <Link href="/testimonials">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Read Patient Reviews
                  </Link>
                </Button>
              )}

              {secondaryCTA?.text && (
                <Button
                  asChild={!!secondaryCTA.href}
                  variant="link"
                  className="text-pear-primary hover:text-pear-primary/80 underline underline-offset-4"
                  onClick={secondaryCTA.onClick || handleServiceInterest}
                >
                  {secondaryCTA.href ? (
                    <Link href={secondaryCTA.href}>
                      <SecondaryCTAIcon className="h-4 w-4 mr-2" />
                      {secondaryCTA.text}
                    </Link>
                  ) : (
                    <>
                      <SecondaryCTAIcon className="h-4 w-4 mr-2" />
                      {secondaryCTA.text}
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Trust Indicators */}
            {trustIndicators.length > 0 && (
              <div className="flex items-center space-x-6 text-sm text-gray-600 mt-8">
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

          {/* Images/Video Column - Desktop Only */}
          <div className="lg:col-span-5 order-1 lg:order-2 hidden lg:block">
            <div className="relative">
              {heroVideo ? (
                <div
                  className="relative aspect-[4/3] overflow-hidden -m-6"
                  style={{ transform: `scale(${videoScale})` }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroImage || fallbackImage}
                    aria-label={heroImageAlt || `${title} demonstration video`}
                  >
                    <source src={heroVideo} type={`video/${heroVideoType}`} />
                    <img
                      src={fallbackImage}
                      alt={heroImageAlt || title}
                      className="w-full h-full object-cover"
                    />
                  </video>
                </div>
              ) : (
                <div
                  className="relative aspect-[4/3] overflow-hidden -m-6"
                  style={{ transform: `scale(${videoScale})` }}
                >
                  <Image
                    src={heroImage || fallbackImage}
                    alt={heroImageAlt || title}
                    fill
                    className="object-cover"
                    priority={priority === "high"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              )}

              {/* Stats Overlay with tracking */}
              {stats && (
                <Card className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200">
                  <CardContent className="p-4">
                    <button
                      onClick={handleStatsExpand}
                      className="flex items-center space-x-3 text-left w-full hover:bg-gray-50 rounded-lg p-2 transition-colors"
                    >
                      <div className="w-10 h-10 bg-dental-green rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-pear-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dental-navy">
                          {stats.primary}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stats.secondary}
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${expandedStats ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedStats && stats.additional && (
                      <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                        {stats.additional.map((stat, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <Star className="h-3 w-3 text-pear-gold" />
                            <span className="text-xs text-gray-600">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Trust indicator */}
              <div className="absolute -top-4 -right-4 bg-pear-gold rounded-xl p-4 shadow-xl opacity-70">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-white" />
                  <div className="text-white">
                    <div className="text-sm font-bold">2,000+</div>
                    <div className="text-xs opacity-90">Happy Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced testimonials section with tracking */}
        {testimonials.length > 0 && (
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                What Our Patients Say
              </h3>
              <p className="text-gray-600">
                Real experiences from {serviceType} treatment patients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-pear-gold fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <cite className="text-sm font-semibold text-pear-primary">
                      — {testimonial.author}
                    </cite>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
