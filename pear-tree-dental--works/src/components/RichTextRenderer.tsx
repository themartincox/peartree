import type React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { richTextRenderOptions } from '@/lib/richTextRenderOptions';

interface RichTextRendererProps {
  document: Document | null | undefined;
  className?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  document,
  className = ''
}) => {
  if (!document) {
    return null;
  }

  return (
    <div className={className}>
      {documentToReactComponents(document, richTextRenderOptions)}
    </div>
  );
};

export default RichTextRenderer;
