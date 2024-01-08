import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"
//import "../assets/style/WorkExperience.css";

function WorkExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    name: "",
    jobname: "",
    jobtype: "",
    description: "",
    datestart: "",
    dateend: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingIndex !== null) {
      const newExperiences = [...experiences]
      newExperiences[editingIndex] = formData
      setExperiences(newExperiences)
      setEditingIndex(null)
    } else {
      setExperiences([...experiences, formData])
    }

    setFormData({
      name: "",
      jobname: "",
      jobtype: "",
      description: "",
      datestart: "",
      dateend: "",
    })
  }

  const handleEdit = (index) => {
    setFormData(experiences[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newExperiences = [...experiences]
    newExperiences.splice(index, 1)
    setExperiences(newExperiences)
    setEditingIndex(null)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="companyname">
            Nom de l'entreprise *
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrer le nom de l'entreprise "
              required
            />
          </label>

          <label htmlFor="jobname">
            l'intitule de post *
            <input
              type="text"
              name="jobname"
              id="jobname"
              value={formData.jobname}
              onChange={handleChange}
              placeholder="Entrer l'intitule de votre post "
              required
            />
          </label>

          <label htmlFor="jobtype">
            {" "}
            Type de travail *
            <select
              name="jobtype"
              id="jobtype"
              value={formData.jobtype}
              onChange={handleChange}
              required
            >
              <option>----</option>
              <option>Hybride</option>
              <option>Temps plein</option>
              <option>A distance</option>
            </select>
          </label>

          <label htmlFor="description">
            Description de mission *
            <textarea
              type="text"
              name="description"
              id="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <label htmlFor="datestart">
            Date de début *
            <input
              type="date"
              name="datestart"
              value={formData.datestart}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="dateend">
            Date de fin *
            <input
              type="date"
              name="dateend"
              value={formData.dateend}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn1">
            {editingIndex !== null
              ? "Modifier Experience"
              : "Ajouter Experience"}
          </button>
          <br />
        </form>

        <div className="display">
          {experiences.map((experience, index) => (
            <CollapseSection key={index} title={experience.name}>
              <div className="d-grid">
                <span>Nom de l'entreprise : {experience.name}</span>
                <span>Poste : {experience.jobname}</span>
                <span>Type de travail: {experience.jobtype}</span>
                <span>Description: {experience.description}</span>
                <span>
                  Périod :{experience.datestart}-{experience.dateend}
                </span>
              </div>
              <div className="actions">
                <button
                  className="action update"
                  onClick={() => handleEdit(index)}
                >
                  Modifier
                </button>
                <button
                  className="action delete"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </button>
              </div>
            </CollapseSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkExperience
