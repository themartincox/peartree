import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

export const richTextRenderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} rel="nofollow noopener" className="underline">
        {children}
      </a>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: any) => (
      <h2 className="mt-8 text-2xl font-semibold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: any) => (
      <h3 className="mt-6 text-xl font-semibold">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => <p className="mb-4">{children}</p>,
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className="list-disc ml-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol className="list-decimal ml-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (_: any, children: any) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
  },
}
