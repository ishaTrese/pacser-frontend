import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Learn', path: '/learn' },
  { label: 'Practice', path: '/practice' },
  { label: 'Leaderboards', path: '/leaderboards' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  function getLinkTarget(path) {
    if (user || path === '/') {
      return path
    }
    return '/login'
  }

  return (
    <nav
      className="w-full flex items-center px-6 h-16 gap-6"
      style={{ backgroundColor: '#0d1117', borderBottom: '2px solid #EAB308' }}
    >
      {/* Logo */}
      <Link to="/" className="flex-shrink-0 mr-2">
        <img src="/chq-logo.png" alt="CHQ Logo" className="h-12 w-12 rounded-xl object-contain" />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={getLinkTarget(link.path)}
              className="px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-150"
              style={{
                backgroundColor: isActive ? '#EAB308' : 'transparent',
                color: isActive ? '#0d1117' : '#ffffff',
              }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 ml-auto">
        {user ? (
          <>
            {/* Bell */}
            <button className="text-white hover:text-yellow-400 transition-colors">
              <Bell size={22} />
            </button>

            {/* Go Premium */}
            <button
              className="px-5 py-2 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#EAB308', color: '#0d1117' }}
            >
              Go Premium
            </button>

            {/* Avatar + Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-transparent hover:border-yellow-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </button>

              {/* Chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white absolute -right-4 top-3 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 rounded-md shadow-lg z-50 overflow-hidden"
                  style={{ backgroundColor: '#ffffff', color: '#0d1117' }}
                >
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/shop"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-5 py-2 rounded-full text-sm font-bold border border-slate-400 text-white hover:border-[#EAB308] hover:text-[#EAB308] transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#EAB308', color: '#0d1117' }}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}