#!/usr/bin/env bash
# fix-common-build-issues.sh
# Purpose: find & fix the TSX build breakers you've been hitting.
# Safe on macOS (BSD sed) and Linux (GNU sed).

set -euo pipefail

ROOT_DIR="/Users/Martin_1/Desktop/pear-tree-dental"
cd "$ROOT_DIR"

# Detect GNU vs BSD sed
if sed --version >/dev/null 2>&1; then
  SED_INPLACE=(-i)
else
  SED_INPLACE=(-i '')
fi

MODE="check"
NORMALIZE_LAYOUT="no"
HEURISTIC="no"

for arg in "$@"; do
  case "$arg" in
    --check) MODE="check" ;;
    --fix) MODE="fix" ;;
    --normalize-layout) NORMALIZE_LAYOUT="yes" ;;
    --heuristic) HEURISTIC="yes" ;;
    *)
      echo "Unknown arg: $arg"
      echo "Usage: $0 [--check|--fix] [--heuristic] [--normalize-layout]"
      exit 1
      ;;
  esac
done

echo "Mode               : $MODE"
echo "Heuristic scanning : $HEURISTIC"
echo "Normalize layout   : $NORMALIZE_LAYOUT"
echo "Repo               : $(pwd)"
echo

# Helper: list TSX files
TSX_FILES=$(git ls-files '*.tsx' 2>/dev/null || true)
if [ -z "$TSX_FILES" ]; then
  TSX_FILES=$(find src -type f -name '*.tsx' 2>/dev/null || true)
fi

###############################################
# 1) Comment stray "note" lines by exact text #
###############################################
read -r -d '' STRAY_PATTERNS << 'EOF' || true
Optimize Google Fonts loading with font-display: swap
Critical components - loaded immediately
Import welcoming loaders
Non-critical components - loaded dynamically with loading states
Simple password check (in production, use proper authentication)
Simple password check - replace with proper auth in production
Load jobs from localStorage on component mount
For now, return a simple blog post page since this appears to be placeholder content
Get membership details from URL parameters
Personal Details
Partner Details (for family plans)
Format treatments for display
EOF

echo "Scanning for known stray note lines…"
FOUND_ANY=false
IFS=\n'
for PATTERN in $STRAY_PATTERNS; do
  [ -z "$PATTERN" ] && continue
  # Find lines that start with the pattern and are not already commented
  MATCHES=$(grep -RIn --include="*.tsx" -E "^[[:space:]]*${PATTERN//\?/\\?}" src 2>/dev/null || true)
  if [ -n "$MATCHES" ]; then
    FOUND_ANY=true
    echo "→ Matches for: ${PATTERN}"
    echo "$MATCHES" | sed -E 's/^/   /'
    if [ "$MODE" = "fix" ]; then
      echo "   Commenting these lines…"
      # Escape regex metachars
      ESCAPED=$(printf '%s\n' "$PATTERN" | sed 's/[.[\*^$()+?{}|]/\\&/g')
      # Comment the line, preserving indentation
      while IFS= read -r line; do
        FILE=${line%%:*}
        sed "${SED_INPLACE[@]}" -E "s/^([[:space:]]*)(${ESCAPED})(.*)$/\1\/\/ \2\3/" "$FILE"
      done <<< "$MATCHES"
    fi
    echo
  fi
done

if [ "$FOUND_ANY" = false ]; then
  echo "No known note lines found ✅"
  echo
fi

###########################################################
# 2) Fix extra parentheses around benefits/risks props    #
###########################################################
echo "Fixing benefits/risks prop parentheses (if any)…"
BEN=( $(grep -RIl --include="*.tsx" "benefits={(\[" src 2>/dev/null || true) )
RIS=( $(grep -RIl --include="*.tsx" "risks={(\[" src 2>/dev/null || true) )
if [ ${#BEN[@]} -gt 0 ] || [ ${#RIS[@]} -gt 0 ]; then
  echo "→ Affected files:"
  printf "   %s\n" "${BEN[@]}" "${RIS[@]}" | sed '/^$/d' | sort -u
  if [ "$MODE" = "fix" ]; then
    [ ${#BEN[@]} -gt 0 ] && printf "%s\n" "${BEN[@]}" | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/benefits={\(\[/benefits={\[/g' {}
    [ ${#RIS[@]} -gt 0 ] && printf "%s\n" "${RIS[@]}" | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/risks={\(\[/risks={\[/g' {}
    echo "   Done."
  fi
else
  echo "None found ✅"
fi
echo

########################################
# 3) Remove legacy JSX pragma          #
########################################
echo "Removing old JSX pragma if present…"
PRAGMA=( $(grep -RIl --include="*.tsx" "/\\*\\* @jsx React\\.createElement \\*/" src 2>/dev/null || true) )
if [ ${#PRAGMA[@]} -gt 0 ]; then
  printf "→ %s\n" "${PRAGMA[@]}" | sed -E 's/^/   /'
  if [ "$MODE" = "fix" ]; then
    printf "%s\n" "${PRAGMA[@]}" | xargs -I{} sed "${SED_INPLACE[@]}" -E '/\/\*\* @jsx React\.createElement \*\//d' {}
    echo "   Removed."
  fi
else
  echo "None found ✅"
fi
echo

#####################################################################
# 4) Optional heuristic: find/comment "naked English" statement lines
#####################################################################
if [ "$HEURISTIC" = "yes" ]; then
  echo "Heuristic scan for naked English lines (experimental)…"
  echo "Rules: start-of-line text, no < > quotes = : ; , () {} [], not already commented."
  echo

  # Print suspects
  SUSPECTS=$(awk '
    BEGIN{IGNORECASE=1}
    /\.tsx$/ {file=FILENAME}
    {
      # quick skips
      if ($0 ~ /^[[:space:]]*\/\//) next;                # already commented
      if ($0 ~ /^[[:space:]]*\/\*/) next;                # start of block comment
      if ($0 ~ /^[[:space:]]*(import|export|const|let|var|type|interface|function|class|return|if|for|while|switch|case|default|try|catch|finally|new)\b/) next;
      if ($0 ~ /[<>{}()=\[\]\'\"\`\;\:,]/) next;         # looks like code/JSX
      if ($0 ~ /^[[:space:]]*$/) next;                   # blank
      if ($0 ~ /^[[:space:]]*[A-Za-z0-9].*[A-Za-z0-9][[:space:]]*$/) {
        print FILENAME ":" NR ":" $0
      }
    }
  ' $(printf "%s\n" $TSX_FILES) 2>/dev/null || true)

  if [ -n "$SUSPECTS" ]; then
    echo "→ Heuristic suspects:"
    echo "$SUSPECTS" | sed -E 's/^/   /'
    echo
    if [ "$MODE" = "fix" ]; then
      echo "   Commenting heuristic suspects…"
      # For each suspect: comment that *exact* line number
      echo "$SUSPECTS" | while IFS= read -r line; do
        FILE=$(echo "$line" | cut -d: -f1)
        NUM=$(echo "$line" | cut -d: -f2)
        # prepend // to that specific line number
        # BSD/GNU sed compatible approach via temporary file
        awk -v n="$NUM" '{ if (NR==n) { sub(/^[ \t]*/, "&// "); print; } else print; }' "$FILE" > "$FILE.__tmp__"
        mv "$FILE.__tmp__" "$FILE"
      done
    fi
  else
    echo "No heuristic suspects found ✅"
  fi
  echo
fi

#####################################################
# 5) Optional: normalize src/app/layout.tsx content #
#####################################################
if [ "$MODE" = "fix" ] && [ "$NORMALIZE_LAYOUT" = "yes" ]; then
  echo "Normalizing src/app/layout.tsx to known-good version…"
  mkdir -p src/app
  cat > src/app/layout.tsx << 'EOF'
import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import LocationDetection from "@/components/LocationDetection";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import MedicalPracticeSchema from "@/components/seo/MedicalPracticeSchema";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import VoiceSearchSchema from "@/components/seo/VoiceSearchSchema";

// Optimize Google Fonts loading with font-display: swap
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peartree.dental"),
  title: {
    template: "%s | Pear Tree Dental - Private Dentist Nottingham",
    default:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
  },
  description:
    "Private dentist in Nottingham offering trusted family and cosmetic dental care. Modern treatments including dental implants, Invisalign, teeth whitening, and emergency care. NHS and private options with membership plans from £10.95/month. Book today.",
  keywords: [
    "private dentist Nottingham",
    "family dentist Nottingham",
    "cosmetic dentistry Nottingham",
    "dental implants Nottingham",
    "Invisalign Nottingham",
    "emergency dentist Nottingham",
    "private dental practice Nottingham",
    "NHS dentist Nottingham",
    "teeth whitening Nottingham",
    "dental membership plans",
    "dentist Burton Joyce",
    "dental practice Nottinghamshire",
    "root canal treatment",
    "dental hygienist Nottingham",
    "preventive dentistry",
    "oral health Nottingham",
  ],
  authors: [{ name: "Pear Tree Dental" }],
  creator: "Pear Tree Dental",
  publisher: "Pear Tree Dental",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://peartree.dental",
    siteName: "Pear Tree Dental",
    title:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
    description:
      "Private dentist in Nottingham offering trusted family and cosmetic dental care. Modern treatments including dental implants, Invisalign, teeth whitening, and emergency care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern dental clinic interior - Pear Tree Dental, Burton Joyce",
        type: "image/jpeg",
      },
      {
        url: "/social-image.jpg",
        width: 800,
        height: 600,
        alt: "Professional dental care at Pear Tree Dental",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PearTreeDental",
    creator: "@PearTreeDental",
    title:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
    description:
      "Private dentist in Nottingham offering trusted family and cosmetic dental care. NHS & private treatments, implants, Invisalign & emergency care.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for faster font loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect for critical font resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Preload critical images for LCP optimization */}
        <link rel="preload" as="image" href="/images/dental-practice-hero-burton-joyce.webp" />
        <link rel="preload" as="image" href="/images/general-dental-checkup.webp" />
        <link rel="preload" as="image" href="/images/cosmetic-dentistry-services.webp" />

        <link rel="canonical" href="https://peartree.dental" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#09394d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pear Tree Dental" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pear Tree Dental" />
        <meta name="msapplication-TileColor" content="#09394d" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="GB-NTT" />
        <meta name="geo.placename" content="Nottingham" />
        <meta name="geo.position" content="52.9769;-1.0085" />
        <meta name="ICBM" content="52.9769, -1.0085" />

        <meta name="business-hours" content="Monday-Thursday: 8:45AM-5:00PM, Friday: 8:00AM-3:30PM, Saturday-Sunday: Closed" />
        <meta name="payment-accepted" content="Cash, Credit Card, NHS, Private Insurance" />
        <meta name="rating" content="4.9" />
        <meta name="review-count" content="460" />
        <meta name="service-area" content="Burton Joyce, Nottingham, Gedling, Arnold, Carlton, Mapperley, West Bridgford, Lowdham, East Bridgford, Bingham, NG4, NG14, Rivendell, Radcliffe-on-Trent" />

        <meta name="medical-specialty" content="General Dentistry, Cosmetic Dentistry, Orthodontics, Oral Surgery" />
        <meta name="healthcare-provider" content="NHS and Private Dental Practice" />
        <meta name="emergency-services" content="Available" />

        <LocalBusinessSchema includeDentistSpecific />
        <MedicalPracticeSchema specialty="Comprehensive Dentistry" />
        <ServiceAreaSchema primaryLocation="Nottingham" specialization="Dental Care" />
        <VoiceSearchSchema />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`min-h-screen bg-pear-background ${cormorantGaramond.variable} ${montserrat.variable}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pear-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-pear-gold" aria-label="Skip to main content">
          Skip to main content
        </a>
        <a href="#navigation" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-50 focus:px-4 focus:py-2 focus:bg-pear-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-pear-gold" aria-label="Skip to navigation">
          Skip to navigation
        </a>

        <ServiceWorkerRegistration />
        <Navigation />
        <main id="main-content" className="min-h-screen" role="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <LocationDetection />
      </body>
    </html>
  );
}
EOF
  echo "→ src/app/layout.tsx normalized."
  echo
fi

echo "Done. Now run your build again. If something new appears, add the phrase to STRAY_PATTERNS or re-run with --heuristic to catch it."