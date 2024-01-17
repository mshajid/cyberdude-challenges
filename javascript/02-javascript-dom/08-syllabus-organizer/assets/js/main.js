import JustValidate from "just-validate";

//* These are for Getting Elements for Modal
const submitVideosEl = document.getElementById("submitVideos");
const modalWrapperEl = document.getElementById("modalWrapper");
const secondWrapperEl = document.getElementById("secondWrapper");

const yUniversityEl = document.getElementById("yuniversity");

const uniData = "YUniversity Data"


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

validate.addField("#videoDuration", [{
    rule: "required",
}])
// * Validation Ends Here

validate.onSuccess((e) => {
    const myFormData = new FormData(yUniversityEl)
    const iterateData = Object.fromEntries(myFormData.entries());

    const database = [];

    const fetchDataFromLocalStorage = localStorage.getItem(uniData); 
    const convertFetchedData = JSON.parse(fetchDataFromLocalStorage);
    console.log(convertFetchedData);
    
    if(convertFetchedData) {
        convertFetchedData.push(iterateData);
        localStorage.setItem(uniData, JSON.stringify(convertFetchedData))
    } else { 
        database.push(iterateData)
        localStorage.setItem(uniData, JSON.stringify(database));
    }
})


