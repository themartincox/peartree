#!/bin/bash

echo "Starting deployment process for Pear Tree Dental"
echo "==============================================="

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Build the project
echo "🏗️ Building project..."
SKIP_SITEMAP=true bun run build:optimized

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

echo "✅ Build completed successfully"

# Create .netlify directory if it doesn't exist
mkdir -p .netlify

# Create deployment artifacts
echo "📦 Creating deployment package..."
mkdir -p output
rm -rf output/*
cp -r .next output/
cp -r public output/
cp netlify.toml output/
cp next.config.js output/
cp package.json output/

# Create zip file for deployment
echo "🗜️ Creating zip archive..."
cd output
zip -r deployment.zip .
cd ..

echo "🚀 Deployment package created at output/deployment.zip"
echo "✨ Deployment process completed successfully"
