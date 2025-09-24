import type { Document } from "@contentful/rich-text-types";
import { contentfulGraphQL } from "./contentful-graphql";

const DEFAULT_LIMIT = 500;

type ServiceType = "category" | "treatment";

interface SysMeta {
  id: string;
  updatedAt?: string;
}

interface ServiceReference {
  slug: string;
  title: string;
}

export interface ServiceCategorySummary {
  sys: SysMeta;
  slug: string;
  title: string;
  excerpt?: string | null;
  sortOrder?: number | null;
}

export interface ServiceCategoryDetail extends ServiceCategorySummary {
  body?: Document | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  heroImage?: {
    url: string;
    description?: string | null;
    title?: string | null;
  } | null;
}

export interface ServiceTreatmentSummary {
  sys: SysMeta;
  slug: string;
  title: string;
  excerpt?: string | null;
  sortOrder?: number | null;
  parent: ServiceReference | null;
}

export interface ServiceTreatmentDetail extends ServiceTreatmentSummary {
  body?: Document | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  schemaType?: string | null;
  heroImage?: {
    url: string;
    description?: string | null;
    title?: string | null;
  } | null;
  related?: ServiceReference[];
}

interface HubServiceItem {
  sys: SysMeta;
  slug: string;
  title: string;
  type: ServiceType;
  excerpt?: string | null;
  sortOrder?: number | null;
  featuredOnHub?: boolean | null;
  parent?: ServiceReference | null;
}

interface HubServicesResponse {
  serviceCollection?: {
    items: HubServiceItem[];
  };
}

const HUB_SERVICES_QUERY = /* GraphQL */ `
  query HubServices($limit: Int = 200) {
    serviceCollection(limit: $limit, where: { isHidden_not: true }) {
      items {
        sys { id }
        title
        slug
        type
        excerpt
        sortOrder
        featuredOnHub
        parent {
          ... on Service {
            slug
            title
          }
        }
      }
    }
  }
`;

interface CategoryQueryResponse {
  serviceCollection?: {
    items: Array<{
      sys: SysMeta;
      title: string;
      slug: string;
      excerpt?: string | null;
      body?: { json: Document } | null;
      seoTitle?: string | null;
      seoDescription?: string | null;
      heroImage?: { url: string; description?: string | null; title?: string | null } | null;
    }>;
  };
  treatments?: {
    items: Array<{
      sys: SysMeta;
      title: string;
      slug: string;
      excerpt?: string | null;
      sortOrder?: number | null;
      parent?: ServiceReference | null;
    }>;
  };
}

const CATEGORY_QUERY = /* GraphQL */ `
  query CategoryPage($slug: String!) {
    serviceCollection(limit: 1, where: { slug: $slug, type: "category", isHidden_not: true }) {
      items {
        sys { id }
        title
        slug
        excerpt
        seoTitle
        seoDescription
        body { json }
        heroImage { url description title }
      }
    }
    treatments: serviceCollection(
      limit: 200,
      where: { type: "treatment", isHidden_not: true, parent: { slug: $slug } },
      order: sortOrder_ASC
    ) {
      items {
        sys { id }
        title
        slug
        excerpt
        sortOrder
        parent {
          ... on Service {
            slug
            title
          }
        }
      }
    }
  }
`;

interface TreatmentQueryResponse {
  serviceCollection?: {
    items: Array<{
      sys: SysMeta;
      title: string;
      slug: string;
      excerpt?: string | null;
      seoTitle?: string | null;
      seoDescription?: string | null;
      schemaType?: string | null;
      body?: { json: Document } | null;
      heroImage?: { url: string; description?: string | null; title?: string | null } | null;
      parent?: ServiceReference | null;
      relatedCollection?: {
        items: Array<{
          title: string;
          slug: string;
          parent?: ServiceReference | null;
        }>;
      } | null;
    }>;
  };
}

const TREATMENT_QUERY = /* GraphQL */ `
  query TreatmentPage($slug: String!) {
    serviceCollection(limit: 1, where: { slug: $slug, type: "treatment", isHidden_not: true }) {
      items {
        sys { id }
        title
        slug
        excerpt
        seoTitle
        seoDescription
        schemaType
        body { json }
        heroImage { url description title }
        parent {
          ... on Service {
            title
            slug
          }
        }
        relatedCollection(limit: 6) {
          items {
            title
            slug
            parent {
              ... on Service {
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`;

interface SlugResponse {
  serviceCollection?: {
    items: Array<{
      sys: SysMeta;
      slug: string;
      parent?: ServiceReference | null;
    }>;
  };
}

const CATEGORY_SLUGS_QUERY = /* GraphQL */ `
  query CategorySlugs($limit: Int = 500) {
    serviceCollection(limit: $limit, where: { type: "category", isHidden_not: true }) {
      items {
        sys { id }
        slug
      }
    }
  }
`;

const TREATMENT_SLUGS_QUERY = /* GraphQL */ `
  query TreatmentSlugs($limit: Int = 1000) {
    serviceCollection(limit: $limit, where: { type: "treatment", isHidden_not: true }) {
      items {
        sys { id }
        slug
        parent {
          ... on Service {
            slug
            title
          }
        }
      }
    }
  }
`;

const bySortOrder = (a?: number | null, b?: number | null) => (a ?? 999) - (b ?? 999);

export async function fetchHubData(limit = DEFAULT_LIMIT) {
  const data = await contentfulGraphQL<HubServicesResponse>(HUB_SERVICES_QUERY, { limit });
  const items = data.serviceCollection?.items ?? [];

  const categories: ServiceCategorySummary[] = items
    .filter((item) => item.type === "category" && !item.parent)
    .sort((a, b) => bySortOrder(a.sortOrder, b.sortOrder))
    .map((item) => ({
      sys: item.sys,
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      sortOrder: item.sortOrder,
    }));

  const featured = new Map<string, ServiceTreatmentSummary[]>();

  items
    .filter((item) => item.type === "treatment" && item.featuredOnHub && item.parent?.slug)
    .sort((a, b) => bySortOrder(a.sortOrder, b.sortOrder))
    .forEach((item) => {
      const parentSlug = item.parent!.slug;
      const arr = featured.get(parentSlug) ?? [];
      if (arr.length < 3) {
        arr.push({
          sys: item.sys,
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          sortOrder: item.sortOrder,
          parent: item.parent ?? null,
        });
      }
      featured.set(parentSlug, arr);
    });

  return { categories, featured } as const;
}

export async function fetchCategory(slug: string) {
  const data = await contentfulGraphQL<CategoryQueryResponse>(CATEGORY_QUERY, { slug });
  const category = data.serviceCollection?.items?.[0];

  if (!category) {
    return null;
  }

  const treatments: ServiceTreatmentSummary[] = (data.treatments?.items ?? [])
    .map((item) => ({
      sys: item.sys,
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      sortOrder: item.sortOrder,
      parent: item.parent ?? null,
    }));

  const detail: ServiceCategoryDetail = {
    sys: category.sys,
    slug: category.slug,
    title: category.title,
    excerpt: category.excerpt,
    body: category.body?.json ?? null,
    seoTitle: category.seoTitle ?? null,
    seoDescription: category.seoDescription ?? null,
    heroImage: category.heroImage
      ? {
          url: category.heroImage.url,
          description: category.heroImage.description ?? null,
          title: category.heroImage.title ?? null,
        }
      : null,
  };

  return { category: detail, treatments } as const;
}

export async function fetchTreatment(slug: string) {
  const data = await contentfulGraphQL<TreatmentQueryResponse>(TREATMENT_QUERY, { slug });
  const treatment = data.serviceCollection?.items?.[0];

  if (!treatment) {
    return null;
  }

  const detail: ServiceTreatmentDetail = {
    sys: treatment.sys,
    slug: treatment.slug,
    title: treatment.title,
    excerpt: treatment.excerpt,
    sortOrder: null,
    parent: treatment.parent ?? null,
    body: treatment.body?.json ?? null,
    seoTitle: treatment.seoTitle ?? null,
    seoDescription: treatment.seoDescription ?? null,
    schemaType: treatment.schemaType ?? null,
    heroImage: treatment.heroImage
      ? {
          url: treatment.heroImage.url,
          description: treatment.heroImage.description ?? null,
          title: treatment.heroImage.title ?? null,
        }
      : null,
    related: treatment.relatedCollection?.items
      ?.filter((item) => item.slug)
      .map((item) => ({
        title: item.title,
        slug: item.slug,
        parent: item.parent ?? null,
      })) ?? [],
  };

  return detail;
}

export async function fetchCategorySlugs(limit = DEFAULT_LIMIT) {
  const data = await contentfulGraphQL<SlugResponse>(CATEGORY_SLUGS_QUERY, { limit });
  return (data.serviceCollection?.items ?? []).map((item) => ({
    slug: item.slug,
  }));
}

export async function fetchTreatmentSlugs(limit = DEFAULT_LIMIT) {
  const data = await contentfulGraphQL<SlugResponse>(TREATMENT_SLUGS_QUERY, { limit });
  return (data.serviceCollection?.items ?? []).map((item) => ({
    slug: item.slug,
    parentSlug: item.parent?.slug ?? null,
  }));
}

const CATEGORY_ALIASES: Record<string, string[]> = {
  general: ["general-dentistry", "general-dental"],
  cosmetic: ["cosmetic-dentistry"],
  restorative: ["restorative-dentistry"],
  implants: ["dental-implants"],
  orthodontics: ["orthodontics"],
  emergency: ["emergency-dentistry", "emergency-dentist"],
  "emergency-dentist": ["emergency-dentistry", "emergency"],
};

export async function resolveCategorySlugAlias(slug: string) {
  const candidates = new Set<string>([slug, ...(CATEGORY_ALIASES[slug] ?? [])]);
  const categories = await fetchCategorySlugs();

  const direct = categories.find((category) => candidates.has(category.slug));
  if (direct) {
    return direct.slug;
  }

  const fallback = categories.find((category) => {
    if (!category.slug) return false;
    const normalised = category.slug.replace(/-(dentistry|dental|services?)$/, '');
    return normalised === slug;
  });

  return fallback?.slug ?? null;
}
