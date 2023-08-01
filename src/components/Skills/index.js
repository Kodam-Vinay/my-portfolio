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
          <div className="skills-box languages order-2">
            <div className="border h-10 w-full flex flex-col justify-center p-2 font-bold text-xl text-white">
              <h1>Languages</h1>
            </div>
            <div className="border  w-full text-white p-2">
              <p>- Javascript</p>
              <p>- Python</p>
              <p>- Java</p>
            </div>
          </div>

          <div className="skills-box database order-1">
            <div className="border h-10 w-full flex flex-col justify-center p-2 font-bold text-xl text-white">
              <h1>Databases</h1>
            </div>
            <div className="border w-full text-white p-2">
              <p>- SQLite</p>
              <p>- MongoDb</p>
            </div>
          </div>

          <div className="skills-box tools order-3">
            <div className="border h-10 w-full flex flex-col justify-center p-2 font-bold text-xl text-white">
              <h1>Tools</h1>
            </div>
            <div className="border w-full text-white p-2">
              <p>- VsCode</p>
              <p>- Ubuntu</p>
              <p>- Font Awesome</p>
              <p>- TailwindCss</p>
              <p>- Bootstrap</p>
              <p>- CLI</p>
            </div>
          </div>

          <div className="skills-box frameworks order-2">
            <div className="border h-10 w-full flex flex-col justify-center p-2 font-bold text-xl text-white">
              <h1>Frameworks & Libraries</h1>
            </div>
            <div className="border w-full text-white p-2">
              <p>- React.js</p>
              <p>- Node.js</p>
              <p>- Express.js</p>
            </div>
          </div>

          <div className="skills-box frameworks order-1">
            <div className="border h-10 w-full flex flex-col justify-center p-2 font-bold text-xl text-white">
              <h1>Other</h1>
            </div>
            <div className="border w-full text-white p-2">
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
