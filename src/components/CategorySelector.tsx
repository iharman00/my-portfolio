interface CategorySelectorProps {
  skills: {
    name: string;
    icon: any;
    skills: {
      name: string;
      icon: any;
    }[];
  }[];
  activeSkills: [string, number] | [null, 0];
  showSkills: (category: string, index: number) => void;
}

const CategorySelector = ({
  skills,
  activeSkills,
  showSkills,
}: CategorySelectorProps) => {
  return (
    <div className="flex justify-between border-border border-2 rounded-lg w-full md:max-w-[50%] md:mx-auto">
      {skills.map((category, index) => (
        <button
          key={index}
          onClick={() => showSkills(category.name, index)}
          className={`${
            activeSkills[1] === index && "bg-border"
          } hover:bg-border first:rounded-l-lg last:rounded-r-lg p-4 transition-all ease-out duration-300 w-full`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
