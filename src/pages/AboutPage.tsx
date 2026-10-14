import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Users, Award, ArrowRight, Target, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 pb-8 border-b border-[#102A43]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43] border border-[#1E3A5F] text-xs font-semibold text-[#86EFAC] mb-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
          <span>Independent Sports Editorial</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
          About CricketVerse
        </h1>
        <p className="text-base sm:text-lg text-[#86EFAC] font-medium">
          “Every Match. Every Legend. Every Story.”
        </p>
      </div>

      {/* Mission & Purpose */}
      <div className="p-8 rounded-2xl bg-[#12283D] border border-[#1E3A5F] space-y-4">
        <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
          <Target className="w-5 h-5 text-[#16A34A]" />
          Our Mission & Vision
        </h2>
        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          CricketVerse is a cricket-focused digital publication created for fans who want to understand and enjoy the game beyond the scoreboard.
        </p>
        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          From the earliest days of cricket in rural England to the modern era of high-intensity international tournaments and franchise leagues, CricketVerse explores the stories, players, rules, records, and innovations that shape the sport.
        </p>
        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          Our goal is to make cricket information engaging, understandable, and accessible to both beginners and lifelong fans.
        </p>
        <div className="p-4 rounded-xl bg-[#071A2B] border border-[#16A34A]/40 text-[#86EFAC] text-sm font-semibold">
          Our Mission: To bring every cricket story, every legendary performance, and every important aspect of the game into one informative destination.
        </div>
      </div>

      {/* Editorial Pillars */}
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
          Our Three Editorial Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#12283D] border border-[#1E3A5F] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/20 text-[#86EFAC] flex items-center justify-center font-bold text-base">
              01
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              Historical Precision
            </h3>
            <p className="text-xs text-[#B8C7D9] leading-relaxed">
              We cross-check all records, dates, tournament scores, and bowling milestones against official ICC and Wisden historical compendiums.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12283D] border border-[#1E3A5F] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/20 text-[#86EFAC] flex items-center justify-center font-bold text-base">
              02
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              Beginner-First Clarity
            </h3>
            <p className="text-xs text-[#B8C7D9] leading-relaxed">
              Cricket jargon can be intimidating. We explain complex laws—such as LBW, Powerplays, and DRS ball tracking—in simple, engaging language.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12283D] border border-[#1E3A5F] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/20 text-[#86EFAC] flex items-center justify-center font-bold text-base">
              03
            </div>
            <h3 className="font-heading text-lg font-bold text-white uppercase">
              Data Integrity
            </h3>
            <p className="text-xs text-[#B8C7D9] leading-relaxed">
              We never fabricate live scores, ongoing match states, or unverified claims. We clearly distinguish confirmed records from evolving stats.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
          The Contributors & Researchers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: 'Rohan Deshmukh', role: 'Senior Cricket Biographer & IPL Strategist', bio: 'Former club cricketer and sports journalist covering international tours and IPL auctions.' },
            { name: 'Marcus Sterling', role: 'Lead Cricket Statistician & Historian', bio: 'Archival researcher specializing in 19th-century cricket history and cross-format metrics.' },
            { name: 'Priya Narayanan', role: 'Umpiring Educator & Technical Bowler', bio: 'Certified umpire and coach focused on making MCC Laws of Cricket intuitive for young cricketers.' }
          ].map(member => (
            <div key={member.name} className="p-5 rounded-xl bg-[#091F33] border border-[#102A43] space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                {member.name}
              </h3>
              <p className="text-xs text-[#86EFAC] font-semibold">
                {member.role}
              </p>
              <p className="text-xs text-[#8FA2B7] leading-relaxed pt-1">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore CTA */}
      <div className="pt-6 border-t border-[#102A43] text-center">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-xs transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Explore All 12 Cricket Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
