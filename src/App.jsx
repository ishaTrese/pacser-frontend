import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProtectedRoute from './components/routing/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import DrillDetail from './pages/DrillDetail'
import Home from './pages/Home'
import Learn from './pages/Learn'
import LessonPlaceholder from './pages/LessonPlaceholder'
import ModuleDetail from './pages/ModuleDetail'
import Practice from './pages/Practice'
import Profile from './pages/Profile'
import TrackDetail from './pages/TrackDetail'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="flex h-[80vh] items-center justify-center px-4">
        <h1 className="text-center text-3xl font-bold text-[#EAB308]">{title} — Coming Soon</h1>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={(
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/learn"
            element={(
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/learn/track/:id"
            element={(
              <ProtectedRoute>
                <TrackDetail />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/learn/module/:id"
            element={(
              <ProtectedRoute>
                <ModuleDetail />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/learn/drill/:id"
            element={(
              <ProtectedRoute>
                <DrillDetail />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/learn/lesson/:id"
            element={(
              <ProtectedRoute>
                <LessonPlaceholder />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/profile"
            element={(
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/practice"
            element={(
              <ProtectedRoute>
                <Practice />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/leaderboards"
            element={(
              <ProtectedRoute>
                <PlaceholderPage title="Leaderboards" />
              </ProtectedRoute>
            )}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App