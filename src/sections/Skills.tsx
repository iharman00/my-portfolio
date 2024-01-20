import { useState, useEffect } from "react";
import CategorySelector from "../components/CategorySelector.tsx";
import SkillsList from "../components/SkillsList.tsx";

import Reveal from "../animations/Reveal.tsx";
import { getSkills } from "../client.ts";

interface SkillsType {
  name: string;
  icon: any;
  skills: {
    name: string;
    icon: any;
  }[];
}
[];

const Skills = () => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
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
              <CategorySelector
                skills={skills}
                activeSkills={activeSkills}
                showSkills={showSkills}
              />
              <div className="md:max-w-[80%] mx-auto mt-1">
                {skills.map((category, index) => (
                  <SkillsList
                    key={index}
                    skillsList={skills}
                    activeSkills={activeSkills}
                    category={category}
                  />
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
