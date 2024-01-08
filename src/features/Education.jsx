import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"

function Education({ educations, setEducations }) {
  const [formData, setFormData] = useState({
    diplome: "",
    date_de_commencement: "",
    date_de_fin: "",
    ecole: "",
    location: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const [diplomeValidationError, setDiplomeValidationError] = useState("")
  const [
    dateDeCommencementValidationError,
    setDateDeCommencementValidationError,
  ] = useState("")
  const [dateDeFinValidationError, setdateDeFinValidationError] = useState("")
  const [EcoleValidationError, setEcoleValidationError] = useState("")
  const [VilleValidationError, setVilleValidationError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let diplomeValidation = formData.diplome.length > 0
    let dateDeCommencementValidation = formData.date_de_commencement.length > 0
    let dateDeFintValidation = formData.date_de_fin.length > 0
    let ecoleValidation = formData.ecole.length > 0
    let villeValidation = formData.location.length > 0
    if (
      diplomeValidation &&
      dateDeCommencementValidation &&
      dateDeFintValidation &&
      ecoleValidation &&
      villeValidation
    ) {
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
      setDiplomeValidationError("")
      setDateDeCommencementValidationError("")
      setdateDeFinValidationError("")
      setEcoleValidationError("")
      setVilleValidationError("")
    } else {
      if (!diplomeValidation) {
        setDiplomeValidationError("ce champ est obligatoire")
      } else {
        setDiplomeValidationError("")
      }

      if (!dateDeCommencementValidation) {
        setDateDeCommencementValidationError("ce champ est obligatoire")
      } else {
        setDateDeCommencementValidationError("")
      }

      if (!dateDeFintValidation) {
        setdateDeFinValidationError("ce champ est obligatoire")
      } else {
        setdateDeFinValidationError("")
      }
      if (!ecoleValidation) {
        setEcoleValidationError("ce champ est obligatoire")
      } else {
        setEcoleValidationError("")
      }
      if (!villeValidation) {
        setVilleValidationError("ce champ est obligatoire")
      } else {
        setVilleValidationError("")
      }
    }
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
            Nom diplôme *{" "}
            <input
              type="text"
              name="diplome"
              id="diplome"
              value={formData.diplome}
              onChange={handleChange}
              placeholder="Licence en Ingénierie... "
              // required
            />
            {diplomeValidationError.length > 0 && (
              <span className="error">{diplomeValidationError}</span>
            )}
          </label>
          <label htmlFor="date_de_commencement">
            Date de commencement *{" "}
            <input
              type="date"
              name="date_de_commencement"
              value={formData.date_de_commencement}
              onChange={handleChange}
              // required
            />
            {dateDeCommencementValidationError.length > 0 && (
              <span className="error">{dateDeCommencementValidationError}</span>
            )}
          </label>
          <label htmlFor="date_de_fin">
            Date de fin *{" "}
            <input
              type="date"
              name="date_de_fin"
              value={formData.date_de_fin}
              onChange={handleChange}
              // required
            />
            {dateDeFinValidationError.length > 0 && (
              <span className="error">{dateDeFinValidationError}</span>
            )}
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
              // required
            />
            {EcoleValidationError.length > 0 && (
              <span className="error">{EcoleValidationError}</span>
            )}
          </label>
          <label htmlFor="location">
            Ville *{" "}
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              // required
            />
            {VilleValidationError.length > 0 && (
              <span className="error">{VilleValidationError}</span>
            )}
          </label>{" "}
          <button type="submit">
            {editingIndex !== null ? "Modifier Education" : "Ajouter Eduction"}
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
