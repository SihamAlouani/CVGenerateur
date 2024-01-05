import React, { useState } from 'react';

function Education() {
  const [personalInf, setPersonalInf] = useState([]);
  const [formData, setFormData] = useState({
    diplome: '',
    date_de_commencement: '',
    date_de_fin: '',
    ecole: '',
    location: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const newPersonalInf = [...personalInf];
      newPersonalInf[editingIndex] = formData;
      setPersonalInf(newPersonalInf);
      setEditingIndex(null);
    } else {
      setPersonalInf([...personalInf, formData]);
    }

    setFormData({
      diplome: '',
      date_de_commencement: '',
      date_de_fin: '',
      ecole: '',
      location: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(personalInf[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newPersonalInf = [...personalInf];
    newPersonalInf.splice(index, 1);
    setPersonalInf(newPersonalInf);
    setEditingIndex(null);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '500px',
      position: 'relative',
    },
    label: {
      textAlign: 'left',
      fontSize: '10px',
    },
    input: {
      width: '200px',
      padding: '15px',
      borderRadius: '4px',
      marginTop: '6px',
      border: '1px solid #55718F',
      color: '#55718F',
    },
    dateContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    locationContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    submitButton: {
      backgroundColor: '#cf3e3e',
      color: '#FFFFFF',
      padding: '10px 15px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '10px',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h5 style={{ color: '#09295A', textAlign: 'center', margin: '0' }}>Education</h5>
          <label style={styles.label} htmlFor='diplome'>Diplome </label>
          <br />
          <input
            style={styles.input}
            type='text'
            name='diplome'
            id='diplome'
            value={formData.diplome}
            onChange={handleChange}
            placeholder="Licence en Ingénierie "
            required
          />
          <br />
          <label style={styles.label} htmlFor="date_de_commencement">Date de commencement</label>
          <br />
          <input
            style={styles.input}
            type="date"
            name='date_de_commencement'
            value={formData.date_de_commencement}
            onChange={handleChange}
            required
          />
          <br />
          <label style={styles.label} htmlFor="date_de_fin">Date de fin </label>
          <br />
          <input
            style={styles.input}
            type="date"
            name='date_de_fin'
            value={formData.date_de_fin}
            onChange={handleChange}
            required
          />
          <br />
          <label style={styles.label} htmlFor='ecole'>Ecole </label> <br />
          <input
            style={styles.input}
            type='text'
            name='ecole'
            id='ecole'
            value={formData.ecole}
            onChange={handleChange}
            placeholder="Université de  "
            required
          />
          <br />
          <label style={styles.label} htmlFor='location'>Location </label> <br />
          <input
            style={styles.input}
            type='text'
            name='location'
            id='location'
            value={formData.location}
            onChange={handleChange}
            placeholder="Paris "
            required
          />
          <br />

          <button type="submit" style={styles.submitButton}>
            {editingIndex !== null ? 'Modifier information' : 'Ajouter information'}
          </button>
        </form>

        <ul>
          {personalInf.map((personalInf, index) => (
            <li key={index}>
              <p>{`Diplome: ${personalInf.diplome}, Date de commencement: ${personalInf.date_de_commencement}, Date de fin: ${personalInf.date_de_fin}, Ecole: ${personalInf.ecole}, Location: ${personalInf.location}`}</p>
              <button onClick={() => handleEdit(index)}>Modifier</button>
              <button onClick={() => handleDelete(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Education;