import React from "react";

function References(props) {
  return (
    <>
      <p>
        <label htmlFor="name">nom</label>
        <input type="text" id="name" className="" placeholder="nom" />
      </p>
      <p>
        <label htmlFor="tel">Telephone</label>
        <input type="tel" id="tel" className="" placeholder="Telephone" />
      </p>
      <p>
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" className="" placeholder="Email" />
      </p>
      <p>
        <label htmlFor="entreprise">Entreprise</label>
        <input type="text" id="entreprise" className="" placeholder="Entreprise" />
      </p>
      <p>
        <label htmlFor="position">Position</label>
        <input type="text" id="position" className="" placeholder="Position" />
      </p>
    </>
  );
}

export default References;
