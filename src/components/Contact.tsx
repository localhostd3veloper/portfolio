import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function Contact() {
  return (
    <SectionWrapper
      id='contact'
      className='h-screen items-center justify-center'
    >
      <TitleWrapper> Contact </TitleWrapper>
      <p className='text-xl text-center font-medium px-12'>
        I have saved a lot of time by not creating a fancy contact form. <br />
        You can just write to me on my{' '}
        <a
          href='mailto:gautamanand022@gmail.com'
          className='text-blue-500 underline underline-offset-1'
        >
          Email
        </a>
        ,
        <a
          href='https://www.linkedin.com/in/gautam-anand16/'
          target='_blank'
          rel='noreferrer'
          className='text-blue-500 underline underline-offset-1'
        >
          LinkedIn
        </a>
        , or even on my{' '}
        <a
          href='https://instagram.com/gautamsaysfml'
          className='text-blue-500 underline underline-offset-1'
        >
          Instagram
        </a>
      </p>
    </SectionWrapper>
  );
}

export default Contact;
