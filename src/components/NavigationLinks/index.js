// import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const navligationLinksList = [
  {
    id: "Home",
    value: "Home",
  },
  {
    id: "Works",
    value: "Works",
  },
  {
    id: "AboutMe",
    value: "About-Me",
  },
  {
    id: "Contact",
    value: "Contact",
  },
];

const NavigationLinks = () => {
  return (
    <ul className="navigation-links flex md:flex flex-col md:flex-row p-0 md:space-x-10 space-y-4 md:space-y-0">
      <li></li>
      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <span className="text-blue-500">#</span>Home
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <span className="text-blue-500">#</span>Works
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <span className="text-blue-500">#</span>About-Me
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <span className="text-blue-500">#</span>Contact
      </li>
    </ul>
  );
};
export default NavigationLinks;
