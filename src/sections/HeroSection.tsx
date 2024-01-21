import { useState, useEffect } from "react";
import { getSection } from "../client.ts";
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

  return (
    <section id="home" className="container pt-32 py-20 xl:py-40">
      <div className="wrapper">
        <Reveal>
          <div className="lg:max-w-[70%] 2xl:max-w-[50%]">
            <PortableText value={section?.title} />
            <PortableText value={section?.content} />
            <Link href="#contact">Let's talk!</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
