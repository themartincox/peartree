// src/middleware.ts
import { type NextRequest, NextResponse, userAgent } from 'next/server'

// Bot detection regex
const BOT_UA_REGEX = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex/i

// Simplified geo lookup for Edge runtime that doesn't rely on Contentful
function simpleGeoLookup(ip: string) {
  // Check if this looks like a local/private IP
  if (ip === '127.0.0.1' || ip.startsWith('10.') || ip.startsWith('192.168.')) {
    // Return Nottingham as a default for local development
    return {
      city: 'Nottingham',
      postcode: 'NG1',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  }

  // Simple demo logic based on IP's last octet
  const lastOctet = Number.parseInt(ip.split('.').pop() || '0');

  // Different locations based on IP's last octet
  if (lastOctet % 5 === 0) {
    return {
      city: 'Nottingham',
      postcode: 'NG1',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  } else if (lastOctet % 5 === 1) {
    return {
      city: 'West Bridgford',
      postcode: 'NG2',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  } else if (lastOctet % 5 === 2) {
    return {
      city: 'Burton Joyce',
      postcode: 'NG14',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  } else if (lastOctet % 5 === 3) {
    return {
      city: 'Gedling',
      postcode: 'NG4',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  } else {
    return {
      city: 'Arnold',
      postcode: 'NG5',
      region: 'Nottinghamshire',
      country: 'United Kingdom'
    };
  }
}

// Simplified travel time estimation that doesn't rely on Contentful
function simpleTravelEstimate(city: string) {
  // Map common cities to travel times
  const travelTimes: Record<string, { time: string, distance: string, mode: string }> = {
    'nottingham': { time: '20 mins', distance: '8 miles', mode: 'driving' },
    'west bridgford': { time: '15 mins', distance: '6 miles', mode: 'driving' },
    'burton joyce': { time: '5 mins', distance: '1 mile', mode: 'driving' },
    'gedling': { time: '10 mins', distance: '4 miles', mode: 'driving' },
    'arnold': { time: '15 mins', distance: '7 miles', mode: 'driving' }
  };

  const normalizedCity = city.toLowerCase();
  return travelTimes[normalizedCity] || { time: '20 mins', distance: '10 miles', mode: 'driving' };
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const ua = userAgent(request)
  const isBot = BOT_UA_REGEX.test(request.headers.get('user-agent') || '') || ua.isBot
  const device =
    ua.device.type === 'mobile'
      ? 'mobile'
      : ua.device.type === 'tablet'
      ? 'tablet'
      : 'desktop'

  // Clone the headers to add our custom headers
  const requestHeaders = new Headers(request.headers)

  // Add current URL to headers for context in getCohort
  requestHeaders.set('x-url', request.url)

  // Set bot detection flag
  requestHeaders.set('x-peartree-is-bot', isBot ? 'true' : 'false')
  requestHeaders.set('x-peartree-device', device)
  requestHeaders.set('x-peartree-referrer', request.headers.get('referer') || 'Direct')

  // Time context: office hours, time of day
  const now = new Date()
  const hour = now.getHours()
  const day = now.getDay() // 0 Sun ... 6 Sat
  const officeOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 17 // Mon–Fri 9–17

  // More granular time of day
  let timeOfDay = 'afternoon'
  if (hour < 12) timeOfDay = 'morning'
  else if (hour < 17) timeOfDay = 'afternoon'
  else if (hour < 22) timeOfDay = 'evening'
  else timeOfDay = 'night'

  requestHeaders.set('x-peartree-office-hours', officeOpen ? 'true' : 'false')
  requestHeaders.set('x-peartree-time-of-day', timeOfDay)
  requestHeaders.set('x-peartree-day', day.toString())

  // Only apply geo lookup for non-bot requests
  if (!isBot) {
    try {
      // Get client IP
      const ip =
        request.ip ||
        request.headers.get('x-forwarded-for')?.split(',')[0] ||
        '127.0.0.1'

      // Get geo data from IP using our simplified function
      const geoData = simpleGeoLookup(ip)

      // Add geo data to headers
      if (geoData.city) {
        requestHeaders.set('x-peartree-city', geoData.city)

        // Add simplified travel time
        const travelEstimate = simpleTravelEstimate(geoData.city)
        requestHeaders.set('x-peartree-travel-time', travelEstimate.time)
        requestHeaders.set('x-peartree-travel-distance', travelEstimate.distance)
        requestHeaders.set('x-peartree-travel-mode', travelEstimate.mode)
      }

      if (geoData.postcode) {
        requestHeaders.set('x-peartree-postcode', geoData.postcode)
      }

      if (geoData.region) {
        requestHeaders.set('x-peartree-region', geoData.region)
      }

      if (geoData.country) {
        requestHeaders.set('x-peartree-country', geoData.country)
      }
    } catch (error) {
      console.error('Error in middleware geo processing:', error)
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|api).*)']
  // Using Edge runtime by default
}
