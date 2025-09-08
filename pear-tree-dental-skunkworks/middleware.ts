// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';

// --- A/B Testing Configuration (Existing Logic Preserved) ---
export type Variant = 'A' | 'B' | 'C';
const COOKIE_NAME = 'ptd-ab-variant';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function assignVariant(): Variant {
  const random = Math.random();
  if (random < 0.334) return 'A';
  if (random < 0.667) return 'B';
  return 'C';
}

// --- Personalization Configuration (New) ---
const PRACTICE_COORDS = '52.985774,-1.040024'; // Peartree Dental Coordinates
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PRACTICE_TIMEZONE = 'Europe/London';

// Define the opening hours directly for reliable Edge execution (based on practiceInfo.ts)
const OPENING_HOURS = {
  Monday: { open: '08:45', close: '17:00' },
  Tuesday: { open: '08:45', close: '17:00' },
  Wednesday: { open: '08:45', close: '17:00' },
  Thursday: { open: '08:45', close: '17:00' },
  Friday: { open: '08:00', close: '15:30' },
  Saturday: { open: null, close: null },
  Sunday: { open: null, close: null },
};

// --- Middleware Execution ---
export async function middleware(request: NextRequest) {
  // Initialize response object
  const response = NextResponse.next();

  // 1. A/B Testing Logic (Handles only '/')
  handleABTesting(request, response);

  // 2. Personalization Logic (Handles all relevant paths)
  await handlePersonalization(request, response);
  
  // Crucial for caching: Inform CDNs that the response varies based on these factors
  // We vary by the personalization headers and the A/B variant header.
  response.headers.set('Vary', 'x-peartree-city, x-peartree-time-of-day, x-peartree-office-hours, x-ab-variant');

  return response;
}

// --- A/B Testing Handler (Refactored from original) ---
function handleABTesting(request: NextRequest, response: NextResponse) {
    // Only apply A/B testing to the exact homepage path
    if (request.nextUrl.pathname !== '/' || request.nextUrl.search) {
        return;
    }

    // Loop protection and skip conditions (from original code)
    const alreadyProcessed = request.headers.get('x-ab-processed');
    const isInternalRequest = request.headers.get('x-middleware-rewrite');
    const userAgent = request.headers.get('user-agent');

    if (alreadyProcessed || isInternalRequest || !userAgent || userAgent.includes('bot')) {
        return;
    }

    const contentType = request.headers.get('content-type');
    const accept = request.headers.get('accept');

    if (contentType?.includes('application/json') || accept?.includes('application/json') || accept?.includes('text/event-stream')) {
        return;
    }

    try {
        let variant = request.cookies.get(COOKIE_NAME)?.value as Variant;

        if (!variant || !['A', 'B', 'C'].includes(variant)) {
            variant = assignVariant();
            response.cookies.set(COOKIE_NAME, variant, {
                maxAge: COOKIE_MAX_AGE,
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production', // Best practice: secure only in production
                sameSite: 'lax', // 'lax' often provides a better UX than 'strict' for incoming links
                path: '/',
            });
        }

        // Set headers for analytics and server-side reading (getVariant)
        response.headers.set('X-AB-Test', 'homepage-welcome');
        response.headers.set('x-ab-processed', '1');
        response.headers.set('x-ab-variant', variant); 

    } catch (error) {
        console.error('A/B Testing Middleware error:', error);
    }
}


// --- Personalization Handler ---
async function handlePersonalization(request: NextRequest, response: NextResponse) {
  try {
    // 1. Geolocation Data
    const geo = request.geo;
    const userCity = geo?.city || 'your area';
    const userTimezone = geo?.timezone || PRACTICE_TIMEZONE;

    // 2. User's Local Time & Office Hours Status
    const { timeOfDay, isOfficeHours } = calculateUserTimeAndStatus(userTimezone);

    // 3. Referrer Analysis
    const referrer = request.headers.get('referer');
    const referrerSource = analyzeReferrer(referrer);

    // 4. Travel Time Calculation (Async operation with Timeout)
    let travelTime = '';
    // Optimization: Only calculate travel time on the homepage where it is displayed
    if (request.nextUrl.pathname === '/') {
        if (geo?.latitude && geo?.longitude && GOOGLE_MAPS_API_KEY) {
            const originCoords = `${geo.latitude},${geo.longitude}`;
            travelTime = await getTravelTime(originCoords, PRACTICE_COORDS, GOOGLE_MAPS_API_KEY);
        }
    }

    // 5. Inject Data into Headers
    response.headers.set('x-peartree-city', userCity);
    response.headers.set('x-peartree-time-of-day', timeOfDay);
    response.headers.set('x-peartree-office-hours', isOfficeHours.toString());
    response.headers.set('x-peartree-referrer', referrerSource);
    response.headers.set('x-peartree-travel-time', travelTime);

  } catch (error) {
    console.error('Personalization Middleware error:', error);
    // Graceful degradation: set defaults if personalization fails
    response.headers.set('x-peartree-city', 'your area');
    response.headers.set('x-peartree-time-of-day', 'day');
  }
}

// --- Helper Functions ---

// A. Time and Status Calculation (Robust Edge calculation using Intl)
function calculateUserTimeAndStatus(timezone: string) {
  try {
    const now = new Date();
    
    // Get the day name in the user's timezone
    const dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: timezone }).format(now);

    // Get the hour and minute in the user's timezone
    const timeFormatter = new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: timezone,
    });
    
    const timeString = timeFormatter.format(now);
    // Handle potential '24:xx' format by normalizing to '00:xx'
    const normalizedTimeString = timeString.replace(/^24:/, '00:');
    const [hourString, minuteString] = normalizedTimeString.split(':');
    
    const hour = parseInt(hourString, 10);
    const minute = parseInt(minuteString, 10);
    const currentTimeInMinutes = hour * 60 + minute;

    // Determine Time of Day
    let timeOfDay = 'morning';
    if (hour >= 12 && hour < 17) {
      timeOfDay = 'afternoon';
    } else if (hour >= 17 || hour < 5) { // Handle late night/early morning
      timeOfDay = 'evening';
    }

    // Determine Office Hours Status using the defined schedule
    const schedule = OPENING_HOURS[dayName as keyof typeof OPENING_HOURS];
    let isOfficeHours = false;

    if (schedule && schedule.open && schedule.close) {
        const [openHour, openMinute] = schedule.open.split(':').map(Number);
        const [closeHour, closeMinute] = schedule.close.split(':').map(Number);
        const openTimeInMinutes = openHour * 60 + openMinute;
        const closeTimeInMinutes = closeHour * 60 + closeMinute;

        if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
            isOfficeHours = true;
        }
    }

    return { timeOfDay, isOfficeHours };

  } catch (error) {
    console.error("Time calculation failed:", error);
    // Fallback
    return { timeOfDay: 'day', isOfficeHours: true };
  }
}

// B. Referrer Analysis
function analyzeReferrer(referrer: string | null): string {
  if (!referrer) return 'Direct';
  try {
    const hostname = new URL(referrer).hostname;
    if (hostname.includes('google.')) return 'Google';
    if (hostname.includes('facebook.com') || hostname.includes('instagram.com')) return 'Social Media';
    return 'Referral';
  } catch (e) {
    return 'Unknown';
  }
}

// C. Google Maps Distance Matrix API (with Timeout)
async function getTravelTime(origin: string, destination: string, apiKey: string): Promise<string> {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}&mode=driving&units=imperial`;
  
  try {
    const res = await fetch(url, {
        // Crucial: Set a timeout as Edge Functions must execute rapidly (e.g., Netlify)
        signal: AbortSignal.timeout(1500) // 1.5 second timeout
    });

    if (!res.ok) {
        console.error(`Google Maps API error: Status ${res.status}`);
        return '';
    }

    const data = await res.json();

    if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
        return data.rows[0].elements[0].duration.text;
    }
    return '';
  } catch (error) {
    if (error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError')) {
        console.error('Google Maps API request timed out.');
    } else {
        console.error('Error fetching travel time:', error);
    }
    return '';
  }
}

// Configuration: Matcher remains the same as provided
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
}