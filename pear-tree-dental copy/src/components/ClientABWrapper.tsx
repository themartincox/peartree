"use client";

import { useEffect, useState } from "react";
import WelcomeScreenVariantB from "./WelcomeScreenVariantB";

type Variant = "A" | "B";

function chooseVariant(): Variant {
  try {
    const key = "ab_variant";
    const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    if (existing === "A" || existing === "B") return existing as Variant;
    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    window.localStorage.setItem(key, variant);
    return variant;
  } catch {
    return Math.random() < 0.5 ? "A" : "B";
  }
}

export default function ClientABWrapper() {
  const [variant, setVariant] = useState<Variant>("A");

  useEffect(() => {
    setVariant(chooseVariant());
  }, []);

  // Only render the overlay for variant B. Do not wrap children or add spacers.
  if (variant === "B") {
    return <WelcomeScreenVariantB />;
  }
  return null;
}
