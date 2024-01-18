interface Props {
  children: string;
}

const SkillsTag = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 group w-fit">
      <div className="bg-secondary hover:bg-secondary-hover w-16 h-16 rounded-full flex justify-center items-center transition-all ease-out duration-300">
        {children[0]}
      </div>
      <p className="font-poppins font-normal text-sm max-w-full text-foreground">
        {children}
      </p>
    </div>
  );
};

export { SkillsTag };
