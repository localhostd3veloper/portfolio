import { Link } from "react-router-dom";

function About() {
  return (
    <div className="md:w-full h-dvh  px-3 md:px-10 sm:pt-12 text-gray-800  flex flex-col gap-3 justify-center">
      <h1 className="text-4xl font-semibold flex justify-between">
        About{" "}
        <Link
          to="/"
          className="underline text-blue-600 block ml-auto sm:hidden text-lg"
        >
          Home
        </Link>
      </h1>
      <img
        src={require("../assets/about.jpg")}
        alt="gautam-anand"
        className="rounded-md w-full md:w-3/4 lg:w-3/5  bg-cover bg-center"
      />
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
