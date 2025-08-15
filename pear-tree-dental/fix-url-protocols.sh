#!/bin/bash

echo "🔧 Fixing broken HTTPS URLs that lost their double slashes..."

# Fix URLs that became https: instead of https://
find src -name "*.tsx" -type f -exec sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's|https:fonts\.googleapis\.com|https://fonts.googleapis.com|g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's|https:fonts\.gstatic\.com|https://fonts.gstatic.com|g' {} \;

# Fix any other broken protocol patterns
find src -name "*.tsx" -type f -exec sed -i '' 's|//fonts\.googleapis\.com|//fonts.googleapis.com|g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's|//fonts\.gstatic\.com|//fonts.gstatic.com|g' {} \;

echo "✅ Fixed broken HTTPS URLs"

# Verify the fixes
echo ""
echo "🔍 Verification - checking for remaining broken URLs..."
grep -r "https:" src/ | grep -v "https://" | head -5 || echo "No broken https: URLs found"

echo ""
echo "✨ URL protocol fix completed!"
