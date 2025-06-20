import Script from "next/script";
import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbSchema({ items, className = "" }: BreadcrumbSchemaProps) {
  // Create breadcrumb list schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": `https://peartreedental.co.uk${item.url}` })
    }))
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb navigation"
        className={`py-4 ${className}`}
        role="navigation"
      >
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-pear-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pear-gold focus:rounded-md"
              aria-label="Home page"
            >
              <House className="w-4 h-4 mr-1" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              {item.url && index < items.length - 1 ? (
                <Link
                  href={item.url}
                  className="hover:text-pear-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pear-gold focus:rounded-md px-1"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={`${index === items.length - 1 ? 'text-pear-primary font-medium' : 'text-gray-600'}`}
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
