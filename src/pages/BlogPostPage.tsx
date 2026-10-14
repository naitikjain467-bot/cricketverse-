import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Check, 
  Clock, 
  Calendar, 
  BookOpen, 
  ListTree, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { useBookmarks } from '../context/BookmarkContext';
import { BlogCard } from '../components/common/BlogCard';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const postIndex = BLOG_POSTS.findIndex(b => b.slug === slug);
  const post = BLOG_POSTS[postIndex];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-heading text-4xl font-bold text-white uppercase">Article Not Found</h1>
        <p className="text-sm text-[#B8C7D9]">
          The cricket article you requested could not be located in our archive.
        </p>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16A34A] text-white text-xs font-semibold hover:bg-[#15803D] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Blogs</span>
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(post.slug);

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  const relatedArticles = post.relatedSlugs
    ? BLOG_POSTS.filter(b => post.relatedSlugs.includes(b.slug))
    : BLOG_POSTS.filter(b => b.id !== post.id && b.category === post.category).slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.subtitle,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Failed copy
    }
  };

  return (
    <article className="pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#051320] border-b border-[#102A43] py-3.5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#8FA2B7] flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3A506B]" />
            <Link to="/blogs" className="hover:text-white transition-colors">All Blogs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3A506B]" />
            <Link
              to={`/blogs?cat=${encodeURIComponent(post.category)}`}
              className="text-[#86EFAC] hover:underline transition-colors"
            >
              {post.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3A506B]" />
            <span className="text-[#64748B] truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Back link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA2B7] hover:text-[#86EFAC] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blogs</span>
          </Link>

          {/* Action buttons: Bookmark & Share */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(post.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors ${
                bookmarked
                  ? 'bg-[#16A34A] text-white border-[#16A34A]'
                  : 'bg-[#12283D] text-[#B8C7D9] border-[#1E3A5F] hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-white' : ''}`} />
              <span>{bookmarked ? 'Bookmarked' : 'Save Article'}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#12283D] text-[#B8C7D9] border border-[#1E3A5F] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#86EFAC]" />
                  <span className="text-[#86EFAC]">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quiet unboxed metadata (Zero-pill discipline) */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-[#86EFAC] font-medium pt-2">
          <span className="uppercase tracking-wider font-bold text-[#16A34A]">
            {post.category}
          </span>
          <span aria-hidden="true" className="text-[#3A506B]">·</span>
          <span className="flex items-center gap-1 text-[#8FA2B7]">
            <Calendar className="w-3 h-3" />
            Published {post.publishedAt}
          </span>
          {post.updatedAt && (
            <>
              <span aria-hidden="true" className="text-[#3A506B]">·</span>
              <span className="text-[#64748B]">Updated {post.updatedAt}</span>
            </>
          )}
          <span aria-hidden="true" className="text-[#3A506B]">·</span>
          <span className="flex items-center gap-1 text-[#8FA2B7]">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] uppercase">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-[#B8C7D9] leading-relaxed font-normal">
          {post.subtitle}
        </p>

        {/* Author Byline */}
        <div className="pt-4 border-t border-[#102A43] flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 flex items-center justify-center text-sm font-bold text-[#86EFAC]">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{post.author.name}</div>
            <div className="text-xs text-[#8FA2B7]">{post.author.role}</div>
          </div>
        </div>
      </header>

      {/* Cover Image with Fallback */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#1E3A5F] bg-[#12283D] shadow-2xl">
          {!imageError && post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.imageAlt || post.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#102A43] to-[#071A2B] text-center">
              <span className="text-5xl mb-3">🏏</span>
              <span className="font-heading text-2xl font-bold text-white uppercase">{post.category}</span>
              <span className="text-xs text-[#86EFAC] mt-1">{post.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Layout (Table of Contents + Article Body) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents Sticky Sidebar (Desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-5 rounded-xl bg-[#12283D] border border-[#1E3A5F]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1E3A5F] text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
                  <ListTree className="w-4 h-4 text-[#16A34A]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2 text-xs">
                  {post.sections.map((section, idx) => (
                    <a
                      key={section.heading}
                      href={`#section-${idx}`}
                      className="block text-[#B8C7D9] hover:text-[#86EFAC] transition-colors leading-snug py-0.5"
                    >
                      {section.heading}
                    </a>
                  ))}
                  <a
                    href="#key-takeaways"
                    className="block text-[#86EFAC] font-semibold hover:underline pt-2 border-t border-[#1E3A5F]/60"
                  >
                    Key Takeaways & Summary
                  </a>
                  {post.verifiedSources && (
                    <a
                      href="#sources"
                      className="block text-[#8FA2B7] hover:text-white"
                    >
                      Verified Sources & References
                    </a>
                  )}
                </nav>
              </div>

              {/* Tag Cloud */}
              <div className="p-5 rounded-xl bg-[#091F33] border border-[#102A43]">
                <span className="text-xs font-semibold text-[#8FA2B7] uppercase tracking-wider block mb-2">
                  Article Topics
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#8FA2B7]">
                  {post.tags.map((t, i) => (
                    <span key={t} className="inline-block">
                      #{t}{i < post.tags.length - 1 && <span className="ml-1 text-[#3A506B]">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article Prose & Sections */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-[#F8FAFC]">
            {/* Excerpt Lead Box */}
            <div className="p-6 rounded-xl bg-[#102A43]/50 border border-[#1E3A5F] text-base text-[#E2E8F0] leading-relaxed italic">
              "{post.excerpt}"
            </div>

            {/* Rendered Sections */}
            {post.sections.map((section, idx) => (
              <section key={section.heading} id={`#section-${idx}`} className="space-y-4 pt-2">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <h3 className="text-sm font-semibold text-[#86EFAC] tracking-wider uppercase mt-1">
                      {section.subheading}
                    </h3>
                  )}
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Bullet Points if present */}
                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.bulletPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout Box if present */}
                {section.callout && (
                  <div className="p-5 rounded-xl bg-[#12283D] border border-[#16A34A]/40 my-4 space-y-1.5">
                    <h4 className="font-heading text-sm uppercase tracking-wider font-bold text-[#86EFAC]">
                      {section.callout.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#B8C7D9] leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {/* Responsive Table if present */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[#1E3A5F] bg-[#071A2B]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#102A43] text-white font-semibold">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 border-b border-[#1E3A5F]">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1E3A5F]/60 text-[#CBD5E1]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#12283D]/60 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Key Takeaways Section */}
            <div id="key-takeaways" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#102A43] to-[#071A2B] border border-[#16A34A]/50 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#86EFAC]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                  Key Takeaways
                </h3>
              </div>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] shrink-0 mt-1.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Sources & References */}
            {post.verifiedSources && (
              <div id="sources" className="p-5 rounded-xl bg-[#091F33] border border-[#102A43] space-y-2 text-xs text-[#8FA2B7]">
                <span className="font-semibold text-white uppercase tracking-wider block">
                  Official Verification & Sources
                </span>
                <ul className="space-y-1 list-disc list-inside">
                  {post.verifiedSources.map((source, sIdx) => (
                    <li key={sIdx}>{source}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Previous & Next Article Navigation */}
            <div className="pt-8 border-t border-[#102A43] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  to={`/blogs/${prevPost.slug}`}
                  className="p-4 rounded-xl bg-[#12283D] border border-[#1E3A5F] hover:border-[#16A34A] transition-colors group"
                >
                  <span className="text-[10px] font-semibold text-[#8FA2B7] uppercase tracking-wider block flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Previous Article
                  </span>
                  <span className="font-heading text-sm font-bold text-white group-hover:text-[#86EFAC] line-clamp-1">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  to={`/blogs/${nextPost.slug}`}
                  className="p-4 rounded-xl bg-[#12283D] border border-[#1E3A5F] hover:border-[#16A34A] transition-colors group sm:text-right"
                >
                  <span className="text-[10px] font-semibold text-[#8FA2B7] uppercase tracking-wider block flex items-center gap-1 sm:justify-end mb-1">
                    Next Article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-heading text-sm font-bold text-white group-hover:text-[#86EFAC] line-clamp-1">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Strip */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#102A43]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
                Continue Reading
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                Related Articles
              </h2>
            </div>
            <Link
              to="/blogs"
              className="text-xs sm:text-sm font-semibold text-[#86EFAC] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(rel => (
              <BlogCard key={rel.id} blog={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
