import Reveal from "../animations/Reveal.tsx";
import { Link } from "../components/Links";

const Hero = () => {
  return (
    <section id="home" className="container my-40 mb-52">
      <Reveal>
        <h1>
          Hi, I’m Harman. <br />A Full-stack developer.
        </h1>
        <p className="mt-4">
          I am a passionate developer based in Barrie, Ontario.
        </p>
        <Link href="#projects">See my work!</Link>
      </Reveal>
    </section>
  );
};

export default Hero;
