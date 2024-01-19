import JustValidate from "just-validate";
import { gsap } from "gsap";

let tl = gsap.timeline();
let bl = gsap.timeline();
let fl = gsap.timeline();


tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})
tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})
tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})
tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})

tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})
tl.to("#starsBubble", {
  duration: 4,
  y: -20
})

tl.to("#starsBubble", {
  duration: 2,
  y: 0
})

bl.to("#bigTexture", {
  duration:3,
  y: -40
})

bl.to("#bigTexture", {
  duration:3,
  y: 0
})
bl.to("#bigTexture", {
  duration:3,
  y: -40
})

bl.to("#bigTexture", {
  duration:3,
  y: 0
})
bl.to("#bigTexture", {
  duration:3,
  y: -40
})

bl.to("#bigTexture", {
  duration:3,
  y: 0
})
bl.to("#bigTexture", {
  duration:3,
  y: -40
})

bl.to("#bigTexture", {
  duration:3,
  y: 0
})
bl.to("#bigTexture", {
  duration:3,
  y: -40
})

bl.to("#bigTexture", {
  duration:3,
  y: 0
})

fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})
fl.to("#formDots", {
  duration: 2,
  y: -10
})

fl.to("#formDots", {
  duration: 2,
  y: 0
})



//* These are for Getting Elements for Modal
const submitVideosEl = document.getElementById("submitVideos");
const modalWrapperEl = document.getElementById("modalWrapper");
const secondWrapperEl = document.getElementById("secondWrapper");

const yUniversityEl = document.getElementById("yuniversity");
const mainEl = document.getElementById("main");
const containerEl = document.getElementById("container");

const videoUploadEl = document.getElementById("videosUpload");
const contentHoursEl = document.getElementById("contentHours");
const creatorsCountEl = document.getElementById("creatorsCount");

const uniData = "YUniversity Data";

//* Opens the modal
submitVideosEl.addEventListener("click", () => {
  modalWrapperEl.classList.remove("hidden");
});

//* Closes the modal when clicked outside the body!
secondWrapperEl.addEventListener("click", (e) => {
  if (e.target === secondWrapperEl) {
    modalWrapperEl.classList.add("hidden");
  }
});

// * Validation Starts Here
const validate = new JustValidate("#yuniversity");

validate.addField("#videoTitle", [
  {
    rule: "required",
  },
]);

validate.addField("#videoUrl", [
  {
    rule: "required",
  },
]);

validate.addField("#videoType", [
  {
    rule: "required",
  },
]);

validate.addField("#channelName", [
  {
    rule: "required",
  },
]);

validate.addField("#instructor", [
  {
    rule: "required",
  },
]);

validate.addField("#videoDuration", [
  {
    rule: "required",
  },
]);
// * Validation Ends Here

validate.onSuccess((e) => {
  const myFormData = new FormData(yUniversityEl);
  const iterateData = Object.fromEntries(myFormData.entries());

  const database = [];

  const fetchDataFromLocalStorage = localStorage.getItem(uniData);
  const convertFetchedData = JSON.parse(fetchDataFromLocalStorage);

  if (convertFetchedData) {
    convertFetchedData.push(iterateData);
    localStorage.setItem(uniData, JSON.stringify(convertFetchedData));
  } else {
    database.push(iterateData);
    localStorage.setItem(uniData, JSON.stringify(database));
  }

  setTimeout(() => {
    modalWrapperEl.classList.add("hidden");
  }, 2000);
  toFecthAllData();
});

function toFecthAllData() {
  const getData = localStorage.getItem(uniData);
  const parsingData = JSON.parse(getData);

  mainEl.innerHTML = "";

  videoUploadEl.textContent = parsingData.length;

  const channelNameInput = yUniversityEl.elements.channelName;
  const newArr = [];

  // If the channelName and inputChannel Name not equals then push it to the newArr array

  const filteredChannels = parsingData.filter((channel) => {
    if (channel.channelName.value !== channelNameInput.value) {
      newArr.push(channel.channelName);
    }
  });

  function removeDuplicates(arr) {
    const fnData = newArr.filter(
      (value, index) => arr.indexOf(value) === index
    );
    creatorsCountEl.textContent = fnData.length;
  }

  removeDuplicates(newArr);

  //[v=], []
  parsingData.map((value) => {
    const imageURL = value.videoURL.split("v=")[1];
    const API = `https://i.ytimg.com/vi/${imageURL}/maxresdefault.jpg`;

    const mainDivEl = document.createElement("div");

    mainDivEl.classList.add(
      "relative",
      "max-w-sm",
      "h-auto",
      "leading-5",
      "flex",
      "flex-col",
      "gap-y-1"
    );

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", API);
    imgEl.classList.add("w-[450px]", "h-auto", "rounded");

    const videoDurationEl = document.createElement("div");
    videoDurationEl.classList.add(
      "bg-black",
      "text-white",
      "w-fit",
      "px-3",
      "py-1",
      "rounded-md",
      "absolute",
      "top-2",
      "left-2",
      "font-bold",
      "text-xs",
      "shadow-2xl",
      "shadow-black",
      "border",
      "border-white"
    );
    videoDurationEl.textContent = value.videoDuration;

    const videoTitleEl = document.createElement("span");
    videoTitleEl.classList.add(
      "text-balance",
      "subpixel-antialiased",
      "font-bold",
      "tracking-tight",
      "text-[15px]"
    );
    videoTitleEl.textContent = value.videoTitle;

    const channelNameWrapper = document.createElement("div");
    channelNameWrapper.classList.add("flex", "gap-x-2");
    const channelName = document.createElement("span");
    channelName.classList.add("text-xs");
    channelName.textContent = value.channelName;
    const instructor = document.createElement("span");
    instructor.textContent = value.instructor;
    instructor.classList.add("text-xs", "font-bold");
    channelNameWrapper.append(channelName, instructor);

    const contentTypeEl = document.createElement("div");
    contentTypeEl.classList.add(
      "bg-black",
      "border-red-500",
      "text-white",
      "text-[9px]",
      "px-2",
      "rounded",
      "w-fit"
    );
    contentTypeEl.textContent = value.contentType;

    const watchAnchorEl = document.createElement("a");
    watchAnchorEl.classList.add(
      "bg-[#242038]",
      "my-3",
      "text-white",
      "px-2",
      "text-center",
      "py-1.5",
      "rounded-md",
      "tracking-wide",
      "font-semibold"
    );
    watchAnchorEl.setAttribute("href", value.videoURL);
    watchAnchorEl.setAttribute("target", "_blank");
    watchAnchorEl.textContent = "Watch Here";

    mainDivEl.append(
      imgEl,
      videoDurationEl,
      videoTitleEl,
      channelNameWrapper,
      contentTypeEl,
      watchAnchorEl
    );
    mainEl.append(mainDivEl);
  });
}

toFecthAllData();
