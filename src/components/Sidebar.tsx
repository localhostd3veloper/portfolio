import { NavLink } from "react-router-dom";
import { sidebarOptions } from "../static/static-data";

function Sidebar() {
  return (
    <div className="sm:w-1/4 sm:flex hidden bg-black text-slate-200  justify-center items-center">
      <ul className="flex flex-col gap-5 text-2xl">
        {sidebarOptions.map((option) => (
          <NavLink
            to={option.link}
            key={option.name}
            className="uppercase font-semibold hover:text-slate-500 hover:scale-105 duration-500 hover:translate-x-2 ease-in-out flex gap-4 items-center"
          >
            <i className={option.icon}></i> <span>{option.name}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
