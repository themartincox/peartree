import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN, // Only needed for mutations
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
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
  content: any[] // Portable Text
  author: {
    name: string
    image?: any
  }
  category: string
  tags: string[]
  featuredImage?: any
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
  image?: any
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
  // Blog posts
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

  // Case studies
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

  // Homepage content
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
  return client.fetch(queries.allBlogPosts)
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(queries.publishedBlogPosts)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(queries.blogPostBySlug, { slug })
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(queries.allCaseStudies)
}

export async function getHomepageContent(): Promise<HomepageContent | null> {
  return client.fetch(queries.homepageContent)
}
