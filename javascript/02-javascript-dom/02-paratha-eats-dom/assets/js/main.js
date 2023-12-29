import JustValidate from "just-validate";

const validate = new JustValidate("#parathaForm");
const parathaFormEl = document.getElementById("parathaForm");
const storageKey = "order-details";

validate.addField("#fullName", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 2,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);

validate.addField("#contactNum", [
  {
    rule: "required",
  },
  //   {
  //     rule: "minLength",
  //     value: 10,
  //   },
]);

validate.addField("#deliveryAddress", [
  {
    rule: "required",
  },
]);

validate.onSuccess((e) => {
  const myFormData = new FormData(parathaFormEl).entries();
  const formDataObj = Object.fromEntries(myFormData);

  const orderDb = [];

  const getFromLocal = localStorage.getItem(storageKey);
  const convertedArray = JSON.parse(getFromLocal);

  if (convertedArray) {
    convertedArray.push(formDataObj);
    localStorage.setItem(storageKey, JSON.stringify(convertedArray));
  } else {
    orderDb.push(formDataObj);
    localStorage.setItem(storageKey, JSON.stringify(orderDb));
  }

  const customerNameEl = document.getElementById("customerName");
  const addressEl = document.getElementById("address");
  const contactNumEl = document.getElementById("reachNum");
  const parathaTypeEl = document.getElementById("parathaType");
  const paymentTypeEl = document.getElementById("paymentType");

  const storedData = localStorage.getItem(storageKey);
  const allStoredData = JSON.parse(storedData)
  console.log(allStoredData);
  allStoredData.map(function(value){
    customerNameEl.textContent = value.fullName
    addressEl.textContent = value.deliveryAddress
    contactNumEl.textContent = value.contactNum
    parathaTypeEl.textContent = value.parathas
    paymentTypeEl.textContent = value.paymentType
  })
});
