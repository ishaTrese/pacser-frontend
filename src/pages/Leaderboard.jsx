import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { Search, Trophy, Flame, Star, Shield, Zap, Target, Medal, Crown } from 'lucide-react';

// MOCK DATA
const PODIUM = [
  { rank: 2, name: 'Juan dela Cruz', xp: '2380', avatar: 'JD', color: 'bg-slate-400 text-slate-900', blockColor: 'bg-slate-400 text-black', blockHeight: 'h-16' },
  { rank: 1, name: 'Maria Santos', xp: '2480', avatar: 'MS', color: 'bg-[#EAB308] text-slate-900', blockColor: 'bg-[#EAB308] text-black', blockHeight: 'h-24', isFirst: true },
  { rank: 3, name: 'Anne Reyes', xp: '2280', avatar: 'AR', color: 'bg-[#d97706] text-white', blockColor: 'bg-[#d97706] text-white', blockHeight: 'h-12' },
];

const LEADERBOARD_LIST = Array.from({ length: 47 }, (_, i) => ({
  rank: i + 4,
  name: `Reviewer_${i + 4}`,
  xp: `${Math.max(10000, 24000 - (i * 300)).toLocaleString()}`,
  avatar: `R`,
}));

const CURRENT_USER = {
  name: 'Trisha',
  rank: 34,
  points: '14,250',
  streak: '12 Days',
  highestScore: '92%',
  highestRank: 28
};

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <div className="h-screen overflow-hidden bg-[#0d1117] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-6 py-6 overflow-hidden">

        {/* Gold banner */}
        <div className="shrink-0 bg-[#EAB308] rounded-2xl px-7 py-5 mb-6 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-slate-900 font-extrabold text-2xl mb-1">Leaderboards</h1>
            <p className="text-slate-800 text-sm">
              Compete with others and climb to the top!
            </p>
          </div>
        </div>

        {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-180px)] overflow-hidden">

          {/* LEFT COLUMN: Ranked List (8/12 width) */}
          <div className="lg:col-span-8 flex flex-col bg-[#1a2235] p-5 rounded-2xl border border-white/10 overflow-hidden h-full">

            {/* Controls: Search & Tabs */}
            <div className="shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4 pb-2">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search for other users and friends..."
                  className="w-full bg-white text-xs text-slate-900 rounded py-1.5 pl-8 pr-3 focus:outline-none focus:ring-1 focus:ring-[#EAB308] transition-colors"
                />
                <Search size={14} className="absolute left-2.5 top-2 text-slate-500" />
              </div>

              <div className="flex gap-4 text-xs font-bold w-full sm:w-auto justify-center sm:justify-end">
                {['Weekly', 'Monthly', 'All Time'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1 transition-colors ${activeTab === tab
                      ? 'text-[#EAB308] border-b-2 border-[#EAB308]'
                      : 'text-white hover:text-slate-300'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* The Podium */}
            <div className="shrink-0 flex items-end justify-center gap-2 sm:gap-6 pt-2 pb-0">
              {PODIUM.map((user) => (
                <div key={user.rank} className="flex flex-col items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-black text-sm shadow-lg ${user.color} ${user.isFirst ? 'scale-110 mb-1' : ''}`}>
                    {user.avatar}
                  </div>
                  <div className="mt-1 text-center mb-1">
                    <p className="font-bold text-[11px] sm:text-xs text-white">{user.name}</p>
                    <p className="text-[#EAB308] text-[9px] font-black">{user.xp} XP</p>
                  </div>
                  {/* Podium Block */}
                  <div className={`w-16 sm:w-24 flex items-start justify-center pt-1.5 rounded-t font-black text-xl ${user.blockColor} ${user.blockHeight}`}>
                    {user.rank}
                  </div>
                </div>
              ))}
            </div>

            {/* Scrollable List (Flex-1 filling remaining space) */}
            <div className="flex-1 min-h-0 border-t border-white/10 bg-[#1a2235] mt-0">
              <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#1a2235] [&::-webkit-scrollbar-thumb]:bg-[#EAB308]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#EAB308] [&::-webkit-scrollbar-thumb]:rounded-full pr-1">
                {LEADERBOARD_LIST.map((user) => (
                  <div key={user.rank} className="grid grid-cols-12 gap-3 px-3 py-2 border-b border-white/5 hover:bg-white/5 transition-colors items-center group text-xs">
                    <div className="col-span-2 text-center font-bold text-slate-400 group-hover:text-white transition-colors">
                      #{user.rank}
                    </div>
                    <div className="col-span-7 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600">
                        {user.avatar}
                      </div>
                      <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                        {user.name}
                      </span>
                    </div>
                    <div className="col-span-3 text-right font-black text-[#EAB308] text-sm">
                      {user.xp}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile & Badges (4/12 width) */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Badges */}
            <div className="flex gap-3 justify-center items-center overflow-visible pt-6 pb-2">
              {/* Left 2 (Upcoming/Locked) */}
              <div className="relative w-12 h-12 bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] border border-blue-500/30 opacity-40 grayscale">
                <Star size={20} className="text-blue-400 fill-blue-400" />
              </div>
              <div className="relative w-12 h-12 bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)] border border-red-500/30 opacity-40 grayscale">
                <Flame size={20} className="text-red-400 fill-red-400" />
              </div>

              {/* Middle (Active) */}
              <div className="relative w-16 h-16 bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.6)] border border-[#EAB308]/50 z-10 mx-1">
                <Shield size={32} className="text-[#EAB308] fill-[#EAB308]" />
              </div>

              {/* Right 2 (Past/Completed) */}
              <div className="relative w-12 h-12 bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)] border border-indigo-500/30">
                <Zap size={20} className="text-indigo-400 fill-indigo-400" />
              </div>
              <div className="relative w-12 h-12 bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)] border border-green-500/30">
                <Target size={20} className="text-green-400" />
              </div>
            </div>

            {/* User Stats Card */}
            <div className="bg-[#1a2235] rounded-2xl border border-white/10 p-7 shadow-xl relative flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-slate-500 font-black shadow-md border-4 border-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
                  </div>
                  <h3 className="text-white font-black text-xl tracking-wide">--</h3>
                </div>
                <button className="px-4 py-2 mt-1 rounded bg-[#EAB308] text-slate-900 text-xs font-black shadow-lg hover:bg-[#fde047] transition-colors uppercase tracking-widest">
                  Profile
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-base">Rank:</span>
                  <span className="text-[#EAB308] font-black text-right text-xl drop-shadow-sm">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-base">Accumulated Points:</span>
                  <span className="text-[#EAB308] font-black text-right text-xl drop-shadow-sm">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-base">Streaks:</span>
                  <span className="text-[#EAB308] font-black text-right text-xl drop-shadow-sm">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-base">Highest Score:</span>
                  <span className="text-[#EAB308] font-black text-right text-xl drop-shadow-sm">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-base">Highest Rank:</span>
                  <span className="text-[#EAB308] font-black text-right text-xl drop-shadow-sm">--</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
