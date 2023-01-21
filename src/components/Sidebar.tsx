const options = ["home", "about", "projects", "experience", "contact"];

function Sidebar() {
  return (
    <nav className="w-1/4 bg-gray-800 text-slate-200 flex justify-center items-center">
      <ul className="flex flex-col gap-5 text-2xl">
        {options.map((option) => (
          <li
            key={option}
            className="uppercase font-semibold cursor-pointer hover:text-slate-700 duration-200"
          >
            {option}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
