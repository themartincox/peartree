import type { Metadata } from 'next'

export const SITE_CONFIG = {
  name: 'Postino',
  title: 'Postino - Where Growth Meets AI Innovation | Marketing & Automation Agency',
  description: 'Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Based in Nottingham, serving UK businesses.',
  url: 'https://postino.cc',
  ogImage: '/og-image.jpg',
  creator: 'Postino',
  twitterCreator: '@postino_cc',
  keywords: 'marketing agency, AI automation, SME growth, Nottingham, digital marketing, business automation, B2B UX design, LinkedIn thought leadership, SEO strategy, zero-click search, content marketing, Total Search optimization',
}

interface PageMetadataProps {
  title?: string
  description?: string
  path?: string
  keywords?: string
  ogImage?: string
  noIndex?: boolean
  priority?: number
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage,
  noIndex = false,
  priority,
  changeFreq = 'weekly',
}: PageMetadataProps): Metadata {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title
  const pageDescription = description || SITE_CONFIG.description
  const canonicalUrl = `${SITE_CONFIG.url}${path}`
  const pageKeywords = keywords || SITE_CONFIG.keywords
  const pageOgImage = ogImage || SITE_CONFIG.ogImage

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: 'Martin', url: 'https://postino.cc/about' }, { name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.creator,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage],
      creator: SITE_CONFIG.twitterCreator,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: {
      // Custom SEO tags
      'revisit-after': changeFreq === 'daily' ? '1 days' : changeFreq === 'weekly' ? '7 days' : '30 days',
      'distribution': 'global',
      'rating': 'general',
      'referrer': 'origin-when-cross-origin',
    },
  }
}

// Generate structured data for organization
export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bingham',
      addressRegion: 'Nottingham',
      postalCode: 'NG13 8BQ',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-115-xxx-xxxx',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://linkedin.com/company/postino-cc',
      'https://twitter.com/postino_cc',
    ],
    services: [
      'Growth Marketing',
      'AI Automation',
      'SEO Services',
      'Content Strategy',
      'Web Development',
    ],
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbLD(paths: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: paths.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: path.name,
      item: path.url,
    })),
  }
}

// Utility for service pages
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  servicePath: string,
  categoryName?: string
): Metadata {
  const title = `${serviceName} ${categoryName ? `| ${categoryName}` : ''} Services`
  const description = `${serviceDescription} Professional ${serviceName.toLowerCase()} services by Postino in Nottingham. Expert marketing and AI automation solutions.`

  return generatePageMetadata({
    title,
    description,
    path: servicePath,
    keywords: `${serviceName.toLowerCase()}, ${categoryName?.toLowerCase() || ''}, marketing services, AI automation, Nottingham, SME growth`,
    changeFreq: 'weekly',
  })
}
