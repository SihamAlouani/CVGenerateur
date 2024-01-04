function PersonalInf() {
    const styles = {
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh', // 100% de la hauteur de la vue
        },
        form: {
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          width: '600px',
        },
      };

    return (
      <>
       <div style={styles.container}>
      <form style={styles.form}>
        {/* Ajoutez ici les éléments de votre formulaire */}
        <h5 style={{ color: '#09295A', textAlign: "center", margin: "0" }}>Information Personnel</h5>
        <br/>
        <label>
          Image :
          <input type="file" name="image"  />
        </label>
        <br />
        <label>
          Nom :
          <input type="text" name="nom" />
        </label>
        <br />
        <label>
          Titre :
          <input type="text" name="titre" />
        </label>
        <br />
        <label>
          Profil :
          <textarea name="profile" rows="4" cols="50" />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Adresse :
          <input type="text" name="adresse" />
        </label>
        <br />
        <label>
          Numéro de téléphone :
          <input type="tel" name="phone" />
        </label>
        <br />
        <label>
          Linkden :
          <input type="text" name="linkden" />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  
      </>
          )
  }
  
  export default PersonalInf
  