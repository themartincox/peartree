"use client";

import dynamic from "next/dynamic";

const LocationDetection = dynamic(() => import("@/components/LocationDetection"), {
  ssr: false,
});

export default function LazyLocationDetection() {
  return <LocationDetection />;
}