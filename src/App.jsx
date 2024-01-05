import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import"./assets/style/Footer.css"
import { Route, Routes } from "react-router-dom"
import CustomRoute from "./components/CustomRoute"
import Footer from "./components/Footer"
import LanguageSection from "./features/LanguageSection"
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
            <LanguageSection/>
        </CustomRoute>
        <CustomRoute path="Références" page={page}>
          <h1>this is Références </h1>
        </CustomRoute>
        
        <Footer/>

      </div>
    </div>
  )
}

export default App
