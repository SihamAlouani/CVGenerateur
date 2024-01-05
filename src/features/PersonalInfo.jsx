import { useEffect, useState } from "react";

function PersonalInfo() {
  const [informations, setInformations] = useState([]);
  const [formData, setFormData] = useState({
    image:'',
    nom: '',
    titre: '',
    profile: '',
    email:'',
    adresse: '',
    phone: '',
    linkden:''
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
      
      const newInformations = [...informations];
      newInformations[editingIndex] = formData;
      setInformations(newInformations);
      setEditingIndex(null);
    } else {
      
      setInformations([...informations, formData]);
    }
    setFormData({
      image:'',
      nom: '',
      titre: '',
      profile: '',
      email:'',
      adresse: '',
      phone: '',
      linkden:''
    });
  };
  const handleEdit = () => {
    setFormData(informations[editingIndex]);
  };
  const handleDelete = (index) => {
    const newInformations = [...informations];
    newInformations.splice(index, 1);
    setInformations(newInformations);
    setEditingIndex(null);
  };


useEffect(()=>{
 
      
console.log( formData);
}
)


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
    editButton: {
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

    return (
      <>
       <div style={styles.container}>
      <form style={styles.form}>
        
        <h4 style={{ color: '#09295A', textAlign: "center", margin: "0" }}>Information Personnelle</h4>
        <br/>
        <label style={styles.label}>Photo</label>
        <br/>
        <input style={styles.inputphoto} type="file" name="image" accept=".png, .jpg, .jpeg" value={formData.image}
                    onChange={handleChange}required/><br />
        
        <label style={styles.label} >Nom Complet </label>
        <br />
        <input style={styles.input} type="text" name="nom" placeholder="Marc Legrand" value={formData.nom}
                    onChange={handleChange} required/> <br />
       
        <label style={styles.label}>Titre</label> 
        <br />
        <input style={styles.input} type="text" name="titre" placeholder="Commercial" value={formData.titre}
                    onChange={handleChange} required/><br />
       
        <label style={styles.label}>Profil </label>
        <br />
        <textarea style={styles.textarea} name="profile" rows="4" cols="50" placeholder="Description ..." value={formData.profile}
                    onChange={handleChange} required /> 
        <br />
        <label style={styles.label}>Email </label>
        <br />
        <input style={styles.input} type="email" name="email" placeholder="Nom@gmail.com" value={formData.email}
                    onChange={handleChange} required/>
        <br /> 
        <label style={styles.label}>Adresse </label>
        <br />
        <input style={styles.input} type="text" name="adresse" placeholder="washington" value={formData.adresse}
                    onChange={handleChange} required />
        <br /> 
        <label style={styles.label}>Téléphone </label>
        <br />
        <input style={styles.input} type="tel" name="phone" placeholder="+33612345678" value={formData.phone}
                    onChange={handleChange} required />
        <br /> 
        <label style={styles.label}>Linkden </label>
        <br />
        <input style={styles.input} type="text" name="linkden" placeholder="Marc Legrand" value={formData.linkden}
                    onChange={handleChange} required/>
        <br /> <br />
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
          
      </form>
    </div>
     
      </>
          )
  }
  
  export default PersonalInfo