import ProjectCard from "./ProjectCard";
import data from "../assets/data/projectData";
import { useState } from "react";
function Project() {
  const [projectList, setProjectList] = useState(data);

  const seletedTech = (searchProjects) => {
    if (searchProjects.includes("all")) {
      return setProjectList(data);
    }

    // filter the project
    const filteredProject = data.filter((curr) => {
      return curr.tech
        .join("")
        .toLowerCase()
        .includes(searchProjects.toLowerCase());
    });
    setProjectList(filteredProject);
  };

  return (
    <section className='bg-back font-poppin float-right mb-8'>
      <div className='bg-card p-5 mt-10 rounded-xl'>
        <h1 className='font-bold text-darkGray'>Projects ({data.length})</h1>
        <div className='technologis-base-project mt-4 space-x-3 space-y-3'>
          <button
            onClick={() => {
              seletedTech("all");
            }}
            className='border-2 ml-3 text-lightGray font-semibold border-lightGray px-5 py-1 text-sm text-center rounded-xl'>
            All
          </button>
          <button
            onClick={() => {
              seletedTech("htmlcssjs");
            }}
            className='border-2 ml-3 text-lightGray font-semibold border-lightGray px-5 py-1 text-sm text-center rounded-xl'>
            Html + Css + Js
          </button>
          <button
            onClick={() => {
              seletedTech("htmltailwindjs");
            }}
            className='border-2 text-lightGray font-semibold border-lightGray px-5 py-1 text-sm text-center rounded-xl'>
            Html + Tailwind + Js
          </button>
          <button
            onClick={() => {
              seletedTech("reacttailwind");
            }}
            className='border-2 text-lightGray font-semibold border-lightGray px-5 py-1 text-sm text-center rounded-xl'>
            React + Tailwind
          </button>
          <button
            onClick={() => {
              seletedTech("mern");
            }}
            className='border-2 text-lightGray font-semibold border-lightGray px-5 py-1 text-sm text-center rounded-xl'>
            MERN
          </button>
        </div>
      </div>

      <div className='card-container mt-10 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  sm:gap-6 md:gap-10 '>
        {projectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Project;
