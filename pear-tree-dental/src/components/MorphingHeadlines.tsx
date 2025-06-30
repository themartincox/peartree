"use client";

import { useState, useEffect } from "react";

interface HeadlineStep {
  text: string;
  highlight: string;
  color: string;
}

const headlines: HeadlineStep[] = [
  {
    text: "",
    highlight: "Exceptional Growth",
    color: "text-orange-200"
  },
  {
    text: "",
    highlight: "AI-Powered Results",
    color: "text-emerald-200"
  },
  {
    text: "",
    highlight: "Strategic Innovation",
    color: "text-cyan-200"
  },
  {
    text: "",
    highlight: "Sustainable Success",
    color: "text-violet-200"
  }
];

export default function MorphingHeadlines() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simple interval for cycling
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentHeadline = headlines[currentIndex];

  return (
    <div className="relative morphing-container">
      {/* Three-line headline structure */}
      <h1 className="text-6xl lg:text-9xl font-heading font-bold mb-6 text-center">
        <span className="block text-white drop-shadow-lg">we're postino.</span>
        <span className="block text-white drop-shadow-lg">we deliver.</span>
        <span className={`block transition-colors duration-1000 ${currentHeadline.color} drop-shadow-lg`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          {currentHeadline.highlight}
        </span>
      </h1>

      {/* Simplified progress indicators */}
      <div className="flex justify-center space-x-2 mb-8">
        {headlines.map((_, index) => (
          <button
            key={`headline-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-coral-red scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Switch to headline ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS-only glow effect */}
      <style jsx>{`
        .morphing-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${
            currentIndex === 0 ? 'linear-gradient(to right, rgba(254, 215, 170, 0.15), rgba(251, 146, 60, 0.15))' :
            currentIndex === 1 ? 'linear-gradient(to right, rgba(167, 243, 208, 0.15), rgba(52, 211, 153, 0.15))' :
            currentIndex === 2 ? 'linear-gradient(to right, rgba(165, 243, 252, 0.15), rgba(56, 189, 248, 0.15))' :
            'linear-gradient(to right, rgba(221, 214, 254, 0.15), rgba(196, 181, 253, 0.15))'
          };
          border-radius: 1rem;
          filter: blur(3rem);
          transition: background 1s ease-in-out;
          pointer-events: none;
          z-index: -1;
        }

        @media (prefers-reduced-motion: reduce) {
          .transition-colors {
            transition-duration: 0.15s;
          }
        }
      `}</style>
    </div>
  );
}
