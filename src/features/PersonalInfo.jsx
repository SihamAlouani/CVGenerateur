function PersonalInfo() {
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
          width: '600px',
        },
        label: { textAlign: 'left' , 
        fontSize: '10px',
        },
        input: { width: '200px', 
        padding: '15px', 
        borderRadius: '4px', 
        marginTop: '6px',
        border: '1px solid #55718F', 
       
        },
        textarea: {
        borderRadius: '4px', 
        marginTop: '6px',
        border: '1px solid #55718F',
        },
        inputphoto:{
        borderRadius: '4px',     
        color: '#09295A',
        backgroundcolor:'#09295A',
        },
    
        submitButton: {
          backgroundColor: '#cf3e3e', // Couleur par défaut
          color: '#FFFFFF',
          padding: '10px 15px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        },
        submitButtonHover: {
          backgroundColor: '#cf1b1b', // Couleur lorsqu'on survole le bouton
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
        <input style={styles.inputphoto} type="file" name="image" accept=".png, .jpg, .jpeg" /><br />
        
        <label style={styles.label} >Nom</label>
        <br />
        <input style={styles.input} type="text" name="nom" placeholder="Marc Legrand" /> <br />
       
        <label style={styles.label}>Titre</label> 
        <br />
        <input style={styles.input} type="text" name="titre" placeholder="Commercial"/><br />
       
        <label style={styles.label}>Profil </label>
        <br />
        <textarea style={styles.textarea} name="profile" rows="4" cols="50" placeholder="Description ..." /> 
        <br />
        <label style={styles.label}>Email </label>
        <br />
        <input style={styles.input} type="email" name="email" placeholder="Nom@gmail.com" />
        <br /> 
        <label style={styles.label}>Adresse </label>
        <br />
        <input style={styles.input} type="text" name="adresse" placeholder="washington"  />
        <br /> 
        <label style={styles.label}>Téléphone </label>
        <br />
        <input style={styles.input} type="tel" name="phone" placeholder="+33612345678" />
        <br /> 
        <label style={styles.label}>Linkden </label>
        <br />
        <input style={styles.input} type="text" name="linkden" placeholder="Marc Legrand"/>
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