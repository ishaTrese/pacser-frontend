import Navbar from '../components/layout/Navbar'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh] gap-3">
        <h1 className="text-[#EAB308] text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400 text-sm">
          Welcome back, {user?.first_name}! Dashboard coming in the next step.
        </p>
      </div>
    </div>
  )
}