import { getAllBlogPosts } from './blog-data'

export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Postino",
    "url": "https://postino.cc",
    "logo": "https://postino.cc/logo.png",
    "description": "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Comprehensive thought leadership in B2B UX, LinkedIn marketing, SEO strategy, AI automation, and more.",
    "founder": {
      "@type": "Person",
      "name": "Martin",
      "image": "https://postino.cc/images/martin-headshot.jpg",
      "jobTitle": "Founder & Growth Strategist",
      "description": "Over 15 years helping SMEs scale through strategic marketing and AI automation"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nottingham",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://linkedin.com/company/postino",
      "https://twitter.com/postino"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "services": [
      "Marketing Strategy",
      "AI Automation",
      "B2B User Experience Design",
      "LinkedIn Marketing",
      "SEO Strategy",
      "Content Strategy",
      "Web Development",
      "Client Training"
    ],
    "expertise": [
      "B2B UX Design",
      "LinkedIn Thought Leadership",
      "SEO Topic Clusters",
      "Zero-Click Search Optimization",
      "Data-Driven Storytelling",
      "Total Search Optimization",
      "AI Marketing Automation",
      "Platform-Agnostic Development",
      "Client Empowerment Training"
    ]
  }
}

export function getBlogStructuredData() {
  const blogPosts = getAllBlogPosts()

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Postino Blog",
    "description": "Expert insights on B2B marketing, AI automation, SEO strategy, and business growth",
    "url": "https://postino.cc/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Postino",
      "url": "https://postino.cc"
    },
    "author": {
      "@type": "Person",
      "name": "Martin",
      "image": "https://postino.cc/images/martin-headshot.jpg",
      "jobTitle": "Founder & Growth Strategist",
      "worksFor": {
        "@type": "Organization",
        "name": "Postino"
      }
    },
    "blogPost": blogPosts.map(post => ({
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
        "description": post.author.bio
      },
      "publisher": {
        "@type": "Organization",
        "name": "Postino",
        "url": "https://postino.cc"
      },
      "image": post.image,
      "articleSection": post.category,
      "keywords": post.tags.join(", "),
      "wordCount": post.content.split(' ').length,
      "timeRequired": post.readTime,
      "inLanguage": "en-GB",
      "isAccessibleForFree": true,
      "about": {
        "@type": "Thing",
        "name": post.category
      }
    }))
  }
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Postino",
    "url": "https://postino.cc",
    "description": "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently",
    "publisher": {
      "@type": "Organization",
      "name": "Postino"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://postino.cc/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Main Navigation",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Growth Marketing",
          "url": "https://postino.cc/growth-marketing"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI & Automation",
          "url": "https://postino.cc/ai-automation"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blog",
          "url": "https://postino.cc/blog"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "url": "https://postino.cc/contact"
        }
      ]
    }
  }
}

export function getBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

export function getBlogPostStructuredData(post: any) {
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
