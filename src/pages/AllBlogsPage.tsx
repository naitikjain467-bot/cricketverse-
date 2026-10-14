import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, X, BookOpen, AlertCircle } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogCategory } from '../types';
import { BlogCard } from '../components/common/BlogCard';

export const AllBlogsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('cat') || 'All';
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'alphabetical'>('latest');

  const categories: (string | BlogCategory)[] = [
    'All',
    'Cricket History',
    'Cricket Rules and Basics',
    'Cricket Formats',
    'Legendary Players',
    'International Cricket',
    'IPL and T20 Leagues',
    'Records and Statistics',
    'Cricket Training and Skills',
    'Cricket Technology and Analysis'
  ];

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSearchParams({});
    setSortBy('latest');
  };

  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter(blog => {
      // Category filter
      if (currentCategory !== 'All' && blog.category !== currentCategory) {
        return false;
      }

      // Search query filter (title, excerpt, category, tags, section content)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = blog.title.toLowerCase().includes(query);
        const inExcerpt = blog.excerpt.toLowerCase().includes(query);
        const inCategory = blog.category.toLowerCase().includes(query);
        const inTags = blog.tags.some(t => t.toLowerCase().includes(query));
        const inAuthor = blog.author.name.toLowerCase().includes(query);
        const inSections = blog.sections.some(s =>
          s.heading.toLowerCase().includes(query) ||
          s.paragraphs.some(p => p.toLowerCase().includes(query))
        );

        if (!inTitle && !inExcerpt && !inCategory && !inTags && !inAuthor && !inSections) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      }
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [currentCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            The Complete Archive
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            All Cricket Blogs
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            Browse our complete library of 12 full-length, in-depth cricket articles covering 150 years of history, rules, formats, legend biographies, coaching skills, and analytics.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="space-y-4 bg-[#12283D] p-5 rounded-2xl border border-[#1E3A5F]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-lg">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8FA2B7]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, excerpt, player, or rule..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8FA2B7] hover:text-white"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-[#86EFAC]" />
            <span className="text-xs text-[#8FA2B7] whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs font-medium focus:outline-none focus:border-[#16A34A] cursor-pointer"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">Title (A to Z)</option>
            </select>

            {(currentCategory !== 'All' || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="px-3 py-2 rounded-xl bg-[#1E3A5F]/70 text-xs text-[#86EFAC] hover:bg-[#1E3A5F] transition-colors flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Buttons (Functional Interactive Filter Controls) */}
        <div className="pt-3 border-t border-[#1E3A5F]/60">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs text-[#8FA2B7] font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-[#16A34A]" />
              Filter:
            </span>
            {categories.map(cat => {
              const active = currentCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-[#16A34A] text-white font-semibold shadow-sm'
                      : 'bg-[#071A2B] text-[#B8C7D9] hover:text-white hover:bg-[#102A43] border border-[#1E3A5F]/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Count Status */}
      <div className="flex items-center justify-between text-xs text-[#8FA2B7] px-1">
        <span>
          Showing <strong>{filteredBlogs.length}</strong> of {BLOG_POSTS.length} articles
          {currentCategory !== 'All' && ` in "${currentCategory}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
      </div>

      {/* Articles Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 px-4 text-center rounded-2xl bg-[#12283D] border border-[#1E3A5F] max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-900/30 text-rose-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white uppercase">
            No Articles Found
          </h3>
          <p className="text-sm text-[#B8C7D9]">
            We could not find any articles matching your search criteria. Try using different keywords or clear your active filters.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};
