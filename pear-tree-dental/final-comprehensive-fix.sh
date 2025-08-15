#!/bin/bash

echo "Starting final comprehensive fix for all remaining JSX parsing issues..."

# Fix uncommented text lines in ClientBody.tsx
echo "Fixing uncommented text in ClientBody.tsx..."
sed -i '' '/^[[:space:]]*Pear Tree Dental - Modern Dentist in Burton Joyce$/c\
{/* Pear Tree Dental - Modern Dentist in Burton Joyce */}' src/app/ClientBody.tsx

sed -i '' '/^[[:space:]]*Family and cosmetic dentistry in Nottingham$/c\
{/* Family and cosmetic dentistry in Nottingham */}' src/app/ClientBody.tsx

sed -i '' '/^[[:space:]]*Advanced dentistry at your local practice$/c\
{/* Advanced dentistry at your local practice */}' src/app/ClientBody.tsx

# Fix broken HTTPS URLs across all files
echo "Fixing broken HTTPS URLs..."

# Fix complaints/page.tsx
sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' src/app/complaints/page.tsx

# Fix emergency-dentist-nottingham/page.tsx  
sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' src/app/emergency-dentist-nottingham/page.tsx

# Fix about/team/page.tsx
sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' src/app/about/team/page.tsx

# Also check and fix any other broken HTTPS patterns
find src -name "*.tsx" -type f -exec sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' {} \;
find src -name "*.ts" -type f -exec sed -i '' 's|https:peartree\.dental|https://peartree.dental|g' {} \;

# Fix any other malformed https patterns
find src -name "*.tsx" -type f -exec sed -i '' 's|https:[^/]|https://|g' {} \;
find src -name "*.ts" -type f -exec sed -i '' 's|https:[^/]|https://|g' {} \;

echo "Final comprehensive fix completed!"
echo "Fixed:"
echo "- Uncommented text lines in ClientBody.tsx" 
echo "- Broken HTTPS URLs in complaints, emergency-dentist, and team pages"
echo "- Site-wide HTTPS protocol formatting"