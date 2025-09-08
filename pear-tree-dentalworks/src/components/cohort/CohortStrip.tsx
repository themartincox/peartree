// src/components/CohortStrip.tsx
import { headers } from 'next/headers'
import Link from 'next/link'
import { getCohort, chooseCtas, getContextualMessage, type CtaType } from '@/lib/cohort-engine/cohort'
import CallbackCard from './CallbackCard'

export default async function CohortStrip({
  serviceSlug,
  suburbSlug,
  emergency = false,
}: { serviceSlug: string; suburbSlug: string; emergency?: boolean }) {
  const h = headers()
  const cohort = await getCohort()
  const travelTime = cohort.travelTime
  const travelDistance = cohort.travelDistance
  const city = cohort.city

  // Get message based on cohort context
  const message = getContextualMessage(cohort) || (city ? `Hello ${city}!` : 'Welcome')

  // Get CTAs in the right order for this cohort
  const [primary, secondary, tertiary] = chooseCtas({ cohort, serviceSlug, emergency })

  const hrefs = {
    call: 'tel:+441159694141',
    book: `/book?service=${encodeURIComponent(serviceSlug)}&area=${encodeURIComponent(suburbSlug)}`,
    contact: `/contact?topic=${encodeURIComponent(serviceSlug)}`,
    membership: `/membership?from=${encodeURIComponent(serviceSlug)}`,
    chat: `/chat?service=${encodeURIComponent(serviceSlug)}`,
    appointment: `/book?service=${encodeURIComponent(serviceSlug)}&area=${encodeURIComponent(suburbSlug)}&type=consultation`,
  }

  const buttonClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg px-3 py-1.5 border',
    secondary: 'bg-white hover:bg-gray-50 rounded-lg px-3 py-1.5 border',
    tertiary: 'text-blue-600 hover:underline rounded-lg px-3 py-1.5',
  }

  const buttonLabel = (kind: CtaType): string => {
    switch (kind) {
      case 'call':
        return cohort.officeOpen ? 'Call now' : 'Request a call'
      case 'book':
        if (cohort.timeOfDay === 'evening' || cohort.timeOfDay === 'night') {
          return 'Book tomorrow'
        }
        return cohort.visitorStatus === 'frequent' ? 'Quick booking' : 'Book online'
      case 'membership':
        return cohort.visitorStatus === 'frequent' ? 'Upgrade membership' : 'Join membership'
      case 'chat':
        return 'Chat with us'
      case 'contact':
        return 'Contact us'
      case 'appointment':
        return 'Free consultation'
      default:
        return 'Learn more'
    }
  }

  // Hide if no signal at all (bots)
  if (!city && !travelTime) return null

  // Determine if we should show the callback card
  // Only show for non-office hours AND for certain priorities
  const showCallbackCard = !cohort.officeOpen && (
    emergency || // Always for emergencies
    cohort.timeOfDay === 'evening' || // Evening hours
    cohort.timeOfDay === 'night' || // Night hours
    ['call', 'contact'].includes(primary) // Or when call/contact is prioritized
  )

  return (
    <>
      <div className="mt-2 mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-medium">
            {message}
          </span>

          {/* Travel time & distance information */}
          {travelTime && travelDistance && (
            <span className="flex items-center text-gray-600">
              <TravelIcon mode={cohort.travelMode || 'driving'} className="mr-1.5 h-4 w-4" />
              <span>
                {travelDistance} ({travelTime})
              </span>
            </span>
          )}

          <div className="ml-auto flex gap-2">
            <Link
              href={hrefs[primary]}
              className={buttonClasses.primary}
              data-pt-event={`cta_${primary}_click`}
            >
              {buttonLabel(primary)}
            </Link>
            <Link
              href={hrefs[secondary]}
              className={buttonClasses.secondary}
              data-pt-event={`cta_${secondary}_click`}
            >
              {buttonLabel(secondary)}
            </Link>
            <Link
              href={hrefs[tertiary]}
              className={buttonClasses.tertiary}
              data-pt-event={`cta_${tertiary}_click`}
            >
              {buttonLabel(tertiary)}
            </Link>
          </div>
        </div>

        {/* Show emergency notice if applicable */}
        {emergency && (
          <div className="mt-2 text-red-600 font-medium">
            {cohort.officeOpen
              ? 'For dental emergencies, please call us immediately for same-day treatment.'
              : 'For dental emergencies outside office hours, call us and follow the prompts for our emergency service.'}
          </div>
        )}

        {/* Show personalized timing information if available */}
        {cohort.officeOpen && (
          <div className="mt-1 text-sm text-gray-600">
            {cohort.timeOfDay === 'morning'
              ? 'We\'re open today until 5pm.'
              : 'We\'re open today until 5pm. Same-day appointments may be available.'}
          </div>
        )}
      </div>

      {/* Show callback card for out-of-hours if relevant */}
      {showCallbackCard && (
        <CallbackCard
          serviceSlug={serviceSlug}
          suburbSlug={suburbSlug}
          emergency={emergency}
        />
      )}
    </>
  )
}

// Travel mode icons
function TravelIcon({ mode, className = '' }: { mode: string; className?: string }) {
  switch (mode) {
    case 'walking':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 4v16"></path>
          <path d="M17 4v16"></path>
          <path d="M21 4v16"></path>
          <path d="M9 4v16"></path>
          <path d="M5 4v16"></path>
        </svg>
      )
    case 'transit':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M7 10h10"></path>
          <path d="M7 14h10"></path>
          <path d="M10 7v10"></path>
          <path d="M14 7v10"></path>
        </svg>
      )
    default: // driving
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"></path>
          <circle cx="6.5" cy="16.5" r="2.5"></circle>
          <circle cx="16.5" cy="16.5" r="2.5"></circle>
        </svg>
      )
  }
}
