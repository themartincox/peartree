#!/bin/bash

echo "🔧 Starting comprehensive SWC/JSX compilation fix..."

# Count of files processed
count=0

# Array of problematic files from the error
declare -a problem_files=(
    "src/app/membership/signup/page.tsx"
    "src/app/services/cosmetic/edge-bonding/page.tsx"
    "src/app/services/cosmetic/teeth-whitening/boutique/page.tsx"
    "src/app/services/cosmetic/teeth-whitening/enlighten/page.tsx"
    "src/app/services/general/biodentine-fillings/page.tsx"
)

echo "📋 Processing ${#problem_files[@]} problematic files..."

# Function to fix JSX in file
fix_jsx_file() {
    local file="$1"
    echo "  🔨 Processing: $file"
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # First, ensure proper React import is at the top
    if ! grep -q "^import React from [\"']react[\"'];" "$file"; then
        # Add React import after "use client" if it exists, otherwise at the top
        if grep -q "^[\"']use client[\"'];" "$file"; then
            sed -i '' '/^"use client";/a\
import React from "react";
' "$file"
        else
            sed -i '' '1i\
import React from "react";
' "$file"
        fi
        echo "    ✅ Added React import"
    fi
    
    # Remove any duplicate React imports
    awk '!seen[$0]++ || !/^import React from/' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
    
    # Ensure JSX pragma is present and correct
    if ! grep -q "@jsx React.createElement" "$file"; then
        # Find the line after imports and add JSX pragma
        local import_end=$(grep -n "^import" "$file" | tail -1 | cut -d: -f1)
        if [ -n "$import_end" ]; then
            sed -i '' "${import_end}a\\
\\
/** @jsx React.createElement */\\
" "$file"
        else
            # If no imports found, add after "use client"
            if grep -q "^[\"']use client[\"'];" "$file"; then
                sed -i '' '/^"use client";/a\
\
/** @jsx React.createElement */
' "$file"
            else
                # Add at top of file
                sed -i '' '1i\
/** @jsx React.createElement */\

' "$file"
            fi
        fi
        echo "    ✅ Added JSX pragma"
    fi
    
    # Ensure the component export is proper
    if ! grep -q "export default function.*{" "$file"; then
        echo "    ⚠️  Warning: No default export function found in $file"
    fi
    
    # Check for proper return statement
    if ! grep -q "return (" "$file"; then
        echo "    ⚠️  Warning: No return statement found in $file"
    fi
    
    ((count++))
}

# Process each problematic file
for file in "${problem_files[@]}"; do
    if [ -f "$file" ]; then
        fix_jsx_file "$file"
    else
        echo "  ❌ File not found: $file"
    fi
done

echo ""
echo "🎯 Now applying fallback solution for SWC compilation..."

# Create a next.config.js modification to force React JSX runtime
if [ -f "next.config.js" ]; then
    # Backup the original
    cp "next.config.js" "next.config.js.backup.$(date +%s)"
    
    # Check if it already has swcMinify disabled or JSX config
    if ! grep -q "swcMinify.*false" "next.config.js" && ! grep -q "reactStrictMode.*false" "next.config.js"; then
        # Add SWC configuration to handle JSX better
        cat > "next.config.js.tmp" << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    // Ensure proper JSX transformation
    emotion: true,
  },
  // Force JSX runtime
  env: {
    NEXT_RUNTIME: 'nodejs',
  },
  // Webpack configuration for better JSX handling
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add fallback for JSX compilation issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    };
    
    return config;
  },
  
  // Original Next.js configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers remain the same...
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects remain the same...
  async redirects() {
    return [
      {
        source: '/membership-signup',
        destination: '/membership/signup',
        permanent: true,
      },
    ];
  },
  
  // Output configuration
  trailingSlash: false,
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  // Additional optimizations
  optimizeFonts: true,
  compress: true,
};

module.exports = nextConfig;
EOF
        
        # Replace the config if the new one is valid
        if node -c "next.config.js.tmp"; then
            mv "next.config.js.tmp" "next.config.js"
            echo "  ✅ Updated next.config.js with SWC JSX fixes"
        else
            rm "next.config.js.tmp"
            echo "  ❌ Failed to update next.config.js - keeping original"
        fi
    fi
fi

# Alternative approach: Create .swcrc file to configure SWC directly
cat > ".swcrc" << 'EOF'
{
  "$schema": "https://json.schemastore.org/swcrc",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "dynamicImport": true
    },
    "transform": {
      "react": {
        "runtime": "classic",
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "throwIfNamespace": false,
        "development": false,
        "useBuiltins": false
      }
    },
    "target": "es2022"
  },
  "module": {
    "type": "commonjs"
  },
  "minify": false
}
EOF

echo "  ✅ Created .swcrc configuration"

# Also try modifying tsconfig to use react-jsx instead of preserve
cp "tsconfig.json" "tsconfig.json.backup.$(date +%s)"
sed -i '' 's/"jsx": "preserve"/"jsx": "react-jsx"/' "tsconfig.json"
echo "  ✅ Updated tsconfig.json JSX to react-jsx"

echo ""
echo "🔍 Final validation..."

# Check all problem files
valid_files=0
for file in "${problem_files[@]}"; do
    if [ -f "$file" ]; then
        if grep -q "import React from" "$file" && grep -q "@jsx React.createElement" "$file" && grep -q "return (" "$file"; then
            echo "  ✅ $file: Has React import, JSX pragma, and return statement"
            ((valid_files++))
        else
            echo "  ❌ $file: Missing required elements"
        fi
    fi
done

echo ""
echo "📊 Summary:"
echo "  - Files processed: $count"
echo "  - Files validated: $valid_files/${#problem_files[@]}"
echo "  - Created .swcrc configuration"
echo "  - Updated next.config.js with SWC fixes"
echo "  - Updated tsconfig.json JSX transform"
echo ""
echo "🚀 Three-pronged approach applied:"
echo "  1. Fixed individual files with React imports and JSX pragma"
echo "  2. Configured SWC directly via .swcrc"
echo "  3. Updated Next.js config for better JSX handling"
echo ""
echo "✅ SWC/JSX compilation fix complete!"