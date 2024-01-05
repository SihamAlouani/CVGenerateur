// LanguageSection.jsx
import React, { useEffect, useState } from "react"
import CollapseSection from "../components/CollapseSection"

const LanguageSection = () => {
  const [languages, setLanguages] = useState([])
  const [formData, setFormData] = useState({
    langue: "",
    level: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const handleLanguageChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    console.log(formData)
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingIndex !== null) {
      const newLanguage = [...languages]
      newLanguage[editingIndex] = formData

      setLanguages(newLanguage)
      setEditingIndex(null)
    } else {
      setLanguages([...languages, formData])
    }
    setFormData({
      langue: "",
      level: "",
    })
  }

  const handleEdite = (index) => {
    setFormData(languages[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newLanguages = [...languages]
    newLanguages.splice(index, 1)
    setLanguages(newLanguages)
    setEditingIndex(null)
  }

  const levels = ["Langue-maternnelle", "Basic", "Intermidiaire", "Avancé"]

  return (
    <div>
      <h2>Languages</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Language:
          <input
            type="text"
            name="langue"
            value={formData.langue}
            onChange={handleLanguageChange}
            required
          />
        </label>

        <label>
          Level:
          <select
            name="level"
            onChange={handleLanguageChange}
            id=""
            value={formData.level}
            required
          >
            <option></option>
            {levels.map((level, index) => {
              return (
                <option key={index}>
                  {level == levels[0] ? "Langue maternnelle" : level}
                </option>
              )
            })}
          </select>
        </label>

        <button type="submit">
          {editingIndex !== null ? "modifier la langue" : "Ajouter une langue"}
        </button>
      </form>
      <div className="display">
        {languages.map((lang, index) => (
          <CollapseSection title={lang.langue}>
            <div key={index}>
              {lang.langue} -{" "}
              <span className={`type-label ${lang.level}`}>{lang.level}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdite(index)}>Modifier</button>
            </div>
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}

export default LanguageSection
