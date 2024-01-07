import "../assets/style/preview.css"
import image from "../assets/Images/cv-removebg-preview.png"
import { useEffect, useState } from "react"
import ColorPallet from "../components/ColorPallet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Preview({
  // informations,
  references,
  languages,
  image,
  informations,
}) {
  const [color, setColor] = useState("dark")

  return (
    <div className={`preview-left-side `}>
      <div className="preview-container">
        <section className={`left-side ${color}`}>
          <div className="image">
            <img src={image.previewUrl} alt="" />
          </div>
          <h3 className="preview-name">{informations?.nom}</h3>

          {informations.email != "" && (
            <span className="personal-info-wrapper">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{informations.email}</span>
            </span>
          )}
          {informations.phone != "" && (
            <span className="personal-info-wrapper">
              <FontAwesomeIcon icon={faPhone} />
              <span>{informations.phone}</span>
            </span>
          )}
          {informations.adresse != "" && (
            <span className="personal-info-wrapper">
              <FontAwesomeIcon icon={faHome} />
              <span>{informations.adresse}</span>
            </span>
          )}
          {informations.linkden != "" && (
            <span className="personal-info-wrapper">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>{informations.linkden}</span>
            </span>
          )}

          {/*  Langues*/}

          {languages.length > 0 && (
            <div>
              <h4>Langues</h4>
              <ul>
                {languages.map((lang) => {
                  return (
                    <li>
                      {lang.langue} ({lang.level})
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </section>
        <section className="right-side">
          <div className="personal-info-wrapper"></div>
          {informations.titre != "" && (
            <h1 className="titre">{informations.titre}</h1>
          )}
          {"" != informations.profile && (
            <div className="profile">
              <h4>Profile</h4>
              <p>{informations.profile}</p>
            </div>
          )}
        </section>
      </div>
      <ColorPallet setColor={setColor} />
    </div>
  )
}
