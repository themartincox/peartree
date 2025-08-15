#!/usr/bin/env bash
# fix-common-build-issues.sh (v2, macOS/Linux safe)
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
for arg in "$@"; do
  case "$arg" in
    --check) MODE="check" ;;
    --fix) MODE="fix" ;;
    *)
      echo "Usage: $0 [--check|--fix]"
      exit 1
  esac
done

echo "Mode : $MODE"
echo "Repo : $(pwd)"
echo

# 1) Known stray note lines to comment
# (Add any new phrases here if Netlify points them out)
STRAY_PATTERNS=(
  "Optimize Google Fonts loading with font-display: swap"
  "Critical components - loaded immediately"
  "Import welcoming loaders"
  "Non-critical components - loaded dynamically with loading states"
  "Simple password check (in production, use proper authentication)"
  "Simple password check - replace with proper auth in production"
  "Load jobs from localStorage on component mount"
  "For now, return a simple blog post page since this appears to be placeholder content"
  "Get membership details from URL parameters"
  "Personal Details"
  "Partner Details (for family plans)"
  "Format treatments for display"
  "Critical above-the-fold components - loaded immediately"
)

echo "Scanning for known stray note lines…"
FOUND_ANY=false
for P in "${STRAY_PATTERNS[@]}"; do
  # show occurrences (start-of-line, any indent, not already commented)
  MATCHES=$(grep -RIn --include="*.tsx" -E "^[[:space:]]*${P//\?/\\?}" src 2>/dev/null || true)
  if [[ -n "$MATCHES" ]]; then
    FOUND_ANY=true
    echo "→ Matches for: $P"
    echo "$MATCHES" | sed -E 's/^/   /'
    if [[ "$MODE" == "fix" ]]; then
      # escape for sed
      ESCAPED=$(printf '%s\n' "$P" | sed 's/[.[\*^$()+?{}|]/\\&/g')
      # comment lines that start with the phrase (preserve indentation)
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

# 2) Fix extra parentheses around benefits/risks props
echo "Fixing benefits/risks prop parentheses (if any)…"
BEN_FILES=$(grep -RIl --include="*.tsx" "benefits={(\[" src 2>/dev/null || true)
RISK_FILES=$(grep -RIl --include="*.tsx" "risks={(\[" src 2>/dev/null || true)
if [[ -z "$BEN_FILES$RISK_FILES" ]]; then
  echo "None found ✅"
else
  echo "→ Affected files:"
  printf "   %s\n" $BEN_FILES $RISK_FILES 2>/dev/null | sed '/^$/d' | sort -u
  if [[ "$MODE" == "fix" ]]; then
    if [[ -n "$BEN_FILES" ]]; then
      printf "%s\n" $BEN_FILES | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/benefits={\(\[/benefits={\[/g' {}
    fi
    if [[ -n "$RISK_FILES" ]]; then
      printf "%s\n" $RISK_FILES | xargs -I{} sed "${SED_INPLACE[@]}" -E 's/risks={\(\[/risks={\[/g' {}
    fi
    echo "   Fixed."
  fi
fi
echo

# 3) Remove old JSX pragma if present
echo "Removing old JSX pragma if present…"
PRAGMA_FILES=$(grep -RIl --include="*.tsx" "/\*\* @jsx React\.createElement \*/" src 2>/dev/null || true)
if [[ -z "$PRAGMA_FILES" ]]; then
  echo "None found ✅"
else
  printf "→ %s\n" $PRAGMA_FILES | sed -E 's/^/   /'
  if [[ "$MODE" == "fix" ]]; then
    printf "%s\n" $PRAGMA_FILES | xargs -I{} sed "${SED_INPLACE[@]}" -E '/\/\*\* @jsx React\.createElement \*\//d' {}
    echo "   Removed."
  fi
fi
echo

echo "Done. Re-run your Netlify build. If new phrases appear in errors, add them to STRAY_PATTERNS and run --fix again."