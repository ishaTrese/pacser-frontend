import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { Shield, Star, Flame, Target, Zap, Award, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Overview');

  // Dummy badges array for UI preview
  const badges = [
    { id: 1, icon: Shield, color: 'text-yellow-400', bg: 'border-yellow-500/30', earned: true },
    { id: 2, icon: Flame, color: 'text-red-400', bg: 'border-red-500/30', earned: true },
    { id: 3, icon: Zap, color: 'text-indigo-400', bg: 'border-indigo-500/30', earned: true },
    { id: 4, icon: Star, color: 'text-blue-400', bg: 'border-blue-500/30', earned: true },
    { id: 5, icon: Target, color: 'text-green-400', bg: 'border-green-500/30', earned: false },
    { id: 6, icon: Award, color: 'text-purple-400', bg: 'border-purple-500/30', earned: false },
    { id: 7, icon: BookOpen, color: 'text-pink-400', bg: 'border-pink-500/30', earned: false },
    { id: 8, icon: Clock, color: 'text-orange-400', bg: 'border-orange-500/30', earned: false },
  ];

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#0d1117] flex flex-col font-sans">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-6 py-5 overflow-hidden">
        
        {/* Header Section */}
        <div className="mb-5 shrink-0">
          <h1 className="text-white font-black text-2xl">My Profile</h1>
          <p className="text-slate-400 font-medium text-sm">Manage your profile, track progress, and redeem codes.</p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
          
          {/* LEFT: Identity Card (4/12) */}
          <div className="lg:col-span-4 bg-[#1a2235] rounded-2xl border border-white/10 p-6 shadow-xl flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-slate-700 flex items-center justify-center border-4 border-[#EAB308] shadow-[0_0_15px_rgba(251,191,36,0.3)] mb-4 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
            </div>
            
            <h2 className="text-white font-black text-xl mb-1 tracking-wide">{user?.name || 'Aspirant'}</h2>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-8">Civil Service Aspirant</p>
            
            <div className="w-full flex flex-col gap-3 mt-auto">
              <div className="bg-[#0d1117] rounded-xl border border-white/5 p-4 flex justify-between items-center shadow-inner">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total XP</span>
                <span className="text-[#EAB308] font-black text-lg">14,250</span>
              </div>
              <div className="bg-[#0d1117] rounded-xl border border-white/5 p-4 flex justify-between items-center shadow-inner">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Rank</span>
                <span className="text-[#EAB308] font-black text-lg">#34</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Tabs (8/12) */}
          <div className="lg:col-span-8 flex flex-col min-h-0">
            
            {/* Tabs Header */}
            <div className="flex gap-6 border-b border-white/10 mb-5 shrink-0">
              {['Overview', 'Badges', 'Account'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-bold transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'text-[#EAB308] border-[#EAB308]' 
                      : 'text-white border-transparent hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#1a2235] [&::-webkit-scrollbar-thumb]:bg-[#EAB308]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#EAB308] [&::-webkit-scrollbar-thumb]:rounded-full pr-2">
              
              {activeTab === 'Overview' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-5 shadow-lg flex flex-col justify-center items-center text-center">
                    <BookOpen size={24} className="text-blue-400 mb-3" />
                    <span className="text-white font-black text-2xl mb-1">42</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Lessons</span>
                  </div>
                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-5 shadow-lg flex flex-col justify-center items-center text-center">
                    <Target size={24} className="text-green-400 mb-3" />
                    <span className="text-white font-black text-2xl mb-1">87%</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Practice Accuracy</span>
                  </div>
                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-5 shadow-lg flex flex-col justify-center items-center text-center">
                    <Flame size={24} className="text-red-400 mb-3" />
                    <span className="text-white font-black text-2xl mb-1">12</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Day Streak</span>
                  </div>
                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-5 shadow-lg flex flex-col justify-center items-center text-center">
                    <Award size={24} className="text-purple-400 mb-3" />
                    <span className="text-white font-black text-2xl mb-1">4</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Mock Exams Taken</span>
                  </div>
                </div>
              )}

              {activeTab === 'Badges' && (
                <div className="bg-[#1a2235] rounded-xl border border-white/10 p-6 shadow-lg">
                  <div className="grid grid-cols-4 gap-6 place-items-center">
                    {badges.map((badge) => {
                      const Icon = badge.icon;
                      return (
                        <div 
                          key={badge.id} 
                          className={`relative w-20 h-20 bg-black/40 rounded-full flex items-center justify-center border ${badge.bg} ${badge.earned ? 'shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'opacity-40 grayscale'}`}
                        >
                          <Icon size={32} className={`${badge.color} ${badge.earned ? '' : 'text-slate-400'}`} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'Account' && (
                <div className="flex flex-col gap-5">
                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-6 shadow-lg">
                    <h3 className="text-white font-bold text-lg mb-4">Account Settings</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-300 text-xs font-semibold tracking-wide">Email Address</label>
                        <input 
                          type="email" 
                          defaultValue={user?.email || ''}
                          className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#EAB308] transition-colors font-medium"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-300 text-xs font-semibold tracking-wide">Password</label>
                        <input 
                          type="password" 
                          placeholder="••••••••"
                          className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#EAB308] transition-colors font-medium"
                        />
                      </div>
                      <button className="mt-2 w-fit bg-white/10 text-white font-bold text-xs py-2 px-6 rounded-lg hover:bg-white/20 transition-colors">
                        Update Settings
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#1a2235] rounded-xl border border-white/10 p-6 shadow-lg">
                    <h3 className="text-[#EAB308] font-bold text-lg mb-1">Redeem Access Code</h3>
                    <p className="text-slate-400 text-xs font-medium mb-4">Enter a code from your physical book to unlock premium features.</p>
                    <div className="flex gap-3">
                      <input 
                        type="text" 
                        placeholder="XXXX-XXXX-XXXX"
                        className="bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-slate-600 font-medium flex-1 uppercase"
                      />
                      <button className="bg-[#EAB308] text-slate-900 font-black text-xs py-2 px-6 rounded-lg hover:bg-[#fde047] transition-all shadow-md uppercase tracking-widest shrink-0">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
