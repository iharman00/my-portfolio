import { ReactNode } from "react";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  TailwindcssPlain,
  ReactOriginal,
  ReduxOriginal,
  NodejsOriginal,
  ExpressOriginalWordmark,
  MongodbOriginal,
  GithubOriginal,
  FigmaOriginal,
  IllustratorPlain,
  PhotoshopPlain,
} from "devicons-react";

interface Props {
  children: string;
}

interface SkillsIconsType {
  [key: string]: ReactNode;
}

let SkillsIconSize = "1.4rem";
const SkillIcons: SkillsIconsType = {
  Html: <Html5Original size={SkillsIconSize} />,
  CSS: <Css3Original size={SkillsIconSize} />,
  JavaScript: <JavascriptOriginal size={SkillsIconSize} />,
  Typescript: <TypescriptOriginal size={SkillsIconSize} />,
  Tailwind: <TailwindcssPlain size={SkillsIconSize} />,
  React: <ReactOriginal size={SkillsIconSize} />,
  Redux: <ReduxOriginal size={SkillsIconSize} />,
  Nodejs: <NodejsOriginal size={SkillsIconSize} />,
  Express: <ExpressOriginalWordmark size={SkillsIconSize} />,
  Mongodb: <MongodbOriginal size={SkillsIconSize} />,
  Github: <GithubOriginal size={SkillsIconSize} />,
  Figma: <FigmaOriginal size={SkillsIconSize} />,
  Illustrator: <IllustratorPlain size={SkillsIconSize} />,
  Photoshop: <PhotoshopPlain size={SkillsIconSize} />,
};

const SkillsTag = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 group">
      <div className="bg-secondary hover:bg-secondary-hover w-16 h-16 rounded-full flex justify-center items-center transition-all ease-out duration-300">
        {SkillIcons[children] || children}
      </div>
      <p className="font-poppins font-normal text-sm max-w-full text-foreground">
        {children}
      </p>
    </div>
  );
};

export { SkillsTag };
