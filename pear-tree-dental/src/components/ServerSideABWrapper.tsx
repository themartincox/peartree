import type { Variant } from "@/lib/ab-testing";
import ClientSideAnalytics from "./ClientSideAnalytics";
import WelcomeScreenVariantB from "./WelcomeScreenVariantB";
import WelcomeScreenVariantC from "./WelcomeScreenVariantC";

interface ServerSideABWrapperProps {
  children: React.ReactNode;
  variant: Variant;
}

export default function ServerSideABWrapper({
  children,
  variant,
}: ServerSideABWrapperProps) {
//    Add variant-specific CSS classes to the wrapper
  const wrapperClass = `ab-variant-${variant.toLowerCase()}`;

  return (
    <div className={wrapperClass} data-ab-variant={variant}>
      {/* Client-side analytics tracking */}
      <ClientSideAnalytics variant={variant} />

      {/* Variant A: Standard homepage (no modifications) */}
      {variant === "A" && <div id="main-content">{children}</div>}

      {/* Variant B: Animated welcome screen */}
      {variant === "B" && (
        <>
          <WelcomeScreenVariantB />
          <div id="main-content" className="ab-variant-b-content">
            {children}
          </div>
        </>
      )}

      {/* Variant C: Welcome with background image */}
      {variant === "C" && (
        <>
          <WelcomeScreenVariantC />
          <div id="main-content" className="ab-variant-c-content">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
