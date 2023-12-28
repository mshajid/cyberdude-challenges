import JustValidate from "just-validate";

const validate = new JustValidate("#parathaForm");
const parathaFormEl = document.getElementById("parathaForm");
const storageKey = "order-details"

const radioBtns = document.querySelectorAll("#parathas");
console.log(radioBtns);

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

validate.addField("#parathaQty", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 1,
  },
  {
    rule: "maxLength",
    value: 3,
  },
]);

validate.onSuccess((e) => {
    const myFormData = new FormData(parathaFormEl).entries();
    const formDataObj = Object.fromEntries(myFormData);

    const orderDb = [];

    const getFromLocal = localStorage.getItem(storageKey);
    const convertedArray = JSON.parse(getFromLocal); 

    if(convertedArray) {
        convertedArray.push(formDataObj);
        localStorage.setItem(storageKey, JSON.stringify(convertedArray))
    } else {
        orderDb.push(formDataObj)
        localStorage.setItem(storageKey, JSON.stringify(orderDb))
    }
})

