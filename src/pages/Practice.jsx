import Navbar from '../components/layout/Navbar'
import { Lock, Star } from 'lucide-react'

// ── ENERGY BAR ────────────────────────────────────────────────────────────────
const ENERGY_COLORS = [
  '#92400e', // 1 deep amber
  '#9c4e19',
  '#a65c24',
  '#b06a2f',
  '#ba793a',
  '#c48745',
  '#cf9550',
  '#d9a35b',
  '#e3b166',
  '#edc071',
  '#f7ce7c',
  '#fef08a', // 12 bright lemon gold
  '#fef08a',
  '#fef08a',
  '#fef08a',
  '#fef08a',
  '#fef08a',
  '#fef08a',
  '#fef08a',
  '#fef08a'
]

const ENERGY_TOTAL = 20
const ENERGY_FILLED = 12

function EnergyBar() {
  return (
    <div className="flex flex-col items-end gap-1.5">
      <span className="text-xs text-slate-900 font-bold tracking-wide">Energy</span>
      <div className="bg-black/40 rounded-lg p-2 flex gap-[3px] items-center flex-nowrap">
        {Array.from({ length: ENERGY_TOTAL }).map((_, i) => {
          const filled = i < ENERGY_FILLED
          const color = ENERGY_COLORS[i]
          return (
            <div
              key={i}
              style={{
                backgroundColor: filled ? color : '#ffffff',
              }}
              className={`w-[13px] h-[18px] rounded-[2px] ${filled ? '' : 'border border-white/20'}`}
            />
          )
        })}
      </div>
      <button className="text-xs bg-white text-slate-800 font-semibold px-3 py-1 rounded hover:bg-slate-100 transition">
        Refill energy
      </button>
    </div>
  )
}

// ── STAR RATING ───────────────────────────────────────────────────────────────
function StarRating({ count = 1, faded = false }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count
              ? faded ? 'text-yellow-700' : 'text-yellow-400'
              : 'text-slate-600'
          }
          fill={i < count ? (faded ? '#854d0e' : '#facc15') : 'none'}
        />
      ))}
    </div>
  )
}

// ── PRACTICE CARDS DATA ───────────────────────────────────────────────────────
const CARDS = [
  { title: 'Probability', track: 'Numerical', stars: 2, colors: ['#ef4444','#f97316','#22c55e'], locked: false },
  { title: 'Probability', track: 'Numerical', stars: 1, colors: ['#ef4444','#f97316'],           locked: false },
  { title: 'Probability', track: 'Numerical', stars: 3, colors: ['#ef4444','#eab308','#22c55e'], locked: false },
  { title: 'Probability', track: 'Numerical', stars: 2, colors: ['#ef4444','#f97316','#22c55e'], locked: false },
  { title: 'Probability', track: 'Numerical', stars: 3, colors: ['#ef4444','#f97316','#22c55e'], locked: false },
  { title: 'Probability', track: 'Numerical', stars: 2, colors: ['#ef4444','#f97316','#22c55e'], locked: true  },
  { title: 'Probability', track: 'Numerical', stars: 1, colors: ['#ef4444','#f97316'],           locked: true  },
  { title: 'Probability', track: 'Numerical', stars: 3, colors: ['#ef4444','#f97316','#22c55e'], locked: true  },
]

function PracticeCard({ title, track, stars, locked }) {
  return (
    <div
      className={`relative rounded-2xl p-5 flex flex-col justify-between min-h-[130px] border transition
        ${locked
          ? 'bg-[#1a2235] border-slate-700/40 opacity-50'
          : 'bg-[#1a2235] border-transparent hover:border-[#EAB308]/30 cursor-pointer'
        }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className={`font-bold text-sm ${locked ? 'text-slate-400' : 'text-white'}`}>
            {title}
          </p>
          <p className={`text-xs mt-0.5 ${locked ? 'text-slate-500' : 'text-[#EAB308]'}`}>
            {track}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-slate-500">2 Energy</span>
          <div className="flex gap-[2px]">
            <div className="w-[8px] h-[12px] rounded-[2px] bg-[#EAB308]" />
            <div className="w-[8px] h-[12px] rounded-[2px] bg-[#EAB308]" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-3">
        <StarRating count={stars} faded={locked} />
      </div>

      {locked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Lock size={40} className="text-slate-300" />
        </div>
      )}
    </div>
  )
}

// ── PAGINATION ────────────────────────────────────────────────────────────────
function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1 py-4">
      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-[#1a2235] transition">
        ← Previous
      </button>
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          className={`w-8 h-8 rounded-lg text-sm font-semibold transition ${
            n === 1
              ? 'bg-[#EAB308] text-slate-900'
              : 'text-slate-400 hover:text-white hover:bg-[#1a2235]'
          }`}
        >
          {n}
        </button>
      ))}
      <span className="text-slate-500 px-1">…</span>
      {[67, 68].map((n) => (
        <button
          key={n}
          className="w-8 h-8 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-[#1a2235] transition"
        >
          {n}
        </button>
      ))}
      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-[#1a2235] transition">
        Next →
      </button>
    </div>
  )
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function Practice() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-6 py-6">

        {/* Gold banner */}
        <div className="bg-[#EAB308] rounded-2xl px-7 py-5 mb-6 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-slate-900 font-extrabold text-2xl mb-1">Practice</h1>
            <p className="text-slate-800 text-sm">
              Try to take on quick tests to measure your own current aptitude for each of the subjects.
            </p>
          </div>
          <div className="shrink-0">
            <EnergyBar />
          </div>
        </div>

        {/* Sort dropdowns */}
        <div className="flex justify-end gap-3 mb-5">
          <div className="relative">
            <select className="bg-white text-black text-sm border border-black rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-black appearance-none cursor-pointer h-full">
              <option value="">Sort by</option>
              <option>Numerical</option>
              <option>Verbal</option>
              <option>Analytical</option>
              <option>General Information</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div className="relative">
            <select className="bg-white text-black text-sm border border-black rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-black appearance-none cursor-pointer h-full">
              <option value="">Sort by</option>
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 content-start">
          {CARDS.map((card, i) => (
            <PracticeCard key={i} {...card} />
          ))}
        </div>

        {/* Pagination at bottom */}
        <Pagination />
      </div>

      {/* Footer */}
      <footer className="border-t border-[#EAB308]/20 py-4 px-6 text-center">
        <p className="text-slate-600 text-xs">© 2026 PACSER. All rights reserved.</p>
      </footer>
    </div>
  )
}