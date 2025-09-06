import type { Document } from "@contentful/rich-text-types";
import type { Entry, Asset } from "contentful";

// Blog Template
export interface IBlogTemplateFields {
  internalTitle: string;
  slug: string;
  seoTitleTemplate: string;
  seoDescriptionTemplate: string;
  h1Template: string;
  bodyContent: Document;
  tokens?: Record<string, any>;
  keyTakeaways?: Document;
  internalLinkSlots?: string[];
  schemaType?: string;
  layoutType?: string;
  defaultCta?: Entry<ICTAFields>;
  faqs?: Entry<IFAQFields>[];
}

// Component - Author
export interface IComponentAuthorFields {
  internalName: string;
  name: string;
  avatar?: Asset;
}

// Component - Rich Image
export interface IComponentRichImageFields {
  internalName: string;
  image: Asset;
  caption?: string;
  fullWidth?: boolean;
}

// Component - SEO
export interface IComponentSeoFields {
  internalName: string;
  pageTitle: string;
  pageDescription: string;
  canonicalUrl?: string;
  nofollow?: boolean;
  noindex?: boolean;
  shareImages?: Asset[];
}

// CTA
export interface ICTAFields {
  label: string;
  destinationUrl: string;
}

// FAQ
export interface IFAQFields {
  question: string;
  answer: Document;
}

// Location Data
export interface ILocationDataFields {
  suburb: string;
  city: string;
  slug: string;
  uniqueLocalContent?: Document;
  localTestimonials?: Entry<ITestimonialFields>[];
}

// Blog Post
export interface IBlogPostFields {
  internalName: string;
  seoFields?: Entry<IComponentSeoFields>;
  slug: string;
  author?: Entry<IComponentAuthorFields>;
  publishedDate: string;
  title: string;
  subtitle?: string;
  featuredImage?: Asset;
  content: Document;
  relatedBlogPosts?: Entry<IBlogPostFields>[];
}

// Landing Page
export interface ILandingPageFields {
  internalName: string;
  seoFields?: Entry<IComponentSeoFields>;
  featuredBlogPost?: Entry<IBlogPostFields>;
}

// Service Data
export interface IServiceDataFields {
  serviceName: string;
  slug: string;
  description: string;
}

// Testimonial
export interface ITestimonialFields {
  quote: Document;
  author: string;
}

// Helper types for token replacement
export interface PageGenerationStats {
  totalPossible: number;
  priorityGenerated: number;
  secondaryGenerated: number;
  generationStrategy: 'priority' | 'full' | 'staged';
}
