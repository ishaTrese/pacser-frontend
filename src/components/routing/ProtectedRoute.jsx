import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading, userClass } = useAuth()
  const location = useLocation()

  if (loading) return <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
    <p className="text-yellow-400">Loading...</p>
  </div>

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (!userClass && location.pathname !== '/select-class' && location.pathname !== '/profile') {
    return <Navigate to="/select-class" replace />
  }

  return children
}