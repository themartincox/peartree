// src/middleware.ts
import { type NextRequest, NextResponse, userAgent } from 'next/server'
import { lookupGeoFromIp } from '@/lib/cohort-engine/geo'
import { logRedirect } from '@/lib/cohort-engine/telemetry'
import { estimateTravelTime } from '@/lib/cohort-engine/travel-time'

// Bot detection regex
const BOT_UA_REGEX = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex/i

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

  // Only apply geo lookup and travel time estimation for non-bot requests
  if (!isBot) {
    try {
      // Get client IP
      const ip =
        request.ip ||
        request.headers.get('x-forwarded-for')?.split(',')[0] ||
        '127.0.0.1'

      // Get geo data from IP
      const geoData = await lookupGeoFromIp(ip)

      // Add geo data to headers
      if (geoData.city) {
        requestHeaders.set('x-peartree-city', geoData.city)
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

      // Add coordinates for travel time estimation
      if (geoData.latitude && geoData.longitude) {
        requestHeaders.set(
          'x-peartree-coords',
          `${geoData.latitude},${geoData.longitude}`
        )

        // Get practice location from URL if available
        let practiceLocation: string | undefined
        const blogMatch = /\/blog\/[^\/]+\/([^\/]+)/.exec(url.pathname)
        if (blogMatch) {
          practiceLocation = blogMatch[1]
        }

        // Estimate travel time if we have coordinates
        const travelEstimate = await estimateTravelTime(
          { latitude: geoData.latitude, longitude: geoData.longitude },
          practiceLocation as any
        )

        if (travelEstimate) {
          requestHeaders.set('x-peartree-travel-time', travelEstimate.time)
          requestHeaders.set('x-peartree-travel-distance', travelEstimate.distance)
          requestHeaders.set('x-peartree-travel-mode', travelEstimate.mode)
        }
      }
    } catch (error) {
      console.error('Error getting geo data:', error)
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|api).*)'],
  runtime: 'nodejs'
}
