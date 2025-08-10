import { NavLink } from "react-router-dom"
import logoImage from "../../assets/dr-lawyer-logo.png"
import IconSetting from "../../assets/iconsetting.png"
import IconMycases from "../../assets/icon-mycases.png"
import Iconmessages from "../../assets/icon-messages.png"
import Icondashboard from "../../assets/icon-dashboard.png"
import Iconbrowsecases from "../../assets/icon-browsecases.png"
import UpgradeCard from "./upgradecard"

interface SidebarLinkProps {
  link: string;
  img?: string;
  text: string;
}
const Sidebar = () => {

  const SidebarList = [
    {
      id: 1,
      image: Icondashboard,
      text: "Dashboard",
      Link: "/dashboard"
    },
    {
      id: 2,
      image: Iconbrowsecases,
      text: "Browse Cases",
      Link: "/browsecases"
    },
    {
      id: 3,
      image: IconMycases,
      text: "My Cases",
      Link: "/mycases"
    },
    {
      id: 4,
      image: Iconmessages,
      text: "Messages",
      Link: "/messages"
    },
    {
      id: 5,
      image: IconSetting,
      text: "Settings",
      Link: "/"
    }
  ]

  return (
    <aside className="sidebar bg-white h-screen shadow-md fixed left-0 top-0 p-6">
      <>
      <div className="mb-10 logoImage">
        <img src={logoImage} />
      </div>
      <nav className="sidebar__list">
        {SidebarList.map((item) =>
          <SidebarLink link={item.Link} img={item.image} text={item.text} key={item.id} />
        )}
      </nav>
        </>
      <UpgradeCard/>
    </aside>
  )
}

export default Sidebar

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, img, text }) => {
  return (
    <NavLink
      to={link}
      className="sidebar__link flex items-center gap-2 text-gray-700 hover:text-primary"
    >
      <img src={img} />
      <span>
        {text}
      </span>
    </NavLink>
  );
};