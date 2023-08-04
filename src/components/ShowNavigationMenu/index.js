import NavigationLinks from "../NavigationLinks";
import CloseIcon from "../svgs/CloseIcon";

const ShowNavigationMenu = (props) => {
  const { hamburgerClicked, setHamburgerClicked } = props;

  return (
    <div className="md:hidden pl-4 pb-4 w-full bg-gray-900 absolute z-10 flex flex-col add-header-animation">
      <button
        className="cursor-pointer md:hidden h-8 self-end mt-2 mr-2"
        onClick={() => setHamburgerClicked((prev) => !prev)}
      >
        {hamburgerClicked && (
          <CloseIcon className="add_zoom cursor-pointer ml-auto" />
        )}
      </button>
      <NavigationLinks className="ml-auto" />
    </div>
  );
};
export default ShowNavigationMenu;
