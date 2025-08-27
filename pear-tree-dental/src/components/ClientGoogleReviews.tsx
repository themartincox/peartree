"use client";

import { useEffect, useState, useRef } from "react";
import GoogleReviews from "./GoogleReviews";

export default function ClientGoogleReviews() {
  const [topPosition, setTopPosition] = useState(120); // Default position in pixels
  const [isMobile, setIsMobile] = useState(false);
  const initialPositionRef = useRef<number | null>(null);
  const hasInitialPositionRef = useRef(false); // Track if we've set initial position

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Set initial position based on hamburger menu
    const setInitialPosition = () => {
      if (isMobile && !hasInitialPositionRef.current) {
        console.log("Setting initial mobile position based on hamburger menu");

        // For mobile, find the hamburger menu or top-right navigation element
        const hamburgerMenu = document.querySelector('.hamburger, .mobile-menu, header button, .menu-toggle');
        if (hamburgerMenu) {
          const rect = hamburgerMenu.getBoundingClientRect();
          console.log("Found hamburger menu at:", rect.top, rect.right);

          // Position slightly below the hamburger
          const mobileTopPosition = rect.bottom + 10;
          setTopPosition(mobileTopPosition);
          initialPositionRef.current = mobileTopPosition;
          hasInitialPositionRef.current = true;

          console.log("Initial mobile position set relative to hamburger:", mobileTopPosition);
        } else {
          // Fallback if no hamburger found
          const defaultPosition = 60;
          setTopPosition(defaultPosition);
          initialPositionRef.current = defaultPosition;
          hasInitialPositionRef.current = true;
        }
      } else if (!hasInitialPositionRef.current) {
        // Default desktop initial position
        const defaultPosition = 120;
        setTopPosition(defaultPosition);
        initialPositionRef.current = defaultPosition;
        hasInitialPositionRef.current = true;
      }
    };

    // Run once to set initial position
    setInitialPosition();

    // Function to calculate the position after initial positioning is set
    const updatePosition = () => {
      // If we haven't set initial position yet, do that first
      if (!hasInitialPositionRef.current) {
        setInitialPosition();
        return;
      }

      // Try multiple selector strategies to find all possible navigation elements
      const navElements = document.querySelectorAll("nav");
      const headerElements = document.querySelectorAll("header");
      const secondaryNavElements = document.querySelectorAll(".secondary-nav, .secondary-navigation, header > div:nth-child(2)");

      // Debug information
      console.log("Found nav elements:", navElements.length);
      console.log("Found header elements:", headerElements.length);
      console.log("Found secondary nav elements:", secondaryNavElements.length);

      let lowestBottom = 0;

      // Check all navigation elements
      navElements.forEach((nav, i) => {
        const rect = nav.getBoundingClientRect();
        console.log(`Nav ${i} bottom:`, rect.bottom);
        if (rect.bottom > lowestBottom) {
          lowestBottom = rect.bottom;
        }
      });

      // Check header elements too
      headerElements.forEach((header, i) => {
        const rect = header.getBoundingClientRect();
        console.log(`Header ${i} bottom:`, rect.bottom);
        if (rect.bottom > lowestBottom) {
          lowestBottom = rect.bottom;
        }
      });

      // Check secondary navigation specifically
      secondaryNavElements.forEach((nav, i) => {
        const rect = nav.getBoundingClientRect();
        console.log(`Secondary nav ${i} bottom:`, rect.bottom);
        if (rect.bottom > lowestBottom) {
          lowestBottom = rect.bottom;
        }
      });

      // Also try to find any element that looks like it might be navigation
      const possibleNavElements = document.querySelectorAll(".nav, .navigation, .menu, .navbar, header > div");
      possibleNavElements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        // Only consider elements near the top of the page (likely navigation)
        if (rect.top < 200) {
          console.log(`Possible nav element ${i} bottom:`, rect.bottom);
          if (rect.bottom > lowestBottom) {
            lowestBottom = rect.bottom;
          }
        }
      });

      console.log("Lowest navigation bottom detected:", lowestBottom);

      if (lowestBottom > 0) {
        // Use appropriate gaps based on device type
        // Mobile needs less space due to smaller screen real estate
        const gap = isMobile ? 10 : 30;
        const desiredPosition = lowestBottom + gap;
        console.log(`Desired position (${isMobile ? 'mobile' : 'desktop'}):`, desiredPosition);

        // When scrolling, use initial position as minimum
        if (initialPositionRef.current !== null) {
          const newPosition = Math.max(initialPositionRef.current, desiredPosition);
          setTopPosition(newPosition);

          if (desiredPosition !== newPosition) {
            console.log("Widget position capped at initial:", initialPositionRef.current);
          } else {
            console.log("Widget position updated to:", newPosition);
          }
        }
      }
    };

    // Perform multiple position updates to catch late-loading elements
    // Skip immediate update as we've already set initial position
    const initialTimeout1 = setTimeout(updatePosition, 200);
    const initialTimeout2 = setTimeout(updatePosition, 500);
    const initialTimeout3 = setTimeout(updatePosition, 1000);
    const initialTimeout4 = setTimeout(updatePosition, 2000); // Extra long timeout

    // Add a specific debug timeout to log the DOM structure
    const debugTimeout = setTimeout(() => {
      console.log("DEBUG: Analyzing page structure for navigation elements");
      const header = document.querySelector("header");
      if (header) {
        console.log("Header children:", header.children.length);
        console.log("Header HTML:", header.outerHTML.substring(0, 150) + "...");
      }
    }, 1500);

    // Only add scroll listener after initial position is set
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    // Clean up
    return () => {
      clearTimeout(initialTimeout1);
      clearTimeout(initialTimeout2);
      clearTimeout(initialTimeout3);
      clearTimeout(initialTimeout4);
      clearTimeout(debugTimeout);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isMobile]); // Include isMobile in dependencies to recalculate when it changes

  return (
    <div
      className={`fixed z-50 shadow-md hover:shadow-lg reviews-widget-wrapper ${
        isMobile
          ? 'right-1 bg-opacity-25 hover:bg-opacity-100'
          : 'right-6 bg-opacity-80 hover:bg-opacity-100'
      } bg-white rounded-xl border border-gray-200 transition-all duration-300`}
      style={{ top: `${topPosition}px` }}
      data-testid="googlereviews-widget"
    >
      <GoogleReviews className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
