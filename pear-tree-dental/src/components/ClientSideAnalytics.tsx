"use client";

import { useEffect } from "react";

interface ClientSideAnalyticsProps {
  variant?: string;
}

export default function ClientSideAnalytics({
  variant,
}: ClientSideAnalyticsProps) {
  useEffect(() => {
     Initialize any client-side analytics here
    if (typeof window !== "undefined" && window.gtag) {
       Track A/B test variant if provided
      if (variant) {
        window.gtag("event", "ab_test_variant_view", {
          variant: variant,
        });
      }
      console.log(
        "Client-side analytics initialized",
        variant ? `with variant ${variant}` : "",
      );
    }
  }, [variant]);

  return null;
}
