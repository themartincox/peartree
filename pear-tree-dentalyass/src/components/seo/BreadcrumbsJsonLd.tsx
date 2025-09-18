'use client';

import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsJsonLdProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbsJsonLd({ items }: BreadcrumbsJsonLdProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id="breadcrumbs-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
