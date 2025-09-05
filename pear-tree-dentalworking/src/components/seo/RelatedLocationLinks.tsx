// src/components/RelatedLocationLinks.tsx
import Link from 'next/link'

type Item = { serviceSlug: string; suburbSlug: string; suburbName: string; city?: string }

export default function RelatedLocationLinks({ items, title }: { items: Item[]; title?: string }) {
  if (!items?.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-3">{title ?? 'Related locations'}</h2>
      <ul className="list-disc ml-6 space-y-2">
        {items.map((i, idx) => (
          <li key={`${i.serviceSlug}-${i.suburbSlug}-${idx}`}>
            <Link className="underline" href={`/articles/${i.serviceSlug}/${i.suburbSlug}`}>
              {i.suburbName}{i.city ? `, ${i.city}` : ''}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
