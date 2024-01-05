import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import "../assets/style/collapsesection.css"
export default function CollapseSection({ title, children }) {
  const [isVisible, setIsVisible] = useState(true)
  function toggleVisibility() {
    setIsVisible(!isVisible)
  }
  return (
    <div className="collapse-section">
      <div className="preview">
        <span className="preview-title">{title}</span>
        <button onClick={toggleVisibility}>
          {isVisible ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {isVisible && <div className="content">{children}</div>}
    </div>
  )
}
