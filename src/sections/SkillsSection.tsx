import { useState, useEffect } from "react";
import CategorySelector from "../components/CategorySelector.tsx";
import SkillsList from "../components/SkillsList.tsx";

import Reveal from "../animations/Reveal.tsx";
import { getSkills } from "../client.ts";
import { getSection } from "../client.ts";
import { PortableText } from "@portabletext/react";

interface SkillsType {
  name: string;
  icon: any;
  skills: {
    name: string;
    alt: string;
    icon: any;
  }[];
}
[];

interface SectionType {
  title: any;
  content: any;
  img?: any;
  imgAlt?: string;
}
[];

const SkillsSection = () => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  const [activeCategory, setActiveCategory] = useState<
    [string, number] | [null, 0]
  >([null, 0]);
  const [section, setSection] = useState<SectionType>();

  const makeGetSectionReq = async () => {
    const result = await getSection();
    setSection(result[2]);
  };

  const makeGetSkillsReq = async () => {
    const result = await getSkills();
    setSkills(result);
    if (result.length > 0) {
      setActiveCategory([result[0].name, 0]);
    }
  };

  useEffect(() => {
    makeGetSectionReq();
    makeGetSkillsReq();
  }, []);

  const showSkills = (category: string, index: number) => {
    setActiveCategory([category, index]);
  };

  return (
    <section id="skills" className="container py-20 xl:py-32">
      <div className="wrapper">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:text-center md:max-lg:px-10">
            <div className="lg:max-w-[70%] 2xl:max-w-[50%] md:mx-auto">
              <h2 className="mb-6">{section?.title}</h2>
              <PortableText value={section?.content} />
            </div>
            <div className="flex flex-col gap-10 md:gap-16 mt-4">
              <CategorySelector
                skills={skills}
                activeCategory={activeCategory}
                showSkills={showSkills}
              />
              <div className="md:max-w-[80%] mx-auto mt-1">
                {skills.map((category, index) => (
                  <SkillsList
                    key={index}
                    skillsList={skills}
                    activeCategory={activeCategory}
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

export default SkillsSection;
