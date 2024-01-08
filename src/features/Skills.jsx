import { useState, useEffect } from "react"
import "../assets/style/skills.css"
import CollapseSection from "../components/CollapseSection"

// import image from "../assets/images/add-a.png"
// import deleteIcon from "../assets/images/trash.svg"

function Skills({ skills, setSkills }) {
  //   const [inputValue, setInputValue] = useState("")
  //   const [addedSkills, newSkillAdd] = useState([])
  //   const [savedSkills, setSavedSkills] = useState([])
  //   const [confirmationVisible, confirmtionCheck] = useState(false)

  //   const add = () => {
  //     if (inputValue.length >= 3) {
  //       const newSkill = { id: Date.now(), skill: inputValue }
  //       newSkillAdd([...addedSkills, newSkill])
  //       setInputValue("")
  //     }
  //   }

  //   const update = (id) => {

  //   }

  //   const handleInputChange = (event) => {
  //     const value = event.target.value
  //     setInputValue(value)
  //   }

  //   const handleDelete = (index) => {
  //     const updatedSkills = [...addedSkills]
  //     updatedSkills.splice(index, 1)
  //     newSkillAdd(updatedSkills)
  //   }

  //   const handleSave = () => {
  //     confirmtionCheck(true)
  //   }

  //   const confirm = () => {
  //     setSavedSkills([...savedSkills, ...addedSkills])
  //     newSkillAdd([])
  //     confirmtionCheck(false)
  //   }

  //   const cancelSave = () => {
  //     confirmtionCheck(false)
  //   }

  // ----------------------------------------------

  const [formData, setFormData] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)

  const handleSkillChange = (e) => {
    setFormData(e.target.value)
  }

  useEffect(() => {
    console.log(formData)
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingIndex !== null) {
      const newSkill = [...skills]

      newSkill[editingIndex] = formData

      setSkills(newSkill)
      setEditingIndex(null)
    } else {
      setSkills([...skills, formData])
    }
    setFormData("")
  }

  const handleEdite = (index) => {
    setFormData(skills[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    setSkills(newSkills)
    setEditingIndex(null)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nom de compétence * 
          <input
            type="text"
            value={formData}
            onChange={handleSkillChange}
            required
          />
        </label>

        <button type="submit">
          {editingIndex !== null
            ? "Modifier la compétance"
            : "Ajouter une compétance"}
        </button>
      </form>
      <div className="display">
        {skills.map((skill, index) => (
          <CollapseSection title={skill}>
            <div key={index} className="content">
              <div> {skill} </div>
              <div className="actions">
                <button
                  className="action delete "
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </button>
                <button
                  className="action update "
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

export default Skills


