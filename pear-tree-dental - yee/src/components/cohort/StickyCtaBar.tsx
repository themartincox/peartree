'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function StickyCtaBar({
  serviceSlug,
  suburbSlug,
  emergency = false
}: {
  serviceSlug: string;
  suburbSlug: string;
  emergency?: boolean;
}) {
  const [officeOpen, setOfficeOpen] = useState(false)

  useEffect(() => {
    // Check if office is open (Mon-Fri, 9am-5pm)
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay() // 0 Sun ... 6 Sat
    const isOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 17
    setOfficeOpen(isOpen)
  }, [])

  const tel = 'tel:+441159694141'
  const book = `/book?service=${encodeURIComponent(serviceSlug)}&area=${encodeURIComponent(suburbSlug)}`
  const membership = `/membership?from=${encodeURIComponent(serviceSlug)}`

  // For emergency services, always prioritize call during open hours
  const primaryLink = emergency && officeOpen ? tel : officeOpen ? book : tel
  const primaryText = emergency && officeOpen ? 'Call now - urgent' :
                     officeOpen ? 'Book online' : 'Request callback'

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white/95 backdrop-blur border-t flex gap-2 p-3">
      <Link
        href={primaryLink}
        className="flex-1 rounded-lg px-3 py-2 text-center bg-emerald-600 text-white hover:bg-emerald-700"
        data-pt-event={`sticky_${emergency && officeOpen ? 'call' : officeOpen ? 'book' : 'call'}_click`}
      >
        {primaryText}
      </Link>
      <Link
        href={membership}
        className="rounded-lg px-3 py-2 border hover:bg-gray-50"
        data-pt-event="sticky_membership_click"
      >
        Join membership
      </Link>
    </div>
  )
}
