interface Project {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-400 rounded-md p-4 flex flex-col justify-between gap-3 shadow-sm shadow-gray-300/50 hover:shadow-lg duration-500 transition-all">
      <h1 className="text-2xl font-semibold hover:text-gray-600 duration-300">
        <a href={project.projectURL} rel="noreferrer" target="_blank">
          {project.name}
        </a>
      </h1>
      <p className="text-lg">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 content-evenly">
        {project.techStack.map((stack) => (
          <span
            key={stack}
            className="bg-gray-700 text-gray-300 break-words rounded-md px-2 py-1 text-sm mr-2 text-center"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
