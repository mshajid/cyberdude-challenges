import JustValidate from "just-validate";

//* These are for Getting Elements for Modal
const submitVideosEl = document.getElementById("submitVideos");
const modalWrapperEl = document.getElementById("modalWrapper");
const secondWrapperEl = document.getElementById("secondWrapper");

const yUniversityEl = document.getElementById("yuniversity");
const mainEl = document.getElementById("main");
const containerEl = document.getElementById("container");

const fullStackTag = document.getElementById("fullstack");
const personalTag = document.getElementById("personal");
const javaScriptTag = document.getElementById("javascript");
const tailWindTag = document.getElementById("tailwind");
const reactTag = document.getElementById("react");
const careerTag = document.getElementById("career");

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
});

function toFecthAllData() {
  const getData = localStorage.getItem(uniData);
  const parsingData = JSON.parse(getData);

  parsingData.map((value) => {
    const storingElements = []

    const imageURL = value.videoURL.split("v=")[1];
    const API = `https://i.ytimg.com/vi/${imageURL}/maxresdefault.jpg`;

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", API);
    imgEl.classList.add("w-[450px]", "h-auto");
    storingElements.push(imgEl);

    const div1El = document.createElement("div");
    const videoDurationText = document.createTextNode(value.videoDuration);
    div1El.append(videoDurationText);
    div1El.classList.add(
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
    storingElements.push(div1El)

    const videoTitleEl = document.createElement("span");
    videoTitleEl.textContent = value.videoTitle;
    videoTitleEl.classList.add(
      "text-wrap",
      "subpixel-antialiased",
      "font-bold",
      "tracking-tight",
      "text-[17px]"
    );
    storingElements.push(videoTitleEl)

    const channelDetailsWrapper = document.createElement("div");
    channelDetailsWrapper.classList.add("flex", "gap-x-2");
    
    storingElements.forEach((value) => {
      containerEl.append(value)
    })
    
    mainEl.append(containerEl);


  });
}

toFecthAllData();

