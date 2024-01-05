import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import { Route, Routes } from "react-router-dom"
import CustomRoute from "./components/CustomRoute"
import References from "./features/References"
function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState("")

  return (
    <div className="app">
      {/* routes */}
      <Sidebar setPage={setPage} page={page} />
      <div className="content">
        <CustomRoute path="Information Personelle" page={page}>
          <h1>this is Info Personelle</h1>
        </CustomRoute>
        <CustomRoute path="Education" page={page}>
          <h1>this is Education </h1>
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
          <References/>
        </CustomRoute>
      </div>
    </div>
  )
}

export default App
