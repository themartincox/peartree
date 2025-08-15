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
