"use client";

import { useEffect, useState } from "react";

export default function WelcomeScreenVariantC() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Still show if image fails
    img.src = "/images/dental-office-welcome.svg";

    // Auto-hide after 1 second and scroll to main content
    const timer = setTimeout(() => {
      setShowWelcome(false);

      // Smooth scroll to main content
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showWelcome) return null;

  return (
    <div className={`welcome-screen-c ${imageLoaded ? "image-loaded" : ""}`}>
      <div className="welcome-overlay-c" />
      <div className="welcome-content-c">
        <h1 className="welcome-text-c">Welcome to Pear Tree Dental</h1>
      </div>
    </div>
  );
}
