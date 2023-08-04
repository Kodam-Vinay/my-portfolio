import { createContext } from "react";

const NavigationContext = createContext({
  hamburgerClicked: false,
  setHamburgerClicked: () => {},
});

export default NavigationContext;
