// Define proper types for Sanity image objects
interface SanityImageAsset {
  _id: string
  url: string
  metadata?: {
    dimensions?: {
      width: number
      height: number
    }
  }
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset | { _ref: string; _type: 'reference' }
  alt?: string
  caption?: string
}

// Define type for Portable Text content
export interface PortableTextBlock {
  _key: string
  _type: string
  children?: Array<{
    _key: string
    _type: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    [key: string]: unknown
  }>
  style?: string
  level?: number
}

// Conditional client creation - handles missing Sanity dependencies
let client: unknown = null;
let builder: unknown = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createClient } = require('next-sanity');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const imageUrlBuilder = require('@sanity/image-url');

  client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
  });

  builder = imageUrlBuilder(client);
} catch (error) {
  console.warn('Sanity not configured - using fallback functions');
}

export function urlFor(source: SanityImage | SanityImageAsset | { asset: SanityImageAsset }) {
  if (!builder) {
    // Return a fallback URL builder
    return {
      url: () => '',
      width: () => ({ url: () => '' }),
      height: () => ({ url: () => '' }),
    };
  }
  return (builder as any).image(source);
}

// Blog post type
export interface BlogPost {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  author: {
    name: string
    image?: SanityImage
  }
  category: string
  tags: string[]
  featuredImage?: SanityImage
  publishedAt: string
  status: 'draft' | 'published' | 'scheduled'
  featured: boolean
  seo: {
    metaTitle?: string
    metaDescription?: string
  }
}

// Case study type
export interface CaseStudy {
  _id: string
  _createdAt: string
  _updatedAt: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    leadIncrease: string
    revenueIncrease: string
    timeSaved: string
    roi: string
  }
  testimonial: string
  clientName: string
  clientRole: string
  image?: SanityImage
  featured: boolean
}

// Homepage content type
export interface HomepageContent {
  _id: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  ctaPrimary: string
  ctaSecondary: string
  stats: {
    revenue: { value: string; description: string }
    leads: { value: string; description: string }
    time: { value: string; description: string }
    roi: { value: string; description: string }
  }
}

// GROQ queries
export const queries = {
  allBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    author->{name, image},
    category,
    tags,
    featuredImage,
    publishedAt,
    status,
    featured,
    seo
  }`,

  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    content,
    author->{name, image},
    category,
    tags,
    featuredImage,
    publishedAt,
    status,
    featured,
    seo
  }`,

  publishedBlogPosts: `*[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    author->{name, image},
    category,
    tags,
    featuredImage,
    publishedAt,
    featured,
    seo
  }`,

  allCaseStudies: `*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    company,
    industry,
    challenge,
    solution,
    results,
    testimonial,
    clientName,
    clientRole,
    image,
    featured
  }`,

  homepageContent: `*[_type == "homepageContent"][0] {
    _id,
    heroTitle,
    heroSubtitle,
    heroDescription,
    ctaPrimary,
    ctaSecondary,
    stats
  }`,
}

// Helper functions for data fetching
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!client) return [];
  try {
    return (client as any).fetch(queries.allBlogPosts);
  } catch {
    return [];
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  if (!client) return [];
  try {
    return (client as any).fetch(queries.publishedBlogPosts);
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  try {
    return (client as any).fetch(queries.blogPostBySlug, { slug });
  } catch {
    return null;
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!client) return [];
  try {
    return (client as any).fetch(queries.allCaseStudies);
  } catch {
    return [];
  }
}

export async function getHomepageContent(): Promise<HomepageContent | null> {
  if (!client) return null;
  try {
    return (client as any).fetch(queries.homepageContent);
  } catch {
    return null;
  }
}
