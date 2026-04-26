import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { ArrowLeft, ChevronRight, Trophy } from 'lucide-react'

const MODULES_DATA = {
  'basic-math': {
    label: 'Basic Mathematics', track: 'Numerical',
    desc: 'Master fundamental arithmetic and numerical operations.',
    drills: 2, timeLeft: '45min',
    intro: 'Build strong foundations in arithmetic, fractions, decimals, and basic algebra needed for the CSE.',
    drillsList: [
      { id: 'speed-arithmetic', title: 'Speed Arithmetic', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'number-drill', title: 'Number Drill', type: 'Drill', time: '5 min', xp: 50 },
    ],
  },
  'grammar': {
    label: 'Grammar', track: 'Verbal',
    desc: 'Master grammar rules and sentence structure.',
    drills: 2, timeLeft: '30min',
    intro: 'Covers essential grammar rules, punctuation, and sentence construction for the verbal section of the CSE.',
    drillsList: [
      { id: 'sentence-correction', title: 'Sentence Correction', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'grammar-sprint', title: 'Grammar Sprint', type: 'Drill', time: '5 min', xp: 50 },
    ],
  },
  algebra: {
    label: 'Algebra', track: 'Numerical',
    desc: 'Strengthen equation solving and algebraic reasoning.',
    drills: 2, timeLeft: '40min',
    intro: 'Build confidence in solving equations, inequalities, and algebraic expressions.',
    drillsList: [
      { id: 'equation-rush', title: 'Equation Rush', type: 'Drill', time: '6 min', xp: 60 },
      { id: 'algebra-speedrun', title: 'Algebra Speedrun', type: 'Drill', time: '7 min', xp: 70 },
    ],
  },
  governance: {
    label: 'Governance', track: 'General Information',
    desc: 'Review core governance concepts for the CSE.',
    drills: 2, timeLeft: '35min',
    intro: 'Focuses on branches of government, institutions, and public administration basics.',
    drillsList: [
      { id: 'policy-quickfire', title: 'Policy Quickfire', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'governance-check', title: 'Governance Check', type: 'Drill', time: '6 min', xp: 60 },
    ],
  },
  'logical-reasoning': {
    label: 'Logical Reasoning', track: 'Analytical',
    desc: 'Develop logical thinking and deductive reasoning skills.',
    drills: 2, timeLeft: '1h',
    intro: 'Sharpen your ability to analyze arguments, identify patterns, and draw valid conclusions.',
    drillsList: [
      { id: 'logic-ladder', title: 'Logic Ladder', type: 'Drill', time: '7 min', xp: 70 },
      { id: 'pattern-blitz', title: 'Pattern Blitz', type: 'Drill', time: '8 min', xp: 80 },
    ],
  },
  statistics: {
    label: 'Statistics', track: 'Numerical',
    desc: 'Master basic statistics and interpretation skills.',
    drills: 2, timeLeft: '40min',
    intro: 'Practice data summaries, averages, and interpreting charts frequently seen in the exam.',
    drillsList: [
      { id: 'number-drill', title: 'Data Scan', type: 'Drill', time: '6 min', xp: 60 },
      { id: 'equation-rush', title: 'Mean Median Mode', type: 'Drill', time: '7 min', xp: 70 },
    ],
  },
  probability: {
    label: 'Probability', track: 'Numerical',
    desc: 'Understand outcomes, chances, and simple probability rules.',
    drills: 2, timeLeft: '35min',
    intro: 'Learn to compute simple probabilities and interpret event likelihood in short scenarios.',
    drillsList: [
      { id: 'speed-arithmetic', title: 'Chance Check', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'number-drill', title: 'Event Probability', type: 'Drill', time: '6 min', xp: 60 },
    ],
  },
  vocabulary: {
    label: 'Vocabulary', track: 'Verbal',
    desc: 'Expand word knowledge and contextual understanding.',
    drills: 2, timeLeft: '45min',
    intro: 'Build stronger vocabulary through context clues, synonyms, and precision word usage.',
    drillsList: [
      { id: 'sentence-correction', title: 'Word Match', type: 'Drill', time: '6 min', xp: 60 },
      { id: 'grammar-sprint', title: 'Context Clues', type: 'Drill', time: '7 min', xp: 70 },
    ],
  },
  'reading-comp': {
    label: 'Reading Comprehension', track: 'Verbal',
    desc: 'Develop strong passage analysis and inference skills.',
    drills: 2, timeLeft: '50min',
    intro: 'Practice identifying main ideas, inferences, and supporting details under time pressure.',
    drillsList: [
      { id: 'sentence-correction', title: 'Main Idea Hunt', type: 'Drill', time: '7 min', xp: 70 },
      { id: 'grammar-sprint', title: 'Inference Run', type: 'Drill', time: '8 min', xp: 80 },
    ],
  },
  'sentence-logic': {
    label: 'Sentence Logic', track: 'Verbal',
    desc: 'Improve sentence coherence and logical flow.',
    drills: 2, timeLeft: '30min',
    intro: 'Focus on sequencing ideas and correcting awkward or inconsistent sentence logic.',
    drillsList: [
      { id: 'sentence-correction', title: 'Flow Fix', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'grammar-sprint', title: 'Coherence Check', type: 'Drill', time: '6 min', xp: 60 },
    ],
  },
  'critical-analysis': {
    label: 'Critical Analysis', track: 'Analytical',
    desc: 'Evaluate arguments and assumptions effectively.',
    drills: 2, timeLeft: '35min',
    intro: 'Practice identifying flawed reasoning and choosing the strongest evidence-based conclusions.',
    drillsList: [
      { id: 'logic-ladder', title: 'Assumption Test', type: 'Drill', time: '6 min', xp: 60 },
      { id: 'equation-rush', title: 'Argument Strength', type: 'Drill', time: '7 min', xp: 70 },
    ],
  },
  patterns: {
    label: 'Pattern Recognition', track: 'Analytical',
    desc: 'Identify visual and numerical patterns quickly.',
    drills: 2, timeLeft: '30min',
    intro: 'Train spotting sequence rules and completing pattern-based questions efficiently.',
    drillsList: [
      { id: 'logic-ladder', title: 'Sequence Solve', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'equation-rush', title: 'Pattern Pulse', type: 'Drill', time: '6 min', xp: 60 },
    ],
  },
  'public-policy': {
    label: 'Public Policy', track: 'General Information',
    desc: 'Understand governance frameworks and policy basics.',
    drills: 2, timeLeft: '35min',
    intro: 'Explore policy process fundamentals and governance concepts relevant to the CSE.',
    drillsList: [
      { id: 'logic-ladder', title: 'Policy Quickfire', type: 'Drill', time: '5 min', xp: 50 },
      { id: 'sentence-correction', title: 'Policy Application', type: 'Drill', time: '6 min', xp: 60 },
    ],
  },
  constitution: {
    label: 'Philippine Constitution', track: 'General Information',
    desc: 'Review constitutional principles and rights.',
    drills: 2, timeLeft: '45min',
    intro: 'Practice questions on constitutional structure, rights, and public office responsibilities.',
    drillsList: [
      { id: 'logic-ladder', title: 'Rights Review', type: 'Drill', time: '6 min', xp: 60 },
      { id: 'sentence-correction', title: 'Government Structure', type: 'Drill', time: '7 min', xp: 70 },
    ],
  },
}

export default function ModuleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const mod = MODULES_DATA[id]

  if (!mod) return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-white">Module not found.</p>
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
            <ArrowLeft size={16} /> Back to all modules
          </button>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{mod.label}</h2>
              <p className="text-slate-800 text-sm mt-1">{mod.desc}</p>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Drills</p>
                <p className="text-white font-extrabold text-xl">{mod.drills}</p>
              </div>
              <div className="bg-[#1a2235] border border-slate-600 rounded-xl px-5 py-3 text-center">
                <p className="text-slate-400 text-xs">Time left</p>
                <p className="text-white font-extrabold text-xl">{mod.timeLeft}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">

          {/* Course Content */}
          <div className="flex h-full flex-col rounded-2xl border-2 border-[#EAB308] bg-[#1a2235] p-7">
            <h3 className="text-2xl font-extrabold text-white mb-5">Course Content</h3>
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {mod.drillsList.map((item) => (
                <div key={item.id} className="bg-[#0d1117] rounded-xl px-4 py-3 flex items-center gap-4 hover:border hover:border-[#EAB308]/40 transition">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-lg">🎯</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-white">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {item.type} ● {item.time} ● {item.xp}xp
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate(`/learn/drill/${item.id}`)}
                    className="shrink-0 text-slate-400 transition hover:text-[#EAB308]"
                    aria-label={`Open drill ${item.title}`}
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
              <p className="text-slate-300 text-sm">{mod.intro}</p>
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