import Link from "next/link";

// Server-rendered navigation shell: pure HTML/CSS, no client hooks.
// Interactive behavior (hamburger toggle, etc.) is attached by NavEnhancer.
export default function NavShell() {
  return (
    <header className="relative z-50 border-b border-gray-100 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between min-w-0">
          {/* Brand */}
          <Link href="/" className="shrink-0 font-semibold text-pear-primary brand-logo tracking-brand" aria-label="Pear Tree Dental home">
            PEAR TREE <span className="ml-2">DENTAL</span>
          </Link>

          {/* Full menu (md and up) */}
          <nav
            id="nav-desktop"
            className="mx-4 hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex"
            aria-label="Primary"
          >
            <NavLinks itemClass="text-sm text-gray-700 hover:text-pear-primary" />
          </nav>

          {/* Right actions + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/book"
              className="hidden rounded-lg bg-pear-primary px-3 py-1.5 text-sm font-medium text-white md:inline-block"
            >
              Book
            </Link>
            <button
              id="nav-toggle"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 md:hidden"
              aria-label="Toggle menu"
              aria-controls="nav-mobile"
              aria-expanded="false"
              data-pt-event="nav_toggle"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (hidden by default, md hidden always) */}
        <div className="md:hidden">
          <nav
            id="nav-mobile"
            className="mt-2 grid grid-cols-1 gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-lg hidden"
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
      </div>
    </header>
  );
}

function NavLinks({ itemClass = "" }: { itemClass?: string }) {
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

