import { headers } from 'next/headers';

// Define the Variant type. The edge function now only returns 'A' or 'B'.
export type Variant = 'A' | 'B';

/**
 * Get the current A/B test variant from the request headers.
 * This is the single source of truth for the variant, set by the Netlify edge function.
 * This function is designed to be used in Server Components.
 */
export async function getVariant(): Promise<Variant> {
  // During build, headers are not available. Return a default variant.
  // This ensures that static generation can succeed.
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return 'A';
  }

  try {
    const headersList = await headers(); // ✅ Fixed: Added await
    const variant = headersList.get('x-ptd-variant') as Variant;

    // Validate the variant from the header
    if (variant && ['A', 'B'].includes(variant)) {
      return variant;
    }
  } catch (error) {
    // This can happen in contexts where headers are not available (e.g. client-side).
    console.warn('Could not get A/B variant from headers:', error);
  }

  // Default fallback variant
  return 'A';
}

// --- The rest of the helper functions can remain the same for now ---
// They are used for metadata, tracking, and classes based on the variant.

/**
 * Track A/B test variant assignment
 * Works in both server and client environments
 */
export function trackVariantAssignment(variant: Variant, isServerSide = false) {
  const data = {
    variant,
    test_name: 'homepage_welcome',
    assignment_method: isServerSide ? 'server' : 'client',
    timestamp: new Date().toISOString(),
  };

  if (isServerSide) {
    console.log('[Server] A/B Test Variant Assigned:', data);
    return;
  }

  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_variant_assigned', {
        event_category: 'AB_Test',
        event_label: 'homepage_welcome_server',
        custom_parameter_1: variant,
        custom_parameter_2: 'server_side',
      });
    }
    console.log('[Client] A/B Test Variant:', data);
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
}

/**
 * Variant-specific metadata for SEO optimisation
 */
export function getVariantMetadata(variant: Variant) {
  const baseMetadata = {
    title: "Dentist in Nottingham | Pear Tree Dental - Premium Dental Care",
    description: "Leading private dentist in Nottingham offering comprehensive dental care. Specialist in Invisalign, implants, and cosmetic dentistry. Book your consultation online today.",
  };

  switch (variant) {
    case 'A':
      return {
        ...baseMetadata,
        title: "Dentist in Nottingham | Pear Tree Dental Practice",
        description: "Your trusted private dentist in Nottingham for Invisalign, dental implants, and smile makeovers. Book a consultation at our modern Nottingham practice.",
      };
    case 'B':
      return {
        ...baseMetadata,
        title: "Welcome to Pear Tree Dental | Private Dentist in Nottingham",
        description: "Welcome to Nottingham's premier private dental practice. We offer comprehensive dental care including cosmetic dentistry and emergency appointments across Nottingham.",
      };
    // Case 'C' is removed as the edge function only returns 'A' or 'B'
    default:
      return baseMetadata;
  }
}

/**
 * Check if variant should show welcome screen
 */
export function shouldShowWelcomeScreen(variant: Variant): boolean {
  // Assuming 'B' is the variant with the welcome screen
  return variant === 'B';
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
export async function trackServerSideEvent(event: string, variant: Variant, additionalData?: Record<string, unknown>) {
  const trackingData: TrackingData = {
    event,
    variant,
    timestamp: new Date().toISOString(),
    user_agent: typeof window !== 'undefined' ? navigator.userAgent : 'server',
    ...additionalData,
  };

  console.log('[Server Analytics]:', trackingData);
}