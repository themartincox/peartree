import { getCohort } from '@/lib/cohort'
import Link from 'next/link'

type Props = { serviceSlug: string; suburbSlug: string }

const PRICE_MAP: Record<string, { headline: string; range: string; notes?: string[] }> = {
  'cosmetic-teeth-whitening-enlighten': {
    headline: 'Typical whitening costs',
    range: '£450–£650',
    notes: ['Includes custom trays and gel', 'Sensitivity management included'],
  },
  'orthodontics-invisalign': {
    headline: 'Invisalign treatment range',
    range: '£2,500–£4,200',
    notes: ['Includes digital 3D scan', 'Treatment time varies by case'],
  },
  'orthodontics-clearcorrect': {
    headline: 'ClearCorrect treatment range',
    range: '£1,900–£3,600',
    notes: ['Removable, discreet aligners', 'Review every 6–8 weeks'],
  },
  'implants-single-implant': {
    headline: 'Single implant from',
    range: '£2,000–£2,800',
    notes: ['Includes implant & crown', '3D planning for precise placement'],
  },
  'implants-all-on-4': {
    headline: 'All-on-4 full-arch (guide)',
    range: '£12,000–£16,000',
    notes: ['Fixed teeth, fewer visits', 'Exact plan after consultation'],
  },
}

export default async function PriceExplainer({ serviceSlug, suburbSlug }: Props) {
  const data = PRICE_MAP[serviceSlug]
  if (!data) return null

  const cohort = await getCohort()
  const bookHref = `/book?service=${encodeURIComponent(serviceSlug)}&area=${encodeURIComponent(suburbSlug)}`
  const contactHref = `/contact?topic=${encodeURIComponent(serviceSlug)}`

  return (
    <aside className="mt-10 rounded-xl border p-6 bg-white">
      <h2 className="text-xl font-semibold">{data.headline}</h2>
      <p className="mt-2 text-2xl font-bold">{data.range}</p>

      {data.notes?.length ? (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {data.notes.map(n => <li key={n}>{n}</li>)}
        </ul>
      ) : null}

      <div className="mt-4 flex gap-2">
        <Link href={bookHref} className="rounded-lg px-3 py-2 bg-emerald-600 text-white hover:bg-emerald-700">
          {cohort.officeOpen ? 'Book consultation' : 'Book for tomorrow'}
        </Link>
        <Link href={contactHref} className="rounded-lg px-3 py-2 border">
          Ask a question
        </Link>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Final fees confirmed after clinical assessment.
      </p>
    </aside>
  )
}
