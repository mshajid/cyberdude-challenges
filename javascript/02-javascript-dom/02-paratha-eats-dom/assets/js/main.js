import JustValidate from "just-validate";

const validate = new JustValidate("#parathaForm");
const parathaFormEl = document.getElementById("parathaForm");
const storageKey = "order-details";

const confirmBtnEl = document.getElementById("confirmBtn");
const cancelBtnEl = document.getElementById("cancelBtn");

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

  alert("Placed the order successfully.");
  parathaFormEl.reset();
  getAllDatas()
});

function getAllDatas() {
  const getStoredData = localStorage.getItem(storageKey);
  const getStoredDataArray = JSON.parse(getStoredData);

  const mainSectionEl = document.getElementById("mainTableSection");

  if (getStoredDataArray && getStoredDataArray.length > 0) {
    mainSectionEl.classList.remove("hidden");
    const tableEl = document.getElementById("orderDataTable");

    const finalHoldValues = [];
  
    getStoredDataArray.map(function (value) {
      const trEl = document.createElement("tr");
      const fullNameEl = document.createElement("td");
      const deliveryEl = document.createElement("td");
      const contactNumber = document.createElement("td");
      const parathaEl = document.createElement("td");
      const paymentEl = document.createElement("td");
      const updateEl = document.createElement("td");
  
      const delBtnEl = document.createElement("button");
  
      fullNameEl.classList.add("px-5", "py-3", "border", "text-[12px]");
      fullNameEl.textContent = value.fullName;
  
      deliveryEl.classList.add("px-5", "py-3", "border", "text-[12px]");
      deliveryEl.textContent = value.deliveryAddress;
  
      contactNumber.classList.add("px-2", "py-3", "border", "text-[12px]");
      contactNumber.textContent = value.contactNum;
  
      parathaEl.classList.add("px-2", "py-3", "border", "text-[12px]");
      parathaEl.textContent = value.parathas;
  
      paymentEl.classList.add("px-2", "py-3", "border", "text-[12px]");
      paymentEl.textContent = value.paymentType;
  
      updateEl.classList.add("px-2", "py-3", "border", "text-[12px]");
      updateEl.append(delBtnEl);
      delBtnEl.textContent = "Cancel Order";
  
      delBtnEl.className =
        "px-2 py-1 rounded bg-red-500 hover:bg-emerald-800 text-white text-xs";
  
      trEl.append(
        fullNameEl,
        deliveryEl,
        contactNumber,
        parathaEl,
        paymentEl,
        updateEl
      );
  
      finalHoldValues.push(trEl);
    });
  
    finalHoldValues.forEach(function (elements) {
      tableEl.append(elements);
    });
  
    const orderCountEl = document.querySelector("#orderCount");
    orderCountEl.textContent = getStoredDataArray.length
  } else {
    mainTableSection.classList.add("hidden");
    console.log("no orders yet");
  }


}

getAllDatas();
