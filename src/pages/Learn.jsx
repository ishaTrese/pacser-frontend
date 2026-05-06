import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { useAuth } from '../context/AuthContext'
import { BookOpen, Clock, ChevronDown, ChevronRight, ChevronLeft, ChevronUp, Lock } from 'lucide-react'

// --- MOCK DATA ---
const TRACKS = [
  { id: 'numerical', label: 'Numerical', lessons: 8, time: '2h 30m', pct: 0, unlocked: true },
  { id: 'verbal', label: 'Verbal', lessons: 8, time: '5h 15m', pct: 58, unlocked: true },
  { id: 'analytical', label: 'Analytical', lessons: 12, time: '7h 30m', pct: 89, unlocked: true },
  { id: 'general', label: 'General Information', lessons: 15, time: '6h 30m', pct: 77, unlocked: true },
]

const MODULES = [
  { id: 'basic-math', label: 'Basic Mathematics', track: 'Numerical', lessons: 4, time: '1h 15m', xp: 75, unlocked: true },
  { id: 'grammar', label: 'Grammar', track: 'Verbal', lessons: 3, time: '1h 15m', xp: 75, unlocked: true },
  { id: 'algebra', label: 'Algebra', track: 'Numerical', lessons: 4, time: '1h 21m', xp: 75, unlocked: true },
  { id: 'governance', label: 'Governance', track: 'General Information', lessons: 3, time: '1h 15m', xp: 75, unlocked: false },
  { id: 'logical-reasoning', label: 'Logical Reasoning', track: 'Analytical', lessons: 5, time: '1h 21m', xp: 75, unlocked: true },
  { id: 'vocabulary', label: 'Vocabulary', track: 'Verbal', lessons: 5, time: '2h 15m', xp: 75, unlocked: false },
  { id: 'statistics', label: 'Statistics', track: 'Numerical', lessons: 4, time: '1h 35m', xp: 75, unlocked: false },
  { id: 'public-policy', label: 'Public Policy', track: 'General Information', lessons: 6, time: '2h 15m', xp: 75, unlocked: true },
]

const DRILLS = [
  { id: 'speed-arithmetic', label: 'Speed Arithmetic', track: 'Numerical', lessons: 2, time: '5 mins', xp: 75, unlocked: true },
  { id: 'sentence-correction', label: 'Sentence Correction', track: 'Verbal', lessons: 2, time: '5 mins', xp: 75, unlocked: true },
  { id: 'number-drill', label: 'Number Drill', track: 'Numerical', lessons: 2, time: '5 mins', xp: 75, unlocked: true },
  { id: 'grammar-sprint', label: 'Grammar Sprint', track: 'Verbal', lessons: 2, time: '5 mins', xp: 75, unlocked: false },
  { id: 'equation-rush', label: 'Equation Rush', track: 'Numerical', lessons: 2, time: '6 mins', xp: 85, unlocked: true },
  { id: 'logic-ladder', label: 'Logic Ladder', track: 'Analytical', lessons: 2, time: '7 mins', xp: 85, unlocked: true },
]

const TRACK_COLORS = {
  Numerical: 'text-[#EAB308]',
  Verbal: 'text-slate-200',
  Analytical: 'text-slate-300',
  'General Information': 'text-slate-200',
}

const TABS = ['Tracks', 'Modules', 'Drills']
const SORT_OPTIONS = ['All', 'Numerical', 'Verbal', 'Analytical', 'General Information']

// --- COMPONENTS ---

function TrackCard({ track, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a2235] border-2 border-[#EAB308] rounded-2xl p-5 flex flex-col h-[240px] cursor-pointer hover:brightness-110 transition shadow-lg"
    >
      <div className="flex-grow">
        <BookOpen size={28} className="text-[#EAB308] mb-3" />
        <h3 className="text-xl font-extrabold text-white leading-tight">{track.label}</h3>
        <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold mt-2">
          <span className="flex items-center gap-1.5"><BookOpen size={12} /> {track.lessons} Lessons</span>
          <span className="flex items-center gap-1.5"><Clock size={12} /> {track.time}</span>
        </div>
      </div>
      <div className="mt-auto">
        <div className="relative h-1.5 bg-slate-700 rounded-full overflow-hidden mb-3">
          <div className="absolute h-full bg-[#EAB308] rounded-full" style={{ width: `${track.pct}%` }} />
        </div>
        <button className="w-full bg-[#EAB308] text-slate-900 font-bold py-2 rounded-xl text-sm flex items-center justify-center gap-2">
          {track.pct > 0 ? 'Resume Learning' : 'Learn'} <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}

function ModuleCard({ mod, onClick }) {
  return (
    <div className="bg-[#1a2235] border-2 border-[#EAB308] rounded-2xl p-5 flex flex-col h-[240px] shadow-lg">
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-bold text-white">{mod.label}</h4>
            <p className={`text-sm font-semibold ${TRACK_COLORS[mod.track] || 'text-[#EAB308]'}`}>{mod.track}</p>
          </div>
          <BookOpen size={24} className="text-[#EAB308] shrink-0" />
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-xs mt-3">
          <span className="flex items-center gap-1"><BookOpen size={12} /> {mod.lessons} Lessons</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {mod.time}</span>
          <span className="flex items-center gap-1">● {mod.xp}xp</span>
        </div>
      </div>
      <button
        onClick={mod.unlocked ? onClick : undefined}
        className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center transition mt-auto ${mod.unlocked
            ? 'bg-[#EAB308] text-slate-900 hover:brightness-95'
            : 'bg-[#EAB308]/60 text-slate-900 cursor-not-allowed'
          }`}
      >
        {mod.unlocked ? 'Continue' : <Lock size={16} />}
      </button>
    </div>
  )
}

export default function Learn() {
  const { userClass } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Tracks')
  const [sortBy, setSortBy] = useState('All')
  const [sortOpen, setSortOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const tabDesc = {
    Tracks: 'Comprehensive study tracks that follow the official Civil Service Exam coverage',
    Modules: 'Shorter focused courses with multiple lessons and questions',
    Drills: 'Quick focused practice exercises inside each module to reinforce what you learned',
  }

  const rawData = activeTab === 'Modules' ? MODULES : DRILLS
  const filteredData = activeTab === 'Tracks' ? TRACKS : rawData.filter((m) => sortBy === 'All' || m.track === sortBy)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = activeTab === 'Tracks' ? TRACKS : filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 pt-6 flex flex-col gap-6 overflow-hidden">

        {/* Hero Banner */}
        <div className="w-full rounded-2xl p-6 bg-[#EAB308] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm shrink-0">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-extrabold text-slate-900 leading-none">Learn</h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#EAB308] bg-[#0d1117] px-3 py-1 rounded-full border border-white/10 shadow-inner">
                {userClass || 'PROFESSIONAL'}
              </span>
            </div>
            <p className="text-slate-800 text-sm font-semibold">Prepare for the Civil Service Exam with structured online learning.</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-6 border-b border-slate-700 shrink-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentPage(1); setSortBy('All'); }}
              className={`pb-3 text-sm font-bold transition-colors border-b-2 -mb-px ${activeTab === tab ? 'text-[#EAB308] border-[#EAB308]' : 'text-slate-400 border-transparent hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Description & Sort Row */}
        <div className="flex items-center justify-between shrink-0">
          <p className="text-slate-300 text-sm">{tabDesc[activeTab]}</p>
          {activeTab !== 'Tracks' && (
            <div className="relative">
              <button
                onClick={() => setSortOpen((p) => !p)}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-white px-4 py-2 text-sm text-slate-800 hover:border-[#EAB308] transition"
              >
                {sortBy === 'All' ? 'Sort by' : sortBy}
                {sortOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl overflow-hidden z-50">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false); setCurrentPage(1); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-100 transition"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
          {paginatedData.map((item) => (
            activeTab === 'Tracks' ? (
              <TrackCard key={item.id} track={item} onClick={() => navigate(`/learn/track/${item.id}`)} />
            ) : (
              <ModuleCard key={item.id} mod={item} onClick={() => navigate(activeTab === 'Modules' ? `/learn/module/${item.id}` : `/learn/drill/${item.id}`)} />
            )
          ))}
        </div>

        {/* Pagination Section (Always Visible for Modules/Drills) */}
        {activeTab !== 'Tracks' && (
          <div className="flex justify-center items-center gap-6 py-8 shrink-0">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#EAB308] disabled:opacity-25 transition"
            >
              <ChevronLeft size={20} /> Previous
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages || 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${currentPage === i + 1
                      ? 'bg-[#EAB308] text-slate-900 shadow-md'
                      : 'border border-slate-700 text-slate-500 hover:border-[#EAB308] hover:text-[#EAB308]'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(p => p + 1)}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#EAB308] disabled:opacity-25 transition"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Dashboard Footer */}
        <footer className="w-full shrink-0 py-6 border-t border-[#EAB308]/40 mt-auto">
          <div className="flex justify-center items-center">
            <p className="text-slate-500 text-[12px] font-medium tracking-tight">
              © 2026 PACSER. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}