// /components/seo/StructuredData.tsx
import React from 'react'
import practiceInfo from '@/data/practiceInfo'

export type ArticleData = {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}

export type FAQItem = { question: string; answer: string }

export type ReviewItem = {
  author: string
  reviewBody: string
  rating?: number // 1..5 (we clamp/round safely)
}

type Props = {
  article: ArticleData
  faqs?: FAQItem[]
  /** Optional contextual fields for richer Dentist schema */
  service?: string
  suburb?: string
  city?: string
  /** Optional reviews to emit Review[] and AggregateRating */
  reviews?: ReviewItem[]
}

/**
 * Helper: clamp & round ratings to 1..5
 */
function normaliseRating(n?: number) {
  if (typeof n !== 'number' || Number.isNaN(n)) return undefined
  return Math.max(1, Math.min(5, Math.round(n)))
}

export default function StructuredData({
  article,
  faqs,
  service,
  suburb,
  city,
  reviews = [],
}: Props) {
  const areaServed = [suburb, city].filter(Boolean) as string[]

  // Build review objects + aggregate rating (if any)
  const validReviews = (reviews || []).filter(r => r.reviewBody && r.reviewBody.trim().length > 10)
  const normalisedRatings = validReviews
    .map(r => normaliseRating(r.rating))
    .filter((n): n is number => typeof n === 'number')

  const aggregateRating =
    normalisedRatings.length > 0
      ? {
          '@type': 'AggregateRating',
          ratingValue: (normalisedRatings.reduce((a, b) => a + b, 0) / normalisedRatings.length).toFixed(1),
          reviewCount: normalisedRatings.length,
          bestRating: 5,
        }
      : undefined

  const reviewLd =
    validReviews.length > 0
      ? validReviews.map(r => {
          const nr = normaliseRating(r.rating)
          return {
            '@type': 'Review',
            author: { '@type': 'Person', name: r.author || 'Anonymous' },
            reviewBody: r.reviewBody,
            ...(typeof nr === 'number' && {
              reviewRating: { '@type': 'Rating', ratingValue: nr, bestRating: 5 },
            }),
          }
        })
      : undefined

  // Dentist (primary entity)
  const dentist: any = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: practiceInfo.name,
    url: article.url,
    telephone: practiceInfo?.contact?.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: practiceInfo?.address?.street,
      addressLocality: practiceInfo?.address?.city,
      addressRegion: practiceInfo?.address?.county,
      postalCode: practiceInfo?.address?.postcode,
      addressCountry: 'GB',
    },
    ...(service && { description: `${practiceInfo.name} — ${service}` }),
    ...(areaServed.length > 0 && { areaServed }),
    priceRange: '££',
    ...(reviewLd && { review: reviewLd }),
    ...(aggregateRating && { aggregateRating }),
  }

  // Article (the actual page content)
  const articleLd: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    url: article.url,
    mainEntityOfPage: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image ? [article.image] : undefined,
    author: {
      '@type': 'Organization',
      name: practiceInfo.name,
    },
    publisher: {
      '@type': 'Organization',
      name: practiceInfo.name,
      ...(practiceInfo?.brand?.logoUrl && {
        logo: { '@type': 'ImageObject', url: practiceInfo.brand.logoUrl },
      }),
    },
  }

  // Optional FAQPage (only if faqs provided)
  const faqLd =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentist) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} /> : null}
    </>
  )
}
