import Reveal from "../animations/Reveal.tsx";
import { Link } from "../components/Links";

const Hero = () => {
  return (
    <section id="home" className="container py-40">
      <div className="wrapper">
        <Reveal>
          <h1>
            Hi, I'm Harman. <br /> A web Developer.
          </h1>
          <p className="mt-4">I love designing and coding web apps</p>
          <Link href="#contact">Let's collaborate!</Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
