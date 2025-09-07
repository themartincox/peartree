'use client';

// src/components/cohort/TrackingProvider.tsx
import React, { useEffect } from 'react';

// Enhanced tracking types
interface TrackingEvent {
  event: string;
  data?: Record<string, any>;
  timestamp: string;
  sessionId: string;
  userId?: string;
  page: {
    path: string;
    referrer: string;
    title: string;
  };
  device: {
    type: string;
    width: number;
    height: number;
  };
}

// Get or create a persistent session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';

  let sessionId = localStorage.getItem('pt_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('pt_session_id', sessionId);
  }
  return sessionId;
}

// Get or create a persistent user ID
function getUserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  let userId = localStorage.getItem('pt_user_id');
  if (!userId) {
    // Only set a user ID after the user has engaged with the site
    // This avoids tracking bounces as users
    return undefined;
  }
  return userId;
}

// Set user ID after engagement
function setUserId(): void {
  if (typeof window === 'undefined') return;

  if (!localStorage.getItem('pt_user_id')) {
    const userId = 'u_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('pt_user_id', userId);
  }
}

// Simple tracking function that sends events to our API
export function trackEvent(event: string, data?: Record<string, any>) {
  try {
    // Don't track during SSR
    if (typeof window === 'undefined') return;

    // Create enhanced event object
    const trackingEvent: TrackingEvent = {
      event,
      data,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      userId: getUserId(),
      page: {
        path: window.location.pathname,
        referrer: document.referrer,
        title: document.title
      },
      device: {
        type: window.innerWidth < 768 ? 'mobile' : (window.innerWidth < 1024 ? 'tablet' : 'desktop'),
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    // Send to our API endpoint
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trackingEvent),
    });
  } catch (e) {
    console.error('Tracking error:', e);
  }
}

// Track time spent on page
function startPageTimeTracking(): () => void {
  const startTime = Date.now();

  return () => {
    const timeSpentMs = Date.now() - startTime;
    // Only track if user spent more than 5 seconds
    if (timeSpentMs > 5000) {
      trackEvent('page_time', {
        timeSpentMs,
        timeSpentSeconds: Math.floor(timeSpentMs / 1000)
      });
    }
  };
}

// Update page depth cookie
function updatePageDepth(): void {
  try {
    const currentDepthStr = document.cookie.split('; ')
      .find(row => row.startsWith('pt_page_depth='))
      ?.split('=')[1] || '0';

    const currentDepth = parseInt(currentDepthStr, 10) || 0;
    const newDepth = currentDepth + 1;

    // Set cookie with 30-day expiry
    document.cookie = `pt_page_depth=${newDepth}; path=/; max-age=2592000`;
  } catch (e) {
    console.error('Error updating page depth:', e);
  }
}

// Update visit count cookie
function updateVisitCount(): void {
  try {
    // Check if this is a new session
    const lastVisitStr = document.cookie.split('; ')
      .find(row => row.startsWith('pt_last_visit='))
      ?.split('=')[1];

    const visitCountStr = document.cookie.split('; ')
      .find(row => row.startsWith('pt_visit_count='))
      ?.split('=')[1] || '0';

    const visitCount = parseInt(visitCountStr, 10) || 0;

    const now = new Date();
    let newVisitCount = visitCount;

    // If last visit was more than 4 hours ago or no last visit, count as new visit
    if (!lastVisitStr || (now.getTime() - new Date(lastVisitStr).getTime() > 4 * 60 * 60 * 1000)) {
      newVisitCount = visitCount + 1;
      // If they've visited at least twice, set a user ID
      if (newVisitCount >= 2) {
        setUserId();
      }
    }

    // Set cookies with 1 year expiry
    document.cookie = `pt_visit_count=${newVisitCount}; path=/; max-age=31536000`;
    document.cookie = `pt_last_visit=${now.toISOString()}; path=/; max-age=31536000`;
    document.cookie = `pt_returning=1; path=/; max-age=31536000`;
  } catch (e) {
    console.error('Error updating visit count:', e);
  }
}

// Enhanced tracking provider
export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Update cookies and track page view on mount
    updatePageDepth();
    updateVisitCount();

    // Track page view
    trackEvent('page_view', {
      path: window.location.pathname,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    });

    // Start page time tracking
    const endTimeTracking = startPageTimeTracking();

    // Set up event delegation for tracking clicks
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;

      // Find closest element with data-pt-event attribute
      while (target && target !== document.body) {
        const eventName = target.getAttribute('data-pt-event');
        if (eventName) {
          trackEvent(eventName, {
            path: window.location.pathname,
            element: target.tagName,
            text: target.textContent?.trim(),
            href: target.getAttribute('href')
          });

          // Set user ID after an interaction
          setUserId();

          break;
        }
        target = target.parentElement as HTMLElement;
      }
    };

    // Track scroll depth
    let maxScrollPercentage = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      // Update max scroll and track at 25%, 50%, 75%, and 100%
      if (scrollPercentage > maxScrollPercentage) {
        maxScrollPercentage = scrollPercentage;

        if (scrollPercentage >= 25 && maxScrollPercentage < 25) {
          trackEvent('scroll_depth', { depth: 25 });
        } else if (scrollPercentage >= 50 && maxScrollPercentage < 50) {
          trackEvent('scroll_depth', { depth: 50 });
        } else if (scrollPercentage >= 75 && maxScrollPercentage < 75) {
          trackEvent('scroll_depth', { depth: 75 });
        } else if (scrollPercentage >= 90 && maxScrollPercentage < 90) {
          trackEvent('scroll_depth', { depth: 90 });
        }
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      endTimeTracking();
    };
  }, []);

  return <>{children}</>;
}
