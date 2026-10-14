import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../../types';
import { useBookmarks } from '../../context/BookmarkContext';

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, featured = false }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(blog.slug);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className={`group relative flex flex-col bg-[#12283D] border border-[#1E3A5F]/70 rounded-xl overflow-hidden hover:border-[#16A34A]/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 ${
        featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      {/* Visual Slot with Fallback Container */}
      <div
        className={`relative overflow-hidden bg-[#071A2B] ${
          featured ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'
        }`}
      >
        {!imageFailed && blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.imageAlt || blog.title}
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#102A43] to-[#071A2B] text-center">
            <span className="text-3xl mb-2">🏏</span>
            <span className="text-xs font-semibold text-[#86EFAC] uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-[#64748B] mt-1">CricketVerse Special</span>
          </div>
        )}

        {/* Bookmark toggle button on top corner */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleBookmark(blog.slug);
          }}
          aria-label={bookmarked ? 'Remove bookmark' : 'Save article'}
          className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-colors ${
            bookmarked
              ? 'bg-[#16A34A] text-white'
              : 'bg-[#071A2B]/80 text-[#B8C7D9] hover:text-white hover:bg-[#071A2B]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Content Body */}
      <div className={`p-6 flex flex-col justify-between flex-grow ${featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
        <div>
          {/* Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-[#86EFAC] font-medium mb-3">
            <span className="uppercase tracking-wider font-semibold text-[#16A34A]">
              {blog.category}
            </span>
            <span aria-hidden="true" className="text-[#3A506B]">·</span>
            <span className="flex items-center gap-1 text-[#8FA2B7]">
              <Calendar className="w-3 h-3" />
              {blog.publishedAt}
            </span>
            <span aria-hidden="true" className="text-[#3A506B]">·</span>
            <span className="flex items-center gap-1 text-[#8FA2B7]">
              <Clock className="w-3 h-3" />
              {blog.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-heading text-white font-bold leading-tight group-hover:text-[#86EFAC] transition-colors mb-2.5 ${
              featured ? 'text-2xl lg:text-3xl' : 'text-xl'
            }`}
          >
            <Link to={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#B8C7D9] leading-relaxed line-clamp-3 mb-4">
            {blog.excerpt}
          </p>
        </div>

        {/* Footer info: Author & Read link */}
        <div className="pt-4 border-t border-[#1E3A5F]/60 flex items-center justify-between text-xs text-[#8FA2B7]">
          <div>
            <span className="text-white font-medium">{blog.author.name}</span>
            <span className="text-[#64748B] block text-[11px] truncate max-w-[170px]">
              {blog.author.role}
            </span>
          </div>

          <Link
            to={`/blogs/${blog.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-[#86EFAC] hover:text-white transition-colors group/btn"
          >
            <span>Read Article</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
