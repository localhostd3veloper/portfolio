import { sidebarOptions } from "../static/static-data";

function Sidebar() {
  return (
    <nav className="w-1/4 bg-black text-slate-200 flex justify-center items-center">
      <ul className="flex flex-col gap-5 text-2xl">
        {sidebarOptions.map((option) => (
          <li
            key={option}
            className="uppercase font-semibold cursor-pointer hover:text-slate-500 hover:scale-105 duration-500 hover:translate-x-2 ease-in-out"
          >
            {option}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
