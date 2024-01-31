import mySelf from "../data/myself.json";

const Skills = () => {
  const currentSkills = mySelf.map((Skill) => {
    return (
      <div className="flex flex-wrap gap-5 text-white text-sm mt-5">
        {Skill.currentSkills.map((stack) => {
          return (
            <div className="flex flex-col gap-y-1 items-center justify-center">
              <img className="size-14" src={stack.logo} />
              <div>{stack.stacks}</div>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <div className="mt-10 py-5">
      <h2 className="text-2xl text-white font-bold pb-3">
        Current Stacks (Loved to Learn)
      </h2>
      <div className="max-w-lg">
        <div>{currentSkills}</div>
      </div>
      {/* <div className="mt-5">
        <small className="text-gray-300 tracking-wide">
          I possessed these skills and some of them will learn in the future.
        </small>
      </div> */}
    </div>
  );
};

export default Skills;
