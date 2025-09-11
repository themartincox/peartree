'use client'

import { useRouter } from 'next/navigation'

export default function ChangeArea({ serviceSlug, options, current }:{
  serviceSlug: string
  options: { slug: string; name: string }[]
  current: string
}) {
  const r = useRouter()
  return (
    <div className="mt-6 text-sm">
      <label className="mr-2">Not your area?</label>
      <select
        defaultValue={current}
        onChange={e => r.push(`/blog/${serviceSlug}/${e.target.value}`)}
        className="rounded-lg border px-2 py-1"
        aria-label="Choose a different area"
      >
        {options.map(o => <option key={o.slug} value={o.slug}>{o.name}</option>)}
      </select>
    </div>
  )
}
