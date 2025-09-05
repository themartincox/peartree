"use client";

import * as React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

type Review = {
  author_name?: string;
  rating?: number;
  text?: string;
  time?: number;
  relative_time_description?: string;
  profile_photo_url?: string;
};

type ApiResponse = {
  rating: number;
  total: number;
  reviews: Review[];
};

type Props = {
  className?: string;
  maxSnippets?: number; // how many snippets to rotate through (default 10)
  rotateMs?: number;    // milliseconds per rotation (default 2000)
  ctaDelayMs?: number;  // delay before showing CTA (default 4000)
  maxWidth?: string;    // maximum width for the widget (default auto)
};

const GOOGLE_BLUE = "#4285F4";
const GOOGLE_RED = "#EA4335";
const GOOGLE_YELLOW = "#FBBC05";
const GOOGLE_GREEN = "#34A853";

// Star icon component
function Star({ filled = true, className = "" }: { filled?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${className} transition-transform`}
      width="18"
      height="18"
      fill={filled ? GOOGLE_YELLOW : "none"}
      stroke={filled ? GOOGLE_YELLOW : "#E5E7EB"}
      strokeWidth="1"
      focusable="false"
    >
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
    </svg>
  );
}

// Clamp helper
function clampText(text?: string | null, maxChars = 160) {
  if (!text) return "";
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).trimEnd() + "…";
}

export default function GoogleReviews({
  className = "",
  maxSnippets = 10,
  rotateMs = 2000,
  ctaDelayMs = 4000,
  maxWidth = "auto",
}: Props) {
  const [data, setData] = React.useState<ApiResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showCta, setShowCta] = React.useState(false);
  const [autoRotate, setAutoRotate] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const rotationIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const ctaTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const rotationStartTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Check if the device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Add functions to navigate to previous and next reviews
  const goToPreviousReview = () => {
    if (!data?.reviews?.length) return;
    setIndex((i) => (i - 1 + Math.min(data.reviews.length, maxSnippets)) % Math.min(data.reviews.length, maxSnippets));
    // Stop auto-rotation when user manually navigates
    setAutoRotate(false);
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }
  };

  const goToNextReview = () => {
    if (!data?.reviews?.length) return;
    setIndex((i) => (i + 1) % Math.min(data.reviews.length, maxSnippets));
    // Stop auto-rotation when user manually navigates
    setAutoRotate(false);
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }
  };

  // Fetch reviews data
  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(false);

    (async () => {
      try {
        const res = await fetch("/api/reviews", { cache: "no-store" });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const json = await res.json();

        // Check if the response has the expected structure
        if (!json || typeof json.rating !== 'number' || !Array.isArray(json.reviews)) {
          throw new Error('Invalid response format');
        }

        if (alive) {
          setData(json as ApiResponse);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        if (alive) {
          setError(true);
          setLoading(false);

          // Provide fallback data to prevent UI from breaking
          setData({
            rating: 4.9,
            total: 600,
            reviews: []
          });
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // Handle review rotation
  React.useEffect(() => {
    if (!autoRotate || !data?.reviews?.length) return;

    rotationIntervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % Math.min(data.reviews.length, maxSnippets));
    }, rotateMs);

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [autoRotate, data?.reviews, rotateMs, maxSnippets]);

  const handleMouseEnter = () => {
    if (!isExpanded) {
      setIsExpanded(true);

      // Start rotation after expansion completes
      rotationStartTimeoutRef.current = setTimeout(() => {
        setAutoRotate(true);
      }, 800);

      // Show CTA after delay
      ctaTimeoutRef.current = setTimeout(() => {
        setShowCta(true);
      }, ctaDelayMs);
    }
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setShowCta(false);
    setAutoRotate(false);

    // Clear all timeouts
    if (ctaTimeoutRef.current) {
      clearTimeout(ctaTimeoutRef.current);
    }
    if (rotationStartTimeoutRef.current) {
      clearTimeout(rotationStartTimeoutRef.current);
    }
  };

  const showReview = (reviewIndex: number) => {
    setIndex(reviewIndex);
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (rotationIntervalRef.current) clearInterval(rotationIntervalRef.current);
      if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
      if (rotationStartTimeoutRef.current) clearTimeout(rotationStartTimeoutRef.current);
    };
  }, []);

  const rating = data?.rating ?? 0;
  const total = data?.total ?? 0;
  const reviews = (data?.reviews ?? []).slice(0, maxSnippets);
  const current = reviews[index] || null;
  const filledStars = Math.round(rating);

  // If we're in an error state or loading state with no data yet, show a minimal version
  if ((error || loading) && !data) {
    return (
      <section
        className={`${roboto.className} ${className} w-[200px]`}
        style={{ fontFamily: roboto.style.fontFamily, maxWidth }}
        aria-label="Google Reviews"
      >
        <div className="overflow-hidden">
          <div className="flex-col items-center justify-center p-4 min-h-[120px] text-center">
            <div className="flex-col items-center">
              <div className="flex items-center whitespace-nowrap flex-col gap-1">
                <div className="font-normal tracking-tight leading-none text-[24px]">
                  <span style={{ color: GOOGLE_BLUE }}>G</span>
                  <span style={{ color: GOOGLE_RED }}>o</span>
                  <span style={{ color: GOOGLE_YELLOW }}>o</span>
                  <span style={{ color: GOOGLE_BLUE }}>g</span>
                  <span style={{ color: GOOGLE_GREEN }}>l</span>
                  <span style={{ color: GOOGLE_RED }}>e</span>
                </div>
                <div className="text-sm text-gray-500">Reviews</div>
              </div>
              <div className="text-xs text-gray-500 mt-1 opacity-80">
                {loading ? "loading..." : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render the mobile version of the widget when on mobile and not expanded
  if (isMobile && !isExpanded) {
    return (
      <section
        className={`${roboto.className} ${className} w-auto max-w-[280px] reviews-hover-effect transform transition-all duration-300 hover:shadow-md rounded-xl`}
        style={{ fontFamily: roboto.style.fontFamily, maxWidth }}
        aria-label="Google Reviews"
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleMouseEnter}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-center justify-center py-2 px-3 text-center">
            {/* First line with text and stars inline */}
            <div className="flex items-center justify-center mb-1 flex-wrap">
              <p className="text-base font-semibold text-dental-green inline">
                See why we have over 500
              </p>
              <span
                role="img"
                aria-label={`5 out of 5 stars on Google`}
                className="flex items-center mx-1 star-container"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={true} className={`h-[14px] w-[14px]`} />
                ))}
              </span>
            </div>

            {/* Second line with "reviews on Google?" */}
            <div className="flex items-center gap-1">
              <span className="text-base font-semibold text-dental-green">reviews on</span>
              <div className="font-normal tracking-tight leading-none text-[16px] transform transition-all duration-300 hover:scale-110">
                <span style={{ color: GOOGLE_BLUE }}>G</span>
                <span style={{ color: GOOGLE_RED }}>o</span>
                <span style={{ color: GOOGLE_YELLOW }}>o</span>
                <span style={{ color: GOOGLE_BLUE }}>g</span>
                <span style={{ color: GOOGLE_GREEN }}>l</span>
                <span style={{ color: GOOGLE_RED }}>e</span>
              </div>
                          </div>
          </div>
        </div>
      </section>
    );
  }

  // Regular/desktop version
  return (
    <section
      className={`${roboto.className} ${className} transition-all duration-400 ease-in-out transform hover:shadow-lg ${
        isExpanded ? 'w-[400px] hover:scale-[1.01]' : 'w-[200px] hover:scale-[1.02]'
      }`}
      style={{ fontFamily: roboto.style.fontFamily, maxWidth }}
      aria-label="Google Reviews"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
    >
      <div className="overflow-hidden transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className={`flex cursor-pointer padding-4 transition-all duration-400 ease-in-out hover:bg-gray-50 ${
          isExpanded
            ? 'flex-row items-center justify-between p-4'
            : 'flex-col items-center justify-center p-4 pb-2 min-h-[100px] text-center'
        }`}>
          <div className={`flex gap-1 transition-all duration-400 ease-in-out ${
            isExpanded
              ? 'flex-row items-center'
              : 'flex-col items-center'
          }`}>
            <div className={`flex items-center whitespace-nowrap transition-all duration-400 ease-in-out ${
              isExpanded ? 'flex-row gap-2' : 'flex-col gap-1'
            }`}>
              <div className={`font-normal tracking-tight leading-none transition-all duration-400 ease-in-out transform hover:scale-110 ${
                isExpanded ? 'text-[32px]' : 'text-[24px]'
              }`}>
                <span style={{ color: GOOGLE_BLUE }}>G</span>
                <span style={{ color: GOOGLE_RED }}>o</span>
                <span style={{ color: GOOGLE_YELLOW }}>o</span>
                <span style={{ color: GOOGLE_BLUE }}>g</span>
                <span style={{ color: GOOGLE_GREEN }}>l</span>
                <span style={{ color: GOOGLE_RED }}>e</span>
              </div>
              <div className={`text-gray-700 font-normal transition-all duration-400 ease-in-out ${
                isExpanded ? 'text-lg mt-0.5' : 'text-sm'
              }`}>
                Reviews
              </div>
            </div>
          </div>

          <div className={`flex flex-col gap-1 transition-all duration-400 ease-in-out ${
            isExpanded
              ? 'items-end'
              : 'items-center mt-2'
          }`}>
            <span
              role="img"
              aria-label={`Google rating: ${rating.toFixed(1)} out of 5 stars`}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-0.5 star-container">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < filledStars} className="h-[18px] w-[18px]" />
                ))}
              </span>
              <span className="text-base font-medium text-gray-800">
                {rating ? rating.toFixed(1) : "—"}
              </span>
            </span>
            <span className={`text-xs text-gray-700 transition-all duration-400 ease-in-out ${
              isExpanded ? 'text-right' : 'text-center'
            }`}>
              (over 500+ reviews)
            </span>
          </div>
        </div>

        {/* Expanding content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out relative ${
          isExpanded
            ? 'max-h-[300px] opacity-100 px-5 pb-4'
            : 'max-h-0 opacity-0 px-5'
        }`}>
          {reviews.length > 0 && current ? (
            <figure className="relative">
              {/* Navigation arrows - only show when expanded and have multiple reviews */}
              {isExpanded && reviews.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousReview}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-11 w-11 p-0 flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Previous review"
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNextReview}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-11 w-11 p-0 flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Next review"
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <blockquote className={`text-sm text-gray-800 leading-relaxed mb-3 transition-all duration-300 ease-out delay-200 ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                "{clampText(current?.text, 220)}"
              </blockquote>

              <figcaption className={`flex items-center gap-2 mb-4 transition-all duration-300 ease-out delay-300 ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                {current?.profile_photo_url ? (
                  <img
                    src={current.profile_photo_url}
                    alt=""
                    className="h-6 w-6 rounded-full border border-gray-200"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-red-400" />
                )}
                <span className="text-xs text-gray-700">
                  — {current?.author_name || "Anonymous"}
                  {current?.relative_time_description && (
                    <span className="text-gray-500"> · {current.relative_time_description}</span>
                  )}
                </span>
              </figcaption>

              {/* Review counter - replace navigation dots with a simple counter */}
              {reviews.length > 1 && (
                <div className={`flex justify-center items-center mb-4 transition-all duration-300 ease-out delay-400 ${
                  isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <span className="text-xs text-gray-700">
                    Review {index + 1} of {reviews.length}
                  </span>
                </div>
              )}
            </figure>
          ) : (
            <div className="py-4 text-center text-sm text-gray-700">
              {error ? "Couldn't load reviews" : "No reviews available"}
            </div>
          )}
        </div>

        {/* CTA footer - Only display when expanded */}
        <div className={`px-5 pb-4 transition-all duration-300 ease-out ${
          showCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 hidden'
        }`}>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-colors duration-200"
            style={{ color: GOOGLE_BLUE }}
            aria-label="Read more reviews on the testimonials page"
          >
            Read more on our testimonials page!
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H2a1 1 0 110-2h13.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
