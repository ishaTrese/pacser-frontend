import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function LessonPlaceholder() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <div className="flex h-[80vh] flex-col items-center justify-center gap-2 px-4">
        <h1 className="text-center text-3xl font-bold text-[#EAB308]">Lesson content coming soon</h1>
        <p className="text-sm text-slate-400">Lesson ID: {id}</p>
      </div>
    </div>
  )
}
