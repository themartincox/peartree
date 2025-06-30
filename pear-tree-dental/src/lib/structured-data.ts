import { getAllBlogPosts } from './blog-data'
import type { BlogPost } from './blog-data'

// ... existing code ... <all other functions remain unchanged>

export function getBlogPostStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://postino.cc/blog/${post.slug}`,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "image": `https://postino.cc${post.author.avatar}`,
      "description": post.author.bio,
      "url": "https://postino.cc/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Postino",
      "url": "https://postino.cc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://postino.cc/logo.png"
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": post.readTime,
    "inLanguage": "en-GB",
    "isAccessibleForFree": true,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://postino.cc/blog/${post.slug}`
    },
    "about": {
      "@type": "Thing",
      "name": post.category,
      "description": `Expert insights on ${post.category.toLowerCase()}`
    },
    "mentions": post.tags.map((tag: string) => ({
      "@type": "Thing",
      "name": tag
    }))
  }
}
