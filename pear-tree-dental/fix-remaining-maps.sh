#!/bin/bash

echo "🎯 Fixing remaining Tailwind slash syntax in specific failing files..."

# Array of files that are still failing
declare -a failing_files=(
    "src/app/services/hygiene/airflow-stain-removal/page.tsx"
    "src/app/services/implants/all-on-4/page.tsx"
    "src/app/services/implants/multiple-implant/page.tsx"
)

count=0

for file in "${failing_files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔧 Fixing: $file"
        
        # Create backup
        cp "$file" "${file}.final-backup"
        
        # Replace the problematic gradient patterns with simple backgrounds
        sed -i '' 's/bg-gradient-to-br from-blue-50\/30 via-white to-cyan-50\/30/bg-slate-50/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-orange-50\/30 via-white to-amber-50\/30/bg-slate-50/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-blue-50\/30 via-white to-indigo-50\/30/bg-slate-50/g' "$file"
        
        # Double-check: remove any remaining /30 patterns
        sed -i '' 's/\/30//g' "$file"
        
        echo "  ✅ Fixed slash syntax in $file"
        ((count++))
    else
        echo "  ❌ File not found: $file"
    fi
done

echo ""
echo "🔍 Verifying fixes..."

for file in "${failing_files[@]}"; do
    if [ -f "$file" ]; then
        if grep -q "/30" "$file"; then
            echo "  ⚠️  $file still has /30 patterns"
            grep -n "/30" "$file"
        else
            echo "  ✅ $file: No slash patterns found"
        fi
    fi
done

echo ""
echo "📊 Summary:"
echo "  - Files fixed: $count"
echo "  - Replaced gradient patterns with simple bg-slate-50"
echo "  - Removed all /30 opacity syntax"
echo ""
echo "✅ Remaining JSX compilation issues should now be resolved!"