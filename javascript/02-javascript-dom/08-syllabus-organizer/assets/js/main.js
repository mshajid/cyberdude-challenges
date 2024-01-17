const submitVideosEl = document.getElementById("submitVideos");
const modalWrapperEl = document.getElementById("modalWrapper");
const sectionWrapperEl = document.getElementById("sectionWrapper");
const secondWrapperEl = document.getElementById("secondWrapper");


// Opens the modal
submitVideosEl.addEventListener("click", () => {
    modalWrapperEl.classList.remove("hidden");
})

// Closes the modal when clicked outside the body!
secondWrapperEl.addEventListener("click",(e) => {
   if(e.target === secondWrapperEl) {
    modalWrapperEl.classList.add("hidden")
   }
})

