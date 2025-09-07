// src/lib/indexing.ts
import { INDEX_PRIORITY_SERVICES, INDEX_ALLOWLIST_SUBURBS, INDEX_MIN_WORDS, INDEX_REQUIRE_LOCAL_PROOF } from '@/config/indexing'
import {
  extractTextFromRichText,
  replacePlaceholdersInRichText,
  getEntryField
} from '@/lib/contentful'
import {
  ServiceEntry,
  LocationEntry,
  EntryLike
} from '@/types/contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'

export type IndexDecision = {
  indexable: boolean
  reasons: string[]
}

export function wordCountFromRichText(doc: RichTextDocument | null | undefined): number {
  if (!doc) return 0
  const text = extractTextFromRichText(doc) || ''
  return text.split(/\s+/).filter(Boolean).length
}

export function hasLocalProof(location: LocationEntry | EntryLike): boolean {
  const testimonials = getEntryField<any[]>(location, 'localTestimonials') || []
  const uniqueLocalContent = getEntryField<RichTextDocument>(location, 'uniqueLocalContent')
  return (Array.isArray(testimonials) && testimonials.length > 0) || !!uniqueLocalContent
}

/**
 * Determine if a service/suburb page should be indexable.
 * We allow the caller to pass a "filledBody" (placeholders replaced) or "rawBody" (template doc) to count words.
 */
export function decideIndexable(opts: {
  service: ServiceEntry | EntryLike
  location: LocationEntry | EntryLike
  filledBody?: RichTextDocument
  rawBody?: RichTextDocument
  replaceCtx?: { service: string; suburb: string; city?: string }
}): IndexDecision {
  const reasons: string[] = []
  const serviceSlug = (getEntryField<string>(opts.service, 'slug') || '').toLowerCase()
  const suburbSlug = (getEntryField<string>(opts.location, 'slug') || '').toLowerCase()

  // Rule 1: service priority
  if (!INDEX_PRIORITY_SERVICES.includes(serviceSlug)) {
    reasons.push(`service '${serviceSlug}' not in INDEX_PRIORITY_SERVICES`)
  }

  // Rule 2: suburb allowlist
  if (!INDEX_ALLOWLIST_SUBURBS.includes(suburbSlug)) {
    reasons.push(`suburb '${suburbSlug}' not in INDEX_ALLOWLIST_SUBURBS`)
  }

  // Rule 3: content length
  let words = 0
  if (opts.filledBody) {
    words = wordCountFromRichText(opts.filledBody)
  } else if (opts.rawBody) {
    // Conservative count using raw template with tokens replaced (gives a better estimate)
    const body = opts.replaceCtx ? replacePlaceholdersInRichText(opts.rawBody, opts.replaceCtx) : opts.rawBody
    words = wordCountFromRichText(body)
  }
  if (words < INDEX_MIN_WORDS) {
    reasons.push(`content too short (${words} < ${INDEX_MIN_WORDS})`)
  }

  // Rule 4: optional local proof
  if (INDEX_REQUIRE_LOCAL_PROOF && !hasLocalProof(opts.location)) {
    reasons.push('missing local proof')
  }

  const indexable = reasons.length === 0
  return { indexable, reasons }
}
