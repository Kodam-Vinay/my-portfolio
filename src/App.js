import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import StraightLine from "./components/svgs/StraightLine";
import ContactUsIcons from "./components/ContactUsIcons";
import QuoteContainer from "./components/QuoteContainer";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#282C33] h-screen overflow-y-auto flex flex-col overflow-x-hidden">
      <div className="hidden md:flex flex-col w-10 items-center absolute space-y-2 ml-4">
        <StraightLine />
        <ContactUsIcons />
      </div>
      <Header />
      {/* <ShowNavigationMenu /> */}
      <Home />
      <QuoteContainer />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <hr className="mt-10" />
      <Footer />
    </div>
  );
}

export default App;
