#!/bin/bash

echo "🔧 Fixing final JSX parsing errors in 5 specific files..."

# Files from the latest error log
FILES=(
  "src/app/services/implants/all-on-4/page.tsx"
  "src/app/smile-gallery/page.tsx"
  "src/app/services/implants/multiple-implant/page.tsx"
  "src/app/services/general/biodentine-fillings/page.tsx"
  "src/app/layout.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Processing $file..."
    
    # Remove any remaining problematic patterns that might confuse SWC
    sed -i '' 's/bg-gradient-to-br from-blue-50\/30 via-white to-cyan-50\/30/bg-slate-50/g' "$file"
    sed -i '' 's/bg-gradient-to-br from-orange-50\/30 via-white to-amber-50\/30/bg-orange-50/g' "$file"
    sed -i '' 's/bg-gradient-to-br from-green-50\/30 via-white to-teal-50\/30/bg-green-50/g' "$file"
    sed -i '' 's/bg-gradient-to-br from-soft-pink\/30 via-white to-soft-lavender\/30/bg-soft-pink/g' "$file"
    
    # Clean up any malformed opacity patterns
    sed -i '' 's/\/30//g' "$file"
    sed -i '' 's/\/20//g' "$file"
    sed -i '' 's/\/10//g' "$file"
    sed -i '' 's/\/50//g' "$file"
    sed -i '' 's/\/40//g' "$file"
    sed -i '' 's/\/60//g' "$file"
    sed -i '' 's/\/70//g' "$file"
    sed -i '' 's/\/80//g' "$file"
    sed -i '' 's/\/90//g' "$file"
    
    # Fix any double slashes that might have been created
    sed -i '' 's/\/\///g' "$file"
    
    # Clean up any whitespace issues that might affect parsing
    sed -i '' 's/[[:space:]]*$//' "$file"
    
    echo "✅ Processed $file"
  else
    echo "❌ File not found: $file"
  fi
done

echo ""
echo "🔍 Verification - checking for any remaining slash patterns..."
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    slash_count=$(grep -c '/[0-9][0-9]' "$file" || true)
    if [ "$slash_count" -gt 0 ]; then
      echo "⚠️  $file still has $slash_count slash patterns"
      grep -n '/[0-9][0-9]' "$file" || true
    else
      echo "✅ $file is clean"
    fi
  fi
done

echo ""
echo "✨ Final JSX error fix completed!"
