import mySelf from "../data/myself.json";

const Education = () => {
  const mySelfComponent = mySelf.map((value) => {
    return (
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1">
            <div className="text-xl sm:text-2xl font-bold text-[#89C2D9]">
              {value.education.courses.course5.courseTitle}
            </div>
            <div className="text-xs text-gray-300 bg-black w-fit h-fit px-1 py-0.5 rounded-md font-semibold">
              <span>{value.education.courses.course5.courseYear}</span>
            </div>
          </div>
          <div className="max-w-md text-sm text-white tracking-wide">
            {value.education.courses.course5.courseDescription}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1">
            <div className="text-xl sm:text-2xl font-bold text-[#89C2D9]">
              {value.education.courses.course4.courseTitle}
            </div>
            <div className="text-xs text-gray-300 bg-black w-fit h-fit px-1 py-0.5 rounded-md font-semibold">
              <span>{value.education.courses.course4.courseYear}</span>
            </div>
          </div>
          <div className="max-w-md text-sm text-white tracking-wide">
            {value.education.courses.course4.courseDescription}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1">
            <div className="text-xl sm:text-2xl font-bold text-[#89C2D9]">
              {value.education.courses.course3.courseTitle}
            </div>
            <div className="text-xs text-gray-300 bg-black w-fit h-fit px-1 py-0.5 rounded-md font-semibold">
              <span>{value.education.courses.course3.courseYear}</span>
            </div>
          </div>
          <div className="max-w-md text-sm text-white tracking-wide">
            {value.education.courses.course3.courseDescription}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1">
            <div className="text-xl sm:text-2xl font-bold text-[#89C2D9]">
              {value.education.courses.course2.courseTitle}
            </div>
            <div className="text-xs text-gray-300 bg-black w-fit h-fit px-1 py-0.5 rounded-md font-semibold">
              <span>{value.education.courses.course2.courseYear}</span>
            </div>
          </div>
          <div className="max-w-md text-sm text-white tracking-wide">
            {value.education.courses.course2.courseDescription}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1">
            <div className="text-xl sm:text-2xl font-bold text-[#89C2D9]">
              {value.education.courses.course1.courseTitle}
            </div>
            <div className="text-xs text-gray-300 bg-black w-fit h-fit px-1 py-0.5 rounded-md font-semibold">
              <span>{value.education.courses.course1.courseYear}</span>
            </div>
          </div>
          <div className="max-w-md text-sm text-white tracking-wide">
            {value.education.courses.course1.courseDescription}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-10">
      <div className="text-3xl tracking-wide font-bold text-white py-5">
        Educational Background
      </div>
      <div>{mySelfComponent}</div>
    </div>
  );
};

export default Education;
