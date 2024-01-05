import React, { useState } from 'react';
import CollapseSection from "../components/CollapseSection"

function References() {
  const [references, setReferences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  tele: "",
  email: "",
  entreprise: "",
  position: "",
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  if (editingIndex !== null) {
    const newReferences = [...references];
    newReferences[editingIndex] = formData;
    setReferences(newReferences);
    setEditingIndex(null);
    console.log(references);
  } else {
    setReferences([...references, formData]);
    console.log(references);
  }
  e.preventDefault();

  setFormData({
    name: "",
    tele: "",
    email: "",
    entreprise: "",
    position: "",
  });
};

const handleEdit = (index) => {
  
  setFormData(references[index]);
  setEditingIndex(index);
};

const handleDelete = (index) => {
  const newReferences = [...references];
  newReferences.splice(index, 1);
  setReferences(newReferences);
  setEditingIndex(null);
};

  return (
    <>
    <form className='form'  onSubmit={handleSubmit}>
      
        <label htmlFor="name">nom</label>
        <input type="text" onChange={handleChange}  value={formData.name} name="name" id="name"   placeholder="nom" />
      
      
        <label htmlFor="tel">Telephone</label>
        <input type="tel" onChange={handleChange}  value={formData.tele} name="tele" id="tel"   placeholder="Telephone" />
      
      
        <label htmlFor="Email">Email</label>
        <input type="email" onChange={handleChange}  value={formData.email}  name="email" id="Email"   placeholder="Email" />
      
        <label htmlFor="entreprise">Entreprise</label>
        <input type="text" onChange={handleChange}  id="entreprise" value={formData.entreprise}   name="entreprise"  placeholder="Entreprise"/>
      
        <label htmlFor="position">Position</label>
        <input type="text" onChange={handleChange} name="position" value={formData.position} id="position"   placeholder="Position" />
      
      <input type="submit" className='btn1' value={editingIndex !== null ? 'Modifier Experience' : 'Ajouter Experience'}/>
      </form>
        <div>
            {references.map(({name,tele,email,entreprise,position},index)=>(
               <CollapseSection index={index}  title={name}>
                <p>{entreprise}</p>
                <p>{position}</p>
                <p>{email}</p>
                <p>{tele}</p>
                <button onClick={() => handleEdit(index)}>Modifier</button>
              <button onClick={() => handleDelete(index)}>Supprimer</button>
               </CollapseSection>
            ))}
        </div>

    </>
  );
}

export default References;
