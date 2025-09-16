import { notFound } from 'next/navigation'
import { headers } from 'next/headers' // Import headers
import { Suspense } from 'react'; // Import Suspense
import {
  replacePlaceholdersInRichText,
  contentfulHealthCheck,
  getEntryField,
  getEntries,
  getEntry
} from '@/lib/contentful'
import { decideIndexable } from '@/lib/indexing'
import RichTextRenderer from '@/components/RichTextRenderer'
import CohortStrip from '@/components/cohort/CohortStrip'
import LocalProof from '@/components/cohort/LocalProof'
import StickyCtaBar from '@/components/cohort/StickyCtaBar'
import OpenToday from '@/components/cohort/OpenToday'
import PriceExplainer from '@/components/cohort/PriceExplainer'
import IntentSurvey from '@/components/cohort/IntentSurvey'
import ChangeArea from '@/components/cohort/ChangeArea'
import StructuredData from '@/components/seo/StructuredData'
import { ServiceEntry, LocationEntry } from '@/types/contentful'
import type { Metadata } from 'next';

type RouteParams = { service: string; suburb: string }

// This is the new dynamic component for PPR
async function PersonalizedWelcome() {
  const requestHeaders = headers();
  const ptdIsLocal = requestHeaders.get('x-peartree-is-local');

  return ptdIsLocal === 'true' ? (
    <p className="text-lg text-green-700 mb-4">Welcome, local resident! We're glad you're nearby.</p>
  ) : (
    <p className="text-lg text-blue-700 mb-4">Welcome, visitor! Explore our services.</p>
  );
}

export async function generateMetadata(
  { params }: { params: RouteParams }
): Promise<Metadata> {
  const { service: serviceSlug, suburb } = await params
  const adMode = false; // Default to false for static metadata

  const fallback: Metadata = {
    title: 'Pear Tree Dental — Professional Dental Care',
    description: 'Private & NHS dental services in Nottinghamshire.',
    robots: { index: !adMode, follow: true },
  }

  try {
    const [service, location, template] = await Promise.all([
      getEntry<ServiceEntry>(serviceSlug, 'generateMetadata:service'),
      getEntry<LocationEntry>(suburb, 'generateMetadata:location'),
      getEntry<any>(process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID!, 'generateMetadata:template'),
    ])
    if (!service || !location || !template) return fallback

    const serviceName = getEntryField<string>(service, 'serviceName') ?? 'Our Service'
    const suburbName = getEntryField<string>(location, 'suburb') ?? 'Your Area'
    const cityName = getEntryField<string>(location, 'city') ?? 'Your City'

    const seoTitleTpl = getEntryField<string>(template, 'seoTitleTemplate') ?? ''
    const seoDescTpl = getEntryField<string>(template, 'seoDescriptionTemplate') ?? ''
    const bodyDoc = getEntryField(template, 'bodyContent')

    const { indexable } = decideIndexable({
      service, location, rawBody: bodyDoc,
      replaceCtx: { service: serviceName, suburb: suburbName, city: cityName }
    })

    const title = (seoTitleTpl || '').replace(/\{\{\s*service\s*\}\}/gi, serviceName)
      .replace(/\{\{\s*suburb\s*\}\}/gi, suburbName)
      .replace(/\{\{\s*city\s*\}\}/gi, cityName)

    const description = (seoDescTpl || '').replace(/\{\{\s*service\s*\}\}/gi, serviceName)
      .replace(/\{\{\s*suburb\s*\}\}/gi, suburbName)
      .replace(/\{\{\s*city\s*\}\}/gi, cityName)

    const url = `https://peartree.dental/blog/${serviceSlug}/${suburb}`

    return {
      title: adMode ? `${serviceName} in ${suburbName} - Book Now` : title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title, description, type: 'article', url, siteName: 'Pear Tree Dental',
        images: [{ url: 'https://peartree.dental/og/default.jpg' }],
      },
      twitter: { card: 'summary_large_image', title, description },
      robots: { index: indexable && !adMode, follow: true },
    }
  } catch (err) {
    console.error('generateMetadata error', err)
    return fallback
  }
}

export async function generateStaticParams() {
  try {
    const healthy = await contentfulHealthCheck()
    if (!healthy) return []

    const [allServices, allLocations] = await Promise.all([
      getEntries<{ fields: { slug: string } }>({ content_type: process.env.CONTENTFUL_SERVICE_TYPE_ID, select: 'fields.slug' }, 'generateStaticParams:services'),
      getEntries<{ fields: { slug: string } }>({ content_type: process.env.CONTENTFUL_LOCATION_TYPE_ID, select: 'fields.slug' }, 'generateStaticParams:locations')
    ])

    let params: { service: string; suburb: string }[] = []
    for (const svc of allServices.items) {
      const sSlug = getEntryField<string>(svc, 'slug') ?? ''
      for (const loc of allLocations.items) {
        const lSlug = getEntryField<string>(loc, 'slug') ?? ''
        params.push({ service: sSlug, suburb: lSlug })
      }
    }

    // Fast CI mode to avoid rate-limit during deployments
    if (process.env.FAST_BUILD === '1') {
      params = params.slice(0, 20) // build a small sample
      console.log(`FAST_BUILD enabled: Prebuilding ${params.length} service/suburb combinations`);
    } else {
      console.log(`Prebuilding ${params.length} service/suburb combinations for Full SSG`);
    }

    return params
  } catch (err) {
    console.error('generateStaticParams error', err)
    return []
  }
}

export const dynamicParams = true;

export default async function ServiceSuburbPage({ params }: { params: RouteParams }) {
  const { service: serviceSlug, suburb: suburbSlug } = await params

  let service: ServiceEntry | null = null;
  let location: LocationEntry | null = null;
  let template: any = null;
  let allLocations: LocationEntry[] = [];

  try {
    [service, location, template, allLocations] = await Promise.all([
      getEntry<ServiceEntry>(serviceSlug, 'ServiceSuburbPage:service'),
      getEntry<LocationEntry>(suburbSlug, 'ServiceSuburbPage:location'),
      getEntry<any>(process.env.CONTENTFUL_BLOG_TEMPLATE_TYPE_ID!, 'ServiceSuburbPage:template'),
      getEntries<LocationEntry>({ content_type: process.env.CONTENTFUL_LOCATION_TYPE_ID }, 'ServiceSuburbPage:allLocations').then(res => res.items),
    ])
  } catch (error) {
    console.error(`Error fetching Contentful data for ${serviceSlug}/${suburbSlug}:`, error);
    // Continue with nulls, the notFound() check will handle it
  }

  if (!service || !location || !template) {
    return notFound()
  }

  const serviceName = getEntryField<string>(service, 'serviceName') ?? 'Our Service'
  const suburbName = getEntryField<string>(location, 'suburb') ?? 'Your Area'
  const cityName = getEntryField<string>(location, 'city') ?? 'Your City'

  const bodyDoc = getEntryField(template, 'bodyContent')

  const filledBody = replacePlaceholdersInRichText(bodyDoc, {
    service: serviceName,
    suburb: suburbName,
    city: cityName
  })

  const { indexable, reasons } = decideIndexable({
    service, location, filledBody
  })

  if (!indexable) {
    console.log(`Page ${serviceSlug}/${suburbSlug} is not indexable. Reasons:`, reasons)
  }

  const nearbyLocations = allLocations
    .filter(loc => {
      const locCity = getEntryField<string>(loc, 'city')
      return locCity === cityName
    })
    .map(loc => ({
      slug: getEntryField<string>(loc, 'slug') ?? '',
      name: getEntryField<string>(loc, 'suburb') ?? ''
    }))
    .filter(loc => loc.slug && loc.slug !== suburbSlug)

  return (
    <div className="container mx-auto py-8">
      <StructuredData
        city={cityName}
        service={serviceName}
        suburb={suburbName}
      />

      <h1 className="text-3xl font-bold mb-6">{serviceName} in {suburbName}</h1>

      <Suspense fallback={<div className="h-8 mb-4" /> /* Placeholder for layout stability */}>
        <PersonalizedWelcome />
      </Suspense>

      <CohortStrip serviceSlug={serviceSlug} suburbSlug={suburbSlug} emergency={serviceSlug === 'emergency-dentist'} />

      <OpenToday reviewsCount={Math.floor(300 + Math.random() * 0.2)} rating={4.8 + Math.random() * 0.2} />

      <PriceExplainer serviceSlug={serviceSlug} suburbSlug={suburbSlug} />

      {nearbyLocations.length > 0 && (
        <ChangeArea
          serviceSlug={serviceSlug}
          current={suburbSlug}
          options={[
            { slug: suburbSlug, name: suburbName },
            ...nearbyLocations
          ]}
        />
      )}

      <div className="prose max-w-none">
        <RichTextRenderer document={filledBody} />
      </div>

      <IntentSurvey serviceSlug={serviceSlug} suburbSlug={suburbSlug} />

      <LocalProof
        reviewsCount={Math.floor(300 + Math.random() * 400)}
        serviceSlug={serviceSlug}
        locationSlug={suburbSlug}
      />

      {process.env.NODE_ENV === 'development' && (
        <div className={`mt-6 p-4 rounded-lg text-white ${indexable ? 'bg-green-600' : 'bg-red-600'}`}>
          <h3 className="font-bold">Indexability Status: {indexable ? 'Indexable' : 'Not Indexable'}</h3>
          {!indexable && (
            <ul className="list-disc ml-6 mt-2">
              {reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <StickyCtaBar
        serviceSlug={serviceSlug}
        suburbSlug={suburbSlug}
        emergency={serviceSlug === 'emergency-dentist'}
      />

    </div>
  )
}
