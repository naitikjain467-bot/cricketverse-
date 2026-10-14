import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, Menu, X, Search } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { bookmarkedCount } = useBookmarks();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Blogs', path: '/blogs' },
    { label: 'Cricket Basics', path: '/basics' },
    { label: 'Players', path: '/players' },
    { label: 'Tournaments', path: '/tournaments' },
    { label: 'Records', path: '/records' },
    { label: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#071A2B]/95 backdrop-blur-md border-b border-[#102A43]">
      {/* Top Announcement Strip */}
      <div className="bg-[#102A43] px-4 py-1.5 text-center text-xs font-medium text-[#86EFAC] border-b border-[#12283D] flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
        <span>Welcome to CricketVerse — Explore the Game Beyond the Boundary.</span>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-[#15803D] transition-colors">
            🏏
          </div>
          <span className="font-heading text-2xl tracking-wider text-white font-bold uppercase">
            Cricket<span className="text-[#16A34A]">Verse</span>
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Single line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#B8C7D9]">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive(link.path)
                  ? 'text-[#86EFAC] border-b-2 border-[#16A34A]'
                  : 'hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Primary Actions (Search & Saved Articles) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/blogs?search=true"
            aria-label="Search articles"
            className="p-2 rounded-lg text-[#B8C7D9] hover:text-white hover:bg-[#12283D] transition-colors"
          >
            <Search className="w-4 h-4" />
          </Link>

          <Link
            to="/saved"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#12283D] text-[#F8FAFC] hover:bg-[#102A43] border border-[#1E3A5F] transition-colors whitespace-nowrap shrink-0"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Saved</span>
            {bookmarkedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#16A34A] text-white text-[10px] font-bold rounded-full">
                {bookmarkedCount}
              </span>
            )}
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#B8C7D9] hover:text-white hover:bg-[#12283D] focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B] border-b border-[#102A43] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-[#102A43] text-[#86EFAC]'
                  : 'text-[#B8C7D9] hover:bg-[#12283D] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#102A43] flex items-center justify-between">
            <Link
              to="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#86EFAC]"
            >
              <Bookmark className="w-4 h-4 text-[#16A34A]" />
              <span>Saved Articles ({bookmarkedCount})</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 text-xs font-semibold bg-[#16A34A] text-white rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
