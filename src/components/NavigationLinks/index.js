import { useLocation } from "react-router-dom";
import ScrollContext from "../../utils/ScrollContext";
import EachNavigationLink from "../EachNavigationLink";
import "./style.css";
import { useContext, useEffect } from "react";

const NavigationLinks = () => {
  const { activeId, navligationLinksList, setActiveId } =
    useContext(ScrollContext);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "") {
      setActiveId("/");
    } else {
      setActiveId(location.hash.slice(1));
    }
  }, [location.hash]);

  return (
    <ul
      className={`navigation-links flex md:flex flex-col md:flex-row p-0 md:space-x-10 space-y-3 md:space-y-0 scroll-smooth`}
    >
      <li></li>
      {navligationLinksList.map((eachItem) => (
        <EachNavigationLink
          naviagtionDetails={eachItem}
          key={eachItem.id}
          isActive={eachItem.value === activeId}
        />
      ))}
    </ul>
  );
};
export default NavigationLinks;
