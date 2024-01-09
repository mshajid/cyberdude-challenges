const mainEl = document.getElementById("main");

const names = [
  "mshajid",
  "muthukumarimoorthi",
  "muthuakalya",
  "bearcin46",
  "esakki2104prsnl",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "mushkir",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
];

names.forEach((userName) => {
  const api = `https://api.github.com/users/${userName}`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.createElement("div");
      containerEl.innerHTML = `
        <div class="border-2 border-[#424769] bg-[#424769]/35 rounded-md max-w-xs py-5">
        <div class="flex flex-col gap-y-4 px-8">
          <div class="relative flex justify-center">
            <img src="${data.avatar_url}" class="size-32 rounded-full object-cover border-4 border-black" />
            <div class="bg-black w-fit text-white text-[10px] px-2 py-0.5 items-center rounded-xl flex gap-x-1 absolute bottom-[-2px]">
              <img src="./images/GitHub.png" />
              <span>${data.login}</span>
            </div>
          </div>
          <div class="flex justify-center items-center flex-col text-white">
            <h2 class="text-2xl font-bold">${data.name}</h2>
            <span class="text-xs font-light">${data.location}</span>
          </div>
          <div class="flex justify-center items-center gap-x-2">
            <div class="text-sm  text-white">
              <span class="font-semibold">${data.followers}</span>
              <span class="font-light">Followers</span>
            </div>
            <div class="text-sm text-white">
              <span class="font-semibold">${data.public_repos}</span>
              <span class="font-light">Public Repositories</span>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button class="bg-black text-white px-5 py-2 rounded-full text-sm"><a href="https://github.com/${data.login}?tab=repositories">View all repositores</a></button>
          </div>
        </div>
      </div>
        `;
       mainEl.append(containerEl); 
    });
});
