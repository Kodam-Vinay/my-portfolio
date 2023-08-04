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

const NavigationLinks = () => {
  return (
    <ul className="navigation-links flex md:flex flex-col md:flex-row p-0 md:space-x-10 space-y-4 md:space-y-0">
      <li></li>
      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <Link to="#home">
          <span className="text-blue-500">#</span>Home
        </Link>
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <Link to="#projects">
          <span className="text-blue-500">#</span>Works
        </Link>
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <Link to="#about">
          <span className="text-blue-500">#</span>About-Me
        </Link>
      </li>

      <li className="text-[#ABB2BF] font-fira hover:text-white cursor-pointer add_zoom">
        <Link to="#contact">
          <span className="text-blue-500">#</span>Contact
        </Link>
      </li>
    </ul>
  );
};
export default NavigationLinks;
