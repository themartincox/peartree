/**
 * Rate Limiting Utilities
 * Prevents abuse and spam submissions
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting (in production, use Redis or database)
const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Rate limiting configuration
 */
const RATE_LIMITS = {
  membership: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 3, // Max 3 membership submissions per 15 minutes per IP
  },
  general: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10, // Max 10 requests per minute per IP
  }
};

/**
 * Get client IP from request
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  // Priority: CF-Connecting-IP > X-Real-IP > X-Forwarded-For > default
  return cfConnectingIp || realIp || forwarded?.split(',')[0] || 'unknown';
}

/**
 * Check if request is rate limited
 */
export function isRateLimited(
  identifier: string,
  type: 'membership' | 'general' = 'general'
): { limited: boolean; resetTime?: number; remaining?: number } {

  const config = RATE_LIMITS[type];
  const now = Date.now();
  const key = `${type}_${identifier}`;

  // Clean up expired entries
  if (rateLimitStore.size > 1000) { // Prevent memory bloat
    for (const [k, entry] of rateLimitStore.entries()) {
      if (entry.resetTime < now) {
        rateLimitStore.delete(k);
      }
    }
  }

  let entry = rateLimitStore.get(key);

  // Reset if window expired
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 0,
      resetTime: now + config.windowMs
    };
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  const isLimited = entry.count > config.maxRequests;
  const remaining = Math.max(0, config.maxRequests - entry.count);

  return {
    limited: isLimited,
    resetTime: entry.resetTime,
    remaining
  };
}

/**
 * Security headers for API responses
 */
export function getSecurityHeaders(): { [key: string]: string } {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'",
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
  };
}

/**
 * Validate request origin and method
 */
export function validateRequest(request: Request): { valid: boolean; error?: string } {
  // Check Content-Type for POST requests
  if (request.method === 'POST') {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return { valid: false, error: 'Invalid content type' };
    }
  }

  // Check for suspicious user agents
  const userAgent = request.headers.get('user-agent');
  if (!userAgent || userAgent.length < 10) {
    return { valid: false, error: 'Invalid user agent' };
  }

  // Check for common bot patterns - but allow legitimate browsers
  const suspiciousPatterns = [
    /bot|crawler|spider|scraper/i,
    /automated|script/i
  ];

  // Only block obvious bots, not development tools
  if (suspiciousPatterns.some(pattern => pattern.test(userAgent))) {
    return { valid: false, error: 'Automated requests not allowed' };
  }

  return { valid: true };
}

/**
 * Enhanced request validation for membership submissions
 */
export function validateMembershipRequest(request: Request): {
  valid: boolean;
  error?: string;
  clientIP: string;
  rateLimitResult: ReturnType<typeof isRateLimited>;
} {
  const clientIP = getClientIP(request);

  // Basic request validation
  const basicValidation = validateRequest(request);
  if (!basicValidation.valid) {
    return {
      valid: false,
      error: basicValidation.error,
      clientIP,
      rateLimitResult: { limited: false }
    };
  }

  // Rate limiting check
  const rateLimitResult = isRateLimited(clientIP, 'membership');
  if (rateLimitResult.limited) {
    return {
      valid: false,
      error: 'Rate limit exceeded. Please try again later.',
      clientIP,
      rateLimitResult
    };
  }

  return {
    valid: true,
    clientIP,
    rateLimitResult
  };
}
