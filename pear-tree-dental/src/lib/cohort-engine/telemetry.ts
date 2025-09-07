// src/lib/cohort-engine/telemetry.ts

/**
 * Logs a redirect event for telemetry purposes
 */
export function logRedirect(from: string, to: string, reason: string): void {
  try {
    console.log(`[redirect] ${from} → ${to} (${reason})`)

    // In a production environment, this would send telemetry data
    // to a logging system or analytics platform
  } catch (error) {
    // Fail silently - telemetry should never break the application
    console.error('[telemetry error]', error)
  }
}

/**
 * Logs a cohort assignment event
 */
export function logCohortAssignment(
  userId: string,
  cohortData: Record<string, any>,
  source: string
): void {
  try {
    console.log(`[cohort] User ${userId} assigned to cohort from ${source}:`, cohortData)

    // In a production environment, this would track cohort assignments
    // for later analysis of conversion rates by cohort
  } catch (error) {
    // Fail silently - telemetry should never break the application
    console.error('[telemetry error]', error)
  }
}

/**
 * Logs a conversion event
 */
export function logConversion(
  userId: string,
  conversionType: string,
  value?: number,
  metadata?: Record<string, any>
): void {
  try {
    console.log(`[conversion] User ${userId} converted: ${conversionType}`, { value, metadata })

    // In a production environment, this would track conversions
    // and associate them with the user's cohort
  } catch (error) {
    // Fail silently - telemetry should never break the application
    console.error('[telemetry error]', error)
  }
}
