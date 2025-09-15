import type { Entry } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

// --- New Personalization Interfaces ---
export interface PersonalisationRule {
  when: Record<string, string>; // e.g., { 'geo.suburb': 'Mapperley', 'time.range': '18:00-22:00' }
  use: Record<string, string>; // e.g., { 'hero': 'mapperleyHero', 'cta': 'bookToday' }
}

export interface PersonalisationFallback {
  [key: string]: string; // e.g., { 'hero': 'defaultHero', 'cta': 'book', 'proof': 'generic' }
}

export interface PersonalisationRules {
  rules: PersonalisationRule[];
  fallback: PersonalisationFallback;
}
// --- End New Personalization Interfaces ---

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
    // New fields for personalization
    tokens?: Record<string, string>; // e.g., { 'defaultHero': 'hero1', 'mapperleyHero': 'hero2' }
    personalisationRules?: PersonalisationRules;
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
    // New fields for personalization
    tokens?: Record<string, string>;
    personalisationRules?: PersonalisationRules;
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
