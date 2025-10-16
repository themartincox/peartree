/**
 * Single source of truth for prices & practice info (from repo data).
 * This module intentionally avoids Contentful; use it everywhere for price/hour display.
 */
import { getTreatmentPrice } from '@/data/pricing';
import * as practiceInfoModule from '@/data/practiceInfo';

type AnyRecord = Record<string, any>;
const practiceInfo: AnyRecord =
  (practiceInfoModule as AnyRecord).default ?? (practiceInfoModule as AnyRecord);

// Map service slugs to the treatment names used in pricing.ts
const SERVICE_NAME_MAP: Record<string, string> = {
  'dental-implants': 'Single Dental Implant',
  'composite-bonding': 'Composite Edge Bonding',
  'teeth-whitening': 'Teeth Whitening',
  'clearcorrect': 'ClearCorrect Clear Aligners',
  'dental-crowns': 'Dental Crowns',
  'dental-bridges': 'Ceramic Bridge',
  'dentures': 'Acrylic Partial Dentures',
  'childrens-dentistry': 'Routine Exam',
  'emergency-dentistry': 'Emergency Appointment'
};

export function getFromPriceDisplayText(serviceSlug: string): string | null {
  const treatmentName = SERVICE_NAME_MAP[serviceSlug];
  if (!treatmentName) return null;

  const price: any = getTreatmentPrice(treatmentName);
  if (!price) return null;

  // Support common shapes from pricing.ts
  if (typeof price === 'string') return price;             // e.g. "From £495"
  if (typeof price === 'number') return `From £${price}`;  // numeric fallback
  if ((price as any).fromDisplay) return (price as any).fromDisplay;
  if ((price as any).display) return (price as any).display;
  if ((price as any).from) return `From £${(price as any).from}`;

  return null;
}

export function getPracticeInfo(locationSlug: string): any | null {
  if (!practiceInfo) return null;
  // Expect practiceInfo[locationSlug] structure exported from src/data/practiceInfo.ts
  return (practiceInfo as AnyRecord)[locationSlug] ?? (practiceInfo as AnyRecord).default ?? null;
}
