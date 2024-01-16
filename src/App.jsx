import React, { useEffect, useMemo, useState } from "react"
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
import useLocalStorage from "./components/useLocalStorage" // Importez le custom hook
import useDocumentTitle from "./features/UseDocumentTitle"

function App() {
  const [references, setReferences] = useState([])
  const [languages, setLanguages] = useLocalStorage("languages", []) // Utilisez le custom hook pour gérer les langues dans le localStorage
  const [informations, setInformations] = useState([])
  const [skills, setSkills] = useState([])
  const [educations, setEducations] = useState([])
  const [experiences, setExperiences] = useState([])
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
  const [page, setPage] = useState("Information Personelles")
  const updateTitle = useDocumentTitle()
  useMemo(() => {
    console.log("helloi")
    updateTitle(page)
  }, [page])

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem("infoCv"))
    if (!storedInfo) {
      const initialValue = {
        nom: "",
        titre: "",
        profile: "",
        email: "",
        adresse: "",
        phone: "",
        linkden: "",
        skills: [],
        languages: [],
        references: [],
        educations: [],
        experiences: [],
      }

      localStorage.setItem("infoCv", JSON.stringify(initialValue))
    } else {
      setFormData({
        nom: storedInfo.nom,
        titre: storedInfo.titre,
        profile: storedInfo.profile,
        email: storedInfo.email,
        adresse: storedInfo.adresse,
        phone: storedInfo.phone,
        linkden: storedInfo.linkden,
      })
    }
  }, [])
  return (
    <div className="app">
      {/* routes */}
      <div className="app-content">
        <Sidebar setPage={setPage} page={page} />
        <div className="content">
          <div className="right-side">
            <CustomRoute path="Information Personelles" page={page}>
              <h1>Information personelles</h1>

              <PersonalInfo
                page={page}
                informations={informations}
                setInformations={setInformations}
                formData={formData}
                setFormData={setFormData}
                image={image}
                setImage={setImage}
              />
            </CustomRoute>
            <CustomRoute path="Educations" page={page}>
              <h1> Education </h1>
              <Education
                page={page}
                educations={educations}
                setEducations={setEducations}
              />
            </CustomRoute>
            <CustomRoute path="Experiences" page={page}>
              <h1>Expériences Professionnelles</h1>
              <WorkExperience
                page={page}
                experiences={experiences}
                setExperiences={setExperiences}
              ></WorkExperience>
            </CustomRoute>
            <CustomRoute path="Compétances" page={page}>
              <h1>Compétances théchniques</h1>
              <Skills skills={skills} page={page} setSkills={setSkills} />
            </CustomRoute>
            <CustomRoute path="Langues" page={page}>
              <h1>Langues</h1>
              <LanguageSection
                page={page}
                languages={languages}
                setLanguages={setLanguages}
              />
            </CustomRoute>
            <CustomRoute path="Références" page={page}>
              <h1>Références </h1>
              <References
                page={page}
                references={references}
                setReferences={setReferences}
              />
            </CustomRoute>
          </div>

          <Preview
            informations={formData}
            references={references}
            languages={languages}
            educations={educations}
            image={image}
            skills={skills}
            experiences={experiences}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
