import { useState, useEffect } from "react";
import { getSection } from "../client.ts";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../client.ts";

import Reveal from "../animations/Reveal.tsx";

interface SectionType {
  title: any;
  content: any;
  img?: any;
  imgAlt?: string;
}
[];

const AboutSection = () => {
  const [section, setSection] = useState<SectionType>();

  const makeGetSectionReq = async () => {
    const result = await getSection();
    setSection(result[1]);
  };

  useEffect(() => {
    makeGetSectionReq();
  }, []);

  return (
    <section id="about" className="container py-20 xl:py-32">
      <div className="wrapper">
        {section?.img && (
          <Reveal>
            <div className="flex flex-col gap-20 lg:gap-20 lg:grid lg:grid-cols-2 items-center md:max-lg:text-center">
              <div className="w-full max-w-96 max-h-80 justify-self-center">
                <img
                  src={urlFor(section?.img).url()}
                  alt={section?.imgAlt}
                  width="auto"
                  height="auto"
                />
              </div>

              <div>
                <h2>{section?.title}</h2>
                <div className="mt-6 md:max-w-[70%] lg:max-w-full md:mx-auto">
                  <PortableText value={section?.content} />
                </div>
              </div>
            </div>
          </Reveal>
        )}
        <Reveal>
          <div className="mx-auto text-center">
            <h2>{section?.title}</h2>
            <div className="mt-6 md:max-w-[70%] xl:max-w-[50%] md:mx-auto">
              <PortableText value={section?.content} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
