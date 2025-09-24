import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchCategory, fetchCategorySlugs, resolveCategorySlugAlias } from "@/lib/services";
import RichTextRenderer from "@/components/RichTextRenderer";
import { Button } from "@/components/ui/button";

export const revalidate = 900;

const SITE_URL = "https://peartree.dental";

const defaultMetadata = {
  title: "Dental Services | Pear Tree Dental",
  description: "Explore our comprehensive dental treatments designed for Nottingham families, from preventive care to advanced smile makeovers.",
};

const organisation = {
  "@type": "MedicalOrganization",
  name: "Pear Tree Dental",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
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
  const categories = await fetchCategorySlugs();
  return categories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  let result = await fetchCategory(category);

  if (!result) {
    const alias = await resolveCategorySlugAlias(category);
    if (alias && alias !== category) {
      result = await fetchCategory(alias);
    }
  }

  if (!result) {
    return defaultMetadata;
  }

  const { category: entry } = result;
  const url = `${SITE_URL}/services/${entry.slug}`;

  const title = entry.seoTitle || `${entry.title} | Pear Tree Dental`;
  const description = entry.seoDescription || entry.excerpt || defaultMetadata.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
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

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  let data = await fetchCategory(slug);

  if (!data) {
    const alias = await resolveCategorySlugAlias(slug);
    if (alias && alias !== slug) {
      redirect(`/services/${alias}`);
    }
  }

  if (!data) {
    notFound();
  }

  const { category, treatments } = data;

  const breadcrumbs = createBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: category.title, href: `/services/${category.slug}` },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.seoDescription || category.excerpt || defaultMetadata.description,
    provider: organisation,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Nottinghamshire",
    },
    url: `${SITE_URL}/services/${category.slug}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background via-white to-white">
      <div className="relative overflow-hidden bg-pear-primary/5">
        {category.heroImage?.url && (
          <div className="absolute inset-0">
            <Image
              src={category.heroImage.url}
              alt={category.heroImage.description ?? `${category.title} at Pear Tree Dental`}
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
          </div>
        )}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pear-gold mb-4">Services</p>
            <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
              {category.title}
            </h1>
            {category.excerpt && (
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                {category.excerpt}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Link href="/book">
                <Button size="lg" className="bg-pear-primary text-white hover:bg-pear-primary/90">
                  Book a Consultation
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
              <li className="text-pear-primary font-medium">{category.title}</li>
            </ul>
          </nav>
        </div>

        {category.body && (
          <div className="prose prose-lg max-w-none prose-headings:font-garamond prose-headings:text-pear-primary prose-a:text-pear-primary/90 prose-a:no-underline hover:prose-a:underline prose-strong:text-pear-primary">
            <RichTextRenderer document={category.body} />
          </div>
        )}

        <section className="mt-12">
          <h2 className="heading-serif text-3xl font-semibold text-pear-primary mb-6">
            Available Treatments
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Choose a treatment below to explore how our Nottingham dental team can help. Each page includes detailed information, pricing guidance, and what to expect from your visit.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/services/${category.slug}/${treatment.slug}`}
                className="group block h-full rounded-2xl border border-pear-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-pear-gold/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-pear-primary mb-3 group-hover:text-pear-gold transition">
                  {treatment.title}
                </h3>
                {treatment.excerpt && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {treatment.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center text-sm font-semibold text-pear-primary group-hover:text-pear-gold">
                  Learn more
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          {!treatments.length && (
            <div className="rounded-xl border border-dashed border-pear-primary/20 bg-white/70 p-8 text-center text-gray-600">
              <p>We&apos;re updating treatments in this category. Please check back soon or call our team for the latest information.</p>
            </div>
          )}
        </section>
      </div>

      {[breadcrumbs, serviceSchema].map((data, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </div>
  );
}
