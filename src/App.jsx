import { useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import { Route, Routes } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* routes */}

      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/Experiences" element={<h1>Expe</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
