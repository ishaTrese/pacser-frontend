import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Trophy } from 'lucide-react'
import Navbar from '../components/layout/Navbar'

const DRILLS_DATA = {
  'speed-arithmetic': {
    label: 'Speed Arithmetic',
    moduleId: 'basic-math',
    module: 'Basic Mathematics',
    desc: 'Train your mental math speed for fast and accurate computations.',
    lessons: 2,
    timeLeft: '5 min',
    intro:
      'Practice quick arithmetic techniques to improve speed and accuracy in basic number operations.',
    items: [
      { id: 'speed-arithmetic-number-ops', title: 'Number Operations', type: 'Reading', time: '2 min', xp: 20 },
      { id: 'speed-arithmetic-add-sub', title: 'Addition & Subtraction', type: 'Practice', time: '3 min', xp: 30 },
    ],
  },
  'sentence-correction': {
    label: 'Sentence Correction',
    moduleId: 'grammar',
    module: 'Grammar',
    desc: 'Improve grammar precision by spotting and correcting sentence errors.',
    lessons: 2,
    timeLeft: '5 min',
    intro:
      'Focus on common sentence structure mistakes and improve clarity through correction drills.',
    items: [
      { id: 'sentence-correction-identify', title: 'Identify the Error', type: 'Reading', time: '2 min', xp: 20 },
      { id: 'sentence-correction-rewrite', title: 'Rewrite the Sentence', type: 'Practice', time: '3 min', xp: 30 },
    ],
  },
  'number-drill': {
    label: 'Number Drill',
    moduleId: 'basic-math',
    module: 'Basic Mathematics',
    desc: 'Build confidence in number sense and arithmetic fluency.',
    lessons: 2,
    timeLeft: '6 min',
    intro: 'Reinforce number operations and order of operations through short focused practice items.',
    items: [
      { id: 'number-drill-order', title: 'Order of Operations', type: 'Reading', time: '2 min', xp: 20 },
      { id: 'number-drill-quick', title: 'Quick Solve Set', type: 'Practice', time: '4 min', xp: 40 },
    ],
  },
  'grammar-sprint': {
    label: 'Grammar Sprint',
    moduleId: 'grammar',
    module: 'Grammar',
    desc: 'Rapid grammar exercises to strengthen sentence accuracy.',
    lessons: 2,
    timeLeft: '6 min',
    intro: 'Run through short grammar challenges focused on usage, agreement, and punctuation.',
    items: [
      { id: 'grammar-sprint-parts', title: 'Parts of Speech Review', type: 'Reading', time: '2 min', xp: 20 },
      { id: 'grammar-sprint-apply', title: 'Apply Correct Usage', type: 'Practice', time: '4 min', xp: 40 },
    ],
  },
  'equation-rush': {
    label: 'Equation Rush',
    moduleId: 'algebra',
    module: 'Algebra',
    desc: 'Quick-fire equation solving to improve algebra confidence.',
    lessons: 2,
    timeLeft: '7 min',
    intro: 'Build speed in simplifying expressions and solving linear equations under time pressure.',
    items: [
      { id: 'equation-rush-simplify', title: 'Simplify Expressions', type: 'Reading', time: '3 min', xp: 30 },
      { id: 'equation-rush-linear', title: 'Solve Linear Equations', type: 'Practice', time: '4 min', xp: 40 },
    ],
  },
  'logic-ladder': {
    label: 'Logic Ladder',
    moduleId: 'logical-reasoning',
    module: 'Logical Reasoning',
    desc: 'Step-by-step logical reasoning drills for analytical mastery.',
    lessons: 2,
    timeLeft: '7 min',
    intro: 'Practice drawing valid conclusions and identifying assumptions from short scenarios.',
    items: [
      { id: 'logic-ladder-assumption', title: 'Assumption Check', type: 'Reading', time: '3 min', xp: 30 },
      { id: 'logic-ladder-conclusion', title: 'Conclusion Builder', type: 'Practice', time: '4 min', xp: 40 },
    ],
  },
}

export default function DrillDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const drill = DRILLS_DATA[id]

  if (!drill) {
    return (
      <div className="min-h-screen bg-[#0d1117]">
        <Navbar />
        <div className="flex h-[80vh] items-center justify-center">
          <p className="text-white">Drill not found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div className="w-full rounded-2xl px-8 py-6 bg-[#EAB308]">
          <button
            onClick={() => navigate(`/learn/module/${drill.moduleId}`)}
            className="flex items-center gap-1 text-slate-800 text-sm font-medium mb-3 hover:text-slate-900 transition"
          >
            <ArrowLeft size={16} /> Back to {drill.module}
          </button>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{drill.label}</h2>
              <p className="text-slate-800 text-sm mt-1">{drill.desc}</p>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Lessons</p>
                <p className="text-white font-extrabold text-xl">{drill.lessons}</p>
              </div>
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Time left</p>
                <p className="text-white font-extrabold text-xl">{drill.timeLeft}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl border-2 border-[#EAB308] bg-[#1a2235] p-7">
            <h3 className="text-2xl font-extrabold text-white mb-5">Course Content</h3>
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {drill.items.map((item) => (
                <div key={item.id} className="bg-[#0d1117] rounded-xl px-4 py-3 flex items-center gap-4 hover:border hover:border-[#EAB308]/40 transition">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-lg">🧩</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-white">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {item.type} ● {item.time} ● {item.xp}xp
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate(`/learn/lesson/${item.id}`)}
                    className="shrink-0 text-slate-400 transition hover:text-[#EAB308]"
                    aria-label={`Open practice item ${item.title}`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col gap-5">
            <div className="flex-1 bg-[#1a2235] border border-slate-700 rounded-2xl p-7">
              <h3 className="text-xl font-extrabold text-slate-300 mb-3" style={{ fontFamily: 'serif' }}>
                Introduction
              </h3>
              <p className="text-slate-300 text-sm">{drill.intro}</p>
            </div>

            <div className="bg-[#1a2235] border border-slate-700 rounded-2xl p-7 flex items-center gap-5">
              <div className="flex-1">
                <h3 className="text-xl font-extrabold text-slate-300 mb-2" style={{ fontFamily: 'serif' }}>
                  Badge of Completion
                </h3>
                <p className="text-slate-400 text-sm">
                  Complete this drill to sharpen your skills and earn a badge of completion.
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
