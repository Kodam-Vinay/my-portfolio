import { useEffect, useState } from "react";
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
      <ProfilePic />
    </div>
  );
};

export default Home;
