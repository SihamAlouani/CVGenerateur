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
              <p>{entreprise}</p>
              <p>{position}</p>
              <p>{email}</p>
              <p>{tele}</p>
              <button onClick={() => handleEdit(index)}>Modifier</button>
              <button onClick={() => handleDelete(index)}>Supprimer</button>
            </CollapseSection>
          )
        )}
      </div>
    </>
  )
}

export default References
