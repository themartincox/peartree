import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchBlogPostBySlug, fetchBlogPosts, getAssetUrl, extractTextFromRichText } from '@/lib/contentful';
import { richTextRenderOptions } from '@/lib/richTextRenderOptions';
import { formatDate, getReadingTime } from '@/lib/utils';

// ISR configuration for revalidation
export const revalidate = 3600; // 1 hour

// Dynamic params for fallback
export const dynamicParams = true;

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Pear Tree Dental',
      description: 'The requested article could not be found.',
    };
  }

  const { title, subtitle, content, featuredImage } = post.fields;
  const seoFields = post.fields.seoFields?.fields;

  // Use SEO fields if available, otherwise generate from content
  const pageTitle = seoFields?.pageTitle || title;
  const pageDescription = seoFields?.pageDescription || subtitle || extractTextFromRichText(content).substring(0, 160);
  const imageUrl = getAssetUrl(featuredImage) || '/images/blog-placeholder.jpg';
  const canonicalUrl = seoFields?.canonicalUrl || `https://peartree.dental/patient-education/${params.slug}`;

  return {
    title: `${pageTitle} | Pear Tree Dental Patient Education`,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article',
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: featuredImage?.fields.file.details.image?.width || 1200,
          height: featuredImage?.fields.file.details.image?.height || 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    robots: {
      index: !seoFields?.noindex,
      follow: !seoFields?.nofollow,
    }
  };
}

// Generate static paths for common articles
export async function generateStaticParams() {
  const posts = await fetchBlogPosts(10); // Pre-render the 10 most recent posts

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, subtitle, publishedDate, content, featuredImage, relatedBlogPosts } = post.fields;
  const author = post.fields.author?.fields;
  const imageUrl = getAssetUrl(featuredImage) || '/images/blog-placeholder.jpg';
  const readingTime = getReadingTime(extractTextFromRichText(content));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/patient-education" className="hover:underline">Patient Education</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>

        {/* Article header */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
        )}

        <div className="flex items-center mb-6 text-gray-600">
          {author && (
            <div className="flex items-center">
              {author.avatar && (
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={getAssetUrl(author.avatar)}
                    alt={author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{author.name}</p>
                <p className="text-sm">
                  {formatDate(publishedDate)} • {readingTime} min read
                </p>
              </div>
            </div>
          )}

          {!author && (
            <div>
              <p className="font-medium">Pear Tree Dental Team</p>
              <p className="text-sm">
                {formatDate(publishedDate)} • {readingTime} min read
              </p>
            </div>
          )}
        </div>

        {/* Featured image */}
        {featuredImage && (
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          {documentToReactComponents(content, richTextRenderOptions)}
        </article>

        {/* Related articles */}
        {relatedBlogPosts && relatedBlogPosts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedBlogPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.sys.id}
                  href={`/patient-education/${relatedPost.fields.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-medium">{relatedPost.fields.title}</h4>
                  {relatedPost.fields.subtitle && (
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {relatedPost.fields.subtitle}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to schedule your dental appointment?
          </h3>
          <p className="mb-6">
            Contact our friendly team today to book a consultation or check-up.
          </p>
          <Link
            href="/book"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
