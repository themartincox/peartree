import type { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import React from 'react';

export const richTextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => React.createElement('strong', { className: 'font-bold' }, text),
    [MARKS.ITALIC]: (text) => React.createElement('em', { className: 'italic' }, text),
    [MARKS.UNDERLINE]: (text) => React.createElement('span', { className: 'underline' }, text),
    [MARKS.CODE]: (text) =>
      React.createElement(
        'code',
        { className: 'bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm' },
        text
      ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      React.createElement('p', { className: 'mb-4 leading-relaxed' }, children),

    [BLOCKS.HEADING_1]: (node, children) =>
      React.createElement('h1', { className: 'text-3xl font-bold mt-8 mb-4' }, children),

    [BLOCKS.HEADING_2]: (node, children) =>
      React.createElement('h2', { className: 'text-2xl font-bold mt-8 mb-3' }, children),

    [BLOCKS.HEADING_3]: (node, children) =>
      React.createElement('h3', { className: 'text-xl font-bold mt-6 mb-3' }, children),

    [BLOCKS.HEADING_4]: (node, children) =>
      React.createElement('h4', { className: 'text-lg font-bold mt-6 mb-2' }, children),

    [BLOCKS.HEADING_5]: (node, children) =>
      React.createElement('h5', { className: 'text-base font-bold mt-4 mb-2' }, children),

    [BLOCKS.HEADING_6]: (node, children) =>
      React.createElement('h6', { className: 'text-sm font-bold mt-4 mb-2' }, children),

    [BLOCKS.UL_LIST]: (node, children) =>
      React.createElement('ul', { className: 'list-disc pl-6 mb-4 space-y-2' }, children),

    [BLOCKS.OL_LIST]: (node, children) =>
      React.createElement('ol', { className: 'list-decimal pl-6 mb-4 space-y-2' }, children),

    [BLOCKS.LIST_ITEM]: (node, children) => React.createElement('li', {}, children),

    [BLOCKS.QUOTE]: (node, children) =>
      React.createElement(
        'blockquote',
        { className: 'border-l-4 border-gray-300 pl-4 py-2 my-4 italic' },
        children
      ),

    [BLOCKS.HR]: () =>
      React.createElement('hr', { className: 'my-6 border-gray-200 dark:border-gray-700' }),

    [INLINES.HYPERLINK]: (node, children) => {
      const { data } = node;
      const { uri } = data;
      const isExternal = uri.startsWith('http');

      return React.createElement(
        'a',
        {
          href: uri,
          className:
            'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline',
          ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
        },
        children
      );
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { data } = node;
      const { target } = data;
      const { fields } = target;

      // This is a simplified implementation
      // In a real app, you'd use proper asset handling
      if (fields?.file?.url) {
        const url = fields.file.url;
        const isImage = url.match(/\.(jpg|jpeg|png|gif|webp)$/i);

        if (isImage) {
          return React.createElement('img', {
            src: `https:${url}`,
            alt: fields.description || 'Content image',
            className: 'my-4 rounded-lg max-w-full',
          });
        }
      }

      return null;
    },
  },
};
