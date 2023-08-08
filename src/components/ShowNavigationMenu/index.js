import NavigationLinks from "../NavigationLinks";
import CloseIcon from "../svgs/CloseIcon";
import "./index.css";

const ShowNavigationMenu = (props) => {
  const { hamburgerClicked, setHamburgerClicked } = props;

  return (
    <div className="md:hidden pl-4 pb-4 w-full bg-gray-900 absolute z-10 flex flex-col add-transition-to-naviagtion">
      <button
        className="cursor-pointer md:hidden h-8 self-end mt-2 mr-2"
        onClick={() => setHamburgerClicked((prev) => !prev)}
      >
        {hamburgerClicked && (
          <CloseIcon className="add_zoom cursor-pointer ml-auto mr-2" />
        )}
      </button>
      <NavigationLinks className="add_zoom_small_screen" />
    </div>
  );
};
export default ShowNavigationMenu;
