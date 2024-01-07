import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import "./assets/style/sidebar.css"
import "./assets/style/form.css"

import Footer from "./components/Footer"
import LanguageSection from "./features/LanguageSection"
import "./assets/style/app.css"
import "./assets/style/form.css"
import CustomRoute from "./components/CustomRoute"
import CollapseSection from "./components/CollapseSection"
import WorkExperience from "./features/WorkExperience"
import References from "./features/References"
import PersonalInfo from "./features/PersonalInfo"
import Preview from "./features/Preview"
import Skills from "./features/Skills"
import Education from "./features/Education"
function App() {
  const [references, setReferences] = useState([])
  const [languages, setLanguages] = useState([])
  const [informations, setInformations] = useState([])
  const [skills, setSkills] = useState([])
  const [formData, setFormData] = useState({
    nom: "",
    titre: "",
    profile: "",
    email: "",
    adresse: "",
    phone: "",
    linkden: "",
  })
  const [image, setImage] = useState({ file: "", previewUrl: "" })
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
          <div className="right-side">
            <CustomRoute path="Information Personelle" page={page}>
              <h1>Information personelles</h1>

              <PersonalInfo
                informations={informations}
                setInformations={setInformations}
                formData={formData}
                setFormData={setFormData}
                image={image}
                setImage={setImage}
              />
            </CustomRoute>
            <CustomRoute path="Education" page={page}>
              <h1>this is Education </h1>
              <Education />
            </CustomRoute>
            <CustomRoute path="Experiences" page={page}>
              <h1>Expérience Professionnelle</h1>
              <WorkExperience></WorkExperience>
            </CustomRoute>
            <CustomRoute path="Compétances" page={page}>
              <h1>this is Compétances </h1>
              <Skills skills={skills} setSkills={setSkills} />
            </CustomRoute>
            <CustomRoute path="Langues" page={page}>
              <h1>Languages</h1>
              <LanguageSection
                languages={languages}
                setLanguages={setLanguages}
              />
            </CustomRoute>
            <CustomRoute path="Références" page={page}>
              <h1>this is Références </h1>
              <References
                references={references}
                setReferences={setReferences}
              />
            </CustomRoute>
          </div>

          <Preview
            informations={formData}
            references={references}
            languages={languages}
            image={image}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
