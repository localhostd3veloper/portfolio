import { sidebarOptions } from '../static/static-data';

function Header() {
  return (
    <div className='flex items-center gap-2 md:justify-between w-full text-base bg-gray-300 text-gray-600 p-3'>
      <div className='font-medium'>@localhostdeveloper</div>
      <ul className='hidden md:flex gap-3 flex-wrap justify-between uppercase font-semibold text-lg'>
        {sidebarOptions.map((option) => (
          <a key={option.name} className='hover:text-gray-800 duration-300' href={option.link}>{option.name}</a>
        ))}
      </ul>
    </div>
  );
}

export default Header;
