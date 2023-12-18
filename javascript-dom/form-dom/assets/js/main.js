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
const payPalRadioBtn = document.getElementById("payPalRadioBtn");
const payPalDivEl = document.getElementById("payPalDiv");

// console.log(payPalDivEl, payPalRadioBtn);

creditRadioBtn.addEventListener("change", (e) => {
    if(creditRadioBtn.checked) {
        payPalDivEl.classList.remove("bg-[#0075FF]/20","border-[#0075FF]")
        creditCardDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]")
    }
})

payPalRadioBtn.addEventListener("change", (e) => {
    if(payPalRadioBtn.checked) {
        creditCardDivEl.classList.remove("bg-[#0075FF]/20","border-[#0075FF]")
        payPalDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]")
    }
});


// if(payPalRadioBtn.checked) {
//     payPalDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]")
//     creditCardDivEl.classList.remove("bg-[#0075FF]/20", "border-[#0075FF]")
// }