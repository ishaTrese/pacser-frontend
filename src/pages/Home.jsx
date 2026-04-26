import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/layout/Navbar'
import { Gamepad2, BookOpen, PenLine, Trophy } from 'lucide-react'

// ─── PLACEHOLDER: Replace with real company details ───────────────────────────
const COMPANY = {
  name: 'Community\'s Holistic and Qualitative Institute Inc. (CHQ Institute)',
  partner: 'Insignia Review Center',
  description:
    'PACSER is powered by the <strong>Community\'s Holistic and Qualitative Institute Inc. (CHQ Institute)</strong> and <strong>Insignia Review Center</strong> — institutions dedicated to helping Filipinos pass the Civil Service Exam and build meaningful careers in public service.',
  address: '[Company Address Placeholder]',
  contact: '[Contact Number Placeholder]',
  email: '[Company Email Placeholder]',
}

const FEATURES = [
  {
    icon: <Gamepad2 size={32} className="text-purple-400" />,
    title: 'Gamified Learning',
    desc: 'Earn XP, maintain streaks, and level up as you study. Learning has never been this engaging.',
  },
  {
    icon: <BookOpen size={32} className="text-green-400" />,
    title: 'Structured Tracks',
    desc: 'Follow guided study tracks aligned with the official Civil Service Exam coverage.',
  },
  {
    icon: <PenLine size={32} className="text-orange-400" />,
    title: 'Practice Tests',
    desc: 'Take timed quizzes per topic and get instant feedback to sharpen your skills.',
  },
  {
    icon: <Trophy size={32} className="text-yellow-400" />,
    title: 'Leaderboards',
    desc: 'Compete with other reviewees and see where you rank nationally.',
  },
]

const TESTIMONIALS = [
  {
    initials: 'MS',
    name: 'Maria Santos',
    role: 'Professional CSE Passer',
    quote:
      '"I passed the Professional CSE on my first try! The gamified approach made studying fun, and the practice tests were very similar to the actual exam. The XP system kept me motivated daily."',
  },
  {
    initials: 'JD',
    name: 'Juan dela Cruz',
    role: 'Sub-Professional CSE Passer',
    quote:
      '"PACSER made reviewing feel like a game. I looked forward to studying every day just to keep my streak going. Highly recommend to anyone preparing for the CSE."',
  },
  {
    initials: 'AR',
    name: 'Anne Reyes',
    role: 'Professional CSE Passer',
    quote:
      '"The structured tracks and detailed explanations helped me understand topics I always struggled with. I felt fully prepared on exam day."',
  },
]

export default function Home() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleCategory = () => {
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 py-20">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#EAB308]/50 bg-[#EAB308]/10 text-[#EAB308] text-xs font-bold tracking-widest uppercase">
          Gamified CSE Reviewer
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
          Level Up Your{' '}
          <span className="text-[#EAB308]">Civil Service Exam</span>{' '}
          Preparation
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-12">
          Master the CSE with gamified learning, comprehensive study tracks, and
          practice tests built for Filipino reviewees.
        </p>

        <p className="text-white font-semibold text-lg mb-6">Choose Your Category</p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
          <button
            onClick={handleCategory}
            className="flex-1 bg-[#EAB308] text-slate-900 font-bold text-lg py-6 rounded-2xl hover:brightness-95 transition shadow-lg shadow-[#EAB308]/20"
          >
            Professional
          </button>
          <button
            onClick={handleCategory}
            className="flex-1 border-2 border-[#EAB308] text-[#EAB308] font-bold text-lg py-6 rounded-2xl hover:bg-[#EAB308]/10 transition"
          >
            Sub-Professional
          </button>
        </div>
      </section>

      {/* ── WHY PACSER ──────────────────────────────────────────── */}
      <section className="bg-[#0d1117] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-3">
            Why PACSER
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-14">
            Everything You Need to Pass
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-[#1a2235] rounded-2xl p-7 flex flex-col gap-4 hover:border hover:border-[#EAB308]/30 transition"
              >
                {f.icon}
                <h3 className="font-bold text-white text-lg">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT US ────────────────────────────────────────────── */}
      <section className="bg-[#111827] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Your Partner in <span className="text-[#EAB308]">CSE Success</span>
          </h2>
          <p
            className="text-slate-300 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: COMPANY.description }}
          />
          {/* PLACEHOLDER: Add more company details here when available */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-500">
            <div className="bg-[#1a2235] rounded-xl p-4">
              <p className="text-slate-400 font-medium mb-1">Address</p>
              <p>{COMPANY.address}</p>
            </div>
            <div className="bg-[#1a2235] rounded-xl p-4">
              <p className="text-slate-400 font-medium mb-1">Contact</p>
              <p>{COMPANY.contact}</p>
            </div>
            <div className="bg-[#1a2235] rounded-xl p-4">
              <p className="text-slate-400 font-medium mb-1">Email</p>
              <p>{COMPANY.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ─────────────────────────────────────── */}
      <section className="bg-[#0d1117] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-3">
            Success Stories
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-14">
            Hear from Our <span className="text-[#EAB308]">Passers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#1a2235] rounded-2xl p-7 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#EAB308] flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#0d1117] border-t border-[#EAB308]/30 py-10 px-4 text-center">
        <p className="text-[#EAB308] font-extrabold text-xl tracking-wider mb-2">PACSER</p>
        <p className="text-slate-400 text-sm mb-1">
          Powered by CHQ Institute &amp; Insignia Review Center
        </p>
        <p className="text-slate-600 text-xs">© 2026 PACSER. All rights reserved.</p>
      </footer>
    </div>
  )
}