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
        {section?.img ? (
          <Reveal>
            <div className="flex flex-col gap-20 lg:gap-20 lg:grid lg:grid-cols-2 items-center md:max-lg:text-center">
              <div className="justify-self-center">
                <img
                  src={urlFor(section?.img).url()}
                  alt={section?.imgAlt}
                  style={{ maxWidth: "384px", maxHeight: "384px" }}
                />
              </div>

              <div>
                <PortableText value={section?.title} />
                <div className="md:max-w-[70%] lg:max-w-full md:mx-auto">
                  <PortableText value={section?.content} />
                </div>
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="mx-auto text-center">
              <PortableText value={section?.title} />
              <div className="md:max-w-[70%] xl:max-w-[50%] md:mx-auto">
                <PortableText value={section?.content} />
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
