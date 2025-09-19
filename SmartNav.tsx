"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function SmartNav() {
  const navRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect overflow and toggle compact mode
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const check = () => {
      requestAnimationFrame(() => {
        const isHidden = el.offsetParent === null || el.clientWidth === 0;
        if (isHidden) {
          // Full nav is hidden (e.g., below md). Force compact.
          setCompact(true);
          return;
        }
        const overflows = el.scrollWidth > el.clientWidth;
        setCompact(overflows);
      });
    };

    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    check();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, []);

  // Close dropdown when switching back to non-compact layout
  useEffect(() => {
    if (!compact && menuOpen) setMenuOpen(false);
  }, [compact, menuOpen]);

  return (
    <header className="relative z-50 border-b border-gray-100 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between min-w-0">
          {/* Brand */}
          <Link href="/" className="shrink-0 font-semibold text-pear-primary">
            Pear Tree Dental
          </Link>

          {/* Full menu (only when it fits) */}
          {!compact && (
            <nav
              id="navigation"
              ref={navRef}
              className="mx-4 hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex"
              aria-label="Primary"
            >
              <NavLinks />
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/book"
              className="hidden rounded-lg bg-pear-primary px-3 py-1.5 text-sm font-medium text-white md:inline-block"
            >
              Book
            </Link>

            {/* Compact trigger (shows when it doesn't fit) */}
            {compact && (
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 md:hidden"
                aria-label="Toggle menu"
                aria-controls="navigation"
                aria-expanded={menuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Compact dropdown */}
        {compact && menuOpen && (
          <div className="md:hidden">
            <nav
              id="navigation"
              className="mt-2 grid grid-cols-1 gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
              aria-label="Primary"
              role="menu"
            >
              <NavLinks itemClass="px-3 py-2 rounded-lg hover:bg-gray-50" />
              <Link
                href="/book"
                className="mt-1 rounded-lg bg-pear-primary px-3 py-2 text-center font-medium text-white"
                role="menuitem"
              >
                Book
              </Link>
            </nav>
          </div>
        )}

        {/* Invisible measure row (optional):
            If you ever need more robust measurement, you can render a visually-hidden
            copy of NavLinks here with the same styles and keep navRef on that.
        */}
      </div>
    </header>
  );
}

function NavLinks({
  itemClass = "text-sm text-gray-700 hover:text-pear-primary",
}: {
  itemClass?: string;
}) {
  return (
    <>
      <Link href="/about" className={itemClass} role="menuitem">About</Link>
      <Link href="/treatments" className={itemClass} role="menuitem">Treatments</Link>
      <Link href="/fees" className={itemClass} role="menuitem">Fees</Link>
      <Link href="/membership" className={itemClass} role="menuitem">Membership</Link>
      <Link href="/blog" className={itemClass} role="menuitem">Blog</Link>
      <Link href="/contact" className={itemClass} role="menuitem">Contact</Link>
    </>
  );
}