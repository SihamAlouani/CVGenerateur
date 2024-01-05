import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"

import Footer from "./components/Footer"
import LanguageSection from "./features/LanguageSection"
import "./assets/style/app.css"
import "./assets/style/form.css"
import CustomRoute from "./components/CustomRoute"
import CollapseSection from "./components/CollapseSection"
import WorkExperience from "./features/WorkExperience"
import References from "./features/References"
function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState("Information Personelle")
  function test() {
    let original = document.body.innerHTML
    let content = document.querySelector("#test").innerHTML
    document.body.innerHTML = content
    window.print()
    document.body.innerHTML = original
  }
  return (
    <div className="app">
      {/* routes */}
      <div className="app-content">
        <Sidebar setPage={setPage} page={page} />
        <div className="content">
          <CustomRoute path="Information Personelle" page={page}>
            <CollapseSection title="hello from something">
              <div>
                <h1>hello</h1>
                <h1>world</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus aspernatur praesentium nemo officia quo sed quis
                  nobis, atque tempore a omnis, eligendi quod possimus
                  distinctio ipsum? Tempora, odit optio? Illo!
                </p>
              </div>
            </CollapseSection>
          </CustomRoute>
          <CustomRoute path="Education" page={page}>
            <h1>this is Education </h1>
          </CustomRoute>
          <CustomRoute path="Experiences" page={page}>
            <WorkExperience></WorkExperience>
          </CustomRoute>
          <CustomRoute path="Compétances" page={page}>
            <h1>this is Compétances </h1>
          </CustomRoute>
          <CustomRoute path="Langues" page={page}>
            <LanguageSection />
          </CustomRoute>
          <CustomRoute path="Références" page={page}>
            <h1>this is Références </h1>
            <References/>
          </CustomRoute>

          <div className="prev" id="test">
            <button onClick={() => test()}>click</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
