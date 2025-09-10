import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLocationSlugs, getLocationData } from '@/data/locationData';

// Import the layout components
import DefaultLocationLayout from '@/lib/DefaultLocationLayout';
import PremiumLocationLayout from '@/lib/PremiumLocationLayout';
import FamilyLocationLayout from '@/lib/FamilyLocationLayout';

// Generate static pages for each location at build time for performance and SEO
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = getLocationData(params.slug);
  if (!data) {
    return {
      title: 'Location Not Found',
      description: 'This location page does not exist.',
    };
  }

  const { metadata } = data;
  const url = `https://peartree.dental/location/${data.slug}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Map layout strings to their corresponding components
const layoutMap = {
  default: DefaultLocationLayout,
  premium: PremiumLocationLayout,
  family: FamilyLocationLayout,
};

export default function LocationPage({ params }: { params: { slug: string } }) {
  const data = getLocationData(params.slug);

  // If no data is found for the slug, show a 404 page
  if (!data) {
    notFound();
  }

  // Select the correct layout component based on the data, or fall back to default
  const LayoutComponent = layoutMap[data.layout] || layoutMap.default;

  // Render the selected layout component, passing the location data to it
  return <LayoutComponent data={data} />;
}