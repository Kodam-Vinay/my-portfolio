import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import ErrorPage from "./routes/ErrorPage";
import AdminTable from "./routes/AdminTable";

import Header from "./components/Header";
import StraightLine from "./components/svgs/StraightLine";
import ContactUsIcons from "./components/ContactUsIcons";
import QuoteContainer from "./components/QuoteContainer";

import ShowNavigationMenu from "./components/ShowNavigationMenu";

import Skills from "./components/Skills";

import Footer from "./components/Footer";

const RenderUi = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <div className="bg-[#282C33] h-screen overflow-y-auto flex flex-col overflow-x-hidden scroll-m-0 scroll-p-0 add-animation-to-main-app">
      <div className="hidden md:flex flex-col w-14 items-center absolute space-y-2 ml-4">
        <StraightLine />
        <ContactUsIcons applyStroke="hover:stroke-blue-500" />
      </div>
      <Header
        hamburgerClicked={hamburgerClicked}
        setHamburgerClicked={setHamburgerClicked}
      />
      {hamburgerClicked && (
        <ShowNavigationMenu
          hamburgerClicked={hamburgerClicked}
          setHamburgerClicked={setHamburgerClicked}
        />
      )}
      <Home />
      <QuoteContainer />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <hr className="mt-10" />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderUi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sercret-admin-table",
    element: <AdminTable />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
