import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Search, Calendar, ChevronRight, Trophy, Zap, Shield, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { PLAYERS } from '../data/players';
import { BlogCard } from '../components/common/BlogCard';
import { PlayerCard } from '../components/common/PlayerCard';
import { Newsletter } from '../components/common/Newsletter';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [quickSearch, setQuickSearch] = useState('');

  const featuredPost = BLOG_POSTS.find(b => b.featured) || BLOG_POSTS[0];
  const latestPosts = BLOG_POSTS.filter(b => b.id !== featuredPost.id).slice(0, 4);
  const editorsPicks = [
    BLOG_POSTS.find(b => b.slug === 'cricket-rules-guide')!,
    BLOG_POSTS.find(b => b.slug === 'ms-dhoni')!,
    BLOG_POSTS.find(b => b.slug === 'fast-vs-spin-bowling')!
  ].filter(Boolean);

  const featuredLegends = PLAYERS.slice(0, 4);

  const categories = [
    { name: 'Cricket History', icon: '🏛️', slug: 'Cricket+History', desc: 'Origins, MCC codification, 1877 Test dawn, and 150-year evolution.' },
    { name: 'Cricket Rules and Basics', icon: '📜', slug: 'Cricket+Rules+and+Basics', desc: 'LBW laws, dismissals, pitch anatomy, and Powerplays explained simply.' },
    { name: 'Legendary Players', icon: '👑', slug: 'Legendary+Players', desc: 'Deep dives on Tendulkar, Kohli, Dhoni, Bradman, and all-time icons.' },
    { name: 'International Cricket', icon: '🌍', slug: 'International+Cricket', desc: 'World Cups, bilateral rivalries, and the World Test Championship.' },
    { name: 'IPL and T20 Leagues', icon: '⚡', slug: 'IPL+and+T20+Leagues', desc: 'Auction dynamics, NRR math, strategy, and franchise entertainment.' },
    { name: 'Records and Statistics', icon: '📊', slug: 'Records+and+Statistics', desc: 'Verified statistical milestones, unbreakable records, and master bowling spells.' }
  ];

  const historicalTimeline = [
    { year: '1877', title: 'First Recognized Test Match', desc: 'Australia defeats England by 45 runs at the Melbourne Cricket Ground; Bannerman hits 165.' },
    { year: '1882', title: 'The Birth of The Ashes', desc: 'Australia defeats England at The Oval; The Sporting Times publishes the famous mock obituary.' },
    { year: '1971', title: 'First One Day International', desc: 'Accidental 40-over match played at MCG after a rain-washed Test initiates white-ball cricket.' },
    { year: '1975', title: 'First Men’s Cricket World Cup', desc: 'West Indies defeat Australia at Lord’s in a 60-over spectacle behind Clive Lloyd’s 102.' },
    { year: '1983', title: 'Kapil’s Devils Shake the World', desc: 'India defends 183 against the mighty West Indies at Lord’s, catalyzing the Asian cricket explosion.' },
    { year: '2007', title: 'Inaugural Men’s T20 World Cup', desc: 'MS Dhoni’s young Indian squad defeats Pakistan in Johannesburg, sparking the global T20 revolution.' },
    { year: '2008', title: 'Launch of the Indian Premier League', desc: 'Franchise cricket and auction dynamics reshape international athlete remuneration and viewership.' },
    { year: '2011', title: 'Tendulkar’s World Cup Dream Fulfilled', desc: 'Dhoni’s winning six at Mumbai’s Wankhede crowns India world champions after 28 years.' },
    { year: '2024', title: 'India’s Unbeaten T20 World Cup Triumph', desc: 'Rohit Sharma’s team wins thrilling Barbados final to claim India’s fourth World Cup trophy.' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      navigate(`/blogs?q=${encodeURIComponent(quickSearch.trim())}`);
    } else {
      navigate('/blogs');
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071A2B] pt-8 lg:pt-16 pb-12 border-b border-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43] border border-[#1E3A5F] text-xs font-semibold text-[#86EFAC]">
                <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>The Premier Digital Cricket Publication</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] uppercase">
                The World of Cricket, <br className="hidden sm:inline" />
                <span className="text-[#86EFAC]">All in One Place.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#B8C7D9] leading-relaxed max-w-xl">
                Explore cricket legends, historic matches, international tournaments, IPL stories, playing rules, iconic records, and the moments that make cricket unforgettable.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/blogs"
                  className="px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#16A34A]/25"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Cricket Blogs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/basics"
                  className="px-6 py-3.5 rounded-xl bg-[#12283D] hover:bg-[#102A43] border border-[#1E3A5F] text-[#F8FAFC] font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#86EFAC]" />
                  <span>Learn Cricket Basics</span>
                </Link>
              </div>

              {/* Hero Search Box */}
              <form onSubmit={handleSearchSubmit} className="pt-4 max-w-lg">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8FA2B7]" />
                  <input
                    type="text"
                    value={quickSearch}
                    onChange={(e) => setQuickSearch(e.target.value)}
                    placeholder="Search 12 blogs, players, rules, or records..."
                    className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[#12283D] border border-[#1E3A5F] text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#16A34A] text-white text-xs font-semibold hover:bg-[#15803D] transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Hero Stadium Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#1E3A5F] shadow-2xl group aspect-[4/3] bg-[#12283D]">
                <img
                  src="/src/assets/images/cricket_stadium_night_1792018025236.jpg"
                  alt="Packed cricket stadium under brilliant floodlights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071A2B]/85 backdrop-blur-md border border-[#102A43]">
                  <span className="text-[11px] font-semibold text-[#86EFAC] uppercase tracking-wider block">
                    Featured Historical Guide
                  </span>
                  <Link
                    to="/blogs/history-of-cricket"
                    className="font-heading text-lg text-white font-bold hover:text-[#86EFAC] transition-colors line-clamp-1 mt-0.5 block"
                  >
                    The History of Cricket: From Rural Greens to Global Spectacle
                  </Link>
                  <p className="text-xs text-[#8FA2B7] mt-1 line-clamp-1">
                    How four centuries of athletic and diplomatic history forged the modern game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Editor’s Feature
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
              Featured Deep-Dive
            </h2>
          </div>
          <Link
            to="/blogs"
            className="text-xs sm:text-sm font-semibold text-[#86EFAC] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View All 12 Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <BlogCard blog={featuredPost} featured={true} />
      </section>

      {/* Latest Cricket Blogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Fresh Perspectives
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
              Latest Cricket Blogs
            </h2>
          </div>
          <Link
            to="/blogs"
            className="text-xs sm:text-sm font-semibold text-[#86EFAC] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Browse Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map(post => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      </section>

      {/* Explore Cricket Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
            Structured Knowledge
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mt-1">
            Explore by Category
          </h2>
          <p className="text-sm text-[#8FA2B7] mt-2">
            Whether you are learning the basic laws or studying legendary historical rivalries, choose a topic below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              to={`/blogs?cat=${cat.slug}`}
              className="p-6 rounded-xl bg-[#12283D] border border-[#1E3A5F] hover:border-[#16A34A] hover:bg-[#102A43] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-xs font-mono text-[#8FA2B7]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#86EFAC] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1E3A5F]/60 flex items-center justify-between text-xs font-semibold text-[#86EFAC] group-hover:text-white">
                <span>Explore Articles</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Legends of Cricket Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Hall of Fame
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
              Legends of Cricket
            </h2>
          </div>
          <Link
            to="/players"
            className="text-xs sm:text-sm font-semibold text-[#86EFAC] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View All 16 Legends</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLegends.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>

      {/* Cricket Through the Years (Historical Timeline) */}
      <section className="bg-[#091F33] py-16 border-y border-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Archival Milestones
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mt-1">
              Cricket Through the Years
            </h2>
            <p className="text-sm text-[#8FA2B7] mt-2">
              From the 1877 inaugural Test match in Melbourne to modern T20 spectacles, follow the definitive timeline of world cricket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalTimeline.map((item) => (
              <div
                key={item.year}
                className="p-5 rounded-xl bg-[#12283D] border border-[#1E3A5F] hover:border-[#16A34A]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#16A34A]/20 text-[#86EFAC] border border-[#16A34A]/30">
                    {item.year}
                  </span>
                  <span className="text-xs text-[#8FA2B7]">Milestone</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/blogs/history-of-cricket"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-colors"
            >
              <span>Read the Full Cricket History Essay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Curated Selection
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
              Editor’s Picks
            </h2>
          </div>
          <Link
            to="/blogs"
            className="text-xs sm:text-sm font-semibold text-[#86EFAC] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorsPicks.map(post => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
