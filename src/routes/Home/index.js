import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import ReusableButton from "../../utils/ReusableButton";
import ProfilePic from "../../components/ProfilePic";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "Mern Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    loop: true,
    typeSpeed: 40,
    delaySpeed: 1000,
  });
  return (
    <div
      className="font-fira p-3 flex flex-col items-center md:items-start md:flex-row md:justify-around md:px-20 lg:px-40 xl:px-20"
      id="home"
    >
      <div className="w-full md:w-[500px] space-y-5 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-10 h-32">
          Vinay is a <span className="text-blue-500 text-4xl">{text}</span>
          <Cursor cursorStyle="🚀" />
        </h1>

        <p className="text-xl md:text-2xl text-[#ABB2BF]"></p>
        <Link to="#contact">
          <ReusableButton
            type="button"
            name="Contact Me!!"
            className="hidden md:block mt-4"
          />
        </Link>
      </div>
      <ProfilePic />
    </div>
  );
};

export default Home;
