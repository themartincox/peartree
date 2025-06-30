export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  content: any;
  publishedAt: string;
  author?: {
    name: string;
    image?: any;
  };
  categories?: Array<{
    title: string;
  }>;
  mainImage?: any;
  seoTitle?: string;
  seoDescription?: string;
}

// Placeholder function for when Sanity isn't configured yet
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  // Return empty array as fallback
  return [];
}
