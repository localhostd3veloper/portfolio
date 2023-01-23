function About() {
  return (
    <div className="page px-32 pr-60 pt-12 text-gray-300 bg-[#101010] flex flex-col justify-center">
      <h1 className="text-4xl font-semibold">About</h1>
      <video autoPlay className="w-full h-1/3 filter grayscale">
        <source src={require("../assets/about-video.mp4")} type="video/mp4" />
      </video>
      <section>
        <p className="mt-5 text-3xl font-semibold">Hello there 👋</p>
        <p className="text-xl">
          I'm a full-stack developer with a passion for creating beautiful and
          functional web applications. I'm currently (Till August 2023) studying
          in my final year of a Bachelor Technology in Computer Science at{" "}
          <a
            href="https://gits.ac.in"
            className="underline underline-offset-4 hover:text-blue-500 duration-300"
          >
            Geetanjali Institute of Technical Studies
          </a>
          , Udaipur
        </p>{" "}
      </section>
    </div>
  );
}

export default About;
