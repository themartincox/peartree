"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Stethoscope,
  Clipboard,
  CreditCard,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface JourneyStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  mediaType: "image" | "video";
  imagePath?: string;
  videoPath?: string;
  posterPath?: string;
  imageDescription: string;
  features: string[];
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "One",
    title: "Your consultation",
    description:
      "Following an initial phone call with our patient concierge, your treatment journey begins with a consultation at our modern, comfortable practice in Burton Joyce, Nottinghamshire.",
    icon: MessageCircle,
    image: "consultation",
    mediaType: "image",
    imagePath: "/images/treatment-journey/consultation.webp",
    imageDescription:
      "Patient consultation with dental professional at Pear Tree Dental",
    features: [
      "Meet your Pear Tree Dental consultant",
      "Discuss your concerns or the issues that you'd like to address",
      "Discover treatment options",
    ],
  },
  {
    number: "Two",
    title: "Oral health assessment",
    description:
      "You'll undergo a comprehensive oral health assessment where your dentist will:",
    icon: Stethoscope,
    image: "assessment",
    mediaType: "video",
    videoPath: "/images/treatment-journey/assessment.mp4",
    posterPath: "/images/treatment-journey/assessment-poster.webp",
    imageDescription:
      "Comprehensive dental examination and digital imaging technology",
    features: [
      "Look at the condition and health of your teeth and gums",
      "Take images of your mouth and teeth using the latest imaging technologies",
      "Identify any issues that you may or may not be aware of",
    ],
  },
  {
    number: "Three",
    title: "Discuss your treatment plan",
    description:
      "Now we understand your concerns and have a 360-degree view of your oral health, we can determine which treatments will be most effective in optimising your oral health and appearance.",
    icon: Clipboard,
    image: "planning",
    mediaType: "image",
    imagePath: "/images/treatment-journey/planning.webp",
    imageDescription:
      "Treatment planning discussion between dentist and patient",
    features: [
      "Personalised recommendations",
      "Ask any questions you may have",
      "Receive honest advice",
    ],
  },
  {
    number: "Four",
    title: "Discuss your payment options",
    description:
      "We believe that everyone deserves to have healthy, beautiful teeth and offer a range of payment plans to help spread the cost.",
    icon: CreditCard,
    image: "payment",
    mediaType: "image",
    imagePath: "/images/treatment-journey/payment-consultation.webp",
    imageDescription: "Payment options and financial planning consultation",
    features: ["Transparent pricing", "Routine dentistry plans", "Payment plans"],
  },
  {
    number: "Five",
    title: "Get started with your treatment",
    description:
      "Our experienced and compassionate team are on hand to support you at every stage of your treatment.",
    icon: Heart,
    image: "treatment",
    mediaType: "image",
    imagePath: "/images/treatment-journey/treatment.webp",
    imageDescription: "Professional dental treatment in progress",
    features: [
      "Tips for treatment preparation",
      "Answer any questions you have at any stage",
      "Experts in nervous/anxious patients",
    ],
  },
];

const COLOR_CLASSES = [
  "bg-gradient-to-br from-pear-primary to-pear-primary/80",
  "bg-gradient-to-br from-pear-gold to-pear-gold/80",
  "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
  "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90",
  "bg-gradient-to-br from-pear-primary to-pear-gold",
];

const TreatmentJourney: React.FC = () => {
  const journeySteps = useMemo(() => JOURNEY_STEPS, []);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInJourneySection, setIsInJourneySection] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const GAP_PX = 8;
  const [reviewsHeight, setReviewsHeight] = useState(0);

  // listen to sticky reviews widget height
  useEffect(() => {
    const onSticky = (e: Event) => {
      const ce = e as CustomEvent;
      const h = typeof ce.detail?.height === "number" ? ce.detail.height : 0;
      setReviewsHeight(h);
    };
    const onUnsticky = () => setReviewsHeight(0);

    window.addEventListener("reviews:sticky", onSticky as EventListener);
    window.addEventListener("reviews:unsticky", onUnsticky as EventListener);
    return () => {
      window.removeEventListener("reviews:sticky", onSticky as EventListener);
      window.removeEventListener("reviews:unsticky", onUnsticky as EventListener);
    };
  }, []);

  // expose top offset for sticky
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--journey-top",
      `${reviewsHeight + GAP_PX}px`
    );
  }, [reviewsHeight]);

  // IO for section presence + active step
  useEffect(() => {
    const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!containerRef.current || steps.length === 0) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => setIsInJourneySection(entries[0]?.isIntersecting ?? false),
      { root: null, threshold: 0.05 }
    );
    sectionObserver.observe(containerRef.current);

    const topOffset = -(reviewsHeight + GAP_PX);
    const stepObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) {
      const idx = steps.indexOf(visible.target as HTMLDivElement);
      if (idx !== -1) setActiveStep(idx);
    }
  },
  {
    root: null,
    // Keep the existing top offset for sticky widgets...
    rootMargin: `${topOffset}px 0px -20% 0px`, // <-- adds bottom leeway
    threshold: [0.5, 0.75],                     // <-- easier to remain "active"
  }
);

    steps.forEach((el) => stepObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      stepObserver.disconnect();
    };
  }, [journeySteps.length, reviewsHeight]);

  // progress from active index
  useEffect(() => {
    const denom = Math.max(1, journeySteps.length - 1);
    setScrollProgress(activeStep / denom);
  }, [activeStep, journeySteps.length]);

  // pause/play videos
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeStep) vid.play().catch(() => {});
      else vid.pause();
    });
  }, [activeStep]);


  const scrollToStep = (idx: number) => {
    const el = stepRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

useEffect(() => {
  const recalc = () => {
    if (!containerRef.current) return;
    const headerH = headerRef.current?.offsetHeight ?? 0;

    const root = getComputedStyle(document.documentElement);
    const topPx = parseInt(root.getPropertyValue("--journey-top")) || 0;

    const vh = window.innerHeight;
    // Track = header + N*vh + top offset + small buffer
    const buffer = 24; // tweak if you see a tiny clip
    const total = headerH + journeySteps.length * vh + topPx + buffer;

    containerRef.current.style.height = `${total}px`;
  };

  recalc();
  window.addEventListener("resize", recalc);
  return () => window.removeEventListener("resize", recalc);
}, [journeySteps.length, reviewsHeight]);

  return (
    <section className="treatment-journey-section py-0 bg-pear-background relative z-10">
      <div className="h-16 md:h-16 bg-pear-background w-full" />

      {isInJourneySection && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[300] hidden lg:block animate-in fade-in duration-300">
          <div className="flex flex-col space-y-2">
            {journeySteps.map((step, index) => (
              <button
                key={`nav-${index}`}
                onClick={() => scrollToStep(index)}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                aria-current={activeStep === index ? "step" : undefined}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeStep === index
                    ? "bg-pear-primary border-pear-primary scale-150 shadow-lg"
                    : "bg-white border-gray-300 hover:border-pear-primary"
                }`}
              />
            ))}
          </div>

          <div className="mt-4 w-1 h-24 bg-gray-200 rounded-full relative">
            <div
              className="absolute top-0 left-0 w-full bg-pear-primary rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {/* TALL CONTAINER drives stacked-sticky */}
      <div
        ref={containerRef}
        className="relative z-20 pb-6 md:pb-5 lg:pb-2"
        style={{ height: `calc(${journeySteps.length} * 100svh)` }}
      >
        {/* header */}
        <div
          ref={headerRef}
          data-journey-header
          className="z-40 bg-pear-background py-6 sm:py-8 border-b border-gray-100 w-full"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pear-primary mb-4 sm:mb-6">
                Your Treatment Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Every patient is unique which is why your patient journey with
                Pear Tree Dental is different. By taking the time to get to
                know you, your immediate dental needs and your smile goals we
                build a relationship with our patients for the long-term.
              </p>
            </div>
          </div>
        </div>


        {/* sr live region */}
        <div aria-live="polite" className="sr-only">
          {`Step ${activeStep + 1} of ${journeySteps.length}: ${
            journeySteps[activeStep]?.title ?? ""
          }`}
        </div>

        {/* STICKY STACK */}
        {journeySteps.map((step, index) => {
          const Icon = step.icon;
          const isReverse = index % 2 === 1;
          const z = 100 + index; // later steps above earlier steps

          return (
            <div
              key={`step-${index}`}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
className="sticky top-[var(--journey-top)] h-[100svh] flex items-center lg:items-start justify-center pt-10 lg:pt-8 bg-pear-background overflow-visible contain-paint scroll-mt-[var(--journey-top)]"              style={{ zIndex: z }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                    isReverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* TEXT */}
                  <div
                    className={`space-y-4 sm:space-y-6 ${
                      isReverse ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${
                          COLOR_CLASSES[index % COLOR_CLASSES.length]
                        } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Step {index + 1} — {step.number}
                        </div>
                        <h3 className="heading-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-pear-primary">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={`feature-${index}-${featureIndex}`}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {index === journeySteps.length - 1 && (
                      <div className="pt-4 sm:pt-6">
                        <Link href="/book">
                          <Button className="btn-gold text-white font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
                            Start Your Journey
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* MEDIA */}
                  <div className={`${isReverse ? "lg:col-start-1" : "lg:col-start-2"}`}>
                    <Card className="overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] relative journey-media">
                        {step.mediaType === "video" ? (
                          <>
                            <video
                              ref={(el) => (videoRefs.current[index] = el)}
                              className="w-full h-full object-cover"
                              poster={step.posterPath}
                              muted
                              playsInline
                              loop
                              preload="metadata"
                              aria-label={step.imageDescription}
                              controls={false}
                              disablePictureInPicture
                              controlsList="nodownload noplaybackrate noremoteplayback"
                            >
                              <source src={step.videoPath} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-pear-primary/30 to-transparent pointer-events-none" />
                          </>
                        ) : step.imagePath ? (
                          <>
                            <Image
                              src={step.imagePath}
                              alt={step.imageDescription}
                              fill
                              className="object-cover will-change-transform"
                              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 560px"
                              priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pear-primary/30 to-transparent pointer-events-none" />
                          </>
                        ) : (
                          <div className="bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center h-full">
                            <div className="text-center px-4">
                              <h4 className="text-base sm:text-lg font-bold text-pink-700 mb-2">
                                {step.image.toUpperCase()} IMAGE
                              </h4>
                              <p className="text-pink-600 text-xs sm:text-sm">
                                {step.imageDescription}
                              </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-400/30 to-transparent" />
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx global>{`
        :root {
          --journey-top: 8px;
        }
        /* Ensure parents don't kill sticky */
        .treatment-journey-section {
          overflow: visible !important;
        }
        /* Flicker guards */
        .journey-media {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          .treatment-journey-section * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TreatmentJourney;
