import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/contentful';
import { getActiveBlogPairs } from '@/lib/supabase';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const [slugs, pairs] = await Promise.all([
    getAllBlogSlugs(),
    getActiveBlogPairs(),
  ]);
  return [
    ...slugs.map((slug) => ({ slug: [slug] })),
    ...pairs.map(({ city_slug, service_slug, slug }: any) => ({
      slug: [city_slug, service_slug, slug],
    })),
  ];
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const segments = params.slug;
  const postSlug = segments[segments.length - 1];
  const entry = await getBlogPost(postSlug);
  if (!entry) return notFound();
  const { title, body_markdown } = entry.fields as any;
  const processed = await remark().use(html).process(body_markdown || '');
  const contentHtml = processed.toString();

  return (
    <main className="prose mx-auto">
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

