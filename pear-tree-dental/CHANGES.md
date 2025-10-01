Project: Pear Tree Dental — Notable Changes
Date: 2025-10-01

Summary of targeted, low‑risk updates to routing, navigation, and fallbacks. These changes are intended to canonicalize cosmetic routes, fix whitening sub‑route links, and keep legacy pages working while CMS content grows.

Routing (next.config.js)
- Added permanent redirects to canonicalize cosmetic category and normalize whitening subpaths:
  - `/services/cosmetic` → `/services/cosmetic-dentistry`
  - `/services/cosmetic/:slug*` → `/services/cosmetic-dentistry/:slug*`
  - `/services/:category/teeth-whitening-enlighten` → `/services/:category/teeth-whitening/enlighten`
  - `/services/:category/teeth-whitening-boutique` → `/services/:category/teeth-whitening/boutique`

Navigation (src/components/ServiceNavigation.tsx)
- Updated “Cosmetic Dentistry” link to point at `/services/cosmetic-dentistry` (was `/services/cosmetic`).

Legacy Fallbacks (src/lib/service-fallbacks.ts)
- Registered nested whitening slugs used by CMS alongside existing hyphen forms:
  - `teeth-whitening/enlighten`
  - `teeth-whitening/boutique`

Notes / Context
- These are surgical changes; no global rewiring of the services system.
- Goal: avoid duplicate cosmetic routes, ensure whitening deep‑links work from CMS, and preserve legacy pages as safe fallbacks.
- Next logical steps (optional):
  - Audit other service categories to pick canonicals and add matching redirects.
  - Normalize internal links in content/CMS to the canonical slugs.
  - Confirm CMS slugs and parent relations so more pages render dynamically instead of via fallback.

