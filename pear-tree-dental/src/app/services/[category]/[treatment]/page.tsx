import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchTreatment, fetchTreatmentSlugs, resolveCategorySlugAlias } from "@/lib/services";
import { renderTreatmentFallback } from "@/lib/service-fallbacks";
import RichTextRenderer from "@/components/RichTextRenderer";
import { Button } from "@/components/ui/button";

export const revalidate = 900;
export const dynamic = "force-dynamic";

const SITE_URL = "https://peartree.dental";

const organisation = {
  "@type": "MedicalOrganization",
  name: "Pear Tree Dental",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
  telephone: "+441159312935",
};

const defaultMeta = {
  title: "Dental Treatments | Pear Tree Dental",
  description: "Personalised dental treatments delivered by experienced Nottingham clinicians.",
};

const createBreadcrumbs = (segments: Array<{ name: string; href: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: segments.map((segment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: segment.name,
    item: `${SITE_URL}${segment.href}`,
  })),
});

export async function generateStaticParams() {
  try {
    const treatments = await fetchTreatmentSlugs();
    return treatments
      .filter((entry) => entry.parentSlug)
      .map((entry) => ({
        category: entry.parentSlug!,
        treatment: entry.slug,
      }));
  } catch (error) {
    console.warn("[services treatment] Falling back to empty params due to Contentful error", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; treatment: string }> }): Promise<Metadata> {
  const { treatment, category } = await params;
  let entry = await fetchTreatment(treatment);

  if (!entry || !entry.parent?.slug) {
    return defaultMeta;
  }

  const canonicalCategory = entry.parent.slug;
  const url = `${SITE_URL}/services/${canonicalCategory}/${entry.slug}`;
  const title = entry.seoTitle || `${entry.title} | ${entry.parent.title} | Pear Tree Dental`;
  const description = entry.seoDescription || entry.excerpt || defaultMeta.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Pear Tree Dental",
      images: entry.heroImage?.url ? [{ url: entry.heroImage.url, alt: entry.heroImage.description || entry.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: entry.heroImage?.url ? [entry.heroImage.url] : undefined,
    },
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ category: string; treatment: string }> }) {
  const { category, treatment } = await params;
  let entry = null;
  try {
    entry = await fetchTreatment(treatment);
  } catch (error) {
    console.error(`Failed to fetch treatment ${treatment} from Contentful`, error);
  }

  if (!entry || !entry.parent?.slug) {
    const fallback = await renderTreatmentFallback(category, treatment);
    if (fallback) {
      return fallback;
    }
    const alias = await resolveCategorySlugAlias(category);
    if (alias && alias !== category) {
      const aliasFallback = await renderTreatmentFallback(alias, treatment);
      if (aliasFallback) {
        return aliasFallback;
      }
    }
    notFound();
  }

  const canonicalCategory = entry.parent.slug;
  if (canonicalCategory !== category) {
    redirect(`/services/${canonicalCategory}/${entry.slug}`);
  }

  const breadcrumbs = createBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: entry.parent.title, href: `/services/${entry.parent.slug}` },
    { name: entry.title, href: `/services/${entry.parent.slug}/${entry.slug}` },
  ]);

  const schemaType = entry.schemaType || "MedicalProcedure";

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: entry.title,
    description: entry.seoDescription || entry.excerpt || defaultMeta.description,
    url: `${SITE_URL}/services/${entry.parent.slug}/${entry.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Nottinghamshire",
    },
    provider: organisation,
    isPartOf: {
      "@type": "Service",
      name: entry.parent.title,
      url: `${SITE_URL}/services/${entry.parent.slug}`,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/services/${entry.parent.slug}/${entry.slug}`,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
      },
    },
  };

  return (
    <article className="bg-gradient-to-b from-white to-pear-background/40">
      <div className="relative overflow-hidden bg-pear-primary/5">
        {entry.heroImage?.url && (
          <div className="absolute inset-0">
            <Image
              src={entry.heroImage.url}
              alt={entry.heroImage.description ?? `${entry.title} treatment at Pear Tree Dental`}
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
          </div>
        )}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pear-gold mb-4">{entry.parent.title}</p>
            <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
              {entry.title}
            </h1>
            {entry.excerpt && (
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                {entry.excerpt}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Link href="/book">
                <Button size="lg" className="bg-pear-primary text-white hover:bg-pear-primary/90">
                  Book This Treatment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                  Call 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 text-sm text-gray-500">
          <nav aria-label="Breadcrumb">
            <ul className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-pear-gold transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-pear-gold transition-colors">Services</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/services/${entry.parent.slug}`} className="hover:text-pear-gold transition-colors">
                  {entry.parent.title}
                </Link>
              </li>
              <li>/</li>
              <li className="text-pear-primary font-medium">{entry.title}</li>
            </ul>
          </nav>
        </div>

        {entry.body && (
          <div className="prose prose-lg max-w-none prose-headings:font-garamond prose-headings:text-pear-primary prose-a:text-pear-primary/90 prose-a:no-underline hover:prose-a:underline prose-strong:text-pear-primary">
            <RichTextRenderer document={entry.body} />
          </div>
        )}

        {entry.related && entry.related.length > 0 && (
          <section className="mt-16">
            <h2 className="heading-serif text-3xl font-semibold text-pear-primary mb-6">
              Related Treatments
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {entry.related.map((related) => {
                const parentSlug = related.parent?.slug ?? entry.parent.slug;
                return (
                  <Link
                    key={`${parentSlug}-${related.slug}`}
                    href={`/services/${parentSlug}/${related.slug}`}
                    className="group block h-full rounded-2xl border border-pear-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-pear-gold/40 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-pear-primary mb-3 group-hover:text-pear-gold transition">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center text-sm font-semibold text-pear-primary group-hover:text-pear-gold">
                      View details
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {[breadcrumbs, treatmentSchema].map((data, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </article>
  );
}
