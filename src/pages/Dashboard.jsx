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

  const displayName = user ? `${user.first_name} ${user.last_name}` : 'User Name'

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

        {/* Hero Banner */}
        <div className="w-full rounded-2xl px-8 py-6 flex items-center justify-between bg-[#EAB308]">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Professional</h2>
            <p className="text-slate-800 text-sm mt-1">Ready to level up your CSE preparation?</p>
          </div>
          <button
            onClick={() => navigate('/practice')}
            className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center gap-2"
          >
            <Play size={16} fill="currentColor" />
            Play now
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-6">

            {/* User Card */}
            <div className="bg-[#1a2235] border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-slate-600 border-2 border-white flex items-center justify-center shrink-0">
                  <UserCircle size={36} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg">{displayName}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-400 text-xs">Level 01</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#EAB308] rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-1 items-center justify-evenly">
                  <div className="flex flex-col items-center gap-1">
                    <Flame size={28} className="text-[#EAB308]" />
                    <span className="text-white font-bold text-lg">0</span>
                    <span className="text-slate-400 text-xs">Streak</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <BookOpen size={28} className="text-yellow-400" />
                    <span className="text-white font-bold text-lg">0</span>
                    <span className="text-slate-400 text-xs">Lessons</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Medal size={28} className="text-yellow-500" />
                    <span className="text-white font-bold text-lg">0</span>
                    <span className="text-slate-400 text-xs">Badges</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/profile')}
                  className="ml-2 shrink-0 bg-[#EAB308] text-slate-900 font-bold px-5 py-2 rounded-xl text-sm hover:brightness-95 transition"
                >
                  Go to profile
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-[#1a2235] border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={18} className="text-[#EAB308]" />
                <h3 className="font-bold text-white text-lg">Progress</h3>
              </div>
              <div className="space-y-4">
                {PROGRESS.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-slate-400 text-xs">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#EAB308] rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — My Learning */}
          <div className="bg-[#1a2235] border-2 border-[#EAB308] rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-white text-lg">My Learning</h3>
              <div className="flex gap-1">
                {LEARNING_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm font-semibold transition-colors border-b-2 ${
                      activeTab === tab
                        ? 'text-[#EAB308] border-[#EAB308]'
                        : 'text-slate-400 border-transparent hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-600 bg-[#0d1117]">
              <p className="px-4 text-center text-sm text-slate-400">No {activeTab.toLowerCase()} learning items yet.</p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => navigate('/learn')}
                className="flex-1 border-2 border-[#EAB308] text-[#EAB308] font-bold py-2.5 rounded-xl text-sm hover:bg-[#EAB308]/10 transition"
              >
                View Track
              </button>
              <button
                onClick={() => navigate('/learn')}
                className="flex-1 bg-[#EAB308] text-slate-900 font-bold py-2.5 rounded-xl text-sm hover:brightness-95 transition flex items-center justify-center gap-1"
              >
                Resume Learning <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}