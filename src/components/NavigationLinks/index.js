import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

// const navligationLinksList = [
//   {
//     id: "Home",
//     value: "Home",
//   },
//   {
//     id: "Works",
//     value: "Works",
//   },
//   {
//     id: "AboutMe",
//     value: "About-Me",
//   },
//   {
//     id: "Contact",
//     value: "Contact",
//   },
// ];

const NavigationLinks = (props) => {
  return (
    <ul className="navigation-links flex md:flex flex-col md:flex-row p-0 md:space-x-10 space-y-4 md:space-y-0">
      <li></li>
      <li
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
      </li>
    </ul>
  );
};
export default NavigationLinks;
