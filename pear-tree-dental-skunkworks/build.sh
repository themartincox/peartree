#!/bin/bash

echo "Starting Next.js build..."
bun run build

# Check if we need to create a dist directory for UI override
if [ ! -z "$NETLIFY_PUBLISH_DIR" ] && [ "$NETLIFY_PUBLISH_DIR" = "dist" ]; then
  echo "Creating dist directory for Netlify UI override..."
  mkdir -p dist
  cp -r .next/* dist/ 2>/dev/null || true
  cp -r public/* dist/ 2>/dev/null || true
  echo "Build output copied to dist directory"
fi

echo "Build completed successfully!"
