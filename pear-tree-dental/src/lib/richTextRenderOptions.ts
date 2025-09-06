import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import React from 'react';

// Custom render options for Contentful Rich Text
export const richTextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => React.createElement('strong', {}, text),
    [MARKS.ITALIC]: (text) => React.createElement('em', {}, text),
    [MARKS.UNDERLINE]: (text) => React.createElement('u', {}, text),
    [MARKS.CODE]: (text) => React.createElement('code', { className: "bg-gray-100 rounded p-1 font-mono text-sm" }, text),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => React.createElement('p', { className: "mb-4" }, children),
    [BLOCKS.HEADING_1]: (node, children) => React.createElement('h1', { className: "text-4xl font-bold mb-6 mt-8" }, children),
    [BLOCKS.HEADING_2]: (node, children) => React.createElement('h2', { className: "text-3xl font-semibold mb-4 mt-8" }, children),
    [BLOCKS.HEADING_3]: (node, children) => React.createElement('h3', { className: "text-2xl font-semibold mb-3 mt-6" }, children),
    [BLOCKS.HEADING_4]: (node, children) => React.createElement('h4', { className: "text-xl font-semibold mb-3 mt-6" }, children),
    [BLOCKS.HEADING_5]: (node, children) => React.createElement('h5', { className: "text-lg font-semibold mb-2 mt-4" }, children),
    [BLOCKS.HEADING_6]: (node, children) => React.createElement('h6', { className: "text-base font-semibold mb-2 mt-4" }, children),
    [BLOCKS.UL_LIST]: (node, children) => React.createElement('ul', { className: "list-disc pl-8 mb-6" }, children),
    [BLOCKS.OL_LIST]: (node, children) => React.createElement('ol', { className: "list-decimal pl-8 mb-6" }, children),
    [BLOCKS.LIST_ITEM]: (node, children) => React.createElement('li', { className: "mb-1" }, children),
    [BLOCKS.QUOTE]: (node, children) => React.createElement('blockquote', { className: "border-l-4 border-gray-300 pl-4 italic my-4" }, children),
    [BLOCKS.HR]: () => React.createElement('hr', { className: "my-8 border-gray-200" }),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // Check if node.data.target exists and has fields
      if (!node.data?.target?.fields) {
        return React.createElement('p', {}, 'Asset unavailable');
      }

      const { title, description, file } = node.data.target.fields;
      if (!file) return React.createElement('p', {}, 'File unavailable');

      const { url, details } = file;
      const { image } = details || {};
      const src = url.startsWith('//') ? `https:${url}` : url;

      return React.createElement(
        'figure',
        { className: "my-6" },
        [
          React.createElement('img', {
            src,
            alt: description || title || 'Embedded image',
            width: image?.width || 800,
            height: image?.height || 600,
            className: "mx-auto rounded shadow-sm",
            key: 'image'
          }),
          title && React.createElement(
            'figcaption',
            { className: "text-center text-sm text-gray-500 mt-2", key: 'caption' },
            title
          )
        ]
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;

      // Handle internal links (those starting with /)
      if (uri.startsWith('/')) {
        return React.createElement(
          Link,
          { href: uri, className: "text-blue-600 hover:underline" },
          children
        );
      }

      // External links
      return React.createElement(
        'a',
        {
          href: uri,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-600 hover:underline"
        },
        children
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      // Handle links to other Contentful entries
      if (!node.data?.target?.sys?.contentType?.sys?.id) {
        return React.createElement('span', {}, children);
      }

      const entry = node.data.target;
      let href = '#';

      // If it's a blog post
      if (entry.sys.contentType.sys.id === 'pageBlogPost' && entry.fields?.slug) {
        href = `/blog/${entry.fields.slug}`;
      }
      // If it's a service
      else if (entry.sys.contentType.sys.id === 'serviceData' && entry.fields?.slug) {
        href = `/services/${entry.fields.slug}`;
      }
      // If it's a location
      else if (entry.sys.contentType.sys.id === 'locationData' && entry.fields?.slug) {
        href = `/${entry.fields.slug}`;
      }

      return React.createElement(
        Link,
        { href, className: "text-blue-600 hover:underline" },
        children
      );
    },
  },
};

export default richTextRenderOptions;
