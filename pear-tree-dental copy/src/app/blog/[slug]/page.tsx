// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchBlogPostBySlug, getAssetUrl } from "@/lib/contentful";

export const revalidate = 600;

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post: any = await fetchBlogPostBySlug(params.slug);
  if (!post) return {};
  const f = post.fields || {};
  const title = f.title || "Article";
  const desc = f.subtitle || f.excerpt || "";
  const ogImage = getAssetUrl(f.featuredImage) || getAssetUrl(f.heroImage) || undefined;
  return {
    title,
    description: desc,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: { title, description: desc, images: ogImage ? [{ url: ogImage }] : undefined },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post: any = await fetchBlogPostBySlug(params.slug);
  if (!post) notFound();
  const f = post.fields || {};
  // ... render your article using f.title, f.subtitle, f.body, etc.
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{f.title}</h1>
      {/* render body */}
    </main>
  );
}

export async function generateStaticParams() {
  // Pre-render a handful; ISR will fill the rest
  const posts: any[] = await (await import("@/lib/contentful")).fetchBlogPosts(50);
  return (posts || [])
    .map((p) => p?.fields?.slug)
    .filter(Boolean)
    .map((slug: string) => ({ slug }));
}