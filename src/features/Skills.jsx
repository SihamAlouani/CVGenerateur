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
