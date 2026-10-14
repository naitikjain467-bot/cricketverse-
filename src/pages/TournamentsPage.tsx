import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Globe, Shield, ArrowRight, Info } from 'lucide-react';
import { TOURNAMENTS } from '../data/tournaments';

export const TournamentsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            Championship Compendium
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Global Tournaments & Leagues
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            From the pinnacle of the ICC ODI World Cup and World Test Championship to the commercial power of the Indian Premier League and the 140-year tradition of The Ashes.
          </p>
        </div>
      </div>

      {/* Governing Transparency Notice */}
      <div className="p-4 rounded-xl bg-[#12283D] border border-[#1E3A5F] flex items-start gap-3 text-xs text-[#8FA2B7]">
        <Info className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
        <p>
          CricketVerse maintains verified historical archives and tournament structures. For ongoing tournament tickets, current season point tables, and upcoming match fixtures, consult official portals at <a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" className="text-[#86EFAC] underline">icc-cricket.com</a> or <a href="https://www.iplt20.com" target="_blank" rel="noopener noreferrer" className="text-[#86EFAC] underline">iplt20.com</a>.
        </p>
      </div>

      {/* Tournaments List */}
      <div className="space-y-10">
        {TOURNAMENTS.map((t, idx) => (
          <section
            key={t.id}
            id={t.id}
            className="p-6 sm:p-8 rounded-2xl bg-[#12283D] border border-[#1E3A5F] space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E3A5F]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#86EFAC] bg-[#071A2B] px-2 py-0.5 rounded border border-[#102A43]">
                    {t.shortName}
                  </span>
                  <span className="text-xs text-[#8FA2B7]">
                    Inaugurated {t.firstEdition} · {t.frequency}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                  {t.name}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#071A2B] text-xs font-semibold text-[#86EFAC] border border-[#102A43]">
                  Format: {t.format}
                </span>
                {t.relatedBlogSlug && (
                  <Link
                    to={`/blogs/${t.relatedBlogSlug}`}
                    className="px-3 py-1 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-xs font-semibold text-white transition-colors flex items-center gap-1"
                  >
                    <span>Read Special</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>

            {/* Overview & Trophy Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3">
                <h3 className="font-heading text-lg font-bold text-white uppercase">
                  Tournament Overview
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {t.overview}
                </p>
                <div className="p-4 rounded-xl bg-[#071A2B] border border-[#102A43] space-y-1 mt-3">
                  <span className="text-xs font-semibold text-[#86EFAC] uppercase tracking-wider block">
                    Competition Structure & Teams
                  </span>
                  <p className="text-xs text-[#B8C7D9] leading-relaxed">
                    {t.competitionStructure}
                  </p>
                  <p className="text-[11px] text-[#64748B] pt-1">
                    Participants: {t.participatingTeams}
                  </p>
                </div>
              </div>

              {/* Trophy & Historical Significance */}
              <div className="space-y-3 bg-[#071A2B] p-5 rounded-xl border border-[#102A43]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-[#16A34A]" />
                  <span>The Trophy & Heritage</span>
                </div>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  {t.trophyDescription}
                </p>
                <div className="pt-2 border-t border-[#102A43]">
                  <span className="text-[11px] font-semibold text-white uppercase tracking-wider block mb-1">
                    Historical Milestones
                  </span>
                  <ul className="space-y-1 text-xs text-[#8FA2B7]">
                    {t.notableMilestones.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#16A34A] shrink-0 mt-1.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Champions Table */}
            <div>
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2.5">
                Roll of Honour & Recent Champions
              </h3>
              <div className="overflow-x-auto rounded-xl border border-[#1E3A5F] bg-[#071A2B]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#102A43] text-white font-semibold">
                    <tr>
                      <th className="px-4 py-2.5">Year</th>
                      <th className="px-4 py-2.5">Champion</th>
                      <th className="px-4 py-2.5">Runner-Up</th>
                      <th className="px-4 py-2.5">Host Nation(s)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E3A5F]/60 text-[#CBD5E1]">
                    {t.recentChampions.map((c) => (
                      <tr key={c.year} className="hover:bg-[#12283D]/60 transition-colors">
                        <td className="px-4 py-2.5 font-mono font-bold text-[#86EFAC]">{c.year}</td>
                        <td className="px-4 py-2.5 font-semibold text-white">{c.winner} 🏆</td>
                        <td className="px-4 py-2.5 text-[#B8C7D9]">{c.runnerUp}</td>
                        <td className="px-4 py-2.5 text-[#8FA2B7]">{c.host}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
