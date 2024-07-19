import { useEffect, useState } from "react";
import { NAVIGATION_LINKS } from "../../config";
import useOnline from "../../utils/useOnline";
import useActiveIdWithScroll from "../../utils/useActiveIdWithScroll";
import OfflinePage from "../../pages/OfflinePage";
import ScrollContext from "../../utils/ScrollContext";
import StraightLine from "../svgs/StraightLine";
import ContactUsIcons from "../ContactUsIcons";
import Header from "../Header";
import ShowNavigationMenu from "../ShowNavigationMenu";
import Home from "../../pages/Home";
import Skills from "../Skills";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Footer from "../Footer";

const RenderUi = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [activeId, setActiveId] = useState(NAVIGATION_LINKS[0].value);
  const isOnline = useOnline();
  const [isWindowScrolled, setWindowScrolled] = useState(false);

  const onClickContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  const handleScroll = () => {
    setWindowScrolled(window.scrollY > 25);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [window.onload]);

  useActiveIdWithScroll(NAVIGATION_LINKS, setActiveId);

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <ScrollContext.Provider
      value={{
        activeId,
        setActiveId,
        navligationLinksList: NAVIGATION_LINKS,
      }}
    >
      <div
        className="bg-[#282C33] overflow-y-auto flex flex-col overflow-x-hidden add-animation-to-main-app"
        onContextMenu={onClickContextMenu}
      >
        <div className="hidden md:flex flex-col w-14 items-center fixed space-y-2 ml-4">
          <StraightLine />
          <ContactUsIcons applyStroke="hover:stroke-blue-500" />
        </div>
        <Header
          isWindowScrolled={isWindowScrolled}
          hamburgerClicked={hamburgerClicked}
          setHamburgerClicked={setHamburgerClicked}
        />
        {hamburgerClicked && (
          <ShowNavigationMenu
            hamburgerClicked={hamburgerClicked}
            setHamburgerClicked={setHamburgerClicked}
          />
        )}
        <div className="mt-20">
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
          <hr className="mt-10" />
          <Footer />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default RenderUi;
