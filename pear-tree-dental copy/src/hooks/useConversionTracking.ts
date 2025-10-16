"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLocationDetection } from './useLocationDetection';

interface ConversionEvent {
  event_type: string;
  timestamp: number;
  page_url: string;
  user_session_id: string;
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
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [isClinicIp, setIsClinicIp] = useState<boolean>(false);

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

  // Detect clinic IP once per session (for internal traffic tagging)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/ip-check');
        if (!cancelled && res.ok) {
          const data = await res.json();
          setIsClinicIp(Boolean(data?.isClinicIp));
        }
      } catch {
        // silent fail
      }
    })();
    return () => { cancelled = true; };
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

    const conversionEvent: ConversionEvent = {
      event_type: eventType,
      timestamp: Date.now(),
      page_url: window.location.href,
      user_session_id: sessionId,
      metadata: {
        // Location context
        is_nottingham_visitor: isNottingham,
        detected_location: area || 'unknown',
        is_clinic_ip: isClinicIp,

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
      }
    };

    // Send to analytics (multiple providers for redundancy)
    sendToAnalytics(conversionEvent);

    // Local storage for offline resilience
    storeLocalConversion(conversionEvent);

    console.log('[Conversion Tracked]', eventType, conversionEvent.metadata);
  }, [isNottingham, area, isClinicIp, metrics, sessionId, incrementClickCount]);

  // Send to analytics providers
  const sendToAnalytics = useCallback((event: ConversionEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event_type, {
        custom_parameter_1: event.metadata.is_nottingham_visitor,
        custom_parameter_2: event.metadata.detected_location,
        custom_parameter_3: event.metadata.time_on_page,
        value: event.metadata.monetary_value || 0
      });
    }

    // Custom analytics endpoint
    fetch('/api/analytics/conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      console.warn('Analytics tracking failed:', error);
    });
  }, []);

  // Store locally for offline tracking
  const storeLocalConversion = useCallback((event: ConversionEvent) => {
    try {
      const stored = localStorage.getItem('conversion_events') || '[]';
      const events = JSON.parse(stored);
      events.push(event);

      // Keep only last 50 events to prevent storage bloat
      if (events.length > 50) {
        events.splice(0, events.length - 50);
      }

      localStorage.setItem('conversion_events', JSON.stringify(events));
    } catch (error) {
      console.warn('Local storage failed:', error);
    }
  }, []);

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
    sessionId,
    isNottingham,
    isClinicIp
  };
};
