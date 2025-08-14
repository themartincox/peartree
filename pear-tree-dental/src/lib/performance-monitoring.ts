// Performance monitoring utilities for Pear Tree Dental
// Tracks page performance and user experience metrics

export function initPerformanceMonitoring(): void {
  // Only run in browser environment
  if (typeof window === "undefined") return;

  try {
    // Log Core Web Vitals when available
    if ("web-vital" in window || "PerformanceObserver" in window) {
      // Track Largest Contentful Paint (LCP)
      trackLCP();

      // Track First Input Delay (FID)
      trackFID();

      // Track Cumulative Layout Shift (CLS)
      trackCLS();
    }

    // Log initial page load performance
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (perfData) {
          console.log(
            "[Performance] Page load time:",
            perfData.loadEventEnd - perfData.fetchStart,
            "ms",
          );
        }
      }, 0);
    });
  } catch (error) {
    console.warn("[Performance] Monitoring initialization failed:", error);
  }
}

function trackLCP(): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log("[Performance] LCP:", lastEntry.startTime, "ms");
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  } catch (error) {
    console.warn("[Performance] LCP tracking failed:", error);
  }
}

function trackFID(): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Type assertion for PerformanceEventTiming which has processingStart
        const fidEntry = entry as PerformanceEventTiming;
        if (typeof fidEntry.processingStart === "number") {
          console.log(
            "[Performance] FID:",
            fidEntry.processingStart - fidEntry.startTime,
            "ms",
          );
        }
      });
    });
    observer.observe({ type: "first-input", buffered: true });
  } catch (error) {
    console.warn("[Performance] FID tracking failed:", error);
  }
}

function trackCLS(): void {
  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(
        (
          entry: PerformanceEntry & {
            hadRecentInput?: boolean;
            value?: number;
          },
        ) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        },
      );
      console.log("[Performance] CLS:", clsValue);
    });
    observer.observe({ type: "layout-shift", buffered: true });
  } catch (error) {
    console.warn("[Performance] CLS tracking failed:", error);
  }
}
