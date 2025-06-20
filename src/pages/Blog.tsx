import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getBlogPosts } from '../lib/content';

interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image?: string;
  category?: string;
  readTime?: string;
  content: string;
  slug: string;
  meta?: {
    title?: string;
    date?: string;
    tags?: string[];
    excerpt?: string;
    readTime?: string;
    image?: string;
    category?: string;
    content?: string;
  };
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Get all unique tags for filter
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter blog posts based on search term and selected tags
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const title = post.meta?.title || '';
      const excerpt = post.meta?.excerpt || '';
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.meta?.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [posts, searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts on AI, IoT, and emerging technologies.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>

            {/* Filter Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              
              {/* Clear Filters */}
              {(searchTerm || selectedTags.length > 0) && (
                <div className="flex justify-center">
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  >
                    <X size={16} />
                    <span>Clear filters</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {(searchTerm || selectedTags.length > 0) && (
          <div className="text-center mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              Showing {filteredPosts.length} of {posts.length} posts
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] border border-slate-100 dark:border-slate-700"
            >
              {post.meta?.image && (
                <div className="relative h-52 w-full overflow-hidden">
                <img
                    src={post.meta.image}
                    alt={post.meta.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{formatDate(post.meta?.date || '')}</span>
                  </div>
                  {post.meta?.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.meta.readTime}</span>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white line-clamp-2">
                  {post.meta?.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {post.meta?.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.meta?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                <Link
                  to={`/blog/${post.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors text-sm group-hover:scale-105 group-hover:shadow-lg"
                >
                    Read More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
