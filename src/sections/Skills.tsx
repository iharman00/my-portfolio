import Reveal from "../animations/Reveal.tsx";

import { SkillsTag } from "../components/Tags.tsx";

const skills = [
  "Html",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Redux",
  "Nodejs",
  "Express",
  "Mongodb",
  "Github",
  "Figma",
  "Illustrator",
  "Photoshop",
];

const Skills = () => {
  return (
    <section id="skills" className="container my-40 ">
      <div className="wrapper ">
        <Reveal>
          <div className="flex flex-col gap-16 lg:gap-20 lg:grid lg:grid-cols-2 md:max-lg:text-center">
            <div className="lg:order-last h-fit">
              <h2>Skills</h2>
              <p className="mt-6 md:max-w-[70%] lg:max-w-full md:mx-auto">
                These are some of the technologies I work with. Greetings! I'm
                Harman, a dedicated developer with a knack for turning creative
                ideas into functional, user-friendly applications.
              </p>
            </div>
            <ul className="grid grid-cols-3 lg:grid-cols-4 gap-x-12 gap-8 mx-auto">
              {skills.map((skill, index) => (
                <li key={index}>
                  <SkillsTag>{skill}</SkillsTag>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
