import Typewriter from "typewriter-effect";
import { socialMediaLinks, typeWriterText } from "../static/static-data";

function Body() {
  return (
    <div className="page h-screen flex-grow flex justify-center items-center gap-12">
      <div className="bg-main bg-cover bg-center h-72 w-72 rounded-full fucking-animation  hover:shadow-2xl duration-300 filter grayscale"></div>
      <div className="flex flex-col">
        <span className="uppercase text-[3.5rem] font-bold text-white hover:tracking-wide hover:scale-105 duration-500 ease-in-out ">
          Gautam Anand
        </span>
        <div className="text-3xl flex gap-2 text-white ">
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
              className="text-xl text-white hover:text-slate-500 duration-300 ease-in-out"
            >
              <i className={social.icon}></i> {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
