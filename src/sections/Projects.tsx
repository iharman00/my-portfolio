import { useState, useEffect } from "react";
import { getProjects } from "../client.ts";
import Reveal from "../animations/Reveal";

import ProjectCard from "../components/ProjectCard.tsx";

interface ProjectsType {
  title: string;
  description: string;
  siteLink: string;
  codeLink: string;
  image: any;
  techStack: [
    {
      name: string;
      icon: any;
    }
  ];
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);
  const makeGetProjectsReq = async () => {
    const result = await getProjects();
    setProjects(result);
  };

  useEffect(() => {
    makeGetProjectsReq();
  }, []);
  return (
    <section id="projects" className="container my-52">
      <div className="wrapper text-center">
        <Reveal>
          <h2 className="mx-auto">Projects</h2>
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

export default Projects;
