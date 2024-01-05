import React, { useState } from 'react';

function Education() {
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
    submitButtonHover: {
      backgroundColor: '#cf1b1b',
    },
    addButton: {
      color: '#55718F',
      padding: '10px 15px',
      borderRadius: '4px',
      border: '#55718F',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '20px',
      right: '20px',
    },
  };

  const [educationData, setEducationData] = useState([
    { diplome: '', date_de_commencement: '', date_de_fin: '', ecole: '', location: '' },
  ]);

  const handleChange = (index, e) => {
    const updatedData = [...educationData];
    updatedData[index][e.target.name] = e.target.value;
    setEducationData(updatedData);
  };

  const handleAddEducation = () => {
    setEducationData([...educationData, { diplome: '', date_de_commencement: '', date_de_fin: '', ecole: '', location: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Education Data:', educationData);
  };

  return (
    <>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h5 style={{ color: '#09295A', textAlign: 'center', margin: '0' }}>Education</h5>
          {educationData.map((education, index) => (
            <div key={index}>
              <label style={styles.label}>Diplome </label>
              <br />
              <input
                style={styles.input}
                type="text"
                name="diplome"
                value={education.diplome}
                placeholder="Licence en Ingénierie"
                onChange={(e) => handleChange(index, e)} required
              />
              <br />
              <div style={styles.dateContainer}>
                <div>
                  <label style={styles.label}>Date de commencement </label>
                  <br />
                  <input
                    style={styles.input}
                    type="date"
                    name="date_de_commencement"
                    value={education.date_de_commencement}
                    onChange={(e) => handleChange(index, e)} required
                  />
                </div>
                <div>
                  <label style={styles.label}>Date de fin </label>
                  <br />
                  <input
                    style={styles.input}
                    type="date"
                    name="date_de_fin"
                    value={education.date_de_fin}
                    onChange={(e) => handleChange(index, e)} required
                  />
                </div>
              </div>
              <br />
              <div style={styles.locationContainer}>
                <div>
                  <label style={styles.label}>Ecole </label>
                  <br />
                  <input
                    style={styles.input}
                    type="text"
                    name="ecole"
                    value={education.ecole}
                    placeholder="Université de ..."
                    onChange={(e) => handleChange(index, e)} required
                  />
                </div>
                <div>
                  <label style={styles.label}>Location </label>
                  <br />
                  <input
                    style={styles.input}
                    type="text"
                    name="location"
                    value={education.location}
                    placeholder="Paris"
                    onChange={(e) => handleChange(index, e)} required
                  />
                </div>
              </div>
              <br />
            </div>
          ))}
          <button
            style={styles.submitButton}
            type="submit"
            onMouseEnter={() =>
              (document.getElementById('submitButton').style.backgroundColor =
                '#cf1b1b')
            }
            onMouseLeave={() =>
              (document.getElementById('submitButton').style.backgroundColor =
                '#cf3e3e')
            }
            id="submitButton"
          >
            Suivant
          </button>
          <button style={styles.addButton} type="button" id="addButton" onClick={handleAddEducation}>
            + Ajouter une autre formation
          </button>
        </form>
      </div>
    </>
  );
}

export default Education;
