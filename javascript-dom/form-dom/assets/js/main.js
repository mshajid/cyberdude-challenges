// If I Click "Submit Now", It should display on the right div. 

// Todo Logic. 
// Credit Card Number Should be in 16 digits. 
// CVV Number should be 3 digits. 
// First Name & Last Name Required. 
// Primary & Secondary Contact Number Allowed Digits only. 
// Submit Now button add listen. 

// console.dir(document.querySelector('input[type="radio"]').form[0].name)

const creditRadioBtn = document.querySelector("#creditRadio");
const creditCardDivEl = document.getElementById("creditCardDiv");

console.log(creditRadioBtn);


creditRadioBtn.addEventListener("change", () => {
    if(creditRadioBtn.checked) {
        creditCardDivEl.classList.add("bg-[#0075FF]/20","bg-opacity-100")
    }
})

// console.log(nameEl.checked);



// if(nameEl.checked === true) {
//     creditCardDivEl.classList.add("bg-red-500")
// } else {
//     console.log('Not true')
// }
