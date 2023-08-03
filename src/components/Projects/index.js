import { useEffect } from "react";
import { useState } from "react";
import EachProject from "../EachProject";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import Shimmer from "../Shimmer";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const data = await fetch(
        "https://portfoli-projects-api-production.up.railway.app/projects"
      );
      const jsonData = await data.json();
      const objectData = jsonData.map((eachItem) => ({
        id: eachItem._id,
        cloudinaryImageId: eachItem.cloudinary_image_id,
        description: eachItem.description,
        name: eachItem.name,
        githubUrl: eachItem.github_url,
        technolgies: eachItem.technolgies,
        websiteUrl: eachItem.website_url,
      }));
      setProjectsData(objectData);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="font-fira p-1 xs:p-4 mt-4 sm:px-14 md:px-[80px] lg:px-[160px]">
      <HeadingReusableCode name="Projects" />
      {projectsData.length > 0 ? (
        <ul className="p-0 flex flex-col items-center sm:flex-row flex-wrap mt-4 space-x-0 space-y-3 sm:space-x-4 md:space-x-10 md:space-y-3">
          <li></li>
          {projectsData.map((eachItem) => (
            <EachProject projectInfo={eachItem} key={eachItem.id} />
          ))}
        </ul>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
export default Projects;
