"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
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
  const [navHeight, setNavHeight] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Improved placeholder: track widget height
  const [widgetHeight, setWidgetHeight] = useState(0);

  // Add useCallback for measuring the widget height
  const measureWidgetHeight = useCallback(() => {
    return widgetRef.current?.offsetHeight || 0;
  }, []);

  // Add effect to track widget height
  useEffect(() => {
    const updateWidgetHeight = () => {
      if (widgetRef.current) {
        setWidgetHeight(widgetRef.current.offsetHeight);
      }
    };

    updateWidgetHeight();
    window.addEventListener('resize', updateWidgetHeight);

    // Set up a mutation observer to detect content changes
    let observer: MutationObserver | null = null;
    if (widgetRef.current) {
      observer = new MutationObserver(updateWidgetHeight);
      observer.observe(widgetRef.current, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateWidgetHeight);
    };
  }, []);

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

  // Scroll behavior and nav height measurement
  useEffect(() => {
    let handleScroll: () => void;
    let updateNavHeight: () => void;

    if (isHomepage) {
      // Measure the secondary nav height
      updateNavHeight = () => {
        const navElement = document.getElementById('secondary-nav');
        if (navElement) {
          const navRect = navElement.getBoundingClientRect();
          setNavHeight(navRect.height);
        } else {
          setNavHeight(0);
        }
      };

      // Call it immediately and on resize
      updateNavHeight();
      window.addEventListener('resize', updateNavHeight);

      // Homepage: Always show widget (it's positioned in PracticeShowcase)
      // Handle sticky behavior based on scroll position
      handleScroll = () => {
        const triggerElement = document.getElementById('reviews-sticky-trigger');
        if (triggerElement) {
          const rect = triggerElement.getBoundingClientRect();
          setIsSticky(rect.top <= navHeight); // Account for nav height
        }
      };
    } else {
      // Other pages: Show widget after scrolling, then make it sticky
      handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 300) {
          setShowWidget(true);
          setIsSticky(true);
        } else {
          setShowWidget(false);
          setIsSticky(false);
        }
      };
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (isHomepage && updateNavHeight) {
        window.removeEventListener('resize', updateNavHeight);
      }
    };
  }, [isHomepage, navHeight]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Don't render anything if widget shouldn't be shown (only applies to non-homepage)
  if (!isHomepage && !showWidget) {
    return null;
  }

  return (
    <>
      {/* Improved placeholder to maintain space when widget becomes sticky (homepage only) */}
      {isHomepage && isSticky && (
        <div
          className="transition-all duration-500"
          style={{ height: widgetHeight || 80 }}
        />
      )}

      {/* The actual widget */}
      <div
        ref={widgetRef}
        className={`
          transition-all duration-500 ease-in-out z-50
          ${isSticky
            ? 'fixed left-0 right-0 bg-white shadow-lg border-b border-gray-200'
            : isHomepage
              ? 'bg-white/10 rounded-2xl'
              : 'bg-white/95 rounded-2xl mx-4 mb-4 shadow-lg'
          }
        `}
        style={isSticky && isHomepage ? { top: navHeight } : isSticky ? { top: 0 } : {}}
      >
        <div className={`${isSticky ? 'container mx-auto px-4' : ''}`}>
          <div className={`${isSticky ? 'py-3' : 'p-4'} transition-all duration-500`}>
            {/* Combined Header with Reviewer Info */}
            <div className="flex items-center space-x-2 mb-2">
              {/* Google logo */}
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">G</span>
              </div>

              {/* Reviewer info combined with Google branding */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap gap-x-2">
                  <h5 className={`font-medium transition-all duration-500 ${isSticky ? 'text-gray-800 text-sm' : isHomepage ? 'text-white' : 'text-gray-800'}`}>
                    {reviews[currentReview].author}
                  </h5>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className={`text-xs transition-all duration-500 ${isSticky ? 'text-gray-500' : isHomepage ? 'text-white/60' : 'text-gray-500'}`}>
                    {reviews[currentReview].date}
                  </span>
                  <span className={`text-xs transition-all duration-500 ${isSticky ? 'text-gray-500' : isHomepage ? 'text-white/60' : 'text-gray-500'}`}>
                    from Google
                  </span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={prevReview}
                  aria-label="Previous review"
                  className={`p-1 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      prevReview();
                    }
                  }}
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next review"
                  className={`p-1 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      nextReview();
                    }
                  }}
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href="https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read all Pear Tree Dental reviews on Google (opens in new tab)"
                  className={`p-1 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : isHomepage
                        ? 'hover:bg-white/20 text-white/70'
                        : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Review Text */}
            <div className={`transition-all duration-500 ${isSticky ? 'max-h-12 overflow-hidden' : ''}`}>
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

            {/* Review indicators - only show when not sticky */}
            {!isSticky && (
              <div className="flex justify-center space-x-1 mt-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    aria-label={`Go to review ${index + 1} of ${reviews.length}`}
                    aria-current={index === currentReview ? 'true' : 'false'}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                      index === currentReview
                        ? isHomepage ? 'bg-white' : 'bg-pear-primary'
                        : isHomepage ? 'bg-white/40' : 'bg-gray-300'
                    }`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setCurrentReview(index);
                      }
                    }}
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
