// Define the Variant type locally to avoid build issues
export type Variant = "A" | "B" | "C";

/**
 * Get the current A/B test variant from server-side headers
 * This function works in Server Components and API routes
 */
export async function getVariant(): Promise<Variant> {
  try {
    // Only import headers when we're in a server context
    if (typeof window === "undefined") {
      const { headers } = await import("next/headers");
      const headersList = await headers();
      const variant = headersList.get("x-ab-variant") as Variant;

      // Fallback to A if no variant found
      return variant && ["A", "B", "C"].includes(variant) ? variant : "A";
    }
  } catch (error) {
    console.warn("Failed to get variant from headers:", error);
  }

  // Fallback for client-side or error cases
  return "A";
}

/**
 * Get variant from cookies (client-side compatible)
 * Used for client components and browser environments
 */
export function getVariantFromCookies(): Variant | null {
  if (typeof document === "undefined") return null;

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("ptd-ab-variant="))
    ?.split("=")[1];

  return cookieValue && ["A", "B", "C"].includes(cookieValue)
    ? (cookieValue as Variant)
    : null;
}

/**
 * Track A/B test variant assignment
 * Works in both server and client environments
 */
export function trackVariantAssignment(variant: Variant, isServerSide = false) {
  const data = {
    variant,
    test_name: "homepage_welcome",
    assignment_method: isServerSide ? "server" : "client",
    timestamp: new Date().toISOString(),
  };

  // Server-side tracking (you can extend this for your analytics service)
  if (isServerSide) {
    console.log("[Server] A/B Test Variant Assigned:", data);
    return;
  }

  // Client-side tracking
  try {
    // Google Analytics 4
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "ab_test_variant_assigned", {
        event_category: "AB_Test",
        event_label: "homepage_welcome_server",
        custom_parameter_1: variant,
        custom_parameter_2: "server_side",
      });
    }

    // Console logging for development
    console.log("[Client] A/B Test Variant:", data);

    // You can add other analytics services here
    // Example: Facebook Pixel, Mixpanel, etc.
  } catch (error) {
    console.warn("Analytics tracking failed:", error);
  }
}

/**
 * Variant-specific metadata for SEO optimization
 */
export function getVariantMetadata(variant: Variant) {
  const baseMetadata = {
    title:
      "Dentist Burton Joyce | Pear Tree Dental - Premium Dental Care Nottinghamshire",
    description:
      "Leading dentist in Burton Joyce, Nottinghamshire offering comprehensive dental care. NHS & private treatments, emergency dentist, dental membership plans from £8.99/month. Book online.",
  };

  // Variant-specific optimizations for A/B testing
  switch (variant) {
    case "A":
      return {
        ...baseMetadata,
        title:
          "Dentist Burton Joyce | Pear Tree Dental - Premium Dental Care Nottinghamshire",
        description:
          "Leading dentist in Burton Joyce, Nottinghamshire offering comprehensive dental care. NHS & private treatments, emergency dentist, dental membership plans from £8.99/month. Book online.",
      };

    case "B":
      return {
        ...baseMetadata,
        title:
          "Welcome to Pear Tree Dental | Burton Joyce Dentist | Nottinghamshire",
        description:
          "Welcome to Burton Joyce's premier dental practice. Comprehensive dental care, cosmetic dentistry, emergency appointments. Serving Nottinghamshire families since 2008.",
      };

    case "C":
      return {
        ...baseMetadata,
        title:
          "Pear Tree Dental Practice | Burton Joyce Dentist | Family Dental Care",
        description:
          "Your local Burton Joyce dental practice providing family-friendly dental care. Modern treatments, experienced dentists, flexible appointment times. Call 0115 931 2935.",
      };

    default:
      return baseMetadata;
  }
}

/**
 * Check if variant should show welcome screen
 */
export function shouldShowWelcomeScreen(variant: Variant): boolean {
  return variant === "B" || variant === "C";
}

/**
 * Get variant-specific CSS classes
 */
export function getVariantClasses(variant: Variant): string {
  return `ab-variant-${variant.toLowerCase()}`;
}

interface TrackingData {
  event: string;
  variant: Variant;
  timestamp: string;
  user_agent: string;
  [key: string]: unknown;
}

/**
 * Server-side analytics tracking for API routes
 */
export async function trackServerSideEvent(
  event: string,
  variant: Variant,
  additionalData?: Record<string, unknown>,
) {
  const trackingData: TrackingData = {
    event,
    variant,
    timestamp: new Date().toISOString(),
    user_agent: typeof window !== "undefined" ? navigator.userAgent : "server",
    ...additionalData,
  };

  // Log to console (replace with your analytics service)
  console.log("[Server Analytics]:", trackingData);

  // Here you would send to your analytics service
  // Example: await sendToAnalytics(trackingData);
}
