import { PortableText } from "@portabletext/react";
import { TechStackTag } from "./Tags.tsx";
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

import { urlFor } from "../client.ts";
import Reveal from "../animations/Reveal.tsx";

interface ProjectCardProps {
  project: {
    title: string;
    description: any;
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
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-12 items-center p-8 mx-auto border-border border-2 rounded-lg">
        <img
          src={urlFor(project.image).url()}
          alt={project.imgAlt}
          style={{ width: "auto", height: "auto" }}
          className="lg:p-8"
        />
        <div className="text-left">
          <div className="flex gap-8 items-center">
            <h3>{project.title}</h3>
            <div className="flex gap-5">
              <a href={project.siteLink} target="_blank">
                <GoLink size="20px"></GoLink>
              </a>
              <a href={project.codeLink} target="_blank">
                <FaGithub size="20px"></FaGithub>
              </a>
            </div>
          </div>
          <div className="mt-5 div">
            <PortableText value={project?.description} />
          </div>
          <div className="flex gap-4 mt-10 flex-wrap">
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
