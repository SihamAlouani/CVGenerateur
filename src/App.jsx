import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import { Route, Routes } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState("")
  useEffect(() => {
    console.log(page)
  })
  return (
    <div className="app">
      {/* routes */}
      <Sidebar setPage={setPage} />
      <div className="content">
        <div className="route" data-visible={"Experiences" == page}>
          <h1>this is Experiences</h1>
        </div>
        <div className="route" data-visible={"Education" == page}>
          <h1>this is Education</h1>
        </div>
      </div>
    </div>
  )
}

export default App
