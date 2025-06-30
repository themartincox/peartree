import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { getBlogPostStructuredData } from '@/lib/structured-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for blog posts
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Postino Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return generatePageMetadata({
    title: `${post.title} | Postino Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: `${post.tags.join(', ')}, ${post.category}, digital marketing, AI automation`,
    ogImage: post.image,
    changeFreq: 'monthly',
  });
}

// CTA mapping for converting text to actionable buttons
const ctaMapping: Record<string, { text: string; href: string; variant?: "default" | "outline" }> = {
  "Ready to audit where your audience actually searches": {
    text: "Get Your Total Search Audit",
    href: "/contact?service=total-search"
  },
  "Book your Total Search audit today": {
    text: "Book Total Search Audit",
    href: "/contact?service=total-search"
  },
  "Ready to implement AI automation that drives real results": {
    text: "Start AI Automation Strategy",
    href: "/contact?service=ai-automation"
  },
  "Schedule your AI automation strategy session": {
    text: "Schedule Strategy Session",
    href: "/contact?service=ai-automation"
  },
  "Ready to build a website platform that serves your business goals": {
    text: "Discuss Your Website Project",
    href: "/contact?service=web-development"
  },
  "Ready to truly own and control your digital presence": {
    text: "Get Comprehensive Training",
    href: "/contact?service=training"
  },
  "Ready to cut through the content noise": {
    text: "Build Your Content Strategy",
    href: "/contact?service=content-strategy"
  },
  "Ready to optimise for the zero-click future": {
    text: "Develop Zero-Click Strategy",
    href: "/contact?service=seo-strategy"
  },
  "Ready to find your audience wherever they're actually searching": {
    text: "Start Total Search Strategy",
    href: "/contact?service=total-search"
  },
  "Want to see where your audience is actually searching": {
    text: "Get Platform Audit",
    href: "/contact?service=total-search"
  },
  "Want to see your AI automation ROI potential": {
    text: "Calculate AI ROI",
    href: "/contact?service=ai-automation"
  },
  "Concerned about rising acquisition costs": {
    text: "Reduce Your Acquisition Costs",
    href: "/contact?service=total-search"
  },
  "Book your Total Search audit today": {
    text: "Book Total Search Audit",
    href: "/contact?service=total-search"
  }
};

// Function to detect and convert CTA text to buttons
const renderCTAButton = (text: string) => {
  const cleanText = text.replace(/\*\*/g, '').trim();

  // Check for specific CTA mappings first
  for (const [key, cta] of Object.entries(ctaMapping)) {
    if (cleanText.includes(key)) {
      return (
        <div className="my-8 text-center">
          <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-6 text-lg shadow-lg">
            <Link href={cta.href}>
              {cta.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      );
    }
  }

  // Fallback for any "Ready to..." pattern not specifically mapped
  if (cleanText.startsWith('Ready to') && cleanText.includes('?')) {
    return (
      <div className="my-8 text-center">
        <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-6 text-lg shadow-lg">
          <Link href="/contact">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    );
  }

  // Check for "Book" or "Schedule" CTAs
  if ((cleanText.includes('Book') || cleanText.includes('Schedule')) &&
      (cleanText.includes('audit') || cleanText.includes('session') || cleanText.includes('consultation'))) {
    return (
      <div className="my-8 text-center">
        <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-6 text-lg shadow-lg">
          <Link href="/contact">
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    );
  }

  return null;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-soft-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-coral-red hover:text-coral-red/80 font-heading font-semibold mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <Badge className="mb-4 bg-coral-red/10 text-coral-red">
            {post.category}
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-midnight-blue prose-h2:text-2xl prose-h2:font-heading prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-heading prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-midnight-blue prose-strong:font-semibold prose-ul:my-4 prose-li:my-2 prose-blockquote:border-l-coral-red prose-blockquote:bg-soft-gray prose-blockquote:p-4 prose-blockquote:my-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-heading font-bold text-midnight-blue mt-8 mb-4 border-b border-gray-200 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-heading font-semibold text-midnight-blue mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => {
                  const textContent = children?.toString() || '';
                  const ctaButton = renderCTAButton(textContent);

                  if (ctaButton) {
                    return ctaButton;
                  }

                  return (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  );
                },
                strong: ({ children }) => {
                  const textContent = children?.toString() || '';
                  const ctaButton = renderCTAButton(textContent);

                  if (ctaButton) {
                    return ctaButton;
                  }

                  return (
                    <strong className="text-midnight-blue font-semibold">
                      {children}
                    </strong>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-coral-red bg-soft-gray p-4 my-6 italic">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside my-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside my-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 leading-relaxed">
                    {children}
                  </li>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-coral-red hover:text-coral-red/80 font-medium underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                hr: () => (
                  <hr className="my-8 border-gray-200" />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* End-of-post CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-midnight-blue to-blue-800 rounded-lg text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Transform Your {post.category}?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get expert guidance tailored to your business goals and challenges.
          </p>
          <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-4 text-lg shadow-lg">
            <Link href="/contact">
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-soft-gray rounded-lg">
          <div className="flex items-start space-x-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-white border-coral-red/20 text-coral-red hover:bg-coral-red/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-coral-red text-white font-heading font-semibold rounded-lg hover:bg-coral-red/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>

      {/* Structured Data for Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostStructuredData(post)),
        }}
      />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
