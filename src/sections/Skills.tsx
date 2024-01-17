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
          <h2>Skills</h2>
          <p className="mt-6">
            These are some of the technologies I work with.
          </p>
          <div className="flex justify-center md:flex-start flex-wrap gap-20 mt-16">
            {skills.map((skill, index) => (
              <SkillsTag key={index}>{skill}</SkillsTag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
