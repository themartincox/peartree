"use client";

import {
  ArrowRight,
  CheckCircle,
  Clipboard,
  CreditCard,
  Heart,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// TypeScript interfaces
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

const TreatmentJourney = (): React.JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInJourneySection, setIsInJourneySection] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const journeySteps = [
    {
      number: "One",
      title: "Your consultation",
      description:
        "Following an initial phone call with our patient concierge, your treatment journey begins with a consultation at our modern, comfortable practice in Burton Joyce, Nottinghamshire.",
      icon: MessageCircle,
      image: "consultation",
      mediaType: "image" as const,
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
      mediaType: "video" as const,
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
      mediaType: "image" as const,
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
      mediaType: "image" as const,
      imagePath: "/images/treatment-journey/payment-consultation.webp",
      imageDescription: "Payment options and financial planning consultation",
      features: [
        "Transparent pricing",
        "Routine dentistry plans",
        "Payment plans",
      ],
    },
    {
      number: "Five",
      title: "Get started with your treatment",
      description:
        "Our experienced and compassionate team are on hand to support you at every stage of your treatment.",
      icon: Heart,
      image: "treatment",
      mediaType: "image" as const,
      imagePath: "/images/treatment-journey/treatment.webp",
      imageDescription: "Professional dental treatment in progress",
      features: [
        "Tips for treatment preparation",
        "Answer any questions you have at any stage",
        "Experts in nervous/anxious patients",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Check if we're in the journey section (container is visible on screen)
      const isVisible =
        containerRect.top < viewportHeight && containerRect.bottom > 0;
      setIsInJourneySection(isVisible);

      // Calculate overall progress through the container
      const totalProgress = Math.max(
        0,
        Math.min(1, -containerRect.top / (containerHeight - viewportHeight)),
      );
      setScrollProgress(totalProgress);

      // Calculate which step should be active
      const stepProgress = totalProgress * journeySteps.length;
      const currentStep = Math.min(
        Math.floor(stepProgress),
        journeySteps.length - 1,
      );
      setActiveStep(currentStep);

      // Apply transforms to each step with proper sticky behavior
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const stepElement = step;

        if (index <= currentStep) {
          // Current and previous steps - stick in place
          stepElement.style.transform = "translateY(0px)";
          stepElement.style.zIndex = `${10 + index}`;
          stepElement.style.position = "sticky";
          stepElement.style.top = "0px";
        } else {
          // Future steps - positioned normally below
          stepElement.style.transform = "translateY(0px)";
          stepElement.style.zIndex = `${10 + index}`;
          stepElement.style.position = "relative";
          stepElement.style.top = "auto";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [journeySteps.length]);

  const scrollToStep = (stepIndex: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const viewportHeight = window.innerHeight;
    const totalHeight = container.offsetHeight;

    // Calculate scroll position for the desired step
    const targetProgress = stepIndex / journeySteps.length;
    const targetScroll =
      containerTop + targetProgress * (totalHeight - viewportHeight);

    window.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-0 bg-white">
      {/* Fixed Navigation Tabs - Only visible when in journey section */}
      {isInJourneySection && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block animate-in fade-in duration-300">
          <div className="flex flex-col space-y-2">
            {journeySteps.map((_step, index) => (
              <button
                key={`nav-${index}`}
                onClick={() => scrollToStep(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeStep === index
                    ? "bg-pear-primary border-pear-primary scale-150 shadow-lg"
                    : "bg-white border-gray-300 hover:border-pear-primary"
                }`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 w-1 h-24 bg-gray-200 rounded-full relative">
            <div
              className="absolute top-0 left-0 w-full bg-pear-primary rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${journeySteps.length * 100}vh` }}
      >
        {/* Header Section */}
        <div className="absolute top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm py-6 sm:py-8 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pear-primary mb-4 sm:mb-6">
                Your Treatment Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Every patient is unique which is why your patient journey with
                Pear Tree Dental is different. By taking the time to get to know
                you, your immediate dental needs and your smile goals we build a
                relationship with our patients for the long-term.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        {journeySteps.map((step, index) => {
          const Icon = step.icon;
          const isReverse = index % 2 === 1;

          const colorClasses = [
            "bg-gradient-to-br from-pear-primary to-pear-primary/80",
            "bg-gradient-to-br from-pear-gold to-pear-gold/80",
            "bg-gradient-to-br from-pear-primary/90 to-pear-gold/90",
            "bg-gradient-to-br from-pear-gold/90 to-pear-primary/90",
            "bg-gradient-to-br from-pear-primary to-pear-gold",
          ];

          return (
            <div
              key={`step-${index}`}
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              className="step-item-wrapper h-screen flex items-center justify-center transition-all duration-500 ease-out group bg-white"
              style={{
                zIndex: 10 + index,
              }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                    isReverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-4 sm:space-y-6 ${isReverse ? "lg:col-start-2" : ""}`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClasses[index]} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3
                          className={`heading-serif text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                            index % 2 === 0
                              ? "text-pear-primary group-hover:text-pear-gold"
                              : "text-pear-primary group-hover:text-pear-primary/80"
                          }`}
                        >
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
                          <Button
                            size="lg"
                            className="btn-gold text-white font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base"
                          >
                            Start Your Journey
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Image/Video */}
                  <div
                    className={`${isReverse ? "lg:col-start-1" : "lg:col-start-2"}`}
                  >
                    <Card className="overflow-hidden shadow-2xl transform hover:scale-105 hover:shadow-pear-gold group-hover:shadow-3xl transition-all duration-300">
                      <div className="aspect-[4/3] relative">
                        {step.mediaType === "video" ? (
                          <>
                            <video
                              className="w-full h-full object-cover"
                              poster={step.posterPath}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              aria-label={step.imageDescription}
                            >
                              <source src={step.videoPath} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-pear-primary/40 to-transparent pointer-events-none" />
                          </>
                        ) : step.imagePath ? (
                          <>
                            <Image
                              src={step.imagePath}
                              alt={step.imageDescription}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pear-primary/40 to-transparent" />
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
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-400 to-transparent" />
                          </div>
                        )}

                        {/* Decorative SVG Overlay for placeholder only */}
                        {!step.imagePath && step.mediaType !== "video" && (
                          <div className="absolute inset-0 pointer-events-none opacity-30">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 400 300"
                              className="absolute inset-0"
                            >
                              <path
                                d="M50,150 Q200,50 350,150 Q200,250 50,150"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeOpacity="0.6"
                              />
                            </svg>
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
    </section>
  );
};

export default TreatmentJourney;
