import { Chrono } from 'react-chrono';
import { Link } from 'react-router-dom';
import { experienceItems } from '../static/static-data';

function Experience() {
  return (
    <div className='sm:w-3/4 overflow-auto px-3 sm:px-12 pt-6  text-gray-700'>
      <h1 className='text-4xl font-semibold flex justify-between'>
        Work Experience{' '}
        <Link
          to='/'
          className='underline text-blue-300 block ml-auto sm:hidden text-lg'
        >
          Home
        </Link>
      </h1>
      <div className=' '>
        <Chrono
          title='Experience'
          items={experienceItems}
          mode='VERTICAL_ALTERNATING'
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
          cardWidth={500}
        />
      </div>
    </div>
  );
}

export default Experience;
