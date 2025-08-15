import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

 For now, return a simple blog post page since this appears to be placeholder content
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
  author: string;
}

 Mock blog posts for now
const blogPosts: BlogPost[] = [
  {
    slug: "dental-health-tips",
    title: "Essential Dental Health Tips",
    content:
      "Maintaining good dental health is crucial for overall wellbeing...",
    publishedAt: "2024-01-15",
    author: "Dr. Smith",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="text-gray-600">
              <p>
                By {post.author} •{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
