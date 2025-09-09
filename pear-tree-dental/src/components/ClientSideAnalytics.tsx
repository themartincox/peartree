'use client'

import { useEffect } from 'react'
import { Variant } from '@/lib/ab-testing'

// Add type declaration for global gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: any) => void;
  }
}

interface ClientSideAnalyticsProps {
  variant: Variant;
}

export default function ClientSideAnalytics({ variant }: ClientSideAnalyticsProps) {
  useEffect(() => {
    // Initialize any client-side analytics here
    if (typeof window !== 'undefined' && window.gtag) {
      // Track A/B test variant if provided
      window.gtag('event', 'ab_test_variant_view', {
        variant: variant,
      });

      console.log('Client-side analytics initialized with variant', variant);
    }
  }, [variant])

  return null
}
