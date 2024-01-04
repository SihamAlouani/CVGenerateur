import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function SideBarItem({ icon, title, setPage }) {
  return (
    <div onClick={() => setPage(title)} className="navigation-item">
      <span className="navigation-item-icon">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </span>
      <span className="navigation-item-name">{title}</span>
    </div>
  )
}
