import { useState, useEffect } from "react";
import { SocialTag } from "../components/Tags.tsx";
import { getSocials } from "../client.ts";
import { getSection } from "../client.ts";
import { PortableText } from "@portabletext/react";

import Reveal from "../animations/Reveal.tsx";

interface SocialsType {
  name: string;
  alt: string;
  link: string;
  icon: any;
}

interface SectionType {
  title: any;
  content: any;
  img?: any;
  imgAlt?: string;
}
[];

const ContactSection = () => {
  const [socials, setSocials] = useState<SocialsType[]>([]);
  const [section, setSection] = useState<SectionType>();

  const makeGetSectionReq = async () => {
    const result = await getSection();
    setSection(result[4]);
  };

  const makeGetSocialsReq = async () => {
    const result = await getSocials();
    setSocials(result);
  };

  useEffect(() => {
    makeGetSectionReq();
    makeGetSocialsReq();
  }, []);

  return (
    <section id="contact" className="container py-20 xl:py-32">
      <div className="wrapper xl:max-w-[50%] md:text-lg">
        <Reveal>
          <div>
            <PortableText value={section?.title} />
            <PortableText value={section?.content} />
          </div>
          <div className="flex flex-col gap-10 mt-16">
            <div className="w-fit">
              <p className="font-poppins mb-2">Mail</p>
              <a href="mailto:harmanwork124@gmail.com">
                harmanwork124@gmail.com
              </a>
            </div>
            <div className="w-fit">
              <p className="font-poppins">Socials</p>
              <ul className="flex gap-4 mt-3">
                {socials.map((social, index) => (
                  <li key={index}>
                    <SocialTag social={social} size="size-14" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
