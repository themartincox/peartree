import type { SanityImage, PortableTextBlock } from './sanity-client'

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  content: PortableTextBlock[];
  publishedAt: string;
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: Array<{
    title: string;
  }>;
  mainImage?: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
}

// Placeholder function for when Sanity isn't configured yet
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  // Return empty array as fallback
  return [];
}
