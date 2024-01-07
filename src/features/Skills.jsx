<<<<<<< HEAD
import React, { useState, useEffect } from "react"
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
          Skill:
          <input
            type="text"
            value={formData}
            onChange={handleSkillChange}
            required
          />
        </label>

        <button type="submit">
          {editingIndex !== null
            ? "modifier la compétance"
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
                  Delete
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
=======
import React, { useState } from 'react';
import "../assets/style/skills.css";
import image from '../assets/images/add-a.png';
import deleteIcon from '../assets/images/trash.svg';

function Skills() {
  const [inputValue, setInputValue] = useState('');
  const [addedSkills, newSkillAdd] = useState([]);
  const [savedSkills, setSavedSkills] = useState([]);
  const [confirmationVisible, confirmtionCheck] = useState(false);

  const add = () => {
    if (inputValue.length >= 3) {
      newSkillAdd([...addedSkills, inputValue]);
      setInputValue('');
    }
  }

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }

  const handleDelete = (index) => {
    const updatedSkills = [...addedSkills];
    updatedSkills.splice(index, 1);
    newSkillAdd(updatedSkills);
  }

  const handleSave = () => {
    confirmtionCheck(true);
  }

  const confirm = () => {
    setSavedSkills([...savedSkills, ...addedSkills]);
    newSkillAdd([]);
    confirmtionCheck(false);
  }

  const cancelSave = () => {
    confirmtionCheck(false);
  }

  return (
    <>
      <div>
        <div className='border border-opacity-10 p-3' >
          <div>
            <h6>Compétances</h6>
            <hr className='style1' />
          </div>
          <div className="d-flex">
            <div>
              <label htmlFor="a">Saisir la compétance</label>
              <input
                id='skillsName'
                name='a'
                type="text"
                className="form-control"
                placeholder='Saisir la compétance'
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button
              id='aa'
              onClick={add}
              className={`btn btn-primary h-25 ${inputValue.length < 3 ? 'disabled' : ''}`}
              disabled={inputValue.length < 3}
            >
              <img src={image} alt="Add" />
            </button>
          </div>
          <div id='div' >
            <h6>Compétences ajoutées :</h6>
            <div>
              {addedSkills.map((skill, index) => (
                <div key={index} className='added-skill-container d-flex'>
                  <input
                    id={`output${index}`}
                    name='a'
                    type="text"
                    className='form-control'
                    value={skill}
                  />
                  <button
                    className='delete-btn'
                    onClick={() => handleDelete(index)}
                  >
                    <img src={deleteIcon} height={25} width={25} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='btnSave'>
            <button onClick={handleSave} className='btn btn-primary'>Save</button>
          </div>
          {confirmationVisible && (
            <div className='confirmation'>
              <p>Do you want to save these skills?</p>
              <button onClick={confirm} className='btn btn-primary'>Yes</button>
              <button onClick={cancelSave} className='btn btn-secondary'>No</button>
            </div>
          )}
          <div>
            <h6>Saved Compétences :</h6>
            {savedSkills.map((skill, index) => (
              <div key={index} className='saved-skill-container'>
                <input
                  id={`savedOutput${index}`}
                  name='a'
                  type="text"
                  className='form-control'
                  value={skill}
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
>>>>>>> 928650baf3175cddcdfd40187b4c60b45ad8d3a4
