// LanguageSection.jsx
import React, { useEffect, useState } from "react"
import CollapseSection from "../components/CollapseSection"

const LanguageSection = ({ languages, setLanguages }) => {
  const [formData, setFormData] = useState({
    langue: "",
    level: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const handleLanguageChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

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
      <form onSubmit={handleSubmit} className="form">
        <label>
          Langue *
          <input
            type="text"
            name="langue"
            value={formData.langue}
            onChange={handleLanguageChange}
            required
          />
        </label>

        <label>
          Niveau *
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
          {editingIndex !== null ? "Modifier la langue" : "Ajouter une langue"}
        </button>
      </form>
      <div className="display">
        {languages.map((lang, index) => (
          <CollapseSection title={lang.langue}>
            <div key={index} className="content">
              <div>
                {" "}
                {lang.langue}{" "}
                <span className={`type-label ${lang.level}`}>{lang.level}</span>
              </div>
              <div className="actions">
                <button
                  className="action delete  action-button"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </button>
                <button
                  className="action update  action-button"
                  onClick={() => handleEdite(index)}
                >
                  Modifier
                </button>
              </div>
            </div>
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}

export default LanguageSection
