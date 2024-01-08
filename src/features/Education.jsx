import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  
 
} from "@fortawesome/free-brands-svg-icons"
import { faDeleteLeft, faEdit, faTrash, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"

function Education({ educations, setEducations }) {
  const [formData, setFormData] = useState({
    diplome: "",
    date_de_commencement: "",
    date_de_fin: "",
    ecole: "",
    location: "",
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
      const newPersonalInf = [...educations]
      newPersonalInf[editingIndex] = formData
      setEducations(newPersonalInf)
      setEditingIndex(null)
    } else {
      setEducations([...educations, formData])
    }

    setFormData({
      diplome: "",
      date_de_commencement: "",
      date_de_fin: "",
      ecole: "",
      location: "",
    })
  }

  const handleEdit = (index) => {
    setFormData(educations[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newPersonalInf = [...educations]
    newPersonalInf.splice(index, 1)
    setEducations(newPersonalInf)
    setEditingIndex(null)
  }

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
          Nom diplôme * {" "}
            <input
              type="text"
              name="diplome"
              id="diplome"
              value={formData.diplome}
              onChange={handleChange}
              placeholder="Licence en Ingénierie... "
              required
            />
          </label>
          <label htmlFor="date_de_commencement">
            Date de commencement *{" "}
            <input
              type="date"
              name="date_de_commencement"
              value={formData.date_de_commencement}
              onChange={handleChange}
              required
            />
          </label> 
          <label htmlFor="date_de_fin">
            Date de fin *{" "}
            <input
              type="date"
              name="date_de_fin"
              value={formData.date_de_fin}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="ecole">
          Nom d'établissement *{" "}
            <input
              type="text"
              name="ecole"
              id="ecole"
              value={formData.ecole}
              onChange={handleChange}
              placeholder="Université Internationale de Rabat  "
              required
            />
          </label>
          <label htmlFor="location">
            Ville * {" "}
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              
              required
            />
          </label>{" "}
          <button type="submit">
            {editingIndex !== null
              ? "Modifier Education"
              : "Ajouter Eduction"}
          </button>
        </form>

        <div className="display">
          {educations.map((perI, index) => {
            return (
              <CollapseSection title={perI.diplome}>
                <div className="content">
                  <div className="d-grid">
                    <span>Nom diplôme :{perI.diplome}</span>
                    <span>date de Fin :{perI.date_de_fin}</span>
                    <span>Nom d'établissement :{perI.ecole}</span>
                    <span>Ville :{perI.location}</span>
                    <div className="actions">
                      <button
                        className="action update action-button"
                        onClick={() => handleEdit(index)}
                      >
                        <FontAwesomeIcon className="icon" icon={faEdit} />
                        
                        Modifier
                      </button>
                      <button
                        className="action delete action-button"
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon className="icon" icon={faTrash} />
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </CollapseSection>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Education
