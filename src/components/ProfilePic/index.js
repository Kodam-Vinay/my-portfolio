import "./style.css";
import { PROFILE_IMG_URL } from "../../config";

const ProfilePic = () => {
  return (
    <div className="mt-4 static h-[250px] w-[230px] flex flex-col items-center p-1 rounded-md m-auto profile-pic-background add_zoom hover:shadow-white hover:shadow-sm">
      <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md apply-animation apply-position-animation">
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
