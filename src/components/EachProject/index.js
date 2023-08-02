import { CLOUDINARY_IMG_URL } from "../../config";
import GithubIcon from "../svgs/GithubIcon";
import WebsiteLogo from "../svgs/WebsiteLogo";

const EachProject = (props) => {
  const { projectInfo } = props;
  const {
    name,
    cloudinaryImageId,
    description,
    githubUrl,
    technolgies,
    websiteUrl,
  } = projectInfo;
  return (
    <li className="border xs:min-w-[250px] xs:max-w-[300px] text-white font-fira p-1">
      <img
        src={CLOUDINARY_IMG_URL + cloudinaryImageId}
        alt={name}
        title={name}
        className="h-40 w-full"
      />
      <hr className="w-full my-2" />
      <p className="px-1 py-1 font-bold">{name}</p>
      <hr className="w-full my-2" />
      <p className="px-1 py-1">{description}</p>
      <hr className="w-full my-2" />
      <p>
        <span className="font-bold text-blue-500">Technologies: </span>
        {technolgies.join(", ")}
      </p>
      <hr className="w-full my-2" />
      <div className="flex items-center justify-around w-full p-1">
        <a
          className="border hover:border-blue-500 border-white w-2/5 h-10 px-1 py-1"
          href="/#"
        >
          <button
            type="button"
            className="w-full flex items-center justify-around text-blue-500 hover:text-white"
          >
            <p>Github</p>
            <GithubIcon />
          </button>
        </a>
        <a
          className="border hover:border-blue-500 border-white w-2/5 h-10 px-1 py-1"
          href={websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="w-full flex items-center justify-around text-blue-500 hover:text-white"
          >
            <p>Website</p>
            <WebsiteLogo />
          </button>
        </a>
      </div>
    </li>
  );
};
export default EachProject;
