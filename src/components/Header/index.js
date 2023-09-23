import HomeLogo from "../svgs/Homelogo";
import HamburgerIcon from "../svgs/HamburgerIcon";
import NavigationLinks from "../NavigationLinks";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { hamburgerClicked, setHamburgerClicked, isWindowScrolled } = props;
  const navigate = useNavigate();
  const handleClickScroll = () => {
    navigate("/");
    const element = document.getElementById("/");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`header-container flex items-center justify-between px-4 py-2 md:px-[80px] lg:px-[170px] md:py-10 fixed top-0 z-10 w-full ${
        isWindowScrolled ? "bg-gray-800" : "bg-transparent"
      } ${hamburgerClicked ? "h-20" : "h-16"}`}
    >
      <div
        className="header-div-container flex items-center space-x-2 cursor-pointer"
        onClick={handleClickScroll}
      >
        <HomeLogo />
        <p className="font-bold text-white font-fira">Vinay</p>
      </div>

      <button
        className="cursor-pointer md:hidden h-8"
        onClick={() => setHamburgerClicked((prev) => !prev)}
      >
        {!hamburgerClicked && (
          <HamburgerIcon className="add_zoom cursor-pointer hamburger-icon" />
        )}
      </button>
      <div className="hidden md:block">
        <NavigationLinks hamburgerStatus={hamburgerClicked} />
      </div>
    </nav>
  );
};
export default Header;
