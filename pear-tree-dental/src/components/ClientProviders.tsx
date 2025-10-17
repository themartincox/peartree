"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { PosthogProvider } from "@/app/providers/PosthogProvider";

// Defer client-only provider to browser (ok here because this file is client)
const TrackingProvider = dynamic(() => import("@/components/cohort/TrackingProvider"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <PosthogProvider />
      <TrackingProvider>{children}</TrackingProvider>
    </>
  );
}
