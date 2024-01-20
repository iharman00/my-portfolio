import { urlFor } from "../client";

interface SkillsTagProps {
  name: string;
  icon: any;
}

const SkillsTag = ({ name, icon }: SkillsTagProps) => {
  return (
    <div className="flex flex-col justify-start items-center gap-6 group cursor-pointer">
      <img src={urlFor(icon).url()} alt={name} className="size-8" />
      <p className="font-poppins font-normal text-base lg:text-lg max-w-full text-foreground">
        {name}
      </p>
    </div>
  );
};

interface TechStackTagProps {
  name: string;
  icon: any;
}

const TechStackTag = ({ name, icon }: TechStackTagProps) => {
  return (
    <div className="flex items-center gap-2 w-fit px-4 py-2 group border-border border-2 hover:bg-border rounded-md transition-all ease-out duration-300 cursor-pointer">
      <img src={urlFor(icon).url()} alt={name} className="size-5" />
      <p className="font-poppins font-medium text-base max-w-full group-hover:text-foreground">
        {name}
      </p>
    </div>
  );
};

interface SocialTagProps {
  social: {
    name: string;
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
          alt={social.name}
          className="size-6"
        />
      </div>
    </a>
  );
};

export { SkillsTag, TechStackTag, SocialTag };
