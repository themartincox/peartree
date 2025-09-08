import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fetchBlogPosts, getAssetUrl } from '@/lib/contentful';
import { formatDate } from '@/lib/utils';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Patient Education | Pear Tree Dental',
  description: 'Educational resources on dental health, treatments, and oral care tips from the expert team at Pear Tree Dental.',
  openGraph: {
    title: 'Patient Education | Pear Tree Dental',
    description: 'Educational resources on dental health, treatments, and oral care tips from the expert team at Pear Tree Dental.',
    type: 'website',
    url: 'https://peartree.dental/patient-education',
    siteName: 'Pear Tree Dental',
  }
};

export default async function PatientEducationIndexPage() {
  const posts = await fetchBlogPosts(12);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Patient Education</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Insights, tips, and advice for maintaining excellent oral health
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found. Check back soon for new content!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const { title, subtitle, slug, publishedDate, featuredImage } = post.fields;
            const authorName = post.fields.author?.fields.name || 'Pear Tree Dental Team';
            const imageUrl = getAssetUrl(featuredImage) || '/images/blog-placeholder.jpg';

            return (
              <div key={slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/patient-education/${slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(publishedDate)} • By {authorName}
                    </p>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
                    {subtitle && (
                      <p className="text-gray-600 line-clamp-3">{subtitle}</p>
                    )}
                    <p className="mt-4 text-blue-600 font-semibold">Read more →</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
