import Reveal from "../animations/Reveal.tsx";

const About = () => {
  return (
    <section id="about" className="container px-4 mx-auto block py-40">
      <Reveal>
        <h2 className="font-bold text-[2.5rem] md:text-5xl tracking-[-0.06rem] leading-[120%] md:leading-[120%]">
          A little about me.
        </h2>
      </Reveal>
    </section>
  );
};

export default About;
