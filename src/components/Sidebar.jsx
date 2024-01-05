import {
  faBolt,
  faLanguage,
  faPerson,
  faSuitcase,
  faThumbsUp,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons"

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
        <div>Logo Here</div>
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