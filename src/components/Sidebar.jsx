import {
  faBolt,
  faLanguage,
  faPerson,
  faSuitcase,
  faThumbsUp,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons"
import image from "../assets/Images/cv-removebg-preview.png"

import SideBarItem from "./SideBarItem"

export default function Sidebar({ setPage, page }) {
  const sidebarItems = [
    {
      title: "Information Personelle",
      icon: faPerson,
    },
    {
      title: "Education",
      icon: faUserGraduate,
    },
    { title: "Experiences", icon: faSuitcase },
    { title: "Compétances", icon: faBolt },
    { title: "Langues", icon: faLanguage },
    { title: "Références", icon: faThumbsUp },
  ]
  return (
    <nav className="sidebar">
      <section className="logo">
        <img src={image} alt="" className="logo-image" />
      </section>

      <section className="navigation-bar">
        {sidebarItems.map(({ title, icon }) => {
          return (
            <SideBarItem
              page={page}
              title={title}
              icon={icon}
              setPage={setPage}
            />
          )
        })}
      </section>
    </nav>
  )
}
