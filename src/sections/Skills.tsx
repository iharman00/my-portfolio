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
      <div className="wrapper xl:max-w-[66.666667%]">
        <Reveal>
          <div className="grid sm:max-lg:grid-rows-2 gap-16 lg:grid-cols-2">
            <ul className="grid grid-cols-4 gap-4 gap-y-8">
              {skills.map((skill, index) => (
                <li key={index}>
                  <SkillsTag>{skill}</SkillsTag>
                </li>
              ))}
            </ul>
            <div>
              <h2>Skills</h2>
              <p className="mt-6 w-full max-w-full">
                These are some of the technologies I work with. Greetings! I'm
                Harman, a dedicated developer with a knack for turning creative
                ideas into functional, user-friendly applications.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
