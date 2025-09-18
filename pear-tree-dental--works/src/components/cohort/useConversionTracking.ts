"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLocationDetection } from './useLocationDetection';
import { trackEvent } from './TrackingProvider'; // Import trackEvent from TrackingProvider

interface ConversionEvent {
  event_type: string;
  timestamp: number;
  page_url: string;
  user_session_id: string; // This will now come from TrackingProvider's sessionId
  metadata: Record<string, any>;
}

interface EngagementMetrics {
  timeOnPage: number;
  scrollPercentage: number;
  clickCount: number;
  sessionDuration: number;
}

export const useConversionTracking = () => {
  const { isNottingham, area } = useLocationDetection();
  const [metrics, setMetrics] = useState<EngagementMetrics>({
    timeOnPage: 0,
    scrollPercentage: 0,
    clickCount: 0,
    sessionDuration: 0
  });

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        timeOnPage: Math.floor((Date.now() - startTime) / 1000)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / docHeight) * 100);

      setMetrics(prev => ({
        ...prev,
        scrollPercentage: Math.max(prev.scrollPercentage, scrollPercentage)
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track click count
  const incrementClickCount = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      clickCount: prev.clickCount + 1
    }));
  }, []);

  // Main conversion tracking function
  const trackConversion = useCallback((eventType: string, customMetadata: Record<string, any> = {}) => {
    incrementClickCount();

    // Use the trackEvent from TrackingProvider, which sends to Simple Analytics
    trackEvent(eventType, {
      // Location context
      is_nottingham_visitor: isNottingham,
      detected_location: area || 'unknown',

      // Engagement metrics
      time_on_page: metrics.timeOnPage,
      scroll_percentage: metrics.scrollPercentage,
      click_count: metrics.clickCount,

      // Page context
      page_path: window.location.pathname,
      referrer: document.referrer,
      user_agent: navigator.userAgent.substring(0, 100), // Truncated for privacy

      // Custom metadata
      ...customMetadata
    });

    console.log('[Conversion Tracked]', eventType, customMetadata);
  }, [isNottingham, area, metrics, incrementClickCount]);

  // Specialized tracking functions
  const trackPhoneClick = useCallback((location: string, phoneNumber: string) => {
    trackConversion('phone_click', {
      cta_location: location,
      phone_number: phoneNumber,
      conversion_type: 'high_intent',
      estimated_value: 200 // Average consultation value
    });
  }, [trackConversion]);

  const trackServiceInterest = useCallback((service: string, serviceType: 'emergency' | 'cosmetic' | 'general' | 'orthodontics' = 'general') => {
    const serviceValues = {
      emergency: 150,
      cosmetic: 500,
      orthodontics: 3000,
      implants: 2500,
      general: 100
    };

    trackConversion('service_interest', {
      service_name: service,
      service_type: serviceType,
      estimated_value: serviceValues[serviceType] || serviceValues.general,
      conversion_funnel: 'service_page'
    });
  }, [trackConversion]);

  const trackMembershipPlanSelect = useCallback((planName: string, monthlyValue: number) => {
    trackConversion('membership_plan_select', {
      plan_name: planName,
      monthly_value: monthlyValue,
      annual_value: monthlyValue * 12,
      conversion_type: 'recurring_revenue',
      is_nottingham_offer: isNottingham
    });
  }, [trackConversion, isNottingham]);

  const trackLocationConversion = useCallback((actionType: string, targetLocation = 'burton_joyce') => {
    trackConversion('location_conversion', {
      action_type: actionType,
      patient_location: area || 'unknown',
      target_location: targetLocation,
      location_benefits_shown: isNottingham,
      conversion_type: 'location_aware'
    });
  }, [trackConversion, area, isNottingham]);

  const trackBookingAttempt = useCallback((source: string, formType: 'contact' | 'booking' = 'booking') => {
    trackConversion('booking_attempt', {
      form_type: formType,
      source_location: source,
      estimated_value: 150,
      conversion_funnel: 'booking_form'
    });
  }, [trackConversion]);

  return {
    trackConversion,
    trackPhoneClick,
    trackServiceInterest,
    trackMembershipPlanSelect,
    trackLocationConversion,
    trackBookingAttempt,
    metrics,
    isNottingham
  };
};