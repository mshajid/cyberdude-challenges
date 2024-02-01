const Projects = (data) => {
  const myData = data.data[0].projects;
  const finalData = myData.map((value) => {
    return (
      <div className="my-5 flex flex-col gap-y-2 text-white">
        <img
          className="w-80 h-60 object-cover rounded-md border-2 border-[#89C2D9]"
          src={value.featuredImg}
        />
        <div>{value.projectTitle}</div>
        <div className="flex gap-x-2">
          {value.techStacks.map((stack) => {
            return (
              <span className="bg-[#89C2D9] px-2 py-0.5 text-xs text-black rounded-md">
                {stack}
              </span>
            );
          })}
        </div>
        <a
          className="text-center my-2 bg-[#01497C]/40 hover:bg-[#01497C] px-2 py-0.5 text-white rounded-md"
          target="_blank"
          href={value.projectURL}
        >
          Check Live Project
        </a>
      </div>
    );
  });

  return (
    <div className="mt-10">
      <h2 className="tracking-wide pb-5 text-2xl font-bold text-white">
        Projects That I Built During Internship
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2">{finalData}</div>
    </div>
  );
};

export default Projects;
