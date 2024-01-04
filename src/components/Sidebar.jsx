import { faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <section className="logo">
        <div>Logo Here</div>
      </section>

      <section className="navigation-bar">
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
        <Link to="/Experiences" className="navigation-item">
          <span className="navigation-item-icon">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          </span>
          <span className="nagivation-item-name">Experiences</span>
        </Link>
      </section>
    </nav>
  )
}
