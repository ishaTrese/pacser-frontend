import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/layout/Navbar'
import { UserCircle, Flame, BookOpen, Medal, ChevronRight, TrendingUp, Play } from 'lucide-react'

const PROGRESS = [
  { label: 'Numerical', pct: 0 },
  { label: 'Verbal', pct: 0 },
  { label: 'Analytical', pct: 0 },
  { label: 'General Information', pct: 0 },
]

const LEARNING_TABS = ['Current', 'Recent', 'Saved']

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Current')

  const displayName = user ? `${user.first_name} ${user.last_name}` : 'Anna Doe'

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col overflow-hidden">
      <Navbar />

      {/* Main Container - Controlled scrolling and flex growth */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 pt-6 flex flex-col gap-6 overflow-hidden">

        {/* Hero Banner - Proportional height */}
        <div className="w-full rounded-2xl p-6 bg-[#EAB308] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm shrink-0">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">Dashboard</h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#EAB308] bg-[#0d1117] px-3 py-1 rounded-full border border-white/10 shadow-lg">
                Professional
              </span>
            </div>
            <p className="text-slate-800 text-sm font-semibold opacity-90">Ready to level up your CSE preparation?</p>
          </div>
          <button
            onClick={() => navigate('/practice')}
            className="bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-sm shadow-md shrink-0 w-full sm:w-auto"
          >
            <Play size={18} fill="currentColor" />
            Play now
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow mb-4 overflow-hidden">

          {/* Left Column: User & Progress */}
          <div className="lg:col-span-7 flex flex-col gap-6 overflow-hidden">

            {/* User Identity Card (Horizontal Layout) */}
            <div className="bg-[#1a2235] border border-slate-700/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0 shadow-xl">
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-[#EAB308] flex items-center justify-center shrink-0 shadow-lg">
                  <UserCircle size={40} className="text-white opacity-90" />
                </div>
                <div className="flex-1 sm:flex-none">
                  <p className="font-bold text-white text-xl tracking-tight">{displayName}</p>
                  <div className="flex items-center gap-3 mt-1.5 w-full sm:w-40">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Level 01</span>
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-[#EAB308] rounded-full shadow-[0_0_8px_rgba(234,179,8,0.4)]" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-8 w-full sm:w-auto justify-around sm:justify-end">
                <div className="flex flex-col items-center">
                  <Flame size={24} className="text-[#EAB308] mb-1" />
                  <span className="text-white font-bold text-lg leading-none">0</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase mt-1">Streak</span>
                </div>
                <div className="flex flex-col items-center">
                  <BookOpen size={24} className="text-yellow-400 mb-1" />
                  <span className="text-white font-bold text-lg leading-none">0</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase mt-1">Lessons</span>
                </div>
                <div className="flex flex-col items-center">
                  <Medal size={24} className="text-yellow-500 mb-1" />
                  <span className="text-white font-bold text-lg leading-none">0</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase mt-1">Badges</span>
                </div>
              </div>

              {/* Profile Shortcut */}
              <button
                onClick={() => navigate('/profile')}
                className="bg-[#EAB308] text-slate-900 font-black px-5 py-2 rounded-xl text-[11px] uppercase tracking-wider hover:brightness-110 transition shadow-lg w-full sm:w-auto"
              >
                Go to profile
              </button>
            </div>

            {/* Progress Visualization */}
            <div className="bg-[#1a2235] border border-slate-700/50 rounded-2xl p-7 flex-grow flex flex-col shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={22} className="text-[#EAB308]" />
                <h3 className="font-extrabold text-white text-lg tracking-tight">Progress</h3>
              </div>
              <div className="flex-grow flex flex-col justify-between py-2">
                {PROGRESS.map((item) => (
                  <div key={item.label} className="w-full">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-300 font-semibold text-sm">{item.label}</span>
                      <span className="text-slate-500 font-black text-xs">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-[#EAB308] rounded-full transition-all duration-1000" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Learning */}
          <div className="lg:col-span-5 bg-[#1a2235] border-2 border-[#EAB308]/40 rounded-2xl p-7 flex flex-col overflow-hidden shadow-2xl shadow-yellow-500/5">
            <div className="flex items-center justify-between mb-6 shrink-0">
              <h3 className="font-extrabold text-white text-lg">My Learning</h3>
              <div className="flex gap-1.5">
                {LEARNING_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-[11px] font-black uppercase tracking-widest transition-all border-b-2 ${activeTab === tab
                      ? 'text-[#EAB308] border-[#EAB308]'
                      : 'text-slate-500 border-transparent hover:text-slate-300'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Placeholder */}
            <div className="flex flex-1 items-center justify-center rounded-2xl border-2 border-dashed border-slate-700/50 bg-[#0d1117]/50 overflow-hidden">
              <div className="px-6 text-center">
                <p className="text-sm text-slate-500 font-semibold italic">
                  No {activeTab.toLowerCase()} items found.
                </p>
                <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase tracking-tighter">
                  Start a lesson to track progress
                </p>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 shrink-0">
              <button
                onClick={() => navigate('/learn')}
                className="flex-1 border-2 border-slate-700 text-slate-300 font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-slate-800 hover:text-white transition"
              >
                View Track
              </button>
              <button
                onClick={() => navigate('/learn')}
                className="flex-1 bg-[#EAB308] text-slate-900 font-black py-3 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition flex items-center justify-center gap-2 shadow-lg"
              >
                Resume Learning <ChevronRight size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>

        {/* Standardized Bottom Footer */}
        <footer className="w-full shrink-0 py-6 border-t border-[#EAB308]/30">
          <div className="flex justify-center items-center">
            <p className="text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
              © 2026 PACSER. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}