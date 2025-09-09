"use client";

import { useEffect, useState, useRef } from "react";
import GoogleReviews from "./GoogleReviews";
import { usePathname } from "next/navigation";
import { useReviewWidgetEvent, REVIEW_WIDGET_EVENTS } from "@/lib/reviewsWidgetState";

export default function ClientGoogleReviews() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Sticky state for mobile homepage inline widget
  const [isSticky, setIsSticky] = useState(false);
  // New state to track if floating widget should be hidden (desktop only)
  const [isHidden, setIsHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Listen for showcase widget sticky events (desktop only)
  useEffect(() => {
    if (isMobile || !isHomepage) return;

    // When showcase widget becomes sticky, hide this floating widget
    const cleanupSticky = useReviewWidgetEvent(
      REVIEW_WIDGET_EVENTS.SHOWCASE_WIDGET_STICKY,
      () => {
        setIsHidden(true);
      }
    );

    // When showcase widget becomes unsticky, show this floating widget
    const cleanupUnsticky = useReviewWidgetEvent(
      REVIEW_WIDGET_EVENTS.SHOWCASE_WIDGET_UNSTICKY,
      () => {
        setIsHidden(false);
      }
    );

    return () => {
      cleanupSticky();
      cleanupUnsticky();
    };
  }, [isMobile, isHomepage]);

  // Measure header height dynamically (for floating widget positioning)
  useEffect(() => {
    // Only need to measure header height for floating widget (desktop homepage or any non-homepage)
    if (isMobile && isHomepage) return;

    const measure = () => {
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
  }, [isMobile, isHomepage]);

  // MOBILE HOMEPAGE: inline widget that becomes sticky under header
  // Note: This is now ONLY used directly in the Hero component as InlineGoogleReviews
  // We'll return null here to avoid duplicate widgets on mobile homepage
  if (isMobile && isHomepage) {
    return null;
  }

  // DESKTOP HOMEPAGE or ANY DEVICE on OTHER PAGES: show floating widget
  // This will be a floating widget that follows as you scroll
  return (
    <div
      className={`fixed z-50 shadow-md hover:shadow-lg reviews-widget-wrapper right-6 bg-opacity-80 hover:bg-opacity-100 bg-white rounded-xl border border-pear-primary transition-all duration-500 transform ${
        isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{ top: headerHeight ? `${headerHeight + 10}px` : '100px' }}
      data-testid="googlereviews-widget"
    >
      <GoogleReviews className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
