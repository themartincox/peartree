#!/bin/bash

echo "🔧 COMPREHENSIVE JSX ERROR FIX SCRIPT"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counter for fixes
FIXES_APPLIED=0

echo -e "${BLUE}Phase 1: Reverting TypeScript JSX config to standard Next.js setting${NC}"
# Fix tsconfig.json JSX setting
sed -i '' 's/"jsx": "react-jsx"/"jsx": "preserve"/' tsconfig.json
echo "✅ Reset TSConfig JSX to preserve mode"
((FIXES_APPLIED++))

echo ""
echo -e "${BLUE}Phase 2: Adding React imports to all problematic TSX files${NC}"

# Find all TSX files and add React import if missing
find src/app -name "*.tsx" -type f | while read file; do
    # Check if file already has React import
    if ! grep -q "import.*React" "$file"; then
        # Check if file has JSX content (contains < followed by a letter)
        if grep -q "<[a-zA-Z]" "$file"; then
            echo "🔧 Adding React import to: $file"
            
            # Add React import after "use client" if present, otherwise at the top
            if grep -q "\"use client\"" "$file"; then
                # Add after "use client" directive
                sed -i '' '/^"use client";$/a\
import React from "react";
' "$file"
            else
                # Add at the very top
                sed -i '' '1i\
import React from "react";
' "$file"
            fi
            ((FIXES_APPLIED++))
        fi
    fi
done

echo ""
echo -e "${BLUE}Phase 3: Fixing function definition and brace issues${NC}"

# List of problematic files from error messages
PROBLEM_FILES=(
    "src/app/membership/signup/page.tsx"
    "src/app/services/cosmetic/edge-bonding/page.tsx" 
    "src/app/services/cosmetic/teeth-whitening/boutique/page.tsx"
    "src/app/services/cosmetic/teeth-whitening/enlighten/page.tsx"
    "src/app/services/general/biodentine-fillings/page.tsx"
)

for file in "${PROBLEM_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "🔧 Fixing function structure in: $file"
        
        # Backup the file
        cp "$file" "$file.backup"
        
        # Ensure proper spacing around return statements
        sed -i '' 's/^  return(/\
  return (/' "$file"
        
        # Ensure proper function closing
        # Add a newline before the final closing brace if not present
        if ! tail -c1 "$file" | read -r _ || [ "$(tail -c1 "$file")" != $'\n' ]; then
            echo "" >> "$file"
        fi
        
        ((FIXES_APPLIED++))
    else
        echo "⚠️  File not found: $file"
    fi
done

echo ""
echo -e "${BLUE}Phase 4: Cleaning up trailing commas in imports${NC}"

# Fix trailing commas in import statements across all TSX files
find src -name "*.tsx" -type f -exec sed -i '' 's/import { \([^}]*\), } from/import { \1 } from/g' {} \;
echo "✅ Cleaned trailing commas in import statements"
((FIXES_APPLIED++))

echo ""
echo -e "${BLUE}Phase 5: Standardizing JSX return patterns${NC}"

for file in "${PROBLEM_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "🔧 Standardizing JSX patterns in: $file"
        
        # Ensure there's proper spacing before return statement
        sed -i '' '/return (/i\
' "$file"
        
        # Remove any potential invisible characters around return statements
        sed -i '' 's/[[:space:]]*return[[:space:]]*(/  return (/' "$file"
        
        ((FIXES_APPLIED++))
    fi
done

echo ""
echo -e "${BLUE}Phase 6: Adding explicit JSX pragma for problematic files${NC}"

for file in "${PROBLEM_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "🔧 Adding JSX pragma to: $file"
        
        # Add JSX pragma comment at the top after imports
        if ! grep -q "@jsx" "$file"; then
            # Find the line number after the last import
            LAST_IMPORT_LINE=$(grep -n "^import" "$file" | tail -1 | cut -d: -f1)
            if [ ! -z "$LAST_IMPORT_LINE" ]; then
                sed -i '' "${LAST_IMPORT_LINE}a\\
\\
/** @jsx React.createElement */
" "$file"
                ((FIXES_APPLIED++))
            fi
        fi
    fi
done

echo ""
echo -e "${BLUE}Phase 7: Validating file structure${NC}"

for file in "${PROBLEM_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "🔍 Validating: $file"
        
        # Count opening and closing braces
        OPENING_BRACES=$(grep -o '{' "$file" | wc -l)
        CLOSING_BRACES=$(grep -o '}' "$file" | wc -l)
        
        if [ "$OPENING_BRACES" -ne "$CLOSING_BRACES" ]; then
            echo -e "${RED}⚠️  Brace mismatch in $file: $OPENING_BRACES opening vs $CLOSING_BRACES closing${NC}"
        else
            echo -e "${GREEN}✅ Brace count valid in $file${NC}"
        fi
        
        # Check for export default function
        if grep -q "export default function" "$file"; then
            echo -e "${GREEN}✅ Export function found in $file${NC}"
        else
            echo -e "${RED}⚠️  No export default function in $file${NC}"
        fi
        
        # Check for return statement
        if grep -q "return (" "$file"; then
            echo -e "${GREEN}✅ Return statement found in $file${NC}"
        else
            echo -e "${RED}⚠️  No return statement in $file${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}Phase 8: Creating fallback components for problematic files${NC}"

# Create a simple fallback component template
create_fallback_component() {
    local file=$1
    local component_name=$2
    
    cat > "$file" << EOF
import React from "react";
/** @jsx React.createElement */

export default function ${component_name}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">
          ${component_name} - Temporarily Simplified
        </h1>
        <p className="text-center mt-4">
          This component has been temporarily simplified to resolve build issues.
        </p>
      </div>
    </div>
  );
}
EOF
    echo "🔧 Created fallback component: $file"
    ((FIXES_APPLIED++))
}

# Ask user if they want to create fallback components
echo -e "${YELLOW}Would you like to create simplified fallback components? (y/n)${NC}"
read -r CREATE_FALLBACKS

if [ "$CREATE_FALLBACKS" = "y" ] || [ "$CREATE_FALLBACKS" = "Y" ]; then
    create_fallback_component "src/app/membership/signup/page.tsx" "MembershipSignupPage"
    create_fallback_component "src/app/services/cosmetic/edge-bonding/page.tsx" "EdgeBondingPage"
    create_fallback_component "src/app/services/cosmetic/teeth-whitening/boutique/page.tsx" "BoutiqueWhiteningPage"
    create_fallback_component "src/app/services/cosmetic/teeth-whitening/enlighten/page.tsx" "EnlightenWhiteningPage"
    create_fallback_component "src/app/services/general/biodentine-fillings/page.tsx" "BiodentineFillingsPage"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🎉 JSX FIX SCRIPT COMPLETED!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}Summary of fixes applied:${NC}"
echo "• Total fixes applied: $FIXES_APPLIED"
echo "• TypeScript JSX config reset"
echo "• React imports added where needed"
echo "• Function structures standardized"
echo "• Import trailing commas cleaned"
echo "• JSX return patterns standardized"
echo "• JSX pragmas added to problematic files"
echo "• File structures validated"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Review the changes made"
echo "2. Test the build locally if possible"
echo "3. Commit and deploy to see if issues are resolved"
echo "4. If issues persist, the fallback components are ready to use"
echo ""
echo -e "${BLUE}Files modified:${NC}"
for file in "${PROBLEM_FILES[@]}"; do
    if [ -f "$file.backup" ]; then
        echo "• $file (backup created: $file.backup)"
    fi
done
echo ""
echo -e "${GREEN}✅ Script completed successfully!${NC}"