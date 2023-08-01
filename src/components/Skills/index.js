import DesignBackgroundImage1 from "../svgs/DesignBackgroundImage1";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";

const Skills = () => {
  return (
    <div className="font-fira p-4 mt-4 px-14 md:px-[80px] lg:px-[160px]">
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-bold font-fira text-white">
          <span className="text-blue-500">#</span>Skills
        </h1>
        <hr className="w-[40%] sm:w-[30%] md:w-[10%] ml-4 border-blue-500 border-1" />
      </div>

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
        <ul className="p-0 flex flex-col sm:flex-row flex-wrap md:space-x-5">
          <div></div>
          <div className="skills-box-css languages order-2">
            <div className="border p-2">
              <h1>Languages</h1>
            </div>
            <div className="apply-css-to-skills-inside-box">
              <p>- Javascript</p>
              <p>- Python</p>
              <p>- Java</p>
            </div>
          </div>

          <div className="skills-box-css database order-1">
            <div className="border p-2">
              <h1>Databases</h1>
            </div>
            <div className="apply-css-to-skills-inside-box">
              <p>- SQLite</p>
              <p>- MongoDb</p>
            </div>
          </div>

          <div className="skills-box-css tools order-3">
            <div className="border p-2">Tools</div>
            <div className="apply-css-to-skills-inside-box">
              <p>- VsCode</p>
              <p>- Ubuntu</p>
              <p>- Font Awesome</p>
              <p>- TailwindCss</p>
              <p>- Bootstrap</p>
              <p>- CLI</p>
            </div>
          </div>

          <div className="skills-box-css frameworks order-2">
            <div className="border p-2">Frameworks & Libraries</div>
            <div className="apply-css-to-skills-inside-box">
              <p>- React.js</p>
              <p>- Node.js</p>
              <p>- Express.js</p>
            </div>
          </div>

          <div className="skills-box-css frameworks order-1">
            <div className="border p-2">
              <h1>Other</h1>
            </div>
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
