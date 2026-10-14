import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, HelpCircle, CheckCircle2, ArrowRight, Shield, Zap } from 'lucide-react';
import { CRICKET_BASICS_TOPICS, CRICKET_GLOSSARY } from '../data/basics';

export const CricketBasicsPage: React.FC = () => {
  const [activeGlossaryCategory, setActiveGlossaryCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryCategories = ['All', 'Batting', 'Bowling', 'Fielding', 'General'];

  const filteredGlossary = CRICKET_GLOSSARY.filter(item => {
    if (activeGlossaryCategory !== 'All' && item.category !== activeGlossaryCategory) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            Beginner’s Field Guide
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Cricket Basics & Playing Rules
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            New to cricket? Here is everything you need to understand the pitch, player roles, legal overs, run scoring, and the modes of dismissal in plain English.
          </p>
        </div>
      </div>

      {/* Interactive Visual Anatomy: The 22-Yard Pitch */}
      <section className="bg-[#102A43]/50 border border-[#1E3A5F] rounded-2xl p-6 sm:p-8">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#86EFAC] flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#16A34A]" />
            Ground Anatomy & Field Layout
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mt-1">
            Anatomy of the 22-Yard Pitch
          </h2>
          <p className="text-xs sm:text-sm text-[#B8C7D9] mt-1">
            All action centers upon the 22-yard pitch in the middle of an expansive grass oval.
          </p>
        </div>

        {/* Pitch Diagram Visual */}
        <div className="p-6 rounded-xl bg-[#071A2B] border border-[#1E3A5F] overflow-x-auto">
          <div className="min-w-[600px] flex items-center justify-between relative py-8 px-6 bg-gradient-to-r from-[#18392B] via-[#2D5A3C] to-[#18392B] rounded-lg border-2 border-[#16A34A]/40 shadow-inner">
            {/* Striker Wicket */}
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-3 h-14 bg-amber-400 rounded-sm shadow-md border border-amber-600 flex items-center justify-center text-[10px] text-black font-bold">
                |||
              </div>
              <span className="text-[11px] font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded">
                Striker Stumps
              </span>
              <span className="text-[10px] text-amber-300">Popping Crease (Safe)</span>
            </div>

            {/* 22 Yards Center Marker */}
            <div className="flex-grow flex flex-col items-center justify-center px-8 text-center z-10">
              <div className="w-full border-t border-dashed border-white/40 my-2 relative">
                <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-[#071A2B] px-3 py-0.5 rounded text-xs font-mono text-[#86EFAC] font-bold border border-[#16A34A]">
                  22 Yards (20.12 Meters)
                </span>
              </div>
              <span className="text-xs text-white/90 font-medium mt-2">
                Bowling Path · Natural Dirt & Compacted Turf
              </span>
            </div>

            {/* Non-Striker / Bowler End Wicket */}
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-3 h-14 bg-amber-400 rounded-sm shadow-md border border-amber-600 flex items-center justify-center text-[10px] text-black font-bold">
                |||
              </div>
              <span className="text-[11px] font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded">
                Bowler’s Stumps
              </span>
              <span className="text-[10px] text-amber-300">Bowling Crease</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs text-[#B8C7D9]">
            <div className="p-3 bg-[#12283D] rounded-lg border border-[#1E3A5F]">
              <strong className="text-white block">3 Stumps & 2 Bails:</strong>
              Wooden posts that form the wicket. Dislodging a bail results in a dismissal.
            </div>
            <div className="p-3 bg-[#12283D] rounded-lg border border-[#1E3A5F]">
              <strong className="text-white block">Popping Crease:</strong>
              4 feet in front of the stumps. The batter must ground their bat behind it to be safe.
            </div>
            <div className="p-3 bg-[#12283D] rounded-lg border border-[#1E3A5F]">
              <strong className="text-white block">30-Yard Circle:</strong>
              Infield boundary governing Powerplay fielding restrictions in ODIs and T20s.
            </div>
            <div className="p-3 bg-[#12283D] rounded-lg border border-[#1E3A5F]">
              <strong className="text-white block">Boundary Rope:</strong>
              Perimeter line around the field. 4 runs if ball bounces over; 6 runs if cleared on the full.
            </div>
          </div>
        </div>
      </section>

      {/* Core Topics Breakdown */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
            Core Knowledge
          </span>
          <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide">
            How the Game Works Step-by-Step
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CRICKET_BASICS_TOPICS.map((topic, idx) => (
            <div
              key={topic.id}
              className="p-6 rounded-xl bg-[#12283D] border border-[#1E3A5F] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#86EFAC] px-2 py-0.5 rounded bg-[#102A43] border border-[#1E3A5F]">
                  0{idx + 1}
                </span>
                {topic.keyRule && (
                  <span className="text-[11px] font-semibold text-[#86EFAC] bg-[#16A34A]/20 px-2 py-0.5 rounded">
                    {topic.keyRule}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {topic.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#86EFAC] font-medium leading-relaxed">
                {topic.summary}
              </p>
              <ul className="space-y-1.5 text-xs text-[#CBD5E1] pt-1">
                {topic.details.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* The 10 Modes of Dismissal Summary */}
      <section className="p-8 rounded-2xl bg-gradient-to-br from-[#102A43] to-[#071A2B] border border-[#1E3A5F] space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
            Laws of Cricket (MCC Law 30–39)
          </span>
          <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide mt-1">
            The 10 Ways a Batter Can Be Dismissed
          </h2>
          <p className="text-xs sm:text-sm text-[#B8C7D9] mt-1 max-w-2xl">
            While Bowled, Caught, LBW, Run Out, and Stumped comprise over 95% of dismissals, cricket laws codify ten distinct modes of losing a wicket.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: '1. Bowled', desc: 'The ball strikes the stumps directly and removes at least one bail.' },
            { name: '2. Caught', desc: 'Fielder catches the ball from the bat/glove before it touches ground.' },
            { name: '3. LBW', desc: 'Ball hits pad in line with stumps when it would have hit the wicket.' },
            { name: '4. Run Out', desc: 'Stumps broken while batters attempt a run and are outside the crease.' },
            { name: '5. Stumped', desc: 'Keeper breaks wicket while striker is out of ground missing the ball.' },
            { name: '6. Hit Wicket', desc: 'Batter accidentally dislodges their own bails with bat or body while playing.' },
            { name: '7. Handled Ball', desc: 'Now part of Obstructing the Field: willfully touching the ball in play with hands.' },
            { name: '8. Obstructing Field', desc: 'Willfully obstructing or distracting an opposition fielder.' },
            { name: '9. Hit Ball Twice', desc: 'Striking the ball a second time unless strictly guarding the wicket.' },
            { name: '10. Timed Out', desc: 'New incoming batter taking more than 3 minutes (2 in T20) to take guard.' }
          ].map((mode) => (
            <div key={mode.name} className="p-4 rounded-xl bg-[#071A2B] border border-[#102A43]">
              <h4 className="font-heading text-sm font-bold text-[#86EFAC] mb-1">
                {mode.name}
              </h4>
              <p className="text-[11px] text-[#B8C7D9] leading-snug">
                {mode.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            to="/blogs/cricket-rules-guide"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#86EFAC] hover:text-white transition-colors"
          >
            <span>Read the Full Complete Cricket Rules Guide Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Cricket Glossary & Terminology */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
              Cricketing Vernacular
            </span>
            <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide">
              Cricket Jargon & Terminology Glossary
            </h2>
          </div>

          {/* Search Term input */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms (e.g. Yorker, LBW)..."
              className="w-full px-3 py-2 rounded-xl bg-[#12283D] border border-[#1E3A5F] text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {glossaryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveGlossaryCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeGlossaryCategory === cat
                  ? 'bg-[#16A34A] text-white font-semibold'
                  : 'bg-[#12283D] text-[#B8C7D9] hover:text-white border border-[#1E3A5F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGlossary.map((item) => (
            <div
              key={item.term}
              className="p-4 rounded-xl bg-[#12283D] border border-[#1E3A5F] space-y-1"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-lg font-bold text-white">
                  {item.term}
                </h4>
                <span className="text-[10px] text-[#86EFAC] uppercase tracking-wider font-semibold bg-[#071A2B] px-2 py-0.5 rounded border border-[#102A43]">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed pt-1">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
