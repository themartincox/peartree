"use client";

import { useEffect, useState, useRef } from "react";
import GoogleReviews from "./GoogleReviews";

export default function MobileGoogleReviews() {
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const triggerRef = useRef<HTMLDivElement | null>(null);

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

  // Observe scroll to toggle sticky mode
  useEffect(() => {
    const handleScroll = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      // When the top of the trigger passes the header + small gap, activate sticky
      const stickyThreshold = (headerHeight || 0) + 8; // 8px gap below header
      if (rect.top <= stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

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

      {/* Sticky rendering when scrolled past threshold */}
      {isSticky && (
        <div
          className="fixed left-0 right-0 z-50 px-4"
          style={{ top: `${headerHeight + 8}px` }}
        >
          <div
            className="mx-auto rounded-xl border border-gray-200 bg-white shadow-md"
            style={{ width: 'fit-content', maxWidth: '100%' }}
          >
            <GoogleReviews className="w-full h-full" maxWidth="100%" />
          </div>
        </div>
      )}
    </div>
  );
}
