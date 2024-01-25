const ipHolderEl = document.getElementById("ipHolder");
console.log(ipHolderEl);

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(this.readyState === 4) {
//         if(this.status === 200){
//             ipHolderEl.textContent = xhr.responseText;
//         }
//     }
// }

// xhr.open("GET", "https://ipv4.icanhazip.com/")
// xhr.send();

const API = "https://ipv4.icanhazip.com/"
const finalURI = "https://api.codetabs.com/v1/proxy?quest=your_blocked_url"

fetch(API, {
    mode: "no-cors"
})
.then(value => console.log(value));



