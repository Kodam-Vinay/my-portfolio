import { Link } from "react-router-dom";
import { CLOUDINARY_ACCESS_URL } from "../../config";
import GithubIcon from "../svgs/GithubIcon";
import WebsiteLogo from "../svgs/WebsiteLogo";
import "./style.css";

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
    <li className="border w-full xs:min-w-[240px] xs:max-w-[250px] md:min-w-[260px] md:max-w-[300px] text-white font-fira p-2 hover:bg-gray-800 rounded-md hover:shadow-lg hover:shadow-white add_zoom">
      <img
        src={CLOUDINARY_ACCESS_URL + "projects-images/" + cloudinaryImageId}
        alt={name}
        title={name}
        className="h-40 w-full"
      />
      <hr className="w-full my-2" />
      <p className="px-1 py-1 font-bold h-8">{name}</p>
      <hr className="w-full my-2" />
      <p className="px-1 py-1 h-24">{description}</p>
      <hr className="w-full my-2" />
      <p className="px-1 py-1 h-24">
        <span className="font-bold text-blue-500">Technologies: </span>
        {technolgies.join(", ")}
      </p>
      <hr className="w-full my-2" />
      <div className="flex items-center justify-around w-full p-1">
        <Link
          className="border hover:border-blue-500 border-white w-2/5 h-10 rounded-md flex items-center"
          to={githubUrl}
          target="_blank"
        >
          <button
            type="button"
            className="w-full h-full flex items-center justify-around px-1 py-1 text-blue-500 hover:text-white add_zoom"
          >
            <p className="text-sm font-bold">Github</p>
            <GithubIcon />
          </button>
        </Link>
        <Link
          className="border hover:border-blue-500 border-white w-2/5 h-10 rounded-md flex items-center"
          to={websiteUrl}
          target="_blank"
        >
          <button
            type="button"
            className="w-full h-full flex items-center justify-around px-1 py-1 text-blue-500 hover:text-white add_zoom "
          >
            <p className="text-sm font-bold">Live</p>
            <WebsiteLogo />
          </button>
        </Link>
      </div>
    </li>
  );
};
export default EachProject;
