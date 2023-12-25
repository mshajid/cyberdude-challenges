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
const validationDot = document.getElementById("validationDot")
const lastNameDot = document.getElementById("lastNameIndicator")
const deliveryDot = document.getElementById("deliveryDot")
const emailDot = document.getElementById("emailDot");
const primaryDot = document.getElementById("primaryDot")
const secondaryDot = document.getElementById("secondaryDot");

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
const fullName = allDivEl[36].children[0];
const fullAddress = allDivEl[36].children[1];
const contactNumber = allDivEl[36].children[2];
const verifiedEmail = allDivEl[36].children[3];

// ! Validations Starts Here.
const handleCheckForm = (event) => {
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

  const formData = new FormData(checkOutForm); 
  const formObj = formData.entries();
  const formFinalObj = Object.fromEntries(formObj);
  const convertJSON = JSON.stringify(formFinalObj);
  console.log(convertJSON); // Convereted to JSON String Format..
}

checkOutForm.addEventListener("submit", handleCheckForm);
checkOutForm.addEventListener("formdata", () => {
})
// ! Validation Ends Here

const firstNameIndicator = (e) => {
  if(true){
    validationDot.classList.remove("hidden")
    firstName.classList.add("border-green-500","shadow-md")
  }
}

const secondNameIndicator = (e) => {
  if(true) {
    lastNameDot.classList.remove("hidden");
    lastName.classList.add("border-green-500", "shadow-md");
  }
}

const deliveryIndicator = (e) => {
  if(true){
    deliveryDot.classList.remove("hidden");
    delivery.classList.add("border-green-500", "shadow-md");
  }
}

const emailIndicator = (e) => {
  if(true){
    emailDot.classList.remove("hidden");
    email.classList.add("border-green-500", "shadow-md");
  }
}

const primaryIndicator = (e) => {
  if(true) {
    primaryDot.classList.remove("hidden");
    primary.classList.add("border-green-500", "shadow-md");
  }
}

const secondaryIndicator = (e) => {
  if(true) {
    secondaryDot.classList.remove("hidden");
    secondary.classList.add("border-green-500", "shadow-md");
  }
}

const handleInputGreet = () => {
  greetNameEl.textContent = firstName.value;
}

const handleCreditRadioBtn = (e) => {
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
  }
}

const handlePayPalRadioBtn = (e) => {
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
  }
}

const handleGreet = (event) => {
  event.preventDefault();
  alert("Thank you");
}

const handlePaste = (event) => {
  event.preventDefault();
  alert("You cannot paste credit card numbers.")
}

// To Indicate Which Payment Method You Prefer
creditRadioBtn.addEventListener("change", handleCreditRadioBtn);
payPalRadioBtn.addEventListener("change", handlePayPalRadioBtn);

// Indication Event Listeners
firstName.addEventListener("change", firstNameIndicator)
lastName.addEventListener("change", secondNameIndicator);
delivery.addEventListener("change", deliveryIndicator)
email.addEventListener("change", emailIndicator);
primary.addEventListener("change", primaryIndicator);
secondary.addEventListener("change", secondaryIndicator)

// Lists of Event Listeners. 

firstName.addEventListener("input", handleInputGreet);
verifyForm.addEventListener("submit", handleGreet);

// Disable Paste Event Listeners.
card.addEventListener("paste", handlePaste);
cvvNumber.addEventListener("paste", handlePaste);

