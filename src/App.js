import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import StraightLine from "./components/svgs/StraightLine";
import ContactUsIcons from "./components/ContactUsIcons";
import QuoteContainer from "./components/QuoteContainer";

function App() {
  return (
    <div className="container bg-[#282C33] h-screen overflow-y-auto flex flex-col">
      <div className="hidden md:flex flex-col w-10 items-center absolute space-y-2">
        <StraightLine />
        <ContactUsIcons />
      </div>
      <Header />
      {/* <ShowNavigationMenu /> */}
      <Home />
      <QuoteContainer />
    </div>
  );
}

export default App;
