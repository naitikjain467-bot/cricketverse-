import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051320] border-t border-[#102A43] text-[#B8C7D9] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-block">
              <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center text-white font-bold text-lg">
                🏏
              </div>
              <span className="font-heading text-2xl tracking-wider text-white font-bold uppercase">
                Cricket<span className="text-[#16A34A]">Verse</span>
              </span>
            </Link>
            <p className="text-sm text-[#86EFAC] font-medium">
              Every Match. Every Legend. Every Story.
            </p>
            <p className="text-sm text-[#8FA2B7] leading-relaxed max-w-sm">
              CricketVerse is a premier sports publication dedicated to exploring cricket history, legendary players, tournament breakdowns, tactical masterclasses, and verified milestones across all formats.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#disclaimer"
                className="text-xs text-[#86EFAC] hover:underline flex items-center gap-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Historical Data</span>
              </a>
              <Link
                to="/about"
                className="text-xs text-[#8FA2B7] hover:text-white flex items-center gap-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Editorial Standards</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-semibold">
              Explore Cricket
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors">
                  All 12 Articles
                </Link>
              </li>
              <li>
                <Link to="/basics" className="hover:text-white transition-colors">
                  Cricket Basics & Rules
                </Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-white transition-colors">
                  Legendary Player Profiles
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="hover:text-white transition-colors">
                  Global Tournaments & IPL
                </Link>
              </li>
              <li>
                <Link to="/records" className="hover:text-white transition-colors">
                  Historical Records
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  Saved Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-semibold">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blogs?cat=Cricket+History" className="hover:text-white transition-colors">
                  Cricket History
                </Link>
              </li>
              <li>
                <Link to="/blogs?cat=Legendary+Players" className="hover:text-white transition-colors">
                  Legendary Players
                </Link>
              </li>
              <li>
                <Link to="/blogs?cat=International+Cricket" className="hover:text-white transition-colors">
                  International Cricket
                </Link>
              </li>
              <li>
                <Link to="/blogs?cat=IPL+and+T20+Leagues" className="hover:text-white transition-colors">
                  IPL & T20 Leagues
                </Link>
              </li>
              <li>
                <Link to="/blogs?cat=Cricket+Training+and+Skills" className="hover:text-white transition-colors">
                  Training & Skills
                </Link>
              </li>
              <li>
                <Link to="/blogs?cat=Cricket+Technology+and+Analysis" className="hover:text-white transition-colors">
                  Technology & DRS
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Community */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-semibold">
              Publication
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About CricketVerse
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Editorial Contact Form
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#6B829D] block pt-1">
                  Connect on Social (Placeholders)
                </span>
                <div className="flex gap-3 pt-1.5 text-xs text-[#8FA2B7]">
                  <span className="hover:text-white cursor-pointer">Twitter/X</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer">YouTube</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer">Instagram</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Transparency & Statistical Disclaimer */}
        <div id="disclaimer" className="p-4 rounded-xl bg-[#081B2D] border border-[#102A43] text-xs text-[#8FA2B7] space-y-1 mb-8">
          <p className="font-semibold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
            Official Data Transparency Notice
          </p>
          <p>
            CricketVerse publishes educational articles, historical milestones, and analytical guides. Statistics and player career figures are verified against official ICC, BCCI, and Wisden records. Ongoing match scores, live fixture schedules, and current player rankings are dynamic and must be checked through official governing body portals.
          </p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 border-t border-[#102A43] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {new Date().getFullYear()} CricketVerse. Built for cricket enthusiasts and sports researchers worldwide.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#B8C7D9]">About</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#B8C7D9]">Contact</Link>
            <span>·</span>
            <Link to="/records" className="hover:text-[#B8C7D9]">Historical Records</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
