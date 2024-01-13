const quoteEl = document.getElementById("quote");
const quoteBtnEl = document.getElementById("quoteBtn");


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

