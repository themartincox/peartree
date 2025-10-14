#!/usr/bin/env bash
set -euo pipefail

SITEMAP_URL="${1:-https://peartree.dental/sitemap.xml}"

echo "Fetching and checking: $SITEMAP_URL"
curl -s "$SITEMAP_URL" \
| sed -n 's:.*<loc>\(.*\)</loc>.*:\1:p' \
| while read -r url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -I "$url")
  echo "$code,$url"
done | tee peartree_status_after.csv

echo
echo "Problem URLs (should be empty):"
awk -F, '$1 ~ /^(3|4|5)/ {print $0}' peartree_status_after.csv | column -t -s,
