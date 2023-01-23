import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  sidebarOptions,
  socialMediaLinks,
  typeWriterText,
} from "../static/static-data";

function Body() {
  return (
    <div className="sm:w-3/4 flex md:flex-row flex-col px-10 sm:px-0 justify-center items-center gap-6 sm:gap-12">
      <div className="bg-main bg-cover bg-center h-72 w-72 rounded-full fucking-animation  hover:shadow-2xl duration-300 filter grayscale"></div>
      <div className="flex flex-col">
        <span className="uppercase text-[3.5rem] font-bold text-white hover:tracking-wide hover:scale-105 duration-500 ease-in-out ">
          Gautam Anand
        </span>
        <div className="text-3xl flex gap-2 text-white">
          I am a{" "}
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: typeWriterText,
              deleteSpeed: 100,
            }}
          />
        </div>
        <div className="flex gap-5 mt-6">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl text-white hover:text-slate-500 duration-300 ease-in-out flex gap-1 items-center"
            >
              <i className={`${social.icon} text-4xl sm:text-base `}></i>{" "}
              <span className="hidden sm:block">{social.name}</span>
            </a>
          ))}
        </div>
        <div className="sm:hidden flex gap-2">
          {sidebarOptions.map(
            (option, index) =>
              index !== 0 && (
                <Link
                  key={option.name}
                  to={option.link}
                  className="text-xl text-white hover:text-slate-500 duration-300 ease-in-out flex gap-1 items-center mt-4"
                >
                  <span className="">{option.name}</span>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
