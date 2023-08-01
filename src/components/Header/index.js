import { useState } from "react";

import HomeLogo from "../svgs/Homelogo";
import HamburgerIcon from "../svgs/HamburgerIcon";
import CloseIcon from "../svgs/CloseIcon";
import NavigationLinks from "../NavigationLinks";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  return (
    <nav className="header-container flex items-center justify-between px-4 py-2 md:px-[80px] lg:px-[170px] md:py-10 sticky top-0 h-16">
      <div className="header-div-container flex items-center space-x-2">
        <HomeLogo />
        <p className="font-bold text-white font-fira">Vinay</p>
      </div>
      <button
        className="cursor-pointer md:hidden h-8"
        onClick={() => setHamburgerClicked}
      >
        {hamburgerClicked ? (
          <CloseIcon className="hover:h-8 hover:w-10 cursor-pointer" />
        ) : (
          <HamburgerIcon className="hover:h-8 hover:w-10 cursor-pointer" />
        )}
      </button>
      <div className="hidden md:block">
        <NavigationLinks />
      </div>
    </nav>
  );
};
export default Header;
