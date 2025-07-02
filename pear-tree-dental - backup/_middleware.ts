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
  // Only apply A/B testing to the homepage
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Check for existing variant cookie
  let variant = request.cookies.get(COOKIE_NAME)?.value as Variant;

  // Validate existing variant or assign new one
  if (!variant || !['A', 'B', 'C'].includes(variant)) {
    variant = assignVariant();

    // Set cookie with variant assignment
    response.cookies.set(COOKIE_NAME, variant, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: false, // Allow client-side access for analytics
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
  }

  // Add variant headers for server-side rendering
  const headers = getVariantHeaders(variant);
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Add variant to request headers for server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-ab-variant', variant);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
    headers: response.headers,
  });
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
