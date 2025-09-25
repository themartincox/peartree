// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchContentfulPosts } from "@/lib/contentful";
import { FALLBACK_POSTS, BlogPost } from "@/lib/fallbackPosts";

export const revalidate = 600; // ISR: re-generate at most every 10 minutes

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and evergreen content. This hub loads dynamic posts from our CMS when available, with a static fallback.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const cms = await fetchContentfulPosts({ limit: 12 }); // fetch up to 12; we’ll render all if present
    if (cms && cms.length) {
      posts = cms;
    }
  } catch {
    // swallow exception – we’ll fall back
  }

  const isDynamic = posts.length > 0;
  const visiblePosts = isDynamic ? posts : FALLBACK_POSTS.slice(0, 6); // exactly 2 rows × 3 cards

  return (
    <main className="min-h-screen bg-pear-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary">
            Our Blog
          </h1>
          <p className="mt-3 text-pear-ink/80 max-w-2xl">
            Evergreen articles and helpful guides. {isDynamic ? "Freshly loaded from our CMS." : "Shown in safe static mode while CMS content is unavailable."}
          </p>
        </header>

        <BlogGrid posts={visiblePosts} isDynamic={isDynamic} />
      </section>
    </main>
  );
}

// --- Components ---

function BlogGrid({ posts, isDynamic }: { posts: BlogPost[]; isDynamic: boolean }) {
  // If dynamic, render responsive grid; if fallback, lock to 2 rows × 3 by slicing above
  return (
    <div
      className={
        isDynamic
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }
    >
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-pear-ink/5 hover:shadow-md transition">
      <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-pear-gold">
        <div className="relative aspect-[16/9] bg-pear-ink/5">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
          )}
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition">
            {post.title}
          </h2>
          {post.excerpt && <p className="mt-2 text-pear-ink/80 line-clamp-3">{post.excerpt}</p>}
          <div className="mt-4 inline-flex items-center text-sm font-medium text-pear-ink/70">
            Read more<span aria-hidden="true" className="ml-1">→</span>
          </div>
        </div>
      </Link>
    </article>
  );
}