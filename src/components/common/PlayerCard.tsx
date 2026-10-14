import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, ArrowRight } from 'lucide-react';
import { PlayerProfile } from '../../types';

interface PlayerCardProps {
  player: PlayerProfile;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-[#12283D] border border-[#1E3A5F] rounded-xl overflow-hidden hover:border-[#16A34A]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
      {/* Header Banner */}
      <div className={`p-6 bg-gradient-to-r ${player.imageFallbackGradient} relative overflow-hidden`}>
        <div className="flex items-center justify-between">
          <span className="text-3xl" role="img" aria-label={player.country}>
            {player.countryFlag}
          </span>
          <span className="text-xs uppercase tracking-wider font-semibold text-white/80 bg-black/30 px-2.5 py-1 rounded">
            {player.role}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="font-heading text-2xl font-bold text-white tracking-wide">
            {player.name}
          </h3>
          <p className="text-xs text-white/70 font-medium">
            {player.country} · {player.careerSpan}
          </p>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs text-[#B8C7D9] leading-relaxed line-clamp-3 mb-4">
            {player.bio}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-[#071A2B] rounded-lg border border-[#102A43] text-center mb-4">
            {player.testRuns !== undefined ? (
              <div>
                <span className="text-[10px] text-[#8FA2B7] uppercase block">Test Runs</span>
                <span className="font-heading text-base font-bold text-white tabular-nums">
                  {player.testRuns.toLocaleString()}
                </span>
              </div>
            ) : player.testWickets !== undefined ? (
              <div>
                <span className="text-[10px] text-[#8FA2B7] uppercase block">Test Wkts</span>
                <span className="font-heading text-base font-bold text-white tabular-nums">
                  {player.testWickets}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-[10px] text-[#8FA2B7] uppercase block">Matches</span>
                <span className="font-heading text-base font-bold text-white tabular-nums">
                  {(player.odiMatches || 0) + (player.t20iMatches || 0)}
                </span>
              </div>
            )}

            <div>
              <span className="text-[10px] text-[#8FA2B7] uppercase block">
                {player.internationalCenturies !== undefined ? '100s' : 'ODI Wkts'}
              </span>
              <span className="font-heading text-base font-bold text-[#86EFAC] tabular-nums">
                {player.internationalCenturies !== undefined
                  ? player.internationalCenturies
                  : player.odiWickets || '—'}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-[#8FA2B7] uppercase block">ODI Runs</span>
              <span className="font-heading text-base font-bold text-white tabular-nums">
                {player.odiRuns ? player.odiRuns.toLocaleString() : player.testMatches ? `${player.testMatches} Tests` : '—'}
              </span>
            </div>
          </div>

          {/* Major Highlights */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[#86EFAC] uppercase tracking-wider flex items-center gap-1">
              <Trophy className="w-3 h-3 text-[#16A34A]" />
              Major Accomplishment
            </span>
            <p className="text-xs text-[#E2E8F0] line-clamp-2">
              {player.majorAchievements[0]}
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-3 border-t border-[#1E3A5F]/60 flex items-center justify-between text-xs">
          <span className="text-[#8FA2B7] truncate max-w-[170px] text-[11px]">
            {player.battingStyle}
          </span>
          {player.relatedBlogSlug ? (
            <Link
              to={`/blogs/${player.relatedBlogSlug}`}
              className="text-[#86EFAC] hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Read Biography</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="text-[#64748B] text-[11px]">ICC Hall of Fame</span>
          )}
        </div>
      </div>
    </div>
  );
};
