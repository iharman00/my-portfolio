import Reveal from "../animations/Reveal.tsx";
import { Link } from "../components/Links";

const Hero = () => {
  return (
    <section id="home" className="container px-4 mx-auto block py-40">
      <Reveal>
        <h1 className="font-bold text-[2.5rem] md:text-5xl tracking-[-0.06rem] leading-[120%] md:leading-[120%]">
          Hi, I’m Harman. <br />A Full-stack developer.
        </h1>
        <p className="font-xs md:font-base text-sm md:text-base mt-4 tracking-wide">
          A passionate software developer with a knack for turning ideas into
          reality
        </p>
        <Link href="#projects">See my work!</Link>
      </Reveal>
    </section>
  );
};

export default Hero;
