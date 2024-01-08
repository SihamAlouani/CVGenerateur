import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"

function References({ references, setReferences }) {
  const [editingIndex, setEditingIndex] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    tele: "",
    email: "",
    entreprise: "",
    position: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    if (editingIndex !== null) {
      const newReferences = [...references]
      newReferences[editingIndex] = formData
      setReferences(newReferences)
      setEditingIndex(null)
      console.log(references)
    } else {
      setReferences([...references, formData])
      console.log(references)
    }
    e.preventDefault()

    setFormData({
      name: "",
      tele: "",
      email: "",
      entreprise: "",
      position: "",
    })
  }

  const handleEdit = (index) => {
    setFormData(references[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newReferences = [...references]
    newReferences.splice(index, 1)
    setReferences(newReferences)
    setEditingIndex(null)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          nom
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
            placeholder="nom"
          />
        </label>

        <label htmlFor="tel">
          Telephone
          <input
            type="tel"
            onChange={handleChange}
            value={formData.tele}
            name="tele"
            id="tel"
            placeholder="Telephone"
          />
        </label>

        <label htmlFor="Email">
          Email
          <input
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="Email"
            placeholder="Email"
          />
        </label>

        <label htmlFor="entreprise">
          Entreprise
          <input
            type="text"
            onChange={handleChange}
            id="entreprise"
            value={formData.entreprise}
            name="entreprise"
            placeholder="Entreprise"
          />
        </label>

        <label htmlFor="position">
          Position*
          <input
            type="text"
            onChange={handleChange}
            name="position"
            value={formData.position}
            id="position"
            placeholder="Position"
          />
        </label>

        <button>
          {editingIndex !== null ? "Modifier Réference" : "Ajouter Réference"}
        </button>
      </form>
      <div className="display">
        {references.map(
          ({ name, tele, email, entreprise, position }, index) => (
            <CollapseSection index={index} title={name}>
              <p>Entreprise : {entreprise}</p>
              <p>Poste : {position}</p>
              <p>Email: {email}</p>
              <p>Telephone: {tele}</p>
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
          )
        )}
      </div>
    </>
  )
}

export default References
