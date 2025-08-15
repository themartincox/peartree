#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="/Users/Martin_1/Desktop/pear-tree-dental"
cd "$PROJECT_ROOT"

echo "Working in: $(pwd)"

# Detect GNU vs BSD sed
if sed --version >/dev/null 2>&1; then
  SED_INPLACE=(-i)
else
  SED_INPLACE=(-i '')
fi

# Helper: sed on a single file if it exists
safesed () {
  local file="$1"
  local expr="$2"
  if [[ -f "$file" ]]; then
    sed "${SED_INPLACE[@]}" -E "$expr" "$file"
    echo "Patched: $file"
  else
    echo "Skip (not found): $file"
  fi
}

##############################################
# 1) Comment stray, un-commented text lines
##############################################

# layout.tsx – comment the plain text line
safesed "src/app/layout.tsx" \
  's/^(\s*)(Optimize Google Fonts loading with font-display: swap)/\1\/\/ \2/'

# blog detail page – comment the placeholder text
safesed "src/app/blog/[slug]/page.tsx" \
  's/^(\s*)(For now, return a simple blog post page.*)/\1\/\/ \2/'

# dentalhub – comment the two stray lines
safesed "src/app/dentalhub/page.tsx" \
  's/^(\s*)(Simple password check.*)/\1\/\/ \2/'
safesed "src/app/dentalhub/page.tsx" \
  's/^(\s*)(Simple password check - replace with proper auth in production)/\1\/\/ \2/'

# jobs to be done – comment the stray line
safesed "src/app/jobstobedone/page.tsx" \
  's/^(\s*)(Load jobs from localStorage.*)/\1\/\/ \2/'

# membership – comment the stray line
safesed "src/app/membership/page.tsx" \
  's/^(\s*)(Critical components - loaded immediately)/\1\/\/ \2/'

##############################################
# 2) Overwrite with safe, working versions    #
#    (optional but recommended if those files #
#     were just placeholders)                 #
##############################################

# blog/[slug]/page.tsx – minimal working page
cat > src/app/blog/'[slug]'/page.tsx << 'EOF'
import React from "react";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const title = params?.slug
    ? `${decodeURIComponent(params.slug).replace(/-/g, " ")} | Blog`
    : "Blog Post";
  return {
    title,
    description: "Pear Tree Dental blog post",
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const { slug } = params;
  const title = decodeURIComponent(slug).replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
          {title}
        </h1>
        <p className="text-gray-600">
          This is a placeholder blog post page for <strong>{title}</strong>. Replace with your CMS content or static post.
        </p>
      </section>
    </div>
  );
}
