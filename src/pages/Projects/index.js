import { useEffect } from "react";
import { useState } from "react";
import EachProject from "../../components/EachProject";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import Shimmer from "../../components/Shimmer";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_PROJECT_ACCESS_TOKEN}`,
        },
      };
      const res = await fetch(API_URL + "projects/all", options);
      const jsonData = await res.json();
      if (res?.ok && jsonData?.data) {
        const objectData = jsonData?.data?.map((eachItem) => ({
          id: eachItem._id,
          cloudinaryImageId: eachItem.cloudinary_image_id,
          description: eachItem.description,
          name: eachItem.name,
          githubUrl: eachItem.github_url,
          technolgies: eachItem.technolgies,
          websiteUrl: eachItem.website_url,
        }));
        setProjectsData(objectData);
      } else {
        setProjectsData([]);
      }
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <div
      className="font-fira p-1 xs:p-4 mt-4 sm:px-14 md:px-[80px] lg:px-[160px]"
      id="projects"
    >
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
