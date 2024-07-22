function SectionWrapper(props: {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      data-aos='fade-up'
      className={`flex flex-col h-screen ${props.className? props.className :   ''}`}
      id={props.id}
    >
      {props.children}
    </section>
  );
}

export default SectionWrapper;
