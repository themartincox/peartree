/**
 * Utility functions to get pricing and practice info from repo data.
 */
import { getTreatmentPrice } from '@/data/pricing';
import practiceInfo from '@/data/practiceInfo';

// Map service slugs to treatment names used in pricing data
const SERVICE_NAME_MAP: Record<string, string> = {
  'dental-implants': 'Single Dental Implant',
  'composite-bonding': 'Composite Bonding',
  'teeth-whitening': 'Teeth Whitening',
  'clearcorrect': 'ClearCorrect',
  'dental-crowns': 'Dental Crowns',
  'childrens-dentistry': 'Routine Exam',
  'emergency-dentistry': 'Emergency Appointment'
};

export function getFromPriceDisplayText(serviceSlug: string): string | null {
  const treatmentName = SERVICE_NAME_MAP[serviceSlug];
  if (!treatmentName) return null;
  const price = getTreatmentPrice(treatmentName);
  return price ?? null;
}

export function getPracticeInfo(locationSlug: string) {
  // For now we return the central practiceInfo for all locations.
  return practiceInfo;
}
