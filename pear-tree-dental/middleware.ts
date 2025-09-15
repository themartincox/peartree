import { NextRequest, NextResponse } from 'next/server';

export type Variant = 'A' | 'B' | 'C';

const COOKIE_NAME = 'ptd-ab-variant';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Server-side variant assignment with weighted distribution
function assignVariant(): Variant {
  const random = Math.random();

  // 33.3% split with slight bias toward A for control
  if (random < 0.334) return 'A';
  if (random < 0.667) return 'B';
  return 'C';
}

// Generate variant-specific headers for analytics tracking
function getVariantHeaders(variant: Variant) {
  return {
    'X-AB-Variant': variant,
    'X-AB-Test': 'homepage-welcome',
    'Cache-Control': 'public, max-age=0, must-revalidate',
  };
}

export function middleware(request: NextRequest) {
  // Enhanced loop protection - multiple checks to prevent redirect loops
  const alreadyProcessed = request.headers.get('x-ab-processed');
  const isInternalRequest = request.headers.get('x-middleware-rewrite');
  const userAgent = request.headers.get('user-agent');

  // Skip processing if already processed, internal request, or bot
  if (alreadyProcessed || isInternalRequest || !userAgent || userAgent.includes('bot')) {
    return NextResponse.next();
  }

  // Only apply A/B testing to the exact homepage path
  // This condition will be removed or modified as we expand cohort logic
  if (request.nextUrl.pathname !== '/' || request.nextUrl.search) {
    // For now, only apply A/B to homepage, but apply cohort logic to all pages
    // We will refine this matcher later
  }

  // Skip for specific request types that might cause loops
  const contentType = request.headers.get('content-type');
  const accept = request.headers.get('accept');

  if (contentType?.includes('application/json') ||
      accept?.includes('application/json') ||
      accept?.includes('text/event-stream')) {
    return NextResponse.next();
  }

  try {
    const response = NextResponse.next();

    // --- Cohort Detection Logic ---
    const cohorts: string[] = [];

    // 1. Geo-based Cohorts
    const city = request.geo?.city || '';
    const region = request.geo?.region || '';
    const country = request.geo?.country || '';
    const postalCode = request.geo?.postalCode || ''; // More granular if available

    let geoCohort = 'global'; // Default broad cohort

    // Specific local areas (example mapping - refine as needed)
    if (city === 'Nottingham') {
      geoCohort = 'nottingham-city';
      if (postalCode.startsWith('NG4')) { // Example postcode check
        geoCohort = 'gedling';
      } else if (postalCode.startsWith('NG9')) {
        geoCohort = 'beeston'; // Example
      }
      // Add more specific suburb/postcode logic here
    } else if (region === 'England') {
      geoCohort = 'england';
    } else if (country === 'GB') {
      geoCohort = 'uk-national';
    }
    cohorts.push(`geo=${geoCohort}`);

    // 2. Time-based Cohorts (using UTC time at Edge, convert to London time if needed)
    const now = new Date(); // Time at Edge Function execution
    const hour = now.getUTCHours(); // Use UTC hour for consistency across Edge locations

    let timeOfDayCohort = 'night';
    if (hour >= 6 && hour < 12) {
      timeOfDayCohort = 'morning';
    } else if (hour >= 12 && hour < 18) {
      timeOfDayCohort = 'afternoon';
    } else if (hour >= 18 && hour < 22) {
      timeOfDayCohort = 'evening';
    }
    cohorts.push(`time=${timeOfDayCohort}`);

    // Office hours (example: 9 AM - 5 PM UTC, Mon-Fri) - adjust for London timezone if needed
    const dayOfWeek = now.getUTCDay(); // 0 = Sunday, 6 = Saturday
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    const isOfficeHours = isWeekday && hour >= 9 && hour < 17;
    cohorts.push(`office-hours=${isOfficeHours ? 'true' : 'false'}`);

    // 3. Device-based Cohorts
    const userAgent = request.headers.get('user-agent') || '';
    const isMobile = request.headers.get('sec-ch-ua-mobile') === '?1' || userAgent.includes('Mobi');
    const deviceCohort = isMobile ? 'mobile' : 'desktop';
    cohorts.push(`device=${deviceCohort}`);

    // 4. Intent Source Cohorts (simplified example - expand as needed)
    const referrer = request.headers.get('referer') || '';
    const utmSource = request.nextUrl.searchParams.get('utm_source') || '';
    let sourceCohort = 'direct';

    if (utmSource) {
      sourceCohort = utmSource;
    } else if (referrer.includes('google.com')) {
      sourceCohort = 'organic-google';
    } else if (referrer.includes('facebook.com')) {
      sourceCohort = 'organic-facebook';
    }
    // Add more specific source logic (e.g., for maps, specific campaigns)
    cohorts.push(`source=${sourceCohort}`);

    // Set the custom cohort header by joining all identified cohorts
    response.headers.set('x-ptd-cohort', cohorts.join('; '));

    // --- Existing A/B Testing Logic (only for homepage for now) ---
    if (request.nextUrl.pathname === '/' && !request.nextUrl.search) {
      // Check for existing variant cookie with fallback
      let variant = request.cookies.get(COOKIE_NAME)?.value as Variant;

      // Only assign new variant if none exists or invalid
      if (!variant || !['A', 'B', 'C'].includes(variant)) {
        variant = assignVariant();

        // Set cookie with variant assignment - more restrictive settings
        response.cookies.set(COOKIE_NAME, variant, {
          maxAge: COOKIE_MAX_AGE,
          httpOnly: false,
          secure: true, // Always secure in production
          sameSite: 'strict', // More restrictive for security
          path: '/',
        });
      }

      // Add variant headers for server-side rendering with safe defaults
      const headers = getVariantHeaders(variant);
      Object.entries(headers).forEach(([key, value]) => {
        if (key && value && typeof value === 'string') {
          response.headers.set(key, value);
        }
      });

      // Mark as processed to prevent loops
      response.headers.set('x-ab-processed', '1');
      response.headers.set('x-ab-variant', variant);
    }

    return response;
  } catch (error) {
    // Fallback: if anything goes wrong, just pass through
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
}
