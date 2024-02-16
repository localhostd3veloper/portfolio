import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function About() {
  return (
    <SectionWrapper id='about' className='gap-5 justify-center items-center'>
      <TitleWrapper>About Me</TitleWrapper>
      <img
        src={require('../assets/about.jpg')}
        alt='gautam-anand'
        className='rounded-md w-full bg-cover bg-center md:w-3/4 lg:w-1/2'
      />
      <div className='md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center'>
        <p className='mt-5 text-xl md:text-3xl font-semibold'>Hello there 👋</p>
        <p className='text-lg text-gray-600'>
          I have over an year of experience as a frontend developer with a
          passion for creating beautiful and functional web applications using
          various UI libraries like TailwindCSS, MaterialUI, AntDesign, and many
          more.
          <br />
        </p>{' '}
      </div>
    </SectionWrapper>
  );
}

export default About;
