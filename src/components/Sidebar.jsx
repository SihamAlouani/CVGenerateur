import { faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({ setPage }) {
  return (
    <nav className="sidebar">
      <section className="logo">
        <div>Logo Here</div>
      </section>

      <section className="navigation-bar">
        <div onClick={() => setPage("Experiences")} className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div onClick={() => setPage("Education")} className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
        <div className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </div>
      </section>
    </nav>
  )
}
