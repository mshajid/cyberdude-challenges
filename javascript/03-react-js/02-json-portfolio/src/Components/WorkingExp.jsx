import mySelf from "../data/myself.json";

const WorkingExp = () => {
  const mySelfComponent = mySelf.map((value) => {
    return (
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1">
            <div className="text-[17px] font-light text-white">
              {value.workExperience.cyberDude.jobTitle}
            </div>  
            <div className="text-xl lg:text-2xl font-bold text-[#89C2D9] sm:leading-5">
              {value.workExperience.cyberDude.company}
            </div>
          </div>
          <div className="flex gap-x-2 items-center text-[#A9D6E5] text-xs font-normal">
            <div>{value.workExperience.cyberDude.startDuration}</div>
            <span>-</span>
            <span>Present</span>
          </div>
        </div>
        <ul className="flex flex-col text-[13px] text-white tracking-wide max-w-md text-balance list-disc px-5 gap-y-2">
          <li>{value.workExperience.cyberDude.description.firstPoint}</li>
          <li>{value.workExperience.cyberDude.description.secondPoint}</li>
        </ul>
        <div className="flex justify-start gap-x-2 items-start">
          <div className="flex items-center gap-x-2">
            <div className="font-bold text-lg text-white">Skills</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="max-w-md">
            <div className="text-white flex gap-2 flex-wrap">
              {value.workExperience.cyberDude.skills.map((skill) => {
                return (
                  <span className="hover:bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-0.5 text-xs bg-[#01497C] rounded-md">
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-10">
      <h2 className="text-3xl tracking-wide font-bold text-white py-5">
        Working Experience
      </h2>
      <div>{mySelfComponent}</div>
    </div>
  );
};

export default WorkingExp;
