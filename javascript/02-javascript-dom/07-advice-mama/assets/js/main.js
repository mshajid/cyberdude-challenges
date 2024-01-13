const quoteEl = document.getElementById("quote");
const quoteBtnEl = document.getElementById("quoteBtn");
const aboutSectionEl = document.getElementById("about");
const aboutAuthorEl = document.getElementById("aboutAuthor");

const modalSectionEl = document.getElementById("modalSection");
console.log(modalSectionEl);

console.log(aboutSectionEl)
console.log(aboutAuthorEl);

const API = "https://api.adviceslip.com/advice";

quoteBtnEl.addEventListener("click", () => {
    window.location.reload()
})

const fetchAdvice = async () => {
    const fetchURL = await fetch(API);
    const bodyURL = await fetchURL.json();
    return bodyURL
}

const fetchData = await fetchAdvice()

quoteEl.textContent = fetchData.slip.advice;

aboutAuthorEl.addEventListener("click", () => {
    aboutSectionEl.classList.remove("hidden");
})

modalSectionEl.addEventListener("click", (e) => {
    if(modalSectionEl === e.target) {
        aboutSectionEl.classList.add("hidden")
    }
})


