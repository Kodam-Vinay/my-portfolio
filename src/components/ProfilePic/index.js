import "./style.css";

const ProfilePic = () => {
  return (
    <div className="mt-4 static h-[250px] w-[230px] flex flex-col items-center p-1 rounded-md m-auto profile-pic-background">
      <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md apply-animation apply-position-animation">
        <img
          src="https://res.cloudinary.com/dwgpba5n2/image/upload/v1691046969/portfolio/profile-image-logo.webp"
          alt="bgImage"
          className="h-[242px] w-full"
          title="profile-image"
        />
      </div>
    </div>
  );
};
export default ProfilePic;
