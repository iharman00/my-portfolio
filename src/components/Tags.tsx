import { urlFor } from "../client";

interface SkillsTagProps {
  name: string;
  alt: string;
  icon: any;
}

const SkillsTag = ({ name, icon, alt }: SkillsTagProps) => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 group cursor-pointer">
      <div className="border-border border-2 hover:bg-border transition-all ease-out duration-300 rounded-full p-5">
        <img
          src={urlFor(icon).url()}
          alt={alt}
          style={{ width: "2rem", height: "2rem" }}
        />
      </div>
      <p className="font-poppins font-normal text-base max-w-full text-foreground mt-0">
        {name}
      </p>
    </div>
  );
};

interface TechStackTagProps {
  name: string;
  alt: string;
  icon: any;
}

const TechStackTag = ({ name, icon, alt }: TechStackTagProps) => {
  return (
    <div className="flex items-center gap-2 w-fit px-4 py-2 group border-border border-2 hover:bg-border rounded-md transition-all ease-out duration-300 cursor-pointer">
      <img
        src={urlFor(icon).url()}
        alt={alt}
        style={{ width: "20px", height: "20px" }}
      />

      <p className="font-poppins font-medium text-base text-center max-w-full group-hover:text-foreground mt-0">
        {name}
      </p>
    </div>
  );
};

interface SocialTagProps {
  social: {
    name: string;
    alt: string;
    icon: any;
    link: string;
  };
  size: string;
}

const SocialTag = ({ social, size }: SocialTagProps) => {
  return (
    <a href={social.link} target="_blank">
      <div
        className={`border-border border-2 hover:bg-border ${size} rounded-full flex justify-center items-center transition-all ease-out duration-300`}
      >
        <img
          src={urlFor(social.icon).url()}
          alt={social.alt}
          style={{ width: "24px", height: "24px" }}
        />
      </div>
    </a>
  );
};

export { SkillsTag, TechStackTag, SocialTag };
