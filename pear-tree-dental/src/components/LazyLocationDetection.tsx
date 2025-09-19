"use client";

import dynamic from "next/dynamic";

// Load after hydration; doesn't block LCP
const LocationDetection = dynamic(() => import("@/components/LocationDetection"), {
  ssr: false,
});

export default function LazyLocationDetection() {
  return <LocationDetection />;
}