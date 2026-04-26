import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/test")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <h1 className="text-yellow-400 text-3xl font-bold">PACSER</h1>
    </div>
  )
}

export default App