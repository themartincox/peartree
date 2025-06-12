'use client';
import { useEffect } from 'react';
import { type Variant, trackVariantAssignment } from '@/lib/ab-testing';

// Add this global type declaration
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

interface ClientSideAnalyticsProps {
  variant: Variant;
}

export default function ClientSideAnalytics({ variant }: ClientSideAnalyticsProps) {
  useEffect(() => {
    // Track variant assignment on client-side
    trackVariantAssignment(variant, false);
    
    // Track page view with variant information
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        event_category: 'AB_Test',
        event_label: `homepage_variant_${variant}`,
        custom_parameter_1: variant,
        custom_parameter_2: 'server_side_rendered',
      });
    }
    
    // Track scroll depth for variant performance comparison
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        // Track milestone scroll depths
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'AB_Test',
              event_label: `variant_${variant}_scroll_${scrollPercent}`,
              value: scrollPercent,
              custom_parameter_1: variant,
            });
          }
        }
      }
    };
    
    // Track time on page for engagement metrics
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'AB_Test',
          event_label: `variant_${variant}_time_${timeSpent}s`,
          value: timeSpent,
          custom_parameter_1: variant,
        });
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);
    
    // Track initial load performance
    if (typeof window !== 'undefined' && window.performance) {
      const navigationTiming = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            event_category: 'AB_Test',
            event_label: `variant_${variant}_load_${Math.round(loadTime)}ms`,
            value: Math.round(loadTime),
            custom_parameter_1: variant,
          });
        }
      }
    }
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [variant]);
  
  // This component doesn't render anything visible
  return null;
}
