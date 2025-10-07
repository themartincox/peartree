import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Shield,
  ShieldCheck,
  Sparkles,
  Smile,
  Zap,
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Phone,
  Crown,
} from "lucide-react";

import { fetchHubData } from "@/lib/services";
import { fallbackCategories, fallbackFeaturedTreatments } from "@/lib/service-fallbacks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const revalidate = 900;

const SITE_URL = "https://peartree.dental";

type ServiceDecoration = {
  slug: string;
  contentfulSlug?: string;
  label: string;
  description: string;
  icon: LucideIcon;
  theme: "primary" | "cosmetic" | "medical" | "destructive";
  image?: string;
  features?: string[];
};

const serviceDecorations: ServiceDecoration[] = [
  {
    slug: "general",
    contentfulSlug: "general-dentistry",
    label: "General Dentistry",
    description: "Keep every smile healthy with personalised check-ups, hygiene appointments and preventive advice for the whole family.",
    icon: Shield,
    theme: "primary",
    image: "/images/general-dental-checkup.webp",
    features: ["Routine examinations", "Scale & polish", "Fluoride protection", "Children's dentistry"],
  },
  {
    slug: "restorative",
    contentfulSlug: "restorative-dentistry",
    label: "Restorative Dentistry",
    description:
      "From fillings and crowns to bridges, restorative dentistry repairs damaged teeth and restores your natural smile. Our Nottingham clinic uses modern techniques and materials to rebuild teeth comfortably and ensure long-term oral health.",
    icon: ShieldCheck,
    theme: "medical",
    image: "/images/restorative-dental-treatment.webp",
    features: ["Crowns & bridges", "White fillings", "Root canal therapy", "Custom dentures"],
  },
  {
    slug: "cosmetic",
    contentfulSlug: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    description:
      "Transform your smile with cosmetic dentistry at Pear Tree Dental. Our services include ultra-thin veneers, Enlighten teeth whitening and complete smile makeovers. Expect lasting improvements at our clinic near Nottingham.",
    icon: Sparkles,
    theme: "cosmetic",
    image: "/images/cosmetic-dentistry-services.webp",
    features: ["Teeth whitening", "Porcelain veneers", "Composite bonding", "Smile design"],
  },
  {
    slug: "implants",
    contentfulSlug: "dental-implants",
    label: "Dental Implants",
    description:
      "Restore your smile and confidence with implant dentistry. Our Nottingham clinic offers single implants to full-arch solutions using advanced 3D planning. Enjoy secure, natural-feeling replacements with personalised care.",
    icon: Crown,
    theme: "medical",
    image: "/images/dental-implants-procedure.webp",
    features: ["Single implants", "Implant bridges", "All-on-4", "Implant retained dentures"],
  },
  {
    slug: "orthodontics",
    contentfulSlug: "orthodontics",
    label: "Orthodontics",
    description:
      "Pear Tree Dental offers both traditional braces and modern clear aligners. Using digital imaging, we tailor plans for adults and teens to straighten teeth comfortably and improve bites for lasting confidence.",
    icon: Smile,
    theme: "cosmetic",
    image: "/images/orthodontics-invisalign-treatment.webp",
    features: ["Invisalign", "ClearCorrect", "Retainers", "Orthodontic assessments"],
  },
  {
    slug: "emergency",
    contentfulSlug: "emergency-dentistry",
    label: "Emergency Dentistry",
    description: "Same-day appointments for toothache, broken teeth and urgent dental trauma in Nottingham.",
    icon: AlertCircle,
    theme: "destructive",
    image: "/images/emergency-dental-care.webp",
    features: ["Toothache relief", "Broken tooth repairs", "Sports trauma", "Out-of-hours support"],
  },
];

const decorationLookup = new Map<string, ServiceDecoration>();
for (const decoration of serviceDecorations) {
  decorationLookup.set(decoration.slug, decoration);
  if (decoration.contentfulSlug) {
    decorationLookup.set(decoration.contentfulSlug, decoration);
  }
}

const themeClasses: Record<ServiceDecoration["theme"], string> = {
  primary: "from-pear-primary/90 to-pear-primary",
  cosmetic: "from-soft-pink/80 to-soft-pink",
  medical: "from-dental-green/80 to-dental-green",
  destructive: "from-red-500/80 to-red-500",
};

const iconBg: Record<ServiceDecoration["theme"], string> = {
  primary: "bg-pear-primary/10 text-pear-primary",
  cosmetic: "bg-soft-pink/10 text-soft-pink",
  medical: "bg-dental-green/10 text-dental-green",
  destructive: "bg-red-500/10 text-red-500",
};

export const metadata: Metadata = {
  title: "Dental Services in Nottingham | Pear Tree Dental",
  description: "Discover comprehensive dental services at Pear Tree Dental. Browse smile makeovers, implants, family dentistry and emergency care – all delivered by our Nottingham clinicians.",
  openGraph: {
    title: "Dental Services in Nottingham | Pear Tree Dental",
    description: "From preventive care to advanced cosmetic treatments, explore personalised dentistry designed around your goals.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

const breadcrumbJson = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

const ServicesPage = async () => {
  let categories;
  let featured;

  try {
    const hubData = await fetchHubData();
    categories = hubData.categories;
    featured = hubData.featured;
  } catch (error) {
    console.error(
      "Failed to load service hub data from Contentful, using fallback content",
      error,
    );
    categories = fallbackCategories;
    featured = fallbackFeaturedTreatments;
  }

  if (!categories?.length) {
    categories = fallbackCategories;
  }

  if (!featured || featured.size === 0) {
    featured = fallbackFeaturedTreatments;
  }

  const decoratedCategories = categories.map((category, index) => {
    const decoration = decorationLookup.get(category.slug) ?? decorationLookup.get(category.slug.replace(/-pear-tree$/, "")) ?? null;

    return {
      order: index,
      slug: category.slug,
      title: decoration?.label ?? category.title,
      description: category.excerpt || decoration?.description || "",
      icon: decoration?.icon ?? Shield,
      image: decoration?.image ?? null,
      theme: decoration?.theme ?? "primary",
      features: decoration?.features ?? [],
      sys: category.sys,
    };
  });

  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: decoratedCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      url: `${SITE_URL}/services/${category.slug}`,
    })),
  };

  return (
    <div className="bg-gradient-to-b from-white via-pear-background/40 to-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-pear-primary/5" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pear-gold mb-4">Our Services</p>
            <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
              Dentistry tailored to Nottingham smiles
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Every treatment plan starts with listening. Explore how we combine modern technology with gentle care across general, cosmetic, implant and emergency dentistry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-pear-primary text-white hover:bg-pear-primary/90">
                  <CalendarDays className="mr-2 h-5 w-5" /> Book an appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                  <Phone className="mr-2 h-5 w-5" /> Call 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {!decoratedCategories.length ? (
          <div className="rounded-2xl border border-dashed border-pear-primary/20 bg-white p-12 text-center text-gray-600">
            <p>We&apos;re updating our services right now. Please check back shortly or contact the team for immediate assistance.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {decoratedCategories.map((category) => {
              const featuredTreatments = featured.get(category.slug) ?? [];
              const Icon = category.icon;
              const gradient = themeClasses[category.theme];
              const iconClasses = iconBg[category.theme];
              return (
                <Card key={category.slug} className="border-none shadow-xl overflow-hidden">
                  <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                    <div className="relative p-8 sm:p-10">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none" />

                      <div className="relative flex items-start gap-4 mb-6">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconClasses}`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-pear-gold">Category</p>
                          <CardTitle className="mt-1 text-2xl text-pear-primary">{category.title}</CardTitle>
                        </div>
                      </div>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-base text-gray-700 leading-relaxed">
                          {category.description}
                        </p>

                        {category.features?.length ? (
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {category.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="h-2 w-2 rounded-full bg-pear-gold" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        <div>
                          <Link href={`/services/${category.slug}`}>
                            <Button className="bg-pear-primary text-white hover:bg-pear-primary/90">
                              View {category.title}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>

                    <div className="relative border-t border-pear-primary/10 bg-white lg:border-l lg:border-t-0">
                      {category.image && (
                        <div className="absolute inset-0">
                          <Image
                            src={category.image}
                            alt={`${category.title} at Pear Tree Dental`}
                            fill
                            className="object-cover opacity-40"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
                        </div>
                      )}

                      <div className="relative h-full p-8 sm:p-10 text-white">
                        <p className="text-xs uppercase tracking-widest text-white/80 mb-1">{category.title}</p>
                        <h3 className="text-xl font-bold mb-2">{category.title} at Pear Tree Dental</h3>
                        <h4 className="text-sm font-semibold mb-3 opacity-90">Featured Treatments</h4>
                        {featuredTreatments.length ? (
                          <ul className="space-y-4">
                            {featuredTreatments.map((treatment) => (
                              <li key={treatment.slug}>
                                <Link
                                  href={`/services/${category.slug}/${treatment.slug}`}
                                  className="group block rounded-xl bg-black/25 backdrop-blur-[1px] px-4 py-3 transition hover:bg-black/35 border border-white/10"
                                >
                                  <p className="text-base font-semibold text-white group-hover:text-white">
                                    {treatment.title}
                                  </p>
                                  {treatment.excerpt && (
                                    <p className="text-sm text-white/90 line-clamp-2">
                                      {treatment.excerpt}
                                    </p>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-white/90">
                            We&apos;re curating featured treatments for this category. Explore all options inside the category page.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {[breadcrumbJson, itemListJson].map((data, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </div>
  );
};

export default ServicesPage;
