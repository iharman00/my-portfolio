import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { getSkills } from "../client.ts";

import Reveal from "../animations/Reveal.tsx";
import { SkillsTag } from "../components/Tags.tsx";

interface Skills {
  name: string;
  skills: [
    {
      name: string;
      icon: any;
      link: string;
    }
  ];
}

const Skills = () => {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [activeSkills, setActiveSkills] = useState<
    [string, number] | [null, 0]
  >([null, 0]);

  const makeGetSkillsReq = async () => {
    const result = await getSkills();
    setSkills(result);
    if (result.length > 0) {
      setActiveSkills([result[0].name, 0]);
    }
  };

  useEffect(() => {
    makeGetSkillsReq();
  }, []);

  const showSkills = (category: string, index: number) => {
    setActiveSkills([category, index]);
  };

  return (
    <section id="skills" className="container my-52">
      <div className="wrapper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:text-center md:max-lg:px-10">
            <div>
              <h2 className="mx-auto">Skills</h2>
              <p className="mt-6 md:mx-auto">
                These are some of the technologies I work with. Greetings! I'm
                Harman, a dedicated developer with a knack for turning creative
                ideas into functional, user-friendly applications.
              </p>
            </div>
            <div className="flex flex-col gap-10 md:gap-16 mt-4">
              <div className="flex justify-between border-border border-2 rounded-lg overflow-clip w-full md:max-w-[50%] md:mx-auto">
                {skills.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => showSkills(category.name, index)}
                    className={`${
                      activeSkills[1] === index && "bg-border"
                    } hover:bg-border p-4 transition-all ease-out duration-300 w-full`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="md:max-w-[80%] mx-auto mt-1">
                {skills.map((category, index) => (
                  <AnimatePresence key={index}>
                    {activeSkills[0] === category.name && (
                      <Reveal>
                        <ul
                          key={index}
                          className="grid grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-[4.5rem]"
                        >
                          {skills[activeSkills[1]].skills?.map(
                            (skill, index) => (
                              <li key={index}>
                                <SkillsTag
                                  name={skill?.name}
                                  icon={skill.icon}
                                  link={skill?.link}
                                />
                              </li>
                            )
                          )}
                        </ul>
                      </Reveal>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
