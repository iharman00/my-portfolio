import { urlFor } from "../client";

interface SkillsTagProps {
  name: string;
  icon: any;
  link: string;
}

const SkillsTag = ({ name, icon, link }: SkillsTagProps) => {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col justify-start items-center gap-6 group">
        {/* <div className="bg-secondary hover:bg-secondary-hover w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center transition-all ease-out duration-300"> */}
        <img src={urlFor(icon).url()} alt={name} className="w-9 h-9" />
        {/* </div> */}
        <p className="font-poppins font-normal text-base lg:text-lg max-w-full text-foreground">
          {name}
        </p>
      </div>
    </a>
  );
};

export { SkillsTag };
