"use client";

import { useEffect, useState } from "react";

export default function WelcomeScreenVariantB() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
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
    <div className="welcome-screen-b">
      <div className="welcome-content-b">
        <h1 className="welcome-text-b">Welcome to Pear Tree Dental</h1>
      </div>
    </div>
  );
}
