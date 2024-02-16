import { Chrono } from 'react-chrono';
import { experienceItems } from '../static/static-data';
import SectionWrapper from './SectionWrapper';
import TitleWrapper from './TitleWrapper';

function Experience() {
  return (
    <SectionWrapper id='experience'>
      <TitleWrapper>
        Work Experience
      </TitleWrapper>
      <div className='w-full'>
        <Chrono
          title='Experience'
          items={experienceItems}
          mode='HORIZONTAL'
          scrollable
          cardHeight={200}
          slideShow
          slideItemDuration={5000}
          allowDynamicUpdate
          classNames={{
            card: 'p-3 divide-y divide-gray-500 rounded-md',
          }}
          theme={{
            cardBgColor: '#d1d5db',
            titleColorActive: 'blue',
            secondary: '#d1d5db',
          }}
          useReadMore
          cardWidth={600}
        />
      </div>
    </SectionWrapper>
  );
}

export default Experience;
