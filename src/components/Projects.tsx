import { projectsData } from '../static/static-data';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function Projects() {
  return (
    <SectionWrapper id='projects' className='gap-5 items-center justify-center w-full '>
      <TitleWrapper>Projects</TitleWrapper>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-full md:w-4/5'>
        {projectsData.map((project,index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
