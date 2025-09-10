import practiceInfo from "@/data/practiceInfo";
import LocalBusinessSchema from "./LocalBusinessSchema";

export function DentistSchema({
  name = 'Pear Tree Dental',
  address = {
    streetAddress: practiceInfo.address.street,
    addressLocality: practiceInfo.address.city,
    addressRegion: practiceInfo.address.county,
    postalCode: practiceInfo.address.postcode,
    addressCountry: 'GB'
  },
  telephone = practiceInfo.contact.phoneInternational,
  url = 'https://peartree.dental',
  image = 'https://peartree.dental/og/default.jpg',
  priceRange = '£££',
  geo = {
    latitude: 52.9548,
    longitude: -1.1581
  }
}: {
  name?: string
  address?: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string; };
  telephone?: string
  url?: string
  image?: string
  priceRange?: string
  geo?: { latitude: number; longitude: number }
}) {
  const openingHoursSpecification = [
    { dayOfWeek: 'Monday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Tuesday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Wednesday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Thursday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' }
  ]

  const dentist = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name,
    image,
    '@id': `${url}#dentist`,
    url,
    telephone,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHoursSpecification: openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${spec.dayOfWeek}`,
      opens: spec.opens,
      closes: spec.closes
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentist) }}
    />
  )
}

export function LocalBusinessSchema({
  name = 'Pear Tree Dental',
  type = 'Dentist',
  address = {
    streetAddress: practiceInfo.address.street,
    addressLocality: practiceInfo.address.city,
    addressRegion: practiceInfo.address.county,
    postalCode: practiceInfo.address.postcode,
    addressCountry: 'GB'
  },
  telephone = practiceInfo.contact.phoneInternational,
  url = 'https://peartree.dental',
  image = 'https://peartree.dental/og/default.jpg',
  priceRange = '£££'
}: {
  name?: string
  type?: string
  address?: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string; };
  telephone?: string
  url?: string
  image?: string
  priceRange?: string
}) {
  const openingHoursSpecification = [
    { dayOfWeek: 'Monday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Tuesday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Wednesday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Thursday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '09:00', closes: '17:00' },
    { dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' }
  ]

  const business = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    image,
    '@id': `${url}#organization`,
    url,
    telephone,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    openingHoursSpecification: openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${spec.dayOfWeek}`,
      opens: spec.opens,
      closes: spec.closes
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
    />
  )
}

export default function StructuredData({
  city = 'Nottingham',
  service = 'General Dentistry',
  suburb = 'Nottingham',
  price = '£££'
}: {
  city?: string
  service: string
  suburb?: string
  price?: string
}) {
  return (
    <>
      <LocalBusinessSchema
        pageSpecifics={{
          name: `Pear Tree Dental - ${service} in ${suburb}`,
          description: `Expert ${service} services for residents of ${suburb}, ${city}.`,
          priceRange: price,
          areaServed: {
            "@type": "Place",
            "name": `${suburb}, ${city}`
          }
        }}
      />
    </>
  )
}
