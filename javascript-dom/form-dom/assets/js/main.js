// If I Click "Submit Now", It should display on the right div.

// Todo Logic. (These Are My Fiction Logics Only)
// * Credit Card Number Should be in 16 digits.
// * CVV Number should be 3 digits.
// * First Name & Last Name Required.
// * Primary & Secondary Contact Number Allowed Digits only.
// * Submit FORM Now button add listen.
// * Hello Name Should Implied With Input Event Type.
// * Cannot Paste Value to Credit Card Number

const creditRadioBtn = document.querySelector("#creditRadio");
const creditCardDivEl = document.getElementById("creditCardDiv");
const payPalRadioBtn = document.getElementById("payPalRadioBtn");
const payPalDivEl = document.getElementById("payPalDiv");
const greetNameEl = document.getElementById("greetName");
const verifyBtnEl = document.getElementById("verifyBtn");

const checkOutForm = document.forms[0];
const verifyForm = document.forms[1];

const {
  card,
  cvvNumber,
  firstName,
  lastName,
  delivery,
  email,
  primary,
  secondary,
} = checkOutForm.elements;

const allDivEl = document.querySelectorAll("div");
const fullName = allDivEl[30].children[0];
const fullAddress = allDivEl[30].children[1];
const contactNumber = allDivEl[30].children[2];
const verifiedEmail = allDivEl[30].children[3];

checkOutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (card.value.length < 16 || card.value.length > 16) {
    alert("Please Enter the Correct Credit Card Number");
  } else {
    console.log("You've been successfully authenitcated");
  }

  if (cvvNumber.value.length < 3 || cvvNumber.value.length > 3) {
    alert("Please Enter the Correct CVV Number");
  } else {
    console.log("You've been successfully authenticated CVV");
  }

  if (firstName.value.length < 2 || firstName.value.length > 15) {
    console.log("Kindly, Enter Your Proper First Name");
  } else {
    fullName.textContent = firstName.value;
    greetNameEl.textContent = firstName.value;
  }

  if (lastName.value.length < 2 || lastName.value.length > 15) {
    console.log("Kindly, Enter Your Proper Last Name");
  } else {
    console.log("Nice last name :D");
  }

  if (delivery.value.length < 2 || delivery.value.length > 40) {
    console.log("Kindly, Enter Your Correct Address To Deliver");
  } else {
    fullAddress.textContent = delivery.value;
  }

  if (primary.value.length < 10 || primary.value.length > 10) {
    console.log("Enter your correct phone number");
  } else {
    contactNumber.textContent = primary.value;
  }

  if (email.value === "") {
    alert("email cannot be empty");
  } else {
    verifiedEmail.textContent = email.value;
  }
});

firstName.addEventListener("input", (event) => {
  greetNameEl.textContent = firstName.value;
});

// To Indicate Which Payment Method You Prefer
creditRadioBtn.addEventListener("change", (e) => {
  if (creditRadioBtn.checked) {
    payPalDivEl.classList.remove(
      "bg-[#0075FF]/20",
      "border-[#0075FF]",
      "shadow-lg"
    );
    creditCardDivEl.classList.add(
      "bg-[#0075FF]/20",
      "border-[#0075FF]",
      "shadow-lg"
    );
    console.dir(e.target);
  }
});

payPalRadioBtn.addEventListener("change", (e) => {
  if (payPalRadioBtn.checked) {
    // payPalRadioBtn.setAttribute("checked", "");
    creditCardDivEl.classList.remove(
      "bg-[#0075FF]/20",
      "border-[#0075FF]",
      "shadow-lg"
    );
    payPalDivEl.classList.add(
      "bg-[#0075FF]/20",
      "border-[#0075FF]",
      "shadow-lg"
    );
    console.log(e.target.checked);
  }
});

verifyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you");
});

const handlePaste = (event) => {
  event.preventDefault();
  alert("You cannot paste credit card numbers.")
}

card.addEventListener("paste", handlePaste);
cvvNumber.addEventListener("paste", handlePaste);