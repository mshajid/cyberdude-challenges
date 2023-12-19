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
const cardNumberInput = document.getElementById("card"); // CreditCard Number Input
const cvvInput = document.getElementById("cvv"); // CVV Number Input
const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName");

const submitBtnEl = document.querySelector("button"); // Main Submit Button

submitBtnEl.addEventListener("click", () => {
  const cardNumberLength = cardNumberInput.value.length;
  if (cardNumberLength < 16 || cardNumberLength > 16) {
    console.log("Please Enter The Valid Card Number");
  } else {
    console.log(`"Entered the correct card number" ${cardNumberInput.value}`);
  }

  const cvvLength = cvvInput.value.length;
  if (cvvLength < 3 || cvvLength > 3) {
    console.log("Incorrect CVV Number");
  } else {
    console.log(`'Entered the correct CVV number' ${cvvInput.value}`);
  }

  // FirstName & Last Name minimum length (2) && maximum length (15)
  const firstNameLength = firstNameInput.value.length
  const lastNameLength = lastNameInput.value.length

  if(firstNameLength < 2 || firstNameLength > 15) {
    console.log("Enter A Correct Name")
  } else {
    console.log(`Your First Name is ${firstNameInput.value}`);
  }

  if(lastNameLength < 2 || lastNameLength > 15) {
    console.log("Enter A Correct Last Name");
  } else {
    console.log(`Your Last Name is ${lastNameInput.value}`);
  }

});



// To Indicate Which Payment Method You Prefer
//   bg-[#0075FF]/20",
creditRadioBtn.addEventListener("change", (e) => {
  if (creditRadioBtn.checked) {
    payPalDivEl.classList.remove("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg");
    creditCardDivEl.classList.add("bg-[#0075FF]/20","border-[#0075FF]", "shadow-lg");
    console.log(e.target.checked)
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
