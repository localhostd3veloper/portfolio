import { Link } from "react-router-dom";

function About() {
  return (
    <div className="sm:w-3/4 px-10 sm:px-32 sm:pr-60 sm:pt-12 text-gray-300 bg-[#101010] flex flex-col justify-center">
      <h1 className="text-4xl font-semibold flex justify-between">
        About{" "}
        <Link
          to="/"
          className="underline text-blue-300 block ml-auto sm:hidden text-lg"
        >
          Home
        </Link>
      </h1>
      <video autoPlay className="w-full h-[50%] filter grayscale">
        <source src={require("../assets/about-video.mp4")} type="video/mp4" />
      </video>
      <section>
        <p className="mt-5 text-3xl font-semibold">Hello there 👋</p>
        <p className="text-xl">
          I have over an year of experience as a frontend developer with a
          passion for creating beautiful and functional web applications using
          various UI libraries like TailwindCSS, MaterialUI, AntDesign, and many
          more.
          <br />
        </p>{" "}
      </section>
    </div>
  );
}

export default About;
