import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// IMPORTANT: Store your API key securely, e.g., in a .env.local file
// For this example, we'll use it directly, but for production, use process.env.IPGEOLOCATION_API_KEY
const IPGEOLOCATION_API_KEY = '220a95066e824c5c86b3750d8c48cc0d';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Get client IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0] ||
             request.ip || // request.ip is available in Next.js middleware
             '127.0.0.1';

  let city = 'Unknown';
  let region = 'Unknown';
  let country = 'Unknown';
  let postcode = 'Unknown';
  let isLocal = false; // Assuming 'isLocal' means within Nottingham area

  // Handle localhost for development
  if (ip === '127.0.0.1' || ip === '::1' || ip?.includes('localhost')) {
    city = 'Nottingham';
    region = 'Nottinghamshire';
    country = 'United Kingdom';
    postcode = 'NG1';
    isLocal = true;
  } else {
    try {
      const geoResponse = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}&ip=${ip}`);
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        if (geoData.status !== 400) { // ipgeolocation.io returns status 400 for invalid IP or API key issues
          city = geoData.city || city;
          region = geoData.state_prov || region;
          country = geoData.country_name || country;
          postcode = geoData.zipcode || postcode;

          // Determine if in Nottingham area (similar to useLocationDetection)
          isLocal = city.toLowerCase().includes('nottingham') || region.toLowerCase().includes('nottingham') || postcode.toLowerCase().startsWith('ng');
        }
      }
    } catch (error) {
      console.error('Middleware IP geolocation failed:', error);
    }
  }

  // Set headers for cohort engine
  response.headers.set('x-peartree-city', city);
  response.headers.set('x-peartree-region', region);
  response.headers.set('x-peartree-country', country);
  response.headers.set('x-peartree-postcode', postcode);
  response.headers.set('x-peartree-is-local', isLocal.toString());

  // Add other headers (device, timeOfDay, officeOpen, etc.) - these would need more logic
  // For now, let's set some basic ones or leave them to be inferred by getCohort if possible
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday

  const officeOpen = (day >= 1 && day <= 5 && hour >= 9 && hour < 17);
  const timeOfDay = 
    hour >= 5 && hour < 12 ? 'morning' :
    hour >= 12 && hour < 17 ? 'afternoon' :
    hour >= 17 && hour < 22 ? 'evening' :
    'night';
  const deviceType = request.headers.get('user-agent')?.includes('Mobi') ? 'mobile' : 'desktop'; // Simplified

  response.headers.set('x-peartree-office-hours', officeOpen.toString());
  response.headers.set('x-peartree-time-of-day', timeOfDay);
  response.headers.set('x-peartree-device', deviceType);

  // Travel time/distance would typically come from a separate service (e.g., Google Maps API)
  // and might be too complex for middleware on every request. For now, leave as null.
  response.headers.set('x-peartree-travel-time', '');
  response.headers.set('x-peartree-travel-distance', '');
  response.headers.set('x-peartree-travel-mode', '');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes, as we're setting headers for them)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};