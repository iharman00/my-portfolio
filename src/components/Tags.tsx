import { urlFor } from "../client";

interface SkillsTagProps {
  name: string;
  icon: any;
}

interface TechStackTagProps {
  name: string;
  icon: any;
}

const SkillsTag = ({ name, icon }: SkillsTagProps) => {
  return (
    <div className="flex flex-col justify-start items-center gap-6 group cursor-pointer">
      {/* <div className="bg-secondary hover:bg-secondary-hover w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center transition-all ease-out duration-300"> */}
      <img src={urlFor(icon).url()} alt={name} className="size-8" />
      {/* </div> */}
      <p className="font-poppins font-normal text-base lg:text-lg max-w-full text-foreground">
        {name}
      </p>
    </div>
  );
};

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

export { SkillsTag, TechStackTag };
