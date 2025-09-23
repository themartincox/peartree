"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import GoogleReviews from "./GoogleReviews";
import { usePathname } from "next/navigation";
import { useReviewWidgetEvent, REVIEW_WIDGET_EVENTS } from "@/lib/reviewsWidgetState";

export default function ClientGoogleReviews() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // New state to track if floating widget should be hidden (desktop only)
  const [isHidden, setIsHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [widgetHeight, setWidgetHeight] = useState(0);

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

  const measureWidgetHeight = useCallback(() => {
    if (!widgetRef.current) return 0;
    const height = widgetRef.current.offsetHeight || 0;
    setWidgetHeight(height);
    return height;
  }, []);

  useEffect(() => {
    measureWidgetHeight();
    window.addEventListener("resize", measureWidgetHeight);

    let observer: MutationObserver | null = null;
    if (widgetRef.current) {
      observer = new MutationObserver(() => {
        measureWidgetHeight();
      });
      observer.observe(widgetRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      window.removeEventListener("resize", measureWidgetHeight);
      if (observer) observer.disconnect();
    };
  }, [measureWidgetHeight]);

  // MOBILE HOMEPAGE: inline widget handled inside Hero component
  if (isMobile && isHomepage) {
    return null;
  }

  // DESKTOP HOMEPAGE or ANY DEVICE on OTHER PAGES: show floating widget
  // This will be a floating widget that follows as you scroll
  const baseTop = headerHeight ? headerHeight + 10 : 100;
  const badgeTop = baseTop + (widgetHeight || 0) + 12;

  return (
    <>
      <div
        className={`fixed z-50 shadow-md hover:shadow-lg reviews-widget-wrapper right-6 bg-opacity-80 hover:bg-opacity-100 bg-white rounded-xl border border-pear-primary transition-all duration-500 transform ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } flex flex-col w-[150px] sm:w-[158px]`}
        style={{ top: `${baseTop}px` }}
        data-testid="googlereviews-widget"
        ref={widgetRef}
      >
        <GoogleReviews className="w-full opacity-80 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div
        className={`fixed z-40 shadow-md hover:shadow-lg right-6 bg-white/80 hover:bg-white rounded-xl border border-gray-200 transition-all duration-500 transform ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } flex items-center justify-center w-[100px]`}
        style={{ top: `${badgeTop}px` }}
        aria-hidden={isHidden}
      >
        <Image
          src="/images/pear-tree-dental-best-dental-clinic-nottingham-nottinghamshire.webp"
          alt="Award badge recognising Pear Tree Dental as Nottingham's best dental clinic"
          width={400}
          height={400}
          className="w-full h-auto rounded-lg shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
          sizes="(min-width: 1024px) 100px"
        />
      </div>
    </>
  );
}
