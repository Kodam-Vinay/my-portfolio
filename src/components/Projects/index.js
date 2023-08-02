import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const data = await fetch(
        "https://api-portfolio-projects.cyclic.cloud/projects"
      );
      const jsonData = await data.json();
      console.log(jsonData);
    } catch (error) {
      throw new Error(error);
    }
  };
  return <div></div>;
};
export default Projects;
