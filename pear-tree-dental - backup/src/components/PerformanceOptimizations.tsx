// PerformanceOptimizations.tsx - Critical performance optimizations component
import { Suspense } from "react";

const PerformanceOptimizations = () => {
  return (
    <>
      {/* Critical CSS inlined for above-the-fold content */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Critical styles for above-the-fold content */
        .hero-critical {
          min-height: 500px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }

        /* Brand logo critical styles */
        .brand-logo {
          font-family: var(--font-cormorant), serif;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        /* Button critical styles */
        .btn-critical {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s ease-in-out;
        }

        /* Navigation critical styles */
        .nav-critical {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }

        /* Layout stability */
        .layout-stable {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Prevent layout shift */
        .prevent-cls {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        /* Font loading optimization */
        .font-loading {
          font-display: swap;
        }
      `}} />

      {/* Resource hints for non-critical resources */}
      <link rel="prefetch" href="/images/cosmetic-dentistry.webp" as="image" type="image/webp" />
      <link rel="prefetch" href="/images/implant-dentistry.webp" as="image" type="image/webp" />
      <link rel="prefetch" href="/images/orthodontics.webp" as="image" type="image/webp" />

      {/* Preload key navigation assets */}
      <link rel="modulepreload" href="/_next/static/chunks/pages/_app.js" />

      {/* Service worker registration for caching */}
      {typeof window !== 'undefined' && (
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}} />
      )}
    </>
  );
};

// Lazy loading wrapper for non-critical components
export const LazyComponentWrapper = ({
  children,
  fallback = <div className="animate-pulse bg-gray-100 h-20 rounded" />
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

export default PerformanceOptimizations;
