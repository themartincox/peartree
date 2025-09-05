"use client";

import { useEffect, useState } from "react";
import GoogleReviews from "./GoogleReviews";

export default function ScrollAdjustedGoogleReviews() {
  const [topPosition, setTopPosition] = useState(96); // 24 (top-24) default position in pixels

  useEffect(() => {
    // Function to calculate the position
    const updatePosition = () => {
      // Get the navigation element
      const navElement = document.querySelector("nav");

      if (navElement) {
        // Get the nav's bottom position including scroll
        const navBottom = navElement.getBoundingClientRect().bottom;

        // Set the widget position to maintain 10px gap
        setTopPosition(navBottom + 10);
      }
    };

    // Update position immediately
    updatePosition();

    // Add scroll event listener
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    // Clean up
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed right-6 z-50 opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
      style={{ top: `${topPosition}px` }}
    >
      <GoogleReviews />
    </div>
  );
}
