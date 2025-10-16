"use client";

import { useEffect, useRef, useState } from "react";
import GoogleReviews from "./GoogleReviews";
import { Star } from "lucide-react";

// New component for single-line review display
function SingleLineGoogleReviews() {
  const GOOGLE_BLUE = "#4285F4";
  const GOOGLE_RED = "#EA4335";
  const GOOGLE_YELLOW = "#FBBC05";
  const GOOGLE_GREEN = "#34A853";

  return (
    <a
      href="/testimonials"
      className="w-full bg-white shadow-md border-b border-gray-200 py-2 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <div className="flex items-center w-full justify-center">
        <span className="text-dental-green font-medium mr-2 text-sm whitespace-nowrap">See our 500+</span>
        <div className="flex mr-1">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-yellow-400 fill-current"
            />
          ))}
        </div>
        <span className="text-dental-green font-medium mr-2 text-sm">reviews on</span>
        <div className="font-normal tracking-tight leading-none text-[14px] whitespace-nowrap">
          <span style={{ color: GOOGLE_BLUE }}>G</span>
          <span style={{ color: GOOGLE_RED }}>o</span>
          <span style={{ color: GOOGLE_YELLOW }}>o</span>
          <span style={{ color: GOOGLE_BLUE }}>g</span>
          <span style={{ color: GOOGLE_GREEN }}>l</span>
          <span style={{ color: GOOGLE_RED }}>e</span>
        </div>
      </div>
    </a>
  );
}

export default function MobileGoogleReviews() {
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [journeyActive, setJourneyActive] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      window.dispatchEvent(new CustomEvent('reviews:unsticky'));
    };
  }, []);

  // Measure header height dynamically
  useEffect(() => {
    const measure = () => {
      // Target the secondary nav specifically by ID
      const header = document.querySelector(
        "#secondary-nav"
      ) as HTMLElement | null;
      const headerRect = header?.getBoundingClientRect();
      setHeaderHeight(headerRect ? Math.round(headerRect.height) : 0);
    };

    measure();
    const t1 = setTimeout(measure, 150);
    const t2 = setTimeout(measure, 400);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Listen for Treatment Journey enter/exit to coordinate behaviour
  useEffect(() => {
    const handleEnter = () => setJourneyActive(true);
    const handleExit = () => setJourneyActive(false);

    window.addEventListener("journey:enter", handleEnter);
    window.addEventListener("journey:exit", handleExit);
    return () => {
      window.removeEventListener("journey:enter", handleEnter);
      window.removeEventListener("journey:exit", handleExit);
    };
  }, []);

  // Observe scroll to toggle sticky mode
  useEffect(() => {
    const handleScroll = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const stickyThreshold = (headerHeight || 0) + 8; // 8px gap below header
      const nextSticky = rect.top <= stickyThreshold;
      setIsSticky(nextSticky);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  useEffect(() => {
    const notify = () => {
      if (!stickyRef.current) return;
      const height = stickyRef.current.offsetHeight || 0;
      const position = journeyActive ? "top" : "below-nav";
      window.dispatchEvent(
        new CustomEvent('reviews:sticky', { detail: { height, position } })
      );
    };

    if (!isSticky) {
      window.dispatchEvent(new CustomEvent('reviews:unsticky'));
      return;
    }

    notify();
    window.addEventListener('resize', notify);
    return () => {
      window.removeEventListener('resize', notify);
    };
  }, [isSticky, journeyActive]);

  return (
    <div className="w-full mx-auto">
      {/* Trigger placeholder where the widget naturally sits */}
      <div ref={triggerRef} />

      {/* Inline (non-sticky) rendering when above threshold */}
      {!isSticky && (
        <div className="mb-6 flex justify-center">
          <GoogleReviews
            className="w-full rounded-xl border border-gray-200 bg-white/95 shadow-sm"
            maxWidth="100%" // Match parent width exactly (which matches the buttons)
          />
        </div>
      )}

      {/* Sticky rendering as single line when scrolled past threshold */}
      {isSticky && (
        <div
          ref={stickyRef}
          className="fixed left-0 right-0 z-50"
          style={{
            top: journeyActive ? 0 : headerHeight,
            paddingTop: journeyActive ? "env(safe-area-inset-top, 0px)" : 0
          }}
        >
          <SingleLineGoogleReviews />
        </div>
      )}
    </div>
  );
}
