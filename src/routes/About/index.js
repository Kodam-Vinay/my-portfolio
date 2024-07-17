import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import AboutImage from "../../components/svgs/AboutImage";
import DesignBackgroundImage2 from "../../components/svgs/DesignBackgroundImage2";
import { DOCX_URL, CLOUDINARY_ACCESS_URL, PDF_URL } from "../../config";
import { useState } from "react";
import DownloadIcon from "../../components/svgs/DownloadIcon";

const About = () => {
  const [showOverflow, setShowOverFlow] = useState(false);
  const [isMouseHover, setMouseOver] = useState(false);

  return (
    <div
      className="relative flex flex-col sm:flex-row justify-between"
      id="about"
    >
      <div className="h-20 p-10 w-20 border hidden md:block relative right-10 top-52"></div>
      <div className="font-fira p-1 xs:p-4 mt-4 sm:px-14 flex flex-col md:px-[0px] lg:px-[72px] xl:px-[65px] md:w-full">
        <HeadingReusableCode name="About" />
        <div className="about-me md:flex md:items-center md:justify-between">
          <div className="flex flex-col justify-center items-center order-2">
            <AboutImage className="h-52 sm:h-64 md:h-80" />
          </div>
          <div className="my-data text-white mt-3 w-full md:w-80 lg:w-[400px] xl:w-1/2 text-sm xs:text-[16px] sm:text-lg md:text-xl lg:text-2xl px-2">
            <p>
              I am Vinay Kumar Kodam, a{" "}
              <span className="text-blue-300 font-[600]">
                {" "}
                B.Sc(MPCS) graduate With an 8.18 CGPA from Satavahana
                University, Karimnagar.
              </span>{" "}
              and a frontend/full-stack web developer.
              {showOverflow && (
                <>
                  I have 6 months of hands-on Experience with building web
                  applications using Technologies{" "}
                  <span className="text-blue-300 font-[600]">
                    React.js, Node.js, Express.js, REST APIs, MongoDB,
                    Javascript, and TailwindCSS{" "}
                  </span>
                  also, I have good hands-on Experience with technologies{" "}
                  <span className="text-blue-300 font-[600]">
                    Python and SQLite
                  </span>
                </>
              )}
            </p>
            <div className="flex space-x-3 h-24">
              <ReusableButton
                type="button"
                name={showOverflow ? "Hide" : "Read More"}
                className="mt-3 h-10"
                onClick={() => setShowOverFlow(!showOverflow)}
              />
              <div
                className="flex flex-col"
                onMouseLeave={() => setMouseOver(false)}
              >
                <ReusableButton
                  type="button"
                  name={
                    <div className="flex items-center">
                      <DownloadIcon className="h-4 fill-blue-500 mr-2" />
                      Resume
                    </div>
                  }
                  className={`mt-3 ${isMouseHover ? "hidden" : "block"}`}
                  onMouseEnter={() => setMouseOver(true)}
                />
                {isMouseHover && (
                  <div className="flex flex-col space-y-1 mt-3">
                    <a href={CLOUDINARY_ACCESS_URL + PDF_URL}>
                      <ReusableButton
                        type="button"
                        name={
                          <div className="flex items-center">
                            <DownloadIcon className="h-4 fill-blue-500 mr-4" />
                            Pdf
                          </div>
                        }
                        onClick={() => setMouseOver(false)}
                      />
                    </a>
                    <a href={CLOUDINARY_ACCESS_URL.replace("image","raw") + DOCX_URL}>
                      <ReusableButton
                        type="button"
                        name={
                          <div className="flex items-center">
                            <DownloadIcon className="h-4 fill-blue-500 mr-4" />
                            Docx
                          </div>
                        }
                        onClick={() => setMouseOver(false)}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
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
