// /types/contentful.ts
import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";

export interface IBlogTemplateFields {
  internalTitle: string;
  slug: string;
  seoTitleTemplate: string;
  seoDescriptionTemplate: string;
  h1Template: string;
  bodyContent: Document;
}

export interface IServiceDataFields {
  serviceName: string;
  slug: string;
  description: string;
  priority?: boolean;
  popularity?: number;
}

export interface ITestimonialFields {
  quote: Document;
  author: string;
  rating?: number; // 1..5
}

export type LocationTier = 'major' | 'secondary' | 'tertiary';

export interface ILocationDataFields {
  suburb: string; // e.g., Burton Joyce
  city: string;   // e.g., Nottingham
  slug: string;
  tier?: LocationTier;
  population?: number;
  uniqueLocalContent?: Document;
  localTestimonials?: Entry<ITestimonialFields>[];
}

export interface PageGenerationStats {
  totalPossible: number;
  priorityGenerated: number;
  secondaryGenerated: number;
  generationStrategy: 'priority' | 'full' | 'staged';
}
