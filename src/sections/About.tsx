import Reveal from "../animations/Reveal.tsx";

const About = () => {
  return (
    <section id="about" className="container my-32 text-center">
      <Reveal>
        <h2>A little about me.</h2>
        <p className="mt-4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          rutrum turpis, a scelerisque eros ornare sed. Quisque sed lorem id
          ante semper faucibus. Cras consectetur eget lectus sed aliquet. In
          odio enim, molestie vel vestibulum nec,
        </p>
      </Reveal>
    </section>
  );
};

export default About;
