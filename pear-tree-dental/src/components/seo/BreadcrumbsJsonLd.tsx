// src/components/seo/BreadcrumbsJsonLd.tsx
import React from 'react'

type Crumb = { name: string; item: string }

export default function BreadcrumbsJsonLd({ items }: { items: Crumb[] }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
}
