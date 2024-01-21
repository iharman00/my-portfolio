import { useState, useEffect } from "react";
import { SocialTag } from "../components/Tags.tsx";
import { getSocials } from "../client.ts";

interface SocialsType {
  name: string;
  alt: string;
  link: string;
  icon: any;
}

const Footer = () => {
  const [socials, setSocials] = useState<SocialsType[]>([]);

  const navLinks = ["about", "skills", "projects", "contact"];

  const makeGetSocialsReq = async () => {
    const result = await getSocials();
    setSocials(result);
  };

  useEffect(() => {
    makeGetSocialsReq();
  }, []);

  return (
    <footer id="contact" className="container pt-14 pb-10">
      <div className="wrapper flex flex-col gap-16 lg:gap-32 lg:flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mb-2 text-3xl">Harmanpreet Singh</h2>
            <a
              href="mailto:harmanwork124@gmail.com"
              className="text-foreground-dark"
            >
              harmanwork124@gmail.com
            </a>
          </div>
          <div className="hidden lg:block">
            <small className="text-sm leading-[170%] text-foreground-dark ">
              Copyright &copy; 2024 Harmanpreet Singh. All right reserved
            </small>
          </div>
        </div>
        <div className="flex gap-20 lg:gap-20">
          <nav>
            <h3>Navigation</h3>
            <ul className="flex flex-col gap-3 mt-6">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="text-base lg:text-xl font-normal capitalize"
                >
                  <a
                    href={`#${nav}`}
                    className="text-foreground-dark text-base"
                  >
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3>Socials</h3>
            <ul className="flex flex-col gap-2 mt-6">
              {socials.map((social, index) => (
                <li key={index} className="flex items-center gap-4">
                  <SocialTag social={social} size="size-12" />
                  <p className="w-full max-w-full font-poppins text-base">
                    {social.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <small className="lg:hidden text-sm leading-[170%]">
          Copyright &copy; 2024 Harmanpreet Singh. All right reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
