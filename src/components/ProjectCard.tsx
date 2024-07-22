import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export interface IProject {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
  imageURLs: string[];
}
function ProjectCard({ project, index }: { project: IProject; index: number }) {
  const { name, description, techStack, projectURL, imageURLs } = project;
  return (
    <a
      href={projectURL}
      data-aos='fade-up'
      data-aos-delay={index * 200}
      className='bg-gray-300 rounded-md p-3 flex flex-col gap-2 shadow shadow-gray-300/50 duration-300 hover:scale-105'
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        stopOnHover={false}
        infiniteLoop
        autoPlay
        interval={2500}
      >
        {imageURLs.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${index} ${name}`} />
          </div>
        ))}
      </Carousel>
      <div className='text-xl font-medium hover:text-gray-600 duration-300'>
        <a href={projectURL} rel='noreferrer' target='_blank'>
          {name}
        </a>
      </div>
      <div className='text-base leading-5'>{description}</div>
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
    </a>
  );
}

export default ProjectCard;
