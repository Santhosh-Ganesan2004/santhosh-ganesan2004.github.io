
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: 'getting-started-with-iot',
      title: 'Getting Started with IoT Development: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of IoT development, from choosing the right hardware to building your first connected device.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      tags: ['IoT', 'Beginner', 'Hardware', 'Tutorial'],
      publishedAt: '2024-01-15',
      readTime: '8 min read'
    },
    {
      id: 'ai-edge-computing',
      title: 'AI at the Edge: Bringing Intelligence to IoT Devices',
      excerpt: 'Explore how edge computing is revolutionizing AI applications in IoT, reducing latency and improving privacy.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      tags: ['AI', 'Edge Computing', 'IoT', 'Machine Learning'],
      publishedAt: '2024-02-03',
      readTime: '12 min read'
    },
    {
      id: 'smart-home-automation',
      title: 'Building Smart Home Automation with Raspberry Pi',
      excerpt: 'Step-by-step guide to creating your own smart home system using Raspberry Pi and various sensors.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1558618667-fcd25c85cd64?w=400&h=300&fit=crop',
      tags: ['Raspberry Pi', 'Smart Home', 'Automation', 'DIY'],
      publishedAt: '2024-02-20',
      readTime: '15 min read'
    },
    {
      id: 'machine-learning-sensors',
      title: 'Using Machine Learning for Sensor Data Analysis',
      excerpt: 'Discover how to apply machine learning algorithms to analyze and predict patterns in sensor data.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['Machine Learning', 'Sensors', 'Data Analysis', 'Python'],
      publishedAt: '2024-03-10',
      readTime: '10 min read'
    },
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security: Best Practices for Connected Devices',
      excerpt: 'Essential security considerations and best practices for developing secure IoT applications.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      tags: ['Security', 'IoT', 'Best Practices', 'Cybersecurity'],
      publishedAt: '2024-04-05',
      readTime: '7 min read'
    },
    {
      id: 'future-of-ai-iot',
      title: 'The Future of AI and IoT: Trends and Predictions',
      excerpt: 'Exploring upcoming trends and innovations in the convergence of artificial intelligence and IoT.',
      content: 'Full blog post content...',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      tags: ['AI', 'IoT', 'Future Tech', 'Trends'],
      publishedAt: '2024-04-22',
      readTime: '9 min read'
    }
  ];

  // Get all unique tags for filter
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogPosts]);

  // Filter blog posts based on search term and selected tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [blogPosts, searchTerm, selectedTags]);

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

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts on AI, IoT, and emerging technologies.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/70 dark:bg-slate-800/50 border-blue-200/50 dark:border-slate-600 text-slate-800 dark:text-white placeholder:text-gray-400 focus:border-blue-500"
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
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-white/70 dark:bg-slate-800/50 text-slate-600 dark:text-gray-300 border-blue-200/50 dark:border-slate-600 hover:border-blue-400/70 dark:hover:border-blue-500/50'
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
                    className="flex items-center space-x-2 text-sm text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors"
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
            <p className="text-slate-600 dark:text-gray-400">
              Showing {filteredPosts.length} of {blogPosts.length} posts
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-200/50 dark:border-blue-500/20 hover:border-blue-400/70 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-600/30 text-blue-600 dark:text-blue-300 border-blue-500/50'
                          : 'bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-gray-400 text-lg">No blog posts found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Clear filters to see all posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
