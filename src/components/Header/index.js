import HomeLogo from "../svgs/Homelogo";
import HamburgerIcon from "../svgs/HamburgerIcon";
import NavigationLinks from "../NavigationLinks";
import { HashLink as Link } from "react-router-hash-link";

const Header = (props) => {
  const { hamburgerClicked, setHamburgerClicked } = props;
  return (
    <nav className="header-container flex items-center justify-between px-4 py-2 md:px-[80px] lg:px-[170px] md:py-10 sticky top-0 h-16 z-10">
      <Link to="#home" className="add_zoom">
        <div className="header-div-container flex items-center space-x-2 cursor-pointer">
          <HomeLogo />
          <p className="font-bold text-white font-fira">Vinay</p>
        </div>
      </Link>
      <button
        className="cursor-pointer md:hidden h-8"
        onClick={() => setHamburgerClicked((prev) => !prev)}
      >
        {!hamburgerClicked && (
          <HamburgerIcon className="add_zoom cursor-pointer" />
        )}
      </button>
      <div className="hidden md:block">
        <NavigationLinks />
      </div>
    </nav>
  );
};
export default Header;
