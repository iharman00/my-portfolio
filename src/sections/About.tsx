import Reveal from "../animations/Reveal.tsx";

const About = () => {
  return (
    <section id="about" className="container my-52 ">
      <div className="wrapper xl:max-w-[66.666667%]">
        <Reveal>
          <div className="grid sm:max-lg:grid-rows-2 gap-16 lg:grid-cols-2 justify-center items-center">
            <div className="w-full h-60 max-w-96 max-h-80 rounded-lg bg-secondary"></div>
            <div>
              <h2>About</h2>
              <p className="mt-6 max-w-full">
                Greetings! I'm Harman, a dedicated developer with a knack for
                turning creative ideas into functional, user-friendly
                applications.
                <br /> <br />
                Ever Since the begining of my journey into the world of
                development, I've been on a quest to continuously learn and
                create impactful solutions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
