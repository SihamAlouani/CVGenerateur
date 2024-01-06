import "../assets/style/preview.css"
import image from "../assets/Images/cv-removebg-preview.png"
import { useEffect, useState } from "react"
import ColorPallet from "../components/ColorPallet"
export default function Preview({
  informations,
  references,
  languages,
  image,
}) {
  const [color, setColor] = useState("dark")
  useEffect(() => {
    console.log(informations)
  })
  return (
    <div className={`preview-left-side `}>
      <div className="preview-container">
        <section className={`left-side ${color}`}>
          <div className="image">
            <img src={image.previewUrl} alt="" />
          </div>
          {references.length > 0 && (
            <div>
              <h4>References</h4>
              <ul>
                {references.map((ref) => {
                  return <li>{ref.name}</li>
                })}
              </ul>
            </div>
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
        <section className="right-side"></section>
      </div>
      <ColorPallet setColor={setColor} />
    </div>
  )
}
