"use client";

import { useState, useEffect, useRef } from "react";
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
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Sample reviews data (in production, this would come from Google Reviews API)
  const reviews: Review[] = [
    {
      id: "1",
      author: "Sarah Johnson",
      rating: 5,
      text: "Absolutely fantastic service! The team at Pear Tree Dental are so professional and friendly. My teeth whitening results exceeded my expectations.",
      date: "2 weeks ago"
    },
    {
      id: "2",
      author: "Michael Brown",
      rating: 5,
      text: "Been coming here for 3 years and couldn't be happier. The membership plan is great value and the emergency care when I had toothache was brilliant.",
      date: "1 month ago"
    },
    {
      id: "3",
      author: "Emma Wilson",
      rating: 5,
      text: "Amazing dental practice! My children actually look forward to their appointments. The team is so gentle and patient with kids.",
      date: "3 weeks ago"
    },
    {
      id: "4",
      author: "David Thompson",
      rating: 5,
      text: "Perfect location in Burton Joyce with easy parking. Modern facilities and the most painless dental experience I've ever had!",
      date: "1 week ago"
    },
    {
      id: "5",
      author: "Lisa Parker",
      rating: 5,
      text: "The cosmetic dentistry here is outstanding. My veneers look completely natural and the process was so smooth.",
      date: "2 months ago"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Sticky scroll behavior
  useEffect(() => {
    const widget = widgetRef.current;
    const placeholder = placeholderRef.current;

    if (!widget || !placeholder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the placeholder is no longer visible (scrolled past)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setIsSticky(true);
          setHasScrolledPast(true);
        } else if (entry.isIntersecting && hasScrolledPast) {
          // When scrolling back up and placeholder is visible again
          setIsSticky(false);
          setHasScrolledPast(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px"
      }
    );

    observer.observe(placeholder);

    return () => observer.disconnect();
  }, [hasScrolledPast]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <>
      {/* Placeholder to maintain space when widget becomes sticky */}
      <div ref={placeholderRef} className={`transition-all duration-300 ${isSticky ? 'h-20' : 'h-0'}`} />

      {/* The actual widget */}
      <div
        ref={widgetRef}
        className={`
          transition-all duration-300 ease-in-out z-50
          ${isSticky
            ? 'fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-200'
            : 'bg-white/10 rounded-2xl'
          }
        `}
      >
        <div className={`${isSticky ? 'container mx-auto px-4' : ''}`}>
          <div className={`${isSticky ? 'py-3' : 'p-6'}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isSticky ? 'text-gray-800 text-sm' : 'text-white'}`}>
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
                      <span className={`text-xs ${isSticky ? 'text-gray-600' : 'text-white/80'}`}>
                        {averageRating.toFixed(1)} ({reviews.length} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className={`p-1 rounded-full transition-colors ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : 'hover:bg-white/20 text-white/70'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className={`p-1 rounded-full transition-colors ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : 'hover:bg-white/20 text-white/70'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="https://g.page/r/your-google-business-id/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded-full transition-colors ${
                    isSticky
                      ? 'hover:bg-gray-100 text-gray-600'
                      : 'hover:bg-white/20 text-white/70'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Current Review */}
            <div className={`transition-all duration-300 ${isSticky ? 'max-h-16 overflow-hidden' : ''}`}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-full flex items-center justify-center flex-shrink-0 ${isSticky ? 'w-6 h-6' : ''}`}>
                  <span className={`text-white font-semibold ${isSticky ? 'text-xs' : 'text-sm'}`}>
                    {reviews[currentReview].author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className={`font-medium ${isSticky ? 'text-gray-800 text-sm' : 'text-white'}`}>
                      {reviews[currentReview].author}
                    </h5>
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className={`text-xs ${isSticky ? 'text-gray-500' : 'text-white/60'}`}>
                      {reviews[currentReview].date}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      isSticky
                        ? 'text-gray-600 overflow-hidden'
                        : 'text-white/90'
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReview ? 'bg-white' : 'bg-white/40'
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
