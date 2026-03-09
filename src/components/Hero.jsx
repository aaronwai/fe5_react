const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero container'>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          asperiores.
        </p>
        {/* fix href */}
        <a href='#tours' className='btn hero-btn'>
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
