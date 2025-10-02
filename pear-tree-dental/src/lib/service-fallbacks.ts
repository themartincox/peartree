import { createElement, type ReactElement } from "react";
import type {
  ServiceCategorySummary,
  ServiceTreatmentSummary,
} from "./services";

// -----------------------------------------------------------------------------
// Fallback data (used when Contentful queries fail)
// -----------------------------------------------------------------------------

export const fallbackCategories: ServiceCategorySummary[] = [
  {
    sys: { id: "fallback-general" },
    slug: "general-dentistry",
    title: "General Dentistry",
    excerpt:
      "Routine examinations, hygiene visits and preventive dentistry tailored to Nottingham families.",
    sortOrder: 1,
  },
  {
    sys: { id: "fallback-restorative" },
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    excerpt:
      "Crowns, bridges and dentures to strengthen, repair and replace damaged teeth",
    sortOrder: 2,
  },
  {
    sys: { id: "fallback-cosmetic" },
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    excerpt:
      "Whitening, veneers and bonding for confident, photo-ready smiles.",
    sortOrder: 3,
  },
  {
    sys: { id: "fallback-implants" },
    slug: "dental-implants",
    title: "Dental Implants",
    excerpt:
      "Permanent replacements for single or multiple missing teeth.",
    sortOrder: 4,
  },
  {
    sys: { id: "fallback-orthodontics" },
    slug: "orthodontics",
    title: "Orthodontics",
    excerpt:
      "Clear aligners and specialist orthodontics for straighter smiles at every age.",
    sortOrder: 5,
  },
  {
    sys: { id: "fallback-emergency" },
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    excerpt:
      "Same-day relief for toothache, trauma and urgent dental problems.",
    sortOrder: 6,
  },
];

export const fallbackFeaturedTreatments: Map<string, ServiceTreatmentSummary[]> = new Map([
  [
    "cosmetic-dentistry",
    [
      {
        sys: { id: "fallback-teeth-whitening" },
        slug: "teeth-whitening",
        title: "Professional Teeth Whitening",
        excerpt: "Brighten your smile by up to eight shades with safe, lasting whitening.",
        sortOrder: 1,
        parent: { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry" },
      },
      {
        sys: { id: "fallback-veneers" },
        slug: "veneers",
        title: "Dental Veneers",
        excerpt: "Transform tooth shape and colour with porcelain or composite veneers.",
        sortOrder: 2,
        parent: { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry" },
      },
      {
        sys: { id: "fallback-edge-bonding" },
        slug: "edge-bonding",
        title: "Composite Bonding",
        excerpt: "Same-day repairs for chips, gaps and small imperfections.",
        sortOrder: 3,
        parent: { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry" },
      },
    ],
  ],
  [
    "general-dentistry",
    [
      {
        sys: { id: "fallback-biodentine" },
        slug: "biodentine-fillings",
        title: "Biodentine Fillings",
        excerpt: "Natural-looking, bioactive fillings that protect and strengthen teeth.",
        sortOrder: 1,
        parent: { slug: "general-dentistry", title: "General Dentistry" },
      },
    ],
  ],
  [
    "dental-implants",
    [
      {
        sys: { id: "fallback-single-implant" },
        slug: "single-implant",
        title: "Single Dental Implant",
        excerpt: "Lifelike replacement for a single missing tooth with immediate function.",
        sortOrder: 1,
        parent: { slug: "dental-implants", title: "Dental Implants" },
      },
      {
        sys: { id: "fallback-all-on-4" },
        slug: "all-on-4",
        title: "All-on-4 Implants",
        excerpt: "Full-arch smile restoration in as little as one day.",
        sortOrder: 2,
        parent: { slug: "dental-implants", title: "Dental Implants" },
      },
    ],
  ],
]);

// -----------------------------------------------------------------------------
// Component fallbacks (legacy pages)
// -----------------------------------------------------------------------------

type Loader<T = any> = () => Promise<{ default: React.ComponentType<T> }>;

const categoryFallbackLoaders = new Map<string, Loader>();
const treatmentFallbackLoaders = new Map<string, Loader>();

function registerCategoryFallback(slugs: string[], loader: Loader) {
  slugs.forEach((slug) => categoryFallbackLoaders.set(slug, loader));
}

function registerTreatmentFallback(
  categorySlugs: string[],
  treatmentSlug: string,
  loader: Loader,
) {
  categorySlugs.forEach((categorySlug) => {
    treatmentFallbackLoaders.set(`${categorySlug}/${treatmentSlug}`, loader);
  });
}

registerCategoryFallback(['general', 'general-dentistry'], () =>
  import('@/legacy/services/general/page'),
);
registerCategoryFallback(['restorative', 'restorative-dentistry'], () =>
  import('@/legacy/services/restorative/page'),
);
registerCategoryFallback(['cosmetic', 'cosmetic-dentistry'], () =>
  import('@/legacy/services/cosmetic/page'),
);
registerCategoryFallback(['dental-implants', 'implants'], () =>
  import('@/legacy/services/implants/page'),
);
registerCategoryFallback(['orthodontics'], () =>
  import('@/legacy/services/orthodontics/page'),
);
registerCategoryFallback(['emergency', 'emergency-dentistry', 'emergency-dentist'], () =>
  import('@/legacy/services/emergency/page'),
);
registerCategoryFallback(['hygiene'], () => import('@/legacy/services/hygiene/page'));
registerCategoryFallback(['emergency-repairs'], () =>
  import('@/legacy/services/emergency-repairs/page'),
);
registerCategoryFallback(['complete-smile-makeover'], () =>
  import('@/legacy/services/complete-smile-makeover/page'),
);

registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'teeth-whitening',
  () => import('@/legacy/services/cosmetic/teeth-whitening/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'teeth-whitening-boutique',
  () => import('@/legacy/services/cosmetic/teeth-whitening/boutique/page'),
);
// Support nested slug variants used by CMS links
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'teeth-whitening-enlighten',
  () => import('@/legacy/services/cosmetic/teeth-whitening/enlighten/page'),
);

// Canonical nested routes support
registerTreatmentFallback(
  ['teeth-whitening'],
  'enlighten',
  () => import('@/legacy/services/cosmetic/teeth-whitening/enlighten/page'),
);
registerTreatmentFallback(
  ['teeth-whitening'],
  'boutique',
  () => import('@/legacy/services/cosmetic/teeth-whitening/boutique/page'),
);

// Veneers nested routes (legacy deep links)
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'veneers/porcelain',
  () => import('@/legacy/services/cosmetic/veneers/porcelain/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'veneers/composite',
  () => import('@/legacy/services/cosmetic/veneers/composite/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'veneers/ultra-thin',
  () => import('@/legacy/services/cosmetic/veneers/ultra-thin/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'edge-bonding',
  () => import('@/legacy/services/cosmetic/edge-bonding/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'composite-bonding',
  () => import('@/legacy/services/cosmetic/composite-bonding/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'wedding-day-smile',
  () => import('@/legacy/services/cosmetic/wedding-day-smile/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'buccal-corridor-correction',
  () => import('@/legacy/services/cosmetic/buccal-corridor-correction/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'veneers',
  () => import('@/legacy/services/cosmetic/veneers/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'porcelain-veneers',
  () => import('@/legacy/services/cosmetic/veneers/porcelain/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'composite-veneers',
  () => import('@/legacy/services/cosmetic/veneers/composite/page'),
);
registerTreatmentFallback(
  ['cosmetic', 'cosmetic-dentistry'],
  'ultra-thin-veneers',
  () => import('@/legacy/services/cosmetic/veneers/ultra-thin/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'smile-design',
  () => import('@/legacy/services/restorative/smile-design/page'),
);
registerTreatmentFallback(
  ['general', 'general-dentistry'],
  'biodentine-fillings',
  () => import('@/legacy/services/general/biodentine-fillings/page'),
);
registerTreatmentFallback(
  ['dental-implants', 'implants'],
  'single-implant',
  () => import('@/legacy/services/implants/single-implant/page'),
);
registerTreatmentFallback(
  ['dental-implants', 'implants'],
  'multiple-implant',
  () => import('@/legacy/services/implants/multiple-implant/page'),
);
registerTreatmentFallback(
  ['dental-implants', 'implants'],
  'implant-bridge',
  () => import('@/legacy/services/implants/implant-bridge/page'),
);
registerTreatmentFallback(
  ['dental-implants', 'implants'],
  'all-on-4',
  () => import('@/legacy/services/implants/all-on-4/page'),
);
registerTreatmentFallback(
  ['orthodontics'],
  'invisalign',
  () => import('@/legacy/services/orthodontics/invisalign/page'),
);
registerTreatmentFallback(
  ['orthodontics'],
  'clearcorrect',
  () => import('@/legacy/services/orthodontics/clearcorrect/page'),
);
registerTreatmentFallback(
  ['hygiene'],
  'airflow-stain-removal',
  () => import('@/legacy/services/hygiene/airflow-stain-removal/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures',
  () => import('@/legacy/services/restorative/dentures/page'),
);
// Dentures nested routes
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures/complete-dentures',
  () => import('@/legacy/services/restorative/dentures/complete-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures/partial-dentures',
  () => import('@/legacy/services/restorative/dentures/partial-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures/valplast-dentures',
  () => import('@/legacy/services/restorative/dentures/valplast-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures/cobalt-chrome-dentures',
  () => import('@/legacy/services/restorative/dentures/cobalt-chrome-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'dentures/hybrid-dentures',
  () => import('@/legacy/services/restorative/dentures/hybrid-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'cobalt-chrome-dentures',
  () => import('@/legacy/services/restorative/dentures/cobalt-chrome-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'valplast-dentures',
  () => import('@/legacy/services/restorative/dentures/valplast-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'partial-dentures',
  () => import('@/legacy/services/restorative/dentures/partial-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'hybrid-dentures',
  () => import('@/legacy/services/restorative/dentures/hybrid-dentures/page'),
);
registerTreatmentFallback(
  ['restorative', 'restorative-dentistry'],
  'complete-dentures',
  () => import('@/legacy/services/restorative/dentures/complete-dentures/page'),
);

function resolveCategoryFallbackLoader(slug: string) {
  return (
    categoryFallbackLoaders.get(slug) ||
    categoryFallbackLoaders.get(slug.replace(/-pear-tree$/, ''))
  );
}

function resolveTreatmentFallbackLoader(category: string, treatment: string) {
  const baseKey = `${category}/${treatment}`;
  if (treatmentFallbackLoaders.has(baseKey)) {
    return treatmentFallbackLoaders.get(baseKey)!;
  }

  // Support nested treatment paths (e.g. dentures/valplast-dentures)
  const segments = treatment.split('/');
  if (segments.length > 1) {
    for (let i = segments.length; i > 1; i--) {
      const key = `${category}/${segments.slice(0, i).join('/')}`;
      if (treatmentFallbackLoaders.has(key)) {
        return treatmentFallbackLoaders.get(key)!;
      }
    }
  }

  return undefined;
}

export async function renderCategoryFallback(slug: string): Promise<ReactElement | null> {
  const loader = resolveCategoryFallbackLoader(slug);
  if (!loader) return null;

  try {
    const mod = await loader();
    const Component = mod.default;
    return createElement(Component);
  } catch (error) {
    console.error(`[service-fallbacks] Failed to render category fallback for slug "${slug}"`, error);
    return null;
  }
}

export async function renderTreatmentFallback(
  categorySlug: string,
  treatmentSlug: string,
): Promise<ReactElement | null> {
  const loader =
    resolveTreatmentFallbackLoader(categorySlug, treatmentSlug) ||
    resolveTreatmentFallbackLoader(categorySlug.replace(/-dentistry$/, ''), treatmentSlug) ||
    resolveTreatmentFallbackLoader(categorySlug.replace(/-dentist$/, ''), treatmentSlug);

  if (!loader) return null;

  try {
    const mod = await loader();
    const Component = mod.default;
    return createElement(Component);
  } catch (error) {
    console.error(
      `[service-fallbacks] Failed to render treatment fallback for "${categorySlug}/${treatmentSlug}"`,
      error,
    );
    return null;
  }
}
