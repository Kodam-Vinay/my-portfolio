import "./style.css";
import ReusableButton from "../../utils/ReusableButton";
import ProfilePic from "../../components/ProfilePic";
import { HashLink as Link } from "react-router-hash-link";
import TypingEffect from "../../components/TypingEffect";

const Home = ({ ref }) => {
  return (
    <div
      ref={ref}
      className="font-fira p-3 flex flex-col items-center md:items-start md:flex-row md:justify-around md:px-20 lg:px-40 xl:px-20"
      id="/"
    >
      <div className="w-full md:w-[500px] space-y-5 mx-auto">
        <TypingEffect />

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
