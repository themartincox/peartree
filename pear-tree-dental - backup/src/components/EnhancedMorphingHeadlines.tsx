"use client";

import { useState, useEffect } from "react";

interface HeadlineStep {
  category: string;
  text: string;
  color: string;
  gradient: string;
}

const headlines: HeadlineStep[] = [
  {
    category: "Exceptional Growth",
    text: "",
    color: "text-orange-200",
    gradient: "from-orange-400 to-red-500"
  },
  {
    category: "AI-Powered Results",
    text: "",
    color: "text-emerald-200",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    category: "Strategic Innovation",
    text: "",
    color: "text-cyan-200",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    category: "Sustainable Success",
    text: "",
    color: "text-violet-200",
    gradient: "from-violet-400 to-purple-500"
  }
];

export default function EnhancedMorphingHeadlines() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headlines.length);
        setIsAnimating(false);
      }, 300); // Half transition time

    }, 3500); // Slightly faster than before

    return () => clearInterval(interval);
  }, []);

  const currentHeadline = headlines[currentIndex];

  return (
    <div className="relative morphing-container">
      {/* Three-line headline structure */}
      <h1 className="text-6xl lg:text-9xl font-heading font-bold mb-6 text-center leading-tight">
        <span className="block text-white drop-shadow-lg mb-2">We're Postino.</span>
        <span className="block text-white drop-shadow-lg mb-2">We Deliver:</span>

        {/* Enhanced morphing text */}
        <span className="block relative overflow-hidden" style={{minHeight: "1.2em"}}>
          <span
            className={`
              block transition-all duration-500 ease-in-out transform
              ${isAnimating ? 'translate-y-[-100%] opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}
              ${currentHeadline.color} drop-shadow-lg
            `}
            style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}
          >
            {currentHeadline.category}
          </span>

          {/* Gradient overlay effect */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-r ${currentHeadline.gradient} opacity-20 blur-xl
              transition-opacity duration-500
              ${isAnimating ? 'opacity-0' : 'opacity-20'}
            `}
            style={{
              maskImage: 'linear-gradient(to right, transparent, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)'
            }}
          />
        </span>
      </h1>



      {/* Enhanced progress indicators */}
      <div className="flex justify-center space-x-3 mb-8">
        {headlines.map((_, index) => (
          <button
            key={`headline-${index}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 300);
              }
            }}
            className={`
              relative w-4 h-4 rounded-full transition-all duration-300
              ${index === currentIndex
                ? "bg-coral-red scale-125 shadow-lg shadow-coral-red/50"
                : "bg-white/30 hover:bg-white/50 hover:scale-110"
              }
            `}
            aria-label={`Switch to ${headlines[index].category}`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 rounded-full bg-coral-red animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced glow effect with dynamic colors */}
      <style jsx>{`
        .morphing-container::before {
          content: '';
          position: absolute;
          inset: -2rem;
          background: radial-gradient(ellipse at center, ${
            currentIndex === 0 ? 'rgba(251, 146, 60, 0.15)' :
            currentIndex === 1 ? 'rgba(52, 211, 153, 0.15)' :
            currentIndex === 2 ? 'rgba(56, 189, 248, 0.15)' :
            currentIndex === 3 ? 'rgba(196, 181, 253, 0.15)' :
            'rgba(244, 114, 182, 0.15)'
          } 0%, transparent 70%);
          border-radius: 2rem;
          filter: blur(2rem);
          transition: background 500ms ease-in-out;
          pointer-events: none;
          z-index: -1;
          opacity: ${isAnimating ? '0.5' : '1'};
        }

        .morphing-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg,
            transparent 0%,
            ${currentIndex === 0 ? 'rgba(251, 146, 60, 0.05)' :
              currentIndex === 1 ? 'rgba(52, 211, 153, 0.05)' :
              currentIndex === 2 ? 'rgba(56, 189, 248, 0.05)' :
              currentIndex === 3 ? 'rgba(196, 181, 253, 0.05)' :
              'rgba(244, 114, 182, 0.05)'
            } 50%,
            transparent 100%);
          border-radius: 1rem;
          transition: background 500ms ease-in-out;
          pointer-events: none;
          z-index: -1;
        }

        /* Smooth text appearance animation */
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition-duration: 0.15s;
          }
          .morphing-container::before,
          .morphing-container::after {
            transition-duration: 0.15s;
          }
        }
      `}</style>
    </div>
  );
}
