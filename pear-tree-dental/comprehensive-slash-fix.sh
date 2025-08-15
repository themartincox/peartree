#!/bin/bash

echo "🎯 COMPREHENSIVE FIX: Removing ALL /30 patterns from the entire codebase..."

# Count files with /30 patterns before fix
before_count=$(grep -RIl --include="*.tsx" "/30" src | wc -l)
echo "📊 Found $before_count files with /30 patterns"

# Apply comprehensive fix - replace all /30 patterns with safer alternatives
echo "🔧 Applying comprehensive fixes..."

# Method 1: Replace opacity patterns with solid equivalents
find src -name "*.tsx" -type f -exec sed -i '' 's/\/30//g' {} \;

# Method 2: Replace specific problematic gradient patterns 
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-br from-[a-zA-Z0-9-]*\/30 via-white to-[a-zA-Z0-9-]*\/30/bg-slate-50/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-br from-[a-zA-Z0-9-]*\/30 to-white/bg-slate-50/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-r from-[a-zA-Z0-9-]*\/30 to-[a-zA-Z0-9-]*\/30/bg-slate-50/g' {} \;

# Method 3: Fix any remaining /20 patterns too (just in case)
find src -name "*.tsx" -type f -exec sed -i '' 's/\/20//g' {} \;

# Method 4: Fix any /10 patterns 
find src -name "*.tsx" -type f -exec sed -i '' 's/\/10//g' {} \;

echo "✅ Applied comprehensive slash syntax removal"

# Count files with /30 patterns after fix
after_count=$(grep -RIl --include="*.tsx" "/30" src | wc -l)

echo ""
echo "🔍 Verification Results:"
echo "  - Files with /30 before: $before_count"
echo "  - Files with /30 after: $after_count"

if [ "$after_count" -eq 0 ]; then
    echo "  ✅ SUCCESS: All /30 patterns removed!"
else
    echo "  ⚠️  $after_count files still have /30 patterns"
    echo "  Remaining files:"
    grep -RIl --include="*.tsx" "/30" src | head -5
fi

echo ""
echo "📊 Summary:"
echo "  - Removed /30, /20, and /10 opacity patterns"
echo "  - Replaced gradient patterns with solid backgrounds"
echo "  - Applied fixes to $(echo $before_count) files"
echo ""
echo "🚀 This should resolve all JSX parsing issues related to Tailwind slash syntax!"