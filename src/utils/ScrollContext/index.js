import { createContext } from "react";

const ScrollContext = createContext({
  activeId: "home",
  setActiveId: () => {},
  navligationLinksList: [],
});
export default ScrollContext;
