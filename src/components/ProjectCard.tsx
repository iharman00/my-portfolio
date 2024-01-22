import { TechStackTag } from "./Tags.tsx";
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

import { urlFor } from "../client.ts";
import Reveal from "../animations/Reveal.tsx";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    siteLink: string;
    codeLink: string;
    image: any;
    imgAlt: string;
    techStack: [
      {
        name: string;
        alt: string;
        icon: any;
      }
    ];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 xl:max-w-[80%] 2xl:xl:max-w-[70%] mx-auto border-border border-2 rounded-lg">
        <div className="max-w-[19.5rem] max-h-[14rem] mx-auto md:ml-auto md:even:order-last">
          <img
            src={urlFor(project.image).url()}
            alt={project.imgAlt}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="text-left">
          <div className="flex gap-8 items-center">
            <h3>Netflix Clone</h3>
            <div className="flex gap-5">
              <a href={project.siteLink} target="_blank">
                <GoLink size="20px"></GoLink>
              </a>
              <a href={project.siteLink} target="_blank">
                <FaGithub size="20px"></FaGithub>
              </a>
            </div>
          </div>
          <p className="w-full max-w-full mt-4 md:text-base md:leading-[170%]">
            {project.description}
          </p>
          <div className="flex gap-4 mt-6 md:mt-8 flex-wrap">
            {project.techStack.map((tech, index) => (
              <TechStackTag
                key={index}
                name={tech.name}
                icon={tech.icon}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
