// Define the Variant type locally to avoid build issues
export type Variant = 'A' | 'B' | 'C';

/**
 * Check if the current context is a build-time environment
 * This is critical to avoid dynamic server usage during static generation
 */
function isBuildTime(): boolean {
  return (
    process.env.NEXT_PHASE === 'phase-production-build' ||
    process.env.NETLIFY_BUILD === 'true' ||
    (process.env.NODE_ENV === 'production' &&
     !process.env.VERCEL_URL &&
     !process.env.NETLIFY_URL)
  );
}

/**
 * Synchronous variant getter - safe for build-time and static generation
 * Use this in generateMetadata and other static contexts
 */
export function getVariantSync(): Variant {
  // Always return default variant during build to prevent static generation issues
  if (typeof window === 'undefined' && isBuildTime()) {
    return 'A';
  }

  // For client-side, try to get from cookies
  if (typeof window !== 'undefined') {
    const variantFromCookies = getVariantFromCookies();
    if (variantFromCookies) return variantFromCookies;
  }

  // Default fallback
  return 'A';
}

/**
 * Get the current A/B test variant from server-side headers
 * This function works in Server Components and API routes
 * Modified to handle static rendering during build
 */
export async function getVariant(): Promise<Variant> {
  // First check if we're in a build context - always return 'A' for static generation
  if (typeof window === 'undefined' && isBuildTime()) {
    return 'A';
  }

  try {
    // Only import headers when we're in a server context and not in a static build
    if (typeof window === 'undefined') {
      try {
        const { headers } = await import('next/headers');
        const headersList = await headers();
        const variant = headersList.get('x-ab-variant') as Variant;

        // Fallback to A if no variant found
        return variant && ['A', 'B', 'C'].includes(variant) ? variant : 'A';
      } catch (headerError) {
        console.warn('Failed to access headers (likely static context):', headerError);
        return 'A';
      }
    }
  } catch (error) {
    console.warn('Failed to get variant from headers:', error);
  }

  // Fallback for client-side or error cases
  return 'A';
}

/**
 * Get variant from cookies (client-side compatible)
 * Used for client components and browser environments
 */
export function getVariantFromCookies(): Variant | null {
  if (typeof document === 'undefined') return null;

  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('ptd-ab-variant='))
    ?.split('=')[1];

  return cookieValue && ['A', 'B', 'C'].includes(cookieValue) ? cookieValue as Variant : null;
}

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

  // Server-side tracking (you can extend this for your analytics service)
  if (isServerSide) {
    console.log('[Server] A/B Test Variant Assigned:', data);
    return;
  }

  // Client-side tracking
  try {
    // Google Analytics 4
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag('event', 'ab_test_variant_assigned', {
        event_category: 'AB_Test',
        event_label: 'homepage_welcome_server',
        custom_parameter_1: variant,
        custom_parameter_2: 'server_side',
      });
    }

    // Console logging for development
    console.log('[Client] A/B Test Variant:', data);

    // You can add other analytics services here
    // Example: Facebook Pixel, Mixpanel, etc.

  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
}

/**
 * Variant-specific metadata for SEO optimization
 */
export function getVariantMetadata(variant: Variant) {
  const baseMetadata = {
    title: "Dentist in Nottingham | Pear Tree Dental - Premium Dental Care",
    description: "Leading private dentist in Nottingham offering comprehensive dental care. Specialist in Invisalign, implants, and cosmetic dentistry. Book your consultation online today.",
  };

  // Variant-specific optimizations for A/B testing
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

    case 'C':
      return {
        ...baseMetadata,
        title: "Pear Tree Dental | Nottingham's Family & Cosmetic Dentist",
        description: "Your local Nottingham dentist providing family-friendly and cosmetic dental care throughout Nottingham. Modern treatments, experienced dentists, and flexible appointments. Book online.",
      };

    default:
      return baseMetadata;
  }
}

/**
 * Check if variant should show welcome screen
 */
export function shouldShowWelcomeScreen(variant: Variant): boolean {
  return variant === 'B' || variant === 'C';
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

  // Log to console (replace with your analytics service)
  console.log('[Server Analytics]:', trackingData);

  // Here you would send to your analytics service
  // Example: await sendToAnalytics(trackingData);
}
