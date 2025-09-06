import Link from 'next/link';

type Item = { serviceSlug: string; suburbSlug: string; suburbName: string; city?: string };

export default function RelatedLocationLinks({ items, title }: { items: Item[]; title?: string }) {
  if (!items?.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-3">{title ?? 'Related locations'}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <Link
            key={`${item.serviceSlug}-${item.suburbSlug}-${idx}`}
            href={`/blog/${item.serviceSlug}/${item.suburbSlug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium">{item.suburbName}</span>
            {item.city && (
              <span className="text-sm text-gray-600 ml-1">
                , {item.city}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
