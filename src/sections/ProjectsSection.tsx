import { useState, useEffect } from "react";
import { getProjects } from "../client.ts";
import Reveal from "../animations/Reveal.tsx";

import { getSection } from "../client.ts";
import { PortableText } from "@portabletext/react";
import ProjectCard from "../components/ProjectCard.tsx";

interface ProjectsType {
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
}

interface SectionType {
  title: any;
  content: any;
  img?: any;
  imgAlt?: string;
}
[];

const ProjectsSection = () => {
  const [section, setSection] = useState<SectionType>();
  const [projects, setProjects] = useState<ProjectsType[]>([]);

  const makeGetSectionReq = async () => {
    const result = await getSection();
    setSection(result[3]);
  };

  const makeGetProjectsReq = async () => {
    const result = await getProjects();
    setProjects(result);
  };

  useEffect(() => {
    makeGetSectionReq();
    makeGetProjectsReq();
  }, []);
  return (
    <section id="projects" className="container py-20 xl:py-32">
      <div className="wrapper md:text-center">
        <Reveal>
          <h2>Projects</h2>
          {projects.length > 0 ? (
            <>
              <div className="mx-auto mt-4">
                <PortableText value={section?.content} />
              </div>
              <div className="flex flex-col gap-8 mt-14">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </>
          ) : (
            <h3 className="mt-10">
              Currently working on projects... &#128516;
            </h3>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
