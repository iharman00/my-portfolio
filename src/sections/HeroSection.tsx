import { useState, useEffect } from "react";
import { getSection, urlFor } from "../client.ts";
import { PortableText } from "@portabletext/react";
import Reveal from "../animations/Reveal.tsx";
import { Link } from "../components/Links.tsx";

interface SectionType {
  title: any;
  content: any;
  img?: any;
  imgAlt?: string;
}
[];

const HeroSection = () => {
  const [section, setSection] = useState<SectionType>();

  const makeGetSectionReq = async () => {
    const result = await getSection();
    setSection(result[0]);
  };

  useEffect(() => {
    makeGetSectionReq();
  }, []);

  console.log(section);

  return (
    <section id="home" className="container pt-32 lg:py-20 xl:py-20">
      <div className="wrapper">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20 md:gap-32">
            <div className="lg:max-w-[70%] 2xl:max-w-[50%]">
              <PortableText value={section?.title} />
              <PortableText value={section?.content} />
              <Link href="#contact">Let's talk!</Link>
            </div>
            {section?.img && section?.imgAlt && (
              <div className="w-full md:max-w-[60%] lg:max-w-[30%] aspect-[3/4] rounded-lg shadow-lg overflow-hidden mx-auto lg:mx-0">
                <img
                  src={urlFor(section?.img).url()}
                  alt={section?.imgAlt}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
