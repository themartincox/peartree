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

// Generate CSP nonce
function generateNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString('base64');
}

// Build CSP header with nonce
function buildCSPHeader(nonce: string, isDev: boolean): string {
  const cspDirectives = [
    "default-src 'self'",
    // Script policy with nonce - removes need for 'unsafe-inline'
    isDev 
      ? `script-src 'self' 'nonce-${nonce}' 'unsafe-eval' 'strict-dynamic' https:` 
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,
    // Style policy - unfortunately still needs 'unsafe-inline' for Next.js styled-jsx
    "style-src 'self' 'unsafe-inline'",
    // Image policy
    "img-src 'self' data: blob: https://source.unsplash.com https://images.unsplash.com https://ext.same-assets.com https://ugc.same-assets.com",
    // Font policy
    "font-src 'self' data:",
    // Connect policy
    isDev
      ? "connect-src 'self' https://cdn.sanity.io https://*.sanity.io https://vitals.vercel-insights.com ws://localhost:* wss://localhost:*"
      : "connect-src 'self' https://cdn.sanity.io https://*.sanity.io https://vitals.vercel-insights.com",
    // Media policy
    "media-src 'self'",
    // Object policy
    "object-src 'none'",
    // Frame ancestors
    "frame-ancestors 'none'",
    // Frame policy
    "frame-src 'none'",
    // Form action
    "form-action 'self'",
    // Base URI
    "base-uri 'self'",
    // Upgrade insecure requests
    "upgrade-insecure-requests",
    // Worker policy
    "worker-src 'self'",
    // Manifest policy
    "manifest-src 'self'",
  ].join('; ');
  
  return cspDirectives;
}

// Apply security headers to response
function applySecurityHeaders(response: NextResponse, nonce: string, isDev: boolean) {
  // CSP with nonce
  response.headers.set('Content-Security-Policy', buildCSPHeader(nonce, isDev));
  
  // Store nonce for use in components
  response.headers.set('x-nonce', nonce);
  
  // HSTS without preload - safer approach
  // Using includeSubDomains but NOT preload to avoid permanent commitment
  response.headers.set(
    'Strict-Transport-Security',
    isDev 
      ? 'max-age=86400' // 1 day in dev
      : 'max-age=31536000; includeSubDomains' // 1 year in production, no preload
  );
  
  // Cross-Origin policies for origin isolation
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  
  // Other security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
}

export function middleware(request: NextRequest) {
  // Skip middleware for static files and API routes to improve performance
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  const isDev = process.env.NODE_ENV !== 'production';
  
  // Enhanced loop protection - multiple checks to prevent redirect loops
  const alreadyProcessed = request.headers.get('x-ab-processed');
  const isInternalRequest = request.headers.get('x-middleware-rewrite');
  const userAgent = request.headers.get('user-agent');
  
  // Skip A/B processing if already processed, internal request, or bot
  const skipABTesting = alreadyProcessed || isInternalRequest || !userAgent || userAgent.includes('bot');
  
  // Check if this is the homepage for A/B testing
  const isHomepage = pathname === '/' && !request.nextUrl.search;
  
  // Skip A/B for specific request types that might cause loops
  const contentType = request.headers.get('content-type');
  const accept = request.headers.get('accept');
  const skipForRequestType = contentType?.includes('application/json') ||
      accept?.includes('application/json') ||
      accept?.includes('text/event-stream');

  try {
    // Generate nonce for CSP
    const nonce = generateNonce();
    
    // Clone the request headers and add nonce
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    
    // Create response with modified headers
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    
    // Apply security headers to all responses
    applySecurityHeaders(response, nonce, isDev);
    
    // Handle A/B testing for homepage only
    if (isHomepage && !skipABTesting && !skipForRequestType) {
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
      const variantHeaders = getVariantHeaders(variant);
      Object.entries(variantHeaders).forEach(([key, value]) => {
        if (key && value && typeof value === 'string') {
          // Don't override Cache-Control if it's already set by security headers
          if (key !== 'Cache-Control' || !response.headers.has('Cache-Control')) {
            response.headers.set(key, value);
          }
        }
      });
      
      // Mark as processed to prevent loops
      response.headers.set('x-ab-processed', '1');
      response.headers.set('x-ab-variant', variant);
    }
    
    return response;
  } catch (error) {
    // Fallback: if anything goes wrong, just pass through with basic security headers
    console.error('Middleware error:', error);
    const fallbackResponse = NextResponse.next();
    
    // Apply at least basic security headers even on error
    try {
      const nonce = generateNonce();
      applySecurityHeaders(fallbackResponse, nonce, isDev);
    } catch (headerError) {
      console.error('Failed to apply security headers:', headerError);
    }
    
    return fallbackResponse;
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
     * - manifest.json
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|manifest.json|robots.txt|sitemap.xml|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
};