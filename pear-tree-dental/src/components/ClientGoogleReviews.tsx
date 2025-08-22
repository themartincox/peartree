"use client";

import { useEffect, useState, useRef } from "react";
import GoogleReviews from "./GoogleReviews";

export default function ClientGoogleReviews() {
  const [topPosition, setTopPosition] = useState(120); // Increased default position
  const initialPositionRef = useRef<number | null>(null);

  useEffect(() => {
    // Function to calculate the position
    const updatePosition = () => {
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
        // Use a larger gap (30px) to ensure we're safely below all navigation
        const desiredPosition = lowestBottom + 30;
        console.log("Desired position:", desiredPosition);

        // First render - set initial position
        if (initialPositionRef.current === null) {
          initialPositionRef.current = desiredPosition;
          setTopPosition(desiredPosition);
          console.log("Initial widget position set to:", desiredPosition);
        }
        // Subsequent renders - respect the initial position as a minimum
        else {
          const newPosition = Math.max(initialPositionRef.current, desiredPosition);
          setTopPosition(newPosition);

          if (desiredPosition !== newPosition) {
            console.log("Widget position capped at initial:", initialPositionRef.current);
          } else {
            console.log("Widget position updated to:", newPosition);
          }
        }
      } else {
        // Fallback - if we can't find any navigation, use a safe default
        console.log("No navigation elements found, using safe default position");
        if (initialPositionRef.current === null) {
          initialPositionRef.current = 120;
          setTopPosition(120);
        }
      }
    };

    // Perform multiple position updates to catch late-loading elements
    updatePosition(); // Immediate

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
  }, []);

  return (
    <div
      className="fixed right-6 z-50 opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg reviews-widget-wrapper"
      style={{ top: `${topPosition}px` }}
      data-testid="googlereviews-widget"
    >
      <GoogleReviews />
    </div>
  );
}
