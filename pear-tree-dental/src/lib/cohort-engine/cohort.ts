// src/lib/cohort-engine/cohort.ts
import { headers, cookies } from 'next/headers'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'
export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night'
export type ReferrerType = 'Direct' | 'Search' | 'Paid' | 'Social' | 'Email' | 'Other'
export type UserIntent = 'emergency' | 'research' | 'booking' | 'price-shopping' | 'unknown'
export type CtaType = 'call' | 'book' | 'membership' | 'chat' | 'contact' | 'appointment'
// export type VisitorStatus = 'new' | 'returning' | 'frequent' // Removed

export interface Cohort {
  // Location data
  city?: string | null
  region?: string | null
  country?: string | null
  postcode?: string | null

  // Device & time context
  device: DeviceType
  timeOfDay: TimeOfDay
  officeOpen: boolean
  weekday: boolean

  // Traffic source & behavior
  referrer: ReferrerType
  // visitorStatus: VisitorStatus // Removed
  intentSignals: UserIntent
  // pageDepth: number // Removed

  // Time and distance estimates
  travelTime?: string | null
  travelDistance?: string | null
  travelMode?: 'driving' | 'transit' | 'walking' | null

  // Specific page context
  currentService?: string
  currentLocation?: string
  emergency: boolean
}

// Removed getPageDepth and getVisitorStatus functions

// Infer user intent from behavior signals
function inferUserIntent(params: {
  path: string,
  referrer: ReferrerType,
  searchParams: URLSearchParams,
  // visitorStatus: VisitorStatus // Removed
}): UserIntent {
  const { path, referrer, searchParams } = params // Removed visitorStatus

  // Emergency indicators
  if (
    path.includes('emergency') ||
    path.includes('urgent') ||
    searchParams.get('urgent') === 'true'
  ) {
    return 'emergency'
  }

  // Booking intent
  if (
    path.includes('book') ||
    path.includes('appointment') ||
    searchParams.get('book') === 'true'
    // || visitorStatus === 'frequent' // Removed
  ) {
    return 'booking'
  }

  // Price shopping
  if (
    path.includes('price') ||
    path.includes('cost') ||
    path.includes('fee') ||
    searchParams.get('prices') === 'true' ||
    referrer === 'Paid'
  ) {
    return 'price-shopping'
  }

  // Research
  if (
    referrer === 'Search' ||
    referrer === 'Social'
    // || visitorStatus === 'new' // Removed
  ) {
    return 'research'
  }

  return 'unknown'
}

export async function getCohort(): Promise<Cohort> {
  const h = headers()
  const c = cookies() // Still need cookies for now, but will remove usage
  const ref = (h.get('x-peartree-referrer') || 'Direct').toLowerCase()
  const url = new URL(h.get('x-url') || 'https://peartree.dental')
  const path = url.pathname.toLowerCase()
  const searchParams = url.searchParams

  // Determine referrer type
  const referrer: ReferrerType =
    /utm_source=|gclid=|fbclid=/.test(ref) ? 'Paid'
    : /google|bing|duckduckgo|search/.test(ref) ? 'Search'
    : /facebook|instagram|t\.co|x\.com|linkedin|twitter/.test(ref) ? 'Social'
    : /mail|outlook|gmail|newsletter/.test(ref) ? 'Email'
    : ref === 'direct' ? 'Direct'
    : 'Other'

  // Removed visitorStatus and pageDepth logic

  // Determine weekday
  const now = new Date()
  const day = now.getDay()
  const weekday = day >= 1 && day <= 5

  // Determine current service & location from path
  let currentService: string | undefined
  let currentLocation: string | undefined
  const blogMatch = /\/blog\/([^\/]+)\/([^\/]+)/.exec(path)
  if (blogMatch) {
    currentService = blogMatch[1]
    currentLocation = blogMatch[2]
  } else if (path.startsWith('/near-me/')) {
    currentService = path.split('/')[2]
  }

  // Determine if this is an emergency context
  const emergency =
    currentService?.includes('emergency') ||
    path.includes('emergency') ||
    searchParams.get('emergency') === 'true'

  // Infer user intent
  const intentSignals = inferUserIntent({
    path,
    referrer,
    searchParams,
    // visitorStatus // Removed
  })

  // Build the cohort
  return {
    // Location data
    city: h.get('x-peartree-city'),
    region: h.get('x-peartree-region'),
    country: h.get('x-peartree-country'),
    postcode: h.get('x-peartree-postcode'),

    // Device & time context
    device: (h.get('x-peartree-device') as DeviceType) || 'desktop',
    timeOfDay: (h.get('x-peartree-time-of-day') as TimeOfDay) || 'afternoon',
    officeOpen: h.get('x-peartree-office-hours') === 'true',
    weekday,

    // Traffic source & behavior
    referrer,
    // visitorStatus, // Removed
    intentSignals,
    // pageDepth, // Removed

    // Time and distance estimates
    travelTime: h.get('x-peartree-travel-time'),
    travelDistance: h.get('x-peartree-travel-distance'),
    travelMode: (h.get('x-peartree-travel-mode') as Cohort['travelMode']) || null,

    // Specific page context
    currentService,
    currentLocation,
    emergency
  }
}

// Advanced CTA selection based on cohort data
export function chooseCtas(opts: {
  cohort: Cohort,
  serviceSlug?: string,
  emergency?: boolean
}): [CtaType, CtaType, CtaType] {
  const { cohort } = opts
  const emergency = opts.emergency || cohort.emergency

  // Emergency always shows call first
  if (emergency) {
    return ['call', 'book', 'contact']
  }

  // Different CTA patterns based on intent
  switch (cohort.intentSignals) {
    case 'booking':
      return ['book', 'call', 'membership']

    case 'price-shopping':
      return ['membership', 'book', 'call']

    case 'research':
      // New/research users on mobile during off-hours get call first
      if (cohort.device === 'mobile' && !cohort.officeOpen) {
        return ['call', 'contact', 'book']
      }
      // Otherwise standard research pattern
      return ['contact', 'book', 'call']

    default:
      // Evening leads to book first but shows "book tomorrow"
      if (cohort.timeOfDay === 'evening' || cohort.timeOfDay === 'night') {
        return ['book', 'call', 'contact']
      }

      // Removed visitorStatus logic
      // if (cohort.visitorStatus === 'frequent') {
      //   return ['book', 'membership', 'call']
      // }

      // Mobile outside office hours prioritizes call
      if (cohort.device === 'mobile' && !cohort.officeOpen) {
        return ['call', 'book', 'contact']
      }

      // Standard pattern
      return ['book', 'call', 'membership']
  }
}

// Get contextual messages based on cohort
export function getContextualMessage(cohort: Cohort): string | null {
  if (!cohort.city) return null

  if (cohort.emergency) {
    return cohort.officeOpen
      ? `Need emergency dental care in ${cohort.city}? Call us now.`
      : `Dental emergency? Our on-call dentist will call you back ASAP.`
  }

  if (cohort.travelTime) {
    return `${cohort.city} is approximately ${cohort.travelTime} away from our practice.`
  }

  if (cohort.timeOfDay === 'morning' && cohort.officeOpen) {
    return `Good morning ${cohort.city}! We're open today until 5pm.`
  }

  if (cohort.timeOfDay === 'evening' || !cohort.officeOpen) {
    return `We're currently closed, but you can book online for tomorrow.`
  }

  // Removed visitorStatus logic
  // if (cohort.visitorStatus === 'returning') {
  //   return `Welcome back! How can we help you today?`
  // }

  return `Hello ${cohort.city}! How can we help you today?`
}