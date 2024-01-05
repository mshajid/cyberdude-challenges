import data from "../js/data.json";

const nameEls = document.querySelectorAll("#name");
const mainEl = document.getElementById("main")

data.forEach((person) => {
  const containerEl = document.createElement("div");
  containerEl.className =
    "max-w-sm h-[525px] border-2 border-[#D9D9D9] rounded-xl relative";
  containerEl.innerHTML = `
  <div title="${person.name} is online" class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse absolute right-2 top-2 shadow-sm shadow-emerald-400"></div>
  <div class="flex items-center justify-center gap-x-5 py-4">
    <div>
        <img src=${person.image} class="w-20 h-20 rounded-full" />
    </div>
    <div class="space-y-2">
      <div class="leading-3">
        <h2 id="name" class="font-bold text-xl">${person.name}</h2>
        <span id="location" class="text-sm tracking-tight">${person.location}</span>
      </div>
      <div class="leading-3">
        <h2 id="position" class="font-semibold text-sm">${person.role.position}</h2>
        <span class="font-bold">@</span>
        <span id="organization" class="font-light text-xs -tracking-tighter">${person.organization}</span>
      </div>
    </div>
  </div>
  <div
  class="flex items-center border-t-2 mt-8 mb-4 border-b-2 gap-x-3 justify-center"
>
  <div class="flex gap-x-2 border-r-2 px-5 py-5">
    <div class="flex flex-col leading-tight">
      <span id="totalJobs" class="font-bold text-xl">${person.role.totalJobs}</span>
      <span class="font-light text-sm">Total Jobs</span>
    </div>
    <div class="flex flex-col leading-tight">
      <span id="totalHours" class="font-bold text-xl">${person.role.totalHours}</span>
      <span class="font-light text-sm">Total Hours</span>
    </div>
  </div>
  <div>
    <div>
      <span class="font-bold text-2xl">$55.00/hr</span>
      <div class="font-semibold flex gap-x-1">
        <span id="totalHoursWeek">${person.role.hoursPerWeek}</span>
        <span>Hours Per Week</span>
      </div>
    </div>
  </div>
</div>
  <div class="px-10 flex flex-col gap-y-3">
    <div class="flex flex-col flex-wrap">
        <span class="font-bold text-lg">Tech Stacks</span>
        <span class="text-xs font-light">${person.role.techStacks.join(", ")}</span>
    </div>
    <div class="flex flex-col">
    <span class="font-bold text-lg">Other Skills</span>
    <span id="otherSkills" class="text-xs font-light">${person.role.otherSkills.join(", ")}</span>
    </div>
    <div>
      <span class="font-semibold">Ready to Work With</span>
      <span id="name" class="font-semibold">${person.name}</span>
      <span class="font-semibold">?</span>
      <button title="Hire ${person.name}" class="bg-[#A78295] px-2 py-0.5 my-2 rounded-md text-white text-sm">Hire Now</button>
    </div>
  </div>
`;
  mainEl.append(containerEl)
});
