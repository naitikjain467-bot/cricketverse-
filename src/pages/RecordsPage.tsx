import React, { useState, useMemo } from 'react';
import { Trophy, ShieldCheck, Filter, Search, Award } from 'lucide-react';
import { VERIFIED_RECORDS } from '../data/records';

export const RecordsPage: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const formats = ['All', 'Test', 'ODI', 'T20I', 'IPL', 'All Formats'];
  const categories = ['All', 'Batting', 'Bowling', 'Wicketkeeping', 'Team', 'Tournament'];

  const filteredRecords = useMemo(() => {
    return VERIFIED_RECORDS.filter(rec => {
      if (selectedFormat !== 'All' && rec.format !== selectedFormat) {
        return false;
      }
      if (selectedCategory !== 'All' && rec.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = rec.title.toLowerCase().includes(q);
        const inHolder = rec.holder.toLowerCase().includes(q);
        const inCountry = rec.country.toLowerCase().includes(q);
        const inAch = rec.achievement.toLowerCase().includes(q);
        if (!inTitle && !inHolder && !inCountry && !inAch) {
          return false;
        }
      }
      return true;
    });
  }, [selectedFormat, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            Historical Data Vault
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Cricket Records That Made History
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            A carefully curated and verified compendium of cricket’s most iconic milestones across 148 years of international and franchise competition.
          </p>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="p-4 rounded-xl bg-[#091F33] border border-[#102A43] flex items-center justify-between flex-wrap gap-3 text-xs text-[#8FA2B7]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
          <span>All records cross-referenced with Wisden, ICC, and BCCI official archives.</span>
        </div>
        <span className="text-[#86EFAC] font-mono">Last Comprehensive Audit: February 2025</span>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#12283D] border border-[#1E3A5F] rounded-2xl p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8FA2B7]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search records (e.g. Bradman, 400*, Lara)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
            />
          </div>

          {/* Format Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8FA2B7] whitespace-nowrap">Format:</span>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs font-medium focus:outline-none focus:border-[#16A34A] cursor-pointer"
            >
              {formats.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8FA2B7] whitespace-nowrap">Discipline:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs font-medium focus:outline-none focus:border-[#16A34A] cursor-pointer"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#8FA2B7] px-1">
          <span>
            Showing <strong>{filteredRecords.length}</strong> verified historical records
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#1E3A5F] bg-[#12283D]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#102A43] text-white font-semibold">
              <tr>
                <th className="px-5 py-3.5">Record Title</th>
                <th className="px-5 py-3.5">Record Holder</th>
                <th className="px-5 py-3.5">Format</th>
                <th className="px-5 py-3.5">Milestone / Figure</th>
                <th className="px-5 py-3.5">Details & Context</th>
                <th className="px-5 py-3.5">Verified Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E3A5F]/60 text-[#CBD5E1]">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-[#071A2B]/40 transition-colors">
                  <td className="px-5 py-4 font-semibold text-white">
                    {rec.title}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="text-[#86EFAC] font-medium block">{rec.holder}</span>
                    <span className="text-[11px] text-[#8FA2B7]">{rec.country}</span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#071A2B] border border-[#102A43] text-[#B8C7D9]">
                      {rec.format}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap font-heading text-base font-bold text-white tabular-nums">
                    {rec.figure}
                  </td>
                  <td className="px-5 py-4 text-xs text-[#B8C7D9] max-w-xs leading-relaxed">
                    {rec.achievement}
                    <span className="block text-[10px] text-[#64748B] mt-0.5">
                      Period: {rec.dateOrSpan}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[11px] text-[#8FA2B7] max-w-[180px]">
                    {rec.verifiedSource}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
