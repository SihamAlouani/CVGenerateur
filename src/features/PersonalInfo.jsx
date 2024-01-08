import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

function PersonalInfo({
  informations,
  formData,
  setFormData,
  image,
  setImage,
  setInformations,
}) {
  const [editingIndex, setEditingIndex] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const previewImageUrl = URL.createObjectURL(file)
      setImage({
        file: file,
        previewUrl: previewImageUrl,
      })
      console.log(image)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingIndex !== null) {
      const newInformations = [...informations]
      newInformations[editingIndex] = formData
      setInformations(newInformations)
      setEditingIndex(null)
    } else {
      setInformations(formData)
    }
    // setFormData({
    //   image: "",
    //   nom: "",
    //   titre: "",
    //   profile: "",
    //   email: "",
    //   adresse: "",
    //   phone: "",
    //   linkden: "",
    // })
  }

  useEffect(() => {
    console.log("azzaeaz", informations)
  })

  return (
    <>
      <div>
        <form className="form">
          <label HtmlFor="image" className="image-label">
            {" "}
            <FontAwesomeIcon icon={faUpload} className="svg" />
            <span>Télecharger une image</span>
            <input
              type="file"
              hidden
              name="image"
              accept=".png, .jpg, .jpeg"
              value={formData.image}
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Nom Complet
            <input
              type="text"
              name="nom"
              placeholder="Marc Legrand"
              value={formData.nom}
              onChange={handleChange}
              required
            />{" "}
          </label>
          <label>
            Titre
            <input
              type="text"
              name="titre"
              placeholder="Commercial"
              value={formData.titre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Profil
            <textarea
              name="profile"
              rows="4"
              cols="50"
              placeholder="Description ..."
              value={formData.profile}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Nom@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Adresse
            <input
              type="text"
              name="adresse"
              placeholder="washington"
              value={formData.adresse}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Téléphone
            <input
              type="tel"
              name="phone"
              placeholder="+33612345678"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Linkden
            <input
              type="text"
              name="linkden"
              placeholder="Marc Legrand"
              value={formData.linkden}
              onChange={handleChange}
              required
            />
          </label>
        </form>
      </div>
    </>
  )
}

export default PersonalInfo
