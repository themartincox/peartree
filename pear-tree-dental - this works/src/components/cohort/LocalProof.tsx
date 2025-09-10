// src/components/LocalProof.tsx
import { getCohort } from '@/lib/cohort-engine/cohort'

interface LocalProofProps {
  reviewsCount?: number
  serviceSlug?: string
  locationSlug?: string
}

export default async function LocalProof({
  reviewsCount = 500,
  serviceSlug,
  locationSlug
}: LocalProofProps) {
  const cohort = await getCohort()
  const city = cohort.city

  if (!city) return null

  // Determine the right message based on user context
  let message = `Trusted in ${city}: over ${reviewsCount}+ 5-star Google reviews from local patients.`
  let icon = '⭐️'

  if (cohort.visitorStatus === 'returning' || cohort.visitorStatus === 'frequent') {
    message = `Welcome back! Over ${reviewsCount}+ patients from ${city} trust us with their dental care.`
    icon = '🦷'
  }

  if (cohort.travelTime && cohort.travelDistance) {
    const isFar = cohort.travelMode === 'driving' ||
                 (cohort.travelDistance.includes('km') && Number.parseFloat(cohort.travelDistance) > 5)

    if (isFar) {
      message = `Many patients travel from ${city} (${cohort.travelDistance} away) for our specialized care.`
      icon = '🚗'
    }
  }

  // Service-specific messaging
  if (serviceSlug) {
    if (serviceSlug.includes('emergency')) {
      message = `We offer emergency dental care for ${city} patients, usually within 24 hours.`
      icon = '🚨'
    } else if (serviceSlug.includes('invisalign') || serviceSlug.includes('orthodontics')) {
      message = `${reviewsCount}+ ${city} patients have transformed their smiles with our orthodontic treatments.`
      icon = '😁'
    } else if (serviceSlug.includes('whitening') || serviceSlug.includes('cosmetic')) {
      message = `${city}'s trusted cosmetic dentistry experts with ${reviewsCount}+ satisfied patients.`
      icon = '✨'
    }
  }

  // Build a class based on time of day
  let bgClass = 'bg-amber-50 border-amber-200'
  if (cohort.timeOfDay === 'evening' || cohort.timeOfDay === 'night') {
    bgClass = 'bg-indigo-50 border-indigo-200'
  } else if (cohort.timeOfDay === 'morning') {
    bgClass = 'bg-sky-50 border-sky-200'
  }

  return (
    <div className={`mt-6 rounded-lg ${bgClass} border p-4 text-sm flex items-center`}>
      <span className="mr-2 text-lg" aria-hidden="true">{icon}</span>
      <strong className="mr-1">{city} patients love us:</strong> {message}
    </div>
  )
}
