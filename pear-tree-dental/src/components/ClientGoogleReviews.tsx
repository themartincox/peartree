"use client";

import { useEffect, useState } from "react";
import GoogleReviews from "./GoogleReviews";

export default function ClientGoogleReviews() {
  const [topPosition, setTopPosition] = useState(96); // Default position in pixels

  useEffect(() => {
    // Function to calculate the position
    const updatePosition = () => {
      // Get the secondary (green) navigation element
      // Looking for the second nav element or a nav with a specific class that indicates it's the green nav
      const navElements = document.querySelectorAll("nav");
      const secondaryNav = navElements.length > 1 ? navElements[1] :
                          document.querySelector("nav.secondary-nav") ||
                          document.querySelector("header nav:last-child");

      if (secondaryNav) {
        // Get the nav's bottom position including scroll
        const navBottom = secondaryNav.getBoundingClientRect().bottom;

        // Set the widget position to maintain 10px gap
        setTopPosition(navBottom + 10);
      } else {
        // Fallback - try to find the main header and position below that
        const header = document.querySelector("header");
        if (header) {
          const headerBottom = header.getBoundingClientRect().bottom;
          setTopPosition(headerBottom + 10);
        }
      }
    };

    // Update position immediately and after a short delay to ensure all elements are fully rendered
    updatePosition();
    const initialTimeout = setTimeout(updatePosition, 500);

    // Add scroll event listener
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    // Clean up
    return () => {
      clearTimeout(initialTimeout);
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
