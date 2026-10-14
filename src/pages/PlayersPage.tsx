import React, { useState, useMemo } from 'react';
import { Search, Trophy, Filter, X, Award } from 'lucide-react';
import { PLAYERS } from '../data/players';
import { PlayerCard } from '../components/common/PlayerCard';

export const PlayersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  const roles = ['All', 'Batter', 'Fast Bowler', 'Spin Bowler', 'All-Rounder', 'Wicketkeeper-Batter'];
  const countries = ['All', 'India', 'Australia', 'West Indies', 'South Africa', 'Sri Lanka'];

  const filteredPlayers = useMemo(() => {
    return PLAYERS.filter(player => {
      if (selectedRole !== 'All' && player.role !== selectedRole) {
        return false;
      }
      if (selectedCountry !== 'All' && player.country !== selectedCountry) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = player.name.toLowerCase().includes(q) || player.fullName.toLowerCase().includes(q);
        const inCountry = player.country.toLowerCase().includes(q);
        const inBio = player.bio.toLowerCase().includes(q);
        const inAch = player.majorAchievements.some(a => a.toLowerCase().includes(q));
        if (!inName && !inCountry && !inBio && !inAch) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedRole, selectedCountry]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedRole('All');
    setSelectedCountry('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="border-b border-[#102A43] pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
            Hall of Fame Directory
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Legends of Cricket
          </h1>
          <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
            Explore 16 immortal titans of the game—from Sir Donald Bradman and Sir Vivian Richards to Sachin Tendulkar, Virat Kohli, and modern bowling masters.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#12283D] border border-[#1E3A5F] rounded-2xl p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8FA2B7]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by player name or milestone..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8FA2B7] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Role Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8FA2B7] whitespace-nowrap">Role:</span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs font-medium focus:outline-none focus:border-[#16A34A] cursor-pointer"
            >
              {roles.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8FA2B7] whitespace-nowrap">Nation:</span>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-xs font-medium focus:outline-none focus:border-[#16A34A] cursor-pointer"
            >
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {(selectedRole !== 'All' || selectedCountry !== 'All' || searchQuery) && (
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl bg-[#1E3A5F] text-xs text-[#86EFAC] hover:bg-[#102A43] transition-colors whitespace-nowrap"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#8FA2B7] px-1">
          <span>
            Showing <strong>{filteredPlayers.length}</strong> of {PLAYERS.length} legendary profiles
          </span>
        </div>

        {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#12283D] border border-[#1E3A5F] max-w-md mx-auto space-y-3">
            <h3 className="font-heading text-xl font-bold text-white uppercase">No Legends Found</h3>
            <p className="text-xs text-[#B8C7D9]">Try adjusting your search criteria or country filter.</p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-[#16A34A] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
