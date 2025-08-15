#!/usr/bin/env bash
# fix-common-build-issues.sh (v3) — macOS/Linux safe
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
[[ "${1:-}" == "--fix" ]] && MODE="fix" || true
[[ "${1:-}" == "--check" ]] && MODE="check" || true

echo "Mode : $MODE"
echo "Repo : $(pwd)"
echo

# =========================
# 1) Comment known stray lines
# =========================
# Add any new phrases you see in Netlify errors here:
STRAY_PATTERNS=(
  "Optimize Google Fonts loading with font-display: swap"
  "Critical components - loaded immediately"
  "Critical above-the-fold components - loaded immediately"
  "Import welcoming loaders"
  "Import our beautiful welcoming loaders"
  "Non-critical components - loaded dynamically with loading states"
  "Simple password check (in production, use proper authentication)"
  "Simple password check - replace with proper auth in production"
  "Load jobs from localStorage on component mount"
  "For now, return a simple blog post page since this appears to be placeholder content"
  "Get membership details from URL parameters"
  "Personal Details"
  "Partner Details (for family plans)"
  "Format treatments for display"
  "Icon mapping for benefits"
  "Add performance optimizations"
)

echo "Scanning for known stray note lines…"
FOUND_ANY=false
for P in "${STRAY_PATTERNS[@]}"; do
  # Find lines that START with the phrase (allowing indentation) and are not already commented
  MATCHES=$(grep -RIn --include="*.tsx" -E "^[[:space:]]*${P//\?/\\?}" src 2>/dev/null || true)
  if [[ -n "$MATCHES" ]]; then
    FOUND_ANY=true
    echo "→ Matches for: $P"
    echo "$MATCHES" | sed -E 's/^/   /'
    if [[ "$MODE" == "fix" ]]; then
      ESCAPED=$(printf '%s\n' "$P" | sed 's/[.[\*^$()+?{}|]/\\&/g')
      # Comment those lines (preserve indentation)
      while IFS= read -r LINE; do
        FILE=${LINE%%:*}
        sed "${SED_INPLACE[@]}" -E "s/^([[:space:]]*)(${ESCAPED})(.*)$/\1\/\/ \2\3/" "$FILE"
      done <<< "$MATCHES"
      echo "   Commented."
    fi
    echo
  fi
done
if [[ "$FOUND_ANY" == false ]]; then
  echo "No known note lines found ✅"
  echo
fi

# =========================
# 2) Fix benefits/risks extra parentheses — handle optional whitespace
#    from: benefits={([  ...  ])}
#    to:   benefits={[ ... ]}
# =========================
echo "Fixing benefits/risks prop parentheses (if any)…"

# Show affected files (more flexible regex with optional whitespace)
BEN_LIST=$(grep -RIl --include="*.tsx" -E 'benefits=\{\s*\(\s*\[' src 2>/dev/null || true)
RISK_LIST=$(grep -RIl --include="*.tsx" -E 'risks=\{\s*\(\s*\[' src 2>/dev/null || true)

if [[ -z "$BEN_LIST$RISK_LIST" ]]; then
  echo "None found ✅"
else
  echo "→ Affected files:"
  (printf "%s\n" $BEN_LIST $RISK_LIST 2>/dev/null || true) | sed '/^$/d' | sort -u | sed -E 's/^/   /'
  if [[ "$MODE" == "fix" ]]; then
    # Fix the opening
    if [[ -n "$BEN_LIST" ]]; then
      printf "%s\n" $BEN_LIST | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/benefits=\{\s*\(\s*\[/benefits={\[/g' {}
    fi
    if [[ -n "$RISK_LIST" ]]; then
      printf "%s\n" $RISK_LIST | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/risks=\{\s*\(\s*\[/risks={\[/g' {}
    fi
    echo "   Fixed openings."

    # In case an orphan closing “])” was left behind right before a space/comma/newline or next prop,
    # normalize common patterns like "]} )" -> "]}" and "]} )\s+" -> "]}\n"
    # (safe no-ops if not present)
    printf "%s\n" $BEN_LIST $RISK_LIST 2>/dev/null | sed '/^$/d' | sort -u | while read -r F; do
      sed "${SED_INPLACE[@]}" -E 's/\]\)[[:space:]]*\}/\]}/g' "$F"
      sed "${SED_INPLACE[@]}" -E 's/\]\)[[:space:]]*,/\],/g' "$F"
    done
    echo "   Normalized closings (if any)."
  fi
fi
echo

# =========================
# 3) Remove legacy JSX pragma if present
# =========================
echo "Removing old JSX pragma if present…"
PRAGMA_FILES=$(grep -RIl --include="*.tsx" "/\*\* @jsx React\.createElement \*/" src 2>/dev/null || true)
if [[ -z "$PRAGMA_FILES" ]]; then
  echo "None found ✅"
else
  printf "%s\n" $PRAGMA_FILES | sed -E 's/^/   /'
  if [[ "$MODE" == "fix" ]]; then
    printf "%s\n" $PRAGMA_FILES | xargs -I{} sed "${SED_INPLACE[@]}" -E '/\/\*\* @jsx React\.createElement \*\//d' {}
    echo "   Removed."
  fi
fi
echo

echo "Done. If Netlify shows any NEW plain-English line, add that phrase to STRAY_PATTERNS and rerun with --fix."