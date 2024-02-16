import Typewriter from 'typewriter-effect';
import { socialMediaLinks, typeWriterText } from '../static/static-data';
import SectionWrapper from './SectionWrapper';

function Body() {
  return (
    <SectionWrapper className='justify-center gap-5 items-center h-[calc(100vh-80px)]'>
      <div
        data-aos='fade-up'
        id='profile-image'
        className='bg-main bg-cover bg-center h-72 w-72 rounded-full fucking-animation'
      ></div>
      <div data-aos='fade-up' className='flex flex-col gap-2 text-center'>
        <p className='uppercase text-xl md:text-5xl font-bold'>Gautam Anand</p>
        <div className='text-2xl md:text-3xl flex gap-2 flex-nowrap text-center justify-center'>
          I am a
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: typeWriterText,
              deleteSpeed: 40,
            }}
          />
        </div>
        <div className='flex flex-wrap gap-3 mt-6'>
          {socialMediaLinks.map((social, index) => (
            <a
              data-aos='fade-down'
              data-aos-delay={index * 200}
              key={index}
              href={social.link}
              target='_blank'
              rel='noreferrer'
              className='px-3 py-1 border border-gray-500 rounded-md text-base md:text-xl hover:text-slate-500 hover:scale-105 hover:-translate-y-1 duration-500 ease-in-out flex-wrap flex gap-1 items-center'
            >
              <i className={`${social.icon} text-4xl sm:text-base `}></i>{' '}
              <p className='hidden sm:block'>{social.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className='absolute sm:hidden animate-bounce bottom-2'>V</div>
    </SectionWrapper>
  );
}

export default Body;
