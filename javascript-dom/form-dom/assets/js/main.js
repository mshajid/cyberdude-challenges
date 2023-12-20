// If I Click "Submit Now", It should display on the right div.

// Todo Logic.
// * Credit Card Number Should be in 16 digits.
// * CVV Number should be 3 digits.
// * First Name & Last Name Required.
// * Primary & Secondary Contact Number Allowed Digits only.
// * Submit Now button add listen.

const creditRadioBtn = document.querySelector("#creditRadio");
const creditCardDivEl = document.getElementById("creditCardDiv");
const payPalRadioBtn = document.getElementById("payPalRadioBtn");
const payPalDivEl = document.getElementById("payPalDiv");
const cardNumberInput = document.getElementById("card"); // CreditCard Number Input
const cvvInput = document.getElementById("cvv"); // CVV Number Input
const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName");


// To Indicate Which Payment Method You Prefer
//   bg-[#0075FF]/20",
creditRadioBtn.addEventListener("change", (e) => {
  if (creditRadioBtn.checked) {
    payPalDivEl.classList.remove("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg");
    creditCardDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]", "shadow-lg");
    console.dir(e.target)
  }

});

payPalRadioBtn.addEventListener("change", (e) => {
  if (payPalRadioBtn.checked) {
    // payPalRadioBtn.setAttribute("checked", "");
    creditCardDivEl.classList.remove("bg-[#0075FF]/20","border-[#0075FF]", "shadow-lg");
    payPalDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]", "shadow-lg");
    console.log(e.target.checked)
  }
});
