import React, { useState } from 'react';


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
  e.preventDefault();
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
    <form  onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">nom</label>
        <input type="text" onChange={handleChange}  value={formData.name} name="name" id="name" className="" placeholder="nom" />
      </p>
      <p>
        <label htmlFor="tel">Telephone</label>
        <input type="tel" onChange={handleChange}  value={formData.tele} name="tele" id="tel" className="" placeholder="Telephone" />
      </p>
      <p>
        <label htmlFor="Email">Email</label>
        <input type="email" onChange={handleChange}  value={formData.email}  name="email" id="Email" className="" placeholder="Email" />
      </p>
      <p>
        <label htmlFor="entreprise">Entreprise</label>
        <input type="text" onChange={handleChange}  id="entreprise" value={formData.entreprise} className="" name="entreprise"  placeholder="Entreprise"/>
      </p>
      <p>
        <label htmlFor="position">Position</label>
        <input type="text" onChange={handleChange} name="position" value={formData.position} id="position" className="" placeholder="Position" />
      </p>
      <input type="submit" className='btn1' value={editingIndex !== null ? 'Modifier Experience' : 'Ajouter Experience'}/>
      </form>
    </>
  );
}

export default References;
