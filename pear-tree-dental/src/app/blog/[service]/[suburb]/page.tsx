import { notFound } from 'next/navigation'
import { headers } from 'next/headers' // Import headers
import {
  fetchServiceBySlug,
  fetchLocationBySlug,
  fetchBlogTemplate,
  replacePlaceholdersInRichText,
  contentfulHealthCheck,
  fetchAllServices,
  fetchAllLocations,
  getEntryField
} from '@/lib/contentful'
import { decideIndexable } from '@/lib/indexing'
import { INDEX_PRIORITY_SERVICES, INDEX_ALLOWLIST_SUBURBS } from '@/config/indexing'
import { isAdMode } from '@/lib/cohort-engine/adMode'
import RichTextRenderer from '@/components/RichTextRenderer'
import CohortStrip from '@/components/cohort/CohortStrip'
import LocalProof from '@/components/cohort/LocalProof'
import StickyCtaBar from '@/components/cohort/StickyCtaBar'
import OpenToday from '@/components/cohort/OpenToday'
import PriceExplainer from '@/components/cohort/PriceExplainer'
import IntentSurvey from '@/components/cohort/IntentSurvey'
import ChangeArea from '@/components/cohort/ChangeArea'
// import ExitIntent from '@/components/cohort/ExitIntent' // Removed import
import StructuredData from '@/components/seo/StructuredData'
import { ServiceEntry, LocationEntry } from '@/types/contentful'

type RouteParams = { service: string; suburb: string }

export async function generateMetadata(
  { params }: { params: RouteParams }
): Promise<Metadata> {
  const { service: serviceSlug, suburb } = await params
  // adMode logic removed from generateMetadata to ensure static metadata generation
  const adMode = false; // Default to false for static metadata

  const fallback: Metadata = {
    title: 'Pear Tree Dental — Professional Dental Care',
    description: 'Private & NHS dental services in Nottinghamshire.',
    robots: { index: !adMode, follow: true },
  }

  try {
    const [service, location, template] = await Promise.all([
      fetchServiceBySlug(serviceSlug),
      fetchLocationBySlug(suburb),
      fetchBlogTemplate(),
    ])
    if (!service || !location || !template) return fallback

    const serviceName = getEntryField<string>(service, 'serviceName') ?? 'Our Service'
    const suburbName = getEntryField<string>(location, 'suburb') ?? 'Your Area'
    const cityName = getEntryField<string>(location, 'city') ?? 'Your City'

    const seoTitleTpl = getEntryField<string>(template, 'seoTitleTemplate') ?? ''
    const seoDescTpl = getEntryField<string>(template, 'seoDescriptionTemplate') ?? ''
    const bodyDoc = getEntryField(template, 'bodyContent')

    // We can decide indexability using raw template + tokens (fast & good enough)
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
      // Don't index if it's ad mode, regardless of other indexability rules
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

    // Prebuild all possible combinations
    const [allServices, allLocations] = await Promise.all([fetchAllServices(), fetchAllLocations()])

    const params: { service: string; suburb: string }[] = []
    for (const svc of allServices) {
      const sSlug = getEntryField<string>(svc, 'slug') ?? ''
      for (const loc of allLocations) {
        const lSlug = getEntryField<string>(loc, 'slug') ?? ''
        params.push({ service: sSlug, suburb: lSlug })
      }
    }

    console.log(`Prebuilding ${params.length} service/suburb combinations for Full SSG`);
    return params
  } catch (err) {
    console.error('generateStaticParams error', err)
    return []
  }
}

// Default to ISR for non-prebuilt pages
export const dynamicParams = true;
export const revalidate = 3600; // 1 hour

export default async function ServiceSuburbPage({ params }: { params: RouteParams }) {
  const { service: serviceSlug, suburb: suburbSlug } = await params

  try {
    // Fetch all required data
    const [service, location, template, allLocations] = await Promise.all([
      fetchServiceBySlug(serviceSlug),
      fetchLocationBySlug(suburbSlug),
      fetchBlogTemplate(),
      fetchAllLocations(),
    ])

    // Return 404 if any required data is missing
    if (!service || !location || !template) {
      return notFound()
    }

    // --- Read custom headers from Edge Middleware ---
    const requestHeaders = await headers(); // Await the headers() call
    const ptdCity = requestHeaders.get('x-peartree-city');
    const ptdRegion = requestHeaders.get('x-peartree-region');
    const ptdCountry = requestHeaders.get('x-peartree-country');
    const ptdDevice = requestHeaders.get('x-peartree-device');
    const ptdTimeOfDay = requestHeaders.get('x-peartree-time-of-day');
    const ptdOfficeHours = requestHeaders.get('x-peartree-office-hours');
    const ptdPostcode = requestHeaders.get('x-peartree-postcode');
    const ptdIsLocal = requestHeaders.get('x-peartree-is-local');

    if (process.env.NODE_ENV === 'development') {
      console.log('--- Headers from Edge Middleware ---');
      console.log('x-peartree-city:', ptdCity);
      console.log('x-peartree-region:', ptdRegion);
      console.log('x-peartree-country:', ptdCountry);
      console.log('x-peartree-device:', ptdDevice);
      console.log('x-peartree-time-of-day:', ptdTimeOfDay);
      console.log('x-peartree-office-hours:', ptdOfficeHours);
      console.log('x-peartree-postcode:', ptdPostcode);
      console.log('x-peartree-is-local:', ptdIsLocal);
      console.log('------------------------------------');
    }

    // Extract data from contentful entities
    const serviceName = getEntryField<string>(service, 'serviceName') ?? 'Our Service'
    const suburbName = getEntryField<string>(location, 'suburb') ?? 'Your Area'
    const cityName = getEntryField<string>(location, 'city') ?? 'Your City'

    // Get the template content
    const bodyDoc = getEntryField(template, 'bodyContent')

    // Replace placeholders in the content
    const filledBody = replacePlaceholdersInRichText(bodyDoc, {
      service: serviceName,
      suburb: suburbName,
      city: cityName
    })

    // Check indexability with reasons (for debugging)
    const { indexable, reasons } = decideIndexable({
      service, location, filledBody
    })

    if (!indexable) {
      console.log(`Page ${serviceSlug}/${suburbSlug} is not indexable. Reasons:`, reasons)
    }

    // Get nearby locations for the change area component
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

        <CohortStrip serviceSlug={serviceSlug} suburbSlug={suburbSlug} emergency={serviceSlug === 'emergency-dentist'} />

        <OpenToday reviewsCount={Math.floor(300 + Math.random() * 400)} rating={4.8 + Math.random() * 0.2} />

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
  } catch (error) {
    console.error(`Error rendering ${serviceSlug}/${suburbSlug} page:`, error)
    return notFound()
  }
}