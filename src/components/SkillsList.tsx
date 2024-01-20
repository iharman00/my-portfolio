import { AnimatePresence } from "framer-motion";
import { SkillsTag } from "./Tags.tsx";
import Reveal from "../animations/Reveal.tsx";

interface SkillsListProps {
  skillsList: {
    name: string;
    icon: any;
    skills: {
      name: string;
      icon: any;
    }[];
  }[];
  activeSkills: [string, number] | [null, 0];
  category: any;
}

const SkillsList = ({
  skillsList,
  activeSkills,
  category,
}: SkillsListProps) => {
  return (
    <AnimatePresence>
      {activeSkills[0] === category.name && (
        <Reveal>
          <ul className="grid grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-[4.5rem]">
            {skillsList[activeSkills[1]].skills?.map((skill, index) => (
              <li key={index}>
                <SkillsTag name={skill?.name} icon={skill.icon} />
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </AnimatePresence>
  );
};

export default SkillsList;
