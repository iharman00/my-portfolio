import { useState, useEffect } from "react";
import { SocialTag } from "../components/Tags.tsx";
import { getSocials } from "../client.ts";

import Reveal from "../animations/Reveal.tsx";

interface SocialsType {
  name: string;
  link: string;
  icon: any;
}

const Contact = () => {
  const [socials, setSocials] = useState<SocialsType[]>([]);

  const makeGetSocialsReq = async () => {
    const result = await getSocials();
    setSocials(result);
  };

  useEffect(() => {
    makeGetSocialsReq();
  }, []);

  return (
    <section id="contact" className="container py-32">
      <div className="wrapper xl:max-w-[66.666667%] md:text-lg">
        <Reveal>
          <div>
            <h2>Get in Touch!</h2>
            <p className="mt-4 max-w-full">
              I am open to talk about projects and would love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div className="w-fit">
              <p className="font-poppins mb-2">Mail</p>
              <a href="mailto:harmanwork124@gmail.com">
                harmanwork124@gmail.com
              </a>
            </div>
            <div className="w-fit">
              <p className="font-poppins">Socials</p>
              <ul className="flex gap-8 mt-3">
                {socials.map((social, index) => (
                  <li key={index}>
                    <SocialTag social={social} size="size-16" />
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

export default Contact;
