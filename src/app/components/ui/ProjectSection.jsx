import React from "react";
import pro1 from "@/image/img1.jpg";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 des",
    image: { pro1 },
  },
  {
    id: 2,
    title: "Ecomerce Shop Website",
    description: "Project 2 des",
    image:"/image/project2.jpg",
  },
];
const ProjectSection = () => {
  return (
    <>
      <h1 className="text-2xl text-center">My Project</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-1">
          {projectsData.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1"></div>
    </>
  );
};

export default ProjectSection;
