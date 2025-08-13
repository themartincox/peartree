'use client';
import Script from 'next/script';

export default function OrganisationSchema() {
  const ORG_ID = 'https://peartree.dental/#org';

  const places: Array<{ name: string }> = [
    { name: 'Burton Joyce' },
    { name: 'Nottingham' },
    { name: 'West Bridgford' },
    { name: 'Bingham' },
    { name: 'East Bridgford' },
    { name: 'Arnold' },
    { name: 'Colwick' },
    { name: 'Gedling' },
    { name: 'Mapperley' }, // fixed spelling
    { name: 'Lowdham' }
  ];

  const postcodes = ['NG14', 'NG4', 'NG13', 'NG2', 'NG1'];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': ORG_ID,
    name: 'Pear Tree Dental Centre',
    url: 'https://peartree.dental',
    telephone: '+44 115 931 2935',
    email: 'hello@peartree.dental',
    logo: { '@type': 'ImageObject', url: 'https://peartree.dental/logo.png' },
    image: [{ '@type': 'ImageObject', url: 'https://peartree.dental/images/practice-exterior.jpg' }],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '22 Nottingham Road',
      addressLocality: 'Burton Joyce',
      addressRegion: 'Nottinghamshire',
      postalCode: 'NG14 5AE',
      addressCountry: 'GB'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 52.967, longitude: -1.061 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '08:45', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '15:30' }
    ],
    // Fold in your fuller service coverage from ServiceAreaSchema (with valid types)
    areaServed: [
      ...places.map(p => ({ '@type': 'Place', name: p.name })),
      ...postcodes.map(pc => ({ '@type': 'DefinedRegion', postalCode: pc }))
    ],
    sameAs: [
      'https://www.facebook.com/peartreeDental',
      'https://www.instagram.com/peartree_dental/',
      // Add your exact Google Place URL if you have it:
      // 'https://g.page/r/<google-place-id>'
    ],
    // Keep this consistent with your live count
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '400' }
  };

  return (
    <Script
      id="org-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}