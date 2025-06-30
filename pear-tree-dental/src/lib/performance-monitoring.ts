// Performance Monitoring for Postino Website
// Tracks Core Web Vitals and sends data to analytics

interface MetricData {
  name: string
  value: number
  id: string
  navigationType?: string
  delta?: number
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

// Send metric data to Google Analytics via GTM
function sendToGoogleAnalytics(metric: MetricData) {
  const { name, value, id } = metric

  // Send to GTM if available
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      custom_parameter_name: name,
      non_interaction: true,
    })
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 ${name}:`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      rating: getMetricRating(name, value),
      id,
    })
  }
}

// Get performance rating based on Core Web Vitals thresholds
function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  switch (name) {
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor'
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor'
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor'
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor'
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor'
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor'
    default:
      return 'good'
  }
}

// Initialize Core Web Vitals monitoring
export async function initPerformanceMonitoring() {
  try {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return;
    }

    // Dynamic import to avoid affecting initial page load
    const webVitals = await import('web-vitals');

    // Check if the functions exist before calling them
    if (webVitals.onFCP) webVitals.onFCP(sendToGoogleAnalytics);
    if (webVitals.onLCP) webVitals.onLCP(sendToGoogleAnalytics);
    if (webVitals.onFID) webVitals.onFID(sendToGoogleAnalytics);
    if (webVitals.onCLS) webVitals.onCLS(sendToGoogleAnalytics);
    if (webVitals.onTTFB) webVitals.onTTFB(sendToGoogleAnalytics);
    if (webVitals.onINP) webVitals.onINP(sendToGoogleAnalytics);

    console.log('✅ Performance monitoring initialized')
  } catch (error) {
    console.warn('Performance monitoring not available:', error)
  }
}

// Manual performance check for PageSpeed Insights
export function generatePageSpeedReport(url: string = window.location.href) {
  const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`

  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Generate PageSpeed Report:', pageSpeedUrl)
  }

  return pageSpeedUrl
}

// Performance metrics summary for dashboard
export async function getPerformanceMetrics() {
  return new Promise((resolve) => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      const metrics = {
        // Navigation timing
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),

        // Paint timing
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,

        // Network info
        connectionType: (navigator as any).connection?.effectiveType || 'unknown',

        // Resource timing summary
        totalResources: performance.getEntriesByType('resource').length,

        timestamp: new Date().toISOString(),
      }

      resolve(metrics)
    } else {
      resolve(null)
    }
  })
}

// Performance budget checker
export const PERFORMANCE_BUDGETS = {
  FCP: 1800, // First Contentful Paint
  LCP: 2500, // Largest Contentful Paint
  FID: 100,  // First Input Delay
  CLS: 0.1,  // Cumulative Layout Shift
  TTFB: 800, // Time to First Byte
  INP: 200,  // Interaction to Next Paint
} as const

export function checkPerformanceBudget(metric: string, value: number): boolean {
  const budget = PERFORMANCE_BUDGETS[metric as keyof typeof PERFORMANCE_BUDGETS]
  return budget ? value <= budget : true
}
