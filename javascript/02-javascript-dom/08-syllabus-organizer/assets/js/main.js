import JustValidate from "just-validate";

//* These are for Getting Elements for Modal
const submitVideosEl = document.getElementById("submitVideos");
const modalWrapperEl = document.getElementById("modalWrapper");
const sectionWrapperEl = document.getElementById("sectionWrapper");
const secondWrapperEl = document.getElementById("secondWrapper");

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
