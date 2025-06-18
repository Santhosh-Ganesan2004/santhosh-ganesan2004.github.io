import React from 'react';
import { MarkdownContent as MarkdownContentType } from '../lib/markdown';

interface MarkdownContentProps {
  content?: MarkdownContentType;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  if (!content || !content.meta) {
    return <div className="text-red-500">Content not found.</div>;
  }

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{content.meta.title}</h1>
        {content.meta.date && (
          <time className="text-gray-600 dark:text-gray-400">
            {new Date(content.meta.date).toLocaleDateString()}
          </time>
        )}
        {content.meta.tags && content.meta.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {content.meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {content.meta.image && (
        <img
          src={content.meta.image}
          alt={content.meta.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />

      {content.meta.link && (
        <div className="mt-8">
          <a
            href={content.meta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}; 