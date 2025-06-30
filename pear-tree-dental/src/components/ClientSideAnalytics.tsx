'use client'

import { useEffect } from 'react'

export default function ClientSideAnalytics() {
  useEffect(() => {
    // Initialize any client-side analytics here
    if (typeof window !== 'undefined' && window.gtag) {
      // Any client-side analytics initialization
      console.log('Client-side analytics initialized')
    }
  }, [])

  return null
}
