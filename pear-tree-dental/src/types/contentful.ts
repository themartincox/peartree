import type { Entry } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

// Basic Contentful entry interfaces
export interface ServiceEntry extends Entry<any> {
  fields: {
    slug: string;
    serviceName: string;
    description?: string;
    content?: Document;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
}

export interface LocationEntry extends Entry<any> {
  fields: {
    slug: string;
    suburb: string;
    city: string;
    region?: string;
    postcode?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    localTestimonials?: Entry<any>[];
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
}

export interface BlogTemplateEntry extends Entry<any> {
  fields: {
    title: string;
    seoTitleTemplate: string;
    seoDescriptionTemplate: string;
    bodyContent: Document;
  };
}

export interface BlogPostEntry extends Entry<any> {
  fields: {
    slug: string;
    title: string;
    publishDate: string;
    excerpt?: string;
    content: Document;
    featuredImage?: any;
    author?: Entry<any>;
  };
}

export interface TestimonialEntry extends Entry<any> {
  fields: {
    text: string;
    author: string;
    rating?: number;
    service?: ServiceEntry;
    location?: LocationEntry;
  };
}

export interface FAQEntry extends Entry<any> {
  fields: {
    question: string;
    answer: Document;
    service?: ServiceEntry;
    location?: LocationEntry;
  };
}

export interface CTAEntry extends Entry<any> {
  fields: {
    title: string;
    subtitle?: string;
    buttonText: string;
    buttonUrl: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
  };
}

export interface SEOEntry extends Entry<any> {
  fields: {
    title: string;
    description: string;
    keywords: string[];
    noIndex?: boolean;
    noFollow?: boolean;
    canonicalUrl?: string;
    ogImage?: any;
  };
}

export interface AuthorEntry extends Entry<any> {
  fields: {
    name: string;
    title?: string;
    bio?: Document;
    avatar?: any;
  };
}
