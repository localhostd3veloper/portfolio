import { projectsData } from "../static/static-data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="page px-12 py-6 h-screen text-gray-300 ">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
