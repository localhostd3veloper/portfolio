function TitleWrapper(props: { children?: React.ReactNode }) {
  return (
    <div data-aos='fade-up' className='text-2xl md:text-3xl font-semibold flex justify-between'>
      {props.children}
    </div>
  );
}

export default TitleWrapper;
