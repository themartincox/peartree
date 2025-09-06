'use client';

import Script from 'next/script';

interface Review {
  author: string;
  reviewBody: string;
  rating?: number;
}

interface StructuredDataProps {
  service: string;
  suburb: string;
  city: string;
  reviews?: Review[];
}

export default function StructuredData({ service, suburb, city, reviews = [] }: StructuredDataProps) {
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + (review.rating || 5), 0) / reviews.length
    : 4.8; // Default rating if no reviews

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DentalService',
    name: `${service} in ${suburb}`,
    provider: {
      '@type': 'Dentist',
      name: 'Pear Tree Dental',
      image: 'https://peartree.dental/images/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '22 Nottingham Road',
        addressLocality: 'Burton Joyce',
        postalCode: 'NG14 5AE',
        addressRegion: 'Nottinghamshire',
        addressCountry: 'UK'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.9799,
        longitude: -1.0367
      },
      telephone: '0115 931 2935',
      priceRange: '££',
      url: 'https://peartree.dental'
    },
    areaServed: {
      '@type': 'City',
      name: city
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 52.9799,
        longitude: -1.0367
      },
      geoRadius: '15000'
    },
    serviceType: service,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://peartree.dental/book',
      servicePhone: '0115 931 2935'
    }
  };

  // Add reviews if available
  if (reviews.length > 0) {
    Object.assign(schema, {
      review: reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewBody: review.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating || 5,
          bestRating: 5,
          worstRating: 1
        }
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: averageRating.toFixed(1),
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1
      }
    });
  }

  return (
    <Script
      id={`structured-data-${service.replace(/\s+/g, '-').toLowerCase()}-${suburb.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
