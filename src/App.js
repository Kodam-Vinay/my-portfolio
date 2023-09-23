import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useState, Suspense, useEffect } from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import ErrorPage from "./routes/ErrorPage";
import OfflinePage from "./routes/OfflinePage";

import Header from "./components/Header";
import StraightLine from "./components/svgs/StraightLine";
import ContactUsIcons from "./components/ContactUsIcons";
import QuoteContainer from "./components/QuoteContainer";
import ShowNavigationMenu from "./components/ShowNavigationMenu";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// importing userDefined Hook
import useOnline from "./utils/useOnline";
import ScrollContext from "./utils/ScrollContext";
import useActiveIdWithScroll from "./utils/useActiveIdWithScroll";

const AdminTable = lazy(() => import("./routes/AdminTable"));

const navligationLinksList = [
  {
    id: "Home",
    value: "/",
  },
  {
    id: "Works",
    value: "projects",
  },
  {
    id: "About-Me",
    value: "about",
  },
  {
    id: "Contact",
    value: "contact",
  },
];

const RenderUi = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [activeId, setActiveId] = useState(navligationLinksList[0].value);
  // console.log(activeId);
  const isOnline = useOnline();
  const onClickContextMenu = (event) => {
    event.preventDefault();
    return false;
  };
  const [isWindowScrolled, setWindowScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 25) {
      setWindowScrolled(true);
    } else if (window.scrollY < 25) {
      setWindowScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  useActiveIdWithScroll(navligationLinksList, setActiveId);
  if (!isOnline) {
    return <OfflinePage />;
  }
  return (
    <ScrollContext.Provider
      value={{
        activeId: activeId,
        setActiveId: setActiveId,
        navligationLinksList: navligationLinksList,
      }}
    >
      <div
        className={`bg-[#282C33] overflow-y-auto flex flex-col overflow-x-hidden add-animation-to-main-app`}
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
        <div className="mt-16">
          <Home />
          <QuoteContainer />
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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RenderUi />,
      },
      {
        path: "/sercret-admin-table",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <AdminTable />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
