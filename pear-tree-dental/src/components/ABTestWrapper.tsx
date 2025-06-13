'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

type Variant = 'A' | 'B' | 'C';

interface ABTestWrapperProps {
  children: React.ReactNode;
}

// Analytics tracking function with error handling
const trackVariantAssignment = (variant: Variant) => {
  try {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_variant_assigned', {
        variant: variant,
        event_category: 'AB_Test',
        event_label: 'homepage_welcome_test',
        custom_parameter_1: 'homepage_welcome_test'
      });
    }

    // Additional analytics platforms can be added here
    // Example: Facebook Pixel, Mixpanel, etc.

    console.log(`A/B Test: Variant ${variant} assigned`);
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

export default function ABTestWrapper({ children }: ABTestWrapperProps) {
  const [variant, setVariant] = useState<Variant | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload background image for Variant C
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.warn('Background image failed to load');
    img.src = '/images/dental-office-welcome.svg';
  }, []);

  // Smooth scroll to main content
  const scrollToMain = useCallback(() => {
    setIsScrolling(true);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Hide welcome screen during scroll
    const hideTimeout = setTimeout(() => {
      setShowWelcome(false);
    }, 400); // Hide halfway through scroll animation

    return () => clearTimeout(hideTimeout);
  }, []);

  // Get or assign variant with error handling
  useEffect(() => {
    const getVariant = (): Variant => {
      try {
        // Check if user already has a variant assigned
        const storedVariant = localStorage.getItem('ptd-test-variant');
        if (storedVariant && ['A', 'B', 'C'].includes(storedVariant)) {
          return storedVariant as Variant;
        }
      } catch (error) {
        console.warn('LocalStorage access failed, using session assignment');
      }

      // Assign random variant (33.3% split)
      const variants: Variant[] = ['A', 'B', 'C'];
      const randomVariant = variants[Math.floor(Math.random() * 3)];

      try {
        // Store for consistency across sessions
        localStorage.setItem('ptd-test-variant', randomVariant);
      } catch (error) {
        console.warn('LocalStorage write failed');
      }

      // Track in analytics
      trackVariantAssignment(randomVariant);

      return randomVariant;
    };

    const assignedVariant = getVariant();
    setVariant(assignedVariant);

    // Show welcome screen for variants B and C
    if (assignedVariant === 'B' || assignedVariant === 'C') {
      // For Variant C, wait for image to load or timeout after 2 seconds
      if (assignedVariant === 'C' && !imageLoaded) {
        const imageTimeout = setTimeout(() => {
          setShowWelcome(true);
        }, 2000);

        if (imageLoaded) {
          clearTimeout(imageTimeout);
          setShowWelcome(true);
        }

        return () => clearTimeout(imageTimeout);
      } else {
        setShowWelcome(true);
      }

      // Auto-scroll after 1 second
      const scrollTimer = setTimeout(() => {
        scrollToMain();
      }, 1000);

      return () => clearTimeout(scrollTimer);
    }
  }, [imageLoaded, scrollToMain]);

  // Loading state while variant is being determined
  if (variant === null) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Variant A: Standard homepage (no modifications)
  if (variant === 'A') {
    return <div id="main-content">{children}</div>;
  }

  // Variant B: Animated welcome screen
  if (variant === 'B') {
    return (
      <>
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 z-50 bg-white flex items-center justify-center ab-test-welcome-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 text-center px-4"
                style={{
                  fontFamily: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Welcome to Pear Tree Dental
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div id="main-content" className={showWelcome ? 'pt-screen' : ''}>
          {children}
        </div>
      </>
    );
  }

  // Variant C: Welcome with background image
  if (variant === 'C') {
    return (
      <>
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center ab-test-welcome-screen"
              style={{
                backgroundImage: imageLoaded
                  ? 'url(/images/dental-office-welcome.svg)'
                  : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Welcome text */}
              <motion.h1
                className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-light text-white text-center px-4"
                style={{
                  fontFamily: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Welcome to Pear Tree Dental
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div id="main-content" className={showWelcome ? 'pt-screen' : ''}>
          {children}
        </div>
      </>
    );
  }

  // Fallback to variant A if something goes wrong
  return <div id="main-content">{children}</div>;
}

// Preload background image for Variant C with error handling
export function preloadWelcomeImage() {
  if (typeof window !== 'undefined') {
    try {
      const img = new Image();
      img.onload = () => console.log('Welcome background image preloaded successfully');
      img.onerror = () => console.warn('Welcome background image failed to preload');
      img.src = '/images/dental-office-welcome.svg';
    } catch (error) {
      console.warn('Image preloading failed:', error);
    }
  }
}

// Export variant getter for external use (analytics, etc.)
export function getCurrentVariant(): Variant | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem('ptd-test-variant');
    return (stored && ['A', 'B', 'C'].includes(stored)) ? stored as Variant : null;
  } catch {
    return null;
  }
}
