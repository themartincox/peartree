import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Disabled: avoid external geolocation in middleware to keep TTFB low and pages static.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

// No matcher -> this middleware is effectively disabled.
export const config = { matcher: [] };
