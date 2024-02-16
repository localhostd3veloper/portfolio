interface Project {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { name, description, techStack, projectURL } = project;
  return (
    <div
      data-aos='fade-up'
      data-aos-duration={2000}
      data-aos-delay={index * 300}
      className='bg-gray-300 rounded-md p-4 flex flex-col justify-between gap-3 shadow  shadow-gray-300/50 hover:shadow-lg duration-500 transition-all'
    >
      <h1 className='text-2xl font-semibold hover:text-gray-600 duration-300'>
        <a href={projectURL} rel='noreferrer' target='_blank'>
          {name}
        </a>
      </h1>
      <p className='text-lg'>{description}</p>
      <div className='flex flex-wrap gap-2 justify-start'>
        {techStack.map((stack) => (
          <span
            key={stack}
            className='bg-slate-600 text-gray-300 break-words rounded-md px-2 py-1 text-sm  text-center'
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
