import HeadingReusableCode from "../../utils/HeadingReusableCode";
import DesignBackgroundImage1 from "../svgs/DesignBackgroundImage1";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";

const Skills = () => {
  return (
    <div className="font-fira p-1 xs:p-4 mt-4 sm:px-14 md:px-[80px] lg:px-[160px]">
      <HeadingReusableCode name="Skills" />

      <div className="skills">
        <div className="hidden md:flex flex-col p-3 md:flex-row md:justify-between mt-4">
          <div className="flex items-center">
            <DesignBackgroundImage2 className="h-10" />
            <DesignBackgroundImage1 className="h-10" />
          </div>
          <div className="flex items-center">
            <DesignBackgroundImage1 className="h-10" />
            <DesignBackgroundImage2 className="h-10" />
          </div>
        </div>
        <ul className="p-0 flex flex-col items-center sm:flex-row flex-wrap md:items-start md:space-x-5">
          <div></div>
          <div className="skills-box-css add_zoom languages order-2">
            <div className="p-2">
              <h1>Languages</h1>
            </div>
            <hr />
            <div className="apply-css-to-skills-inside-box">
              <p>- Javascript</p>
              <p>- Python</p>
              <p>- Java</p>
            </div>
          </div>

          <div className="skills-box-css add_zoom database order-1">
            <div className="p-2">
              <h1>Databases</h1>
            </div>
            <hr />
            <div className="apply-css-to-skills-inside-box">
              <p>- SQLite</p>
              <p>- MongoDb</p>
            </div>
          </div>

          <div className="skills-box-css add_zoom tools order-3">
            <div className="p-2">Tools</div>
            <hr />
            <div className="apply-css-to-skills-inside-box">
              <p>- VsCode</p>
              <p>- Ubuntu</p>
              <p>- Font Awesome</p>
              <p>- TailwindCss</p>
              <p>- Bootstrap</p>
              <p>- CLI</p>
            </div>
          </div>

          <div className="skills-box-css add_zoom frameworks order-2">
            <div className="p-2">Frameworks & Libraries</div>
            <hr />
            <div className="apply-css-to-skills-inside-box">
              <p>- React.js</p>
              <p>- Node.js</p>
              <p>- Express.js</p>
            </div>
          </div>

          <div className="skills-box-css add_zoom frameworks order-1">
            <div className="p-2">
              <h1>Other</h1>
            </div>
            <hr />
            <div className="apply-css-to-skills-inside-box">
              <p>- HTML</p>
              <p>- CSS</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
