// /app/blog/[service]/[suburb]/page.tsx
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import RelatedLocationLinks from "@/components/RelatedLocationLinks";
import {
  fetchAllServices,
  fetchAllLocations,
  fetchServiceBySlug,
  fetchLocationBySlug,
  fetchBlogTemplate,
  fetchPriorityServices,
  fetchPriorityLocations,
  extractTextFromRichText,
  contentfulHealthCheck,
  fillTemplate,
  replacePlaceholdersInRichText,
} from "@/lib/contentful";
import {
  IBlogTemplateFields,
  type IServiceDataFields,
  type ILocationDataFields,
  type ITestimonialFields,
} from "@/types/contentful";
import type { Entry } from "contentful";
import { richTextRenderOptions } from "@/lib/richTextRenderOptions";

// ISR & dynamic opts
export const revalidate = 3600; // 1h
export const dynamicParams = true;
export const dynamic = 'auto';

interface Props {
  params: { service: string; suburb: string };
}

// SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fallback: Metadata = {
    title: "Pear Tree Dental — Professional Dental Care",
    description: "Private & NHS dental services in Nottinghamshire.",
    robots: { index: true, follow: true },
  };

  try {
    const [service, location, template] = await Promise.all([
      fetchServiceBySlug(params.service),
      fetchLocationBySlug(params.suburb),
      fetchBlogTemplate(),
    ]);
    if (!service || !location || !template) return fallback;

    const title = fillTemplate(template.fields.seoTitleTemplate, service, location);
    const description = fillTemplate(template.fields.seoDescriptionTemplate, service, location);
    const url = `https://peartree.dental/blog/${params.service}/${params.suburb}`;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        type: "article",
        url,
        siteName: "Pear Tree Dental",
        images: [{ url: "https://peartree.dental/og/default.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
      robots: { index: true, follow: true },
    };
  } catch (err) {
    console.error("generateMetadata error", err);
    return fallback;
  }
}

// Static params generation (priority / staged / full)
export async function generateStaticParams() {
  try {
    const healthy = await contentfulHealthCheck();
    if (!healthy) {
      console.warn("Contentful unhealthy, skipping pre-gen");
      return [];
    }

    const mode = process.env.GENERATION_MODE || "priority";
    const params: { service: string; suburb: string }[] = [];

    if (mode === "priority") {
      const [ps, pl] = await Promise.all([fetchPriorityServices(), fetchPriorityLocations()]);
      for (const s of ps) for (const l of pl) params.push({ service: s.fields.slug, suburb: l.fields.slug });
      return params;
    }

    if (mode === "staged") {
      const [allS, allL] = await Promise.all([fetchAllServices(), fetchAllLocations()]);
      const priS = allS.filter(s => s.fields.priority);
      const majorL = allL.filter(l => l.fields.tier === "major");
      const services = priS.length ? priS : allS.slice(0, 5);
      const locs = majorL.length ? majorL : allL.slice(0, 20);
      for (const s of services) for (const l of locs) params.push({ service: s.fields.slug, suburb: l.fields.slug });
      return params;
    }

    if (mode === "full") {
      const [fs, fl] = await Promise.all([fetchAllServices(), fetchAllLocations()]);
      const total = fs.length * fl.length;
      if (total > 10000) {
        console.warn(`Large pre-gen (${total}). Consider 'priority' or 'staged'.`);
      }
      for (const s of fs) for (const l of fl) params.push({ service: s.fields.slug, suburb: l.fields.slug });
      return params;
    }

    // Default fallback to priority (no recursion)
    console.warn(`Unknown GENERATION_MODE='${mode}', using 'priority'`);
    const [ps, pl] = await Promise.all([fetchPriorityServices(), fetchPriorityLocations()]);
    for (const s of ps) for (const l of pl) params.push({ service: s.fields.slug, suburb: l.fields.slug });
    return params;
  } catch (err) {
    console.error("generateStaticParams error", err);
    return []; // rely on on-demand ISR
  }
}

export default async function BlogPage({ params }: Props) {
  try {
    const [service, location, template] = await Promise.all([
      fetchServiceBySlug(params.service),
      fetchLocationBySlug(params.suburb, 2),
      fetchBlogTemplate(),
    ]);

    if (!service) {
      console.warn(`Service not found: ${params.service}`);
      notFound();
    }
    if (!location) {
      console.warn(`Location not found: ${params.suburb}`);
      notFound();
    }
    if (!template) {
      console.error("Blog template missing");
      notFound();
    }

    const h1 = fillTemplate(template!.fields.h1Template, service!, location!);

    const serviceName = service!.fields.serviceName;
    const suburbName = location!.fields.suburb;
    const cityName = location!.fields.city;

    const bodyDoc = template!.fields.bodyContent
      ? replacePlaceholdersInRichText(template!.fields.bodyContent, {
          service: serviceName,
          suburb: suburbName,
          city: cityName,
          reviewsCount: 500,
          reviewsRating: 5,
          membershipUrl: '/membership',
          contactUrl: '/contact',
          bookingUrl: '/book',
        })
      : null;

    const testimonials = (location!.fields.localTestimonials || [])
      .map((t: Entry<ITestimonialFields>) => ({
        author: t.fields.author || "Anonymous",
        reviewBody: extractTextFromRichText(t.fields.quote),
        rating: typeof t.fields.rating === "number" ? t.fields.rating : undefined,
      }))
      .filter(t => t.reviewBody.length > 0);

    const canonical = `https://peartree.dental/blog/${params.service}/${params.suburb}`;

    // Related locations (same city cluster)
    const allLocs = await fetchAllLocations();
    const siblings = allLocs
      .filter((l) => l.fields.slug !== location!.fields.slug && (l.fields.city?.toLowerCase() === cityName?.toLowerCase()))
      .slice(0, 6)
      .map((l) => ({
        serviceSlug: service!.fields.slug,
        suburbSlug: l.fields.slug,
        suburbName: l.fields.suburb,
        city: l.fields.city,
      }));

    return (
      <article className="container mx-auto px-4 py-8">
        <StructuredData
          service={service!.fields.serviceName}
          suburb={location!.fields.suburb}
          city={location!.fields.city}
          reviews={testimonials}
        />

        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', item: 'https://peartree.dental/' },
            { name: 'Blog', item: 'https://peartree.dental/blog' },
            { name: service!.fields.serviceName, item: `https://peartree.dental/blog/${params.service}` },
            { name: location!.fields.suburb, item: canonical },
          ]}
        />

        <h1 className="text-4xl font-bold mb-6">{h1}</h1>

        <div className="prose max-w-none">
          {bodyDoc
            ? documentToReactComponents(bodyDoc, richTextRenderOptions)
            : <p>Welcome to Pear Tree Dental — your trusted dental care provider.</p>}
        </div>

        {location!.fields.uniqueLocalContent && (
          <section className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              About Pear Tree Dental in {location!.fields.suburb}
            </h2>
            {documentToReactComponents(
              replacePlaceholdersInRichText(location!.fields.uniqueLocalContent, {
                service: serviceName,
                suburb: suburbName,
                city: cityName,
                reviewsCount: 500,
                reviewsRating: 5,
                membershipUrl: '/membership',
                contactUrl: '/contact',
                bookingUrl: '/book',
              }),
              richTextRenderOptions
            )}
          </section>
        )}

        {testimonials.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              What our patients in {location!.fields.suburb} say
            </h2>
            {testimonials.map((t, i) => {
              const stars = Math.max(1, Math.min(5, Math.round(t.rating ?? 5)));
              return (
                <blockquote key={i} className="border-l-4 border-blue-500 pl-4 italic mt-4">
                  <p>&quot;{t.reviewBody}&quot;</p>
                  <cite className="block mt-2 font-semibold not-italic">
                    - {t.author}
                    <span aria-label={`${stars} out of 5 stars`} className="ml-2 text-yellow-500">
                      {"★".repeat(stars)}
                    </span>
                  </cite>
                </blockquote>
              );
            })}
          </section>
        )}

        <RelatedLocationLinks items={siblings} title={`More ${service!.fields.serviceName} near ${location!.fields.city}`} />
      </article>
    );
  } catch (err) {
    console.error("BlogPage render error", err);
    notFound();
  }
}
