import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "../assets/style/preview.css"
import image from "../assets/Images/cv-removebg-preview.png"
import { PDFDownloadLink,Page,View,Document } from '@react-pdf/renderer';
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

  //this for Pdf 
  const Doc = () => {
    return (
      <PDFDownloadLink document={
        <Document>
          <Page size="A4">
            <View>{print.current}</View>
          </Page>
        </Document>
      } fileName="cv.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    );
  };
  
  const print = useRef();
  return (
    <div className={`preview-left-side `}>
      <div ref={print} className="preview-container">
        <section  className={`left-side ${color}`}>
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
      <div>
        {print.current && (
          <>
            <ReactToPrint
              trigger={() => <button className=""> Imprimer Le Cv</button>}
              content={() => print.current}
            />
            <button onClick={()=>Doc()}>View PDF</button>
          </>
        )}
      </div>
    </div>

  )
}
