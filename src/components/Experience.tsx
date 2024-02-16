import { Chrono } from 'react-chrono';
import { experienceItems } from '../static/static-data';
import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function Experience() {
  return (
    <SectionWrapper
      id='experience'
      className='justify-center items-center gap-4'
    >
      <TitleWrapper>Work Experience</TitleWrapper>
      <div className='w-full flex justify-center items-center md:w-4/5 lg:w-1/2'>
        <Chrono
          title='Experience'
          items={experienceItems}
          mode='HORIZONTAL'
          scrollable
          cardHeight={200}
          classNames={{
            card: 'p-3 divide-y divide-gray-500 rounded-md shadow',
          }}
          hideControls
          theme={{
            cardBgColor: '#d1d5db',
            titleColorActive: 'blue',
            secondary: '#d1d5db',
          }}
          useReadMore
          slideItemDuration={3000}
          slideShow
        />
      </div>
    </SectionWrapper>
  );
}

export default Experience;
