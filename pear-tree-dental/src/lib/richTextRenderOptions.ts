import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-react-renderer';
import type Link from 'next/link';
import React from 'react';

// Custom render options for Contentful Rich Text
export const richTextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className="bg-gray-100 rounded p-1 font-mono text-sm">{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-semibold mb-4 mt-8">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-semibold mb-3 mt-6">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-semibold mb-2 mt-4">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-semibold mb-2 mt-4">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-8 mb-6">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-8 mb-6">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const { url, details } = file;
      const { image } = details;
      const src = url.startsWith('//') ? `https:${url}` : url;

      return (
        <figure className="my-6">
          <img
            src={src}
            alt={description || title || 'Embedded image'}
            width={image?.width || 800}
            height={image?.height || 600}
            className="mx-auto rounded shadow-sm"
          />
          {title && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">{title}</figcaption>
          )}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;

      // Handle internal links (those starting with /)
      if (uri.startsWith('/')) {
        return (
          <Link href={uri} className="text-blue-600 hover:underline">
            {children}
          </Link>
        );
      }

      // External links
      return (
        <a
          href={uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      // Handle links to other Contentful entries
      const entry = node.data.target;
      let href = '#';

      // If it's a blog post
      if (entry.sys.contentType.sys.id === 'blogPost' && entry.fields.slug) {
        href = `/blog/${entry.fields.slug}`;
      }
      // If it's a service
      else if (entry.sys.contentType.sys.id === 'serviceData' && entry.fields.slug) {
        href = `/services/${entry.fields.slug}`;
      }
      // If it's a location
      else if (entry.sys.contentType.sys.id === 'locationData' && entry.fields.slug) {
        href = `/${entry.fields.slug}`;
      }

      return (
        <Link href={href} className="text-blue-600 hover:underline">
          {children}
        </Link>
      );
    },
  },
};

export default richTextRenderOptions;
