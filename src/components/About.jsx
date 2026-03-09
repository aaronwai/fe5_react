import aboutImg from "../assets/beach.png";
import Title from "./Title";
const About = () => {
  return (
    <section className='section about' id='about'>
      <Title title='about' subTitle='us' />
      <div className='about-center'>
        <div className='about-img'>
          <img src={aboutImg} alt='' />
        </div>
        <article className='about-info'>
          <h3>expore the difference</h3>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          {/*  */}
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
