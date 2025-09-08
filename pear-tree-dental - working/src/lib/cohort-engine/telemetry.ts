// src/lib/cohort-engine/telemetry.ts

// Simple telemetry logging
export function logRedirect(from: string, to: string, userAgent?: string, ip?: string): void {
  console.log(`Redirect: ${from} -> ${to} [${userAgent || 'unknown'}] [${ip || 'unknown'}]`);
}

// Track events
export function trackEvent(
  eventName: string,
  eventData?: Record<string, any>,
  userAgent?: string,
  ip?: string
): void {
  console.log(`Event: ${eventName}`, eventData, `[${userAgent || 'unknown'}] [${ip || 'unknown'}]`);
}
