import { useState } from "react";
import "./style.css";
import { PROFILE_IMG_URL } from "../../config";

const ProfilePic = () => {
  const [isMouseHovered, setMouseHovered] = useState(false);
  return (
    <div
      className={`mt-4 static h-[250px] w-[230px] flex flex-col items-center p-1 rounded-md m-auto profile-pic-background  ${
        isMouseHovered ? "shadow-white shadow-sm" : ""
      }`}
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)}
    >
      <div
        className={`flex flex-col items-center justify-center bg-blue-500 rounded-md ${
          isMouseHovered
            ? "apply-forward-spin-animation"
            : "apply-reverse-spin-animation"
        }`}
      >
        <img
          src={PROFILE_IMG_URL}
          alt="bgImage"
          className="h-[242px] w-full"
          title="profile-image"
        />
      </div>
    </div>
  );
};
export default ProfilePic;
