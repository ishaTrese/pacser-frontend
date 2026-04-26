import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { BookOpen, Clock, ChevronDown, ChevronRight, ChevronUp, Lock } from 'lucide-react'

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

function TrackCard({ track, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a2235] border-2 border-[#EAB308] rounded-2xl p-7 flex flex-col gap-4 cursor-pointer hover:brightness-110 transition"
    >
      <BookOpen size={36} className="text-[#EAB308]" />
      <h3 className="text-2xl font-extrabold text-white">{track.label}</h3>
      <div className="flex items-center gap-4 text-slate-400 text-sm">
        <span className="flex items-center gap-1.5"><BookOpen size={14} /> {track.lessons} Lessons</span>
        <span className="flex items-center gap-1.5"><Clock size={14} /> {track.time}</span>
      </div>
      <div className="relative h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div className="absolute h-full bg-[#EAB308] rounded-full" style={{ width: `${track.pct}%` }} />
        <span className="absolute right-0 -top-5 text-xs text-slate-400">{track.pct}%</span>
      </div>
      <button className="w-full bg-[#EAB308] text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-95 transition mt-1">
        {track.pct > 0 ? 'Resume Learning' : 'Learn'} <ChevronRight size={16} />
      </button>
    </div>
  )
}

function ModuleCard({ mod, onClick }) {
  return (
    <div className="bg-[#1a2235] border-2 border-[#EAB308] rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-bold text-white">{mod.label}</h4>
          <p className={`text-sm font-semibold ${TRACK_COLORS[mod.track] || 'text-[#EAB308]'}`}>{mod.track}</p>
        </div>
        <BookOpen size={24} className="text-[#EAB308] shrink-0" />
      </div>
      <div className="flex items-center gap-3 text-slate-400 text-xs">
        <span className="flex items-center gap-1"><BookOpen size={12} /> {mod.lessons} Lessons</span>
        <span className="flex items-center gap-1"><Clock size={12} /> {mod.time}</span>
        <span className="flex items-center gap-1">● {mod.xp}xp</span>
      </div>
      <button
        onClick={mod.unlocked ? onClick : undefined}
        className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center transition ${
          mod.unlocked
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
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Tracks')
  const [sortBy, setSortBy] = useState('All')
  const [sortOpen, setSortOpen] = useState(false)

  const filteredModules = (activeTab === 'Modules' ? MODULES : DRILLS).filter(
    (m) => sortBy === 'All' || m.track === sortBy
  )

  const tabDesc = {
    Tracks: 'Comprehensive study tracks that follow the official Civil Service Exam coverage',
    Modules: 'Shorter focused courses with multiple lessons and questions',
    Drills: 'Quick focused practice exercises inside each module to reinforce what you learned',
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

        {/* Hero Banner */}
        <div className="w-full rounded-2xl px-8 py-6 bg-[#EAB308]">
          <h2 className="text-xl font-extrabold text-slate-900">Learn</h2>
          <p className="text-slate-800 text-sm mt-1 max-w-2xl">
            Prepare for the Civil Service Exam with structured, interactive, and accessible online learning.
            Strengthen core competencies, follow guided study tracks, and build the skills needed to excel on exam day.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-700">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-bold transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'text-[#EAB308] border-[#EAB308]'
                  : 'text-slate-400 border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Subtitle + Sort */}
        <div className="flex items-center justify-between">
          <p className="text-slate-300 text-sm">{tabDesc[activeTab]}</p>
          {activeTab !== 'Tracks' && (
            <div className="relative">
              <button
                onClick={() => setSortOpen((p) => !p)}
                className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 transition hover:border-[#EAB308]"
              >
                {sortBy === 'All' ? 'Sort by' : sortBy}
                {sortOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl overflow-hidden z-10">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false) }}
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

        {/* Content */}
        {activeTab === 'Tracks' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <TrackCard
                key={track.id}
                track={track}
                onClick={() => navigate(`/learn/track/${track.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredModules.map((mod) => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                onClick={() => navigate(activeTab === 'Modules' ? `/learn/module/${mod.id}` : `/learn/drill/${mod.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}