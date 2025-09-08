// src/components/OpenToday.tsx
import { headers } from 'next/headers'

interface OpenTodayProps {
  reviewsCount?: number
  rating?: number
}

export default async function OpenToday({ reviewsCount = 500, rating = 4.9 }: OpenTodayProps) {
  const h = headers()
  const city = h.get('x-peartree-city') || 'your area'

  // Determine if we're open now
  const now = new Date()
  const hour = now.getHours()
  const day = now.getDay() // 0 = Sunday, 6 = Saturday
  const isOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 17

  // Determine next opening time
  let nextOpenText = 'Reopens at 9am tomorrow'

  if (day === 0) {
    nextOpenText = 'Reopens at 9am Monday'
  } else if (day === 6) {
    nextOpenText = 'Reopens at 9am Monday'
  } else if (hour < 9) {
    nextOpenText = 'Opens at 9am today'
  } else if (hour >= 17) {
    nextOpenText = day === 5 ? 'Reopens at 9am Monday' : 'Reopens at 9am tomorrow'
  }

  return (
    <div className="flex items-center justify-between flex-wrap text-sm text-slate-600 mt-4 gap-2">
      <div className="flex items-center">
        <span className="mr-1">⭐</span>
        <span>
          <strong>{rating}/5</strong> ({reviewsCount}+ reviews in {city})
        </span>
      </div>
      <div className="flex items-center">
        <span className={`mr-1 w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
        <span>{isOpen ? 'Open now until 5pm' : nextOpenText}</span>
      </div>
    </div>
  )
}
