import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import AboutImage from "../svgs/AboutImage";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";

const About = () => {
  return (
    <div className="relative flex justify-between">
      <div className="h-20 p-10 w-20 border hidden md:block relative right-10 top-52"></div>
      <div className="font-fira p-1 xs:p-4 mt-4 sm:px-14 flex flex-col md:px-[16px] lg:px-[75px] md:w-full">
        <HeadingReusableCode name="About" />
        <div className="about-me md:flex md:items-center md:justify-between mt-4">
          <div className="flex flex-col items-center justify-center md:order-2">
            <AboutImage className="h-52 sm:h-64 md:h-80" />
          </div>
          <div className="my-data text-white mt-3 md:w-80 text-sm xs:text-[16px] sm:text-lg md:text-xl lg:text-2xl">
            <p>
              Iam Vinay Kumar Kodam, Iam a{" "}
              <span className="text-blue-300 font-[600]">
                frontend/fullstack
              </span>{" "}
              web delveoper I have good hands On Experience with Technologies
              like{" "}
              <span className="text-blue-300 font-[600]">
                React.js Node.js, Python, SQLite and MongoDB
              </span>
            </p>
            <ReusableButton name="Read More" className="mt-3" />
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
