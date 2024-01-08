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
          Nom de chef *
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="tel">
        Téléphone de chef*
          <input
            type="tel"
            onChange={handleChange}
            value={formData.tele}
            name="tele"
            id="tel"
            placeholder="+20 955......"
            required
          />
        </label>

        <label htmlFor="Email">
          Email de chef *
          <input
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="Email"
            placeholder="exemple@gmail.com"
            required
          />
        </label>

        <label htmlFor="entreprise">
          Nom d'entreprise *
          <input
            type="text"
            onChange={handleChange}
            id="entreprise"
            value={formData.entreprise}
            name="entreprise"
            required
          />
        </label>

        <label htmlFor="position">
          Poste de chef *
          <input
            type="text"
            onChange={handleChange}
            name="position"
            value={formData.position}
            id="position"
            placeholder="Ex: Chef de projet "
            required
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
              <p>Poste de chef : {position}</p>
              <p>Email de chef : {email}</p>
              <p>Téléphone: {tele}</p>
              <div className="actions">
                <button
                  className="action update action-button"
                  onClick={() => handleEdit(index)}
                >
                  Modifier
                </button>
                <button
                  className="action delete action-button"
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
