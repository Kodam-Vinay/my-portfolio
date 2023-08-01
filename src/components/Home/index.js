import { useEffect, useState } from "react";
import DesignBackgroundImage1 from "../svgs/DesignBackgroundImage1";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";
import "./style.css";

const noramlRoles = ["Front End Devloper", "Backend Developer"];
const stackRoles = ["Full Stack Developer", "Mern Stack Deveoper"];

const Home = () => {
  const [randomNum, setRandomNum] = useState(null);
  useEffect(() => {
    const timerId = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * noramlRoles.length));
    }, 2000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="font-fira p-5 flex flex-col items-center md:items-start md:flex-row justify-around md:px-10">
      <div className="md:w-[500px] space-y-5">
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-10">
          Vinay is a{" "}
          <span className="text-blue-500 add-transition">
            {randomNum === 0 || randomNum
              ? noramlRoles[randomNum]
              : "Front End Devloper"}
          </span>{" "}
          and{" "}
          <span className="text-blue-500">
            {randomNum === 0 || randomNum
              ? stackRoles[randomNum]
              : "Mern Stack Deveoper"}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[#ABB2BF]">
          He crafts responsive websites where technologies meet creativity
        </p>
        <button className="border text-blue-500 p-1 hidden md:block">
          Contact Me!!
        </button>
      </div>
      <div className="mt-4 static">
        <div className="flex left-11 relative">
          <div className="relative top-14 md:top-32">
            <DesignBackgroundImage1 />
          </div>
          <img
            src="https://res.cloudinary.com/dwgpba5n2/image/upload/v1690881986/portfolio/1660810700344-01_jd0dxs_z2xcdd_new_ifhryb.png"
            alt="bgImage"
            className="relative right-24 h-80 md:h-96"
            title="profile-image"
          />
          <div className="relative right-48 top-1/2 md:top-[150px]">
            <DesignBackgroundImage2 />
          </div>
        </div>
        <div className="relative border p-2 shadow-sm">
          <p className="text-xl text-[#ABB2BF]">
            🟦 Currently Working On{" "}
            <span className="text-white font-bold">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
