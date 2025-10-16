import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { renderTreatmentFallback } from "@/lib/service-fallbacks";
import { resolveCategorySlugAlias } from "@/lib/services";

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ category: string; treatment: string[] }> }): Promise<Metadata> {
  const { category, treatment } = await params;
  const treatmentPath = Array.isArray(treatment) ? treatment.join("/") : String(treatment);
  // Fallback pages provide their own metadata; return a conservative default here
  return {
    title: `${treatmentPath.replace(/\//g, " ")}: ${category} | Pear Tree Dental`,
    description: "Learn about our cosmetic and restorative treatment options at Pear Tree Dental.",
  };
}

export default async function NestedTreatmentPage({ params }: { params: Promise<{ category: string; treatment: string[] }> }) {
  const { category, treatment } = await params;
  const treatmentPath = Array.isArray(treatment) ? treatment.join("/") : String(treatment);

  // Try direct fallback first
  const fallback = await renderTreatmentFallback(category, treatmentPath);
  if (fallback) return fallback;

  // Try resolving category alias (e.g., cosmetic -> cosmetic-dentistry)
  const alias = await resolveCategorySlugAlias(category);
  if (alias && alias !== category) {
    const aliasFallback = await renderTreatmentFallback(alias, treatmentPath);
    if (aliasFallback) return aliasFallback;
    // If there is no fallback, keep canonical category in URL to avoid duplicate paths
    redirect(`/services/${alias}/${treatmentPath}`);
  }

  // Nothing matched: 404
  notFound();
}

