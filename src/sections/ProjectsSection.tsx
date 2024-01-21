import { useState, useEffect } from "react";
import { getProjects } from "../client.ts";
import Reveal from "../animations/Reveal.tsx";

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

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);
  const makeGetProjectsReq = async () => {
    const result = await getProjects();
    setProjects(result);
  };

  useEffect(() => {
    makeGetProjectsReq();
  }, []);
  return (
    <section id="projects" className="container py-20 xl:py-32">
      <div className="wrapper md:text-center">
        <Reveal>
          <h2>Projects</h2>
          {projects.length > 0 ? (
            <>
              <p className="mx-auto mt-4">Here are some examples of my work</p>
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
