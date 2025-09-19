"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

// Defer client-only provider to the browser
const TrackingProvider = dynamic(
  () => import("@/components/cohort/TrackingProvider"),
  { ssr: false }
);

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <TrackingProvider>{children}</TrackingProvider>;
}