// LanguageSection.jsx
import React, { useState } from 'react';

const LanguageSection = () => {
  const [languages, setLanguages] = useState([]);
  const [formData, setFormData] = useState({
    langue: '',
    level: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleLanguageChange = (e) => {
    const {name , value}= e.target;
    setFormData({...formData,
         [name]:value});
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingIndex !== null){
      const newLanguage = [...languages];
    newLanguage[editingIndex] = formData;
    setLanguages(newLanguage);
    setEditingIndex(null);
  }
  else{
    setLanguages([...languages,formData]);
  }
  setFormData({
    langue: '',
    level: ''
  });};


  const handleEdite = (index) => {
    setFormData(languages[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newLanguages = [...languages];
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>Languages</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Language:
          </label>
          <input type="text" name='langue' value={formData.langue} onChange={handleLanguageChange} required />
        
        <label>
          Level:
          </label>
    <select name="level" onChange={handleLanguageChange} id="" value={formData.level} required>
        <option ></option>
        <option >Langue maternnelle</option>
        <option >Basic</option>
        <option >Intermidiaire</option>
        <option >Avancé </option>
        
    </select>
      
        <button type="submit">{editingIndex !== null ? 'Modifier la langue':'Ajouter une langue'}</button>
      </form>
      <div>
        {languages.map((lang, index) => (
          <div key={index}>
            {lang.langue} - {lang.level}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdite(index)}>Modifier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
