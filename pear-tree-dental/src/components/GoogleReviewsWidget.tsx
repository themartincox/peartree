"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const GoogleReviewsWidget = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomepage = pathname === '/';

  // Genuine 5-star Google Reviews
  const reviews: Review[] = [
    {
      id: "1",
      author: "Marie Q",
      rating: 5,
      text: "Javaad you have actually made me smile and I've gained so much confidence with my smile. It's been just over 24hrs since you fitted my composite and my family and friends are amazed at the result, as am I! Thank you so much for your time and patience with a rather nervous patient.",
      date: "2 weeks ago"
    },
    {
      id: "2",
      author: "Meekz",
      rating: 5,
      text: "Thanx Pear Tree Dentist! Janet is always so friendly and makes me feel great about looking after my teeth. She always goes above and beyond, I would definitely recommend Pear Tree Dentist in Burton Joyce.",
      date: "1 month ago"
    },
    {
      id: "3",
      author: "Marie R",
      rating: 5,
      text: "After visiting a dentist for over 50 years, I can honestly say this is the best one I have been to. Polite, organised, professional and for once in my life, I am not stressed about my appointments.",
      date: "3 weeks ago"
    },
    {
      id: "4",
      author: "Miriam B",
      rating: 5,
      text: "Had to join here with my 2 small boys as nowhere nearer was taking NHS patients but am really pleased we did because the dentist Imrana is very good at her job and very reassuring. Great with my two boys age 1 and 3. Would recommend!",
      date: "1 week ago"
    },
    {
      id: "5",
      author: "Emily M",
      rating: 5,
      text: "I've been coming to this dentist for 30 years since the age of 3! I travel 45 minutes to get here and I wouldn't change it. Janet is absolutely brilliant and has always looked after me and all the family that see her too.",
      date: "2 months ago"
    },
    {
      id: "6",
      author: "Charlotte P",
      rating: 5,
      text: "I'm frightened about going to the dentist. So glad I found this one. Great dentist. She is very patient and positive with me. Wouldn't go anywhere else!",
      date: "5 days ago"
    },
    {
      id: "7",
      author: "Ian P",
      rating: 5,
      text: "Javaad is an absolutely lovely chap and a truly skilled Dentist. No one wants a tooth extraction, but if I'm having one done, it's him I want on the business end. Cheers chap.",
      date: "1 week ago"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Scroll behavior
  useEffect(() => {
    if (isHomepage) {
      // Homepage: Always show widget (it's positioned in PracticeShowcase)
      // Handle sticky behavior based on scroll position
      const handleScroll = () => {
        const triggerElement = document.getElementById('reviews-sticky-trigger');
        if (triggerElement) {
          const rect = triggerElement.getBoundingClientRect();
          setIsSticky(rect.top <= 0);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Other pages: Show widget after scrolling, then make it sticky
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 300) {
          setShowWidget(true);
          setIsSticky(true);
        } else {
          setShowWidget(false);
          setIsSticky(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomepage]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Don't render anything if widget shouldn't be shown (only applies to non-homepage)
  if (!isHomepage && !showWidget) {
    return null;
  }

  return (
    <>
      {/* Placeholder to maintain space when widget becomes sticky (homepage only) */}
      {isHomepage && isSticky && (
        <div className="h-20 transition-all duration-500" />
      )}

      {/* The actual widget */}
      <div
        ref={widgetRef}
        className={`
          transition-all duration-500 ease-in-out z-50
          ${isSticky
            ? 'fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-200'
            : isHomepage
              ? 'bg-white/10 rounded-2xl'
              : 'bg-white/95 rounded-2xl mx-4 mb-4 shadow-lg'
          }
        `}
      >
        <div className={`${isSticky ? 'container mx-auto px-4' : ''}`}>
          <div className={`${isSticky ? 'py-3' : 'p-6'} transition-all duration-500`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-all duration-500 ${isSticky ? 'text-gray-800 text-sm' : isHomepage ? 'text-white' : 'text-gray-800'}`}>
                      Google Reviews
                    </h4>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 text-yellow-400 fill-current`}
                          />
                        ))}
                      </div>
                      <span className={`text-xs transition-all duration-500 ${isSticky ? 'text-gray-600' : isHomepage ? 'text-white/80' : 'text-gray-600'}`}>
                        {averageRating.toFixed(1)} (416 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className={`p-1 rounded-full transition-all duration-500 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className={`p-1 rounded-full transition-all duration-500 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded-full transition-all duration-500 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Current Review */}
            <div className={`transition-all duration-500 ${isSticky ? 'max-h-16 overflow-hidden' : ''}`}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isSticky ? 'w-6 h-6' : ''}`}>
                  <span className={`text-white font-semibold transition-all duration-500 ${isSticky ? 'text-xs' : 'text-sm'}`}>
                    {reviews[currentReview].author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className={`font-medium transition-all duration-500 ${isSticky ? 'text-gray-800 text-sm' : isHomepage ? 'text-white' : 'text-gray-800'}`}>
                      {reviews[currentReview].author}
                    </h5>
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className={`text-xs transition-all duration-500 ${isSticky ? 'text-gray-500' : isHomepage ? 'text-white/60' : 'text-gray-500'}`}>
                      {reviews[currentReview].date}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 ${
                      isSticky
                        ? 'text-gray-600 overflow-hidden'
                        : isHomepage
                          ? 'text-white/90'
                          : 'text-gray-600'
                    }`}
                    style={isSticky ? {
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    } : {}}
                  >
                    "{reviews[currentReview].text}"
                  </p>
                </div>
              </div>
            </div>

            {/* Review indicators */}
            {!isSticky && (
              <div className="flex justify-center space-x-1 mt-4">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentReview
                        ? isHomepage ? 'bg-white' : 'bg-pear-primary'
                        : isHomepage ? 'bg-white/40' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleReviewsWidget;
