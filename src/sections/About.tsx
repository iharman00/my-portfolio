import Reveal from "../animations/Reveal.tsx";

const About = () => {
  return (
    <section id="about" className="container py-52">
      <div className="wrapper">
        <Reveal>
          <div className="flex flex-col gap-20 lg:gap-20 lg:grid lg:grid-cols-2 items-center md:max-lg:text-center">
            <div className="w-full h-60 max-w-96 max-h-80 max-lg:mx-auto rounded-lg bg-secondary justify-self-center"></div>
            <div>
              <h2>About</h2>
              <p className="mt-6 md:max-w-[70%] lg:max-w-full md:mx-auto">
                Greetings! I'm Harman, a dedicated developer with a knack for
                turning creative ideas into functional, user-friendly
                applications.
                <br /> <br />
                Ever Since the begining of my journey into the world of
                development, I've been on a quest to continuously learn and
                create impactful solutions.Greetings! I'm Harman, a dedicated
                developer with a knack for turning creative ideas into
                functional, user-friendly applications.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
