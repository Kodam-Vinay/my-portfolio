import { useEffect, useState } from "react";
import DesignBackgroundImage1 from "../svgs/DesignBackgroundImage1";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";
import "./style.css";
import ReusableButton from "../../utils/ReusableButton";
import ProfilePic from "../ProfilePic";

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
    <div className="font-fira p-3 flex flex-col items-center md:items-start md:flex-row md:justify-around md:px-20 lg:px-40 xl:px-20">
      <div className="md:w-[500px] space-y-5 mx-auto">
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
        <ReusableButton
          type="button"
          name="Contact Me!!"
          className="hidden md:block"
        />
      </div>
      {/* <div className="mt-4 static m-auto">
        <div className="flex">
          <div className="relative top-10 left-5 xs:top-5 xs:left-12 sm:left-12 sm:top-10 md:top-[70px] md:left-5 lg:left-4 lg:top-24 xl:left-16">
            <DesignBackgroundImage1 />
          </div>
          <img
            src="https://res.cloudinary.com/dwgpba5n2/image/upload/v1690912438/portfolio/1660810700344-01_jd0dxs_z2xcdd_new_lo4ou7.webp"
            alt="bgImage"
            className="relative h-48 xs:h-52 sm:h-60 md:h-80 lg:h-96 mx-auto right-[70px] xs:right-10 md:right-[72px] lg:right-24 xl:right-10"
            title="profile-image"
          />
          <div className="relative right-32 top-24 md:right-32 md:top-[180px] lg:right-52 xl:right-36">
            <DesignBackgroundImage2 />
          </div>
        </div>
        <div className="relative border p-2 shadow-sm mx-auto">
          <p className="text-xl text-[#ABB2BF]">
            🟦 Currently Working On{" "}
            <span className="text-white font-bold">Portfolio</span>
          </p>
        </div>
      </div> */}
      <ProfilePic />
    </div>
  );
};

export default Home;
