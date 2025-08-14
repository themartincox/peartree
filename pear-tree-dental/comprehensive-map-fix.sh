#!/bin/bash

echo "🎯 RADICAL FIX: Replacing problematic Tailwind slash syntax..."

# Array of problematic files
declare -a files=(
    "src/app/membership/signup/page.tsx"
    "src/app/services/cosmetic/edge-bonding/page.tsx"
    "src/app/services/cosmetic/teeth-whitening/boutique/page.tsx"
    "src/app/services/cosmetic/teeth-whitening/enlighten/page.tsx"
    "src/app/services/general/biodentine-fillings/page.tsx"
)

count=0

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔧 Processing: $file"
        
        # Create backup
        cp "$file" "${file}.radical-backup"
        
        # Replace the problematic className patterns with safe alternatives
        # Replace /30 opacity with [0.3] or bg-opacity-30
        sed -i '' 's/from-pear-background\/30/from-pear-background bg-opacity-30/g' "$file"
        sed -i '' 's/from-blue-50\/30/from-blue-50 bg-opacity-30/g' "$file"
        sed -i '' 's/from-purple-50\/30/from-purple-50 bg-opacity-30/g' "$file"
        sed -i '' 's/from-green-50\/30/from-green-50 bg-opacity-30/g' "$file"
        sed -i '' 's/from-orange-50\/30/from-orange-50 bg-opacity-30/g' "$file"
        sed -i '' 's/to-purple-50\/30/to-purple-50 bg-opacity-30/g' "$file"
        sed -i '' 's/to-pink-50\/30/to-pink-50 bg-opacity-30/g' "$file"
        sed -i '' 's/to-teal-50\/30/to-teal-50 bg-opacity-30/g' "$file"
        sed -i '' 's/to-yellow-50\/30/to-yellow-50 bg-opacity-30/g' "$file"
        
        # Alternative approach: use solid colors instead of opacity
        sed -i '' 's/bg-gradient-to-br from-pear-background bg-opacity-30 to-white/bg-gradient-to-br from-slate-50 to-white/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-blue-50 bg-opacity-30 via-white to-purple-50 bg-opacity-30/bg-gradient-to-br from-blue-50 via-white to-purple-50/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-purple-50 bg-opacity-30 via-white to-pink-50 bg-opacity-30/bg-gradient-to-br from-purple-50 via-white to-pink-50/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-green-50 bg-opacity-30 via-white to-teal-50 bg-opacity-30/bg-gradient-to-br from-green-50 via-white to-teal-50/g' "$file"
        sed -i '' 's/bg-gradient-to-br from-orange-50 bg-opacity-30 via-white to-yellow-50 bg-opacity-30/bg-gradient-to-br from-orange-50 via-white to-yellow-50/g' "$file"
        
        # Even more radical - just use simple background if gradients are still problematic
        sed -i '' 's/bg-gradient-to-br from-[a-z0-9-]* via-white to-[a-z0-9-]*/bg-slate-50/g' "$file"
        
        echo "  ✅ Removed problematic slash syntax"
        ((count++))
    else
        echo "  ❌ File not found: $file"
    fi
done

echo ""
echo "🔍 Verifying changes..."

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        # Check if file still has any /30 patterns
        if grep -q "/30" "$file"; then
            echo "  ⚠️  $file still has /30 patterns"
        else
            echo "  ✅ $file: No slash patterns found"
        fi
        
        # Check if the return statement line is now clean
        return_line=$(grep -n "return (" "$file" | head -1 | cut -d: -f1)
        if [ -n "$return_line" ]; then
            next_line=$((return_line + 1))
            div_line=$(sed -n "${next_line}p" "$file")
            if echo "$div_line" | grep -q "/"; then
                echo "  ⚠️  $file: Still has slash in div line: $div_line"
            else
                echo "  ✅ $file: Clean div line"
            fi
        fi
    fi
done

echo ""
echo "📊 Summary:"
echo "  - Files processed: $count"
echo "  - Removed all /30 opacity syntax"
echo "  - Replaced with solid colors or bg-opacity classes"
echo ""
echo "🚀 If this works, the issue was Tailwind slash syntax confusing SWC!"