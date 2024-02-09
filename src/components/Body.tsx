import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  sidebarOptions,
  socialMediaLinks,
  typeWriterText,
} from "../static/static-data";

function Body() {
  return (
    <div className="h-dvh flex md:flex-row flex-col md:px-10 px-4 justify-center items-center gap-6 sm:gap-12 overflow-hidden">
      <div className="bg-main bg-cover bg-center h-72 w-72 rounded-full fucking-animation hover:shadow-2xl duration-300"></div>
      <div className="flex flex-col">
        <p className="uppercase text-3xl font-bold hover:tracking-wide hover:scale-105 duration-500 ease-in-out leading-none">
          Gautam Anand
        </p>
        <div className="text-2xl md:text-3xl flex gap-2 flex-nowrap">
          I am a
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: typeWriterText,
              deleteSpeed: 40,
            }}
          />
        </div>
        <div className="flex flex-wrap gap-5 mt-6">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-slate-500 duration-300 ease-in-out flex-wrap flex gap-1 items-center"
            >
              <i className={`${social.icon} text-4xl sm:text-base `}></i>{" "}
              <p className="hidden sm:block">{social.name}</p>
            </a>
          ))}
        </div>
        <div className="sm:hidden flex flex-wrap gap-2 font-medium tracking-tighter">
          {sidebarOptions.map(
            (option, index) =>
              index !== 0 && (
                <Link
                  key={option.name}
                  to={option.link}
                  className="text-xl   hover:text-slate-500 duration-300 ease-in-out flex gap-1 items-center mt-4"
                >
                  <p className="uppercase">{option.name}</p>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
