function Contact() {
  return (
    <div className="sm:w-3/4  h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-xl text-center px-12">
        I have saved a lot of time by not creating a fancy contact form. <br />
        You can just write to me on my{" "}
        <a href="mailto:gautamanand022@gmail.com" className="text-blue-500">
          Email
        </a>
      </p>
    </div>
  );
}

export default Contact;
