import { blogs } from '../static/static-data';
import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function Blogs() {
  return (
    <SectionWrapper id='blogs' className='gap-5 items-center justify-center w-full'>
      <TitleWrapper>BLOGS</TitleWrapper>
      <div
        data-aos='fade-up'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-4/5'
      >
        {blogs.map((blog, index) => (
          <div
            data-aos='flip-left'
            data-aos-delay={index * 500}
            key={blog.url}
            className='p-4 m-3 bg-gray-300 border-2 border-gray-400 rounded-md shadow-xl'
          >
            <a
              href={blog.url}
              target='_blank'
              rel='noreferrer'
              className='flex flex-col justify-between'
            >
              <img
                className='bg-cover rounded-md h-2/3'
                src={blog.imgURL}
                alt={blog.name}
              />

              <div className='text-2xl font-semibold hover:text-sky-800 duration-300 mt-4'>
                {index + 1}. {blog.name}
              </div>
              <p className='italic'>{blog.description}</p>
              <div className='md:gap-3 break-words'>
                {blog.hashtags.map((hashtag) => (
                  <span key={hashtag} className='text-sm mx-1'>
                    {hashtag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Blogs;
