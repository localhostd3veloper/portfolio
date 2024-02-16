import { useEffect } from 'react';
import AOS from 'aos';

import Body from './components/Body';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <div id='#' className='h-full flex flex-col bg-[#dedede] text-slate-800'>
      <Header />
      <div className='flex flex-col gap-10 w-full p-4 bg-[#dedede]'>
        <Body />
        <About />
        <Projects />
        <Experience />
        <Blogs />
        <Contact />
      </div>
      <ScrollToTopBtn />
    </div>
  );
}
function ScrollToTopBtn() {
  return (
    <button
      id='scroll-to-top'
      className='fixed bottom-5 right-5 z-10 p-2 rounded-full bg-gray-300 border border-gray-300 shadow text-gray-600'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 15.75l7.5-7.5 7.5 7.5'
        />
      </svg>
    </button>
  );
}

export default App;
