interface Project {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-900 rounded-md p-4 flex flex-col justify-between gap-3 shadow-sm shadow-gray-300/50 hover:shadow-lg duration-500 transition-all">
      <h1 className="text-2xl font-semibold hover:text-gray-600 duration-500">
        <a href={project.projectURL} rel="noreferrer" target="_blank">
          {project.name}
        </a>
      </h1>
      <p className="text-lg">{project.description}</p>
      <div className="flex flex-row">
        {project.techStack.map((stack, index) => (
          <span
            key={index}
            className="bg-gray-700 rounded-md px-2 py-1 text-sm mr-2"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
