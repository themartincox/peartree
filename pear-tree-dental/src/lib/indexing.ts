// src/lib/indexing.ts
import { Document } from '@contentful/rich-text-types';
import { extractTextFromRichText } from './contentful';
import { INDEX_MIN_WORDS, INDEX_PRIORITY_SERVICES, INDEX_ALLOWLIST_SUBURBS } from '@/config/indexing';

// Interfaces for indexability checking
interface IndexabilityResult {
  indexable: boolean;
  reasons: string[];
}

interface IndexabilityParams {
  service: any;
  location: any;
  rawBody?: Document | null;
  filledBody?: Document | null;
  replaceCtx?: Record<string, string>;
}

/**
 * Decides whether a service/suburb page should be indexable based on
 * several factors:
 * - Is the service in the priority list?
 * - Is the suburb in the allowlist?
 * - Does the page have enough content?
 * - Does the page have local testimonials?
 */
export function decideIndexable(params: IndexabilityParams): IndexabilityResult {
  const { service, location, rawBody, filledBody, replaceCtx } = params;

  const reasons: string[] = [];
  let indexable = true;

  // Check if service is in priority list
  const serviceSlug = service?.fields?.slug;
  if (!serviceSlug) {
    indexable = false;
    reasons.push('Service slug missing');
  } else if (!INDEX_PRIORITY_SERVICES.includes(serviceSlug.toLowerCase())) {
    indexable = false;
    reasons.push(`Service "${serviceSlug}" not in priority list`);
  }

  // Check if suburb is in allowlist
  const locationSlug = location?.fields?.slug;
  if (!locationSlug) {
    indexable = false;
    reasons.push('Location slug missing');
  } else if (!INDEX_ALLOWLIST_SUBURBS.includes(locationSlug.toLowerCase())) {
    indexable = false;
    reasons.push(`Suburb "${locationSlug}" not in allowlist`);
  }

  // Check if page has enough content
  if (filledBody) {
    const text = extractTextFromRichText(filledBody);
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    if (wordCount < INDEX_MIN_WORDS) {
      indexable = false;
      reasons.push(`Insufficient content: ${wordCount} words (min: ${INDEX_MIN_WORDS})`);
    }
  } else if (rawBody && replaceCtx) {
    // Rough estimation of word count from raw template
    // Note: This is not 100% accurate but good enough for quick checks
    const rawText = extractTextFromRichText(rawBody);

    // Replace tokens with realistic content length
    let estimatedText = rawText;
    Object.entries(replaceCtx).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'gi');
      estimatedText = estimatedText.replace(regex, value);
    });

    const wordCount = estimatedText.split(/\s+/).filter(Boolean).length;

    if (wordCount < INDEX_MIN_WORDS) {
      indexable = false;
      reasons.push(`Estimated insufficient content: ~${wordCount} words (min: ${INDEX_MIN_WORDS})`);
    }
  }

  // Check for local testimonials if required
  if (process.env.INDEX_REQUIRE_LOCAL_PROOF === 'true') {
    const hasLocalTestimonials = location?.fields?.localTestimonials?.length > 0;
    if (!hasLocalTestimonials) {
      indexable = false;
      reasons.push('No local testimonials/proof available');
    }
  }

  return { indexable, reasons };
}
