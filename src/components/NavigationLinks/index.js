import { v4 as uuidV4 } from "uuid";
import EachNavigationLink from "../EachNavigationLink";
import "./style.css";
import { useState } from "react";

const navligationLinksList = [
  {
    id: "Home",
    value: "home",
  },
  {
    id: "Works",
    value: "projects",
  },
  {
    id: "About-Me",
    value: "about",
  },
  {
    id: "Contact",
    value: "contact",
  },
];

const NavigationLinks = (props) => {
  const [activeId, setActiveId] = useState(navligationLinksList[0].id);

  const onClickNavigationLink = (id) => {
    setActiveId(id);
  };
  return (
    <ul className="navigation-links flex md:flex flex-col md:flex-row p-0 md:space-x-10 space-y-4 md:space-y-0">
      <li></li>
      {navligationLinksList.map((eachItem) => (
        <EachNavigationLink
          naviagtionDetails={eachItem}
          key={uuidV4()}
          onClickNavigationLink={onClickNavigationLink}
          isActive={eachItem.id === activeId}
        />
      ))}
      {/* <li
        className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${props.className}`}
      >
        <Link to="#home">Home</Link>
      </li>

      <li
        className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${props.className}`}
      >
        <Link to="#projects">Works</Link>
      </li>

      <li
        className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${props.className}`}
      >
        <Link to="#about">About-Me</Link>
      </li>

      <li
        className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${props.className}`}
      >
        <Link to="#contact">Contact</Link>
      </li> */}
    </ul>
  );
};
export default NavigationLinks;
