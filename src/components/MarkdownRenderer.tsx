import React from 'react';

interface MarkdownRendererProps {
  meta: {
    title?: string;
    date?: string;
    tags?: string[];
    image?: string;
    excerpt?: string;
    link?: string;
    [key: string]: any;
  };
  html: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ meta, html }) => {
  return (
    <section className="flex justify-center px-2 sm:px-0">
      <article className="w-full max-w-3xl bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 flex-1 overflow-y-auto">
        {/* Cover Image */}
        {meta.image && (
          <div className="w-full flex justify-center mb-8">
            <img
              src={meta.image}
              alt={meta.title}
              className="rounded-2xl shadow-lg max-h-80 object-cover w-full"
              style={{ objectPosition: 'center' }}
            />
          </div>
        )}
        {/* Title & Meta */}
        <header className="mb-8 text-center">
          {meta.title && (
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-slate-900 dark:text-white">
              {meta.title}
            </h1>
          )}
          {meta.excerpt && (
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto">
              {meta.excerpt}
            </p>
          )}
          <div className="flex flex-wrap gap-2 justify-center items-center mb-2">
            {meta.tags && meta.tags.length > 0 && meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          {meta.date && (
            <time className="block text-sm text-gray-500 dark:text-gray-400">
              {new Date(meta.date).toLocaleDateString()}
            </time>
          )}
        </header>
        {/* Markdown Content (no inner scroll) */}
        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:mb-4 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-xl prose-img:shadow-lg prose-img:mb-8 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-slate-800 prose-blockquote:p-4 prose-blockquote:italic prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-4 prose-li:marker:text-blue-500 leading-relaxed text-base"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {meta.link && (
          <div className="mt-6 flex justify-center">
            <a
              href={meta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors text-xs"
            >
              Open Link
            </a>
          </div>
        )}
      </article>
    </section>
  );
};

export default MarkdownRenderer; 