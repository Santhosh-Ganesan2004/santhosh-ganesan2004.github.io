import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPost, MarkdownContent } from '../lib/content';
import { MarkdownContent as MarkdownContentComponent } from '../components/MarkdownContent';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<MarkdownContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const fetchedPost = await getBlogPost(slug);
        setPost(fetchedPost);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error || 'Post not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <MarkdownContentComponent content={post} />
      </div>
    </div>
  );
};

export default BlogPost;
