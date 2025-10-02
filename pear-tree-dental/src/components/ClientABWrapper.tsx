"use client";

import { useEffect, useMemo, useState } from "react";
import ClientSideAnalytics from "./ClientSideAnalytics";
import WelcomeScreenVariantB from "./WelcomeScreenVariantB";

type Variant = "A" | "B";

type Props = {
  children: React.ReactNode;
  // Optional override for testing
  initialVariant?: Variant;
};

function chooseVariant(): Variant {
  // Cookieless assignment: prefer localStorage, otherwise random and persist
  try {
    const key = "ab_variant";
    const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    if (existing === "A" || existing === "B") return existing as Variant;
    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    window.localStorage.setItem(key, variant);
    return variant;
  } catch {
    // If storage unavailable, fall back to a per-session choice
    return Math.random() < 0.5 ? "A" : "B";
  }
}

export default function ClientABWrapper({ children, initialVariant }: Props) {
  const [variant, setVariant] = useState<Variant>(initialVariant || "A");

  useEffect(() => {
    if (!initialVariant) {
      setVariant(chooseVariant());
    }
  }, [initialVariant]);

  const wrapperClass = useMemo(() => `ab-variant-${variant.toLowerCase()}`, [variant]);

  return (
    <div className={wrapperClass} data-ab-variant={variant}>
      <ClientSideAnalytics variant={variant} />

      {variant === "A" && <div id="main-content">{children}</div>}

      {variant === "B" && (
        <>
          <WelcomeScreenVariantB />
          <div id="main-content" className="ab-variant-b-content">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

