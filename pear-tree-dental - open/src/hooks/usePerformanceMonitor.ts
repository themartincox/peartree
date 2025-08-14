import { useRef } from "react";

interface PerformanceMetrics {
  action: string;
  startTime: number;
  endTime?: number;
  duration?: number;
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics[]>([]);

  const startTiming = (action: string) => {
    const startTime = performance.now();
    metricsRef.current.push({
      action,
      startTime,
    });
    return startTime;
  };

  const endTiming = (action: string) => {
    const endTime = performance.now();
    const metric = metricsRef.current.find(
      (m) => m.action === action && !m.endTime,
    );

    if (metric) {
      metric.endTime = endTime;
      metric.duration = endTime - metric.startTime;

      // Log performance for debugging (only in development)
      if (process.env.NODE_ENV === "development") {
        console.log(`[Performance] ${action}: ${metric.duration.toFixed(2)}ms`);
      }
    }
  };

  const getMetrics = () => metricsRef.current;

  return { startTiming, endTiming, getMetrics };
};

export default usePerformanceMonitor;
