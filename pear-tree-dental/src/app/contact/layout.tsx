import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Postino | Marketing Agency Nottingham | Get Your Free Consultation",
  description: "Contact Postino - Nottingham's leading AI-driven marketing agency. Located at 1 Fisher Lane, Bingham. Call 08007723291 or email hello@postino.cc for your free growth consultation. Serving SMEs across Nottinghamshire.",
  keywords: "contact marketing agency Nottingham, Postino contact details, marketing consultation Nottingham, 1 Fisher Lane Bingham, hello@postino.cc, 08007723291, marketing agency near me Nottinghamshire",
  authors: [{ name: "Postino Marketing Agency" }],
  publisher: "Postino Ltd",
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: "Contact Postino | Marketing Agency Nottingham",
    description: "Get in touch with Nottingham's leading AI-driven marketing agency. Located in Bingham, serving SMEs across Nottinghamshire. Free consultation available.",
    type: "website",
    locale: "en_GB",
    url: 'https://postino.cc/contact',
    siteName: 'Postino',
    images: [
      {
        url: 'https://postino.cc/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Postino Marketing Agency Nottingham'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Postino | Marketing Agency Nottingham",
    description: "Contact Nottingham's leading AI marketing agency. Call 08007723291 or visit our Bingham office. Free consultation for SMEs.",
    images: ['https://postino.cc/og-contact.jpg']
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Nottingham',
    'geo.position': '52.9548;-1.1581',
    'ICBM': '52.9548, -1.1581',
    'business:contact_data:street_address': '1 Fisher Lane',
    'business:contact_data:locality': 'Bingham',
    'business:contact_data:region': 'Nottingham',
    'business:contact_data:postal_code': 'NG13 8BQ',
    'business:contact_data:country_name': 'United Kingdom',
    'business:contact_data:email': 'hello@postino.cc',
    'business:contact_data:phone_number': '08007723291',
    'business:contact_data:website': 'https://postino.cc'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
