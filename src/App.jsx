import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import { Route, Routes } from "react-router-dom"
import CustomRoute from "./components/CustomRoute"
import PersonalInfo from "./features/PersonalInfo"
import Education from "./features/Education"
function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState("")

  return (
    <div className="app">
      {/* routes */}
      <Sidebar setPage={setPage} page={page} />
      <div className="content">
        <CustomRoute path="Information Personelle" page={page}>
        <PersonalInfo setPage={setPage} page={page} />
        </CustomRoute>
        <CustomRoute path="Education" page={page}>
        <Education setPage={setPage} page={page} />
        </CustomRoute>
        <CustomRoute path="Experiences" page={page}>
          <h1>this is Experiences </h1>
        </CustomRoute>
        <CustomRoute path="Compétances" page={page}>
          <h1>this is Compétances </h1>
        </CustomRoute>
        <CustomRoute path="Langues" page={page}>
          <h1>this is Langues </h1>
        </CustomRoute>
        <CustomRoute path="Références" page={page}>
          <h1>this is Références </h1>
        </CustomRoute>
      </div>
    </div>
  )
}

export default App
