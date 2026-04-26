import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { ArrowLeft, ChevronRight, Trophy } from 'lucide-react'

const TRACKS_DATA = {
  numerical: {
    label: 'Numerical',
    desc: 'Sharpen your numerical ability to confidently pass the civil service exam.',
    modules: 4, quizzes: 2, pct: 0,
    intro: {
      title: 'Introduction',
      body: 'Master the essential numerical skills to excel in the civil service exam.',
      bullets: [
        'Fundamental arithmetic and number operations',
        'Ratio, proportion, percentages, and word problems',
        'Data interpretation using charts, tables, and graphs',
        'Practice with quantitative reasoning and problem-solving strategies',
      ],
    },
    modulesList: [
      { id: 'basic-math', title: 'Basic Mathematics', type: 'Module', time: '1h 15m', xp: 75 },
      { id: 'algebra', title: 'Algebra', type: 'Module', time: '1h 21m', xp: 75 },
      { id: 'statistics', title: 'Statistics', type: 'Module', time: '1h 35m', xp: 75 },
      { id: 'probability', title: 'Probability', type: 'Module', time: '1h 05m', xp: 75 },
    ],
  },
  verbal: {
    label: 'Verbal',
    desc: 'Sharpen your verbal ability to confidently pass the civil service exam.',
    modules: 4, quizzes: 2, pct: 58,
    intro: {
      title: 'Introduction',
      body: 'Master the essential verbal skills to excel in the civil service exam.',
      bullets: [
        'Core grammar rules and language fundamentals',
        'Vocabulary building, word usage, and context clues',
        'Reading comprehension with exam-style passages',
        'Practice with verbal reasoning and critical analysis',
      ],
    },
    modulesList: [
      { id: 'grammar', title: 'Grammar', type: 'Module', time: '1h 15m', xp: 75 },
      { id: 'vocabulary', title: 'Vocabulary', type: 'Module', time: '2h 15m', xp: 75 },
      { id: 'reading-comp', title: 'Reading Comprehension', type: 'Module', time: '1h 30m', xp: 100 },
      { id: 'sentence-logic', title: 'Sentence Logic', type: 'Module', time: '1h 10m', xp: 75 },
    ],
  },
  analytical: {
    label: 'Analytical',
    desc: 'Sharpen your analytical ability to confidently pass the civil service exam.',
    modules: 3, quizzes: 2, pct: 89,
    intro: {
      title: 'Introduction',
      body: 'Master the essential analytical skills to excel in the civil service exam.',
      bullets: [
        'Logical reasoning and critical thinking',
        'Pattern recognition and sequence analysis',
        'Argument analysis and evaluation',
        'Problem-solving strategies for complex scenarios',
      ],
    },
    modulesList: [
      { id: 'logical-reasoning', title: 'Logical Reasoning', type: 'Module', time: '1h 21m', xp: 75 },
      { id: 'critical-analysis', title: 'Critical Analysis', type: 'Module', time: '1h 10m', xp: 75 },
      { id: 'patterns', title: 'Pattern Recognition', type: 'Module', time: '1h 00m', xp: 75 },
    ],
  },
  general: {
    label: 'General Information',
    desc: 'Build your knowledge of Philippine government, history, and culture.',
    modules: 3, quizzes: 2, pct: 77,
    intro: {
      title: 'Introduction',
      body: 'Master general knowledge topics essential for the civil service exam.',
      bullets: [
        'Philippine Constitution and government structure',
        'History and cultural heritage',
        'Current events and public governance',
        'Civil service laws, rules, and ethics',
      ],
    },
    modulesList: [
      { id: 'governance', title: 'Governance', type: 'Module', time: '1h 15m', xp: 75 },
      { id: 'public-policy', title: 'Public Policy', type: 'Module', time: '2h 15m', xp: 75 },
      { id: 'constitution', title: 'Philippine Constitution', type: 'Module', time: '1h 40m', xp: 100 },
    ],
  },
}

export default function TrackDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const track = TRACKS_DATA[id]

  if (!track) return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-white">Track not found.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

        {/* Hero Banner */}
        <div className="w-full rounded-2xl px-8 py-6 bg-[#EAB308]">
          <button
            onClick={() => navigate('/learn')}
            className="flex items-center gap-1 text-slate-800 text-sm font-medium mb-3 hover:text-slate-900 transition"
          >
            <ArrowLeft size={16} /> Back to all tracks
          </button>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{track.label}</h2>
              <p className="text-slate-800 text-sm mt-1">{track.desc}</p>
              {track.pct > 0 && (
                <div className="mt-3 h-1.5 w-64 bg-slate-800/30 rounded-full overflow-hidden">
                  <div className="h-full bg-[#EAB308] rounded-full" style={{ width: `${track.pct}%` }} />
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Modules</p>
                <p className="text-white font-extrabold text-xl">{track.modules}</p>
              </div>
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Quizzes</p>
                <p className="text-white font-extrabold text-xl">{track.quizzes}</p>
              </div>
              {track.pct > 0 && (
                <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                  <p className="text-slate-400 text-xs">Progress</p>
                  <p className="text-white font-extrabold text-xl">{track.pct}%</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">

          {/* Course Content */}
          <div className="flex h-full flex-col rounded-2xl border-2 border-[#EAB308] bg-[#1a2235] p-7">
            <h3 className="text-2xl font-extrabold text-white mb-5">Course Content</h3>
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {track.modulesList.map((module) => (
                <div key={module.id} className="bg-[#0d1117] rounded-xl px-4 py-3 flex items-center gap-4 hover:border hover:border-[#EAB308]/40 transition">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-lg">📘</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-white">{module.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {module.type} ● {module.time} ● {module.xp}xp
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate(`/learn/module/${module.id}`)}
                    className="shrink-0 text-slate-400 transition hover:text-[#EAB308]"
                    aria-label={`Open module ${module.title}`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex h-full flex-col gap-5">
            {/* Introduction */}
            <div className="flex-1 bg-[#1a2235] border border-slate-700 rounded-2xl p-7">
              <h3 className="text-xl font-extrabold text-slate-300 mb-3" style={{ fontFamily: 'serif' }}>
                Introduction
              </h3>
              <p className="text-slate-300 text-sm mb-4">{track.intro.body}</p>
              <ul className="space-y-2">
                {track.intro.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Badge of Completion */}
            <div className="bg-[#1a2235] border border-slate-700 rounded-2xl p-7 flex items-center gap-5">
              <div className="flex-1">
                <h3 className="text-xl font-extrabold text-slate-300 mb-2" style={{ fontFamily: 'serif' }}>
                  Badge of Completion
                </h3>
                <p className="text-slate-400 text-sm">
                  Complete this learning path to develop your skills and earn a badge of completion
                </p>
              </div>
              <Trophy size={56} className="text-yellow-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}