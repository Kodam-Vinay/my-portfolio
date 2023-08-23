import { HashLink as Link } from "react-router-hash-link";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import AboutImage from "../../components/svgs/AboutImage";
import DesignBackgroundImage2 from "../../components/svgs/DesignBackgroundImage2";
import { GDRIVE_LINK } from "../../config";

const About = () => {
  return (
    <div className="relative flex justify-between" id="about">
      <div className="h-20 p-10 w-20 border hidden md:block relative right-10 top-52"></div>
      <div className="font-fira p-1 xs:p-4 mt-4 sm:px-14 flex flex-col md:px-[0px] lg:px-[72px] xl:px-[65px] md:w-full">
        <HeadingReusableCode name="About" />
        <div className="about-me md:flex md:items-center md:justify-between">
          <div className="flex flex-col justify-center items-center order-2">
            <AboutImage className="h-52 sm:h-64 md:h-80" />
          </div>
          <div className="my-data text-white mt-3 md:w-80 lg:w-[400px] xl:w-1/2 text-sm xs:text-[16px] sm:text-lg md:text-xl lg:text-2xl">
            <p className="overflow-y-auto h-72">
              I am Vinay Kumar Kodam, a graduate of{" "}
              <span className="text-blue-300 font-[600]">
                {" "}
                B.Sc(MPCS) With 8.18CGPA from Satavahana University, Karimnagar.
              </span>{" "}
              and a frontend/full-stack web developer, I have one year hands On
              Experience with Technologies Like
              <span className="text-blue-300 font-[600]">
                React.js, Node.js, Express.js, REST APIs, MongoDB, Javascript,
                TailwindCSS, Github, Python, and SQLite
              </span>
            </p>
            <Link to={GDRIVE_LINK} target="_blank">
              <ReusableButton
                type="button"
                name="Read More"
                className="hidden md:block mt-3"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20 w-20 hidden relative md:flex md:flex-col self-end bottom-28 md:right-0 md:left-5 lg:left-10">
        <DesignBackgroundImage2 />
      </div>
    </div>
  );
};
export default About;
