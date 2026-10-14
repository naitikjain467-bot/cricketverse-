import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, BookOpen, Trash2 } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { BLOG_POSTS } from '../data/blogs';
import { BlogCard } from '../components/common/BlogCard';

export const SavedArticlesPage: React.FC = () => {
  const { bookmarks, toggleBookmark } = useBookmarks();

  const savedPosts = BLOG_POSTS.filter(b => bookmarks.includes(b.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            Personal Reading List
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Saved Articles
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            Your bookmarked cricket articles and analytical guides, stored locally in your browser.
          </p>
        </div>

        {savedPosts.length > 0 && (
          <span className="px-3.5 py-1.5 rounded-xl bg-[#12283D] border border-[#1E3A5F] text-xs font-semibold text-[#86EFAC] shrink-0 self-start sm:self-auto">
            {savedPosts.length} {savedPosts.length === 1 ? 'Article' : 'Articles'} Saved
          </span>
        )}
      </div>

      {/* Grid of Saved Posts */}
      {savedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPosts.map(post => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 px-4 text-center rounded-2xl bg-[#12283D] border border-[#1E3A5F] max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#102A43] text-[#86EFAC] mx-auto flex items-center justify-center">
            <Bookmark className="w-7 h-7" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white uppercase">
            No Saved Articles Yet
          </h3>
          <p className="text-sm text-[#B8C7D9] leading-relaxed">
            As you browse CricketVerse, click the bookmark icon on any article to save it to your private reading list for offline study or reference.
          </p>
          <div className="pt-2">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-colors shadow-lg shadow-[#16A34A]/20"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All 12 Cricket Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
