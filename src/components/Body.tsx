import { useEffect } from "react";
import Typewriter from "typewriter-effect";

function Body() {
  useEffect(() => {}, []);
  return (
    <div className="w-3/4 flex justify-center items-center gap-12">
      <div className="bg-main bg-cover bg-center h-72 w-72 rounded-full fucking-animation hover:shadow-2xl duration-300"></div>
      <div className="flex flex-col">
        <span className="uppercase text-[3.5rem] font-bold">Gautam Anand</span>
        <div className="text-4xl flex gap-2">
          I am a{" "}
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: [
                "Tech Enthusiast",
                "Frontend Developer",
                "Full Stack Developer",
                "Guitarist",
                "Photographer",
              ],
              deleteSpeed: 100,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
