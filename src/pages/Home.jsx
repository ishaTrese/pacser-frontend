import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Gamepad2, BookOpen, PenLine, Trophy, Eye, Target, Shield, Star, MapPin, Phone, Mail } from 'lucide-react'

// ─── COMPANY DETAILS ──────────────────────────────────────────────────────────
const COMPANY = {
  name: "Community's Holistic and Qualitative Institute Inc. (CHQ Institute)",
  partner: 'Insignia Review Center',
  description:
    "PACSER is powered by the <strong>Community's Holistic and Qualitative Institute Inc. (CHQ Institute)</strong> and <strong>Insignia Review Center</strong> — institutions dedicated to helping Filipinos pass the Civil Service Exam and build meaningful careers in public service.",
  vision:
    'To become a leading and trusted online review institute that empowers aspiring civil servants with the knowledge, skills, and confidence needed to successfully pass the Civil Service Examination and serve the nation with excellence and integrity.',
  mission:
    'CHQ Institute Inc. is committed to providing comprehensive, accessible, and high-quality online review programs tailored for Civil Service Examination takers — equipping learners with effective strategies, updated materials, and real exam simulations, supporting students through guidance and motivation, and promoting discipline, competence, and a strong sense of public service among future government professionals.',
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
    level: 42,
    quote:
      'I passed the Professional CSE on my first try! The gamified approach made studying fun, and the practice tests were very similar to the actual exam. The XP system kept me motivated daily.',
  },
  {
    initials: 'JD',
    name: 'Juan dela Cruz',
    role: 'Sub-Professional CSE Passer',
    level: 38,
    quote:
      'PACSER made reviewing feel like a game. I looked forward to studying every day just to keep my streak going. Highly recommend to anyone preparing for the CSE.',
  },
  {
    initials: 'AR',
    name: 'Anne Reyes',
    role: 'Professional CSE Passer',
    level: 55,
    quote:
      'The structured tracks and detailed explanations helped me understand topics I always struggled with. I felt fully prepared on exam day.',
  },
]

export default function Home() {
  const { user, saveUserClass } = useAuth()
  const navigate = useNavigate()

  const handleCategory = (className) => {
    if (saveUserClass) saveUserClass(className);
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section 
        className="relative h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30H0V0h30v30z' fill='none'/%3E%3Cpath d='M30 1H0V0h30v1zM1 30V0H0v30h1z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")" }}
      >
        {/* Floating Background Icons */}
        <div className="absolute top-[15%] left-[25%] opacity-[0.03] text-[#EAB308] -rotate-12"><Trophy size={100} /></div>
        <div className="absolute bottom-[15%] right-[25%] opacity-[0.03] text-[#EAB308] rotate-12"><Shield size={120} /></div>
        <div className="absolute top-[40%] right-[35%] opacity-[0.03] text-[#EAB308] rotate-45"><Star size={60} /></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
          <span className="inline-block mt-8 mb-4 px-4 py-1.5 rounded-full border border-[#EAB308]/50 bg-[#EAB308]/10 text-[#EAB308] text-xs font-bold tracking-widest uppercase">
            Gamified CSE Reviewer
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-4">
            Level Up Your{' '}
            <span className="text-[#EAB308]">Civil Service Exam</span>{' '}
            Preparation
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-6">
            Master the CSE with gamified learning, comprehensive study tracks, and
            practice tests built for Filipino reviewees.
          </p>

          <p className="text-white font-semibold text-base mb-4">Choose Your Category</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
            <button
              onClick={() => handleCategory('Professional')}
              className="group flex-1 bg-gradient-to-b from-[#1a2235] to-[#0d1117] border-2 border-[#EAB308] text-white p-5 rounded-2xl hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 flex flex-col items-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#EAB308]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield size={36} className="text-[#EAB308] group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col gap-1 relative z-10">
                <span className="font-extrabold text-xl text-[#EAB308]">Professional</span>
                <span className="text-slate-400 text-xs font-medium">For advanced roles & supervisory</span>
              </div>
              <span className="mt-2 px-4 py-1.5 rounded-full bg-[#EAB308] text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#EAB308]/20 group-hover:bg-[#fde047] transition-colors relative z-10 animate-pulse">
                Select Class
              </span>
            </button>

            <button
              onClick={() => handleCategory('Sub-Professional')}
              className="group flex-1 bg-gradient-to-b from-[#1a2235] to-[#0d1117] border-2 border-slate-700 hover:border-[#EAB308]/70 text-white p-5 rounded-2xl hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 flex flex-col items-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Target size={36} className="text-slate-500 group-hover:text-[#EAB308] group-hover:scale-110 transition-all duration-300" />
              <div className="flex flex-col gap-1 relative z-10">
                <span className="font-extrabold text-xl text-slate-300 group-hover:text-white transition-colors">Sub-Professional</span>
                <span className="text-slate-500 text-xs font-medium group-hover:text-slate-400 transition-colors">For clerical, trades & crafts</span>
              </div>
              <span className="mt-2 px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 group-hover:bg-[#EAB308]/10 group-hover:text-[#EAB308] text-[10px] font-black uppercase tracking-widest transition-colors relative z-10">
                Select Class
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY PACSER ───────────────────────────────────────────── */}
      <section className="bg-[#0d1117] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-2">
            Why PACSER
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10">
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

      {/* ── ABOUT US ─────────────────────────────────────────────── */}
      <section className="bg-[#111827] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Your Partner in <span className="text-[#EAB308]">CSE Success</span>
          </h2>
          <p
            className="text-slate-300 text-base leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: COMPANY.description }}
          />

          {/* Vision + Mission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 text-left">
            <div className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Eye size={22} className="text-[#EAB308] shrink-0" />
                <h3 className="font-bold text-white text-base">Our Vision</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{COMPANY.vision}</p>
            </div>
            <div className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Target size={22} className="text-[#EAB308] shrink-0" />
                <h3 className="font-bold text-white text-base">Our Mission</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{COMPANY.mission}</p>
            </div>
          </div>

          {/* Contact placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-500 mt-12">
            <div className="bg-[#1a2235] rounded-2xl p-6 flex flex-col items-center gap-4 text-center border border-transparent hover:border-[#EAB308]/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#EAB308]/10 flex items-center justify-center">
                <MapPin size={24} className="text-[#EAB308]" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1">Address</p>
                <p className="text-slate-400">{COMPANY.address}</p>
              </div>
            </div>
            <div className="bg-[#1a2235] rounded-2xl p-6 flex flex-col items-center gap-4 text-center border border-transparent hover:border-[#EAB308]/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#EAB308]/10 flex items-center justify-center">
                <Phone size={24} className="text-[#EAB308]" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1">Contact</p>
                <p className="text-slate-400">{COMPANY.contact}</p>
              </div>
            </div>
            <div className="bg-[#1a2235] rounded-2xl p-6 flex flex-col items-center gap-4 text-center border border-transparent hover:border-[#EAB308]/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#EAB308]/10 flex items-center justify-center">
                <Mail size={24} className="text-[#EAB308]" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1">Email</p>
                <p className="text-slate-400">{COMPANY.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ──────────────────────────────────────── */}
      <section className="bg-[#0d1117] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-2">
            Success Stories
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10">
            Hear from Our <span className="text-[#EAB308]">Passers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col gap-4 max-w-sm mx-auto">
                {/* Dialogue Box */}
                <div className="relative bg-[#1a2235] rounded-xl p-4 shadow-xl border border-slate-700/50">
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-[#1a2235] rotate-45 border-b border-r border-slate-700/50"></div>
                  <p className="text-slate-300 text-xs italic leading-relaxed relative z-10">"{t.quote}"</p>
                </div>
                
                {/* Player Stats */}
                <div className="flex items-center gap-3 pl-2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full border-2 border-[#FDE047] bg-[#0d1117] flex items-center justify-center text-[#FDE047] font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div className="absolute -top-1 -right-2 bg-[#FDE047] text-slate-900 text-[8px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#0d1117] shadow-md">
                      {t.level}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">{t.name}</p>
                    <p className="text-[#EAB308] text-[10px] font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  )
}